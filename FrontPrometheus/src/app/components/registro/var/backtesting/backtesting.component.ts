import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpErrorResponse } from '@angular/common/http';
import { RegistroService } from '../../../../shared/services/registro.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeIn, fadeSlideIn } from '../../../../shared/animations/transiciones';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { NivelConfianza } from '../../../../shared/models/var/nivel-confianza';
import { EjecutarBacktestingRequest, EjecutarBacktestingResponse } from '../../../../shared/models/var/ejecutar-backtesting';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { ChipGroupComponent, ChipOpcion } from '../../../../shared/components/chip-group/chip-group.component';

/**
 * Backtesting del VaR: prueba retrospectiva walk-forward y FUERA de muestra (Art. 27° Resolución SBS
 * N° 4906-2017), calculada por el motor real (MathRisk-VarEngine/motores/backtesting). Para cada día
 * de prueba, el motor estima el VaR usando solo los días anteriores (sin ver el futuro) y lo compara
 * contra la pérdida/ganancia real de ese día, aplicando la prueba de Kupiec (POF) para decidir si el
 * modelo está bien calibrado. Nada de esto es in-sample ni aproximado.
 */
@Component({
  selector: 'app-backtesting',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, MatIconModule, NgApexchartsModule, LoaderComponent, EncabezadoComponent, ChipGroupComponent],
  templateUrl: './backtesting.component.html',
  styleUrl: './backtesting.component.scss',
  animations: [fadeSlideIn, fadeIn],
})
export class BacktestingComponent implements OnInit {
  listaPortafolio: Portafolio[] = [];
  listMoneda: Moneda[] = [];
  listNivelConfianza: NivelConfianza[] = [];
  idsPortafolioSeleccionados: number[] = [];
  idMonedaSeleccionada: number | null = null;
  monedaTocadaManualmente = false;
  idNivelConfianzaSeleccionado: number | null = null;
  nivelConfianzaSeleccionado = 0.99;
  ventana = 100;

  ejecutando = false;
  mensajeError = '';
  resultado: EjecutarBacktestingResponse | null = null;
  chart: any = null;

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroService.getListaPortafolio().subscribe(r => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe(r => this.listMoneda = r);
    this.registroService.getListaNivelConfianza().subscribe(r => {
      this.listNivelConfianza = r.sort((a, b) => a.valorNivelConfianza - b.valorNivelConfianza);
      const masAlto = this.listNivelConfianza[this.listNivelConfianza.length - 1];
      if (masAlto) { this.idNivelConfianzaSeleccionado = masAlto.idNivelConfianza; this.nivelConfianzaSeleccionado = masAlto.valorNivelConfianza; }
    });
  }

  alCambiarPortafolio() {
    this.resultado = null;
    if (!this.monedaTocadaManualmente && this.idsPortafolioSeleccionados.length) {
      const p = this.listaPortafolio.find(x => x.idPortafolio === this.idsPortafolioSeleccionados[0]);
      if (p) this.idMonedaSeleccionada = p.idMoneda;
    }
  }

  alCambiarMoneda() {
    this.monedaTocadaManualmente = true;
  }

  get opcionesConfianza(): ChipOpcion[] {
    return this.listNivelConfianza.map(nc => ({
      valor: nc.idNivelConfianza,
      etiqueta: `${(nc.valorNivelConfianza * 100).toFixed(1)}%`,
    }));
  }

  alElegirConfianza(id: number | null) {
    this.idNivelConfianzaSeleccionado = id;
    const nc = this.listNivelConfianza.find(n => n.idNivelConfianza === id);
    if (nc) this.nivelConfianzaSeleccionado = nc.valorNivelConfianza;
  }

  get puedeEjecutar(): boolean {
    return this.idsPortafolioSeleccionados.length > 0 && !!this.idMonedaSeleccionada && this.ventana >= 31;
  }

  ejecutar() {
    if (!this.puedeEjecutar || this.ejecutando) return;

    const cuerpo: EjecutarBacktestingRequest = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada!,
      nivelConfianza: this.nivelConfianzaSeleccionado,
      ventana: this.ventana,
      numObservacionesTotal: Math.max(500, this.ventana * 3),
    };

    this.ejecutando = true;
    this.mensajeError = '';
    this.resultado = null;
    this.chart = null;

    this.registroService.postEjecutarBacktesting(cuerpo).subscribe({
      next: (r) => { this.resultado = r; this.ejecutando = false; this.chart = this.armarChart(r); },
      error: (error: HttpErrorResponse) => { this.mensajeError = mensajeDeError(error); this.ejecutando = false; },
    });
  }

  get zona(): 'verde' | 'rojo' {
    return this.resultado?.modeloAdecuado ? 'verde' : 'rojo';
  }

  get zonaTexto(): string {
    return this.resultado?.modeloAdecuado
      ? 'La tasa de excepciones es estadísticamente compatible con el nivel de confianza (prueba de Kupiec).'
      : 'La prueba de Kupiec rechaza el modelo: las excepciones observadas no son compatibles con el nivel de confianza.';
  }

  private armarChart(r: EjecutarBacktestingResponse) {
    const categorias = r.serie.map(p => p.fecha);
    const pnl = r.serie.map(p => p.pnlReal);
    const varLinea = r.serie.map(p => p.varEstimado);
    const excepciones = r.serie.map(p => (p.esExcepcion ? p.pnlReal : null));

    return {
      series: [
        { name: 'P&L real', type: 'column', data: pnl },
        { name: `VaR estimado (${(r.nivelConfianza * 100).toFixed(1)}%)`, type: 'line', data: varLinea },
        { name: 'Excepción', type: 'scatter', data: excepciones },
      ],
      chart: { height: 340, type: 'line', toolbar: { show: false } },
      colors: ['#4454c3', '#e7515a', '#e7515a'],
      stroke: { width: [0, 2, 0], dashArray: [0, 4, 0] },
      markers: { size: [0, 0, 6], hover: { size: 7 } },
      dataLabels: { enabled: false },
      xaxis: { categories: categorias, labels: { rotate: -45, style: { fontSize: '9px' } }, title: { text: 'Día de prueba (fuera de muestra)', style: { fontSize: '11px' } } },
      yaxis: { title: { text: `P&L (${r.monedaReporte})`, style: { fontSize: '11px' } }, labels: { style: { fontSize: '10px' } } },
      legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px' },
      grid: { borderColor: 'rgba(128,128,128,0.15)' },
    };
  }
}
