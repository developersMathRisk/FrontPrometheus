import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Encabezado de página estándar del rediseño: kicker + título + subtítulo + acciones a la derecha.
 * Reemplaza el `page-header dashboard-pageheader` ad-hoc repetido en cada pantalla de `registro/*`.
 */
@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.scss'
})
export class EncabezadoComponent {
  @Input() kicker = '';
  @Input() titulo = '';
  @Input() subtitulo = '';
}
