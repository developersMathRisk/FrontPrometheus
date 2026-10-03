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

// src/app/components/error/error403/error403.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error403Component = class _Error403Component {
  static {
    this.\u0275fac = function Error403Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error403Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error403Component, selectors: [["app-error403"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [[1, "page", "error-page", "error-page-1"], [1, "page-content"], [1, "container"], [1, "row"], [1, "col-md-5"], ["src", "./assets/images/svgs/3.svg", "alt", "img", 1, "w-90"], [1, "col-md-7", "my-auto", "my-3"], [1, "display-2", "text-primary", "mb-2", "fw-bold"], [1, "h3", "mb-3", "fw-bold"], [1, "h5", "fw-normal", "mb-7", "leading-normal"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error403Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275text(8, " 403");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 8);
        \u0275\u0275text(10, "Sorry, Forbidden Error, Requested Page not found!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 9);
        \u0275\u0275text(12, "You may have mistyped the address or the page may have moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 10);
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275text(15, "Back to Home");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error403Component, { className: "Error403Component", filePath: "src\\app\\components\\error\\error403\\error403.component.ts", lineNumber: 11 });
})();
export {
  Error403Component
};
//# sourceMappingURL=error403.component-GQKSRJUU.js.map
