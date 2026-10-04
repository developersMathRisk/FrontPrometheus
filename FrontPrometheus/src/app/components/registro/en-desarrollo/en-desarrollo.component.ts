import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Construction } from 'lucide-angular';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { EstadoVacioComponent } from '../../../shared/components/estado-vacio/estado-vacio.component';

/**
 * Estado "en desarrollo" compartido por los módulos aún no conectados a un motor de cálculo. Mismo
 * lenguaje visual que el resto de vistas "próximamente" (p. ej. Consulta de Stress Testing): ícono,
 * título y explicación concreta, en vez del texto genérico plano que traía la plantilla base.
 */
@Component({
  selector: 'app-en-desarrollo',
  standalone: true,
  imports: [EncabezadoComponent, EstadoVacioComponent],
  template: `
    <app-encabezado [titulo]="titulo"></app-encabezado>
    <div class="p-card">
      <app-estado-vacio [icono]="ConstructionIcon" titulo="Módulo en desarrollo" [texto]="detalle"></app-estado-vacio>
    </div>
  `
})
export class EnDesarrolloComponent {
  readonly ConstructionIcon = Construction;
  titulo: string;
  detalle: string;

  constructor(route: ActivatedRoute) {
    this.titulo = route.snapshot.data['titulo'] ?? 'Módulo';
    this.detalle = route.snapshot.data['detalle'] ?? 'Esta funcionalidad aún no está disponible.';
  }
}
