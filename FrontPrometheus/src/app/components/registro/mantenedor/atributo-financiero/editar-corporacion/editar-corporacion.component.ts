import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Corporacion } from '../../../../../shared/models/atributo-financiero/corporacion';
import { Pais } from '../../../../../shared/models/atributo-financiero/pais';
import { CargaPaisComponent } from "../carga-pais/carga-pais.component";

@Component({
  selector: 'app-editar-corporacion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaPaisComponent],
  templateUrl: './editar-corporacion.component.html',
  styleUrl: './editar-corporacion.component.scss'
})
export class EditarCorporacionComponent {
  @Input() data!: Corporacion;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  objRegistroEditado: Corporacion = new Corporacion;
  listPais: Pais[] = [];
  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerPaises();
  }

  obtenerPaises(){
    this.registroService.getListaPais().subscribe(
      (response: Pais[]) => {
        this.listPais = response;
      },
      (error: HttpErrorResponse) =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          confirmButtonText: 'Aceptar'
        });
      }
    );
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
        this.registroService.putModificarCorporacion(this.objRegistroEditado.id, this.objRegistroEditado).subscribe(
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

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerPaises();
  }
}
