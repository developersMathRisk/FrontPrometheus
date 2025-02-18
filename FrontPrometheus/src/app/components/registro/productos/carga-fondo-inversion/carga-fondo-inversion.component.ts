import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { FondoInversion } from '../../../../shared/models/producto/fondo-inversion';
import { RegistroService } from '../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Emisor } from '../../../../shared/models/atributo-financiero/emisor';
import { FuenteInformacion } from '../../../../shared/models/atributo-financiero/fuente-informacion';
import { Plaza } from '../../../../shared/models/atributo-financiero/plaza';
import { TipoFondo } from '../../../../shared/models/atributo-financiero/tipo-fondo';
import { TipoAccion } from '../../../../shared/models/atributo-financiero/tipo-accion';

@Component({
  selector: 'app-carga-fondo-inversion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-fondo-inversion.component.html',
  styleUrl: './carga-fondo-inversion.component.scss'
})
export class CargaFondoInversionComponent {
  @Output() close = new EventEmitter<any>();
  
  listPlaza: Plaza[] = [];
  listTipoFondo: TipoFondo[] = [];
  listFuenteInformacion: FuenteInformacion[] = [];
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];

  nuevoRegistro: FondoInversion = new FondoInversion();

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
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

  registrar(){
    this.registroService.postRegistrarFondoInversion(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El fondo de inversión ha sido registrado correctamente.',
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
