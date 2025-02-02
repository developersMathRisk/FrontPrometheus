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

@Component({
  selector: 'app-carga-bono',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-bono.component.html',
  styleUrl: './carga-bono.component.scss',
})
export class CargaBonoComponent implements OnInit{

  @Output() close = new EventEmitter<any>();
  
  listMonedas: Moneda[] = [];
  monedaSeleccionada: string = '';
  flgCargaAutomatica: boolean = false;
  flgActivo: boolean = false;
  flgCalculoVaR: boolean = false;
  strCodISIN: string = '';
  strTicker: string = '';
  strNemonico: string = '';

  nuevoBono: Bono = new Bono();

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
    this.nuevoBono.fecInicio = this.nuevoBono.fecInicio + "T00:00:00";
    this.registroService.postRegistrarBono(this.nuevoBono).subscribe(
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
