import {
  TablaToolbarComponent
} from "./chunk-GNUHOFZQ.js";
import {
  ResultadoVarComponent
} from "./chunk-3QMFW477.js";
import {
  fadeIn,
  fadeSlideIn
} from "./chunk-7D3V4QVJ.js";
import {
  TablaEstadoComponent,
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
import "./chunk-CJCV5ZLP.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BKD3PXJL.js";
import {
  Router
} from "./chunk-EXZMHBSY.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/var/consulta-var/consulta-var.component.ts
function ConsultaVarComponent_div_13_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19);
    \u0275\u0275listener("click", function ConsultaVarComponent_div_13_tr_17_Template_tr_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionar(r_r2));
    })("keydown.enter", function ConsultaVarComponent_div_13_tr_17_Template_tr_keydown_enter_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionar(r_r2));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cvar-fila--activa", (ctx_r2.seleccionado == null ? null : ctx_r2.seleccionado.idResultadoVARDetalle) === r_r2.idResultadoVARDetalle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.fechaProceso);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.descripcionPortafolio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r2.fechaInicio, " \u2192 ", r_r2.fechaFin, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = r_r2.monedaReporte) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, r_r2.maxVar, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 12, r_r2.ratioVar * 100, "1.2-2"), "%");
  }
}
function ConsultaVarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Portafolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Per\xEDodo hist\xF3rico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Moneda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 17);
    \u0275\u0275text(13, "VaR m\xE1s exigente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 17);
    \u0275\u0275text(15, "% cartera");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ConsultaVarComponent_div_13_tr_17_Template, 15, 15, "tr", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.listaFiltrada);
  }
}
function ConsultaVarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 24);
    \u0275\u0275text(5, "Seleccione un c\xE1lculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7, "Elija una fila de la lista para ver aqu\xED el detalle completo.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function ConsultaVarComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-loader", 34);
    \u0275\u0275elementEnd();
  }
}
function ConsultaVarComponent_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mensajeErrorDetalle);
  }
}
function ConsultaVarComponent_div_16_app_resultado_var_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-resultado-var", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("resultado", ctx_r2.detalle);
  }
}
function ConsultaVarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3, "Detalle del c\xE1lculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275template(7, ConsultaVarComponent_div_16_div_7_Template, 2, 0, "div", 30)(8, ConsultaVarComponent_div_16_div_8_Template, 2, 1, "div", 31)(9, ConsultaVarComponent_div_16_app_resultado_var_9_Template, 1, 1, "app-resultado-var", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeSlideIn", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.seleccionado.fechaProceso, " \xB7 ", ctx_r2.seleccionado.descripcionPortafolio, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.cargandoDetalle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mensajeErrorDetalle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detalle);
  }
}
var ConsultaVarComponent = class _ConsultaVarComponent {
  constructor(registroService, router) {
    this.registroService = registroService;
    this.router = router;
    this.listaPortafolio = [];
    this.idPortafolioFiltro = null;
    this.lista = [];
    this.listaFiltrada = [];
    this.busqueda = "";
    this.cargando = true;
    this.mensajeError = "";
    this.seleccionado = null;
    this.detalle = null;
    this.cargandoDetalle = false;
    this.mensajeErrorDetalle = "";
  }
  ngOnInit() {
    this.registroService.getListaPortafolio().subscribe((r) => this.listaPortafolio = r);
    this.listar();
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.lista.length === 0)
      return "vacio";
    if (this.listaFiltrada.length === 0)
      return "sin-resultados";
    return null;
  }
  listar() {
    this.cargando = true;
    this.mensajeError = "";
    this.seleccionado = null;
    this.detalle = null;
    this.registroService.getListaResultadosVar(this.idPortafolioFiltro ?? void 0).subscribe({
      next: (r) => {
        this.lista = r;
        this.cargando = false;
        this.buscar(this.busqueda);
      },
      error: (error) => {
        this.cargando = false;
        this.mensajeError = mensajeDeError(error);
      }
    });
  }
  alCambiarFiltroPortafolio() {
    this.listar();
  }
  buscar(texto) {
    this.busqueda = texto;
    const t = texto.trim().toLowerCase();
    this.listaFiltrada = !t ? this.lista : this.lista.filter((x) => (x.descripcionPortafolio + " " + x.fechaProceso).toLowerCase().includes(t));
  }
  seleccionar(item) {
    if (this.seleccionado?.idResultadoVARDetalle === item.idResultadoVARDetalle) {
      this.seleccionado = null;
      this.detalle = null;
      return;
    }
    this.seleccionado = item;
    this.detalle = null;
    this.cargandoDetalle = true;
    this.mensajeErrorDetalle = "";
    this.registroService.getResultadoVar(item.idResultadoVARDetalle).subscribe({
      next: (r) => {
        this.detalle = r;
        this.cargandoDetalle = false;
        setTimeout(() => document.getElementById("consulta-detalle")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      },
      error: (error) => {
        this.cargandoDetalle = false;
        this.mensajeErrorDetalle = mensajeDeError(error);
      }
    });
  }
  irAEjecutar() {
    this.router.navigateByUrl("/registro/var/ejecutar");
  }
  static {
    this.\u0275fac = function ConsultaVarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsultaVarComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsultaVarComponent, selectors: [["app-consulta-var"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 12, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "cvar-subtitulo"], [1, "cvar-layout"], [1, "cvar-layout__lista", "card"], [1, "card-body", "cvar-body"], ["placeholder", "Buscar por portafolio o fecha...", "accion", "Ejecutar nuevo c\xE1lculo", 3, "buscar", "agregar", "total", "filtrados", "texto"], ["filtros", "", 1, "cvar-filtro-portafolio"], ["placeholder", "Todos los portafolios", "bindLabel", "descripcionPortafolio", "bindValue", "idPortafolio", 3, "ngModelChange", "change", "items", "clearable", "ngModel"], ["tituloVacio", "A\xFAn no hay c\xE1lculos de VaR guardados", "detalleVacio", "Ejecute uno desde \xABEjecutar nuevo c\xE1lculo\xBB para verlo aqu\xED.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["class", "cvar-tabla-contenedor", 4, "ngIf"], ["id", "consulta-detalle", 1, "cvar-layout__detalle"], ["class", "card cvar-placeholder", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "cvar-tabla-contenedor"], [1, "cvar-tabla"], [1, "col-num"], ["tabindex", "0", 3, "cvar-fila--activa", "click", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", "keydown.enter"], [1, "cvar-col-secundaria"], [1, "card", "cvar-placeholder"], [1, "card-body", "cvar-placeholder__cuerpo"], ["aria-hidden", "true"], [1, "cvar-placeholder__titulo"], [1, "cvar-placeholder__texto"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["class", "cvar-detalle-cargando", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "resultado", 4, "ngIf"], [1, "cvar-detalle-cargando"], ["tamano", "normal", "etiqueta", "Cargando detalle..."], ["role", "alert", 1, "alert", "alert-danger"], [3, "resultado"]], template: function ConsultaVarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Consulta de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Revise los c\xE1lculos de VaR ya ejecutados.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "app-tabla-toolbar", 7);
        \u0275\u0275listener("buscar", function ConsultaVarComponent_Template_app_tabla_toolbar_buscar_9_listener($event) {
          return ctx.buscar($event);
        })("agregar", function ConsultaVarComponent_Template_app_tabla_toolbar_agregar_9_listener() {
          return ctx.irAEjecutar();
        });
        \u0275\u0275elementStart(10, "div", 8)(11, "ng-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ConsultaVarComponent_Template_ng_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idPortafolioFiltro, $event) || (ctx.idPortafolioFiltro = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ConsultaVarComponent_Template_ng_select_change_11_listener() {
          return ctx.alCambiarFiltroPortafolio();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "app-tabla-estado", 10);
        \u0275\u0275listener("reintentar", function ConsultaVarComponent_Template_app_tabla_estado_reintentar_12_listener() {
          return ctx.listar();
        })("limpiar", function ConsultaVarComponent_Template_app_tabla_estado_limpiar_12_listener() {
          return ctx.buscar("");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, ConsultaVarComponent_div_13_Template, 18, 1, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275template(15, ConsultaVarComponent_div_15_Template, 8, 1, "div", 13)(16, ConsultaVarComponent_div_16_Template, 10, 6, "div", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("total", ctx.lista.length)("filtrados", ctx.listaFiltrada.length)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.listaPortafolio)("clearable", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.idPortafolioFiltro);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.estadoTabla);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.seleccionado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.seleccionado);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, MatIconModule, MatIcon, TablaToolbarComponent, TablaEstadoComponent, ResultadoVarComponent, LoaderComponent], styles: ["\n\n.cvar-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.cvar-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(420px, 480px) 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.cvar-layout__lista[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 82px;\n  max-height: calc(100vh - 98px);\n  display: flex;\n  flex-direction: column;\n}\n.cvar-layout__lista[_ngcontent-%COMP%]   .cvar-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.cvar-layout__detalle[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 1299px) {\n  .cvar-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cvar-layout__lista[_ngcontent-%COMP%] {\n    position: static;\n    max-height: none;\n  }\n}\n.cvar-placeholder__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 6px;\n  padding: 56px 24px;\n}\n.cvar-placeholder__cuerpo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: rgba(var(--dark-rgb), 0.3);\n}\n.cvar-placeholder__titulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.cvar-placeholder__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 320px;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.cvar-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px 18px;\n}\n.cvar-filtro-portafolio[_ngcontent-%COMP%] {\n  width: 260px;\n  max-width: 100%;\n}\n.cvar-tabla-contenedor[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid rgba(var(--dark-rgb), 0.16);\n  border-radius: 10px;\n}\n.cvar-tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.8125rem;\n  border-collapse: collapse;\n}\n.cvar-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.cvar-tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.1);\n}\n.cvar-tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: rgba(var(--dark-rgb), 0.65);\n  background: rgba(var(--dark-rgb), 0.04);\n}\n.cvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.cvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.06);\n}\n.cvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: -2px;\n}\n.cvar-tabla[_ngcontent-%COMP%]   tr.cvar-fila--activa[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.1);\n  box-shadow: inset 3px 0 0 rgb(var(--primary-rgb));\n}\n.cvar-tabla[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.cvar-tabla[_ngcontent-%COMP%]   .cvar-col-secundaria[_ngcontent-%COMP%] {\n  color: rgba(var(--dark-rgb), 0.7);\n}\n.cvar-detalle-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n@media (max-width: 640px) {\n  .cvar-tabla[_ngcontent-%COMP%]   .cvar-col-secundaria[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=consulta-var.component.css.map */"], data: { animation: [fadeIn, fadeSlideIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsultaVarComponent, { className: "ConsultaVarComponent", filePath: "src\\app\\components\\registro\\var\\consulta-var\\consulta-var.component.ts", lineNumber: 26 });
})();
export {
  ConsultaVarComponent
};
//# sourceMappingURL=consulta-var.component-UWOIEWET.js.map
