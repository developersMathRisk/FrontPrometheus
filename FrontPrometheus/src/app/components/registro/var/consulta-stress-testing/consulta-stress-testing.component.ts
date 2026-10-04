import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Construction } from 'lucide-angular';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { EstadoVacioComponent } from '../../../../shared/components/estado-vacio/estado-vacio.component';

/**
 * Consulta de Stress Testing: todavía no hay resultados que consultar porque el motor de Stress
 * Testing está en desarrollo (ver "Ejecución de Stress Testing" para la vista previa). En vez de
 * mostrar cifras de ejemplo como si fueran reales, esta pantalla es honesta sobre el estado del
 * módulo y dirige al usuario al siguiente paso.
 */
@Component({
  selector: 'app-consulta-stress-testing',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, EstadoVacioComponent],
  templateUrl: './consulta-stress-testing.component.html',
  styleUrl: './consulta-stress-testing.component.scss'
})
export class ConsultaStressTestingComponent {
  private readonly router = inject(Router);
  readonly ConstructionIcon = Construction;

  irAEjecutar(): void {
    this.router.navigateByUrl('/registro/stress-testing/ejecutar');
  }
}
