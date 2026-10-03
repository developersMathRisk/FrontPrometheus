import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TasaInteres } from '../../../../../shared/models/factor/tasa-interes';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-editar-tasa-interes',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './editar-tasa-interes.component.html',
  styleUrl: './editar-tasa-interes.component.scss'
})
export class EditarTasaInteresComponent {
  @Input() data!: TasaInteres;
  @Output() close = new EventEmitter<any>();
  
  objRegistroEditado: TasaInteres = new TasaInteres;
  
  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codVertice)) f.push('Cod. Vértice');
    if (vacio(r.codCurvaProveedor)) f.push('Curva Proveedor');
    if (vacio(r.numPlazo)) f.push('Plazo');
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
        this.registroService.putModificarTasaInteres(this.objRegistroEditado.idCurvaReferenciaPuntos, this.objRegistroEditado).subscribe(
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
