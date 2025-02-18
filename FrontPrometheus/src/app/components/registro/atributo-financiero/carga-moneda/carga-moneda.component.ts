import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../shared/services/registro.service';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { Pais } from '../../../../shared/models/atributo-financiero/pais';

@Component({
  selector: 'app-carga-moneda',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-moneda.component.html',
  styleUrl: './carga-moneda.component.scss'
})
export class CargaMonedaComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: Moneda = new Moneda();
  listPais: Pais[] = [];

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPais();
  }

  obtenerListPais(){
      this.registroService.getListaPais().subscribe(
        (response: Pais[]) => {
          this.listPais = response;
        }
      )
    }

  registrar(){
    this.registroService.postRegistrarMoneda(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La moneda ha sido registrada correctamente.',
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
    this.modalService.dismissAll();
  }
}
