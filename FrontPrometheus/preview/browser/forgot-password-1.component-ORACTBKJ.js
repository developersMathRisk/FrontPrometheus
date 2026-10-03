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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/accounts/forgot-password/forgot-password-1/forgot-password-1.component.ts
var _c0 = () => ["/pages/terms-conditions"];
var _c1 = () => ["/dashboards/sales"];
var ForgotPassword1Component = class _ForgotPassword1Component {
  static {
    this.\u0275fac = function ForgotPassword1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPassword1Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPassword1Component, selectors: [["app-forgot-password-1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 6, consts: [[1, "page", "page-style1", "error-page"], [1, "page-single"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-5"], [1, "card", "p-4", "mb-0", "mt-7", "mt-md-2"], [1, "card-body"], [1, "text-center", "title-style", "mb-5"], [1, "mb-2"], [1, "text-muted"], [1, "input-group", "mb-4"], [1, "input-group-addon"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], ["type", "text", "placeholder", "Enter Email", 1, "form-control"], [1, "mb-3"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "privacy-policy", 1, "form-check-input"], ["for", "privacy-policy", 1, "form-check-label", "text-muted"], [1, "fw-semibold", "text-muted", "ms-1", 3, "routerLink"], [1, "row"], [1, "col-12"], [1, "btn", "btn-lg", "btn-primary", "btn-block", "px-4", "w-100", 3, "routerLink"], [1, "fe", "fe-arrow-right"], [1, "text-center", "pt-4"], [1, "fw-normal", "fs-16"], [1, "btn-link", "text-primary", "fw-normal", 3, "routerLink"]], template: function ForgotPassword1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2", 8);
        \u0275\u0275text(9, "Forgot Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "hr");
        \u0275\u0275elementStart(11, "p", 9);
        \u0275\u0275text(12, "Forgot Password Page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 12);
        \u0275\u0275element(16, "path", 13)(17, "path", 14)(18, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(19, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 17)(21, "div", 18);
        \u0275\u0275element(22, "input", 19);
        \u0275\u0275elementStart(23, "label", 20);
        \u0275\u0275text(24, " Agree the ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 21);
        \u0275\u0275text(26, "terms and policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 22)(28, "div", 23)(29, "a", 24);
        \u0275\u0275element(30, "i", 25);
        \u0275\u0275text(31, " Send");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 26)(33, "div", 27);
        \u0275\u0275text(34, "Forget it ");
        \u0275\u0275elementStart(35, "a", 28);
        \u0275\u0275text(36, "Send me back");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1));
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPassword1Component, { className: "ForgotPassword1Component", filePath: "src\\app\\components\\accounts\\forgot-password\\forgot-password-1\\forgot-password-1.component.ts", lineNumber: 12 });
})();
export {
  ForgotPassword1Component
};
//# sourceMappingURL=forgot-password-1.component-ORACTBKJ.js.map
