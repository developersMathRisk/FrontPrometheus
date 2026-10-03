import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Plaza } from '../../../../../shared/models/atributo-financiero/plaza';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-editar-plaza',
  standalone: true,
  imports: [FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './editar-plaza.component.html',
  styleUrl: './editar-plaza.component.scss'
})
export class EditarPlazaComponent {
  @Input() data!: Plaza;
  @Output() close = new EventEmitter<any>();

  objRegistroEditado: Plaza = new Plaza;
  guardando = false;

  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codPlaza)) f.push('Código');
    if (vacio(r.desPlaza)) f.push('Descripción');
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
        this.registroService.putModificarPlaza(this.objRegistroEditado.idPlaza, this.objRegistroEditado).subscribe(
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
