import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TipoCambio } from '../../../../../shared/models/atributo-financiero/tipo-cambio';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-carga-tipo-cambio',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent, DatePickerComponent],
  templateUrl: './carga-tipo-cambio.component.html',
  styleUrl: './carga-tipo-cambio.component.scss'
})
export class CargaTipoCambioComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TipoCambio = new TipoCambio();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codFuenteDatos)) f.push('Fuente de Datos');
    if (vacio(r.desTicker)) f.push('Ticker');
    if (vacio(r.fecProceso)) f.push('Fecha de Proceso');
    if (vacio(r.valor)) f.push('Valor');
    return f;
  }

  constructor(private registroService: RegistroService){}

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarTipoCambio(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El tipo de cambio ha sido registrado correctamente.',
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
