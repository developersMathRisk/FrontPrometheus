import { Component, EventEmitter, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroService } from '../../../../shared/services/registro.service';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Accion } from '../../../../shared/models/producto/accion';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Emisor } from '../../../../shared/models/atributo-financiero/emisor';
import { FuenteInformacion } from '../../../../shared/models/atributo-financiero/fuente-informacion';
import { Plaza } from '../../../../shared/models/atributo-financiero/plaza';
import { TipoAccion } from '../../../../shared/models/atributo-financiero/tipo-accion';

@Component({
  selector: 'app-carga-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-accion.component.html',
  styleUrl: './carga-accion.component.scss'
})
export class CargaAccionComponent{
  @Output() close = new EventEmitter<any>();
  
  listPlaza: Plaza[] = [];
  listTipoAccion: TipoAccion[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];

  nuevoRegistro: Accion = new Accion()

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPlaza();
    this.obtenerListTipoAccion();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
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
    this.modalService.dismissAll();
  }

}
