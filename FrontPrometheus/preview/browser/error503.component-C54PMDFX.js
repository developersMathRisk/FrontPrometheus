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

// src/app/components/error/error503/error503.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error503Component = class _Error503Component {
  static {
    this.\u0275fac = function Error503Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error503Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error503Component, selectors: [["app-error503"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "page", "error-page", "error-page-1"], [1, "page-content"], [1, "container", "text-center"], [1, "display-1", "text-primary", "mb-4", "fw-bold", "dir-error"], [1, "fa", "fa-frown-o"], [1, "h3", "mb-3", "fw-bold"], [1, "h5", "fw-normal", "mb-5", "leading-normal"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error503Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " 5");
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275text(6, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Sorry, an error has occured, Server Unavailable ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "You may have mistyped the address or the page may have moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275text(13, "Back to Home");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error503Component, { className: "Error503Component", filePath: "src\\app\\components\\error\\error503\\error503.component.ts", lineNumber: 11 });
})();
export {
  Error503Component
};
//# sourceMappingURL=error503.component-C54PMDFX.js.map
