import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

/**
 * Estado "en desarrollo" compartido por los módulos aún no conectados a un motor de cálculo. Mismo
 * lenguaje visual que el resto de vistas "próximamente" (p. ej. Consulta de Stress Testing): ícono,
 * título y explicación concreta, en vez del texto genérico plano que traía la plantilla base.
 */
@Component({
  selector: 'app-en-desarrollo',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="page-header dashboard-pageheader d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center gap-3">
        <h1 class="page-title my-auto" style="white-space: nowrap;">{{ titulo }}</h1>
      </div>
    </div>

    <div class="card hig-placeholder">
      <mat-icon aria-hidden="true">construction</mat-icon>
      <h2 class="hig-placeholder__titulo">Módulo en desarrollo</h2>
      <p class="hig-placeholder__texto">{{ detalle }}</p>
    </div>
  `
})
export class EnDesarrolloComponent {
  titulo: string;
  detalle: string;

  constructor(route: ActivatedRoute) {
    this.titulo = route.snapshot.data['titulo'] ?? 'Módulo';
    this.detalle = route.snapshot.data['detalle'] ?? 'Esta funcionalidad aún no está disponible.';
  }
}
