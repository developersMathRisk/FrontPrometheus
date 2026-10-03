import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Loader de marca: una recreación en SVG del ícono de la app (tres torres de cristal sobre un
 * horizonte) que se "llena" de color mientras carga, en vez del spinner genérico de Bootstrap.
 * - tamano="inline": un anillo pequeño, para usar junto a texto o dentro de botones.
 * - tamano="normal" | "grande": el ícono completo, para tarjetas o secciones cargando.
 * - progreso (0-100): si se indica, el relleno sigue ese valor; si no, queda en modo indeterminado
 *   (sube y baja en loop) — la mayoría de las cargas de esta app no tienen un % real, así que ese es
 *   el modo por defecto.
 */
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() tamano: 'inline' | 'normal' | 'grande' = 'normal';
  @Input() etiqueta?: string;
  @Input() progreso: number | null = null;

  get escala(): number {
    return Math.min(1, Math.max(0, (this.progreso ?? 0) / 100));
  }
}
