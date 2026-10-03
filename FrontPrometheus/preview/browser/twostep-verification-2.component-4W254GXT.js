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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/accounts/twostep-verification/twostep-verification-2/twostep-verification-2.component.ts
var _c0 = () => ["/dashboards/sales"];
var _c1 = () => ["/pages/email/mail-inbox"];
var TwostepVerification2Component = class _TwostepVerification2Component {
  onDigitInput(event, nextInput) {
    const inputElement = event.target;
    if (inputElement.value.length > 0) {
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  static {
    this.\u0275fac = function TwostepVerification2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TwostepVerification2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwostepVerification2Component, selectors: [["app-twostep-verification-2"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 6, consts: [["oneInput", ""], ["twoInput", ""], ["threeInput", ""], ["fourInput", ""], [1, "page", "page-style1", "page-style2", "error-page"], [1, "d-md-flex"], [1, "w-40p", "bg-style", "h-100vh", "page-style"], [1, "page-content"], [1, "page-single-content"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "img", 1, "header-brand-img", "mb-4", 3, "routerLink"], [1, "card-body", "text-white", "py-5", "px-5"], ["src", "./assets/images/png/2.png", "alt", "img", 1, "w-100", "mx-auto", "text-center"], [1, "w-80p", "page-content"], [1, "card-body", "p-3", "p-sm-5"], [1, "row", "g-0"], [1, "col-md-6", "mx-auto", "d-block"], [1, "mt-3", "mt-sm-0"], [1, "mb-2"], [1, "text-muted"], [1, "row", "gy-4"], [1, "col-xl-12", "mb-2"], [1, "row"], [1, "col-3"], ["type", "text", "id", "one", "maxlength", "1", "required", "", "maxlength", "1", "id", "one", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "two", "required", "", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "three", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "four", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center"], [1, "form-check", "mt-3"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], [1, "text-primary", "ms-2", "d-inline-block", 3, "routerLink"], [1, "col-xl-12", "d-grid", "mt-2"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink"], [1, "text-center"], [1, "fs-12", "text-danger", "mt-3", "mb-0"], [1, "ri-asterisk"]], template: function TwostepVerification2Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
        \u0275\u0275element(5, "img", 9);
        \u0275\u0275elementStart(6, "div", 10);
        \u0275\u0275element(7, "img", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(8, "div", 12)(9, "div", 8)(10, "div", 13)(11, "div", 14)(12, "div", 15)(13, "div", 16)(14, "h1", 17);
        \u0275\u0275text(15, "Verfication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 18);
        \u0275\u0275text(17, "Enter 4 digit code sent to the registered email Id.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 19)(19, "div", 20)(20, "div", 21)(21, "div", 22)(22, "input", 23, 0);
        \u0275\u0275listener("keyup", function TwostepVerification2Component_Template_input_keyup_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          const twoInput_r2 = \u0275\u0275reference(26);
          return \u0275\u0275resetView(ctx.onDigitInput($event, twoInput_r2));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 22)(25, "input", 24, 1);
        \u0275\u0275listener("keyup", function TwostepVerification2Component_Template_input_keyup_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          const threeInput_r3 = \u0275\u0275reference(29);
          return \u0275\u0275resetView(ctx.onDigitInput($event, threeInput_r3));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 22)(28, "input", 25, 2);
        \u0275\u0275listener("keyup", function TwostepVerification2Component_Template_input_keyup_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          const fourInput_r4 = \u0275\u0275reference(32);
          return \u0275\u0275resetView(ctx.onDigitInput($event, fourInput_r4));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 22);
        \u0275\u0275element(31, "input", 26, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 27);
        \u0275\u0275element(34, "input", 28);
        \u0275\u0275elementStart(35, "label", 29);
        \u0275\u0275text(36, " Did not recieve a code ?");
        \u0275\u0275elementStart(37, "a", 30);
        \u0275\u0275text(38, "Resend");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 31)(40, "a", 32);
        \u0275\u0275text(41, "Verify");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 33)(43, "p", 34)(44, "sup");
        \u0275\u0275element(45, "i", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "Don't share the verification code with anyone !");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(32);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwostepVerification2Component, { className: "TwostepVerification2Component", filePath: "src\\app\\components\\accounts\\twostep-verification\\twostep-verification-2\\twostep-verification-2.component.ts", lineNumber: 12 });
})();
export {
  TwostepVerification2Component
};
//# sourceMappingURL=twostep-verification-2.component-4W254GXT.js.map
