import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Volatilidad } from '../../../../../shared/models/factor/volatilidad';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { CargaTermVolatilidadComponent } from "../../atributo-financiero/carga-term-volatilidad/carga-term-volatilidad.component";
import { CargaSkewPointComponent } from "../../atributo-financiero/carga-skew-point/carga-skew-point.component";
import { CargaTipoCambioComponent } from "../../atributo-financiero/carga-tipo-cambio/carga-tipo-cambio.component";
import { SkewPoint } from '../../../../../shared/models/atributo-financiero/skew-point';
import { TermVolatilidad } from '../../../../../shared/models/atributo-financiero/term-volatilidad';
import { TipoCambio } from '../../../../../shared/models/atributo-financiero/tipo-cambio';

@Component({
  selector: 'app-editar-volatilidad',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaTermVolatilidadComponent, CargaSkewPointComponent, CargaTipoCambioComponent],
  templateUrl: './editar-volatilidad.component.html',
  styleUrl: './editar-volatilidad.component.scss'
})
export class EditarVolatilidadComponent {
  @Input() data!: Volatilidad;
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  listTermVolatilidad: TermVolatilidad[] = [];
  listSkewPoint: SkewPoint[] = [];
  listTipoCambio: TipoCambio[] = [];
  
  objRegistroEditado: Volatilidad = new Volatilidad();
  
  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.objRegistroEditado = {...this.data};
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

  guardarCambios(){
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
        this.registroService.putModificarVolatilidad(this.objRegistroEditado.idVolatilitySurfacePoint, this.objRegistroEditado).subscribe(
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
