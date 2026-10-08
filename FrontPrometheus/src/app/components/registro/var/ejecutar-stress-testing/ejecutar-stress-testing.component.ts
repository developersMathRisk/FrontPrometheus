import { CommonModule } from '@angular/common';
import { AdvertenciasComponent } from '../../../../shared/components/advertencias/advertencias.component';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { HttpErrorResponse } from '@angular/common/http';
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
export class EjecutarStressTestingComponent implements OnInit {
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

  constructor(private registroService: RegistroService) {}

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
      next: (r) => { this.resultado = r; this.ejecutando = false; },
      error: (error: HttpErrorResponse) => { this.mensajeError = mensajeDeError(error); this.ejecutando = false; },
    });
  }

  anchoBarra(valor: number, maximo: number): number {
    if (!maximo) return 0;
    return Math.min(100, Math.round((Math.abs(valor) / Math.abs(maximo)) * 100));
  }

  get maxImpacto(): number {
    return Math.max(0.01, ...(this.resultado?.instrumentos.map(i => Math.abs(i.impacto)) ?? [0]));
  }
}
