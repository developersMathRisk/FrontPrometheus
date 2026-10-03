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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/accounts/under-maintenance/under-maintenance.component.ts
var _c0 = () => ["/dashboards/sales"];
var UnderMaintenanceComponent = class _UnderMaintenanceComponent {
  ngOnInit() {
    const countDown = (/* @__PURE__ */ new Date("Dec 1, 2024 00:00:00")).getTime();
    const time = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      if (distance < 0) {
        clearInterval(time);
      }
    }, 1e3);
  }
  static {
    this.\u0275fac = function UnderMaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnderMaintenanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnderMaintenanceComponent, selectors: [["app-under-maintenance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 6, consts: [[1, "page", "page-style1", "page-style2", "error-page"], [1, "d-md-flex"], [1, "w-40p", "bg-style", "h-100vh", "page-style"], [1, "page-content"], [1, "page-single-content"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "img", 1, "header-brand-img", "mb-4", 3, "routerLink"], [1, "card-body", "text-white", "py-5", "px-5"], ["src", "./assets/images/png/1.png", "alt", "img", 1, "w-100", "mx-auto", "text-center"], [1, "w-80p", "page-content"], [1, "card-body", "p-3", "p-sm-5"], [1, "row", "g-0"], [1, "col-lg-8", "col-sm-12", "center-block", "align-items-center", "construction"], [1, "construction-body", "text-center"], [1, "card-body"], [1, "display-5", "mb-2", "fw-bold"], [1, "row", "mt-4", "gx-0", "gx-sm-2", "gy-xxl-0", "gy-3", "mb-5", "justify-content-center"], [1, "col-lg-6"], ["id", "timer", 1, "row", "g-0", "g-sm-4", "justify-content-center"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-3", "col-sm-6", "col-12"], [1, "under-maintenance-time", "rounded"], [1, "fw-semibold", "mb-0", "text-fixed-white"], [1, "mb-1", "fs-12", "op-6"], [1, "col-sm-6", "d-block", "mx-auto"], [1, "input-group", "mb-4"], [1, "input-group-addon", "bg-white"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], ["type", "text", "placeholder", "Enter Your Email", 1, "form-control"], ["aria-label", "anchor", "href", "javascript:void(0)", 1, "input-group-text", "bg-white", "p-2", "btn"], ["d", "M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z", "opacity", ".3"], ["d", "M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"]], template: function UnderMaintenanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "img", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 4)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h2", 14)(16, "strong");
        \u0275\u0275text(17, "Under Construction");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "h4");
        \u0275\u0275text(19, "Our website is in Under construction");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "br");
        \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "h2", 20);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 21);
        \u0275\u0275text(29, "DAYS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "h2", 20);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 21);
        \u0275\u0275text(35, "HOURS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 18)(37, "div", 19)(38, "h2", 20);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 21);
        \u0275\u0275text(41, "MINUTES");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 18)(43, "div", 19)(44, "h2", 20);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 21);
        \u0275\u0275text(47, "SECONDS");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(48, "div", 10)(49, "div", 22)(50, "div", 23)(51, "span", 24);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(52, "svg", 25);
        \u0275\u0275element(53, "path", 26)(54, "path", 27)(55, "path", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(56, "input", 29);
        \u0275\u0275elementStart(57, "a", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 25);
        \u0275\u0275element(59, "path", 26)(60, "path", 31)(61, "path", 32);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.days);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.hours);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.minutes);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.seconds);
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnderMaintenanceComponent, { className: "UnderMaintenanceComponent", filePath: "src\\app\\components\\accounts\\under-maintenance\\under-maintenance.component.ts", lineNumber: 11 });
})();
export {
  UnderMaintenanceComponent
};
//# sourceMappingURL=under-maintenance.component-AIBVK367.js.map
