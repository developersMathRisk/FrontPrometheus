import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Plaza } from '../../../../../shared/models/atributo-financiero/plaza';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-plaza',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-plaza.component.html',
  styleUrl: './carga-plaza.component.scss'
})
export class CargaPlazaComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: Plaza = new Plaza();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codPlaza)) f.push('Código');
    if (vacio(r.desPlaza)) f.push('Descripción');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarPlaza(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La plaza ha sido registrada correctamente.',
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
  }
}
