import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TermVolatilidad } from '../../../../../shared/models/atributo-financiero/term-volatilidad';

@Component({
  selector: 'app-carga-term-volatilidad',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-term-volatilidad.component.html',
  styleUrl: './carga-term-volatilidad.component.scss'
})
export class CargaTermVolatilidadComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TermVolatilidad = new TermVolatilidad();

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
  }


  registrar(){
    this.registroService.postRegistrarTermVolatilidad(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El Term. Volatilidad ha sido registrado correctamente.',
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
  }
}
