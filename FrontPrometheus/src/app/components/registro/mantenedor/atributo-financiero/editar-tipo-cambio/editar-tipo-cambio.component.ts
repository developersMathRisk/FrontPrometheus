import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TipoCambio } from '../../../../../shared/models/atributo-financiero/tipo-cambio';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-editar-tipo-cambio',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent, DatePickerComponent],
  templateUrl: './editar-tipo-cambio.component.html',
  styleUrl: './editar-tipo-cambio.component.scss'
})
export class EditarTipoCambioComponent {
  @Input() data!: TipoCambio;
  @Output() close = new EventEmitter<any>();

  objRegistroEditado: TipoCambio = new TipoCambio;
  guardando = false;

  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codFuenteDatos)) f.push('Fuente de Datos');
    if (vacio(r.desTicker)) f.push('Ticker');
    if (vacio(r.fecProceso)) f.push('Fecha de Proceso');
    if (vacio(r.valor)) f.push('Valor');
    return f;
  }

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
  }

  guardarCambios(){
    if (this.faltantes.length > 0) return;
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
        this.guardando = true;
        this.registroService.putModificarTipoCambio(this.objRegistroEditado.idTipoCambio, this.objRegistroEditado).subscribe(
          (response: any) => {
            this.guardando = false;
            Swal.fire({
              icon: 'success',
              title: 'Modificación exitosa',
              text: 'El registro ha sido modificado correctamente.',
              confirmButtonText: 'Aceptar'
            });
            this.cerrar();
          },
          (error: HttpErrorResponse) => {
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
    });
  }

  cerrar(){
    this.close.emit();
  }
}
