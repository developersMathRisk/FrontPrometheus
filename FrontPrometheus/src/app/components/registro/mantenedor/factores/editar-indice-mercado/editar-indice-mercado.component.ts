import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { IndiceMercado } from '../../../../../shared/models/factor/indice-mercado';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-editar-indice-mercado',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './editar-indice-mercado.component.html',
  styleUrl: './editar-indice-mercado.component.scss'
})
export class EditarIndiceMercadoComponent {
  @Input() data!: IndiceMercado;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: IndiceMercado = new IndiceMercado;
  
  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codigo)) f.push('Código');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

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
        this.registroService.putModificarIndiceMercado(this.objRegistroEditado.codigo, this.objRegistroEditado).subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Modificación exitosa',
              text: 'El registro ha sido modificado correctamente.',
              confirmButtonText: 'Aceptar'
            });
            this.cerrar();
          },
          (error: HttpErrorResponse) => {
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
    //this.modalService.dismissAll();
  }
}
