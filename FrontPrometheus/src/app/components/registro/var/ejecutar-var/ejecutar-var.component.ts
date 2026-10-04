import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroService } from '../../../../shared/services/registro.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { CargaMonedaComponent } from '../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { CargaPortafolioComponent } from '../../mantenedor/portafolio/carga-portafolio/carga-portafolio.component';
import { CommonModule } from '@angular/common';
import { NivelConfianza } from '../../../../shared/models/var/nivel-confianza';
import { TipoMetodologiaVar } from '../../../../shared/models/var/tipo-metodologia-var';
import { EjecutarVarRequest } from '../../../../shared/models/var/ejecutar-var-request';
import { EjecutarVarResponse } from '../../../../shared/models/var/ejecutar-var-response';
import { InstrumentoElegibilidad } from '../../../../shared/models/var/instrumento-elegibilidad';
import { HttpErrorResponse } from '@angular/common/http';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { ResultadoVarComponent } from '../../../../shared/components/resultado-var/resultado-var.component';
import { EjecucionDuplicada } from '../../../../shared/models/var/ejecucion-duplicada';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeIn, fadeSlideIn } from '../../../../shared/animations/transiciones';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';

@Component({
  selector: 'app-ejecutar-var',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent, CargaPortafolioComponent, CommonModule, ResultadoVarComponent, LoaderComponent, EncabezadoComponent],
  templateUrl: './ejecutar-var.component.html',
  styleUrl: './ejecutar-var.component.scss',
  animations: [fadeIn, fadeSlideIn],
})
export class EjecutarVarComponent {
  // ---- parámetros del formulario --------------------------------------------------
  // Se puede elegir más de un portafolio: sus posiciones se combinan en un solo cálculo
  // consolidado (así se captura la diversificación entre portafolios; ver el backend).
  idsPortafolioSeleccionados: number[] = [];
  idMonedaSeleccionada: number | null = null;
  monedaTocadaManualmente = false;
  horizonteDias = 1;
  numObservaciones = 100;
  numSimulacionesMonteCarlo = 10000;
  ventanaPersonalizada = false;

  // Convención estándar de mercado para la ventana de datos históricos del VaR: 1, 2 o 3 años de
  // precios diarios (≈250 días hábiles por año). El valor por defecto (100) viene de la ventana con
  // la que se validó este motor contra el Excel de referencia; se puede cambiar libremente.
  readonly ventanasHistoricas = [
    { dias: 250, etiqueta: '1 año' },
    { dias: 500, etiqueta: '2 años' },
    { dias: 750, etiqueta: '3 años' },
  ];
  idsNivelConfianzaSeleccionados: number[] = [];
  idsTipoMetodologiaSeleccionados: number[] = [];

  // ---- catálogos ---------------------------------------------------------------
  listaPortafolio: Portafolio[] = [];
  listMoneda: Moneda[] = [];
  listNivelConfianza: NivelConfianza[] = [];
  listTipoMetodologiaVAR: TipoMetodologiaVar[] = [];
  cargandoCatalogos = true;

  // ---- posiciones combinadas de los portafolios elegidos (un portafolio es un conjunto fijo de
  // posiciones; no tiene sentido "filtrar por tipo de instrumento" algo que no está ahí) ---------
  instrumentos: InstrumentoElegibilidad[] = [];
  cargandoInstrumentos = false;

  // ---- ejecución -----------------------------------------------------------------
  ejecutando = false;
  mensajeError = '';
  resultado: EjecutarVarResponse | null = null;

  // Solo se permite un resultado de VaR por día por conjunto de portafolios: si el backend avisa que
  // ya existe uno (409), se pide confirmación explícita antes de reemplazarlo.
  duplicado: EjecucionDuplicada | null = null;
  @ViewChild('duplicadoModal') duplicadoModalTpl!: TemplateRef<any>;
  private duplicadoModalRef: any;

  modalRef: any;

  constructor(private registroService: RegistroService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.cargarCatalogos();
  }

  cargarCatalogos() {
    this.cargandoCatalogos = true;
    this.registroService.getListaPortafolio().subscribe(r => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe(r => this.listMoneda = r);
    this.registroService.getListaTipoMetodologiaVAR().subscribe(r => {
      this.listTipoMetodologiaVAR = r;
      // Preseleccionadas: menos clics para el caso más común (comparar las 3 metodologías)
      this.idsTipoMetodologiaSeleccionados = r.map(m => m.idTipoMetodologiaVAR);
    });
    this.registroService.getListaNivelConfianza().subscribe({
      next: r => {
        this.listNivelConfianza = r.sort((a, b) => a.valorNivelConfianza - b.valorNivelConfianza);
        this.idsNivelConfianzaSeleccionados = r.map(n => n.idNivelConfianza);
        this.cargandoCatalogos = false;
      },
      error: () => this.cargandoCatalogos = false,
    });
  }

  // ---- estado del formulario -------------------------------------------------------
  get faltantes(): string[] {
    const faltan: string[] = [];
    if (this.idsPortafolioSeleccionados.length === 0) faltan.push('Al menos un portafolio');
    if (!this.idMonedaSeleccionada) faltan.push('Moneda de reporte');
    if (this.idsTipoMetodologiaSeleccionados.length === 0) faltan.push('al menos una metodología');
    if (this.idsNivelConfianzaSeleccionados.length === 0) faltan.push('al menos un nivel de confianza');
    if (this.idsPortafolioSeleccionados.length && !this.cargandoInstrumentos && this.instrumentosElegibles.length === 0) {
      faltan.push('portafolios con instrumentos que el motor pueda calcular');
    }
    return faltan;
  }

  get esMultiPortafolio(): boolean {
    return this.idsPortafolioSeleccionados.length > 1;
  }

  get instrumentosElegibles(): InstrumentoElegibilidad[] {
    return this.instrumentos.filter(i => i.elegible);
  }

  get instrumentosExcluidos(): InstrumentoElegibilidad[] {
    return this.instrumentos.filter(i => !i.elegible);
  }

  // Elegir portafolio(s): si es el primero, sugiere su propia moneda (si el usuario no tocó ya el
  // combo) y muestra de inmediato qué posiciones tienen (combinadas) y cuáles puede calcular el motor.
  alCambiarPortafolio() {
    this.instrumentos = [];
    if (this.idsPortafolioSeleccionados.length === 0) return;

    if (!this.monedaTocadaManualmente) {
      const p = this.listaPortafolio.find(x => x.idPortafolio === this.idsPortafolioSeleccionados[0]);
      if (p) this.idMonedaSeleccionada = p.idMoneda;
    }

    this.cargandoInstrumentos = true;
    this.registroService.getInstrumentosPortafolio(this.idsPortafolioSeleccionados).subscribe({
      next: (r) => { this.instrumentos = r; this.cargandoInstrumentos = false; },
      error: () => { this.cargandoInstrumentos = false; },
    });
  }

  alCambiarMoneda() {
    this.monedaTocadaManualmente = true;
  }

  get ventanaActivaDias(): number | null {
    return this.ventanaPersonalizada ? null : this.numObservaciones;
  }

  elegirVentana(dias: number) {
    this.ventanaPersonalizada = false;
    this.numObservaciones = dias;
  }

  elegirVentanaPersonalizada() {
    this.ventanaPersonalizada = true;
  }

  toggleMetodologia(id: number) {
    this.alternar(this.idsTipoMetodologiaSeleccionados, id);
  }

  toggleNivelConfianza(id: number) {
    this.alternar(this.idsNivelConfianzaSeleccionados, id);
  }

  private alternar(lista: number[], id: number) {
    const i = lista.indexOf(id);
    i >= 0 ? lista.splice(i, 1) : lista.push(id);
  }

  // ---- ejecución -----------------------------------------------------------------
  ejecutar(confirmarReemplazo = false) {
    if (this.faltantes.length > 0 || this.ejecutando) return;

    const cuerpo: EjecutarVarRequest = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada!,
      idsNivelConfianza: this.idsNivelConfianzaSeleccionados,
      idsTipoMetodologiaVAR: this.idsTipoMetodologiaSeleccionados,
      horizonteDias: this.horizonteDias || 1,
      numObservaciones: this.numObservaciones || 100,
      numSimulacionesMonteCarlo: this.numSimulacionesMonteCarlo || 10000,
      confirmarReemplazo,
    };

    this.ejecutando = true;
    this.mensajeError = '';
    this.duplicado = null;
    if (!confirmarReemplazo) this.resultado = null;

    this.registroService.postEjecutarVar(cuerpo).subscribe({
      next: (respuesta) => {
        this.resultado = respuesta;
        this.ejecutando = false;
        setTimeout(() => document.getElementById('var-resultados')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      },
      error: (error: HttpErrorResponse) => {
        this.ejecutando = false;
        if (error.status === 409 && error.error) {
          this.duplicado = error.error as EjecucionDuplicada;
          this.duplicadoModalRef = this.modalService.open(this.duplicadoModalTpl, {
            backdrop: 'static', keyboard: false, centered: true, windowClass: 'var-modal-duplicado',
          });
          return;
        }
        this.mensajeError = mensajeDeError(error);
      },
    });
  }

  confirmarYReemplazar() {
    this.duplicadoModalRef?.close();
    this.ejecutar(true);
  }

  cancelarReemplazo() {
    this.duplicadoModalRef?.close();
    this.duplicado = null;
  }

  abrirModalSecundario(modal: any) {
    this.modalRef = this.modalService.open(modal, { windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size: 'xl' });
  }

  cerrarModalSecundario() {
    this.modalRef.close();
    this.cargarCatalogos();
    if (this.idsPortafolioSeleccionados.length) this.alCambiarPortafolio();
  }
}
