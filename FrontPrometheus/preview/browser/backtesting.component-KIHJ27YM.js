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
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
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
  ɵɵclassMap,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/var/backtesting/backtesting.component.ts
function BacktestingComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function BacktestingComponent_button_30_Template_button_click_0_listener() {
      const nc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.elegirNivelConfianza(nc_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("var-chip--activo", nc_r2.idNivelConfianza === ctx_r2.idNivelConfianzaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, nc_r2.valorNivelConfianza * 100, "1.1-2"), "% ");
  }
}
function BacktestingComponent_app_loader_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 26);
  }
}
function BacktestingComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "mat-icon", 28);
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
function BacktestingComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "app-loader", 31);
    \u0275\u0275elementStart(3, "h3", 32);
    \u0275\u0275text(4, "Configure y ejecute el backtesting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, " El resultado (d\xEDas evaluados, excepciones y prueba de Kupiec) aparecer\xE1 aqu\xED. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function BacktestingComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 30);
    \u0275\u0275element(2, "app-loader", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function BacktestingComponent_div_39_apx_chart_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 46);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r2.chart.series)("chart", ctx_r2.chart.chart)("colors", ctx_r2.chart.colors)("stroke", ctx_r2.chart.stroke)("markers", ctx_r2.chart.markers)("dataLabels", ctx_r2.chart.dataLabels)("xaxis", ctx_r2.chart.xaxis)("yaxis", ctx_r2.chart.yaxis)("legend", ctx_r2.chart.legend)("grid", ctx_r2.chart.grid);
  }
}
function BacktestingComponent_div_39_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43)(1, "mat-icon", 28);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", a_r4, " ");
  }
}
function BacktestingComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "div", 40)(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 42);
    \u0275\u0275text(10, "D\xEDas evaluados (fuera de muestra)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40)(12, "span", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 42);
    \u0275\u0275text(15, "Excepciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 40)(17, "span", 41);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 42);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 40)(24, "span", 41);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 42);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "p", 43)(30, "mat-icon", 28);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, BacktestingComponent_div_39_apx_chart_33_Template, 1, 10, "apx-chart", 44)(34, BacktestingComponent_div_39_p_34_Template, 4, 1, "p", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeSlideIn", void 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r2.resultado.descripcionPortafolio, " \xB7 ventana de ", ctx_r2.resultado.ventana, " d\xEDas \xB7 ", \u0275\u0275pipeBind2(4, 18, ctx_r2.resultado.nivelConfianza * 100, "1.1-2"), "% de confianza ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.resultado.diasEvaluados);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.resultado.excepciones);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 21, ctx_r2.resultado.tasaObservada * 100, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tasa observada (esperada: ", \u0275\u0275pipeBind2(22, 24, ctx_r2.resultado.tasaEsperada * 100, "1.2-2"), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bt-kpi--" + ctx_r2.zona);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("LR = ", \u0275\u0275pipeBind2(26, 27, ctx_r2.resultado.estadisticoLR, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Prueba de Kupiec (cr\xEDtico: ", ctx_r2.resultado.valorCriticoChi2, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("bt-nota--ok", ctx_r2.resultado.modeloAdecuado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resultado.modeloAdecuado ? "check_circle" : "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.zonaTexto, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.chart);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.resultado.advertencias);
  }
}
var BacktestingComponent = class _BacktestingComponent {
  constructor(registroService) {
    this.registroService = registroService;
    this.listaPortafolio = [];
    this.listMoneda = [];
    this.listNivelConfianza = [];
    this.idsPortafolioSeleccionados = [];
    this.idMonedaSeleccionada = null;
    this.monedaTocadaManualmente = false;
    this.idNivelConfianzaSeleccionado = null;
    this.nivelConfianzaSeleccionado = 0.99;
    this.ventana = 100;
    this.ejecutando = false;
    this.mensajeError = "";
    this.resultado = null;
    this.chart = null;
  }
  ngOnInit() {
    this.registroService.getListaPortafolio().subscribe((r) => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe((r) => this.listMoneda = r);
    this.registroService.getListaNivelConfianza().subscribe((r) => {
      this.listNivelConfianza = r.sort((a, b) => a.valorNivelConfianza - b.valorNivelConfianza);
      const masAlto = this.listNivelConfianza[this.listNivelConfianza.length - 1];
      if (masAlto) {
        this.idNivelConfianzaSeleccionado = masAlto.idNivelConfianza;
        this.nivelConfianzaSeleccionado = masAlto.valorNivelConfianza;
      }
    });
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
  elegirNivelConfianza(nc) {
    this.idNivelConfianzaSeleccionado = nc.idNivelConfianza;
    this.nivelConfianzaSeleccionado = nc.valorNivelConfianza;
  }
  get puedeEjecutar() {
    return this.idsPortafolioSeleccionados.length > 0 && !!this.idMonedaSeleccionada && this.ventana >= 31;
  }
  ejecutar() {
    if (!this.puedeEjecutar || this.ejecutando)
      return;
    const cuerpo = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada,
      nivelConfianza: this.nivelConfianzaSeleccionado,
      ventana: this.ventana,
      numObservacionesTotal: Math.max(500, this.ventana * 3)
    };
    this.ejecutando = true;
    this.mensajeError = "";
    this.resultado = null;
    this.chart = null;
    this.registroService.postEjecutarBacktesting(cuerpo).subscribe({
      next: (r) => {
        this.resultado = r;
        this.ejecutando = false;
        this.chart = this.armarChart(r);
      },
      error: (error) => {
        this.mensajeError = mensajeDeError(error);
        this.ejecutando = false;
      }
    });
  }
  get zona() {
    return this.resultado?.modeloAdecuado ? "verde" : "rojo";
  }
  get zonaTexto() {
    return this.resultado?.modeloAdecuado ? "La tasa de excepciones es estad\xEDsticamente compatible con el nivel de confianza (prueba de Kupiec)." : "La prueba de Kupiec rechaza el modelo: las excepciones observadas no son compatibles con el nivel de confianza.";
  }
  armarChart(r) {
    const categorias = r.serie.map((p) => p.fecha);
    const pnl = r.serie.map((p) => p.pnlReal);
    const varLinea = r.serie.map((p) => p.varEstimado);
    const excepciones = r.serie.map((p) => p.esExcepcion ? p.pnlReal : null);
    return {
      series: [
        { name: "P&L real", type: "column", data: pnl },
        { name: `VaR estimado (${(r.nivelConfianza * 100).toFixed(1)}%)`, type: "line", data: varLinea },
        { name: "Excepci\xF3n", type: "scatter", data: excepciones }
      ],
      chart: { height: 340, type: "line", toolbar: { show: false } },
      colors: ["#4454c3", "#e7515a", "#e7515a"],
      stroke: { width: [0, 2, 0], dashArray: [0, 4, 0] },
      markers: { size: [0, 0, 6], hover: { size: 7 } },
      dataLabels: { enabled: false },
      xaxis: { categories: categorias, labels: { rotate: -45, style: { fontSize: "9px" } }, title: { text: "D\xEDa de prueba (fuera de muestra)", style: { fontSize: "11px" } } },
      yaxis: { title: { text: `P&L (${r.monedaReporte})`, style: { fontSize: "11px" } }, labels: { style: { fontSize: "10px" } } },
      legend: { position: "top", horizontalAlign: "center", fontSize: "11px" },
      grid: { borderColor: "rgba(128,128,128,0.15)" }
    };
  }
  static {
    this.\u0275fac = function BacktestingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BacktestingComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BacktestingComponent, selectors: [["app-backtesting"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 14, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "bt-subtitulo"], [1, "bt-layout"], [1, "bt-layout__config", "card"], [1, "card-body", "bt-config"], [1, "bt-grid"], [1, "bt-campo"], [1, "form-label"], [1, "hig-requerido"], ["placeholder", "Seleccione uno o varios...", "bindLabel", "descripcionPortafolio", "bindValue", "idPortafolio", 3, "ngModelChange", "change", "items", "multiple", "ngModel"], ["placeholder", "Seleccione...", "bindLabel", "desMoneda", "bindValue", "idMoneda", 3, "ngModelChange", "change", "items", "ngModel"], ["type", "number", "min", "31", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-label", "mb-0"], [1, "var-chips"], ["type", "button", "class", "var-chip", 3, "var-chip--activo", "click", 4, "ngFor", "ngForOf"], [1, "bt-accion"], ["type", "button", 1, "btn", "btn-primary", "bt-accion__boton", 3, "click", "disabled"], ["tamano", "inline", "class", "me-2", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-0", "role", "alert", 4, "ngIf"], [1, "bt-layout__resultado"], ["class", "card bt-placeholder", 4, "ngIf"], ["class", "card bt-calculando", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["type", "button", 1, "var-chip", 3, "click"], ["tamano", "inline", 1, "me-2"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-0"], ["aria-hidden", "true"], [1, "card", "bt-placeholder"], [1, "card-body", "bt-placeholder__cuerpo"], ["tamano", "grande"], [1, "bt-placeholder__titulo"], [1, "bt-placeholder__texto"], [1, "card", "bt-calculando"], ["tamano", "grande", "etiqueta", "Calculando el walk-forward con el motor real..."], [1, "card"], [1, "card-body", "bt-resultado"], [1, "bt-contexto"], [1, "bt-kpis"], [1, "bt-kpi"], [1, "bt-kpi__valor"], [1, "bt-kpi__etiqueta"], [1, "bt-nota"], [3, "series", "chart", "colors", "stroke", "markers", "dataLabels", "xaxis", "yaxis", "legend", "grid", 4, "ngIf"], ["class", "bt-nota", 4, "ngFor", "ngForOf"], [3, "series", "chart", "colors", "stroke", "markers", "dataLabels", "xaxis", "yaxis", "legend", "grid"]], template: function BacktestingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Backtesting del VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Prueba retrospectiva fuera de muestra (walk-forward) con prueba de Kupiec, sobre datos reales.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Portafolio(s) ");
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "ng-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function BacktestingComponent_Template_ng_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idsPortafolioSeleccionados, $event) || (ctx.idsPortafolioSeleccionados = $event);
          return $event;
        });
        \u0275\u0275listener("change", function BacktestingComponent_Template_ng_select_change_15_listener() {
          return ctx.alCambiarPortafolio();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
        \u0275\u0275text(18, "Moneda de reporte ");
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function BacktestingComponent_Template_ng_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idMonedaSeleccionada, $event) || (ctx.idMonedaSeleccionada = $event);
          return $event;
        });
        \u0275\u0275listener("change", function BacktestingComponent_Template_ng_select_change_21_listener() {
          return ctx.alCambiarMoneda();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 8)(23, "label", 9);
        \u0275\u0275text(24, "Ventana (d\xEDas)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function BacktestingComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ventana, $event) || (ctx.ventana = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 8)(27, "span", 14);
        \u0275\u0275text(28, "Nivel de confianza");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275template(30, BacktestingComponent_button_30_Template, 3, 6, "button", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
        \u0275\u0275listener("click", function BacktestingComponent_Template_button_click_32_listener() {
          return ctx.ejecutar();
        });
        \u0275\u0275template(33, BacktestingComponent_app_loader_33_Template, 1, 0, "app-loader", 19);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, BacktestingComponent_div_35_Template, 5, 1, "div", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 21);
        \u0275\u0275template(37, BacktestingComponent_div_37_Template, 7, 1, "div", 22)(38, BacktestingComponent_div_38_Template, 3, 1, "div", 23)(39, BacktestingComponent_div_39_Template, 35, 30, "div", 24);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("items", ctx.listaPortafolio)("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.idsPortafolioSeleccionados);
        \u0275\u0275advance(6);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.idMonedaSeleccionada);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.ventana);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.listNivelConfianza);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.puedeEjecutar || ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.ejecutando ? "Calculando..." : "Ejecutar Backtesting", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mensajeError);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.resultado && !ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resultado && !ctx.ejecutando);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, NgSelectModule, NgSelectComponent, MatIconModule, MatIcon, NgApexchartsModule, ChartComponent, LoaderComponent], styles: ["\n\n.bt-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.hig-requerido[_ngcontent-%COMP%] {\n  margin-inline-start: 2px;\n  color: rgb(var(--danger-rgb));\n}\n.bt-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(340px, 400px) 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.bt-layout__config[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 82px;\n  max-height: calc(100vh - 98px);\n  overflow-y: auto;\n}\n.bt-layout__resultado[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 1199px) {\n  .bt-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bt-layout__config[_ngcontent-%COMP%] {\n    position: static;\n    max-height: none;\n  }\n}\n.bt-placeholder__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 6px;\n  padding: 56px 24px;\n}\n.bt-placeholder__titulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.bt-placeholder__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 360px;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.bt-config[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px 18px;\n}\n.bt-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.bt-campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.var-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.var-chip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.28);\n  border-radius: 999px;\n}\n.var-chip.var-chip--activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.12);\n  border-color: rgb(var(--primary-rgb));\n}\n.bt-accion[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 4px;\n}\n.bt-accion__boton[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 20px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.bt-resultado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.bt-contexto[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.bt-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.bt-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 14px;\n  background: rgba(var(--dark-rgb), 0.03);\n  border: 1px solid rgba(var(--dark-rgb), 0.12);\n  border-radius: 10px;\n}\n.bt-kpi__valor[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.bt-kpi__etiqueta[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: rgba(var(--dark-rgb), 0.65);\n}\n.bt-kpi--verde[_ngcontent-%COMP%] {\n  background: rgba(var(--success-rgb, 40, 167, 69), 0.1);\n  border-color: rgba(var(--success-rgb, 40, 167, 69), 0.3);\n}\n.bt-kpi--verde[_ngcontent-%COMP%]   .bt-kpi__valor[_ngcontent-%COMP%] {\n  color: rgb(var(--success-rgb, 40, 167, 69));\n}\n.bt-kpi--rojo[_ngcontent-%COMP%] {\n  background: rgba(var(--danger-rgb), 0.1);\n  border-color: rgba(var(--danger-rgb), 0.32);\n}\n.bt-kpi--rojo[_ngcontent-%COMP%]   .bt-kpi__valor[_ngcontent-%COMP%] {\n  color: rgb(var(--danger-rgb));\n}\n.bt-nota[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin: 0;\n  padding: 8px 10px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n  background: rgba(var(--danger-rgb), 0.08);\n  border-radius: 6px;\n}\n.bt-nota[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  font-size: 15px;\n  color: rgb(var(--danger-rgb));\n}\n.bt-nota--ok[_ngcontent-%COMP%] {\n  background: rgba(var(--success-rgb, 40, 167, 69), 0.1);\n}\n.bt-nota--ok[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--success-rgb, 40, 167, 69));\n}\n@media (max-width: 900px) {\n  .bt-kpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .bt-kpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=backtesting.component.css.map */"], data: { animation: [fadeSlideIn, fadeIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BacktestingComponent, { className: "BacktestingComponent", filePath: "src\\app\\components\\registro\\var\\backtesting\\backtesting.component.ts", lineNumber: 32 });
})();
export {
  BacktestingComponent
};
//# sourceMappingURL=backtesting.component-KIHJ27YM.js.map
