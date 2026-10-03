import {
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/error/error400/error400.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error400Component = class _Error400Component {
  static {
    this.\u0275fac = function Error400Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error400Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error400Component, selectors: [["app-error400"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page", "relative", "page-style1", "error-page"], [1, "page-content"], [1, "container", "text-center"], [1, "display-1", "text-primary", "mb-4", "fw-bold"], [1, "h3", "mb-3", "fw-bold"], [1, "h5", "fw-normal", "mb-5", "leading-normal"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error400Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "400");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Bad Request Error!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "You may have mistyped the address or the page may have moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, "Back to Home");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error400Component, { className: "Error400Component", filePath: "src\\app\\components\\error\\error400\\error400.component.ts", lineNumber: 11 });
})();
export {
  Error400Component
};
//# sourceMappingURL=error400.component-D53TR6AW.js.map
