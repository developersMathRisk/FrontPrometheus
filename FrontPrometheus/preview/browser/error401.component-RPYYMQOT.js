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

// src/app/components/error/error401/error401.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error401Component = class _Error401Component {
  static {
    this.\u0275fac = function Error401Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error401Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error401Component, selectors: [["app-error401"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page", "bg-style", "error-page"], [1, "page-content"], [1, "container", "text-center", "relative"], [1, "display-1", "text-fixed-white", "mb-3", "fw-bold"], [1, "h3", "mb-3", "fw-bold", "text-fixed-white"], [1, "h5", "fw-normal", "mb-4", "leading-normal", "text-fixed-white", "op-8"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error401Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "401");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Un Authorized Error!");
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
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error401Component, { className: "Error401Component", filePath: "src\\app\\components\\error\\error401\\error401.component.ts", lineNumber: 12 });
})();
export {
  Error401Component
};
//# sourceMappingURL=error401.component-RPYYMQOT.js.map
