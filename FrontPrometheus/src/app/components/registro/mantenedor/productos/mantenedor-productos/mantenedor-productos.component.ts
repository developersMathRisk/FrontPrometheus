import { Component, Type } from '@angular/core';
import { ListaAccionComponent } from '../lista-accion/lista-accion.component';
import { ListaBonoComponent } from '../lista-bono/lista-bono.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaFondoInversionComponent } from "../lista-fondo-inversion/lista-fondo-inversion.component";

@Component({
  selector: 'app-mantenedor-productos',
  standalone: true,
  imports: [NgSelectModule, CommonModule, FormsModule],
  templateUrl: './mantenedor-productos.component.html',
  styleUrl: './mantenedor-productos.component.scss'
})
export class MantenedorProductosComponent {

  listaProductos: any[] = [];
  productoSeleccionado: number = 0;

  ngOnInit(){
    this.listaProductos = [
      { id: 1, descripcion: 'Acción' },
      { id: 2, descripcion: 'Bono' },
      { id: 3, descripcion: 'Fondo de Inversiones' }
    ];
    this.productoSeleccionado = 1;
  }

  productosComponentes: { [key: number]: Type<any> } = {
      1: ListaAccionComponent,
      2: ListaBonoComponent,
      3: ListaFondoInversionComponent
      // agregar más si es necesario
    };
  
    get componenteSeleccionado() {
      return this.productosComponentes[this.productoSeleccionado];
    }

}
