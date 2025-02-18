import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { FondoInversion } from '../../../../shared/models/producto/fondo-inversion';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Emisor } from '../../../../shared/models/atributo-financiero/emisor';
import { FuenteInformacion } from '../../../../shared/models/atributo-financiero/fuente-informacion';
import { Plaza } from '../../../../shared/models/atributo-financiero/plaza';
import { TipoFondo } from '../../../../shared/models/atributo-financiero/tipo-fondo';

@Component({
  selector: 'app-editar-fondo-inversion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './editar-fondo-inversion.component.html',
  styleUrl: './editar-fondo-inversion.component.scss'
})
export class EditarFondoInversionComponent {
  @Input() data!: FondoInversion;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: FondoInversion = new FondoInversion;
  
  listPlaza: Plaza[] = [];
  listTipoFondo: TipoFondo[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
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
    this.modalService.dismissAll();
  }
}
