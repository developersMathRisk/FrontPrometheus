import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-tipo-instrumento',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-tipo-instrumento.component.html',
  styleUrl: './carga-tipo-instrumento.component.scss'
})
export class CargaTipoInstrumentoComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TipoInstrumento = new TipoInstrumento();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codTipoInstrumento)) f.push('Código');
    if (vacio(r.descripcionTipoInstrumento)) f.push('Descripción');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarTipoInstrumento(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El tipo de instrumento ha sido registrado correctamente.',
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
