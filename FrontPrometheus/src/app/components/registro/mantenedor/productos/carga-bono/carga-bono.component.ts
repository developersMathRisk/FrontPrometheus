import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bono } from '../../../../../shared/models/producto/bono';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { TipoBono } from '../../../../../shared/models/atributo-financiero/tipo-bono-sbs';
import { CurvaReferencia } from '../../../../../shared/models/atributo-financiero/curva-referencia';
import { MetodoAmortizacion } from '../../../../../shared/models/atributo-financiero/metodo-amortizacion';
import { CalculoBaseInteres } from '../../../../../shared/models/atributo-financiero/calculo-base-interes';
import { FrecuenciaPago } from '../../../../../shared/models/atributo-financiero/frecuencia-pago';
import { TipoTasa } from '../../../../../shared/models/atributo-financiero/tipo-tasa';
import { FormulaTasa } from '../../../../../shared/models/atributo-financiero/formula-tasa';
import { CargaEmisorComponent } from "../../../mantenedor/atributo-financiero/carga-emisor/carga-emisor.component";
import { CargaMonedaComponent } from "../../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component";
import { CargaTipoBonoSbsComponent } from "../../../mantenedor/atributo-financiero/carga-tipo-bono-sbs/carga-tipo-bono-sbs.component";
import { CargaCurvaReferenciaComponent } from "../../../mantenedor/atributo-financiero/carga-curva-referencia/carga-curva-referencia.component";
import { CargaMetodoAmortizacionComponent } from "../../../mantenedor/atributo-financiero/carga-metodo-amortizacion/carga-metodo-amortizacion.component";
import { CargaCalculoBaseInteresComponent } from "../../../mantenedor/atributo-financiero/carga-calculo-base-interes/carga-calculo-base-interes.component";
import { CargaFrecuenciaPagoComponent } from "../../../mantenedor/atributo-financiero/carga-frecuencia-pago/carga-frecuencia-pago.component";
import { CargaTipoTasaComponent } from "../../../mantenedor/atributo-financiero/carga-tipo-tasa/carga-tipo-tasa.component";
import { CargaFormulaTasaComponent } from "../../../mantenedor/atributo-financiero/carga-formula-tasa/carga-formula-tasa.component";
import { CargaBonoCuponComponent } from '../carga-bono-cupon/carga-bono-cupon.component';
import { CargaTipoInstrumentoComponent } from "../../atributo-financiero/carga-tipo-instrumento/carga-tipo-instrumento.component";
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';
import { CommonModule } from '@angular/common';


import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';
@Component({
  selector: 'app-carga-bono',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaEmisorComponent, CargaMonedaComponent, CargaTipoBonoSbsComponent, CargaCurvaReferenciaComponent, CargaMetodoAmortizacionComponent, CargaCalculoBaseInteresComponent, CargaFrecuenciaPagoComponent, CargaTipoTasaComponent, CargaFormulaTasaComponent, CargaBonoCuponComponent, CargaTipoInstrumentoComponent, CommonModule, ModalFormularioComponent, DatePickerComponent],
  templateUrl: './carga-bono.component.html',
  styleUrl: './carga-bono.component.scss',
})
export class CargaBonoComponent implements OnInit{

  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoBonoSBS: TipoBono[] = [];
  listCurvaReferencia: CurvaReferencia[] = [];
  listMetodoAmotizacion: MetodoAmortizacion[] = [];
  listCalculoBase: CalculoBaseInteres[] = [];
  listFrecPago: FrecuenciaPago[] = [];
  listTipoTasaInt: TipoTasa[] = [];
  listFormulaTasa: FormulaTasa[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];

  nuevoRegistro: Bono = new Bono();
  flgAutomatico: boolean = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codISIN)) f.push('ISIN');
    if (vacio(r.ticker)) f.push('Ticker');
    if (vacio(r.idTipoBono)) f.push('Tipo Bono');
    if (vacio(r.idTipoTasaInteres)) f.push('Tipo Tasa Interés');
    if (vacio(r.idFormulaTasa)) f.push('Fórmula Tasa');
    if (vacio(r.idCurvaReferencia)) f.push('Curva Referencia');
    if (vacio(r.idEmisor)) f.push('Emisor');
    if (vacio(r.idMoneda)) f.push('Moneda');
    if (vacio(r.idMetodoAmortizacion)) f.push('Método Amortización');
    if (vacio(r.idCalculobase)) f.push('Cálculo Base');
    if (vacio(r.idFrecuenciaPago)) f.push('Frecuencia Pago');
    if (this.flgAutomatico) {
      if (vacio(r.fechaEmision)) f.push('Fecha Emisión');
      if (vacio(r.fechaPrimerCupon)) f.push('Fecha Primer Cupón');
      if (vacio(r.fechaVencimiento)) f.push('Fecha Vencimiento');
    }
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBono();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }

  obtenerListEmisor(){
    this.registroService.getListaEmisor().subscribe(
      (response: Emisor[]) => {
        this.listEmisor = response;
      }
    )
  }

  obtenerListMoneda(){
    this.registroService.getListaMoneda().subscribe(
      (response: Moneda[]) => {
        this.listMoneda = response;
      }
    )
  }

  obtenerListTipoBono(){
    this.registroService.getListaTipoBono().subscribe(
      (response: TipoBono[]) => {
        this.listTipoBonoSBS = response;
      }
    )
  }

  obtenerListCurvaReferencia(){
    this.registroService.getListaCurvaReferencia().subscribe(
      (response: CurvaReferencia[]) => {
        this.listCurvaReferencia = response;
      }
    )
  }

  obtenerListMetodoAmortizacion(){
    this.registroService.getListaMetodoAmortizacion().subscribe(
      (response: MetodoAmortizacion[]) => {
        this.listMetodoAmotizacion = response;
      }
    )
  }

  obtenerListCalculoBaseInteres(){
    this.registroService.getListaCalculoBaseInteres().subscribe(
      (response: CalculoBaseInteres[]) => {
        this.listCalculoBase = response;
      }
    )
  }

  obtenerListFrecuenciaPago(){
    this.registroService.getListaFrecuenciaPago().subscribe(
      (response: FrecuenciaPago[]) => {
        this.listFrecPago = response;
      }
    )
  }

  obtenerListTipoTasa(){
    this.registroService.getListaTipoTasa().subscribe(
      (response: TipoTasa[]) => {
        this.listTipoTasaInt = response;
      }
    )
  }

  obtenerListFormulaTasa(){
    this.registroService.getListaFormulaTasa().subscribe(
      (response: FormulaTasa[]) => {
        this.listFormulaTasa = response;
      }
    )
  }

  obtenerListTipoInstrumento(){
    this.registroService.getListaTipoInstrumento().subscribe(
      (response: TipoInstrumento[]) => {
        this.listTipoInstrumento = response;
      }
    )
  }

  registrar(modal: any){
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Registro exitoso',
        //   text: 'El bono ha sido registrado correctamente. Ahora debe proceder a registrar la cuponera.',
        //   confirmButtonText: 'Aceptar'
        // });
        // this.cerrar();
        // this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl

    // El botón «Registrar» solo se habilita con los obligatorios completos; esto protege además la tecla Enter
    if (this.faltantes.length > 0) return;

    this.registroService.postRegistrarBono(this.nuevoRegistro, this.flgAutomatico).subscribe(
      (response: Bono) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El bono ha sido registrado correctamente. Ahora debe proceder a registrar la cuponera.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
        if(!this.flgAutomatico){
          this.nuevoRegistro = response;
          this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
        }
      },
      (error: HttpErrorResponse) =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error?.message ?? error.message,
          confirmButtonText: 'Aceptar'
        });
      }
    )
  }

  cerrar(){
    this.close.emit();
    //this.modalService.dismissAll();
  }

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    // this.close.emit();
    // this.modalServiceSecundario.dismissAll();
    this.modalRef.close();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBono();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }
}
