import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListaTasaInteresComponent } from '../lista-tasa-interes/lista-tasa-interes.component';
import { ListaIndiceMercadoComponent } from '../lista-indice-mercado/lista-indice-mercado.component';
import { ListaPrecioMercadoComponent } from '../lista-precio-mercado/lista-precio-mercado.component';
import { ListaVolatilidadComponent } from '../lista-volatilidad/lista-volatilidad.component';

@Component({
  selector: 'app-mantenedor-factores',
  standalone: true,
  imports: [NgSelectModule, CommonModule, FormsModule],
  templateUrl: './mantenedor-factores.component.html',
  styleUrl: './mantenedor-factores.component.scss'
})
export class MantenedorFactoresComponent {
  listaFactores: any[] = [];
  factorSeleccionado: number = 0;

  ngOnInit(){
    this.listaFactores = [
      { id: 1, descripcion: 'Tasa de Interés' },
      { id: 2, descripcion: 'Índice de Mercado' },
      { id: 3, descripcion: 'Precio de Mercado' },
      { id: 4, descripcion: 'Volatilidad' }
    ];
    this.factorSeleccionado = 1;
  }

  factoresComponentes: { [key: number]: Type<any> } = {
    1: ListaTasaInteresComponent,
    2: ListaIndiceMercadoComponent,
    3: ListaPrecioMercadoComponent,
    4: ListaVolatilidadComponent
  };

  get componenteSeleccionado() {
    return this.factoresComponentes[this.factorSeleccionado];
  }
}
