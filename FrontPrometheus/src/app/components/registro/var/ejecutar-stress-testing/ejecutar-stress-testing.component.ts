import { CommonModule } from '@angular/common';
import { AdvertenciasComponent } from '../../../../shared/components/advertencias/advertencias.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { HttpErrorResponse } from '@angular/common/http';
import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { Observable, map } from 'rxjs';
import { RegistroService } from '../../../../shared/services/registro.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { fadeIn, fadeSlideIn } from '../../../../shared/animations/transiciones';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { EjecutarStressRequest, EjecutarStressResponse } from '../../../../shared/models/var/ejecutar-stress';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';

interface EscenarioPreset {
  nombre: string;
  descripcion: string;
  shockPrecioPct: number;
  shockCambiarioPct: number;
}

/**
 * Ejecución de Stress Testing: revalúa el portafolio ACTUAL bajo un shock de precio y/o tipo de cambio,
 * usando el motor real (MathRisk-VarEngine/motores/stress) — no hay ningún multiplicador ilustrativo:
 * el impacto que se muestra es la revaluación exacta de las posiciones reales bajo el supuesto de shock
 * elegido. La única entrada "subjetiva" de un stress test es, como en cualquier mesa de riesgos, la
 * magnitud del shock: el cálculo del impacto en sí es determinístico.
 */
@Component({
  selector: 'app-ejecutar-stress-testing',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, MatIconModule, NgxSliderModule, LoaderComponent, EncabezadoComponent, AdvertenciasComponent],
  templateUrl: './ejecutar-stress-testing.component.html',
  styleUrl: './ejecutar-stress-testing.component.scss',
  animations: [fadeSlideIn, fadeIn],
})
export class EjecutarStressTestingComponent implements OnInit, OnDestroy {
  listaPortafolio: Portafolio[] = [];
  listMoneda: Moneda[] = [];
  idsPortafolioSeleccionados: number[] = [];
  idMonedaSeleccionada: number | null = null;
  monedaTocadaManualmente = false;

  readonly escenarios: EscenarioPreset[] = [
    { nombre: 'Caída de mercado -10%', descripcion: 'Todos los precios caen 10%.', shockPrecioPct: -0.10, shockCambiarioPct: 0 },
    { nombre: 'Caída de mercado -20%', descripcion: 'Todos los precios caen 20%.', shockPrecioPct: -0.20, shockCambiarioPct: 0 },
    { nombre: 'Crisis severa -35%', descripcion: 'Caída generalizada símil a una crisis financiera mayor.', shockPrecioPct: -0.35, shockCambiarioPct: 0 },
    { nombre: 'Shock cambiario +10%', descripcion: 'Devaluación de 10% de las monedas extranjeras del portafolio.', shockPrecioPct: 0, shockCambiarioPct: 0.10 },
    { nombre: 'Shock combinado', descripcion: 'Precios -20% y devaluación +10% a la vez.', shockPrecioPct: -0.20, shockCambiarioPct: 0.10 },
  ];
  escenarioSeleccionado: EscenarioPreset | null = null;
  modoPersonalizado = false;
  shockPrecioPersonalizado = -10;
  shockCambiarioPersonalizado = 0;

  // Sliders del modo personalizado: la caída de precios puede ser profunda; las alzas se acotan porque un
  // stress test estresa a la baja. El tipo de cambio se admite en ambos sentidos.
  readonly opcionesSliderPrecio: Options = this.opcionesSlider(-60, 20);
  readonly opcionesSliderCambiario: Options = this.opcionesSlider(-30, 30);

  private opcionesSlider(floor: number, ceil: number): Options {
    return {
      floor, ceil, step: 1, showTicks: false, hideLimitLabels: false,
      translate: (v: number) => `${v > 0 ? '+' : ''}${v}%`,
      ariaLabel: 'Magnitud del shock en porcentaje',
    };
  }

  /** Formato con signo explícito para las etiquetas de shock: −20%, +10%, 0%. */
  formatearShock(fraccion: number): string {
    const pct = Math.round(fraccion * 1000) / 10;
    if (pct === 0) return '0%';
    return `${pct > 0 ? '+' : '−'}${Math.abs(pct)}%`;
  }

  ejecutando = false;
  mensajeError = '';
  resultado: EjecutarStressResponse | null = null;

  constructor(private registroService: RegistroService, private asistente: AsistenteIaService) {}

  ngOnDestroy(): void {
    this.asistente.liberar('stress');
  }

  ngOnInit(): void {
    this.registroService.getListaPortafolio().subscribe(r => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe(r => this.listMoneda = r);
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

  elegirEscenario(e: EscenarioPreset) {
    this.modoPersonalizado = false;
    this.escenarioSeleccionado = e;
  }

  elegirPersonalizado() {
    this.modoPersonalizado = true;
    this.escenarioSeleccionado = null;
  }

  get shockPrecioActivoPct(): number {
    return this.modoPersonalizado ? this.shockPrecioPersonalizado / 100 : (this.escenarioSeleccionado?.shockPrecioPct ?? 0);
  }

  get shockCambiarioActivoPct(): number {
    return this.modoPersonalizado ? this.shockCambiarioPersonalizado / 100 : (this.escenarioSeleccionado?.shockCambiarioPct ?? 0);
  }

  get puedeEjecutar(): boolean {
    return this.idsPortafolioSeleccionados.length > 0 && !!this.idMonedaSeleccionada &&
      (this.modoPersonalizado || !!this.escenarioSeleccionado);
  }

  ejecutar() {
    if (!this.puedeEjecutar || this.ejecutando) return;

    const cuerpo: EjecutarStressRequest = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada!,
      shockPrecioPct: this.shockPrecioActivoPct,
      shockCambiarioPct: this.shockCambiarioActivoPct,
    };

    this.ejecutando = true;
    this.mensajeError = '';
    this.resultado = null;

    this.registroService.postEjecutarStress(cuerpo).subscribe({
      next: (r) => { this.resultado = r; this.ejecutando = false; this.registrarAsistente(r, cuerpo); },
      error: (error: HttpErrorResponse) => { this.mensajeError = mensajeDeError(error); this.ejecutando = false; },
    });
  }

  private fmt(v: number): string {
    return Math.abs(v).toLocaleString('es-PE', { maximumFractionDigits: 2 });
  }

  private registrarAsistente(r: EjecutarStressResponse, cuerpo: EjecutarStressRequest): void {
    const m = r.monedaReporte;
    const escenario = `precios ${this.formatearShock(r.shockPrecioPct)} y tipo de cambio ${this.formatearShock(r.shockCambiarioPct)}`;
    this.asistente.registrar({
      clave: 'stress',
      modulo: 'Riesgo de mercado · Stress testing',
      titulo: `Stress testing · ${r.descripcionPortafolio}`,
      interpretacion: `Con ${escenario}, el portafolio pasaría de ${this.fmt(r.mtmActual)} a ${this.fmt(r.mtmEstresado)} ${m}: ` +
        `${r.impactoTotal < 0 ? 'pérdida' : 'ganancia'} de ${this.fmt(r.impactoTotal)} ${m} (${this.formatearShock(r.impactoPct)}).`,
      opciones: [
        { etiqueta: 'Instrumentos más afectados', responder: () => {
          const top = [...r.instrumentos].sort((a, b) => a.impacto - b.impacto).slice(0, 3);
          if (!top.length) return 'No hay detalle por instrumento.';
          return 'Los más afectados: ' + top.map((i, n) => `${n + 1}) ${i.codTicker}: ${this.fmt(i.impacto)} ${m}` +
            (r.impactoTotal ? ` (${(i.impacto / r.impactoTotal * 100).toFixed(0)}% del impacto)` : '')).join('; ') + '.';
        } },
        { etiqueta: 'Explicar el escenario', responder: () =>
          `Se revalúa cada posición actual aplicando ${escenario}. El shock de precio afecta a todos los instrumentos; ` +
          `el cambiario solo a los denominados en moneda distinta de ${m}. No hay probabilidades: es un "¿qué pasaría si?" determinístico, ` +
          `complementario al VaR, útil para medir pérdidas en eventos extremos.` },
        { etiqueta: '¿Y si el shock fuera el doble?', responder: () => this.simular(cuerpo, r.shockPrecioPct * 2, r.shockCambiarioPct * 2) },
      ],
      placeholder: "Pregunte o simule, p. ej. '¿y si cae 30%?' o '¿y si el dólar sube 15%?'",
      responder: (q) => {
        const pct = q.match(/(-?\d+(?:[.,]\d+)?)\s*%/);
        if (!pct) return null;
        const v = Number(pct[1].replace(',', '.')) / 100;
        const baja = /(cae|caída|caida|baja|pierde|desplom)/i.test(q) ? -Math.abs(v) : v;
        const cambiaria = /(d[oó]lar|tipo de cambio|tc|devalu|cambiari)/i.test(q);
        return this.simular(cuerpo, cambiaria ? cuerpo.shockPrecioPct : baja, cambiaria ? Math.abs(v) * (/(baja|cae|apreci)/i.test(q) ? -1 : 1) : cuerpo.shockCambiarioPct);
      },
      datos: () => ({
        portafolio: r.descripcionPortafolio, moneda: m, shockPrecioPct: r.shockPrecioPct, shockCambiarioPct: r.shockCambiarioPct,
        mtmActual: r.mtmActual, mtmEstresado: r.mtmEstresado, impactoTotal: r.impactoTotal, impactoPct: r.impactoPct,
        instrumentos: [...r.instrumentos].sort((a, b) => a.impacto - b.impacto).slice(0, 25), totalInstrumentos: r.instrumentos.length,
        advertencias: r.advertencias?.slice(0, 10) ?? [],
      }),
    });
  }

  /** Simulación con el motor real de stress (no altera la pantalla). */
  private simular(cuerpo: EjecutarStressRequest, precio: number, cambio: number): Observable<string> {
    return this.registroService.postEjecutarStress({ ...cuerpo, shockPrecioPct: precio, shockCambiarioPct: cambio }).pipe(
      map(s => `Simulado con el motor: precios ${this.formatearShock(precio)} y tipo de cambio ${this.formatearShock(cambio)} → ` +
        `valor ${this.fmt(s.mtmEstresado)} ${s.monedaReporte}, ${s.impactoTotal < 0 ? 'pérdida' : 'ganancia'} de ` +
        `${this.fmt(s.impactoTotal)} ${s.monedaReporte} (${this.formatearShock(s.impactoPct)}).`));
  }

  anchoBarra(valor: number, maximo: number): number {
    if (!maximo) return 0;
    return Math.min(100, Math.round((Math.abs(valor) / Math.abs(maximo)) * 100));
  }

  get maxImpacto(): number {
    return Math.max(0.01, ...(this.resultado?.instrumentos.map(i => Math.abs(i.impacto)) ?? [0]));
  }
}
