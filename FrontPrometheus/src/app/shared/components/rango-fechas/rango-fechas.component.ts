import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';

export interface RangoFechas {
  desde: string;
  hasta: string;
}

/**
 * Filtro de rango para las series diarias (tipo de cambio, precios, volatilidad). Sin él la vista
 * pide la tabla completa y pesa más cada día que pasa. Por defecto, los últimos 30 días.
 */
@Component({
  selector: 'app-rango-fechas',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePickerComponent],
  templateUrl: './rango-fechas.component.html',
  styleUrl: './rango-fechas.component.scss',
})
export class RangoFechasComponent {
  @Input() desde = '';
  @Input() hasta = '';
  @Output() cambio = new EventEmitter<RangoFechas>();

  readonly atajos = [
    { etiqueta: '30 días', dias: 30 },
    { etiqueta: '90 días', dias: 90 },
    { etiqueta: '1 año', dias: 365 },
  ];

  /** Rango por defecto: los últimos `dias` hasta hoy, en ISO `yyyy-MM-dd`. */
  static ultimosDias(dias: number): RangoFechas {
    const hoy = new Date();
    const inicio = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() - dias);
    return { desde: inicio.toLocaleDateString('sv-SE'), hasta: hoy.toLocaleDateString('sv-SE') };
  }

  atajoActivo(dias: number): boolean {
    const r = RangoFechasComponent.ultimosDias(dias);
    return this.desde === r.desde && this.hasta === r.hasta;
  }

  elegirAtajo(dias: number): void {
    this.emitir(RangoFechasComponent.ultimosDias(dias));
  }

  alCambiarDesde(valor: string | null): void {
    this.emitir({ desde: valor ?? '', hasta: this.hasta });
  }

  alCambiarHasta(valor: string | null): void {
    this.emitir({ desde: this.desde, hasta: valor ?? '' });
  }

  private emitir(rango: RangoFechas): void {
    if (!rango.desde || !rango.hasta) return;
    // Si se invierten las fechas se corrige en vez de pedir un rango vacío al backend.
    const ordenado = rango.desde <= rango.hasta ? rango : { desde: rango.hasta, hasta: rango.desde };
    this.desde = ordenado.desde;
    this.hasta = ordenado.hasta;
    this.cambio.emit(ordenado);
  }
}
