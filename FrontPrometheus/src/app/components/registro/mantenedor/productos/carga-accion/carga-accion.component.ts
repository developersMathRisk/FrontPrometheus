import { Component, EventEmitter, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Accion } from '../../../../../shared/models/producto/accion';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { FuenteInformacion } from '../../../../../shared/models/atributo-financiero/fuente-informacion';
import { Plaza } from '../../../../../shared/models/atributo-financiero/plaza';
import { TipoAccion } from '../../../../../shared/models/atributo-financiero/tipo-accion';
import { CommonModule } from '@angular/common';
import { CargaPlazaComponent } from "../../../mantenedor/atributo-financiero/carga-plaza/carga-plaza.component";
import { CargaTipoAccionComponent } from "../../../mantenedor/atributo-financiero/carga-tipo-accion/carga-tipo-accion.component";
import { CargaEmisorComponent } from "../../../mantenedor/atributo-financiero/carga-emisor/carga-emisor.component";
import { CargaMonedaComponent } from "../../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component";
import { CargaFuenteInformacionComponent } from "../../../mantenedor/atributo-financiero/carga-fuente-informacion/carga-fuente-informacion.component";
import { CargaTipoSectorComponent } from "../../atributo-financiero/carga-tipo-sector/carga-tipo-sector.component";
import { TipoSector } from '../../../../../shared/models/atributo-financiero/tipo-sector';

@Component({
  selector: 'app-carga-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CommonModule, CargaPlazaComponent, CargaTipoAccionComponent, CargaEmisorComponent, CargaMonedaComponent, CargaFuenteInformacionComponent, CargaTipoSectorComponent],
  templateUrl: './carga-accion.component.html',
  styleUrl: './carga-accion.component.scss'
})
export class CargaAccionComponent{
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  listPlaza: Plaza[] = [];
  listTipoAccion: TipoAccion[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoSector: TipoSector[] = [];

  nuevoRegistro: Accion = new Accion()

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPlaza();
    this.obtenerListTipoAccion();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoSector();
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

  obtenerListTipoSector(){
    this.registroService.getListaTipoSector().subscribe(
      (response: TipoSector[]) => {
        this.listTipoSector = response;
      }
    )
  }

  registrar(){
    this.registroService.postRegistrarAccion(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La acción ha sido registrada correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
      },
      (error: HttpErrorResponse) =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          confirmButtonText: 'Aceptar'
        });
      }
    )
  }

  cerrar(){
    this.close.emit();
    // this.modalServicePrincipal.dismissAll();
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
    this.obtenerListTipoSector();
  }

}
