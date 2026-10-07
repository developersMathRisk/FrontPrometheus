import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, Type, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaTasaInteresComponent } from '../lista-tasa-interes/lista-tasa-interes.component';
import { ListaIndiceMercadoComponent } from '../lista-indice-mercado/lista-indice-mercado.component';
import { ListaPrecioMercadoComponent } from '../lista-precio-mercado/lista-precio-mercado.component';
import { ListaVolatilidadComponent } from '../lista-volatilidad/lista-volatilidad.component';
import { ListaTipoCambioComponent } from '../../atributo-financiero/lista-tipo-cambio/lista-tipo-cambio.component';
import { EncabezadoComponent } from '../../../../../shared/components/encabezado/encabezado.component';

interface Factor {
  id: number;
  etiqueta: string;
  descripcion: string;
  componente: Type<any>;
}

@Component({
  selector: 'app-mantenedor-factores',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  templateUrl: './mantenedor-factores.component.html',
  styleUrl: './mantenedor-factores.component.scss'
})
export class MantenedorFactoresComponent implements OnInit {
  readonly factores: Factor[] = [
    { id: 1, etiqueta: 'Tasa de Interés', descripcion: 'Vértices de las curvas de tasas de referencia.', componente: ListaTasaInteresComponent },
    { id: 2, etiqueta: 'Índice de Mercado', descripcion: 'Índices de referencia del mercado.', componente: ListaIndiceMercadoComponent },
    { id: 3, etiqueta: 'Precio de Mercado', descripcion: 'Precios históricos por instrumento y fecha; son la base del cálculo de VaR.', componente: ListaPrecioMercadoComponent },
    { id: 4, etiqueta: 'Volatilidad', descripcion: 'Superficie de volatilidad por plazo y punto de skew.', componente: ListaVolatilidadComponent },
    { id: 5, etiqueta: 'Tipo de Cambio', descripcion: 'Serie diaria de tipos de cambio por par de monedas; alimenta la conversión y el VaR cambiario.', componente: ListaTipoCambioComponent }
  ];

  factorSeleccionado = 1;

  @ViewChildren('segmento') segmentos!: QueryList<ElementRef<HTMLButtonElement>>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // ?factor=3 permite compartir o recargar la pantalla en el mismo factor
    const pedido = Number(this.route.snapshot.queryParamMap.get('factor'));
    if (this.factores.some(f => f.id === pedido)) {
      this.factorSeleccionado = pedido;
    }
  }

  get actual(): Factor {
    return this.factores.find(f => f.id === this.factorSeleccionado) ?? this.factores[0];
  }

  seleccionar(id: number) {
    if (id === this.factorSeleccionado) {
      return;
    }
    this.factorSeleccionado = id;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { factor: id },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  // Navegación con teclado del control segmentado: ← → Inicio Fin
  alTeclear(evento: KeyboardEvent, indice: number) {
    const ultimo = this.factores.length - 1;
    let destino: number;
    switch (evento.key) {
      case 'ArrowRight': destino = indice === ultimo ? 0 : indice + 1; break;
      case 'ArrowLeft': destino = indice === 0 ? ultimo : indice - 1; break;
      case 'Home': destino = 0; break;
      case 'End': destino = ultimo; break;
      default: return;
    }
    evento.preventDefault();
    this.seleccionar(this.factores[destino].id);
    this.segmentos.get(destino)?.nativeElement.focus();
  }
}
