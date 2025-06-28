import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TipoInstrumento } from '../../../../../shared/models/atributo-financiero/tipo-instrumento';

@Component({
  selector: 'app-carga-tipo-instrumento',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule],
  templateUrl: './carga-tipo-instrumento.component.html',
  styleUrl: './carga-tipo-instrumento.component.scss'
})
export class CargaTipoInstrumentoComponent {
  @Output() close = new EventEmitter<any>();

  nuevoRegistro: TipoInstrumento = new TipoInstrumento();

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
  }


  registrar(){
    this.registroService.postRegistrarTipoInstrumento(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El tipo de instrumento ha sido registrado correctamente.',
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
