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

@Component({
  selector: 'app-editar-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CommonModule],
  templateUrl: './editar-accion.component.html',
  styleUrl: './editar-accion.component.scss'
})
export class EditarAccionComponent {
  @Input() data!: Accion;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: Accion = new Accion;
  
  listPlaza: Plaza[] = [];
  listTipoAccion: TipoAccion[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];

  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
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
}
