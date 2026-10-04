import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inbox, LucideAngularModule, type LucideIconData } from 'lucide-angular';

/**
 * Estado vacío genérico (fuera de tablas: `app-tabla-estado` sigue siendo el que usan los
 * mantenedores). Icono + título + texto + acción opcional, mismo lenguaje visual que `.hig-placeholder`.
 */
@Component({
  selector: 'app-estado-vacio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './estado-vacio.component.html',
  styleUrl: './estado-vacio.component.scss'
})
export class EstadoVacioComponent {
  @Input() icono: LucideIconData = Inbox;
  @Input() titulo = '';
  @Input() texto = '';
  @Input() textoAccion = '';
  @Output() accion = new EventEmitter<void>();
}
