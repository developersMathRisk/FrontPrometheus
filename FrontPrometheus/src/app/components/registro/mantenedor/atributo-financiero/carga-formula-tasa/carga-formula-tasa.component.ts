import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { FormulaTasa } from '../../../../../shared/models/atributo-financiero/formula-tasa';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-formula-tasa',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, ModalFormularioComponent],
  templateUrl: './carga-formula-tasa.component.html',
  styleUrl: './carga-formula-tasa.component.scss'
})
export class CargaFormulaTasaComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: FormulaTasa = new FormulaTasa();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.nombreFormula)) f.push('Nombre');
    if (vacio(r.expresionFormula)) f.push('Expresión');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
  }


  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarFormulaTasa(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La fórmula tasa ha sido registrada correctamente.',
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
    //this.modalService.dismissAll();
  }
}
