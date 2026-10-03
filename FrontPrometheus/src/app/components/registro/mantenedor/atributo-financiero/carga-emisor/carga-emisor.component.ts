import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Emisor } from '../../../../../shared/models/atributo-financiero/emisor';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { Pais } from '../../../../../shared/models/atributo-financiero/pais';
import { CargaPaisComponent } from "../carga-pais/carga-pais.component";
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-emisor',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaPaisComponent, ModalFormularioComponent],
  templateUrl: './carga-emisor.component.html',
  styleUrl: './carga-emisor.component.scss'
})
export class CargaEmisorComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  guardando = false;

  listPais: Pais[] = [];
  nuevoRegistro: Emisor = new Emisor();

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.codEmisor)) f.push('Código');
    if (vacio(r.nomEmisor)) f.push('Nombre');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPais();
  }

  obtenerListPais(){
    this.registroService.getListaPais().subscribe(
      (response: Pais[]) => {
        this.listPais = response;
      }
    );
  }

  registrar(){
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarEmisor(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El emisor ha sido registrado correctamente.',
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

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListPais();
  }
}
