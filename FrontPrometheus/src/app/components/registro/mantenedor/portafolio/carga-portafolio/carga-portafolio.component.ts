import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Moneda } from '../../../../../shared/models/atributo-financiero/moneda';
import { Portafolio } from '../../../../../shared/models/portafolio/portafolio';
import { Benchmark } from '../../../../../shared/models/portafolio/benchmark';
import { CargaMonedaComponent } from "../../atributo-financiero/carga-moneda/carga-moneda.component";
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-portafolio',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent, ModalFormularioComponent],
  templateUrl: './carga-portafolio.component.html',
  styleUrl: './carga-portafolio.component.scss'
})
export class CargaPortafolioComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  listMoneda: Moneda[] = [];
  listBenchmark: Benchmark[] = [];

  nuevoRegistro: Portafolio = new Portafolio();
  guardando = false;

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.descripcionPortafolio)) f.push('Descripción');
    if (vacio(r.idMoneda)) f.push('Moneda Gestión');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal) { }

  ngOnInit(): void {
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

  registrar() {
    if (this.faltantes.length > 0) return;
    this.guardando = true;
    this.registroService.postRegistrarPortafolio(this.nuevoRegistro).subscribe(
      (response: any) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El portafolio ha sido registrado correctamente.',
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

  cerrar() {
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
