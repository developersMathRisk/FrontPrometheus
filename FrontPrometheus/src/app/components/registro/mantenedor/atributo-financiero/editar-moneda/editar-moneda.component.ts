import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-editar-moneda',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './editar-moneda.component.html',
  styleUrl: './editar-moneda.component.scss'
})
export class EditarMonedaComponent {
  @Input() data!: Moneda;
  @Output() close = new EventEmitter<any>();

  objRegistroEditado: Moneda = new Moneda;
  guardando = false;

  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codMoneda)) f.push('Código');
    if (vacio(r.desMoneda)) f.push('Descripción');
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
        this.registroService.putModificarMoneda(this.objRegistroEditado.idMoneda, this.objRegistroEditado).subscribe(
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

  permitirSoloDoI(event: KeyboardEvent) {
    const tecla = event.key.toUpperCase();
    if (tecla !== 'D' && tecla !== 'I' && tecla.length === 1) {
      event.preventDefault();
    }
  }
}
