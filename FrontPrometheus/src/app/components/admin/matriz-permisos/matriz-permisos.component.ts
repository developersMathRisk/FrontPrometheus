import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Acceso } from '../../../shared/services/sesion.service';
import { Opcion } from '../admin.service';

type Columna = keyof Acceso;

/**
 * Matriz opción × acción (Ver / Crear / Editar / Eliminar). Dos usos:
 *  - Rol: `valor` son los permisos del rol y se edita directamente.
 *  - Usuario: `base` son los permisos de su rol y `valor` solo las excepciones; las filas sin excepción se
 *    muestran con los valores del rol (atenuadas) y marcar cualquier casilla crea la excepción.
 */
@Component({
  selector: 'app-matriz-permisos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matriz-permisos.component.html',
  styleUrl: './matriz-permisos.component.scss',
})
export class MatrizPermisosComponent {
  @Input() opciones: Opcion[] = [];
  @Input() valor: Record<string, Acceso> = {};
  @Input() base: Record<string, Acceso> | null = null;
  @Input() disabled = false;
  @Output() valorChange = new EventEmitter<Record<string, Acceso>>();

  readonly columnas: { clave: Columna; etiqueta: string }[] = [
    { clave: 'leer', etiqueta: 'Ver' },
    { clave: 'crear', etiqueta: 'Crear' },
    { clave: 'editar', etiqueta: 'Editar' },
    { clave: 'eliminar', etiqueta: 'Eliminar' },
  ];

  get grupos(): { nombre: string; opciones: Opcion[] }[] {
    const mapa = new Map<string, Opcion[]>();
    for (const o of this.opciones) mapa.set(o.grupo, [...(mapa.get(o.grupo) ?? []), o]);
    return [...mapa].map(([nombre, opciones]) => ({ nombre, opciones }));
  }

  efectivo(clave: string): Acceso {
    return this.valor[clave] ?? this.base?.[clave] ?? { leer: false, crear: false, editar: false, eliminar: false };
  }

  esExcepcion(clave: string): boolean {
    return this.base !== null && clave in this.valor;
  }

  marcado(clave: string, col: Columna): boolean {
    return this.efectivo(clave)[col];
  }

  alternar(clave: string, col: Columna): void {
    if (this.disabled) return;
    const actual = { ...this.efectivo(clave) };
    actual[col] = !actual[col];
    // Escribir implica poder abrir la pantalla; quitar "Ver" quita el resto.
    if (col !== 'leer' && actual[col]) actual.leer = true;
    if (col === 'leer' && !actual.leer) Object.assign(actual, { crear: false, editar: false, eliminar: false });
    this.emitir(clave, actual);
  }

  todo(clave: string, encendido: boolean): void {
    if (this.disabled) return;
    this.emitir(clave, { leer: encendido, crear: encendido, editar: encendido, eliminar: encendido });
  }

  restablecer(clave: string): void {
    if (this.disabled) return;
    const copia = { ...this.valor };
    delete copia[clave];
    this.valorChange.emit(copia);
  }

  private emitir(clave: string, acceso: Acceso): void {
    this.valorChange.emit({ ...this.valor, [clave]: acceso });
  }
}
