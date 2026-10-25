import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { CuentaBancaria, Operacion, TesoreriaService } from '../../../../shared/services/tesoreria.service';

/**
 * Front Office · Saldos bancarios: disponible por banco y moneda, y el compromiso de las operaciones que
 * aún no se liquidan (lo que saldrá o entrará), para que el trader sepa con qué cuenta antes de negociar.
 */
@Component({
  selector: 'app-saldos',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, LoaderComponent],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.scss',
})
export class SaldosComponent implements OnInit {
  private readonly api = inject(TesoreriaService);

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
