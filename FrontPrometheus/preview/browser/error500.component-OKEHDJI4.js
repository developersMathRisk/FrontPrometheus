import {
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
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

// src/app/components/error/error500/error500.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error500Component = class _Error500Component {
  static {
    this.\u0275fac = function Error500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error500Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error500Component, selectors: [["app-error500"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 2, consts: [[1, "page", "page-style1", "error-page"], [1, "page-content"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto", "my-3", "d-block"], [1, "card", "p-5", "mb-0", "mt-5", "mt-md-0"], [1, "text-center"], [1, "fs-100", "mb-4", "text-primary", "fw-normal", "h1"], [1, "fa", "fa-frown-o"], [1, "h3", "mb-3", "fw-bold"], [1, "h5", "fw-normal", "mb-4", "leading-normal"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error500Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275text(9, "ops!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275text(11, "Error 500: Internal Server Error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 10);
        \u0275\u0275text(13, "You may have mistyped the address or the page may have moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 11);
        \u0275\u0275element(15, "i", 12);
        \u0275\u0275text(16, "Back to Home");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error500Component, { className: "Error500Component", filePath: "src\\app\\components\\error\\error500\\error500.component.ts", lineNumber: 12 });
})();
export {
  Error500Component
};
//# sourceMappingURL=error500.component-OKEHDJI4.js.map
