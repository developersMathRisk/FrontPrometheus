import {
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
  FormsModule
} from "./chunk-BKD3PXJL.js";
import {
  ActivatedRoute
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate2
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/var/anexo9/anexo9.component.ts
function Anexo9Component_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 7);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
function Anexo9Component_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-loader", 13);
    \u0275\u0275elementEnd();
  }
}
function Anexo9Component_div_7_ng_container_3_div_22_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function Anexo9Component_div_7_ng_container_3_div_22_button_4_Template_button_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.cambiarMetodologia(m_r4.idTipoMetodologiaVAR));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("var-chip--activo", ctx_r0.anexo.metodologiaBase === m_r4.metodologia && ctx_r0.anexo.nivelConfianza === m_r4.nivelConfianza);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", m_r4.metodologia, " (", \u0275\u0275pipeBind2(2, 4, m_r4.nivelConfianza * 100, "1.1-1"), "%) ");
  }
}
function Anexo9Component_div_7_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 28);
    \u0275\u0275text(2, "Metodolog\xEDa base para el anexo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275template(4, Anexo9Component_div_7_ng_container_3_div_22_button_4_Template, 3, 7, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.metodologiasDisponibles);
  }
}
function Anexo9Component_div_7_ng_container_3_tr_48_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 33);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", f_r5.nota);
  }
}
function Anexo9Component_div_7_ng_container_3_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275template(3, Anexo9Component_div_7_ng_container_3_tr_48_mat_icon_3_Template, 2, 1, "mat-icon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275classProp("an9-fila--total", f_r5.tipoRiesgo.includes("Total"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r5.tipoRiesgo, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r5.nota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, f_r5.var, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.cvar !== void 0 && f_r5.cvar !== null ? \u0275\u0275pipeBind2(9, 11, f_r5.cvar, "1.2-2") : "N/D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.svar !== void 0 && f_r5.svar !== null ? \u0275\u0275pipeBind2(12, 14, f_r5.svar, "1.2-2") : "Pendiente");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.scvar !== void 0 && f_r5.scvar !== null ? \u0275\u0275pipeBind2(15, 17, f_r5.scvar, "1.2-2") : "Pendiente");
  }
}
function Anexo9Component_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div")(3, "h2", 15);
    \u0275\u0275text(4, 'Anexo N\xB0 9 "Resultados de Modelos de Medici\xF3n del Riesgo de Mercado"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Portafolio(s): ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 17)(10, "span")(11, "strong");
    \u0275\u0275text(12, "Fecha de corte:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "strong");
    \u0275\u0275text(16, "Generado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span")(19, "strong");
    \u0275\u0275text(20, "Moneda:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, Anexo9Component_div_7_ng_container_3_div_22_Template, 5, 1, "div", 18);
    \u0275\u0275elementStart(23, "p", 19);
    \u0275\u0275text(24, " Metodolog\xEDa reportada: ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, ", nivel de confianza ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "table", 20)(33, "caption");
    \u0275\u0275text(34, "VaR, CVaR, SVaR y SCVaR \u2014 agregado y por tipo de riesgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "thead")(36, "tr")(37, "th");
    \u0275\u0275text(38, "Tipo de riesgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 21);
    \u0275\u0275text(40, "VaR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 21);
    \u0275\u0275text(42, "CVaR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 21);
    \u0275\u0275text(44, "SVaR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 21);
    \u0275\u0275text(46, "SCVaR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275template(48, Anexo9Component_div_7_ng_container_3_tr_48_Template, 16, 20, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p", 23)(50, "mat-icon", 7);
    \u0275\u0275text(51, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 24)(54, "button", 25);
    \u0275\u0275listener("click", function Anexo9Component_div_7_ng_container_3_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exportarCSV());
    });
    \u0275\u0275elementStart(55, "mat-icon", 7);
    \u0275\u0275text(56, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Exportar CSV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 26);
    \u0275\u0275listener("click", function Anexo9Component_div_7_ng_container_3_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.imprimir());
    });
    \u0275\u0275elementStart(59, "mat-icon", 7);
    \u0275\u0275text(60, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Imprimir / PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("@fadeSlideIn", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.anexo.descripcionPortafolio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.anexo.fechaCorte, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.anexo.fechaGeneracion, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.anexo.moneda, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.metodologiasDisponibles.length > 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.anexo.metodologiaBase);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 10, ctx_r0.anexo.nivelConfianza * 100, "1.1-2"), "%");
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.anexo.filas);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.anexo.notaMetodologica, " ");
  }
}
function Anexo9Component_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, Anexo9Component_div_7_div_2_Template, 2, 0, "div", 10)(3, Anexo9Component_div_7_ng_container_3_Template, 62, 13, "ng-container", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.anexo && !ctx_r0.cargando);
  }
}
var Anexo9Component = class _Anexo9Component {
  constructor(route, registroService) {
    this.route = route;
    this.registroService = registroService;
    this.idResultadoVARDetalle = null;
    this.metodologiasDisponibles = [];
    this.idMetodologiaSeleccionada = null;
    this.anexo = null;
    this.cargando = false;
    this.mensajeError = "";
  }
  ngOnInit() {
    const idParam = this.route.snapshot.queryParamMap.get("idResultadoVARDetalle");
    if (!idParam) {
      this.mensajeError = 'Falta indicar de qu\xE9 ejecuci\xF3n de VaR generar el anexo. Vuelva a "Ejecuci\xF3n de VaR" o "Consulta de VaR" y use el bot\xF3n "Generar Anexo N\xB0 9 (SBS)" sobre un resultado.';
      return;
    }
    this.idResultadoVARDetalle = Number(idParam);
    this.registroService.getResultadoVar(this.idResultadoVARDetalle).subscribe({
      next: (r) => {
        const mejorPorMetodologia = /* @__PURE__ */ new Map();
        for (const m of r.resultados) {
          const actual = mejorPorMetodologia.get(m.idTipoMetodologiaVAR);
          if (!actual || m.nivelConfianza > actual.nivelConfianza)
            mejorPorMetodologia.set(m.idTipoMetodologiaVAR, m);
        }
        this.metodologiasDisponibles = Array.from(mejorPorMetodologia.values());
      },
      error: () => {
      }
    });
    this.cargarAnexo();
  }
  cargarAnexo() {
    if (!this.idResultadoVARDetalle)
      return;
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getAnexo9(this.idResultadoVARDetalle, this.idMetodologiaSeleccionada).subscribe({
      next: (a) => {
        this.anexo = a;
        this.cargando = false;
      },
      error: (error) => {
        this.mensajeError = mensajeDeError(error);
        this.cargando = false;
      }
    });
  }
  cambiarMetodologia(id) {
    this.idMetodologiaSeleccionada = id;
    this.cargarAnexo();
  }
  imprimir() {
    window.print();
  }
  exportarCSV() {
    if (!this.anexo)
      return;
    const filas = [
      ["Tipo de riesgo", "VaR", "CVaR", "SVaR", "SCVaR", "Nota"],
      ...this.anexo.filas.map((f) => [
        f.tipoRiesgo,
        f.var?.toString() ?? "",
        f.cvar?.toString() ?? "N/A",
        f.svar?.toString() ?? "N/A",
        f.scvar?.toString() ?? "N/A",
        f.nota ?? ""
      ])
    ];
    const csv = filas.map((fila) => fila.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `anexo9_var_${this.anexo.idResultadoVARDetalle}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function Anexo9Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Anexo9Component)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Anexo9Component, selectors: [["app-anexo9"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center", "no-print"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "var-subtitulo"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-3 no-print", "role", "alert", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3", "no-print"], ["aria-hidden", "true"], [1, "card"], [1, "card-body", "an9"], ["class", "an9__cargando", 4, "ngIf"], [4, "ngIf"], [1, "an9__cargando"], ["tamano", "normal", "etiqueta", "Generando anexo..."], [1, "an9__encabezado"], [1, "an9__titulo"], [1, "an9__subtitulo"], [1, "an9__meta"], ["class", "an9__filtro no-print", 4, "ngIf"], [1, "an9__base"], [1, "an9-tabla"], [1, "col-num"], [3, "an9-fila--total", 4, "ngFor", "ngForOf"], [1, "an9-nota"], [1, "an9__acciones", "no-print"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "an9__filtro", "no-print"], [1, "form-label", "mb-0"], [1, "var-chips"], ["type", "button", "class", "var-chip", 3, "var-chip--activo", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "var-chip", 3, "click"], ["class", "an9-info", "aria-hidden", "true", 3, "title", 4, "ngIf"], ["aria-hidden", "true", 1, "an9-info", 3, "title"]], template: function Anexo9Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Anexo N\xB0 9 \u2014 Riesgo de Mercado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Resultados de Modelos de Medici\xF3n del Riesgo de Mercado (Manual de Contabilidad SBS).");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, Anexo9Component_div_6_Template, 5, 1, "div", 4)(7, Anexo9Component_div_7_Template, 4, 2, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.idResultadoVARDetalle);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, MatIconModule, MatIcon, LoaderComponent], styles: ["\n\n.var-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.an9[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.an9__cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 30px 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.an9__encabezado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.12);\n}\n.an9__titulo[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.an9__subtitulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n}\n.an9__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n  text-align: right;\n}\n.an9__filtro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n}\n.an9__base[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.var-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.var-chip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.28);\n  border-radius: 999px;\n  transition: background-color 0.12s, border-color 0.12s;\n}\n.var-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.06);\n}\n.var-chip.var-chip--activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.12);\n  border-color: rgb(var(--primary-rgb));\n}\n.an9-tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.8125rem;\n  border-collapse: collapse;\n}\n.an9-tabla[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 0 0 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: left;\n  caption-side: top;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.an9-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.an9-tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.1);\n}\n.an9-tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.01em;\n  color: rgba(var(--dark-rgb), 0.65);\n  background: rgba(var(--dark-rgb), 0.04);\n}\n.an9-tabla[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.an9-tabla[_ngcontent-%COMP%]   .an9-fila--total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: rgba(var(--primary-rgb), 0.06);\n}\n.an9-info[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  margin-inline-start: 4px;\n  vertical-align: middle;\n  color: rgba(var(--dark-rgb), 0.5);\n  cursor: help;\n}\n.an9-nota[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin: 0;\n  padding: 8px 10px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n  background: rgba(var(--warning-rgb), 0.1);\n  border-radius: 6px;\n}\n.an9-nota[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  font-size: 15px;\n  color: rgb(var(--warning-rgb));\n}\n.an9__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.an9__acciones[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  vertical-align: text-bottom;\n}\n@media (max-width: 640px) {\n  .an9-tabla[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n  .an9__meta[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=anexo9.component.css.map */"], data: { animation: [fadeSlideIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Anexo9Component, { className: "Anexo9Component", filePath: "src\\app\\components\\registro\\var\\anexo9\\anexo9.component.ts", lineNumber: 27 });
})();
export {
  Anexo9Component
};
//# sourceMappingURL=anexo9.component-DD3JD4YT.js.map
