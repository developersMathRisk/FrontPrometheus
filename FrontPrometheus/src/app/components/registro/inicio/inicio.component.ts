import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowRight, Calculator, Database, History, LucideAngularModule, Upload, Zap, type LucideIconData } from 'lucide-angular';
import { RegistroService } from '../../../shared/services/registro.service';
import { VarEjecucionResumen } from '../../../shared/models/var/var-ejecucion-resumen';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { EstadoVacioComponent } from '../../../shared/components/estado-vacio/estado-vacio.component';
import { fadeSlideIn } from '../../../shared/animations/transiciones';

interface TarjetaAccion {
  titulo: string;
  icono: LucideIconData;
  ruta: string;
}

/**
 * Pantalla de inicio: accesos directos a las tareas más frecuentes, los últimos cálculos de VaR
 * y un resumen honesto del estado de los datos (sin inventar métricas que el backend no expone hoy).
 */
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, EncabezadoComponent, EstadoVacioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  animations: [fadeSlideIn],
})
export class InicioComponent implements OnInit {
  private readonly registroService = inject(RegistroService);
  private readonly router = inject(Router);

  readonly ArrowRightIcon = ArrowRight;
  readonly DatabaseIcon = Database;

  readonly hoy = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });

  readonly tarjetas: TarjetaAccion[] = [
    { titulo: 'Ejecutar VaR', icono: Calculator, ruta: '/registro/var/ejecutar' },
    { titulo: 'Cargar posiciones', icono: Upload, ruta: '/registro/portafolio/dashboard-portafolio' },
    { titulo: 'Stress testing', icono: Zap, ruta: '/registro/stress-testing/ejecutar' },
    { titulo: 'Backtesting', icono: History, ruta: '/registro/var/backtesting' },
  ];

  cargandoCalculos = true;
  ultimosCalculos: VarEjecucionResumen[] = [];

  cargandoEstado = true;
  numPortafolios = 0;
  numPosiciones: number | null = null;

  ngOnInit(): void {
    this.registroService.getListaResultadosVar().subscribe({
      next: lista => {
        this.ultimosCalculos = [...lista]
          .sort((a, b) => (a.fechaProceso < b.fechaProceso ? 1 : -1))
          .slice(0, 5);
        this.cargandoCalculos = false;
      },
      error: () => this.cargandoCalculos = false,
    });

    this.registroService.getListaPortafolio().subscribe({
      next: lista => {
        this.numPortafolios = lista.length;
        this.cargandoEstado = false;
      },
      error: () => this.cargandoEstado = false,
    });

    this.registroService.getListaPortafolioInstrumento().subscribe({
      next: lista => this.numPosiciones = lista.length,
      error: () => this.numPosiciones = null,
    });
  }

  ir(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }

  irAConsulta(): void {
    this.router.navigateByUrl('/registro/var/consulta');
  }
}
