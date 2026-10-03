import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TermVolatilidad } from '../../../../../shared/models/atributo-financiero/term-volatilidad';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-term-volatilidad',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-term-volatilidad.component.html',
  styleUrl: './carga-term-volatilidad.component.scss'
})
export class CargaTermVolatilidadComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TermVolatilidad = new TermVolatilidad();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.descripcionTermVolatility)) f.push('Descripción');
    if (vacio(r.code)) f.push('Código');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarTermVolatilidad(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El Term. Volatilidad ha sido registrado correctamente.',
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
