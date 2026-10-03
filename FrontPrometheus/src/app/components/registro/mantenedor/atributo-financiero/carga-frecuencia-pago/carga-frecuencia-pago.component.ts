import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { FrecuenciaPago } from '../../../../../shared/models/atributo-financiero/frecuencia-pago';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-frecuencia-pago',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-frecuencia-pago.component.html',
  styleUrl: './carga-frecuencia-pago.component.scss'
})
export class CargaFrecuenciaPagoComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: FrecuenciaPago = new FrecuenciaPago();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.nombreFrecuencia)) f.push('Nombre');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
  }


  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarFrecuenciaPago(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La frecuencia de pago ha sido registrada correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
      },
      (error: HttpErrorResponse) =>{
        this.guardando = false;
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
}
