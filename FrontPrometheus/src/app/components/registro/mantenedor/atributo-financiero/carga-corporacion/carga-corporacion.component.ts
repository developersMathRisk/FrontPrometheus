import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { Corporacion } from '../../../../../shared/models/atributo-financiero/corporacion';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Pais } from '../../../../../shared/models/atributo-financiero/pais';
import { CargaPaisComponent } from "../carga-pais/carga-pais.component";

@Component({
  selector: 'app-carga-corporacion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaPaisComponent],
  templateUrl: './carga-corporacion.component.html',
  styleUrl: './carga-corporacion.component.scss'
})
export class CargaCorporacionComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  nuevoRegistro: Corporacion = new Corporacion();
  listPais: Pais[] = [];

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
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


  registrar(){
    this.registroService.postRegistrarCorporacion(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La corporación ha sido registrada correctamente.',
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
