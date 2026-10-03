import {
  LoaderComponent
} from "./chunk-FSM2IJQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";

// src/app/shared/components/tabla-estado/tabla-estado.component.ts
function TablaEstadoComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-loader", 3);
    \u0275\u0275elementContainerEnd();
  }
}
function TablaEstadoComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 4);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.tituloVacio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.detalleVacio);
  }
}
function TablaEstadoComponent_div_0_ng_container_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (\xAB", ctx_r0.busqueda, "\xBB)");
  }
}
function TablaEstadoComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 4);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Sin resultados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6, "Ning\xFAn registro coincide con los filtros aplicados");
    \u0275\u0275template(7, TablaEstadoComponent_div_0_ng_container_3_ng_container_7_Template, 2, 1, "ng-container", 7);
    \u0275\u0275text(8, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function TablaEstadoComponent_div_0_ng_container_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.limpiar.emit());
    });
    \u0275\u0275text(10, "Borrar filtros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.busqueda);
  }
}
function TablaEstadoComponent_div_0_ng_container_4_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
function TablaEstadoComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "No se pudieron cargar los registros");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TablaEstadoComponent_div_0_ng_container_4_p_5_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function TablaEstadoComponent_div_0_ng_container_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reintentar.emit());
    });
    \u0275\u0275text(7, "Reintentar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.mensajeError);
  }
}
function TablaEstadoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, TablaEstadoComponent_div_0_ng_container_1_Template, 2, 0, "ng-container", 2)(2, TablaEstadoComponent_div_0_ng_container_2_Template, 7, 2, "ng-container", 2)(3, TablaEstadoComponent_div_0_ng_container_3_Template, 11, 1, "ng-container", 2)(4, TablaEstadoComponent_div_0_ng_container_4_Template, 8, 1, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.estado);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cargando");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "vacio");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "sin-resultados");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "error");
  }
}
function mensajeDeError(error) {
  if (error.status === 0) {
    return "No se obtuvo respuesta del servidor. Verifique que el servicio est\xE9 disponible e intente nuevamente.";
  }
  if (error.status === 404) {
    return "El servicio solicitado no est\xE1 disponible (error 404).";
  }
  return error.error?.message ?? error.message;
}
var TablaEstadoComponent = class _TablaEstadoComponent {
  constructor() {
    this.estado = null;
    this.tituloVacio = "No hay registros";
    this.detalleVacio = "Use el bot\xF3n para agregar el primero.";
    this.busqueda = "";
    this.mensajeError = "";
    this.reintentar = new EventEmitter();
    this.limpiar = new EventEmitter();
  }
  static {
    this.\u0275fac = function TablaEstadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TablaEstadoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaEstadoComponent, selectors: [["app-tabla-estado"]], inputs: { estado: "estado", tituloVacio: "tituloVacio", detalleVacio: "detalleVacio", busqueda: "busqueda", mensajeError: "mensajeError" }, outputs: { reintentar: "reintentar", limpiar: "limpiar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "tabla-estado", "role", "status", "aria-live", "polite", 3, "ngSwitch", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "tabla-estado", 3, "ngSwitch"], [4, "ngSwitchCase"], ["tamano", "normal", "etiqueta", "Cargando registros\u2026"], ["aria-hidden", "true", 1, "tabla-estado__icono"], [1, "tabla-estado__titulo"], [1, "tabla-estado__detalle"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "tabla-estado__icono", "tabla-estado__icono--error"], ["class", "tabla-estado__detalle", 4, "ngIf"]], template: function TablaEstadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TablaEstadoComponent_div_0_Template, 5, 5, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.estado);
      }
    }, dependencies: [CommonModule, NgIf, NgSwitch, NgSwitchCase, MatIconModule, MatIcon, LoaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tabla-estado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 40px 16px;\n  text-align: center;\n}\n.tabla-estado__icono[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: var(--hig-texto-sec, rgba(var(--dark-rgb), 0.78));\n}\n.tabla-estado__icono--error[_ngcontent-%COMP%] {\n  color: rgb(var(--danger-rgb));\n}\n.tabla-estado__spinner[_ngcontent-%COMP%] {\n  color: rgb(var(--primary-rgb));\n}\n.tabla-estado__titulo[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--default-text-color);\n}\n.tabla-estado__detalle[_ngcontent-%COMP%] {\n  max-width: 44ch;\n  margin: 0 0 6px;\n  font-size: 0.8125rem;\n  color: var(--hig-texto-sec, rgba(var(--dark-rgb), 0.78));\n}\n/*# sourceMappingURL=tabla-estado.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaEstadoComponent, { className: "TablaEstadoComponent", filePath: "src\\app\\shared\\components\\tabla-estado\\tabla-estado.component.ts", lineNumber: 27 });
})();

export {
  mensajeDeError,
  TablaEstadoComponent
};
//# sourceMappingURL=chunk-MBO6WKBF.js.map
