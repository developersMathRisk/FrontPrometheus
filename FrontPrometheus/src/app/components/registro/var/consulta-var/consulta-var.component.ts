import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RegistroService } from '../../../../shared/services/registro.service';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { VarEjecucionResumen } from '../../../../shared/models/var/var-ejecucion-resumen';
import { EjecutarVarResponse } from '../../../../shared/models/var/ejecutar-var-response';
import { TablaToolbarComponent } from '../../../../shared/components/tabla-toolbar/tabla-toolbar.component';
import { EstadoTabla, TablaEstadoComponent, mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { ResultadoVarComponent } from '../../../../shared/components/resultado-var/resultado-var.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeIn, fadeSlideIn } from '../../../../shared/animations/transiciones';

@Component({
  selector: 'app-consulta-var',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, MatIconModule, TablaToolbarComponent, TablaEstadoComponent, ResultadoVarComponent, LoaderComponent],
  templateUrl: './consulta-var.component.html',
  styleUrl: './consulta-var.component.scss',
  animations: [fadeIn, fadeSlideIn],
})
export class ConsultaVarComponent {
  listaPortafolio: Portafolio[] = [];
  idPortafolioFiltro: number | null = null;

  lista: VarEjecucionResumen[] = [];
  listaFiltrada: VarEjecucionResumen[] = [];
  busqueda = '';
  cargando = true;
  mensajeError = '';

  seleccionado: VarEjecucionResumen | null = null;
  detalle: EjecutarVarResponse | null = null;
  cargandoDetalle = false;
  mensajeErrorDetalle = '';

  constructor(private registroService: RegistroService, private router: Router) {}

  ngOnInit() {
    this.registroService.getListaPortafolio().subscribe(r => this.listaPortafolio = r);
    this.listar();
  }

  get estadoTabla(): EstadoTabla {
    if (this.cargando) return 'cargando';
    if (this.mensajeError) return 'error';
    if (this.lista.length === 0) return 'vacio';
    if (this.listaFiltrada.length === 0) return 'sin-resultados';
    return null;
  }

  listar() {
    this.cargando = true;
    this.mensajeError = '';
    this.seleccionado = null;
    this.detalle = null;
    this.registroService.getListaResultadosVar(this.idPortafolioFiltro ?? undefined).subscribe({
      next: (r) => {
        this.lista = r;
        this.cargando = false;
        this.buscar(this.busqueda);
      },
      error: (error: HttpErrorResponse) => {
        this.cargando = false;
        this.mensajeError = mensajeDeError(error);
      },
    });
  }

  alCambiarFiltroPortafolio() {
    this.listar();
  }

  buscar(texto: string) {
    this.busqueda = texto;
    const t = texto.trim().toLowerCase();
    this.listaFiltrada = !t ? this.lista
      : this.lista.filter(x => (x.descripcionPortafolio + ' ' + x.fechaProceso).toLowerCase().includes(t));
  }

  seleccionar(item: VarEjecucionResumen) {
    if (this.seleccionado?.idResultadoVARDetalle === item.idResultadoVARDetalle) {
      this.seleccionado = null;
      this.detalle = null;
      return;
    }
    this.seleccionado = item;
    this.detalle = null;
    this.cargandoDetalle = true;
    this.mensajeErrorDetalle = '';
    this.registroService.getResultadoVar(item.idResultadoVARDetalle).subscribe({
      next: (r) => {
        this.detalle = r;
        this.cargandoDetalle = false;
        setTimeout(() => document.getElementById('consulta-detalle')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      },
      error: (error: HttpErrorResponse) => {
        this.cargandoDetalle = false;
        this.mensajeErrorDetalle = mensajeDeError(error);
      },
    });
  }

  irAEjecutar() {
    this.router.navigateByUrl('/registro/var/ejecutar');
  }
}
