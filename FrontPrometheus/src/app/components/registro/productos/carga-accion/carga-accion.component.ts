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

@Component({
  selector: 'app-carga-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-accion.component.html',
  styleUrl: './carga-accion.component.scss'
})
export class CargaAccionComponent{
  @Output() close = new EventEmitter<any>();
  
  listMonedas: Moneda[] = [];
  monedaSeleccionada: string = '';
  flgCargaAutomatica: boolean = false;
  flgActivo: boolean = false;
  flgCalculoVaR: boolean = false;
  strCodISIN: string = '';
  strTicker: string = '';
  strNemonico: string = '';

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerMonedas();
  }

  obtenerMonedas(){
    this.registroService.monedas().subscribe(
      (response: Moneda[]) => {
        this.listMonedas = response;
        console.log(this.listMonedas);
      }
    )
  }

  registrar(){
    let objAccion: Accion = new Accion();
    objAccion.codISIN = this.strCodISIN;
    objAccion.codTicker = this.strTicker;
    objAccion.codNemonico = this.strNemonico;
    objAccion.codTipoAccion = '';
    objAccion.codMoneda = this.monedaSeleccionada;
    objAccion.codPlaza = '';
    objAccion.codEmisor = 1;
    objAccion.flgCargaAutom = this.flgCargaAutomatica;
    objAccion.flgActivo = this.flgActivo;
    objAccion.codIndAsociado = '1';
    objAccion.flgVar = this.flgCalculoVaR;
    objAccion.fuenteInformacion = '';

    this.registroService.postRegistrarAccion(objAccion).subscribe(
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
