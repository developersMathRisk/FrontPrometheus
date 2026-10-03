import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { Pais } from '../../../../../shared/models/atributo-financiero/pais';
import { CargaPaisComponent } from "../carga-pais/carga-pais.component";
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-editar-emisor',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaPaisComponent, ModalFormularioComponent],
  templateUrl: './editar-emisor.component.html',
  styleUrl: './editar-emisor.component.scss'
})
export class EditarEmisorComponent {
  @Input() data!: Emisor;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  guardando = false;

  listPais: Pais[] = [];
  objRegistroEditado: Emisor = new Emisor;

  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codEmisor)) f.push('Código');
    if (vacio(r.nomEmisor)) f.push('Nombre');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListPais();
  }

  obtenerListPais(){
    this.registroService.getListaPais().subscribe(
      (response: Pais[]) => {
        this.listPais = response;
      }
    );
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
        this.registroService.putModificarEmisor(this.objRegistroEditado.idEmisor, this.objRegistroEditado).subscribe(
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

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListPais();
  }
}
