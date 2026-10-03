import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-GSML466W.js";
import "./chunk-N74BERQD.js";
import {
  ActivatedRoute
} from "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/en-desarrollo/en-desarrollo.component.ts
var EnDesarrolloComponent = class _EnDesarrolloComponent {
  constructor(route) {
    this.titulo = route.snapshot.data["titulo"] ?? "M\xF3dulo";
    this.detalle = route.snapshot.data["detalle"] ?? "Esta funcionalidad a\xFAn no est\xE1 disponible.";
  }
  static {
    this.\u0275fac = function EnDesarrolloComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnDesarrolloComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnDesarrolloComponent, selectors: [["app-en-desarrollo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "page-title", "my-auto", 2, "white-space", "nowrap"], [1, "card", "hig-placeholder"], ["aria-hidden", "true"], [1, "hig-placeholder__titulo"], [1, "hig-placeholder__texto"]], template: function EnDesarrolloComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "div", 3)(5, "mat-icon", 4);
        \u0275\u0275text(6, "construction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 5);
        \u0275\u0275text(8, "M\xF3dulo en desarrollo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.titulo);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.detalle);
      }
    }, dependencies: [MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnDesarrolloComponent, { className: "EnDesarrolloComponent", filePath: "src\\app\\components\\registro\\en-desarrollo\\en-desarrollo.component.ts", lineNumber: 28 });
})();
export {
  EnDesarrolloComponent
};
//# sourceMappingURL=en-desarrollo.component-REPSTPVC.js.map
