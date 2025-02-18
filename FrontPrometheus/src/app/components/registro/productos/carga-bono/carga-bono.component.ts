import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroService } from '../../../../shared/services/registro.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bono } from '../../../../shared/models/producto/bono';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Emisor } from '../../../../shared/models/atributo-financiero/emisor';
import { TipoBonoSBS } from '../../../../shared/models/atributo-financiero/tipo-bono-sbs';

@Component({
  selector: 'app-carga-bono',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-bono.component.html',
  styleUrl: './carga-bono.component.scss',
})
export class CargaBonoComponent implements OnInit{

  @Output() close = new EventEmitter<any>();
  
  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoBonoSBS: TipoBonoSBS[] = [];

  nuevoRegistro: Bono = new Bono();

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBonoSBS();
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
    this.registroService.getListaTipoBonoSBS().subscribe(
      (response: TipoBonoSBS[]) => {
        this.listTipoBonoSBS = response;
      }
    )
  }

  registrar(){
    this.registroService.postRegistrarBono(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El bono ha sido registrada correctamente.',
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
