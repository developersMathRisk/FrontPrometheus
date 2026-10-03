import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { FondoInversion } from '../../../../../shared/models/producto/fondo-inversion';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { FuenteInformacion } from '../../../../../shared/models/atributo-financiero/fuente-informacion';
import { Plaza } from '../../../../../shared/models/atributo-financiero/plaza';
import { TipoFondo } from '../../../../../shared/models/atributo-financiero/tipo-fondo';
import { CommonModule } from '@angular/common';
import { CargaPlazaComponent } from "../../atributo-financiero/carga-plaza/carga-plaza.component";
import { CargaEmisorComponent } from "../../atributo-financiero/carga-emisor/carga-emisor.component";
import { CargaMonedaComponent } from "../../atributo-financiero/carga-moneda/carga-moneda.component";
import { CargaTipoFondoComponent } from "../../atributo-financiero/carga-tipo-fondo/carga-tipo-fondo.component";
import { CargaFuenteInformacionComponent } from "../../atributo-financiero/carga-fuente-informacion/carga-fuente-informacion.component";
import { CargaTipoInstrumentoComponent } from "../../atributo-financiero/carga-tipo-instrumento/carga-tipo-instrumento.component";
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-editar-fondo-inversion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CommonModule, CargaPlazaComponent, CargaEmisorComponent, CargaMonedaComponent, CargaTipoFondoComponent, CargaFuenteInformacionComponent, CargaTipoInstrumentoComponent, ModalFormularioComponent],
  templateUrl: './editar-fondo-inversion.component.html',
  styleUrl: './editar-fondo-inversion.component.scss'
})
export class EditarFondoInversionComponent {
  @Input() data!: FondoInversion;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  objRegistroEditado: FondoInversion = new FondoInversion;
  
  listPlaza: Plaza[] = [];
  listTipoFondo: TipoFondo[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];
  
  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codTicker)) f.push('Ticker');
    if (vacio(r.idPlaza)) f.push('Plaza');
    if (vacio(r.idEmisor)) f.push('Emisor');
    if (vacio(r.idMoneda)) f.push('Moneda');
    if (vacio(r.idTipoFondo)) f.push('Tipo Fondo');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }

  obtenerListPlaza(){
    this.registroService.getListaPlaza().subscribe(
      (response: Plaza[]) => {
        this.listPlaza = response;
      }
    )
  }

  obtenerListTipoFondo(){
    this.registroService.getListaTipoFondo().subscribe(
      (response: TipoFondo[]) => {
        this.listTipoFondo = response;
      }
    )
  }

  obtenerListFuenteInformacion(){
    this.registroService.getListaFuenteInformacion().subscribe(
      (response: FuenteInformacion[]) => {
        this.listFuenteInformacion = response;
      }
    )
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

  obtenerListTipoInstrumento(){
    this.registroService.getListaTipoInstrumento().subscribe(
      (response: TipoInstrumento[]) => {
        this.listTipoInstrumento = response;
      }
    )
  }

  guardarCambios(){
    if (this.faltantes.length > 0) return;
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
        this.registroService.putModificarFondoInversion(this.objRegistroEditado.idFondo, this.objRegistroEditado).subscribe(
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
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
}
