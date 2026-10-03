import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { IndiceMercado } from '../../../../../shared/models/factor/indice-mercado';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-carga-indice-mercado',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-indice-mercado.component.html',
  styleUrl: './carga-indice-mercado.component.scss'
})
export class CargaIndiceMercadoComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: IndiceMercado = new IndiceMercado();

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codigo)) f.push('Código');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
  }


  registrar(){
    if (this.faltantes.length > 0) return;
    this.registroService.postRegistrarIndiceMercado(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El índice de mercado ha sido registrado correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
      },
      (error: HttpErrorResponse) =>{
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
    //this.modalService.dismissAll();
  }
}
