import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Volatilidad } from '../../../../../shared/models/factor/volatilidad';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { TermVolatilidad } from '../../../../../shared/models/atributo-financiero/term-volatilidad';
import { SkewPoint } from '../../../../../shared/models/atributo-financiero/skew-point';
import { TipoCambio } from '../../../../../shared/models/atributo-financiero/tipo-cambio';
import { CargaTermVolatilidadComponent } from "../../atributo-financiero/carga-term-volatilidad/carga-term-volatilidad.component";
import { CargaSkewPointComponent } from "../../atributo-financiero/carga-skew-point/carga-skew-point.component";
import { CargaTipoCambioComponent } from "../../atributo-financiero/carga-tipo-cambio/carga-tipo-cambio.component";

import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';
@Component({
  selector: 'app-carga-volatilidad',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaTermVolatilidadComponent, CargaSkewPointComponent, CargaTipoCambioComponent, ModalFormularioComponent],
  templateUrl: './carga-volatilidad.component.html',
  styleUrl: './carga-volatilidad.component.scss'
})
export class CargaVolatilidadComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  listTermVolatilidad: TermVolatilidad[] = [];
  listSkewPoint: SkewPoint[] = [];
  listTipoCambio: TipoCambio[] = [];

  nuevoRegistro: Volatilidad = new Volatilidad();

  get faltantes(): string[] {
    const r = this.nuevoRegistro;
    const vacio = (valor: unknown) => valor === null || valor === undefined || valor === '';
    const f: string[] = [];
    if (vacio(r.fecProceso)) f.push('Fecha Proceso');
    if (vacio(r.valor)) f.push('Valor');
    if (vacio(r.idTermVolatility)) f.push('Term. Volatilidad');
    if (vacio(r.idSwekPoint)) f.push('Skew Point');
    if (vacio(r.idTipoCambio)) f.push('Tipo de Cambio');
    return f;
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }

  obtenerListTermVolatilidad() {
    this.registroService.getListaTermVolatilidad().subscribe(
      (response: TermVolatilidad[]) => {
        this.listTermVolatilidad = response;
      }
    )
  }

  obtenerListSkewPoint() {
    this.registroService.getListaSkewPoint().subscribe(
      (response: SkewPoint[]) => {
        this.listSkewPoint = response;
      }
    )
  }

  obtenerListTipoCambio() {
    this.registroService.getListaTipoCambio().subscribe(
      (response: TipoCambio[]) => {
        this.listTipoCambio = response;
      }
    )
  }

  registrar() {
    if (this.faltantes.length > 0) return;
    this.registroService.postRegistrarVolatilidad(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La volatilidad ha sido registrada correctamente.',
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
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }
}
