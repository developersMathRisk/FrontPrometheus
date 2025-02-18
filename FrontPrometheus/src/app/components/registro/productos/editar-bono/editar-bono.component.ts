import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bono } from '../../../../shared/models/producto/bono';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { RegistroService } from '../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Emisor } from '../../../../shared/models/atributo-financiero/emisor';
import { TipoBonoSBS } from '../../../../shared/models/atributo-financiero/tipo-bono-sbs';

@Component({
  selector: 'app-editar-bono',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './editar-bono.component.html',
  styleUrl: './editar-bono.component.scss'
})
export class EditarBonoComponent {
  @Input() data!: Bono;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: Bono = new Bono;

  listEmisor: Emisor[] = [];
  listMoneda: Moneda[] = [];
  listTipoBonoSBS: TipoBonoSBS[] = [];
  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
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
        this.registroService.putModificarBono(this.objRegistroEditado.idBono, this.objRegistroEditado).subscribe(
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
