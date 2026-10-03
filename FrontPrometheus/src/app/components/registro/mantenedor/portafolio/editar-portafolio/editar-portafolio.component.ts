import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Portafolio } from '../../../../../shared/models/portafolio/portafolio';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { Benchmark } from '../../../../../shared/models/portafolio/benchmark';
import { CargaMonedaComponent } from '../../atributo-financiero/carga-moneda/carga-moneda.component';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-editar-portafolio',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent, ModalFormularioComponent],
  templateUrl: './editar-portafolio.component.html',
  styleUrl: './editar-portafolio.component.scss'
})
export class EditarPortafolioComponent {
  @Input() data!: Portafolio;
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  listMoneda: Moneda[] = [];
  listBenchmark: Benchmark[] = [];

  objRegistroEditado: Portafolio = new Portafolio();
  guardando = false;

  get faltantes(): string[] {
    const r = this.objRegistroEditado;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.descripcionPortafolio)) f.push('Descripción');
    if (vacio(r.idMoneda)) f.push('Moneda Gestión');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
    this.obtenerListMoneda();
    this.obtenerBenchmark();
  }

  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe(
      (response: Moneda[]) => {
        this.listMoneda = response;
      }
    )
  }

  obtenerBenchmark() {
    this.registroService.getListaBenchmark().subscribe(
      (response: Benchmark[]) => {
        this.listBenchmark = response;
      }
    )
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
        this.registroService.putModificarPortafolio(this.objRegistroEditado.idPortafolio, this.objRegistroEditado).subscribe(
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
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListMoneda();
  }
}
