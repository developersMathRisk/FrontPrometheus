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

// src/app/components/accounts/twostep-verification/twostep-verification-1/twostep-verification-1.component.ts
var _c0 = () => ["/pages/email/mail-inbox"];
var _c1 = () => ["/dashboards/sales"];
var TwostepVerification1Component = class _TwostepVerification1Component {
  onDigitInput(event, nextInput) {
    const inputElement = event.target;
    if (inputElement.value.length > 0) {
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  static {
    this.\u0275fac = function TwostepVerification1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TwostepVerification1Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwostepVerification1Component, selectors: [["app-twostep-verification-1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 4, consts: [["oneInput", ""], ["twoInput", ""], ["threeInput", ""], ["fourInput", ""], [1, "page", "page-style1", "error-page"], [1, "page-single"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-7", "col-lg-6", "col-xl-4"], [1, "card", "p-4", "mb-0", "mt-7", "mt-md-2"], [1, "card-body"], [1, "text-center", "title-style", "mb-4"], [1, "mb-2"], [1, "text-muted"], [1, "row", "gy-3"], [1, "col-xl-12", "mb-2"], [1, "row"], [1, "col-3"], ["type", "text", "id", "one", "maxlength", "1", "required", "", "maxlength", "1", "id", "one", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "two", "maxlength", "1", "required", "", "id", "two", "maxlength", "1", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "three", "maxlength", "1", "required", "", "id", "three", "maxlength", "1", 1, "form-control", "form-control-lg", "text-center", 3, "keyup"], ["type", "text", "id", "four", "maxlength", "1", "required", "", 1, "form-control", "form-control-lg", "text-center"], [1, "form-check", "mt-2"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], [1, "text-primary", "ms-2", "d-inline-block", 3, "routerLink"], [1, "col-xl-12", "d-grid", "mt-2"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink"], [1, "text-center"], [1, "fs-12", "text-danger", "mt-3", "mb-0"], [1, "ri-asterisk"]], template: function TwostepVerification1Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "h2", 12);
        \u0275\u0275text(9, "Verfication");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "hr");
        \u0275\u0275elementStart(11, "p", 13);
        \u0275\u0275text(12, "Enter 4 digit code sent to the registered email Id.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "input", 18, 0);
        \u0275\u0275listener("keyup", function TwostepVerification1Component_Template_input_keyup_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          const twoInput_r2 = \u0275\u0275reference(21);
          return \u0275\u0275resetView(ctx.onDigitInput($event, twoInput_r2));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 17)(20, "input", 19, 1);
        \u0275\u0275listener("keyup", function TwostepVerification1Component_Template_input_keyup_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          const threeInput_r3 = \u0275\u0275reference(24);
          return \u0275\u0275resetView(ctx.onDigitInput($event, threeInput_r3));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 17)(23, "input", 20, 2);
        \u0275\u0275listener("keyup", function TwostepVerification1Component_Template_input_keyup_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          const fourInput_r4 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.onDigitInput($event, fourInput_r4));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 17);
        \u0275\u0275element(26, "input", 21, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 22);
        \u0275\u0275element(29, "input", 23);
        \u0275\u0275elementStart(30, "label", 24);
        \u0275\u0275text(31, " Did not recieve a code ?");
        \u0275\u0275elementStart(32, "a", 25);
        \u0275\u0275text(33, "Resend");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 26)(35, "a", 27);
        \u0275\u0275text(36, "Verify");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 28)(38, "p", 29)(39, "sup");
        \u0275\u0275element(40, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "Don't share the verification code with anyone !");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
      }
    }, dependencies: [SharedModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwostepVerification1Component, { className: "TwostepVerification1Component", filePath: "src\\app\\components\\accounts\\twostep-verification\\twostep-verification-1\\twostep-verification-1.component.ts", lineNumber: 12 });
})();
export {
  TwostepVerification1Component
};
//# sourceMappingURL=twostep-verification-1.component-JTOOYK2X.js.map
