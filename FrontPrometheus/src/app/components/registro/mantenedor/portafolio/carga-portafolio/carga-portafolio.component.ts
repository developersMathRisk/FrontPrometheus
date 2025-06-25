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
import { CargaMonedaComponent } from "../../atributo-financiero/carga-moneda/carga-moneda.component";
import { Benchmark } from '../../../../../shared/models/portafolio/benchmark';

@Component({
  selector: 'app-carga-portafolio',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent],
  templateUrl: './carga-portafolio.component.html',
  styleUrl: './carga-portafolio.component.scss'
})
export class CargaPortafolioComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  listMoneda: Moneda[] = [];
  listBenchmark: Benchmark[] = [];

  nuevoRegistro: Portafolio = new Portafolio();

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
    this.registroService.postRegistrarPortafolio(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El portafolio ha sido registrado correctamente.',
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

  cerrar() {
    this.close.emit();
  }

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListMoneda();
  }
}
