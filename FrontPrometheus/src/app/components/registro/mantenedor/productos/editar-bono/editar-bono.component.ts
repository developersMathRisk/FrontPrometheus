import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bono } from '../../../../../shared/models/producto/bono';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { TipoBono } from '../../../../../shared/models/atributo-financiero/tipo-bono-sbs';
import { CalculoBaseInteres } from '../../../../../shared/models/atributo-financiero/calculo-base-interes';
import { FormulaTasa } from '../../../../../shared/models/atributo-financiero/formula-tasa';
import { FrecuenciaPago } from '../../../../../shared/models/atributo-financiero/frecuencia-pago';
import { MetodoAmortizacion } from '../../../../../shared/models/atributo-financiero/metodo-amortizacion';
import { TipoTasa } from '../../../../../shared/models/atributo-financiero/tipo-tasa';
import { CurvaReferencia } from '../../../../../shared/models/atributo-financiero/curva-referencia';
import { CargaEmisorComponent } from "../../../mantenedor/atributo-financiero/carga-emisor/carga-emisor.component";
import { CargaMonedaComponent } from "../../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component";
import { CargaTipoBonoSbsComponent } from "../../../mantenedor/atributo-financiero/carga-tipo-bono-sbs/carga-tipo-bono-sbs.component";
import { CargaCurvaReferenciaComponent } from "../../../mantenedor/atributo-financiero/carga-curva-referencia/carga-curva-referencia.component";
import { CargaMetodoAmortizacionComponent } from "../../../mantenedor/atributo-financiero/carga-metodo-amortizacion/carga-metodo-amortizacion.component";
import { CargaCalculoBaseInteresComponent } from "../../../mantenedor/atributo-financiero/carga-calculo-base-interes/carga-calculo-base-interes.component";
import { CargaFrecuenciaPagoComponent } from "../../../mantenedor/atributo-financiero/carga-frecuencia-pago/carga-frecuencia-pago.component";
import { CargaTipoTasaComponent } from "../../../mantenedor/atributo-financiero/carga-tipo-tasa/carga-tipo-tasa.component";
import { CargaFormulaTasaComponent } from "../../../mantenedor/atributo-financiero/carga-formula-tasa/carga-formula-tasa.component";
import { CargaTipoInstrumentoComponent } from "../../atributo-financiero/carga-tipo-instrumento/carga-tipo-instrumento.component";
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-bono',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaEmisorComponent, CargaMonedaComponent, CargaTipoBonoSbsComponent, CargaCurvaReferenciaComponent, CargaMetodoAmortizacionComponent, CargaCalculoBaseInteresComponent, CargaFrecuenciaPagoComponent, CargaTipoTasaComponent, CargaFormulaTasaComponent, CargaTipoInstrumentoComponent, CommonModule],
  templateUrl: './editar-bono.component.html',
  styleUrl: './editar-bono.component.scss'
})
export class EditarBonoComponent {
  @Input() data!: Bono;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  objRegistroEditado: Bono = new Bono;

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
  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBonoSBS();
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

  obtenerListTipoBonoSBS(){
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

  guardarCambios(){
    Swal.fire({
      title: '¿Está seguro de realizar el cambio?',
      text: 'Este cambio no puede deshacerse.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.putModificarBono(this.objRegistroEditado.idBono, this.objRegistroEditado).subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Modificación exitosa',
              text: 'El registro ha sido modificado correctamente.',
              confirmButtonText: 'Aceptar'
            });
            this.cerrar();
          },
          (error: HttpErrorResponse) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.message,
              confirmButtonText: 'Aceptar'
            });
          }
        )
      }
    });

    
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
    this.obtenerListTipoBonoSBS();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }
}
