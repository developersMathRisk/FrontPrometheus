import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
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
@Component({
  selector: 'app-custodia',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, LoaderComponent],
  templateUrl: './custodia.component.html',
  styleUrl: './custodia.component.scss',
})
export class CustodiaComponent implements OnInit {
  private readonly api = inject(TesoreriaService);
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
