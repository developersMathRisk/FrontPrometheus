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

// src/app/components/accounts/twostep-verification/twostep-verification-3/twostep-verification-3.component.ts
var _c0 = () => ["/pages/email/mail-inbox"];
var _c1 = () => ["/dashboards/sales"];
var TwostepVerification3Component = class _TwostepVerification3Component {
  onDigitInput(event, nextInput) {
    const inputElement = event.target;
    if (inputElement.value.length > 0) {
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  static {
    this.\u0275fac = function TwostepVerification3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TwostepVerification3Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwostepVerification3Component, selectors: [["app-twostep-verification-3"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 4, consts: [["oneInput", ""], ["twoInput", ""], ["threeInput", ""], ["fourInput", ""], [1, "page", "page-style1", "error-page"], [1, "page-single", "p-5"], [1, "row", "justify-content-center", "mt-5", "mt-sm-0"], [1, "col-lg-9", "col-xl-8"], [1, "card-group", "mb-0"], [1, "card", "p-4", "page-content"], [1, "card-body", "page-single-content"], [1, "w-100"], [1, "mb-2"], [1, "text-muted"], [1, "row", "gy-4"], [1, "col-xl-12", "mb-2"], [1, "row", "gx-1", "gx-sm-4"], [1, "col-3"], ["type", "text", "id", "one", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "two", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "three", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "four", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center"], [1, "form-check", "mt-3"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], [1, "text-primary", "ms-2", "d-inline-block", 3, "routerLink"], [1, "col-xl-12", "d-grid", "mt-2"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink"], [1, "text-center"], [1, "fs-12", "text-danger", "mt-3", "mb-0"], [1, "ri-asterisk"], [1, "card", "text-white", "bg-primary", "py-5", "d-none", "d-sm-block", "page-content", "mt-0"], [1, "card-body", "text-center", "justify-content-center", "page-single-content", "h-100"], ["src", "./assets/images/pattern/3.png", "alt", "img", 1, "w-100"]], template: function TwostepVerification3Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "h1", 12);
        \u0275\u0275text(9, "Verfication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 13);
        \u0275\u0275text(11, "Enter 4 digit code sent to the registered email Id.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 14)(13, "div", 15)(14, "div", 16)(15, "div", 17)(16, "input", 18, 0);
        \u0275\u0275listener("keyup", function TwostepVerification3Component_Template_input_keyup_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          const twoInput_r2 = \u0275\u0275reference(20);
          return \u0275\u0275resetView(ctx.onDigitInput($event, twoInput_r2));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 17)(19, "input", 19, 1);
        \u0275\u0275listener("keyup", function TwostepVerification3Component_Template_input_keyup_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          const threeInput_r3 = \u0275\u0275reference(23);
          return \u0275\u0275resetView(ctx.onDigitInput($event, threeInput_r3));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 17)(22, "input", 20, 2);
        \u0275\u0275listener("keyup", function TwostepVerification3Component_Template_input_keyup_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          const fourInput_r4 = \u0275\u0275reference(26);
          return \u0275\u0275resetView(ctx.onDigitInput($event, fourInput_r4));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275element(25, "input", 21, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 22);
        \u0275\u0275element(28, "input", 23);
        \u0275\u0275elementStart(29, "label", 24);
        \u0275\u0275text(30, " Did not recieve a code ?");
        \u0275\u0275elementStart(31, "a", 25);
        \u0275\u0275text(32, "Resend");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 26)(34, "a", 27);
        \u0275\u0275text(35, "Verify");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 28)(37, "p", 29)(38, "sup");
        \u0275\u0275element(39, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "Don't share the verification code with anyone !");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 31)(42, "div", 32);
        \u0275\u0275element(43, "img", 33);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwostepVerification3Component, { className: "TwostepVerification3Component", filePath: "src\\app\\components\\accounts\\twostep-verification\\twostep-verification-3\\twostep-verification-3.component.ts", lineNumber: 12 });
})();
export {
  TwostepVerification3Component
};
//# sourceMappingURL=twostep-verification-3.component-RKLIWYY4.js.map
