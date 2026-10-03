import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Pais } from '../../../../../shared/models/atributo-financiero/pais';
import { RegistroService } from '../../../../../shared/services/registro.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-pais',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-pais.component.html',
  styleUrl: './carga-pais.component.scss'
})
export class CargaPaisComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: Pais = new Pais();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codPais)) f.push('Código');
    if (vacio(r.desPais)) f.push('Descripción');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarPais(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El país ha sido registrado correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
      },
      (error: HttpErrorResponse) =>{
        this.guardando = false;
        let mensaje: string = 'Ocurrió un error inesperado';
        if (error.error.detailMessage.toString().includes('duplicate key value')){
          mensaje == 'Registro duplicado'
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: mensaje,
          confirmButtonText: 'Aceptar'
        });
      }
    )
  }

  cerrar(){
    this.close.emit();
  }
}
