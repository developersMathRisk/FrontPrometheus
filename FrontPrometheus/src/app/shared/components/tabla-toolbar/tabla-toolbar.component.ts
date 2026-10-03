import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tabla-toolbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tabla-toolbar.component.html',
  styleUrl: './tabla-toolbar.component.scss'
})
export class TablaToolbarComponent {
  @Input() placeholder = 'Buscar…';
  @Input() accion = 'Agregar';
  @Input() total = 0;
  @Input() filtrados = 0;
  @Input() ocultarResumen = false;
  @Input() texto = '';
  @Output() buscar = new EventEmitter<string>();
  @Output() agregar = new EventEmitter<void>();

  get resumen(): string {
    if (this.ocultarResumen) {
      return '';
    }
    const n = (valor: number) => valor.toLocaleString('es-PE');
    if (this.filtrados !== this.total) {
      return `${n(this.filtrados)} de ${n(this.total)} registros`;
    }
    return this.total === 1 ? '1 registro' : `${n(this.total)} registros`;
  }

  alEscribir(valor: string) {
    this.texto = valor;
    this.buscar.emit(valor);
  }

  limpiar() {
    this.alEscribir('');
  }
}
