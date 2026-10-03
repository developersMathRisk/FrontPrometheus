import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";

// src/app/shared/components/tabla-toolbar/tabla-toolbar.component.ts
var _c0 = [[["", "filtros", ""]], [["", "opciones", ""]]];
var _c1 = ["[filtros]", "[opciones]"];
function TablaToolbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TablaToolbarComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiar());
    });
    \u0275\u0275elementStart(1, "mat-icon", 10);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
var TablaToolbarComponent = class _TablaToolbarComponent {
  constructor() {
    this.placeholder = "Buscar\u2026";
    this.accion = "Agregar";
    this.total = 0;
    this.filtrados = 0;
    this.ocultarResumen = false;
    this.texto = "";
    this.buscar = new EventEmitter();
    this.agregar = new EventEmitter();
  }
  get resumen() {
    if (this.ocultarResumen) {
      return "";
    }
    const n = (valor) => valor.toLocaleString("es-PE");
    if (this.filtrados !== this.total) {
      return `${n(this.filtrados)} de ${n(this.total)} registros`;
    }
    return this.total === 1 ? "1 registro" : `${n(this.total)} registros`;
  }
  alEscribir(valor) {
    this.texto = valor;
    this.buscar.emit(valor);
  }
  limpiar() {
    this.alEscribir("");
  }
  static {
    this.\u0275fac = function TablaToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TablaToolbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaToolbarComponent, selectors: [["app-tabla-toolbar"]], inputs: { placeholder: "placeholder", accion: "accion", total: "total", filtrados: "filtrados", ocultarResumen: "ocultarResumen", texto: "texto" }, outputs: { buscar: "buscar", agregar: "agregar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 14, vars: 6, consts: [["role", "toolbar", "aria-label", "B\xFAsqueda y acciones de la tabla", 1, "tabla-toolbar"], [1, "tabla-toolbar__grupo"], [1, "tabla-buscador"], ["aria-hidden", "true", 1, "tabla-buscador__icono"], ["type", "search", "autocomplete", "off", 1, "tabla-buscador__campo", 3, "input", "keydown.escape", "placeholder", "value"], ["type", "button", "class", "tabla-buscador__limpiar", "aria-label", "Borrar b\xFAsqueda", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "tabla-toolbar__accion", 3, "click"], [1, "tabla-meta"], ["aria-live", "polite", 1, "tabla-toolbar__resumen"], ["type", "button", "aria-label", "Borrar b\xFAsqueda", 1, "tabla-buscador__limpiar", 3, "click"], ["aria-hidden", "true"]], template: function TablaToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        \u0275\u0275text(4, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 4);
        \u0275\u0275listener("input", function TablaToolbarComponent_Template_input_input_5_listener($event) {
          return ctx.alEscribir($event.target.value);
        })("keydown.escape", function TablaToolbarComponent_Template_input_keydown_escape_5_listener() {
          return ctx.limpiar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, TablaToolbarComponent_button_6_Template, 3, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function TablaToolbarComponent_Template_button_click_8_listener() {
          return ctx.agregar.emit();
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(13, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", ctx.placeholder)("value", ctx.texto);
        \u0275\u0275attribute("aria-label", ctx.placeholder);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.texto);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.accion);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.resumen);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tabla-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px 16px;\n  margin-bottom: 12px;\n}\n.tabla-toolbar__grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px 20px;\n}\n.tabla-toolbar__accion[_ngcontent-%COMP%] {\n  min-height: 38px;\n  margin-inline-start: auto;\n  white-space: nowrap;\n}\n.tabla-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px 16px;\n  min-height: 28px;\n  margin-bottom: 8px;\n}\n.tabla-toolbar__resumen[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--hig-texto-sec, rgba(var(--dark-rgb), 0.78));\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.tabla-buscador[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 320px;\n  max-width: 100%;\n}\n.tabla-buscador__icono[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 10px;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: var(--hig-texto-sec, rgba(var(--dark-rgb), 0.78));\n  pointer-events: none;\n}\n.tabla-buscador__campo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  padding: 0 36px;\n  font-size: 0.875rem;\n  color: var(--default-text-color);\n  background: var(--form-control-bg, #fff);\n  border: 1px solid rgba(var(--dark-rgb), 0.28);\n  border-radius: 8px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.tabla-buscador__campo[_ngcontent-%COMP%]::placeholder {\n  color: rgba(var(--dark-rgb), 0.72);\n}\n.tabla-buscador__campo[_ngcontent-%COMP%]::-webkit-search-cancel-button {\n  display: none;\n}\n.tabla-buscador__campo[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgb(var(--primary-rgb));\n  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.25);\n}\n.tabla-buscador__limpiar[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  color: var(--hig-texto-sec, rgba(var(--dark-rgb), 0.78));\n  background: transparent;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.tabla-buscador__limpiar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.tabla-buscador__limpiar[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.1);\n}\n.tabla-buscador__limpiar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 1px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .tabla-buscador__campo[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=tabla-toolbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaToolbarComponent, { className: "TablaToolbarComponent", filePath: "src\\app\\shared\\components\\tabla-toolbar\\tabla-toolbar.component.ts", lineNumber: 12 });
})();

export {
  TablaToolbarComponent
};
//# sourceMappingURL=chunk-GNUHOFZQ.js.map
