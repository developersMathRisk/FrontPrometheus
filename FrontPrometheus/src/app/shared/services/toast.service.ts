import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  mensaje: string;
  tipo: 'info' | 'exito' | 'error';
  accionLabel?: string;
  accion?: () => void;
}

let contador = 0;

/**
 * Toasts globales, montados una vez en el shell (`ToastComponent` en `content-layout`).
 * `mostrarConDeshacer` implementa el patrón de borrado optimista: la fila se quita de la lista
 * local de inmediato y `alExpirar` (el borrado real) solo se ejecuta si no se presiona "Deshacer"
 * dentro de `duracionMs`.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  mostrar(mensaje: string, tipo: Toast['tipo'] = 'info', duracionMs = 4000): number {
    const id = ++contador;
    this._toasts.update(lista => [...lista, { id, mensaje, tipo }]);
    setTimeout(() => this.cerrar(id), duracionMs);
    return id;
  }

  mostrarConDeshacer(mensaje: string, alDeshacer: () => void, alExpirar: () => void, duracionMs = 5000): number {
    const id = ++contador;
    let expirado = false;
    const temporizador = setTimeout(() => {
      expirado = true;
      this.cerrar(id);
      alExpirar();
    }, duracionMs);

    this._toasts.update(lista => [...lista, {
      id,
      mensaje,
      tipo: 'info',
      accionLabel: 'Deshacer',
      accion: () => {
        if (expirado) return;
        clearTimeout(temporizador);
        this.cerrar(id);
        alDeshacer();
      },
    }]);
    return id;
  }

  cerrar(id: number): void {
    this._toasts.update(lista => lista.filter(t => t.id !== id));
  }
}
