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

// src/app/components/error/error404/error404.component.ts
var _c0 = () => ["/dashboards/sales"];
var Error404Component = class _Error404Component {
  static {
    this.\u0275fac = function Error404Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error404Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error404"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page", "page-style1", "error-page"], [1, "page-content"], [1, "container", "text-center"], ["src", "./assets/images/svgs/1.svg", "alt", "img", 1, "w-30p", "mb-5", "error-img"], ["src", "./assets/images/svgs/2.svg", "alt", "img", 1, "w-30p", "mb-5", "error-img2"], [1, "h3", "mb-3", "fw-bold"], [1, "h5", "fw-normal", "mb-5", "leading-normal"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-arrow-left-circle", "m-1"]], template: function Error404Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3)(4, "img", 4);
        \u0275\u0275elementStart(5, "h1", 5);
        \u0275\u0275text(6, "Sorry, an error has occured, Requested Page not found!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "You may have mistyped the address or the page may have moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275element(10, "i", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component", filePath: "src\\app\\components\\error\\error404\\error404.component.ts", lineNumber: 12 });
})();
export {
  Error404Component
};
//# sourceMappingURL=error404.component-3SYTNST7.js.map
