import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Accion } from '../../../../../shared/models/producto/accion';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Plaza } from '../../../../../shared/models/atributo-financiero/plaza';
import { TipoAccion } from '../../../../../shared/models/atributo-financiero/tipo-accion';
import { FuenteInformacion } from '../../../../../shared/models/atributo-financiero/fuente-informacion';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { CommonModule } from '@angular/common';
import { CargaPlazaComponent } from "../../atributo-financiero/carga-plaza/carga-plaza.component";
import { CargaTipoAccionComponent } from "../../atributo-financiero/carga-tipo-accion/carga-tipo-accion.component";
import { CargaEmisorComponent } from "../../atributo-financiero/carga-emisor/carga-emisor.component";
import { CargaMonedaComponent } from "../../atributo-financiero/carga-moneda/carga-moneda.component";
import { CargaFuenteInformacionComponent } from "../../atributo-financiero/carga-fuente-informacion/carga-fuente-informacion.component";
import { CargaTipoInstrumentoComponent } from "../../atributo-financiero/carga-tipo-instrumento/carga-tipo-instrumento.component";
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';

@Component({
  selector: 'app-editar-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CommonModule, CargaPlazaComponent, CargaTipoAccionComponent, CargaEmisorComponent, CargaMonedaComponent, CargaFuenteInformacionComponent, CargaTipoInstrumentoComponent],
  templateUrl: './editar-accion.component.html',
  styleUrl: './editar-accion.component.scss'
})
export class EditarAccionComponent {
  @Input() data!: Accion;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  objRegistroEditado: Accion = new Accion;
  
  listPlaza: Plaza[] = [];
  listTipoAccion: TipoAccion[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];

  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListPlaza();
    this.obtenerListTipoAccion();
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

  obtenerListTipoAccion(){
    this.registroService.getListaTipoAccion().subscribe(
      (response: TipoAccion[]) => {
        this.listTipoAccion = response;
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
        this.registroService.putModificarAccion(this.objRegistroEditado.idAccion, this.objRegistroEditado).subscribe(
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
    this.obtenerListTipoAccion();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
}
