import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

/**
 * Consulta de Stress Testing: todavía no hay resultados que consultar porque el motor de Stress
 * Testing está en desarrollo (ver "Ejecución de Stress Testing" para la vista previa). En vez de
 * mostrar cifras de ejemplo como si fueran reales, esta pantalla es honesta sobre el estado del
 * módulo y dirige al usuario al siguiente paso.
 */
@Component({
  selector: 'app-consulta-stress-testing',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './consulta-stress-testing.component.html',
  styleUrl: './consulta-stress-testing.component.scss'
})
export class ConsultaStressTestingComponent {}
