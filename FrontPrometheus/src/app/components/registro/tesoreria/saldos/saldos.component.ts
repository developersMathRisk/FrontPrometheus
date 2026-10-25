import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { CuentaBancaria, Operacion, TesoreriaService } from '../../../../shared/services/tesoreria.service';

/**
 * Front Office · Saldos bancarios: disponible por banco y moneda, y el compromiso de las operaciones que
 * aún no se liquidan (lo que saldrá o entrará), para que el trader sepa con qué cuenta antes de negociar.
 */
const fmtIa = (v: number | null | undefined) => Math.abs(Number(v ?? 0)).toLocaleString('es-PE', { maximumFractionDigits: 2 });

@Component({
  selector: 'app-saldos',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, LoaderComponent],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.scss',
})
export class SaldosComponent implements OnInit, OnDestroy {
  private readonly api = inject(TesoreriaService);
  private readonly asistente = inject(AsistenteIaService);

  cuentas: CuentaBancaria[] = [];
  pendientes: Operacion[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.api.cuentas().subscribe({
      next: c => { this.cuentas = c.filter(x => x.activo); this.cargando = false; },
      error: (e: HttpErrorResponse) => { this.error = mensajeDeError(e); this.cargando = false; },
    });
    this.api.operaciones().subscribe(ops => (this.pendientes = ops.filter(o => !['Liquidado', 'Anulado'].includes(o.estado))));
    this.asistente.registrar({
      clave: 'front-saldos',
      modulo: 'Front Office · Saldos bancarios',
      titulo: 'Saldos bancarios',
      interpretacion: 'Saldos actuales por cuenta y la posición proyectada tras liquidar las operaciones pendientes. Puedo señalar faltantes de fondos.',
      opciones: [
        { etiqueta: 'Posición proyectada por moneda', responder: () => this.monedas.length
          ? this.monedas.map(m => `${m}: saldo ${fmtIa(this.total(m))}, comprometido ${this.comprometido(m) < 0 ? '−' : '+'}${fmtIa(this.comprometido(m))}, ` +
            `proyectado ${this.total(m) + this.comprometido(m) < 0 ? '−' : ''}${fmtIa(this.total(m) + this.comprometido(m))}`).join('; ') + '.'
          : 'No hay cuentas activas registradas.' },
        { etiqueta: 'Cuentas con saldo insuficiente', responder: () => {
          const malas = this.cuentas.filter(c => Number(c.saldo) + this.comprometidoCuenta(c) < 0);
          const sinBanco = this.pendientes.filter(o => !o.bancoPagador).length;
          return (malas.length
            ? 'Quedarían en negativo tras liquidar: ' + malas.map(c => `${c.banco} ${c.moneda} (faltan ${fmtIa(Number(c.saldo) + this.comprometidoCuenta(c))})`).join('; ') + '.'
            : 'Ninguna cuenta queda en negativo con las operaciones ya asignadas.')
            + (sinBanco ? ` Hay ${sinBanco} operación(es) pendientes sin banco pagador, no incluidas por cuenta.` : '');
        } },
      ],
      placeholder: 'Pregunte, p. ej. ¿alcanza el saldo en dólares para esta semana?',
      datos: () => ({
        cuentas: this.cuentas.map(c => ({ banco: c.banco, moneda: c.moneda, saldo: Number(c.saldo), comprometido: this.comprometidoCuenta(c) })),
        porMoneda: this.monedas.map(m => ({ moneda: m, saldo: this.total(m), comprometido: this.comprometido(m) })),
        pendientes: this.pendientes.slice(0, 40).map(o => ({ codigo: o.codigo, tipo: o.tipo, lado: o.lado, monto: o.montoTotal,
          moneda: o.monedaLiquidacion, nominal: o.nominal, fechaLiquidacion: o.fechaLiquidacion, banco: o.bancoPagador, estado: o.estado })),
      }),
    });
  }

  ngOnDestroy(): void {
    this.asistente.liberar('front-saldos');
  }

  get monedas(): string[] {
    return [...new Set(this.cuentas.map(c => c.moneda))].sort((a, b) => (a === 'PEN' ? -1 : b === 'PEN' ? 1 : a.localeCompare(b)));
  }

  total(moneda: string): number {
    return this.cuentas.filter(c => c.moneda === moneda).reduce((s, c) => s + Number(c.saldo), 0);
  }

  /** Flujo neto comprometido por las operaciones no liquidadas, por moneda (negativo = salida). */
  comprometido(moneda: string): number {
    let neto = 0;
    for (const o of this.pendientes) {
      const signo = o.lado === 'COMPRA' ? -1 : 1;
      if (o.tipo === 'FX_SPOT') {
        if (moneda === 'USD') neto += -signo * o.nominal;
        if (moneda === 'PEN') neto += signo * o.montoTotal;
      } else if (o.monedaLiquidacion === moneda) {
        neto += signo * o.montoTotal;
      }
    }
    return neto;
  }

  comprometidoCuenta(c: CuentaBancaria): number {
    return this.pendientes.filter(o => o.bancoPagador === c.banco).reduce((neto, o) => {
      const signo = o.lado === 'COMPRA' ? -1 : 1;
      if (o.tipo === 'FX_SPOT') return neto + (c.moneda === 'USD' ? -signo * o.nominal : c.moneda === 'PEN' ? signo * o.montoTotal : 0);
      return neto + (o.monedaLiquidacion === c.moneda ? signo * o.montoTotal : 0);
    }, 0);
  }
}
