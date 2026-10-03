import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { PrecioMercado } from '../../../../../shared/models/factor/precio-mercado';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { CargaMonedaComponent } from "../../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component";

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-editar-precio-mercado',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent, ModalFormularioComponent],
  templateUrl: './editar-precio-mercado.component.html',
  styleUrl: './editar-precio-mercado.component.scss'
})
export class EditarPrecioMercadoComponent {
  @Input() data!: PrecioMercado;
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  
  listMoneda: Moneda[] = [];
  objRegistroEditado: PrecioMercado = new PrecioMercado;
  
  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.fecProceso)) f.push('Fecha Proceso');
    if (vacio(r.nemonico)) f.push('Nemónico');
    if (vacio(r.idMoneda)) f.push('Moneda');
    if (vacio(r.numPrecioLimpio)) f.push('Precio Limpio');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListMoneda();
  }

  obtenerListMoneda(){
    this.registroService.getListaMoneda().subscribe(
      (response: Moneda[]) => {
        this.listMoneda = response;
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
        this.registroService.putModificarPrecioMercado(this.objRegistroEditado.idVectorPrecio, this.objRegistroEditado).subscribe(
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

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListMoneda();
  }
}
