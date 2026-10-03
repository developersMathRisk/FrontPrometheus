import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../loader/loader.component';

export type EstadoTabla = 'cargando' | 'vacio' | 'sin-resultados' | 'error' | null;

/** Texto legible para el usuario a partir de un error HTTP (en lugar del mensaje técnico de Angular). */
export function mensajeDeError(error: HttpErrorResponse): string {
  if (error.status === 0) {
    return 'No se obtuvo respuesta del servidor. Verifique que el servicio esté disponible e intente nuevamente.';
  }
  if (error.status === 404) {
    return 'El servicio solicitado no está disponible (error 404).';
  }
  return error.error?.message ?? error.message;
}

@Component({
  selector: 'app-tabla-estado',
  standalone: true,
  imports: [CommonModule, MatIconModule, LoaderComponent],
  templateUrl: './tabla-estado.component.html',
  styleUrl: './tabla-estado.component.scss'
})
export class TablaEstadoComponent {
  @Input() estado: EstadoTabla = null;
  @Input() tituloVacio = 'No hay registros';
  @Input() detalleVacio = 'Use el botón para agregar el primero.';
  @Input() busqueda = '';
  @Input() mensajeError = '';
  @Output() reintentar = new EventEmitter<void>();
  @Output() limpiar = new EventEmitter<void>();
}
