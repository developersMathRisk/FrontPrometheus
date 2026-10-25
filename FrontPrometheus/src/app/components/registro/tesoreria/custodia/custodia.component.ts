import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { ETIQUETA_TIPO, TesoreriaService, Tenencia } from '../../../../shared/services/tesoreria.service';

/**
 * Back Office · Custodia: unidades por custodio e instrumento según las operaciones registradas en el sistema.
 * "En custodia" = operaciones liquidadas; "En tránsito" = registradas y aún no liquidadas. Sirve para conciliar
 * contra el estado de cuenta del custodio (CAVALI, Euroclear, etc.).
 */
const fmtIa = (v: number | null | undefined) => Math.abs(Number(v ?? 0)).toLocaleString('es-PE', { maximumFractionDigits: 2 });

@Component({
  selector: 'app-custodia',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, LoaderComponent],
  templateUrl: './custodia.component.html',
  styleUrl: './custodia.component.scss',
})
export class CustodiaComponent implements OnInit, OnDestroy {
  private readonly api = inject(TesoreriaService);
  private readonly asistente = inject(AsistenteIaService);
  readonly etiquetaTipo = ETIQUETA_TIPO;

  tenencias: Tenencia[] = [];
  cargando = true;
  error = '';
  custodia: string | null = null;

  ngOnInit(): void {
    this.api.custodia().subscribe({
      next: t => { this.tenencias = t; this.cargando = false; },
      error: (e: HttpErrorResponse) => { this.error = mensajeDeError(e); this.cargando = false; },
    });
    this.asistente.registrar({
      clave: 'back-custodia',
      modulo: 'Back Office · Custodia',
      titulo: 'Custodia de valores',
      interpretacion: 'Tenencias por custodio: unidades liquidadas (en custodia) y por liquidar (en tránsito). Puedo resumirlas.',
      opciones: [
        { etiqueta: 'Instrumentos en tránsito', responder: () => {
          const t = this.tenencias.filter(x => x.unidadesPorLiquidar !== 0);
          return t.length ? 'En tránsito: ' + t.map(x => `${x.ticker} en ${x.custodia}: ${x.unidadesPorLiquidar > 0 ? '+' : '−'}${fmtIa(x.unidadesPorLiquidar)} unidades`).join('; ') + '.'
            : 'No hay valores en tránsito: todas las operaciones con custodia asignada están liquidadas.';
        } },
        { etiqueta: 'Resumen por custodio', responder: () => this.custodias.length
          ? this.custodias.map(c => `${c}: ${this.posiciones(c)} posiciones en custodia`).join('; ') + '.'
          : 'No hay tenencias registradas con custodio.' },
      ],
      placeholder: 'Pregunte sobre las tenencias…',
      datos: () => ({ tenencias: this.tenencias.slice(0, 60) }),
    });
  }

  ngOnDestroy(): void {
    this.asistente.liberar('back-custodia');
  }

  get custodias(): string[] {
    return [...new Set(this.tenencias.map(t => t.custodia))];
  }

  get visibles(): Tenencia[] {
    return this.tenencias.filter(t => !this.custodia || t.custodia === this.custodia);
  }

  posiciones(c: string): number {
    return this.tenencias.filter(t => t.custodia === c && t.unidadesLiquidadas !== 0).length;
  }
}
