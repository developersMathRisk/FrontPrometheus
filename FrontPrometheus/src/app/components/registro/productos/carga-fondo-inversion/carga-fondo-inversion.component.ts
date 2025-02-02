import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { FondoInversion } from '../../../../shared/models/producto/fondo-inversion';
import { RegistroService } from '../../../../shared/services/registro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-carga-fondo-inversion',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-fondo-inversion.component.html',
  styleUrl: './carga-fondo-inversion.component.scss'
})
export class CargaFondoInversionComponent {
  @Output() close = new EventEmitter<any>();
  
  listMonedas: Moneda[] = [];

  nuevoRegistro: FondoInversion = new FondoInversion();

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerMonedas();
  }

  obtenerMonedas(){
    this.registroService.monedas().subscribe(
      (response: Moneda[]) => {
        this.listMonedas = response;
        console.log(this.listMonedas);
      }
    )
  }

  registrar(){
    this.registroService.postRegistrarFondoInversion(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El producto ha sido registrado correctamente.',
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
