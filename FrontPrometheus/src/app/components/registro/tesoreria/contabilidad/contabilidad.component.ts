import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { Contabilidad, ETIQUETA_TIPO, LineaAsiento, TesoreriaService } from '../../../../shared/services/tesoreria.service';

/** Back Office · Contabilidad: plan de cuentas, libro de asientos de operaciones liquidadas y balance de comprobación. */
@Component({
  selector: 'app-contabilidad',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, DatePickerComponent, LoaderComponent],
  templateUrl: './contabilidad.component.html',
  styleUrl: './contabilidad.component.scss',
})
export class ContabilidadComponent implements OnInit {
  private readonly api = inject(TesoreriaService);
  readonly etiquetaTipo = ETIQUETA_TIPO;

  desde: string | null = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
  hasta: string | null = null;
  datos: Contabilidad | null = null;
  cargando = false;
  error = '';
  vista: 'libro' | 'balance' | 'plan' = 'libro';

  ngOnInit(): void {
    this.cargar();
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
