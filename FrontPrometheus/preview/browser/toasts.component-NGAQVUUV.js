import {
  ToastrModule,
  ToastrService
} from "./chunk-HXNONXJ5.js";
import "./chunk-HWBKIOGC.js";
import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbToast,
  NgbToastHeader
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/components/uielements/toasts/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toasts = [];
  }
  show(textOrTpl, options = {}) {
    this.toasts.push(__spreadValues({ textOrTpl }, options));
  }
  remove(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
  static {
    this.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/uielements/toasts/toasts.component.ts
var _c0 = ["toastContainer"];
function _forTrack0($index, $item) {
  return this.toasts8;
}
function _forTrack1($index, $item) {
  return this.toasts9;
}
function _forTrack2($index, $item) {
  return this.toasts10;
}
function _forTrack3($index, $item) {
  return this.toasts11;
}
function _forTrack4($index, $item) {
  return this.toasts12;
}
function _forTrack5($index, $item) {
  return this.toasts13;
}
function _forTrack6($index, $item) {
  return this.toasts14;
}
function _forTrack7($index, $item) {
  return this.toasts15;
}
function ToastsComponent_For_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 74);
    \u0275\u0275elementStart(1, "strong", 75);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "11 mins ago");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 72);
    \u0275\u0275listener("hide", function ToastsComponent_For_16_Template_ngb_toast_hide_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToast(toast_r2));
    });
    \u0275\u0275template(1, ToastsComponent_For_16_ng_template_1_Template, 5, 0, "ng-template", 73);
    \u0275\u0275text(2, " Hello, world! This is a toast message ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r2.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r2.autohide);
  }
}
function ToastsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 15)(1, "div", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4, " Hello, world! This is the Primary toast message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show11 = false);
    });
    \u0275\u0275element(6, "span", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 16)(1, "div", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4, " Hello, world! This is the Secondary toast message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show12 = false);
    });
    \u0275\u0275element(6, "span", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 17)(1, "div", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4, " Hello, world! This is the Success toast message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show13 = false);
    });
    \u0275\u0275element(6, "span", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 18)(1, "div", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4, " Hello, world! This is the Info toast message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show14 = false);
    });
    \u0275\u0275element(6, "span", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_48_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "strong", 85);
    \u0275\u0275text(4, "Dashtic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 77)(6, "small", 86);
    \u0275\u0275text(7, "11 mins ago");
    \u0275\u0275elementEnd()()();
  }
}
function ToastsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 81);
    \u0275\u0275listener("hidden", function ToastsComponent_Conditional_48_Template_ngb_toast_hidden_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show = false);
    });
    \u0275\u0275template(1, ToastsComponent_Conditional_48_ng_template_1_Template, 8, 0, "ng-template", 73);
    \u0275\u0275text(2, " Hello, world! This is a toast message. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_63_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "strong", 85);
    \u0275\u0275text(4, "Dashtic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 87)(6, "small", 86);
    \u0275\u0275text(7, "just now");
    \u0275\u0275elementEnd()()();
  }
}
function ToastsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 81);
    \u0275\u0275listener("hidden", function ToastsComponent_Conditional_63_Template_ngb_toast_hidden_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show7 = false);
    });
    \u0275\u0275template(1, ToastsComponent_Conditional_63_ng_template_1_Template, 8, 0, "ng-template", 73);
    \u0275\u0275text(2, " See? Just like this. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_64_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "strong", 85);
    \u0275\u0275text(4, "Dashtic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 87)(6, "small", 86);
    \u0275\u0275text(7, "2 mins ago");
    \u0275\u0275elementEnd()()();
  }
}
function ToastsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 81);
    \u0275\u0275listener("hidden", function ToastsComponent_Conditional_64_Template_ngb_toast_hidden_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show8 = false);
    });
    \u0275\u0275template(1, ToastsComponent_Conditional_64_ng_template_1_Template, 8, 0, "ng-template", 73);
    \u0275\u0275text(2, " Heads up, toasts will stack automatically ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_79_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "strong", 88);
    \u0275\u0275text(4, "Dashtic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 77)(6, "small", 86);
    \u0275\u0275text(7, "11 mins ago");
    \u0275\u0275elementEnd()()();
  }
}
function ToastsComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 81);
    \u0275\u0275listener("hidden", function ToastsComponent_Conditional_79_Template_ngb_toast_hidden_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show1 = false);
    });
    \u0275\u0275template(1, ToastsComponent_Conditional_79_ng_template_1_Template, 8, 0, "ng-template", 73);
    \u0275\u0275text(2, " Hello, world! This is a toast message. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 21)(1, "div", 77)(2, "div", 89);
    \u0275\u0275text(3, "Hello, world! This is a toast message.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 90);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_93_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show9 = false);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 23)(1, "div", 89);
    \u0275\u0275text(2, " Hello, world! This is a toast message. ");
    \u0275\u0275elementStart(3, "div", 91)(4, "button", 92);
    \u0275\u0275text(5, " Take action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function ToastsComponent_Conditional_97_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show10 = false);
    });
    \u0275\u0275text(7, " Close ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
function ToastsComponent_For_128_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_128_Template_ngb_toast_hide_0_listener() {
      const toast_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastprimary(toast_r15));
    });
    \u0275\u0275template(1, ToastsComponent_For_128_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r15 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r15.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r15.autohide);
  }
}
function ToastsComponent_For_130_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 96);
    \u0275\u0275listener("hide", function ToastsComponent_For_130_Template_ngb_toast_hide_0_listener() {
      const toast_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastsecondary(toast_r17));
    });
    \u0275\u0275template(1, ToastsComponent_For_130_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r17 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r17.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r17.autohide);
  }
}
function ToastsComponent_For_132_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 97);
    \u0275\u0275listener("hide", function ToastsComponent_For_132_Template_ngb_toast_hide_0_listener() {
      const toast_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastwarning(toast_r19));
    });
    \u0275\u0275template(1, ToastsComponent_For_132_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r19 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r19.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r19.autohide);
  }
}
function ToastsComponent_For_134_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 98);
    \u0275\u0275listener("hide", function ToastsComponent_For_134_Template_ngb_toast_hide_0_listener() {
      const toast_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastinfo(toast_r21));
    });
    \u0275\u0275template(1, ToastsComponent_For_134_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r21 = ctx.$implicit;
    \u0275\u0275classProp("bg-danger", !toast_r21.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r21.autohide);
  }
}
function ToastsComponent_For_136_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 99);
    \u0275\u0275listener("hide", function ToastsComponent_For_136_Template_ngb_toast_hide_0_listener() {
      const toast_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastsuccess(toast_r23));
    });
    \u0275\u0275template(1, ToastsComponent_For_136_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r23 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r23.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r23.autohide);
  }
}
function ToastsComponent_For_138_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 100);
    \u0275\u0275listener("hide", function ToastsComponent_For_138_Template_ngb_toast_hide_0_listener() {
      const toast_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastdanger(toast_r25));
    });
    \u0275\u0275template(1, ToastsComponent_For_138_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r25 = ctx.$implicit;
    \u0275\u0275classProp("bg-danger", !toast_r25.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r25.autohide);
  }
}
function ToastsComponent_For_168_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 101);
    \u0275\u0275listener("click", function ToastsComponent_For_168_Template_ngb_toast_click_0_listener() {
      const toast_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastprimary(toast_r27));
    });
    \u0275\u0275template(1, ToastsComponent_For_168_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r27 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r27.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r27.autohide);
  }
}
function ToastsComponent_For_170_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 102);
    \u0275\u0275listener("hide", function ToastsComponent_For_170_Template_ngb_toast_hide_0_listener() {
      const toast_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastsecondary(toast_r29));
    });
    \u0275\u0275template(1, ToastsComponent_For_170_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r29 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r29.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r29.autohide);
  }
}
function ToastsComponent_For_172_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 103);
    \u0275\u0275listener("hide", function ToastsComponent_For_172_Template_ngb_toast_hide_0_listener() {
      const toast_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastwarning(toast_r31));
    });
    \u0275\u0275template(1, ToastsComponent_For_172_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r31 = ctx.$implicit;
    \u0275\u0275property("delay", 5e3)("autohide", toast_r31.autohide);
  }
}
function ToastsComponent_For_174_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 104);
    \u0275\u0275listener("hide", function ToastsComponent_For_174_Template_ngb_toast_hide_0_listener() {
      const toast_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastinfo(toast_r33));
    });
    \u0275\u0275template(1, ToastsComponent_For_174_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r33 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r33.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r33.autohide);
  }
}
function ToastsComponent_For_176_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 105);
    \u0275\u0275listener("hide", function ToastsComponent_For_176_Template_ngb_toast_hide_0_listener() {
      const toast_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastsuccess(toast_r35));
    });
    \u0275\u0275template(1, ToastsComponent_For_176_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r35 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r35.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r35.autohide);
  }
}
function ToastsComponent_For_178_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 106);
    \u0275\u0275listener("hide", function ToastsComponent_For_178_Template_ngb_toast_hide_0_listener() {
      const toast_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideSolidToastdanger(toast_r37));
    });
    \u0275\u0275template(1, ToastsComponent_For_178_ng_template_1_Template, 3, 0, "ng-template", 73);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r37 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r37.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r37.autohide);
  }
}
function ToastsComponent_For_215_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_215_Template_ngb_toast_hide_0_listener() {
      const toast_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastprimary(toast_r39));
    });
    \u0275\u0275template(1, ToastsComponent_For_215_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r39 = ctx.$implicit;
    \u0275\u0275property("delay", 5e3)("autohide", toast_r39.autohide);
  }
}
function ToastsComponent_For_218_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_218_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_218_Template_ngb_toast_hide_0_listener() {
      const toast_r41 = \u0275\u0275restoreView(_r40).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastprimary(toast_r41));
    });
    \u0275\u0275template(1, ToastsComponent_For_218_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r41 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r41.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r41.autohide);
  }
}
function ToastsComponent_For_221_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_221_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_221_Template_ngb_toast_hide_0_listener() {
      const toast_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideToastprimary(toast_r43));
    });
    \u0275\u0275template(1, ToastsComponent_For_221_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r43 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r43.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r43.autohide);
  }
}
function ToastsComponent_For_224_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_224_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_224_Template_ngb_toast_hide_0_listener() {
      const toast_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.MiddleLefthideToast(toast_r45));
    });
    \u0275\u0275template(1, ToastsComponent_For_224_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r45 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r45.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r45.autohide);
  }
}
function ToastsComponent_For_227_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_227_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_227_Template_ngb_toast_hide_0_listener() {
      const toast_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.MiddleCenterhideToast(toast_r47));
    });
    \u0275\u0275template(1, ToastsComponent_For_227_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r47 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r47.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r47.autohide);
  }
}
function ToastsComponent_For_230_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_230_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_230_Template_ngb_toast_hide_0_listener() {
      const toast_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.MiddleRighthideToast(toast_r49));
    });
    \u0275\u0275template(1, ToastsComponent_For_230_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r49 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r49.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r49.autohide);
  }
}
function ToastsComponent_For_233_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_233_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_233_Template_ngb_toast_hide_0_listener() {
      const toast_r51 = \u0275\u0275restoreView(_r50).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.BottomLefthideToast(toast_r51));
    });
    \u0275\u0275template(1, ToastsComponent_For_233_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r51 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r51.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r51.autohide);
  }
}
function ToastsComponent_For_236_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_236_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_236_Template_ngb_toast_hide_0_listener() {
      const toast_r53 = \u0275\u0275restoreView(_r52).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.BottomCenterthideToast(toast_r53));
    });
    \u0275\u0275template(1, ToastsComponent_For_236_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r53 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r53.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r53.autohide);
  }
}
function ToastsComponent_For_239_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 95);
    \u0275\u0275elementStart(1, "strong", 88);
    \u0275\u0275text(2, "Dashtic");
    \u0275\u0275elementEnd();
  }
}
function ToastsComponent_For_239_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-toast", 94);
    \u0275\u0275listener("hide", function ToastsComponent_For_239_Template_ngb_toast_hide_0_listener() {
      const toast_r55 = \u0275\u0275restoreView(_r54).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.BottomRighthideToast(toast_r55));
    });
    \u0275\u0275template(1, ToastsComponent_For_239_ng_template_1_Template, 3, 0, "ng-template", 107);
    \u0275\u0275text(2, " Your,toast message here. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r55 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", !toast_r55.autohide);
    \u0275\u0275property("delay", 5e3)("autohide", toast_r55.autohide);
  }
}
function ToastsComponent_Conditional_257_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "img", 84);
    \u0275\u0275elementStart(2, "strong", 88);
    \u0275\u0275text(3, "Dashtic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 87)(5, "small", 86);
    \u0275\u0275text(6, "11 mins ago");
    \u0275\u0275elementEnd()();
  }
}
function ToastsComponent_Conditional_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-toast", 71);
    \u0275\u0275template(1, ToastsComponent_Conditional_257_ng_template_1_Template, 7, 0, "ng-template", 73);
    \u0275\u0275text(2, " Hello, world! This is a toast message. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("autohide", false);
  }
}
var ToastsComponent = class _ToastsComponent {
  constructor(toastService, toastr) {
    this.toastService = toastService;
    this.toastr = toastr;
    this.show = true;
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
    this.show4 = true;
    this.show5 = true;
    this.show6 = true;
    this.show7 = true;
    this.show8 = true;
    this.show9 = true;
    this.show10 = true;
    this.show11 = true;
    this.show12 = true;
    this.show13 = true;
    this.show14 = true;
    this.show15 = true;
    this.show16 = true;
    this.isclose = true;
    this.isCollapsed = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
    this.isCollapsed7 = true;
    this.show0 = false;
    this.autohide = true;
    this.toasts = [];
    this.toasts1 = [];
    this.toasts2 = [];
    this.toasts3 = [];
    this.toasts4 = [];
    this.toasts5 = [];
    this.toasts6 = [];
    this.toastsA = [];
    this.toastsB = [];
    this.toastsC = [];
    this.toastsD = [];
    this.toastsE = [];
    this.toastsF = [];
    this.toastsG = [];
    this.hidden = () => {
      this.show9 = false;
    };
    this.toasts7 = [];
    this.toasts8 = [];
    this.toasts9 = [];
    this.toasts10 = [];
    this.toasts11 = [];
    this.toasts12 = [];
    this.toasts13 = [];
    this.toasts14 = [];
    this.toasts15 = [];
  }
  ngOnInit() {
  }
  showToast() {
    const newToast = { autohide: true };
    this.toasts.push(newToast);
  }
  //
  showToastprimary() {
    const newToast = { autohide: true };
    this.toasts1.push(newToast);
  }
  showToastseconday() {
    const newToast = { autohide: true };
    this.toasts2.push(newToast);
  }
  showToastwarning() {
    const newToast = { autohide: true };
    this.toasts3.push(newToast);
  }
  showToastinfo() {
    const newToast = { autohide: true };
    this.toasts4.push(newToast);
  }
  showToastsuccess() {
    const newToast = { autohide: true };
    this.toasts5.push(newToast);
  }
  showToastdanger() {
    const newToast = { autohide: true };
    this.toasts6.push(newToast);
  }
  hideToastprimary(toast1) {
    this.toasts1 = this.toasts1.filter((t) => t !== toast1);
  }
  hideToastsecondary(toast) {
    this.toasts2 = this.toasts2.filter((t) => t !== toast);
  }
  hideToastwarning(toast) {
    this.toasts3 = this.toasts3.filter((t) => t !== toast);
  }
  hideToastinfo(toast) {
    this.toasts4 = this.toasts4.filter((t) => t !== toast);
  }
  hideToastsuccess(toast) {
    this.toasts5 = this.toasts5.filter((t) => t !== toast);
  }
  hideToastdanger(toast) {
    this.toasts6 = this.toasts6.filter((t) => t !== toast);
  }
  //solid toast
  SolidToastprimary() {
    const newToast = { autohide: true };
    this.toastsA.push(newToast);
  }
  SolidToastsecondary() {
    const newToast = { autohide: true };
    this.toastsB.push(newToast);
  }
  SolidToastwarning() {
    const newToast = { autohide: true };
    this.toastsC.push(newToast);
  }
  SolidToastinfo() {
    const newToast = { autohide: true };
    this.toastsD.push(newToast);
  }
  SolidToastsuccess() {
    const newToast = { autohide: true };
    this.toastsE.push(newToast);
  }
  SolidToastdanger() {
    const newToast = { autohide: true };
    this.toastsF.push(newToast);
  }
  hideToast(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
  hideSolidToastprimary(toastA) {
    this.toastsA = this.toastsA.filter((t) => t !== toastA);
  }
  hideSolidToastsecondary(toast) {
    this.toastsB = this.toastsB.filter((t) => t !== toast);
  }
  hideSolidToastwarning(toast) {
    this.toastsC = this.toastsC.filter((t) => t !== toast);
  }
  hideSolidToastinfo(toast) {
    this.toastsD = this.toastsD.filter((t) => t !== toast);
  }
  hideSolidToastsuccess(toast) {
    this.toastsE = this.toastsE.filter((t) => t !== toast);
  }
  hideSolidToastdanger(toast) {
    this.toastsF = this.toastsF.filter((t) => t !== toast);
  }
  contentClose() {
    this.show10 = false;
  }
  close() {
    this.isclose = false;
    setTimeout(() => this.isclose = true, 3e3);
  }
  showStandard() {
    this.toastService.show("I am a standard toast");
  }
  showSuccess() {
    this.toastService.show("I am a success toast", {
      classname: "bg-success text-light",
      delay: 1e4
    });
  }
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {
      classname: "bg-danger text-light",
      delay: 15e3
    });
  }
  TopLeft() {
    const newToast = { autohide: true };
    this.toasts7.push(newToast);
  }
  toplefthideToast(toast7) {
    this.toasts7 = this.toastsA.filter((t) => t !== toast7);
  }
  TopCenter() {
    const newToast = { autohide: true };
    this.toasts8.push(newToast);
  }
  TopCenterhideToast(toast7) {
    this.toasts8 = this.toastsA.filter((t) => t !== toast7);
  }
  TopRight() {
    const newToast = { autohide: true };
    this.toasts9.push(newToast);
  }
  TopRighthideToast(toast7) {
    this.toasts9 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleLeft() {
    const newToast = { autohide: true };
    this.toasts10.push(newToast);
  }
  MiddleLefthideToast(toast7) {
    this.toasts10 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleCenter() {
    const newToast = { autohide: true };
    this.toasts11.push(newToast);
  }
  MiddleCenterhideToast(toast7) {
    this.toasts11 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleRight() {
    const newToast = { autohide: true };
    this.toasts12.push(newToast);
  }
  MiddleRighthideToast(toast7) {
    this.toasts12 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomLeft() {
    const newToast = { autohide: true };
    this.toasts13.push(newToast);
  }
  BottomLefthideToast(toast7) {
    this.toasts13 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomCenter() {
    const newToast = { autohide: true };
    this.toasts14.push(newToast);
  }
  BottomCenterthideToast(toast7) {
    this.toasts14 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomRight() {
    const newToast = { autohide: true };
    this.toasts15.push(newToast);
  }
  BottomRighthideToast(toast7) {
    this.toasts15 = this.toastsA.filter((t) => t !== toast7);
  }
  static {
    this.\u0275fac = function ToastsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastsComponent)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastsComponent, selectors: [["app-toasts"]], viewQuery: function ToastsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toastContainer = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([ToastrService]), \u0275\u0275StandaloneFeature], decls: 262, vars: 11, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "Toasts", "activeTitle", "Toasts"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["type", "button", "id", "liveToastBtn", 1, "btn", "btn-primary", "btn-wave", 3, "click"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], [1, "text-default", 3, "delay", "autohide", "bg-warning"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "toast", "align-items-center", "text-bg-primary", "border-0", "mb-4", 3, "autohide"], [1, "toast", "align-items-center", "text-bg-secondary", "border-0", "mb-4", 3, "autohide"], [1, "toast", "align-items-center", "text-bg-success", "border-0", "mb-4", 3, "autohide"], [1, "toast", "align-items-center", "text-bg-info", "border-0", "fade", "show", 3, "autohide"], [3, "autohide"], [1, "toast-container", "position-static"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "fade", "show", "mb-3", 3, "autohide"], [1, "my-4", "text-muted"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show", "mt-2", 3, "autohide"], [1, "col-xl-6"], [1, "btn-list"], ["type", "button", "id", "primaryToastBtn", 1, "btn", "btn-primary-light", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "secondaryToastBtn", 1, "btn", "btn-secondary-light", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "warningToastBtn", 1, "btn", "btn-warning-light", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "infoToastBtn", 1, "btn", "btn-info-light", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "successToastBtn", 1, "btn", "btn-success-light", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "dangerToastBtn", 1, "btn", "btn-danger-light", "me-2", "btn-wave", 3, "click"], [1, "toast", "colored-toast", "bg-primary-transparent", 3, "delay", "autohide", "bg-warning"], [1, "toast", "colored-toast", "bg-secondary-transparent", 3, "delay", "autohide", "bg-warning"], [1, "toast", "colored-toast", "bg-warning-transparent", 3, "delay", "autohide", "bg-warning"], [1, "toast", "colored-toast", "bg-info-transparent", 3, "delay", "autohide", "bg-danger"], [1, "toast", "colored-toast", "bg-success-transparent", 3, "delay", "autohide", "bg-warning"], [1, "toast", "colored-toast", "bg-danger-transparent", 3, "delay", "autohide", "bg-danger"], ["type", "button", "id", "solidprimaryToastBtn", 1, "btn", "btn-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsecondaryToastBtn", 1, "btn", "btn-secondary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsecondaryToastBtn", 1, "btn", "btn-warning", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidinfoToastBtn", 1, "btn", "btn-info", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsuccessToastBtn", 1, "btn", "btn-success", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "soliddangerToastBtn", 1, "btn", "btn-danger", "me-2", "btn-wave", 3, "click"], ["id", "solid-primaryToast", 1, "toast", "colored-toast", "bg-primary", "text-fixed-white", 3, "delay", "autohide", "bg-warning"], ["id", "solid-secondaryToast", 1, "toast", "colored-toast", "bg-secondary", "text-fixed-white", 3, "delay", "autohide", "bg-warning"], ["id", "solid-warningToast", 1, "toast", "colored-toast", "bg-warning", "text-fixed-white", 3, "delay", "autohide"], ["id", "solid-infoToast", 1, "toast", "colored-toast", "bg-info", "text-fixed-white", 3, "delay", "autohide", "bg-warning"], ["id", "solid-successToast", 1, "toast", "colored-toast", "bg-success", "text-fixed-white", 3, "delay", "autohide", "bg-warning"], ["id", "solid-dangerToast", 1, "toast", "colored-toast", "bg-danger", "text-fixed-white", 3, "delay", "autohide", "bg-warning"], [1, "col-xl-12"], ["type", "button", "id", "topleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "topcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "toprightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "middleleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "middlecenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "middlerightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "bottomleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "bottomcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "bottomrightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], [1, "toast-container", "position-fixed", "top-0", "start-0", "p-3"], [1, "toast", "colored-toast", "bg-primary-transparent", 3, "delay", "autohide"], [1, "toast-container", "position-fixed", "top-0", "start-50", "translate-middle-x", "p-3"], [1, "toast-container", "position-fixed", "top-50", "start-0", "translate-middle-y", "p-3"], [1, "toast-container", "position-fixed", "top-50", "start-50", "translate-middle"], [1, "toast-container", "position-fixed", "top-50", "end-0", "translate-middle-y", "p-3"], [1, "toast-container", "position-fixed", "bottom-0", "start-0", "p-3"], [1, "toast-container", "position-fixed", "bottom-0", "start-50", "translate-middle-x", "p-3"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], [1, "bd-example", "bg-light", "bd-example-toasts", "d-flex", "p-0"], ["aria-live", "polite", "aria-atomic", "true", 1, "d-flex", "justify-content-center", "align-items-center", "w-100"], [1, "", 3, "autohide"], [1, "text-default", 3, "hide", "delay", "autohide"], ["ngbToastHeader", ""], ["src", "./assets/images/brand-logos/favicon.ico", "alt", "Your Image", 1, "bd-placeholder-img", "rounded", "me-2"], [1, "me-auto", "text-default"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", "data-bs-autohide", "false", 1, "align-items-center", "show"], [1, "d-flex"], [1, "text-fixed-white"], ["aria-label", "Close", "data-bs-dismiss", "toast", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"], ["aria-hidden", "true"], [3, "hidden", "autohide"], [1, "me-auto", "d-flex", "justify-content-between", "w-100"], [1, "d-flex", "text-default"], ["src", "./assets/images/brand-logos/favicon.ico", "alt", "...", 1, "bd-placeholder-img", "rounded", "me-2"], [1, "tx-14", "mg-b-0", "mg-r-auto"], [1, "text-muted", "me-2", "lh-lg"], [1, "d-flex", "ms-auto"], [1, "me-auto"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "me-2", "m-auto", 3, "click"], [1, "mt-2", "pt-2", "border-top"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-wave", "me-2"], ["type", "button", "data-bs-dismiss", "toast", 1, "btn", "btn-secondary", "btn-sm", "btn-wave", 3, "click"], [1, "toast", "colored-toast", "bg-primary-transparent", 3, "hide", "delay", "autohide"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "...", 1, "bd-placeholder-img", "rounded", "me-2"], [1, "toast", "colored-toast", "bg-secondary-transparent", 3, "hide", "delay", "autohide"], [1, "toast", "colored-toast", "bg-warning-transparent", 3, "hide", "delay", "autohide"], [1, "toast", "colored-toast", "bg-info-transparent", 3, "hide", "delay", "autohide"], [1, "toast", "colored-toast", "bg-success-transparent", 3, "hide", "delay", "autohide"], [1, "toast", "colored-toast", "bg-danger-transparent", 3, "hide", "delay", "autohide"], ["id", "solid-primaryToast", 1, "toast", "colored-toast", "bg-primary", "text-fixed-white", 3, "click", "delay", "autohide"], ["id", "solid-secondaryToast", 1, "toast", "colored-toast", "bg-secondary", "text-fixed-white", 3, "hide", "delay", "autohide"], ["id", "solid-warningToast", 1, "toast", "colored-toast", "bg-warning", "text-fixed-white", 3, "hide", "delay", "autohide"], ["id", "solid-infoToast", 1, "toast", "colored-toast", "bg-info", "text-fixed-white", 3, "hide", "delay", "autohide"], ["id", "solid-successToast", 1, "toast", "colored-toast", "bg-success", "text-fixed-white", 3, "hide", "delay", "autohide"], ["id", "solid-dangerToast", 1, "toast", "colored-toast", "bg-danger", "text-fixed-white", 3, "hide", "delay", "autohide"], ["ngbToastHeader", "", 1, "bg-primary"]], template: function ToastsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Live example ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_12_listener() {
          return ctx.showToast();
        });
        \u0275\u0275text(13, "Show live toast");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275repeaterCreate(15, ToastsComponent_For_16_Template, 3, 4, "ngb-toast", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "pre", 14)(19, "code", 14);
        \u0275\u0275text(20, '<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn">Show live\ntoast</button>\n<div class="toast-container position-fixed top-0 end-0 p-3">\n<div id="liveToast" class="toast" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<small>11 mins ago</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nHello, world! This is a toast message.\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "div", 5);
        \u0275\u0275text(24, " Color schemes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 6)(26, "button", 7);
        \u0275\u0275text(27, "Show Code");
        \u0275\u0275element(28, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 9);
        \u0275\u0275template(30, ToastsComponent_Conditional_30_Template, 7, 1, "ngb-toast", 15)(31, ToastsComponent_Conditional_31_Template, 7, 1, "ngb-toast", 16)(32, ToastsComponent_Conditional_32_Template, 7, 1, "ngb-toast", 17)(33, ToastsComponent_Conditional_33_Template, 7, 1, "ngb-toast", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 13)(35, "pre", 14)(36, "code", 14);
        \u0275\u0275text(37, '<div class="toast align-items-center text-bg-primary border-0 fade show mb-4"\nrole="alert" aria-live="assertive" aria-atomic="true">\n<div class="d-flex">\n<div class="toast-body">\nHello, world! This is the Primary toast message.\n</div>\n<button type="button" class="btn-close btn-close-white me-2 m-auto"\ndata-bs-dismiss="toast" aria-label="Close"></button>\n</div>\n</div>\n<div class="toast align-items-center text-bg-secondary border-0 fade show mb-4"\nrole="alert" aria-live="assertive" aria-atomic="true">\n<div class="d-flex">\n<div class="toast-body">\nHello, world! This is the Secondary toast.\n</div>\n<button type="button" class="btn-close btn-close-white me-2 m-auto"\ndata-bs-dismiss="toast" aria-label="Close"></button>\n</div>\n</div>\n<div class="toast align-items-center text-bg-success border-0 fade show mb-4"\nrole="alert" aria-live="assertive" aria-atomic="true">\n<div class="d-flex">\n<div class="toast-body">\nHello, world! This is the Success toast message.\n</div>\n<button type="button" class="btn-close btn-close-white me-2 m-auto"\ndata-bs-dismiss="toast" aria-label="Close"></button>\n</div>\n</div>\n<div class="toast align-items-center text-bg-info border-0 fade show"\nrole="alert" aria-live="assertive" aria-atomic="true">\n<div class="d-flex">\n<div class="toast-body">\nHello, world! This is the info toast message.\n</div>\n<button type="button" class="btn-close btn-close-white me-2 m-auto"\ndata-bs-dismiss="toast" aria-label="Close"></button>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "div", 5);
        \u0275\u0275text(42, " Basic example ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 6)(44, "button", 7);
        \u0275\u0275text(45, "Show Code");
        \u0275\u0275element(46, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 9);
        \u0275\u0275template(48, ToastsComponent_Conditional_48_Template, 3, 1, "ngb-toast", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 13)(50, "pre", 14)(51, "code", 14);
        \u0275\u0275text(52, '<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n\n<strong class="me-auto">Dashtic</strong>\n<small>11 mins ago</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nHello, world! This is a toast message.\n</div>\n</div>');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 3)(54, "div", 4)(55, "div", 5);
        \u0275\u0275text(56, " Stacking ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 6)(58, "button", 7);
        \u0275\u0275text(59, "Show Code");
        \u0275\u0275element(60, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 9)(62, "div", 20);
        \u0275\u0275template(63, ToastsComponent_Conditional_63_Template, 3, 1, "ngb-toast", 19)(64, ToastsComponent_Conditional_64_Template, 3, 1, "ngb-toast", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 13)(66, "pre", 14)(67, "code", 14);
        \u0275\u0275text(68, '<div class="toast-container position-static">\n<div class="toast fade show" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n\n<strong class="me-auto">Dashtic</strong>\n<small class="text-muted">just now</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nSee? Just like this.\n</div>\n</div>\n<div class="toast fade show" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n\n<strong class="me-auto">Dashtic</strong>\n<small class="text-muted">2 seconds ago</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nHeads up, toasts will stack automatically\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "div", 2)(70, "div", 3)(71, "div", 4)(72, "div", 5);
        \u0275\u0275text(73, " Translucent ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 6)(75, "button", 7);
        \u0275\u0275text(76, "Show Code");
        \u0275\u0275element(77, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 9);
        \u0275\u0275template(79, ToastsComponent_Conditional_79_Template, 3, 1, "ngb-toast", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 13)(81, "pre", 14)(82, "code", 14);
        \u0275\u0275text(83, '<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n\n<strong class="me-auto">Dashtic</strong>\n<small class="text-muted">11 mins ago</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nHello, world! This is a toast message.\n</div>\n</div>');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 3)(85, "div", 4)(86, "div", 5);
        \u0275\u0275text(87, " Custom content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 6)(89, "button", 7);
        \u0275\u0275text(90, "Show Code");
        \u0275\u0275element(91, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 9);
        \u0275\u0275template(93, ToastsComponent_Conditional_93_Template, 5, 1, "ngb-toast", 21);
        \u0275\u0275elementStart(94, "div")(95, "span", 22);
        \u0275\u0275text(96, " Alternatively, you can also add additional controls and components to toasts. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(97, ToastsComponent_Conditional_97_Template, 8, 1, "ngb-toast", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 13)(99, "pre", 14)(100, "code", 14);
        \u0275\u0275text(101, '<div class="toast align-items-center fade show mb-3" role="alert"\naria-live="assertive" aria-atomic="true">\n<div class="d-flex">\n<div class="toast-body">\nHello, world! This is a toast message.\n</div>\n<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"\naria-label="Close">\n</button>\n</div>\n</div>\n<div>\n<span class="my-4 text-muted">\nAlternatively, you can also add additional controls and components to\ntoasts.\n</span>\n</div>\n<div class="toast fade show mt-2" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-body">\nHello, world! This is a toast message.\n<div class="mt-2 pt-2 border-top">\n<button type="button" class="btn btn-primary btn-sm btn-wave">Take\naction</button>\n<button type="button" class="btn btn-secondary btn-sm btn-wave"\ndata-bs-dismiss="toast">Close</button>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(102, "div", 1)(103, "div", 24)(104, "div", 3)(105, "div", 4)(106, "div", 5);
        \u0275\u0275text(107, " Color Variants Live ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 6)(109, "button", 7);
        \u0275\u0275text(110, "Show Code");
        \u0275\u0275element(111, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 9)(113, "div", 25)(114, "button", 26);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_114_listener() {
          return ctx.showToastprimary();
        });
        \u0275\u0275text(115, " Primary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "button", 27);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_116_listener() {
          return ctx.showToastseconday();
        });
        \u0275\u0275text(117, " secondary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "button", 28);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_118_listener() {
          return ctx.showToastwarning();
        });
        \u0275\u0275text(119, " warning ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "button", 29);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_120_listener() {
          return ctx.showToastinfo();
        });
        \u0275\u0275text(121, " info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "button", 30);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_122_listener() {
          return ctx.showToastsuccess();
        });
        \u0275\u0275text(123, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "button", 31);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_124_listener() {
          return ctx.showToastdanger();
        });
        \u0275\u0275text(125, " danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 11);
        \u0275\u0275repeaterCreate(127, ToastsComponent_For_128_Template, 3, 4, "ngb-toast", 32, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(129, ToastsComponent_For_130_Template, 3, 4, "ngb-toast", 33, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(131, ToastsComponent_For_132_Template, 3, 4, "ngb-toast", 34, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(133, ToastsComponent_For_134_Template, 3, 4, "ngb-toast", 35, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(135, ToastsComponent_For_136_Template, 3, 4, "ngb-toast", 36, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(137, ToastsComponent_For_138_Template, 3, 4, "ngb-toast", 37, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 13)(140, "pre", 14)(141, "code", 14);
        \u0275\u0275text(142, '<div class="btn-list">\n<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn">Primary</button>\n<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn">secondary</button>\n<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn">warning</button>\n<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn">info</button>\n<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn">success</button>\n<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn">danger</button>\n</div>\n<div class="toast-container position-fixed top-0 end-0 p-3">\n<div id="primaryToast" class="toast colored-toast bg-primary-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="secondaryToast" class="toast colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-secondary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="warningToast" class="toast colored-toast bg-warning-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-warning text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="infoToast" class="toast colored-toast bg-info-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-info text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="successToast" class="toast colored-toast bg-success-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-success text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="dangerToast" class="toast colored-toast bg-danger-transparent" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-danger text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(143, "div", 24)(144, "div", 3)(145, "div", 4)(146, "div", 5);
        \u0275\u0275text(147, " Solid Background Toasts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 6)(149, "button", 7);
        \u0275\u0275text(150, "Show Code");
        \u0275\u0275element(151, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "div", 9)(153, "div", 25)(154, "button", 38);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_154_listener() {
          return ctx.SolidToastprimary();
        });
        \u0275\u0275text(155, " Primary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "button", 39);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_156_listener() {
          return ctx.SolidToastsecondary();
        });
        \u0275\u0275text(157, " secondary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "button", 40);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_158_listener() {
          return ctx.SolidToastwarning();
        });
        \u0275\u0275text(159, " Warning ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "button", 41);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_160_listener() {
          return ctx.SolidToastinfo();
        });
        \u0275\u0275text(161, " info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "button", 42);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_162_listener() {
          return ctx.SolidToastsuccess();
        });
        \u0275\u0275text(163, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "button", 43);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_164_listener() {
          return ctx.SolidToastdanger();
        });
        \u0275\u0275text(165, " danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 11);
        \u0275\u0275repeaterCreate(167, ToastsComponent_For_168_Template, 3, 4, "ngb-toast", 44, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(169, ToastsComponent_For_170_Template, 3, 4, "ngb-toast", 45, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(171, ToastsComponent_For_172_Template, 3, 2, "ngb-toast", 46, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(173, ToastsComponent_For_174_Template, 3, 4, "ngb-toast", 47, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(175, ToastsComponent_For_176_Template, 3, 4, "ngb-toast", 48, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(177, ToastsComponent_For_178_Template, 3, 4, "ngb-toast", 49, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div", 13)(180, "pre", 14)(181, "code", 14);
        \u0275\u0275text(182, '<div class="btn-list">\n<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn">Primary</button>\n<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn">secondary</button>\n<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn">warning</button>\n<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn">info</button>\n<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn">success</button>\n<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn">danger</button>\n</div>\n<div class="toast-container position-fixed top-0 end-0 p-3">\n<div id="solid-primaryToast" class="toast colored-toast bg-primary text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="solid-secondaryToast" class="toast colored-toast bg-secondary text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-secondary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="solid-warningToast" class="toast colored-toast bg-warning text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-warning text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="solid-infoToast" class="toast colored-toast bg-info text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-info text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="solid-successToast" class="toast colored-toast bg-success text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-success text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n<div id="solid-dangerToast" class="toast colored-toast bg-danger text-fixed-white" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-danger text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(183, "div", 1)(184, "div", 50)(185, "div", 3)(186, "div", 4)(187, "div", 5);
        \u0275\u0275text(188, " Toast Placements ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "div", 6)(190, "button", 7);
        \u0275\u0275text(191, "Show Code");
        \u0275\u0275element(192, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "div", 9)(194, "div", 25)(195, "button", 51);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_195_listener() {
          return ctx.TopLeft();
        });
        \u0275\u0275text(196, "Top Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "button", 52);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_197_listener() {
          return ctx.TopCenter();
        });
        \u0275\u0275text(198, "Top Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "button", 53);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_199_listener() {
          return ctx.TopRight();
        });
        \u0275\u0275text(200, "Top Right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "button", 54);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_201_listener() {
          return ctx.MiddleLeft();
        });
        \u0275\u0275text(202, "Middle Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "button", 55);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_203_listener() {
          return ctx.MiddleCenter();
        });
        \u0275\u0275text(204, "Middle Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "button", 56);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_205_listener() {
          return ctx.MiddleRight();
        });
        \u0275\u0275text(206, "Middle Right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "button", 57);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_207_listener() {
          return ctx.BottomLeft();
        });
        \u0275\u0275text(208, "Bottom Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "button", 58);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_209_listener() {
          return ctx.BottomCenter();
        });
        \u0275\u0275text(210, "Bottom Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "button", 59);
        \u0275\u0275listener("click", function ToastsComponent_Template_button_click_211_listener() {
          return ctx.BottomRight();
        });
        \u0275\u0275text(212, "Bottom Right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "div", 60);
        \u0275\u0275repeaterCreate(214, ToastsComponent_For_215_Template, 3, 2, "ngb-toast", 61, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 62);
        \u0275\u0275repeaterCreate(217, ToastsComponent_For_218_Template, 3, 4, "ngb-toast", 32, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "div", 11);
        \u0275\u0275repeaterCreate(220, ToastsComponent_For_221_Template, 3, 4, "ngb-toast", 32, _forTrack1, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "div", 63);
        \u0275\u0275repeaterCreate(223, ToastsComponent_For_224_Template, 3, 4, "ngb-toast", 32, _forTrack2, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "div", 64);
        \u0275\u0275repeaterCreate(226, ToastsComponent_For_227_Template, 3, 4, "ngb-toast", 32, _forTrack3, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "div", 65);
        \u0275\u0275repeaterCreate(229, ToastsComponent_For_230_Template, 3, 4, "ngb-toast", 32, _forTrack4, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "div", 66);
        \u0275\u0275repeaterCreate(232, ToastsComponent_For_233_Template, 3, 4, "ngb-toast", 32, _forTrack5, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 67);
        \u0275\u0275repeaterCreate(235, ToastsComponent_For_236_Template, 3, 4, "ngb-toast", 32, _forTrack6, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "div", 68);
        \u0275\u0275repeaterCreate(238, ToastsComponent_For_239_Template, 3, 4, "ngb-toast", 32, _forTrack7, true);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "div", 13)(241, "pre", 14)(242, "code", 14);
        \u0275\u0275text(243, '<div class="btn-list">\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn">Top Left</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn">Top Center</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn">Top Right</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn">Middle Left</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn">Middle Center</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Middle Right</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn">Bottom Left</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn">Bottom Center</button>\n<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn">Bottom Right</button>\n</div>\n<div class="toast-container position-fixed top-0 start-0 p-3">\n<div id="topleft-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">\n<div id="topcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed top-0 end-0 p-3">\n<div id="topright-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">\n<div id="middleleft-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed top-50 start-50 translate-middle">\n<div id="middlecenter-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">\n<div id="middleright-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed bottom-0 start-0 p-3">\n<div id="bottomleft-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">\n<div id="bottomcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>\n<div class="toast-container position-fixed bottom-0 end-0 p-3">\n<div id="bottomright-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header bg-primary text-fixed-white">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/toggle-dark.png" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nYour,toast message here.\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(244, "div", 1)(245, "div", 50)(246, "div", 3)(247, "div", 4)(248, "div", 5);
        \u0275\u0275text(249, " Aligning Toast Using Flexbox ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "div", 6)(251, "button", 7);
        \u0275\u0275text(252, "Show Code");
        \u0275\u0275element(253, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(254, "div", 9)(255, "div", 69)(256, "div", 70);
        \u0275\u0275template(257, ToastsComponent_Conditional_257_Template, 3, 1, "ngb-toast", 71);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(258, "div", 13)(259, "pre", 14)(260, "code", 14);
        \u0275\u0275text(261, '<div class="bd-example bg-light bd-example-toasts d-flex p-0">\n<div aria-live="polite" aria-atomic="true"\nclass="d-flex justify-content-center align-items-center w-100">\n<div class="toast fade show shadow-lg" role="alert" aria-live="assertive"\naria-atomic="true">\n<div class="toast-header text-default">\n<img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">\n<strong class="me-auto">Dashtic</strong>\n<small>11 mins ago</small>\n<button type="button" class="btn-close" data-bs-dismiss="toast"\naria-label="Close"></button>\n</div>\n<div class="toast-body">\nHello, world! This is a toast message.\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.toasts);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.show11 ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show12 ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show13 ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show14 ? 33 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.show ? 48 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.show7 ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show8 ? 64 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.show1 ? 79 : -1);
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.show9 ? 93 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show10 ? 97 : -1);
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.toasts1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toasts2);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toasts3);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toasts4);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toasts5);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toasts6);
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.toastsA);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toastsB);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toastsC);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toastsD);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toastsE);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.toastsF);
        \u0275\u0275advance(37);
        \u0275\u0275repeater(ctx.toasts7);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts8);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts9);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts10);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts11);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts12);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts13);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts14);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.toasts15);
        \u0275\u0275advance(19);
        \u0275\u0275conditional(ctx.show16 ? 257 : -1);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule, NgbToast, NgbToastHeader, ToastrModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastsComponent, { className: "ToastsComponent", filePath: "src\\app\\components\\uielements\\toasts\\toasts.component.ts", lineNumber: 16 });
})();
export {
  ToastsComponent
};
//# sourceMappingURL=toasts.component-NGAQVUUV.js.map
