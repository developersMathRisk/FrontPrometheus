import {
  fadeIn,
  fadeSlideIn
} from "./chunk-7D3V4QVJ.js";
import {
  mensajeDeError
} from "./chunk-MBO6WKBF.js";
import {
  LoaderComponent,
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import "./chunk-BG5S72EG.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-GSML466W.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BKD3PXJL.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/var/ejecutar-stress-testing/ejecutar-stress-testing.component.ts
function EjecutarStressTestingComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function EjecutarStressTestingComponent_button_28_Template_button_click_0_listener() {
      const e_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.elegirEscenario(e_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("var-chip--activo", e_r2 === ctx_r2.escenarioSeleccionado);
    \u0275\u0275property("title", e_r2.descripcion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r2.nombre, " ");
  }
}
function EjecutarStressTestingComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "Shock de precio (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EjecutarStressTestingComponent_div_31_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.shockPrecioPersonalizado, $event) || (ctx_r2.shockPrecioPersonalizado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "label", 9);
    \u0275\u0275text(7, "Shock cambiario (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EjecutarStressTestingComponent_div_31_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.shockCambiarioPersonalizado, $event) || (ctx_r2.shockCambiarioPersonalizado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.shockPrecioPersonalizado);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.shockCambiarioPersonalizado);
  }
}
function EjecutarStressTestingComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, " Se aplicar\xE1 ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " al precio de los instrumentos y ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " al tipo de cambio de los instrumentos en moneda extranjera. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 2, ctx_r2.shockPrecioActivoPct * 100, "1.0-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 5, ctx_r2.shockCambiarioActivoPct * 100, "1.0-1"), "%");
  }
}
function EjecutarStressTestingComponent_app_loader_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 31);
  }
}
function EjecutarStressTestingComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 33);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.mensajeError);
  }
}
function EjecutarStressTestingComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "app-loader", 36);
    \u0275\u0275elementStart(3, "h3", 37);
    \u0275\u0275text(4, "Elija un escenario y ejecute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6, "El impacto real sobre el portafolio aparecer\xE1 aqu\xED.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function EjecutarStressTestingComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 35);
    \u0275\u0275element(2, "app-loader", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function EjecutarStressTestingComponent_div_41_p_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59)(1, "mat-icon", 33);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", a_r5, " ");
  }
}
function EjecutarStressTestingComponent_div_41_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 57);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 57)(12, "div", 61);
    \u0275\u0275element(13, "span", 62);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6.codTicker);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6.codISIN);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, i_r6.mtmActual, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, i_r6.mtmEstresado, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.anchoBarra(i_r6.impacto, ctx_r2.maxImpacto), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 13, i_r6.impacto, "1.2-2"));
  }
}
function EjecutarStressTestingComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3, "Resultado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "div", 46)(8, "div", 47)(9, "span", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 50);
    \u0275\u0275text(15, " Impacto sobre el valor de mercado (");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 51)(21, "div", 52)(22, "span", 53);
    \u0275\u0275text(23, "Valor actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 54);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 52)(28, "span", 53);
    \u0275\u0275text(29, "Valor estresado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 54);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 52)(34, "span", 53);
    \u0275\u0275text(35, "Shock de precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 54);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 52)(40, "span", 53);
    \u0275\u0275text(41, "Shock cambiario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 54);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, EjecutarStressTestingComponent_div_41_p_45_Template, 4, 1, "p", 55);
    \u0275\u0275elementStart(46, "table", 56)(47, "caption");
    \u0275\u0275text(48, "Impacto por instrumento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "thead")(50, "tr")(51, "th");
    \u0275\u0275text(52, "Ticker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "ISIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 57);
    \u0275\u0275text(56, "Valor actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 57);
    \u0275\u0275text(58, "Valor estresado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 57);
    \u0275\u0275text(60, "Impacto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, EjecutarStressTestingComponent_div_41_tr_62_Template, 17, 16, "tr", 58);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeSlideIn", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.resultado.fechaProceso);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, ctx_r2.resultado.impactoTotal, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.resultado.monedaReporte);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 15, ctx_r2.resultado.impactoPct * 100, "1.2-2"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(") \xB7 ", ctx_r2.resultado.descripcionPortafolio, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 18, ctx_r2.resultado.mtmActual, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 21, ctx_r2.resultado.mtmEstresado, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(38, 24, ctx_r2.resultado.shockPrecioPct * 100, "1.0-1"), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(44, 27, ctx_r2.resultado.shockCambiarioPct * 100, "1.0-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.resultado.advertencias);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.resultado.instrumentos);
  }
}
var EjecutarStressTestingComponent = class _EjecutarStressTestingComponent {
  constructor(registroService) {
    this.registroService = registroService;
    this.listaPortafolio = [];
    this.listMoneda = [];
    this.idsPortafolioSeleccionados = [];
    this.idMonedaSeleccionada = null;
    this.monedaTocadaManualmente = false;
    this.escenarios = [
      { nombre: "Ca\xEDda de mercado -10%", descripcion: "Todos los precios caen 10%.", shockPrecioPct: -0.1, shockCambiarioPct: 0 },
      { nombre: "Ca\xEDda de mercado -20%", descripcion: "Todos los precios caen 20%.", shockPrecioPct: -0.2, shockCambiarioPct: 0 },
      { nombre: "Crisis severa -35%", descripcion: "Ca\xEDda generalizada s\xEDmil a una crisis financiera mayor.", shockPrecioPct: -0.35, shockCambiarioPct: 0 },
      { nombre: "Shock cambiario +10%", descripcion: "Devaluaci\xF3n de 10% de las monedas extranjeras del portafolio.", shockPrecioPct: 0, shockCambiarioPct: 0.1 },
      { nombre: "Shock combinado", descripcion: "Precios -20% y devaluaci\xF3n +10% a la vez.", shockPrecioPct: -0.2, shockCambiarioPct: 0.1 }
    ];
    this.escenarioSeleccionado = null;
    this.modoPersonalizado = false;
    this.shockPrecioPersonalizado = -10;
    this.shockCambiarioPersonalizado = 0;
    this.ejecutando = false;
    this.mensajeError = "";
    this.resultado = null;
  }
  ngOnInit() {
    this.registroService.getListaPortafolio().subscribe((r) => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe((r) => this.listMoneda = r);
  }
  alCambiarPortafolio() {
    this.resultado = null;
    if (!this.monedaTocadaManualmente && this.idsPortafolioSeleccionados.length) {
      const p = this.listaPortafolio.find((x) => x.idPortafolio === this.idsPortafolioSeleccionados[0]);
      if (p)
        this.idMonedaSeleccionada = p.idMoneda;
    }
  }
  alCambiarMoneda() {
    this.monedaTocadaManualmente = true;
  }
  elegirEscenario(e) {
    this.modoPersonalizado = false;
    this.escenarioSeleccionado = e;
  }
  elegirPersonalizado() {
    this.modoPersonalizado = true;
    this.escenarioSeleccionado = null;
  }
  get shockPrecioActivoPct() {
    return this.modoPersonalizado ? this.shockPrecioPersonalizado / 100 : this.escenarioSeleccionado?.shockPrecioPct ?? 0;
  }
  get shockCambiarioActivoPct() {
    return this.modoPersonalizado ? this.shockCambiarioPersonalizado / 100 : this.escenarioSeleccionado?.shockCambiarioPct ?? 0;
  }
  get puedeEjecutar() {
    return this.idsPortafolioSeleccionados.length > 0 && !!this.idMonedaSeleccionada && (this.modoPersonalizado || !!this.escenarioSeleccionado);
  }
  ejecutar() {
    if (!this.puedeEjecutar || this.ejecutando)
      return;
    const cuerpo = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada,
      shockPrecioPct: this.shockPrecioActivoPct,
      shockCambiarioPct: this.shockCambiarioActivoPct
    };
    this.ejecutando = true;
    this.mensajeError = "";
    this.resultado = null;
    this.registroService.postEjecutarStress(cuerpo).subscribe({
      next: (r) => {
        this.resultado = r;
        this.ejecutando = false;
      },
      error: (error) => {
        this.mensajeError = mensajeDeError(error);
        this.ejecutando = false;
      }
    });
  }
  anchoBarra(valor, maximo) {
    if (!maximo)
      return 0;
    return Math.min(100, Math.round(Math.abs(valor) / Math.abs(maximo) * 100));
  }
  get maxImpacto() {
    return Math.max(0.01, ...this.resultado?.instrumentos.map((i) => Math.abs(i.impacto)) ?? [0]);
  }
  static {
    this.\u0275fac = function EjecutarStressTestingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EjecutarStressTestingComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EjecutarStressTestingComponent, selectors: [["app-ejecutar-stress-testing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 17, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "est-subtitulo"], [1, "est-layout"], [1, "est-layout__config", "card"], [1, "card-body", "est-config"], [1, "est-grid"], [1, "est-campo"], [1, "form-label"], [1, "hig-requerido"], ["placeholder", "Seleccione uno o varios...", "bindLabel", "descripcionPortafolio", "bindValue", "idPortafolio", 3, "ngModelChange", "change", "items", "multiple", "ngModel"], ["placeholder", "Seleccione...", "bindLabel", "desMoneda", "bindValue", "idMoneda", 3, "ngModelChange", "change", "items", "ngModel"], [1, "form-label", "mb-0"], [1, "var-chips"], ["type", "button", "class", "var-chip", 3, "var-chip--activo", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "var-chip", 3, "click"], ["class", "est-personalizado", 4, "ngIf"], ["class", "est-resumen-shock", 4, "ngIf"], [1, "est-accion"], ["type", "button", 1, "btn", "btn-primary", "est-accion__boton", 3, "click", "disabled"], ["tamano", "inline", "class", "me-2", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-0", "role", "alert", 4, "ngIf"], [1, "est-layout__resultado"], ["class", "card est-placeholder", 4, "ngIf"], ["class", "card est-calculando", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["type", "button", 1, "var-chip", 3, "click", "title"], [1, "est-personalizado"], ["type", "number", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "est-resumen-shock"], ["tamano", "inline", 1, "me-2"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-0"], ["aria-hidden", "true"], [1, "card", "est-placeholder"], [1, "card-body", "est-placeholder__cuerpo"], ["tamano", "grande"], [1, "est-placeholder__titulo"], [1, "est-placeholder__texto"], [1, "card", "est-calculando"], ["tamano", "grande", "etiqueta", "Revaluando el portafolio bajo el escenario..."], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "est-resultados__fecha"], [1, "card-body", "est-resultado"], [1, "est-hero"], [1, "est-hero__valor"], [1, "est-hero__cifra"], [1, "est-hero__moneda"], [1, "est-hero__leyenda"], [1, "est-resumen"], [1, "est-resumen__item"], [1, "est-resumen__etiqueta"], [1, "est-resumen__valor"], ["class", "est-nota", 4, "ngFor", "ngForOf"], [1, "est-tabla"], [1, "col-num"], [4, "ngFor", "ngForOf"], [1, "est-nota"], [1, "col-id"], [1, "est-barra-celda"], [1, "est-barra"]], template: function EjecutarStressTestingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Ejecuci\xF3n de Stress Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Reval\xFAe su portafolio bajo un escenario de shock, con los precios y posiciones reales.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Portafolio(s) ");
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "ng-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EjecutarStressTestingComponent_Template_ng_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idsPortafolioSeleccionados, $event) || (ctx.idsPortafolioSeleccionados = $event);
          return $event;
        });
        \u0275\u0275listener("change", function EjecutarStressTestingComponent_Template_ng_select_change_15_listener() {
          return ctx.alCambiarPortafolio();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
        \u0275\u0275text(18, "Moneda de reporte ");
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EjecutarStressTestingComponent_Template_ng_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idMonedaSeleccionada, $event) || (ctx.idMonedaSeleccionada = $event);
          return $event;
        });
        \u0275\u0275listener("change", function EjecutarStressTestingComponent_Template_ng_select_change_21_listener() {
          return ctx.alCambiarMoneda();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "span", 13);
        \u0275\u0275text(24, "Escenario de estr\xE9s ");
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275text(26, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14);
        \u0275\u0275template(28, EjecutarStressTestingComponent_button_28_Template, 2, 4, "button", 15);
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function EjecutarStressTestingComponent_Template_button_click_29_listener() {
          return ctx.elegirPersonalizado();
        });
        \u0275\u0275text(30, " Personalizado ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(31, EjecutarStressTestingComponent_div_31_Template, 9, 2, "div", 17)(32, EjecutarStressTestingComponent_p_32_Template, 10, 8, "p", 18);
        \u0275\u0275elementStart(33, "div", 19)(34, "button", 20);
        \u0275\u0275listener("click", function EjecutarStressTestingComponent_Template_button_click_34_listener() {
          return ctx.ejecutar();
        });
        \u0275\u0275template(35, EjecutarStressTestingComponent_app_loader_35_Template, 1, 0, "app-loader", 21);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, EjecutarStressTestingComponent_div_37_Template, 5, 1, "div", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 23);
        \u0275\u0275template(39, EjecutarStressTestingComponent_div_39_Template, 7, 1, "div", 24)(40, EjecutarStressTestingComponent_div_40_Template, 3, 1, "div", 25)(41, EjecutarStressTestingComponent_div_41_Template, 63, 30, "div", 26);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("items", ctx.listaPortafolio)("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.idsPortafolioSeleccionados);
        \u0275\u0275advance(6);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.idMonedaSeleccionada);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.escenarios);
        \u0275\u0275advance();
        \u0275\u0275classProp("var-chip--activo", ctx.modoPersonalizado);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.modoPersonalizado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.escenarioSeleccionado || ctx.modoPersonalizado);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.puedeEjecutar || ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.ejecutando ? "Calculando..." : "Ejecutar Stress Testing", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mensajeError);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.resultado && !ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resultado && !ctx.ejecutando);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, MatIconModule, MatIcon, LoaderComponent], styles: ["\n\n.est-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.hig-requerido[_ngcontent-%COMP%] {\n  margin-inline-start: 2px;\n  color: rgb(var(--danger-rgb));\n}\n.est-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(340px, 400px) 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.est-layout__config[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 82px;\n  max-height: calc(100vh - 98px);\n  overflow-y: auto;\n}\n.est-layout__resultado[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 1199px) {\n  .est-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .est-layout__config[_ngcontent-%COMP%] {\n    position: static;\n    max-height: none;\n  }\n}\n.est-placeholder__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 6px;\n  padding: 56px 24px;\n}\n.est-placeholder__titulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.est-placeholder__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 360px;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.est-config[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px 18px;\n}\n.est-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.est-campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.est-personalizado[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  max-width: 420px;\n}\n.est-resumen-shock[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  padding: 8px 10px;\n  background: rgba(var(--dark-rgb), 0.03);\n  border-radius: 8px;\n}\n.var-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.var-chip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.28);\n  border-radius: 999px;\n  transition: background-color 0.12s, border-color 0.12s;\n}\n.var-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.06);\n}\n.var-chip.var-chip--activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.12);\n  border-color: rgb(var(--primary-rgb));\n}\n.est-accion[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 4px;\n}\n.est-accion__boton[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 20px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.est-resultados__fecha[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.est-resultado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.est-hero[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  background: rgba(var(--danger-rgb), 0.07);\n  border: 1px solid rgba(var(--danger-rgb), 0.22);\n  border-radius: 10px;\n}\n.est-hero__valor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.est-hero__cifra[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.1;\n  color: rgb(var(--danger-rgb));\n  font-variant-numeric: tabular-nums;\n}\n.est-hero__moneda[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(var(--danger-rgb));\n}\n.est-hero__leyenda[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.est-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 28px;\n}\n.est-resumen__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.est-resumen__etiqueta[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: rgba(var(--dark-rgb), 0.6);\n}\n.est-resumen__valor[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.est-nota[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n  background: rgba(var(--warning-rgb), 0.12);\n  border-radius: 6px;\n}\n.est-nota[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  font-size: 15px;\n  color: rgb(var(--warning-rgb));\n}\n.est-tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.8125rem;\n  border-collapse: collapse;\n}\n.est-tabla[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 0 0 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: left;\n  caption-side: top;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.est-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.est-tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.1);\n}\n.est-tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.01em;\n  color: rgba(var(--dark-rgb), 0.65);\n  background: rgba(var(--dark-rgb), 0.04);\n}\n.est-tabla[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.est-tabla[_ngcontent-%COMP%]   .col-id[_ngcontent-%COMP%] {\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.est-barra-celda[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 92px;\n}\n.est-barra[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  bottom: 1px;\n  right: 0;\n  z-index: 0;\n  background: rgba(var(--danger-rgb), 0.14);\n  border-radius: 3px;\n}\n.est-barra-celda[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  position: relative;\n  z-index: 1;\n  padding-inline-end: 4px;\n}\n@media (max-width: 560px) {\n  .est-personalizado[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .est-tabla[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=ejecutar-stress-testing.component.css.map */"], data: { animation: [fadeSlideIn, fadeIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EjecutarStressTestingComponent, { className: "EjecutarStressTestingComponent", filePath: "src\\app\\components\\registro\\var\\ejecutar-stress-testing\\ejecutar-stress-testing.component.ts", lineNumber: 37 });
})();
export {
  EjecutarStressTestingComponent
};
//# sourceMappingURL=ejecutar-stress-testing.component-YRIQOELG.js.map
