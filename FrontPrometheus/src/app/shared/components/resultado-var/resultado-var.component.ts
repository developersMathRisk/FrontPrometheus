import { CommonModule } from '@angular/common';
import { AdvertenciasComponent } from '../advertencias/advertencias.component';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AsistenteIaService } from '../../services/asistente-ia.service';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EjecutarVarResponse, ResultadoMetodoVar } from '../../models/var/ejecutar-var-response';
import { PuntoDistribucionVar, PuntoSerieVar } from '../../models/var/punto-var';
import { Moneda } from '../../models/atributo-financiero/moneda';
import { EjecutarStressResponse } from '../../models/var/ejecutar-stress';
import { RegistroService } from '../../services/registro.service';
import { LoaderComponent } from '../loader/loader.component';
import { fadeIn, fadeSlideIn } from '../../animations/transiciones';

/**
 * Muestra el resultado de un cálculo de VaR: un número principal bien destacado
 * (la combinación más conservadora de metodología y nivel de confianza), la tabla
 * comparativa completa, el desglose por instrumento y dos gráficos con datos reales
 * guardados en la base de datos:
 *   - Histograma de pérdidas y ganancias históricas, con la cola que supera el VaR resaltada.
 *   - Evolución del VaR de este portafolio a través de sus ejecuciones guardadas.
 * La usan tanto "Ejecución de VaR" (resultado recién calculado) como "Consulta de
 * resultados VaR" (resultado guardado, con `esHistorico: true`: sin MTM/peso/aporte).
 */
@Component({
  selector: 'app-resultado-var',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, LoaderComponent, AdvertenciasComponent],
  templateUrl: './resultado-var.component.html',
  styleUrl: './resultado-var.component.scss',
  animations: [fadeSlideIn, fadeIn],
})
export class ResultadoVarComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) resultado!: EjecutarVarResponse;

  cargandoDistribucion = false;
  distribucion: PuntoDistribucionVar[] = [];
  chartHistograma: any = null;

  // Número de barras del histograma: por defecto se calcula con la regla de Sturges
  // (k = ceil(log2(n) + 1)), el estándar estadístico para elegir el número de intervalos
  // según el tamaño de la muestra. El usuario puede pedir más o menos detalle a mano.
  numBinsManual: number | null = null;

  cargandoSerie = false;
  serie: PuntoSerieVar[] = [];
  chartSerie: any = null;

  // ---- asistente IA: se registra en la burbuja flotante del shell -----------------------------
  listMoneda: Moneda[] = [];

  private readonly sugerenciasIA = [
    '¿Qué pasa si el mercado cae 20%?',
    '¿Qué pasa si el dólar sube 10%?',
    '¿Qué tan expuesto estoy a una crisis de -35%?',
  ];

  constructor(private registroService: RegistroService, private router: Router, private asistente: AsistenteIaService) {}

  ngOnInit(): void {
    this.registroService.getListaMoneda().subscribe(r => this.listMoneda = r);
  }

  abrirAnexo9() {
    if (!this.resultado?.idResultadoVARDetalle) return;
    this.router.navigate(['registro/var/anexo9'], { queryParams: { idResultadoVARDetalle: this.resultado.idResultadoVARDetalle } });
  }

  ngOnChanges(cambios: SimpleChanges): void {
    if (cambios['resultado']) {
      this.numBinsManual = null; // cada resultado nuevo vuelve a partir de Sturges
      this.cargarDistribucion();
      this.cargarSerie();
      this.registrarAsistente();
    }
  }

  ngOnDestroy(): void {
    this.asistente.liberar(this.claveAsistente);
  }

  private get claveAsistente(): string {
    return `var-${this.resultado?.idResultadoVARDetalle ?? this.resultado?.descripcionPortafolio}`;
  }

  private registrarAsistente(): void {
    const interpretacion = this.interpretacion;
    if (!interpretacion) return;
    this.asistente.registrar({
      clave: this.claveAsistente,
      modulo: 'Riesgo de mercado · VaR',
      titulo: this.resultado.descripcionPortafolio,
      interpretacion,
      opciones: [
        { etiqueta: '¿Qué instrumento aporta más riesgo?', responder: () => this.respuestaTopRiesgo() },
        { etiqueta: '¿Cuánto aporta la diversificación?', responder: () => this.respuestaDiversificacion() },
        { etiqueta: 'Comparar metodologías', responder: () => this.respuestaMetodologias() },
      ],
      sugerencias: this.sugerenciasIA,
      placeholder: "Pregunte o simule, p. ej. '¿qué pasa si el mercado cae 20%?'",
      responder: (pregunta) => this.responder(pregunta),
      datos: () => this.resumenParaIa(),
    });
  }

  private fmt(v: number | null | undefined): string {
    return Math.abs(v ?? 0).toLocaleString('es-PE', { maximumFractionDigits: 2 });
  }

  private respuestaTopRiesgo(): string {
    const lista = [...(this.resultado.instrumentos ?? [])]
      .sort((a, b) => Math.abs(b.varDesagregado ?? b.varIndividual) - Math.abs(a.varDesagregado ?? a.varIndividual)).slice(0, 3);
    if (!lista.length) return 'Esta ejecución no tiene desglose por instrumento.';
    const m = this.resultado.monedaReporte;
    const total = Math.abs(this.destacado?.varDiversificado ?? 0);
    return 'Los instrumentos que más explican el VaR son: ' + lista.map((i, n) => {
      const aporte = Math.abs(i.varDesagregado ?? i.varIndividual);
      const pct = total ? ` (${(aporte / total * 100).toFixed(0)}% del VaR)` : '';
      return `${n + 1}) ${i.codTicker}: aporte ${this.fmt(aporte)} ${m}${pct}`;
    }).join('; ') + '. Reducir o cubrir esas posiciones es lo que más movería el riesgo total.';
  }

  private respuestaDiversificacion(): string {
    const d = this.destacado;
    if (!d || d.varNoDiversificado == null) return 'El resultado guardado no conserva el VaR no diversificado; vuelva a ejecutar el cálculo para verlo.';
    const m = this.resultado.monedaReporte;
    const beneficio = Math.abs(d.varNoDiversificado) - Math.abs(d.varDiversificado);
    const pct = Math.abs(d.varNoDiversificado) ? beneficio / Math.abs(d.varNoDiversificado) * 100 : 0;
    return `Sumando el VaR de cada instrumento por separado la pérdida sería ${this.fmt(d.varNoDiversificado)} ${m}; ` +
      `al considerar que no caen todos a la vez, el VaR del portafolio es ${this.fmt(d.varDiversificado)} ${m}. ` +
      `La diversificación reduce el riesgo en ${this.fmt(beneficio)} ${m} (${pct.toFixed(0)}%).`;
  }

  private respuestaMetodologias(): string {
    const nivel = Math.max(...this.resultado.resultados.map(r => r.nivelConfianza));
    const fila = this.resultado.resultados.filter(r => r.nivelConfianza === nivel);
    if (fila.length < 2) return 'Esta ejecución usó una sola metodología; ejecute con varias para compararlas.';
    const m = this.resultado.monedaReporte;
    const orden = [...fila].sort((a, b) => Math.abs(b.varDiversificado) - Math.abs(a.varDiversificado));
    const max = orden[0], min = orden[orden.length - 1];
    const brecha = Math.abs(min.varDiversificado) ? (Math.abs(max.varDiversificado) / Math.abs(min.varDiversificado) - 1) * 100 : 0;
    return `Al ${(nivel * 100).toFixed(1)}%: ` + orden.map(r => `${r.metodologia} ${this.fmt(r.varDiversificado)} ${m}`).join(', ') +
      `. ${max.metodologia} es ${brecha.toFixed(0)}% más conservador que ${min.metodologia}. ` +
      (max.metodologia.toLowerCase().includes('hist') ? 'Que el histórico supere a los modelos normales sugiere colas más pesadas que una distribución normal.'
        : 'Una brecha grande indica que el supuesto de distribución pesa en el resultado.');
  }

  /** Resumen compacto del cálculo para el modelo de lenguaje (sin listas largas). */
  private resumenParaIa() {
    const r = this.resultado;
    return {
      portafolio: r.descripcionPortafolio, monedaReporte: r.monedaReporte, valorPortafolio: r.valorPortafolio,
      ventanaHistorica: { desde: r.fechaInicio, hasta: r.fechaFin, escenarios: r.numEscenarios }, fechaProceso: r.fechaProceso,
      resultados: r.resultados.map(x => ({ metodologia: x.metodologia, confianza: x.nivelConfianza, var: x.varDiversificado,
        cvar: x.cvarDiversificado ?? null, varNoDiversificado: x.varNoDiversificado ?? null, pctCartera: x.ratioVar })),
      instrumentosPrincipales: [...(r.instrumentos ?? [])]
        .sort((a, b) => Math.abs(b.varDesagregado ?? b.varIndividual) - Math.abs(a.varDesagregado ?? a.varIndividual)).slice(0, 15)
        .map(i => ({ ticker: i.codTicker, tipo: i.nombreTipoInstrumento, exposicion: i.mtm ?? null, peso: i.pesoPct ?? null,
          varIndividual: i.varIndividual, aporteVar: i.varDesagregado ?? null })),
      totalInstrumentos: r.instrumentos?.length ?? 0,
      rentaFija: r.rentaFija ? { fechaValoracion: r.rentaFija.fechaValoracion, duracionModificadaCartera: this.duracionCarteraBonos,
        convexidadCartera: this.convexidadCarteraBonos, impactoMas100pb: this.impactoMasCienPb } : null,
      advertencias: r.advertencias?.slice(0, 10) ?? [],
      evolucionVar: this.serie.slice(-10).map(p => ({ fecha: p.fechaProceso, var: p.valorVAR })),
    };
  }

  /** Interpretación automática del resultado, generada apenas termina el cálculo: ancla cada frase
   *  a números reales de esta ejecución (destacado, instrumentos, comparación con la anterior). No
   *  llama a ningún modelo de lenguaje todavía; arma la explicación con los datos ya calculados. */
  get interpretacion(): string {
    const d = this.destacado;
    if (!d || !this.resultado?.instrumentos?.length) return '';

    const varPct = (Math.abs(d.varDiversificado) / this.resultado.valorPortafolio) * 100;
    const top = [...this.resultado.instrumentos]
      .sort((a, b) => Math.abs(b.varDesagregado ?? b.varIndividual) - Math.abs(a.varDesagregado ?? a.varIndividual))[0];

    let frase = `El VaR más conservador de esta ejecución es ${d.metodologia} al ${(d.nivelConfianza * 100).toFixed(1)}%: ` +
      `una pérdida potencial de ${Math.abs(d.varDiversificado).toLocaleString('es-PE', { maximumFractionDigits: 2 })} ` +
      `${this.resultado.monedaReporte} (${varPct.toFixed(2)}% del portafolio)`;

    if (top) {
      frase += `, principalmente explicada por ${top.codTicker} (${top.nombreTipoInstrumento})`;
    }
    frase += '.';

    if (this.serie.length >= 2) {
      const anterior = this.serie[this.serie.length - 2].valorVAR;
      const actual = this.serie[this.serie.length - 1].valorVAR;
      if (anterior !== 0) {
        const variacion = ((Math.abs(actual) - Math.abs(anterior)) / Math.abs(anterior)) * 100;
        frase += ` Esto representa un ${variacion >= 0 ? 'aumento' : 'disminución'} de ${Math.abs(variacion).toFixed(1)}% ` +
          `respecto a la ejecución anterior.`;
      }
    }
    return frase;
  }

  /** Responde una pregunta del asistente: reconoce un shock de precio o cambiario y lo simula con el motor real de Stress Testing. */
  private responder(texto: string): Observable<string> | null {
    const escenario = this.interpretarEscenario(texto);
    // Sin un shock en %, la pregunta la responde el modelo de lenguaje con el resumen del cálculo
    if (!escenario.reconocido) return null;
    const moneda = this.listMoneda.find(m => m.codMoneda === this.resultado.monedaReporte);
    if (!moneda || !this.resultado.idsPortafolio?.length) {
      return of('No pude identificar el portafolio o la moneda para simular el escenario.');
    }
    return this.registroService.postEjecutarStress({
      idsPortafolio: this.resultado.idsPortafolio,
      idMoneda: moneda.idMoneda,
      shockPrecioPct: escenario.shockPrecioPct,
      shockCambiarioPct: escenario.shockCambiarioPct,
    }).pipe(
      map(r => this.formatearRespuestaStress(r)),
      catchError(() => of('El motor de Stress Testing no pudo calcular este escenario con los datos actuales.')),
    );
  }

  private interpretarEscenario(texto: string): { shockPrecioPct: number; shockCambiarioPct: number; reconocido: boolean } {
    const t = texto.toLowerCase();
    const match = t.match(/(-?\d+(?:\.\d+)?)\s*%/);
    if (!match) return { shockPrecioPct: 0, shockCambiarioPct: 0, reconocido: false };

    let magnitud = Math.abs(parseFloat(match[1])) / 100;
    const esCambiario = /(cambio|d[oó]lar|fx|devalua)/.test(t);
    const esCaida = /(cae|ca[ií]da|baja|crisis|desplome)/.test(t) || match[1].startsWith('-');

    if (esCambiario) {
      return { shockPrecioPct: 0, shockCambiarioPct: esCaida ? -magnitud : magnitud, reconocido: true };
    }
    return { shockPrecioPct: esCaida ? -magnitud : magnitud, shockCambiarioPct: 0, reconocido: true };
  }

  private formatearRespuestaStress(r: EjecutarStressResponse): string {
    const impacto = r.impactoTotal.toLocaleString('es-PE', { maximumFractionDigits: 2 });
    const pct = (r.impactoPct * 100).toFixed(2);
    return `Simulación real (motor de Stress Testing): bajo ese escenario (shock de precio ` +
      `${(r.shockPrecioPct * 100).toFixed(1)}%, shock cambiario ${(r.shockCambiarioPct * 100).toFixed(1)}%), ` +
      `el valor del portafolio pasaría de ${r.mtmActual.toLocaleString('es-PE', { maximumFractionDigits: 2 })} a ` +
      `${r.mtmEstresado.toLocaleString('es-PE', { maximumFractionDigits: 2 })} ${r.monedaReporte} ` +
      `(impacto de ${impacto} ${r.monedaReporte}, ${pct}%).`;
  }

  /** Regla de Sturges: número de intervalos recomendado para un histograma según el tamaño de la muestra. */
  private sturges(n: number): number {
    if (n <= 1) return 1;
    return Math.max(5, Math.min(30, Math.ceil(Math.log2(n) + 1)));
  }

  get numBinsSturges(): number {
    return this.sturges(this.distribucion.length);
  }

  get numBinsEfectivo(): number {
    return this.numBinsManual ?? this.numBinsSturges;
  }

  get usaBinsAutomaticos(): boolean {
    return this.numBinsManual === null;
  }

  cambiarBins(delta: number) {
    const nuevo = this.numBinsEfectivo + delta;
    if (nuevo < 5 || nuevo > 30) return;
    this.numBinsManual = nuevo;
    if (this.distribucion.length) this.chartHistograma = this.armarHistograma(this.distribucion);
  }

  restablecerBinsAutomaticos() {
    this.numBinsManual = null;
    if (this.distribucion.length) this.chartHistograma = this.armarHistograma(this.distribucion);
  }

  get destacado(): ResultadoMetodoVar | null {
    if (!this.resultado?.resultados?.length) return null;
    // La combinación más conservadora: mayor pérdida absoluta (normalmente, el nivel de confianza más alto)
    return [...this.resultado.resultados].sort((a, b) => a.varDiversificado - b.varDiversificado)[0];
  }

  /** El resultado "histórico" más conservador: es el que corresponde a la distribución real graficada. */
  get destacadoHistorico(): ResultadoMetodoVar | null {
    const historicos = this.resultado?.resultados.filter(r => r.metodologia.toLowerCase().includes('hist')) ?? [];
    if (!historicos.length) return null;
    return [...historicos].sort((a, b) => a.varDiversificado - b.varDiversificado)[0];
  }

  /** Título explícito del histograma: a qué metodología y nivel de confianza corresponde. */
  get tituloHistograma(): string {
    const d = this.destacadoHistorico;
    return d
      ? `Distribución histórica de pérdidas y ganancias — VaR ${d.metodologia} ${(d.nivelConfianza * 100).toFixed(1)}%`
      : 'Distribución histórica de pérdidas y ganancias';
  }

  /** Título explícito de la serie: misma idea, para la evolución en el tiempo. */
  get tituloSerie(): string {
    const d = this.destacadoHistorico ?? this.destacado;
    return d
      ? `Evolución del VaR — ${d.metodologia} ${(d.nivelConfianza * 100).toFixed(1)}% (${this.esMultiPortafolio ? 'portafolios combinados' : this.resultado?.descripcionPortafolio})`
      : 'Evolución del VaR de este portafolio';
  }

  // ---- matriz VaR × nivel de confianza ----------------------------------------------
  /** Niveles de confianza de esta ejecución, de menor a mayor (columnas de la matriz). */
  get nivelesMatriz(): number[] {
    return [...new Set(this.resultado?.resultados.map(r => r.nivelConfianza) ?? [])].sort((a, b) => a - b);
  }

  /** Metodologías de esta ejecución, en el orden en que llegaron (filas de la matriz). */
  get metodologiasMatriz(): string[] {
    return [...new Set(this.resultado?.resultados.map(r => r.metodologia) ?? [])];
  }

  /** Solo tiene sentido cruzar dos ejes cuando hay más de una celda. */
  get mostrarMatriz(): boolean {
    return (this.resultado?.resultados.length ?? 0) > 1 && this.nivelesMatriz.length > 0;
  }

  celdaMatriz(metodologia: string, nivel: number): ResultadoMetodoVar | undefined {
    return this.resultado?.resultados.find(r => r.metodologia === metodologia && r.nivelConfianza === nivel);
  }

  /** Intensidad 0–1 de la celda respecto a la pérdida máxima de la matriz (para el sombreado). */
  intensidadCelda(celda: ResultadoMetodoVar | undefined): number {
    return celda ? Math.abs(celda.varDiversificado) / this.maxVarDiversificado : 0;
  }

  esMaxima(celda: ResultadoMetodoVar | undefined): boolean {
    return !!celda && celda === this.destacado;
  }

  get tieneCvar(): boolean {
    return this.resultado?.resultados.some(r => r.cvarDiversificado != null) ?? false;
  }

  // ---- renta fija: métricas de la cartera de bonos ponderadas por valor -------------------
  private promedioPonderadoBonos(campo: 'duracionModificada' | 'convexidad'): number {
    const bonos = this.resultado?.rentaFija?.instrumentos ?? [];
    const total = bonos.reduce((s, b) => s + b.mtm, 0);
    return total ? bonos.reduce((s, b) => s + b.mtm * (b[campo] ?? 0), 0) / total : 0;
  }

  get duracionCarteraBonos(): number {
    return this.promedioPonderadoBonos('duracionModificada');
  }

  get convexidadCarteraBonos(): number {
    return this.promedioPonderadoBonos('convexidad');
  }

  /** ΔV ≈ −D·Δy·V + ½·C·Δy²·V con Δy = 1%: pérdida aproximada de los bonos si las tasas suben 100 pb. */
  get impactoMasCienPb(): number {
    const valor = (this.resultado?.rentaFija?.instrumentos ?? []).reduce((s, b) => s + b.mtm, 0);
    const dy = 0.01;
    return valor * (-this.duracionCarteraBonos * dy + 0.5 * this.convexidadCarteraBonos * dy * dy);
  }

  get mostrarColumnasInstrumento(): boolean {
    return !this.resultado.esHistorico;
  }

  get esMultiPortafolio(): boolean {
    return (this.resultado?.idsPortafolio?.length ?? 0) > 1;
  }

  anchoBarra(valor: number, maximo: number): number {
    if (!maximo) return 0;
    return Math.min(100, Math.round((Math.abs(valor) / Math.abs(maximo)) * 100));
  }

  get maxVarDiversificado(): number {
    return Math.max(0.01, ...(this.resultado?.resultados.map(r => Math.abs(r.varDiversificado)) ?? [0]));
  }

  get maxVarIndividual(): number {
    return Math.max(0.01, ...(this.resultado?.instrumentos.map(i => Math.abs(i.varIndividual)) ?? [0]));
  }

  // ---- histograma de pérdidas/ganancias --------------------------------------------
  private cargarDistribucion() {
    this.distribucion = [];
    this.chartHistograma = null;
    if (!this.resultado?.idResultadoVARDetalle) return;

    this.cargandoDistribucion = true;
    this.registroService.getDistribucionVar(this.resultado.idResultadoVARDetalle).subscribe({
      next: (r) => {
        this.distribucion = r;
        this.cargandoDistribucion = false;
        if (r.length) this.chartHistograma = this.armarHistograma(r);
      },
      error: () => this.cargandoDistribucion = false,
    });
  }

  private armarHistograma(puntos: PuntoDistribucionVar[]) {
    const valores = puntos.map(p => p.perdida);
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const numBins = this.numBinsEfectivo;
    const ancho = (max - min) / numBins || 1;
    // El umbral es el VaR "histórico" (misma metodología que esta distribución real), no el más
    // conservador entre todas las metodologías: comparar contra el de Monte Carlo, por ejemplo,
    // no tendría sentido sobre datos históricos reales.
    const varUmbral = this.destacadoHistorico?.varDiversificado ?? min;

    const cuerpo = new Array(numBins).fill(0);
    const cola = new Array(numBins).fill(0);
    const categorias: string[] = [];
    for (let i = 0; i < numBins; i++) {
      const inicioBin = min + i * ancho;
      categorias.push(this.formatearMiles(inicioBin));
    }
    for (const v of valores) {
      let i = Math.floor((v - min) / ancho);
      if (i >= numBins) i = numBins - 1;
      if (i < 0) i = 0;
      const inicioBin = min + i * ancho;
      // El VaR es una pérdida (negativo): un bin cuyo extremo izquierdo ya iguala o supera esa
      // pérdida cae en la cola de riesgo; el resto es la parte "normal" de la distribución.
      (inicioBin <= varUmbral ? cola : cuerpo)[i]++;
    }

    return {
      series: [
        { name: 'Dentro del rango normal', data: cuerpo },
        { name: `Cola de pérdida (≥ VaR ${this.destacadoHistorico ? (this.destacadoHistorico.nivelConfianza * 100).toFixed(1) : ''}%)`, data: cola },
      ],
      chart: { type: 'bar', height: 260, stacked: true, toolbar: { show: false } },
      colors: ['#4454c3', '#e7515a'],
      plotOptions: { bar: { columnWidth: '92%' } },
      dataLabels: { enabled: false },
      legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px' },
      xaxis: {
        categories: categorias,
        title: { text: `Pérdida/ganancia por escenario histórico (${this.resultado.monedaReporte})`, style: { fontSize: '11px' } },
        labels: { rotate: -45, style: { fontSize: '9px' } },
      },
      yaxis: { title: { text: 'N.º de escenarios', style: { fontSize: '11px' } }, labels: { style: { fontSize: '10px' } } },
      grid: { borderColor: 'rgba(128,128,128,0.15)' },
      tooltip: { y: { formatter: (v: number) => `${v} escenario(s)` } },
    };
  }

  // ---- evolución del VaR --------------------------------------------------------------
  private cargarSerie() {
    this.serie = [];
    this.chartSerie = null;
    // Se usa siempre la misma combinación (histórico si está disponible) para que la serie compare
    // manzanas con manzanas entre ejecuciones, en vez de saltar de metodología según cuál "ganó" cada vez.
    const d = this.destacadoHistorico ?? this.destacado;
    if (!this.resultado?.idsPortafolio?.length || !d?.idTipoMetodologiaVAR) return;

    this.cargandoSerie = true;
    this.registroService.getSerieVar(this.resultado.idsPortafolio, d.idTipoMetodologiaVAR, d.nivelConfianza, 30).subscribe({
      next: (r) => {
        this.serie = r;
        this.cargandoSerie = false;
        if (r.length >= 2) this.chartSerie = this.armarSerie(r, d);
        this.registrarAsistente();
      },
      error: () => this.cargandoSerie = false,
    });
  }

  private armarSerie(puntos: PuntoSerieVar[], d: ResultadoMetodoVar) {
    return {
      series: [{ name: `VaR ${(d.nivelConfianza * 100).toFixed(1)}% (${d.metodologia})`, data: puntos.map(p => p.valorVAR) }],
      chart: { type: 'line', height: 260, toolbar: { show: false }, zoom: { enabled: false } },
      colors: ['#e7515a'],
      stroke: { curve: 'straight', width: 2.5 },
      markers: { size: 4 },
      dataLabels: { enabled: false },
      xaxis: {
        categories: puntos.map(p => p.fechaProceso),
        title: { text: 'Fecha de la ejecución', style: { fontSize: '11px' } },
        labels: { style: { fontSize: '9px' } },
      },
      yaxis: {
        title: { text: `VaR (${this.resultado.monedaReporte})`, style: { fontSize: '11px' } },
        labels: { style: { fontSize: '10px' } },
      },
      grid: { borderColor: 'rgba(128,128,128,0.15)' },
    };
  }

  private formatearMiles(v: number): string {
    return Math.round(v).toLocaleString('es-PE');
  }
}
