import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-portafolio',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './detalle-portafolio.component.html',
  styleUrl: './detalle-portafolio.component.scss'
})
export class DetallePortafolioComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;

  registrar(){
    
  }

  cerrar(){
    this.close.emit();
  }
}
