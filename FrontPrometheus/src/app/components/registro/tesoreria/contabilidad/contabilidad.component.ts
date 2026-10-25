import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { Contabilidad, ETIQUETA_TIPO, LineaAsiento, TesoreriaService } from '../../../../shared/services/tesoreria.service';

/** Back Office · Contabilidad: plan de cuentas, libro de asientos de operaciones liquidadas y balance de comprobación. */
const fmtIa = (v: number | null | undefined) => Math.abs(Number(v ?? 0)).toLocaleString('es-PE', { maximumFractionDigits: 2 });

@Component({
  selector: 'app-contabilidad',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, DatePickerComponent, LoaderComponent],
  templateUrl: './contabilidad.component.html',
  styleUrl: './contabilidad.component.scss',
})
export class ContabilidadComponent implements OnInit, OnDestroy {
  private readonly api = inject(TesoreriaService);
  private readonly asistente = inject(AsistenteIaService);
  readonly etiquetaTipo = ETIQUETA_TIPO;

  desde: string | null = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
  hasta: string | null = null;
  datos: Contabilidad | null = null;
  cargando = false;
  error = '';
  vista: 'libro' | 'balance' | 'plan' = 'libro';

  ngOnInit(): void {
    this.cargar();
    this.asistente.registrar({
      clave: 'back-contabilidad',
      modulo: 'Back Office · Contabilidad',
      titulo: 'Contabilidad de tesorería',
      interpretacion: 'Asientos generados al liquidar operaciones, balance de comprobación y plan de cuentas del período elegido.',
      opciones: [
        { etiqueta: '¿Cuadra el balance?', responder: () => {
          const b = this.balance;
          if (!b.length) return 'No hay asientos en el período.';
          const d = b.reduce((s, r) => s + r.debe, 0), h = b.reduce((s, r) => s + r.haber, 0);
          return this.balanceCuadra ? `Sí: debe ${fmtIa(d)} = haber ${fmtIa(h)} (sumas de todas las monedas) en ${this.datos?.asientos.length} asientos.`
            : `No cuadra: debe ${fmtIa(d)} vs haber ${fmtIa(h)}, diferencia ${fmtIa(d - h)}. Revise los asientos del período.`;
        } },
        { etiqueta: 'Cuentas con más movimiento', responder: () => {
          const top = [...this.balance].sort((a, b) => (b.debe + b.haber) - (a.debe + a.haber)).slice(0, 5);
          return top.length ? top.map(r => `${r.cuenta} ${r.descripcion} (${r.moneda}): debe ${fmtIa(r.debe)}, haber ${fmtIa(r.haber)}, saldo ${r.saldo < 0 ? '−' : ''}${fmtIa(r.saldo)}`).join('; ') + '.'
            : 'No hay movimientos en el período.';
        } },
      ],
      placeholder: 'Pregunte, p. ej. ¿qué asiento genera la compra de un bono?',
      datos: () => ({ desde: this.desde, hasta: this.hasta, balance: this.balance, plan: this.datos?.plan ?? [],
        asientos: (this.datos?.asientos ?? []).slice(0, 15).map(a => ({ operacion: a.operacion.codigo, tipo: a.operacion.tipo, lado: a.operacion.lado, lineas: a.lineas })) }),
    });
  }

  ngOnDestroy(): void {
    this.asistente.liberar('back-contabilidad');
  }

  cargar() {
    this.cargando = true;
    this.api.contabilidad(this.desde, this.hasta).subscribe({
      next: d => { this.datos = d; this.cargando = false; },
      error: (e: HttpErrorResponse) => { this.error = mensajeDeError(e); this.cargando = false; },
    });
  }

  suma(lineas: LineaAsiento[], campo: 'debe' | 'haber'): number {
    return lineas.reduce((s, l) => s + l[campo], 0);
  }

  /** Balance de comprobación: sumas de debe y haber por cuenta y moneda en el período. */
  get balance(): { cuenta: string; descripcion: string; moneda: string; debe: number; haber: number; saldo: number }[] {
    const m = new Map<string, { cuenta: string; descripcion: string; moneda: string; debe: number; haber: number; saldo: number }>();
    for (const a of this.datos?.asientos ?? []) {
      for (const l of a.lineas) {
        const k = l.cuenta + '|' + l.moneda;
        const r = m.get(k) ?? { cuenta: l.cuenta, descripcion: l.descripcion, moneda: l.moneda, debe: 0, haber: 0, saldo: 0 };
        r.debe += l.debe;
        r.haber += l.haber;
        r.saldo = r.debe - r.haber;
        m.set(k, r);
      }
    }
    return [...m.values()].sort((a, b) => a.cuenta.localeCompare(b.cuenta) || a.moneda.localeCompare(b.moneda));
  }

  get balanceCuadra(): boolean {
    const b = this.balance;
    return Math.abs(b.reduce((s, r) => s + r.debe, 0) - b.reduce((s, r) => s + r.haber, 0)) < 0.01;
  }
}
