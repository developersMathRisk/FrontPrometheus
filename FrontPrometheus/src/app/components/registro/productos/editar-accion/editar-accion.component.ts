import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Accion } from '../../../../shared/models/producto/accion';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-accion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './editar-accion.component.html',
  styleUrl: './editar-accion.component.scss'
})
export class EditarAccionComponent {
  @Input() data!: Accion;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: Accion = new Accion;
  
  idAccion: number = 0;
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
    this.objRegistroEditado = {...this.data};
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
    this.modalService.dismissAll();
  }
}
