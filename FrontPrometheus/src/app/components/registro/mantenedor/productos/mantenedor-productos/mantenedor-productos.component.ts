import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, Type, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaAccionComponent } from '../lista-accion/lista-accion.component';
import { ListaBonoComponent } from '../lista-bono/lista-bono.component';
import { ListaFondoInversionComponent } from '../lista-fondo-inversion/lista-fondo-inversion.component';
import { EncabezadoComponent } from '../../../../../shared/components/encabezado/encabezado.component';

interface Producto {
  id: number;
  etiqueta: string;
  descripcion: string;
  componente: Type<any>;
}

@Component({
  selector: 'app-mantenedor-productos',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  templateUrl: './mantenedor-productos.component.html',
  styleUrl: './mantenedor-productos.component.scss'
})
export class MantenedorProductosComponent implements OnInit {
  readonly productos: Producto[] = [
    { id: 1, etiqueta: 'Acción', descripcion: 'Acciones que pueden incluirse en portafolios y en el cálculo de VaR.', componente: ListaAccionComponent },
    { id: 2, etiqueta: 'Bono', descripcion: 'Bonos con sus condiciones financieras y su cuponera.', componente: ListaBonoComponent },
    { id: 3, etiqueta: 'Fondo de Inversión', descripcion: 'Fondos mutuos y de inversión que pueden incluirse en portafolios.', componente: ListaFondoInversionComponent }
  ];

  productoSeleccionado = 1;

  @ViewChildren('segmento') segmentos!: QueryList<ElementRef<HTMLButtonElement>>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // ?producto=2 permite compartir o recargar la pantalla en el mismo tipo de instrumento
    const pedido = Number(this.route.snapshot.queryParamMap.get('producto'));
    if (this.productos.some(p => p.id === pedido)) {
      this.productoSeleccionado = pedido;
    }
  }

  get actual(): Producto {
    return this.productos.find(p => p.id === this.productoSeleccionado) ?? this.productos[0];
  }

  seleccionar(id: number) {
    if (id === this.productoSeleccionado) {
      return;
    }
    this.productoSeleccionado = id;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { producto: id },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  // Navegación con teclado del control segmentado: ← → Inicio Fin
  alTeclear(evento: KeyboardEvent, indice: number) {
    const ultimo = this.productos.length - 1;
    let destino: number;
    switch (evento.key) {
      case 'ArrowRight': destino = indice === ultimo ? 0 : indice + 1; break;
      case 'ArrowLeft': destino = indice === 0 ? ultimo : indice - 1; break;
      case 'Home': destino = 0; break;
      case 'End': destino = ultimo; break;
      default: return;
    }
    evento.preventDefault();
    this.seleccionar(this.productos[destino].id);
    this.segmentos.get(destino)?.nativeElement.focus();
  }
}
