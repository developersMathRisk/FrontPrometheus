import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListaPaisComponent } from '../lista-pais/lista-pais.component';
import { ListaCorporacionComponent } from '../lista-corporacion/lista-corporacion.component';
import { ListaFuenteInformacionComponent } from '../lista-fuente-informacion/lista-fuente-informacion.component';
import { ListaPlazaComponent } from '../lista-plaza/lista-plaza.component';
import { ListaTipoAccionComponent } from '../lista-tipo-accion/lista-tipo-accion.component';
import { ListaMetodoAmortizacionComponent } from '../lista-metodo-amortizacion/lista-metodo-amortizacion.component';
import { ListaSubsidiariaComponent } from '../lista-subsidiaria/lista-subsidiaria.component';
import { ListaFrecuenciaPagoComponent } from '../lista-frecuencia-pago/lista-frecuencia-pago.component';
import { ListaFormulaTasaComponent } from '../lista-formula-tasa/lista-formula-tasa.component';
import { ListaCalculoBaseInteresComponent } from '../lista-calculo-base-interes/lista-calculo-base-interes.component';
import { ListaTipoTasaComponent } from '../lista-tipo-tasa/lista-tipo-tasa.component';
import { ListaTasaRjteComponent } from '../lista-tasa-rjte/lista-tasa-rjte.component';
import { ListaCurvaReferenciaComponent } from '../lista-curva-referencia/lista-curva-referencia.component';
import { ListaTipoEmisionComponent } from '../lista-tipo-emision/lista-tipo-emision.component';
import { ListaTipoFondoComponent } from '../lista-tipo-fondo/lista-tipo-fondo.component';
import { ListaEmisorComponent } from '../lista-emisor/lista-emisor.component';
import { ListaMonedaComponent } from '../lista-moneda/lista-moneda.component';
import { ListaSectorComponent } from '../lista-sector/lista-sector.component';
import { ListaGrupoEconomicoComponent } from '../lista-grupo-economico/lista-grupo-economico.component';
import { ListaTipoBonoSbsComponent } from '../lista-tipo-bono-sbs/lista-tipo-bono-sbs.component';
import { ListaTermVolatilidadComponent } from '../lista-term-volatilidad/lista-term-volatilidad.component';
import { ListaSkewPointComponent } from '../lista-skew-point/lista-skew-point.component';
import { ListaTipoCambioComponent } from '../lista-tipo-cambio/lista-tipo-cambio.component';
import { ListaTipoInstrumentoComponent } from '../lista-tipo-instrumento/lista-tipo-instrumento.component';
import { ListaTipoSectorComponent } from '../lista-tipo-sector/lista-tipo-sector.component';
import { EncabezadoComponent } from '../../../../../shared/components/encabezado/encabezado.component';

@Component({
  selector: 'app-mantenedor-atributos-financieros',
  standalone: true,
  imports: [NgSelectModule, CommonModule, FormsModule, EncabezadoComponent],
  templateUrl: './mantenedor-atributos-financieros.component.html',
  styleUrl: './mantenedor-atributos-financieros.component.scss'
})
export class MantenedorAtributosFinancierosComponent {
  listaProductos: any[] = [];
  productoSeleccionado: number = 0;

  ngOnInit(){
    this.listaProductos = [
      { id: 1, descripcion: 'País' },
      { id: 2, descripcion: 'Corporación' },
      { id: 3, descripcion: 'Fuente de Información' },
      { id: 4, descripcion: 'Plaza' },
      { id: 5, descripcion: 'Tipo Acción' },
      { id: 6, descripcion: 'Emisor' },
      { id: 7, descripcion: 'Moneda' },
      { id: 8, descripcion: 'Subsidiaria' },
      { id: 9, descripcion: 'Sector' },
      { id: 10, descripcion: 'Grupo Económico' },
      { id: 11, descripcion: 'Método Amortización' },
      { id: 12, descripcion: 'Frecuencia Pago' },
      { id: 13, descripcion: 'Fórmula Tasa' },
      { id: 14, descripcion: 'Cálculo Base Interés' },
      { id: 15, descripcion: 'Tipo Tasa' },
      { id: 16, descripcion: 'Tasa RJE' },
      { id: 17, descripcion: 'Curva Referencia' },
      { id: 18, descripcion: 'Tipo Emisión' },
      { id: 19, descripcion: 'Tipo Fondo' },
      { id: 20, descripcion: 'Tipo Bono' },
      { id: 21, descripcion: 'Term. Volatilidad' },
      { id: 22, descripcion: 'Skew Point' },
      { id: 23, descripcion: 'Tipo Cambio' },
      { id: 24, descripcion: 'Tipo Instrumento' },
      { id: 25, descripcion: 'Tipo Sector' },
    ];
    this.productoSeleccionado = 1;
  }

  productosComponentes: { [key: number]: Type<any> } = {
    1: ListaPaisComponent,
    2: ListaCorporacionComponent,
    3: ListaFuenteInformacionComponent,
    4: ListaPlazaComponent,
    5: ListaTipoAccionComponent,
    6: ListaEmisorComponent,
    7: ListaMonedaComponent,
    8: ListaSubsidiariaComponent,
    9: ListaSectorComponent,
    10: ListaGrupoEconomicoComponent,
    11: ListaMetodoAmortizacionComponent,
    12: ListaFrecuenciaPagoComponent,
    13: ListaFormulaTasaComponent,
    14: ListaCalculoBaseInteresComponent,
    15: ListaTipoTasaComponent,
    16: ListaTasaRjteComponent,
    17: ListaCurvaReferenciaComponent,
    18: ListaTipoEmisionComponent,
    19: ListaTipoFondoComponent,
    20: ListaTipoBonoSbsComponent,
    21: ListaTermVolatilidadComponent,
    22: ListaSkewPointComponent,
    23: ListaTipoCambioComponent,
    24: ListaTipoInstrumentoComponent,
    25: ListaTipoSectorComponent
  };

  get componenteSeleccionado() {
    return this.productosComponentes[this.productoSeleccionado];
  }
}
