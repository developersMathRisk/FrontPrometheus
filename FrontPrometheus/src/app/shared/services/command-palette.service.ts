import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Puente entre quien pide abrir la paleta de comandos (p. ej. el botón del header) y
 * `CommandPaletteComponent`, que es quien realmente posee el overlay de CDK.
 */
@Injectable({ providedIn: 'root' })
export class CommandPaletteService {
  readonly aperturaSolicitada = new Subject<void>();

  abrir(): void {
    this.aperturaSolicitada.next();
  }
}
