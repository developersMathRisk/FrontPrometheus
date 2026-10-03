import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-moneda',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-moneda.component.html',
  styleUrl: './carga-moneda.component.scss'
})
export class CargaMonedaComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: Moneda = new Moneda();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codMoneda)) f.push('Código');
    if (vacio(r.desMoneda)) f.push('Descripción');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarMoneda(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La moneda ha sido registrada correctamente.',
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

  permitirSoloDoI(event: KeyboardEvent) {
    const tecla = event.key.toUpperCase();
    if (tecla !== 'D' && tecla !== 'I' && tecla.length === 1) {
      event.preventDefault();
    }
  }
}
