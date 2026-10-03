import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TasaInteres } from '../../../../../shared/models/factor/tasa-interes';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-carga-tasa-interes',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-tasa-interes.component.html',
  styleUrl: './carga-tasa-interes.component.scss'
})
export class CargaTasaInteresComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TasaInteres = new TasaInteres();

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codVertice)) f.push('Cod. Vértice');
    if (vacio(r.codCurvaProveedor)) f.push('Curva Proveedor');
    if (vacio(r.numPlazo)) f.push('Plazo');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
  }

  registrar(){
    if (this.faltantes.length > 0) return;
    this.registroService.postRegistrarTasaInteres(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La tasa de interés ha sido registrada correctamente.',
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
