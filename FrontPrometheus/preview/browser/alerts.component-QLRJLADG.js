import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbAlert,
  NgbCollapse,
  NgbModule,
  takeUntilDestroyed
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  DomSanitizer,
  Subject,
  debounceTime,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/alerts/alerts.component.ts
var _c0 = ["staticAlert"];
var _c1 = ["selfClosingAlert"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.type;
function AlertsComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function AlertsComponent_For_34_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAlert(ctx_r1.i));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r3, " ");
  }
}
function AlertsComponent_For_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 136);
    \u0275\u0275listener("click", function AlertsComponent_For_137_Template_button_click_2_listener() {
      const \u0275$index_227_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solidClose(\u0275$index_227_r5));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r6 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r6.type, " alert-dismissible fade show my-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r6.message, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn-close ", alert_r6.bg, "");
  }
}
function AlertsComponent_For_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_153_Template_button_click_2_listener() {
      const \u0275$index_260_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OutlineClose(\u0275$index_260_r8));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r9 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r9.type, " alert-dismissible fade show my-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r9.message, " ");
  }
}
function AlertsComponent_For_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " A simple solid primary alert with small shadow\u2014check it out! ");
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_169_Template_button_click_2_listener() {
      const \u0275$index_293_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solidShadowsAlertsClose(\u0275$index_293_r11));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r12 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r12.type, " shadow-sm alert-dismissible fade show my-2");
  }
}
function AlertsComponent_For_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_211_Template_button_click_2_listener() {
      const \u0275$index_369_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solidroundedClose(\u0275$index_369_r14));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r15 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r15.type, " rounded-pill alert-dismissible fade show mb-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r15.message, " ");
  }
}
function AlertsComponent_For_227_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_227_Template_button_click_2_listener() {
      const \u0275$index_402_r17 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.roundedoutlineClose(\u0275$index_402_r17));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r18 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r18.type, " rounded-pill alert-dismissible fade show my-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r18.message, " ");
  }
}
function AlertsComponent_For_243_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_243_Template_button_click_2_listener() {
      const \u0275$index_435_r20 = \u0275\u0275restoreView(_r19).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.roundeDefaultClose(\u0275$index_435_r20));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r21 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r21.type, " rounded-pill alert-dismissible fade show my-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r21.message, " ");
  }
}
function AlertsComponent_For_259_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 138);
    \u0275\u0275listener("click", function AlertsComponent_For_259_Template_button_click_2_listener() {
      const \u0275$index_468_r23 = \u0275\u0275restoreView(_r22).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CustomeButtonClose(\u0275$index_468_r23));
    });
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r24 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r24.type, " rounded-pill alert-dismissible fade show my-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r24.message, " ");
  }
}
function AlertsComponent_For_325_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275element(1, "span", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_325_Template_button_click_3_listener() {
      const \u0275$index_594_r26 = \u0275\u0275restoreView(_r25).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.customizedAlertclose(\u0275$index_594_r26));
    });
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("alert alert-", alert_r27.type, " alert-dismissible fade show custom-alert-icon shadow-sm my-2");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.getSanitizedSVG(alert_r27.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r27.message, " ");
  }
}
function AlertsComponent_For_341_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-alert", 141);
    \u0275\u0275listener("closed", function AlertsComponent_For_341_Template_ngb_alert_closed_0_listener() {
      const alert9_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close9(alert9_r29));
    });
    \u0275\u0275elementStart(1, "div", 142);
    \u0275\u0275element(2, "img", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_341_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close9(ctx_r1.i));
    });
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert9_r29 = ctx.$implicit;
    \u0275\u0275property("type", alert9_r29.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", alert9_r29.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert9_r29.message, " ");
  }
}
function AlertsComponent_For_357_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-alert", 141);
    \u0275\u0275listener("closed", function AlertsComponent_For_357_Template_ngb_alert_closed_0_listener() {
      const alert10_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close10(alert10_r31));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "img", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 137);
    \u0275\u0275listener("click", function AlertsComponent_For_357_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.customizedAlertclose(ctx_r1.i));
    });
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert10_r31 = ctx.$implicit;
    \u0275\u0275property("type", alert10_r31.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(alert10_r31.class);
    \u0275\u0275advance();
    \u0275\u0275property("src", alert10_r31.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert10_r31.message, " ");
  }
}
var ALERTS = [
  {
    type: "success",
    message: "This is an success alert"
  },
  {
    type: "info",
    message: "This is an info alert"
  },
  {
    type: "warning",
    message: "This is a warning alert"
  },
  {
    type: "danger",
    message: "This is a danger alert"
  },
  {
    type: "primary",
    message: "This is a primary alert"
  },
  {
    type: "secondary",
    message: "This is a secondary alert"
  },
  {
    type: "light",
    message: "This is a light alert"
  },
  {
    type: "dark",
    message: "This is a dark alert"
  }
];
var solidRoundedALERTS = [
  {
    type: "solid-primary",
    message: "  A simple solid rounded primary alert\u2014check it out!"
  },
  {
    type: "solid-secondary",
    message: "A simple solid rounded secondary alert\u2014check it out!"
  },
  {
    type: "solid-warning",
    message: "  A simple solid rounded warning alert\u2014check it out!"
  },
  {
    type: "solid-danger",
    message: "A simple solid rounded danger alert\u2014check it out!"
  }
];
var solidALERTS = [
  {
    type: "solid-primary",
    message: " A simple solid primary alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-secondary",
    message: "A simple solid secondary alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-info",
    message: "A simple solid info alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-warning",
    message: "A simple solid warning alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-success",
    message: "A simple solid success alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-danger",
    message: "A simple solid danger alert\u2014check it out!",
    bg: ""
  },
  {
    type: "solid-light",
    message: "A simple solid light alert\u2014check it out!",
    bg: "text-dark"
  },
  {
    type: "solid-dark",
    message: "A simple solid dark alert\u2014check it out!",
    bg: "text-white"
  }
];
var outlineALERTS = [
  {
    type: "outline-primary",
    message: "A simple outline primary alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-secondary",
    message: "A simple outline secondary alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-info",
    message: "A simple outline info alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-warning",
    message: "A simple outline warning alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-success",
    message: "A simple outline success alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-danger",
    message: "A simple outline danger alert\u2014check it out!",
    bg: ""
  },
  {
    type: "outline-light",
    message: "A simple outline light alert\u2014check it out!",
    bg: "text-dark"
  },
  {
    type: "outline-dark",
    message: "A simple outline dark alert\u2014check it out!",
    bg: "text-dark"
  }
];
var solidShadowsALERTS = [
  {
    type: "solid-primary",
    message: "A simple solid primary alert with normal shadow\u2014check it out!"
  },
  {
    type: "solid-primary",
    message: "A simple solid primary alert with normal shadow\u2014check it out!"
  },
  {
    type: "solid-primary",
    message: "A simple solid primary alert with normal shadow\u2014check it out!"
  },
  {
    type: "solid-secondary",
    message: "A simple solid secondary alert with normal shadow\u2014check it out!"
  },
  {
    type: "solid-secondary",
    message: " A simple solid secondary alert with normal shadow\u2014check it out!"
  },
  {
    type: "solid-secondary",
    message: "A simple solid secondary alert with normal shadow\u2014check it out!"
  }
];
var roundedOutlineALERTS = [
  {
    type: "outline-primary",
    message: " A simple outline primary alert\u2014check it out!"
  },
  {
    type: "outline-secondary",
    message: "A simple outline secondary alert\u2014check it out!"
  },
  {
    type: "outline-info",
    message: "A simple outline info alert\u2014check it out!"
  },
  {
    type: "outline-warning",
    message: "A simple outline warning alert\u2014check it out!"
  }
];
var roundeDefaultALERTS = [
  {
    type: "primary",
    message: " A simple rounded primary alert\u2014check it out!"
  },
  {
    type: "secondary",
    message: "A simple rounded secondary alert\u2014check it out!"
  },
  {
    type: "info",
    message: "A simple rounded info alert\u2014check it out!"
  },
  {
    type: "warning",
    message: "A simple rounded warning alert\u2014check it out!"
  }
];
var CustomeButtonALERTS = [
  {
    type: "primary",
    message: " A simple rounded primary alert\u2014check it out!"
  },
  {
    type: "secondary",
    message: "A simple rounded secondary alert\u2014check it out!"
  },
  {
    type: "info",
    message: "A simple rounded info alert\u2014check it out!"
  },
  {
    type: "warning",
    message: "A simple rounded warning alert\u2014check it out!"
  }
];
var CustomizedButtonALERTS = [
  {
    type: "primary",
    message: "A simple outline primary alert\u2014check it out!",
    icon: '<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>'
    // svgclass:''
  },
  {
    type: "secondary",
    message: "A simple outline secondary alert\u2014check it out!",
    icon: '<svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>'
  },
  {
    type: "info",
    message: "A simple outline info alert\u2014check it out!",
    icon: '<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>'
  },
  {
    type: "warning",
    message: "A simple outline warning alert\u2014check it out!",
    icon: '<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>'
  }
];
var AlertsComponent = class _AlertsComponent {
  removeAlert(index) {
    this.livealerts.splice(index, 1);
  }
  showAlert() {
    this.livealerts.push("Nice, you triggered this alert message!");
  }
  close(alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  closeAlerts(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  solidClose(index) {
    this.solidAlerts.splice(index, 1);
  }
  solidroundedClose(index) {
    this.solidroundedAlerts.splice(index, 1);
  }
  OutlineClose(index) {
    this.outlineAlerts.splice(index, 1);
  }
  solidShadowsAlertsClose(index) {
    this.solidShadowsAlerts.splice(index, 1);
  }
  roundedoutlineClose(index) {
    this.roundedoutlineAlerts.splice(index, 1);
  }
  roundeDefaultClose(index) {
    this.roundeDefaultAlerts.splice(index, 1);
  }
  CustomeButtonClose(index) {
    this.CustomeButtonAlerts.splice(index, 1);
  }
  customizedAlertclose(index) {
    this.CustomizedButtonAlerts.splice(index, 1);
  }
  getSanitizedSVG(svgContent) {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  close9(alert9) {
    this.imagesalerts.splice(this.imagesalerts.indexOf(alert9), 1);
  }
  close10(alert10) {
    this.sizeimgssalerts.splice(this.sizeimgssalerts.indexOf(alert10), 1);
  }
  close11(alert11) {
    this.contentsalerts.splice(this.contentsalerts.indexOf(alert11), 1);
  }
  removeRow(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  Closetoggle(item) {
    if (item == "close") {
      this.isClosed = true;
    }
    if (item == "close1") {
      this.isClosed1 = true;
    }
    if (item == "close2") {
      this.isClosed2 = true;
    }
    if (item == "close3") {
      this.isClosed3 = true;
    }
    if (item == "close4") {
      this.isClosed4 = true;
    }
    if (item == "close5") {
      this.isClosed5 = true;
    }
    if (item == "close6") {
      this.isClosed6 = true;
    }
    if (item == "close7") {
      this.isClosed7 = true;
    }
    if (item == "close8") {
      this.isClosed8 = true;
    }
    if (item == "close9") {
      this.isClosed9 = true;
    }
    if (item == "close10") {
      this.isClosed10 = true;
    }
    if (item == "close11") {
      this.isClosed11 = true;
    }
    if (item == "close12") {
      this.isClosed12 = true;
    }
    if (item == "A") {
      this.isClosedA = true;
    }
    if (item == "B") {
      this.isClosedB = true;
    }
    if (item == "C") {
      this.isClosedC = true;
    }
    if (item == "D") {
      this.isClosedD = true;
    }
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.toggleClass = "line";
    this.solidAlerts = solidALERTS;
    this.solidroundedAlerts = solidRoundedALERTS;
    this.outlineAlerts = outlineALERTS;
    this.solidShadowsAlerts = solidShadowsALERTS;
    this.roundedoutlineAlerts = roundedOutlineALERTS;
    this.roundeDefaultAlerts = roundeDefaultALERTS;
    this.CustomeButtonAlerts = CustomeButtonALERTS;
    this.CustomizedButtonAlerts = CustomizedButtonALERTS;
    this.isClosed = false;
    this.isClosed1 = false;
    this.isClosed2 = false;
    this.isClosed3 = false;
    this.isClosed4 = false;
    this.isClosed5 = false;
    this.isClosed6 = false;
    this.isClosed7 = false;
    this.isClosed8 = false;
    this.isClosed9 = false;
    this.isClosed10 = false;
    this.isClosed11 = false;
    this.isClosed12 = false;
    this.isClosed13 = false;
    this.isClosedA = false;
    this.isClosedB = false;
    this.isClosedC = false;
    this.isClosedD = false;
    this._message$ = new Subject();
    this.staticAlertClosed = false;
    this.successMessage = "";
    this.imagesalerts = [
      {
        type: "alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: " A simple primary alert with image\u2014check it out!",
        image: "./assets/images/faces/3.jpg"
      },
      {
        type: "alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: " A simple secondary alert with image\u2014check it out!",
        image: "./assets/images/faces/5.jpg"
      },
      {
        type: "alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: "A simple warning alert with image\u2014check it out!",
        image: "./assets/images/faces/8.jpg"
      },
      {
        type: "alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: "A simple danger alert with image\u2014check it out!",
        image: "./assets/images/faces/11.jpg"
      },
      {
        type: "alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: "A simple info alert with image\u2014check it out!",
        image: "./assets/images/faces/13.jpg"
      },
      {
        type: "alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: "A simple light alert with image\u2014check it out!",
        image: "./assets/images/faces/10.jpg"
      },
      {
        type: "alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2",
        message: " A simple dark alert with image\u2014check it out!",
        image: "./assets/images/faces/15.jpg"
      }
    ];
    this.sizeimgssalerts = [
      {
        type: "alert alert-img avatar-xs  alert-primary alert-dismissible fase show flex-wrap my-2",
        message: " A simple primary alert with image\u2014check it out!",
        image: "./assets/images/faces/3.jpg",
        class: "avatar avatar-xs me-3"
      },
      {
        type: "alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2",
        message: " A simple secondary alert with image\u2014check it out!",
        image: "./assets/images/faces/5.jpg",
        class: "avatar avatar-sm me-3"
      },
      {
        type: "alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2",
        message: "A simple warning alert with image\u2014check it out!",
        image: "./assets/images/faces/8.jpg",
        class: "avatar  me-3"
      },
      {
        type: "alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2",
        message: "A simple danger alert with image\u2014check it out!",
        image: "./assets/images/faces/11.jpg",
        class: "avatar avatar-md me-3"
      },
      {
        type: "alert alert-img alert-info alert-dismissible fase show flex-wrap my-2",
        message: "A simple info alert with image\u2014check it out!",
        image: "./assets/images/faces/13.jpg",
        class: "avatar avatar-lg me-3"
      },
      {
        type: "alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2",
        message: " A simple dark alert with image\u2014check it out!",
        image: "./assets/images/faces/15.jpg",
        class: "avatar avatar-xl me-3"
      }
    ];
    this.contentsalerts = [
      {
        type: "alert alert-primary overflow-hidden p-0",
        message: " Thank you for reporting this.!",
        class: "p-3 bg-primary text-fixed-black d-flex justify-content-between"
      },
      {
        type: "alert  alert-secondary overflow-hidden p-0 ",
        message: "Thank you for reporting this.!",
        class: "p-3 bg-secondary text-fixed-white d-flex justify-content-between"
      },
      {
        type: "alert alert-success overflow-hidden p-0",
        message: "Thank you for reporting this.!",
        class: "p-3 bg-success text-fixed-white d-flex justify-content-between"
      },
      {
        type: "alert alert-warning overflow-hidden p-0",
        message: "Thank you for reporting this.!",
        class: "p-3 bg-warning text-fixed-white d-flex justify-content-between"
      }
    ];
    this.svgalerts = [
      {
        type: "alert svg-primary alert-primary alert-dismissible fade show custom-alert-icon shadow-sm my-2",
        message: " A customized primary alert with an icon",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>'
      },
      {
        type: "alert svg-secondary alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm my-2",
        message: "A customized secondary alert with an icon",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>'
      },
      {
        type: "alert svg-warning alert-warning alert-dismissible fade show custom-alert-icon shadow-sm my-2",
        message: "A customized warning alert with an icon",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>'
      },
      {
        type: " alert svg-danger alert-danger alert-dismissible fade show custom-alert-icon shadow-sm my-2",
        message: "A customized danger alert with an icon!",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>'
      }
    ];
    this.reset();
    this.livealerts = [];
    this._message$.pipe(takeUntilDestroyed(), tap((message) => this.successMessage = message), debounceTime(5e3)).subscribe(() => this.selfClosingAlert?.close());
  }
  changeSuccessMessage() {
    this._message$.next(`${/* @__PURE__ */ new Date()} - Message successfully changed.`);
  }
  svgClose(alert7) {
    this.svgalerts.splice(this.svgalerts.indexOf(alert7), 1);
  }
  getTrustedHtml(val) {
    return val ? this.sanitizer.bypassSecurityTrustHtml(val) : "";
  }
  static {
    this.\u0275fac = function AlertsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertsComponent)(\u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertsComponent, selectors: [["app-alerts"]], viewQuery: function AlertsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.staticAlert = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selfClosingAlert = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 685, vars: 33, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "Alerts", "activeTitle", "Alerts"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["type", "warning", "role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", 3, "dismissible"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "bi", "bi-x"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["id", "liveAlertPlaceholder"], ["role", "alert", "aria-live", "polite", 1, "alert", "alert-success", "alert-dismissible", "mb-2"], ["type", "button", "id", "liveAlertBtn", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-primary", "my-2"], ["role", "alert", 1, "alert", "alert-secondary", "my-2"], ["role", "alert", 1, "alert", "alert-success", "my-2"], ["role", "alert", 1, "alert", "alert-danger", "my-2"], ["role", "alert", 1, "alert", "alert-warning", "my-2"], ["role", "alert", 1, "alert", "alert-info", "my-2"], ["role", "alert", 1, "alert", "alert-light", "my-2"], ["role", "alert", 1, "alert", "alert-dark", "my-2"], ["href", "javascript:void(0);", 1, "alert-link"], [3, "class"], [1, "alert", "alert-primary", "shadow-sm", "my-2"], [1, "alert", "alert-primary", "shadow", "my-2"], [1, "alert", "alert-primary", "shadow-lg", "my-2"], [1, "alert", "alert-secondary", "shadow-sm", "my-2"], [1, "alert", "alert-secondary", "shadow", "my-2"], [1, "alert", "alert-secondary", "shadow-lg", "my-2"], ["role", "alert", 1, "alert", "alert-primary", "d-flex", "align-items-center", "my-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "me-2", "svg-primary"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center", "my-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "me-2", "svg-success"], ["d", "M0 0h24v24H0V0zm0 0h24v24H0V0z", "fill", "none"], ["d", "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "align-items-center", "my-2"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "me-2", "svg-warning"], ["fill", "none", "height", "24", "width", "24"], ["d", "M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"], ["points", "13,16 11,16 11,18 13,18"], ["points", "13,10 11,10 11,15 13,15"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "my-2"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "me-2", "svg-danger"], ["d", "M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"], ["height", "6", "width", "2", "x", "11", "y", "7"], ["height", "2", "width", "2", "x", "11", "y", "15"], ["role", "alert", 3, "class"], [3, "type"], [1, "col-xl-12"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12", 3, "ngbCollapseChange", "ngbCollapse"], [1, "card", "bg-white", "border-0"], [1, "alert", "custom-alert1", "alert-primary"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "ms-auto", 3, "click"], [1, "text-center", "px-5", "pb-0"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "custom-alert-icon", "svg-primary"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"], [1, ""], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "m-1"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "m-1"], [1, "alert", "custom-alert1", "alert-secondary"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "custom-alert-icon", "svg-secondary"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "m-1"], [1, "alert", "custom-alert1", "alert-warning"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "custom-alert-icon", "svg-warning"], ["d", "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "m-1"], ["type", "button", 1, "btn", "btn-sm", "btn-warning", "m-1"], [1, "alert", "custom-alert1", "alert-danger"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "custom-alert-icon", "svg-danger"], ["d", "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "m-1"], [1, "col-xl-3", 3, "ngbCollapseChange", "ngbCollapse"], [1, "card", "border-0"], [1, "alert", "alert-primary", "border", "border-primary", "mb-0", "p-2"], [1, "d-flex", "align-items-start"], [1, "me-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-primary"], [1, "text-primary", "w-100"], [1, "fw-semibold", "d-flex", "justify-content-between"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "p-0", 3, "click"], [1, "fs-12", "op-8", "mb-1"], [1, "fs-12", "d-inline-flex"], ["href", "javascript:void(0);", 1, "text-secondary", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-primary", "fw-semibold"], [1, "alert", "alert-secondary", "border", "border-secondary", "mb-0", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-secondary"], [1, "text-secondary", "w-100"], ["href", "javascript:void(0);", 1, "text-danger", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-secondary", "fw-semibold"], [1, "alert", "alert-warning", "border", "border-warning", "mb-0", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-warning"], [1, "text-warning", "w-100"], ["href", "javascript:void(0);", 1, "text-dark", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-warning", "fw-semibold"], [1, "alert", "alert-danger", "border", "border-danger", "mb-0", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-danger"], [1, "text-danger", "w-100"], ["href", "javascript:void(0);", 1, "text-info", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-danger", "fw-semibold"], [1, "alert", "alert-solid-primary", "border", "border-primary", "mb-0", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-white"], [1, "text-fixed-white", "w-100"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold", "me-2", "op-7"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold"], [1, "alert", "alert-solid-secondary", "border", "border-secondary", "mb-0", "p-2"], [1, "fs-12"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold", "me-2"], [1, "alert", "alert-solid-warning", "border", "border-warning", "mb-0", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "1.5rem", "viewBox", "0 0 24 24", "width", "1.5rem", "fill", "#000000", 1, "flex-shrink-0", "svg-white"], [1, "alert", "alert-solid-danger", "border", "border-danger", "mb-0", "p-2"], [1, "row", "gy-3"], [1, "col-xl-6", 3, "ngbCollapseChange", "ngbCollapse"], ["role", "alert", 1, "alert", "alert-primary", "overflow-hidden", "p-0"], [1, "p-3", "bg-primary", "text-fixed-white", "d-flex", "justify-content-between"], [1, "aletr-heading", "mb-0", "text-fixed-white"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "p-0", "text-fixed-white", 3, "click"], [1, "my-0"], [1, "p-3"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-decoration-underline"], ["role", "alert", 1, "alert", "alert-secondary", "overflow-hidden", "p-0"], [1, "p-3", "bg-secondary", "text-fixed-white", "d-flex", "justify-content-between"], ["role", "alert", 1, "alert", "alert-success", "overflow-hidden", "p-0"], [1, "p-3", "bg-success", "text-fixed-white", "d-flex", "justify-content-between"], ["role", "alert", 1, "alert", "alert-warning", "overflow-hidden", "p-0"], [1, "p-3", "bg-warning", "text-fixed-white", "d-flex", "justify-content-between"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "alert", 1, "btn-close", 3, "click"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 3, "click"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "custom-close", 3, "click"], ["role", "alert"], [3, "innerHTML"], [3, "closed", "type"], [1, "avatar", "avatar-sm", "me-3", "avatar-rounded"], ["alt", "img", 3, "src"]], template: function AlertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic Alert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "ngb-alert", 10)(13, "strong");
        \u0275\u0275text(14, "Holy guacamole!");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " You should check in on some of those fields below. ");
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "pre", 14)(20, "code", 14);
        \u0275\u0275text(21, '<div class="alert alert-warning alert-dismissible fade show" role="alert">\n<strong>Holy guacamole!</strong> You should check in on some of those fields\nbelow.\n<button type="button" class="btn-close" data-bs-dismiss="alert"\naria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "div", 5);
        \u0275\u0275text(26, " Live example ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 6)(28, "button", 7);
        \u0275\u0275text(29, "Show Code");
        \u0275\u0275element(30, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 9)(32, "div", 15);
        \u0275\u0275repeaterCreate(33, AlertsComponent_For_34_Template, 4, 1, "div", 16, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 17);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_35_listener() {
          return ctx.showAlert();
        });
        \u0275\u0275text(36, " show alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 13)(38, "pre", 14)(39, "code", 14);
        \u0275\u0275text(40, '<div id="liveAlertPlaceholder">\n<div class="mb-2"></div>\n<div class="mb-2"></div>\n<div class="mb-2"></div>\n<div class="mb-2"></div>\n</div>\n<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live\nalert\n</button>\n');
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 2)(43, "div", 3)(44, "div", 4)(45, "div", 5);
        \u0275\u0275text(46, " Default alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 6)(48, "button", 7);
        \u0275\u0275text(49, "Show Code");
        \u0275\u0275element(50, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 9)(52, "div", 18);
        \u0275\u0275text(53, " A simple primary alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 19);
        \u0275\u0275text(55, " A simple secondary alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 20);
        \u0275\u0275text(57, " A simple success alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 21);
        \u0275\u0275text(59, " A simple danger alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 22);
        \u0275\u0275text(61, " A simple warning alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 23);
        \u0275\u0275text(63, " A simple info alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 24);
        \u0275\u0275text(65, " A simple light alert\u2014check it out! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 25);
        \u0275\u0275text(67, " A simple dark alert\u2014check it out! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 13)(69, "pre", 14)(70, "code", 14);
        \u0275\u0275text(71, '<div class="alert alert-primary" role="alert">\nA simple primary alert\u2014check it out!\n</div>\n\n<div class="alert alert-secondary" role="alert">\nA simple secondary alert\u2014check it out!\n</div>\n\n<div class="alert alert-success" role="alert">\nA simple success alert\u2014check it out!\n</div>\n\n<div class="alert alert-danger" role="alert">\nA simple danger alert\u2014check it out!\n</div>\n\n<div class="alert alert-warning" role="alert">\nA simple warning alert\u2014check it out!\n</div>\n\n<div class="alert alert-info" role="alert">\nA simple info alert\u2014check it out!\n</div>\n\n<div class="alert alert-light" role="alert">\nA simple light alert\u2014check it out!\n</div>\n\n<div class="alert alert-dark" role="alert">\nA simple dark alert\u2014check it out!\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "div", 5);
        \u0275\u0275text(76, " Links in alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 6)(78, "button", 7);
        \u0275\u0275text(79, "Show Code");
        \u0275\u0275element(80, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 9)(82, "div", 18);
        \u0275\u0275text(83, " A simple primary alert with ");
        \u0275\u0275elementStart(84, "a", 26);
        \u0275\u0275text(85, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 19);
        \u0275\u0275text(88, " A simple secondary alert with ");
        \u0275\u0275elementStart(89, "a", 26);
        \u0275\u0275text(90, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 20);
        \u0275\u0275text(93, " A simple success alert with ");
        \u0275\u0275elementStart(94, "a", 26);
        \u0275\u0275text(95, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 21);
        \u0275\u0275text(98, " A simple danger alert with ");
        \u0275\u0275elementStart(99, "a", 26);
        \u0275\u0275text(100, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 22);
        \u0275\u0275text(103, " A simple warning alert with ");
        \u0275\u0275elementStart(104, "a", 26);
        \u0275\u0275text(105, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 23);
        \u0275\u0275text(108, " A simple info alert with ");
        \u0275\u0275elementStart(109, "a", 26);
        \u0275\u0275text(110, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(111, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 24);
        \u0275\u0275text(113, " A simple light alert with ");
        \u0275\u0275elementStart(114, "a", 26);
        \u0275\u0275text(115, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, ". Give it a click if you like. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 25);
        \u0275\u0275text(118, " A simple dark alert with ");
        \u0275\u0275elementStart(119, "a", 26);
        \u0275\u0275text(120, "an example link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(121, ". Give it a click if you like. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 13)(123, "pre", 14)(124, "code", 14);
        \u0275\u0275text(125, '<div class="alert alert-primary" role="alert">\nA simple primary alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-secondary" role="alert">\nA simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>. Give it a click if you like.\n</div>\n\n<div class="alert alert-success" role="alert">\nA simple success alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-danger" role="alert">\nA simple danger alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-warning" role="alert">\nA simple warning alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-info" role="alert">\nA simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-light" role="alert">\nA simple light alert with <a href="javascript:void(0);" class="alert-link">an example\nlink</a>.\nGive it a click if you like.\n</div>\n\n<div class="alert alert-dark" role="alert">\nA simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.\nGive it a click if you like.\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(126, "div", 2)(127, "div", 3)(128, "div", 4)(129, "div", 5);
        \u0275\u0275text(130, " Solid Colored Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 6)(132, "button", 7);
        \u0275\u0275text(133, "Show Code");
        \u0275\u0275element(134, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 9);
        \u0275\u0275repeaterCreate(136, AlertsComponent_For_137_Template, 4, 7, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 13)(139, "pre", 14)(140, "code", 14);
        \u0275\u0275text(141, '<div class="alert alert-solid-primary alert-dismissible fade show">\nA simple solid primary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-secondary alert-dismissible fade show">\nA simple solid secondary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-info alert-dismissible fade show">\nA simple solid info alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-warning alert-dismissible fade show">\nA simple solid warning alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-success alert-dismissible fade show">\nA simple solid success alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-danger alert-dismissible fade show">\nA simple solid danger alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-light alert-dismissible fade show">\nA simple solid light alert\u2014check it out!\n<button type="button" class="btn-close text-default" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-dark alert-dismissible fade show text-white">\nA simple solid dark alert\u2014check it out!\n<button type="button" class="btn-close text-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(142, "div", 2)(143, "div", 3)(144, "div", 4)(145, "div", 5);
        \u0275\u0275text(146, " Outline Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 6)(148, "button", 7);
        \u0275\u0275text(149, "Show Code");
        \u0275\u0275element(150, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div", 9);
        \u0275\u0275repeaterCreate(152, AlertsComponent_For_153_Template, 4, 4, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 13)(155, "pre", 14)(156, "code", 14);
        \u0275\u0275text(157, '<div class="alert alert-solid-primary alert-dismissible fade show">\nA simple solid primary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-secondary alert-dismissible fade show">\nA simple solid secondary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-info alert-dismissible fade show">\nA simple solid info alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-warning alert-dismissible fade show">\nA simple solid warning alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-success alert-dismissible fade show">\nA simple solid success alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-danger alert-dismissible fade show">\nA simple solid danger alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-light alert-dismissible fade show">\nA simple solid light alert\u2014check it out!\n<button type="button" class="btn-close text-default" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-dark alert-dismissible fade show text-white">\nA simple solid dark alert\u2014check it out!\n<button type="button" class="btn-close text-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(158, "div", 2)(159, "div", 3)(160, "div", 4)(161, "div", 5);
        \u0275\u0275text(162, " Solid Alerts With Different Shadows ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "div", 6)(164, "button", 7);
        \u0275\u0275text(165, "Show Code");
        \u0275\u0275element(166, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 9);
        \u0275\u0275repeaterCreate(168, AlertsComponent_For_169_Template, 4, 3, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "div", 13)(171, "pre", 14)(172, "code", 14);
        \u0275\u0275text(173, '<div class="alert alert-solid-primary shadow-sm alert-dismissible fade show">\nA simple solid primary alert with small shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-primary shadow alert-dismissible fade show">\nA simple solid primary alert with normal shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-primary shadow-lg alert-dismissible fade show">\nA simple solid primary alert with large shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-secondary shadow-sm alert-dismissible fade show">\nA simple solid secondary alert with small shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button></div>\n\n<div class="alert alert-solid-secondary shadow alert-dismissible fade show">\nA simple solid secondary alert with normal shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button></div>\n\n<div class="alert alert-solid-secondary shadow-lg alert-dismissible fade show">\nA simple solid secondary alert with large shadow\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(174, "div", 2)(175, "div", 3)(176, "div", 4)(177, "div", 5);
        \u0275\u0275text(178, " Default Alerts With Different Shadows ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 6)(180, "button", 7);
        \u0275\u0275text(181, "Show Code");
        \u0275\u0275element(182, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(183, "div", 9)(184, "div", 28);
        \u0275\u0275text(185, "A simple primary alert with small shadow\u2014check it out!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 29);
        \u0275\u0275text(187, "A simple primary alert with normal shadow\u2014check it out!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 30);
        \u0275\u0275text(189, "A simple primary alert with large shadow\u2014check it out!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 31);
        \u0275\u0275text(191, "A simple secondary alert with small shadow\u2014check it out!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 32);
        \u0275\u0275text(193, "A simple secondary alert with normal shadow\u2014check it out!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 33);
        \u0275\u0275text(195, "A simple secondary alert with large shadow\u2014check it out!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div", 13)(197, "pre", 14)(198, "code", 14);
        \u0275\u0275text(199, '<div class="alert alert-primary shadow-sm">A simple primary alert with small shadow\u2014check it out!</div>\n\n<div class="alert alert-primary shadow">A simple primary alert with normal shadow\u2014check it out!</div>\n\n<div class="alert alert-primary shadow-lg">A simple primary alert with large shadow\u2014check it out!</div>\n\n<div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow\u2014check it out!</div>\n\n<div class="alert alert-secondary shadow">A simple secondary alert with normal shadow\u2014check it out!</div>\n\n<div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow\u2014check it out!</div> ');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(200, "div", 2)(201, "div", 3)(202, "div", 4)(203, "div", 5);
        \u0275\u0275text(204, " Rounded Solid Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "div", 6)(206, "button", 7);
        \u0275\u0275text(207, "Show Code");
        \u0275\u0275element(208, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(209, "div", 9);
        \u0275\u0275repeaterCreate(210, AlertsComponent_For_211_Template, 4, 4, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "div", 13)(213, "pre", 14)(214, "code", 14);
        \u0275\u0275text(215, '<div class="alert alert-solid-primary rounded-pill alert-dismissible fade show">\nA simple solid rounded primary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-secondary rounded-pill alert-dismissible fade show">\nA simple solid rounded secondary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-warning rounded-pill alert-dismissible fade show">\nA simple solid rounded warning alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-solid-danger rounded-pill alert-dismissible fade show">\nA simple solid rounded danger alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(216, "div", 2)(217, "div", 3)(218, "div", 4)(219, "div", 5);
        \u0275\u0275text(220, " Rounded Outline Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "div", 6)(222, "button", 7);
        \u0275\u0275text(223, "Show Code");
        \u0275\u0275element(224, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "div", 9);
        \u0275\u0275repeaterCreate(226, AlertsComponent_For_227_Template, 4, 4, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "div", 13)(229, "pre", 14)(230, "code", 14);
        \u0275\u0275text(231, '<div class="alert alert-outline-primary rounded-pill alert-dismissible fade show">\nA simple outline rounded primary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-outline-secondary rounded-pill alert-dismissible fade show">\nA simple outline rounded secondary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-outline-warning rounded-pill alert-dismissible fade show">\nA simple outline rounded warning alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-outline-danger rounded-pill alert-dismissible fade show">\nA simple outline rounded danger alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(232, "div", 2)(233, "div", 3)(234, "div", 4)(235, "div", 5);
        \u0275\u0275text(236, " Rounded Default Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "div", 6)(238, "button", 7);
        \u0275\u0275text(239, "Show Code");
        \u0275\u0275element(240, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(241, "div", 9);
        \u0275\u0275repeaterCreate(242, AlertsComponent_For_243_Template, 4, 4, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "div", 13)(245, "pre", 14)(246, "code", 14);
        \u0275\u0275text(247, '<div class="alert alert-primary rounded-pill alert-dismissible fade show">\nA simple rounded primary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-secondary rounded-pill alert-dismissible fade show">\nA simple rounded secondary alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-warning rounded-pill alert-dismissible fade show">\nA simple rounded warning alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-danger rounded-pill alert-dismissible fade show">\nA simple rounded danger alert\u2014check it out!\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(248, "div", 2)(249, "div", 3)(250, "div", 4)(251, "div", 5);
        \u0275\u0275text(252, " Rounded Alerts With Custom Close Button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "div", 6)(254, "button", 7);
        \u0275\u0275text(255, "Show Code");
        \u0275\u0275element(256, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(257, "div", 9);
        \u0275\u0275repeaterCreate(258, AlertsComponent_For_259_Template, 4, 4, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(260, "div", 13)(261, "pre", 14)(262, "code", 14);
        \u0275\u0275text(263, '<div class="alert alert-primary rounded-pill alert-dismissible fade show">\nA simple rounded primary alert\u2014check it out!\n<button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-secondary rounded-pill alert-dismissible fade show">\nA simple rounded secondary alert\u2014check it out!\n<button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-warning rounded-pill alert-dismissible fade show">\nA simple rounded warning alert\u2014check it out!\n<button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-danger rounded-pill alert-dismissible fade show">\nA simple rounded danger alert\u2014check it out!\n<button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(264, "div", 2)(265, "div", 3)(266, "div", 4)(267, "div", 5);
        \u0275\u0275text(268, " Alerts with icons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "div", 6)(270, "button", 7);
        \u0275\u0275text(271, "Show Code");
        \u0275\u0275element(272, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(273, "div", 9)(274, "div", 34);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(275, "svg", 35);
        \u0275\u0275element(276, "path", 36)(277, "path", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(278, "div");
        \u0275\u0275text(279, " An example alert with an icon ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "div", 38);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(281, "svg", 39);
        \u0275\u0275element(282, "path", 40)(283, "path", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(284, "div");
        \u0275\u0275text(285, " An example success alert with an icon ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(286, "div", 42);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(287, "svg", 43)(288, "g");
        \u0275\u0275element(289, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "g")(291, "g")(292, "g");
        \u0275\u0275element(293, "path", 45)(294, "polygon", 46)(295, "polygon", 47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(296, "div");
        \u0275\u0275text(297, " An example warning alert with an icon ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(298, "div", 48);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(299, "svg", 49)(300, "g");
        \u0275\u0275element(301, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(302, "g")(303, "g")(304, "g");
        \u0275\u0275element(305, "path", 50)(306, "rect", 51)(307, "rect", 52);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(308, "div");
        \u0275\u0275text(309, " An example danger alert with an icon ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(310, "div", 13)(311, "pre", 14)(312, "code", 14);
        \u0275\u0275text(313, '<div class="alert alert-primary d-flex align-items-center" role="alert">\n<svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>\n<div>\nAn example alert with an icon\n</div>\n</div>\n\n<div class="alert alert-success d-flex align-items-center" role="alert">\n<svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>\n<div>\nAn example success alert with an icon\n</div>\n</div>\n\n<div class="alert alert-warning d-flex align-items-center" role="alert">\n<svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"/><polygon points="13,16 11,16 11,18 13,18"/><polygon points="13,10 11,10 11,15 13,15"/></g></g></g></svg>\n<div>\nAn example warning alert with an icon\n</div>\n</div>\n\n<div class="alert alert-danger d-flex align-items-center" role="alert">\n<svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"/><rect height="6" width="2" x="11" y="7"/><rect height="2" width="2" x="11" y="15"/></g></g></g></svg>\n<div>\nAn example danger alert with an icon\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(314, "div", 2)(315, "div", 3)(316, "div", 4)(317, "div", 5);
        \u0275\u0275text(318, " Customized Alerts With SVG's ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(319, "div", 6)(320, "button", 7);
        \u0275\u0275text(321, "Show Code");
        \u0275\u0275element(322, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(323, "div", 9);
        \u0275\u0275repeaterCreate(324, AlertsComponent_For_325_Template, 5, 5, "div", 53, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(326, "div", 13)(327, "pre", 14)(328, "code", 14);
        \u0275\u0275text(329, '<div class="alert alert-primary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">\n<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>\nA customized primary alert with an icon\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">\n<svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>\nA customized secondary alert with an icon\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">\n<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>\nA customized warning alert with an icon\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-danger alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">\n<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>\nA customized danger alert with an icon\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(330, "div", 2)(331, "div", 3)(332, "div", 4)(333, "div", 5);
        \u0275\u0275text(334, " Alerts With Images ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "div", 6)(336, "button", 7);
        \u0275\u0275text(337, "Show Code");
        \u0275\u0275element(338, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(339, "div", 9);
        \u0275\u0275repeaterCreate(340, AlertsComponent_For_341_Template, 6, 3, "ngb-alert", 54, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(342, "div", 13)(343, "pre", 14)(344, "code", 14);
        \u0275\u0275text(345, '<div class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/3.jpg" alt="img">\n</div>\n<div>A simple primary alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/5.jpg" alt="img">\n</div>\n<div>A simple secondary alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/8.jpg" alt="img">\n</div>\n<div>A simple warning alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/11.jpg" alt="img">\n</div>\n<div>A simple danger alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/13.jpg" alt="img">\n</div>\n<div>A simple info alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/10.jpg" alt="img">\n</div>\n<div>A simple light alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3 avatar-rounded">\n<img src="./assets/images/faces/15.jpg" alt="img">\n</div>\n<div>A simple dark alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x text-muted"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(346, "div", 2)(347, "div", 3)(348, "div", 4)(349, "div", 5);
        \u0275\u0275text(350, " Alerts With Different size Images ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "div", 6)(352, "button", 7);
        \u0275\u0275text(353, "Show Code");
        \u0275\u0275element(354, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(355, "div", 9);
        \u0275\u0275repeaterCreate(356, AlertsComponent_For_357_Template, 6, 5, "ngb-alert", 54, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(358, "div", 13)(359, "pre", 14)(360, "code", 14);
        \u0275\u0275text(361, '<div class="alert alert-img alert-primary alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar avatar-xs me-3">\n<img src="./assets/images/faces/3.jpg" alt="img">\n</div>\n<div>A simple primary alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar avatar-sm me-3">\n<img src="./assets/images/faces/5.jpg" alt="img">\n</div>\n<div>A simple secondary alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-warning alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar me-3">\n<img src="./assets/images/faces/8.jpg" alt="img">\n</div>\n<div>A simple warning alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-danger alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar avatar-md me-3">\n<img src="./assets/images/faces/11.jpg" alt="img">\n</div>\n<div>A simple danger alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-info alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar avatar-lg me-3">\n<img src="./assets/images/faces/13.jpg" alt="img">\n</div>\n<div>A simple info alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n\n<div class="alert alert-img alert-dark alert-dismissible fase show flex-wrap" role="alert">\n<div class="avatar avatar-xl me-3">\n<img src="./assets/images/faces/14.jpg" alt="img">\n</div>\n<div>A simple info alert with image\u2014check it out!</div>\n<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x text-muted"></i></button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(362, "div", 55)(363, "div", 1)(364, "div", 56);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_364_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosedA, $event) || (ctx.isClosedA = $event);
          return $event;
        });
        \u0275\u0275elementStart(365, "div", 57)(366, "div", 58)(367, "button", 59);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_367_listener() {
          return ctx.Closetoggle("A");
        });
        \u0275\u0275element(368, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(370, "svg", 61);
        \u0275\u0275element(371, "path", 62)(372, "path", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(373, "h5");
        \u0275\u0275text(374, "Information?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(375, "p", 64);
        \u0275\u0275text(376, "This alert is created to just show the related information.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "div", 64)(378, "button", 65);
        \u0275\u0275text(379, "Decline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(380, "button", 66);
        \u0275\u0275text(381, "Accept");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(382, "div", 56);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_382_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosedB, $event) || (ctx.isClosedB = $event);
          return $event;
        });
        \u0275\u0275elementStart(383, "div", 57)(384, "div", 67)(385, "button", 59);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_385_listener() {
          return ctx.Closetoggle("B");
        });
        \u0275\u0275element(386, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(387, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(388, "svg", 68);
        \u0275\u0275element(389, "path", 62)(390, "path", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(391, "h5");
        \u0275\u0275text(392, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "p", 64);
        \u0275\u0275text(394, "This alert is created to just show the confirmation message.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "div", 64)(396, "button", 70);
        \u0275\u0275text(397, "Close");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(398, "div", 56);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_398_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosedC, $event) || (ctx.isClosedC = $event);
          return $event;
        });
        \u0275\u0275elementStart(399, "div", 57)(400, "div", 71)(401, "button", 59);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_401_listener() {
          return ctx.Closetoggle("C");
        });
        \u0275\u0275element(402, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(403, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(404, "svg", 72);
        \u0275\u0275element(405, "path", 62)(406, "path", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(407, "h5");
        \u0275\u0275text(408, "Warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "p", 64);
        \u0275\u0275text(410, "This alert is created to just show the warning message.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "div", 64)(412, "button", 74);
        \u0275\u0275text(413, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(414, "button", 75);
        \u0275\u0275text(415, "Continue");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(416, "div", 56);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_416_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosedD, $event) || (ctx.isClosedD = $event);
          return $event;
        });
        \u0275\u0275elementStart(417, "div", 57)(418, "div", 76)(419, "button", 59);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_419_listener() {
          return ctx.Closetoggle("D");
        });
        \u0275\u0275element(420, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(422, "svg", 77);
        \u0275\u0275element(423, "path", 62)(424, "path", 78);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(425, "h5");
        \u0275\u0275text(426, "danger");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "p", 64);
        \u0275\u0275text(428, "This alert is created to just show the danger message.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(429, "div", 64)(430, "button", 79);
        \u0275\u0275text(431, "Delete");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(432, "div", 55)(433, "div", 1)(434, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_434_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed1, $event) || (ctx.isClosed1 = $event);
          return $event;
        });
        \u0275\u0275elementStart(435, "div", 81)(436, "div", 82)(437, "div", 83)(438, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(439, "svg", 85);
        \u0275\u0275element(440, "path", 36)(441, "path", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(442, "div", 86)(443, "div", 87);
        \u0275\u0275text(444, "Information Alert");
        \u0275\u0275elementStart(445, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_445_listener() {
          return ctx.Closetoggle("close1");
        });
        \u0275\u0275element(446, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(447, "div", 89);
        \u0275\u0275text(448, "Information alert to show to information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(449, "div", 90)(450, "a", 91);
        \u0275\u0275text(451, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(452, "a", 92);
        \u0275\u0275text(453, "open");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(454, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_454_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed2, $event) || (ctx.isClosed2 = $event);
          return $event;
        });
        \u0275\u0275elementStart(455, "div", 81)(456, "div", 93)(457, "div", 83)(458, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(459, "svg", 94);
        \u0275\u0275element(460, "path", 40)(461, "path", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(462, "div", 95)(463, "div", 87);
        \u0275\u0275text(464, "Success Alert");
        \u0275\u0275elementStart(465, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_465_listener() {
          return ctx.Closetoggle("close2");
        });
        \u0275\u0275element(466, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(467, "div", 89);
        \u0275\u0275text(468, "Success alert to show to success message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "div", 90)(470, "a", 96);
        \u0275\u0275text(471, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(472, "a", 97);
        \u0275\u0275text(473, "open");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(474, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_474_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed3, $event) || (ctx.isClosed3 = $event);
          return $event;
        });
        \u0275\u0275elementStart(475, "div", 81)(476, "div", 98)(477, "div", 83)(478, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(479, "svg", 99)(480, "g");
        \u0275\u0275element(481, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(482, "g")(483, "g")(484, "g");
        \u0275\u0275element(485, "path", 45)(486, "polygon", 46)(487, "polygon", 47);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(488, "div", 100)(489, "div", 87);
        \u0275\u0275text(490, "Warning Alert");
        \u0275\u0275elementStart(491, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_491_listener() {
          return ctx.Closetoggle("close3");
        });
        \u0275\u0275element(492, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(493, "div", 89);
        \u0275\u0275text(494, "Warning alert to show warning message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(495, "div", 90)(496, "a", 101);
        \u0275\u0275text(497, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(498, "a", 102);
        \u0275\u0275text(499, "open");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(500, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_500_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed4, $event) || (ctx.isClosed4 = $event);
          return $event;
        });
        \u0275\u0275elementStart(501, "div", 81)(502, "div", 103)(503, "div", 83)(504, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(505, "svg", 104)(506, "g");
        \u0275\u0275element(507, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(508, "g")(509, "g")(510, "g");
        \u0275\u0275element(511, "path", 50)(512, "rect", 51)(513, "rect", 52);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(514, "div", 105)(515, "div", 87);
        \u0275\u0275text(516, "Danger Alert");
        \u0275\u0275elementStart(517, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_517_listener() {
          return ctx.Closetoggle("close4");
        });
        \u0275\u0275element(518, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(519, "div", 89);
        \u0275\u0275text(520, "Danger alert to show the danger message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(521, "div", 90)(522, "a", 106);
        \u0275\u0275text(523, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "a", 107);
        \u0275\u0275text(525, "open");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(526, "div", 55)(527, "div", 1)(528, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_528_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed5, $event) || (ctx.isClosed5 = $event);
          return $event;
        });
        \u0275\u0275elementStart(529, "div", 81)(530, "div", 108)(531, "div", 83)(532, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(533, "svg", 109);
        \u0275\u0275element(534, "path", 36)(535, "path", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(536, "div", 110)(537, "div", 87);
        \u0275\u0275text(538, "Information Alert");
        \u0275\u0275elementStart(539, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_539_listener() {
          return ctx.Closetoggle("close5");
        });
        \u0275\u0275element(540, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(541, "div", 89);
        \u0275\u0275text(542, "Information alert to show to information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(543, "div", 90)(544, "a", 111);
        \u0275\u0275text(545, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(546, "a", 112);
        \u0275\u0275text(547, "open");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(548, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_548_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed6, $event) || (ctx.isClosed6 = $event);
          return $event;
        });
        \u0275\u0275elementStart(549, "div", 81)(550, "div", 113)(551, "div", 83)(552, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(553, "svg", 109);
        \u0275\u0275element(554, "path", 40)(555, "path", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(556, "div", 110)(557, "div", 87);
        \u0275\u0275text(558, "Success Alert");
        \u0275\u0275elementStart(559, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_559_listener() {
          return ctx.Closetoggle("close6");
        });
        \u0275\u0275element(560, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(561, "div", 89);
        \u0275\u0275text(562, "Success alert to show to success message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(563, "div", 114)(564, "a", 115);
        \u0275\u0275text(565, "close");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(566, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_566_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed7, $event) || (ctx.isClosed7 = $event);
          return $event;
        });
        \u0275\u0275elementStart(567, "div", 81)(568, "div", 116)(569, "div", 83)(570, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(571, "svg", 117)(572, "g");
        \u0275\u0275element(573, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(574, "g")(575, "g")(576, "g");
        \u0275\u0275element(577, "path", 45)(578, "polygon", 46)(579, "polygon", 47);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(580, "div", 110)(581, "div", 87);
        \u0275\u0275text(582, "Warning Alert");
        \u0275\u0275elementStart(583, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_583_listener() {
          return ctx.Closetoggle("close7");
        });
        \u0275\u0275element(584, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(585, "div", 89);
        \u0275\u0275text(586, "Warning alert to show to warning message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(587, "div", 90)(588, "a", 111);
        \u0275\u0275text(589, "skip");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(590, "a", 112);
        \u0275\u0275text(591, "open");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(592, "div", 80);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_592_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed8, $event) || (ctx.isClosed8 = $event);
          return $event;
        });
        \u0275\u0275elementStart(593, "div", 81)(594, "div", 118)(595, "div", 83)(596, "div", 84);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(597, "svg", 117)(598, "g");
        \u0275\u0275element(599, "rect", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(600, "g")(601, "g")(602, "g");
        \u0275\u0275element(603, "path", 50)(604, "rect", 51)(605, "rect", 52);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(606, "div", 110)(607, "div", 87);
        \u0275\u0275text(608, "Danger Alert");
        \u0275\u0275elementStart(609, "button", 88);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_609_listener() {
          return ctx.Closetoggle("close8");
        });
        \u0275\u0275element(610, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(611, "div", 89);
        \u0275\u0275text(612, "Danger alert to show to danger message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(613, "div", 90)(614, "a", 111);
        \u0275\u0275text(615, "close");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(616, "a", 112);
        \u0275\u0275text(617, "continue");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(618, "div", 55)(619, "div", 3)(620, "div", 4)(621, "div", 5);
        \u0275\u0275text(622, " Additional content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(623, "div", 6)(624, "button", 7);
        \u0275\u0275text(625, "Show Code");
        \u0275\u0275element(626, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(627, "div", 9)(628, "div", 119)(629, "div", 120);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_629_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed10, $event) || (ctx.isClosed10 = $event);
          return $event;
        });
        \u0275\u0275elementStart(630, "div", 121)(631, "div", 122)(632, "h6", 123);
        \u0275\u0275text(633, "Thank you for reporting this.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(634, "button", 124);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_634_listener() {
          return ctx.Closetoggle("close10");
        });
        \u0275\u0275element(635, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(636, "hr", 125);
        \u0275\u0275elementStart(637, "div", 126)(638, "p", 127);
        \u0275\u0275text(639, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
        \u0275\u0275elementStart(640, "a", 128);
        \u0275\u0275text(641, "Visit for support for queries ?");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(642, "div", 120);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_642_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed11, $event) || (ctx.isClosed11 = $event);
          return $event;
        });
        \u0275\u0275elementStart(643, "div", 129)(644, "div", 130)(645, "h6", 123);
        \u0275\u0275text(646, "Thank you for reporting this.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(647, "button", 124);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_647_listener() {
          return ctx.Closetoggle("close11");
        });
        \u0275\u0275element(648, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(649, "hr", 125);
        \u0275\u0275elementStart(650, "div", 126)(651, "p", 127);
        \u0275\u0275text(652, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
        \u0275\u0275elementStart(653, "a", 128);
        \u0275\u0275text(654, "Visit for support for queries ?");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(655, "div", 120);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_655_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed12, $event) || (ctx.isClosed12 = $event);
          return $event;
        });
        \u0275\u0275elementStart(656, "div", 131)(657, "div", 132)(658, "h6", 123);
        \u0275\u0275text(659, "Thank you for reporting this.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(660, "button", 124);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_660_listener() {
          return ctx.Closetoggle("close12");
        });
        \u0275\u0275element(661, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(662, "hr", 125);
        \u0275\u0275elementStart(663, "div", 126)(664, "p", 127);
        \u0275\u0275text(665, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
        \u0275\u0275elementStart(666, "a", 128);
        \u0275\u0275text(667, "Visit for support for queries ?");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(668, "div", 120);
        \u0275\u0275twoWayListener("ngbCollapseChange", function AlertsComponent_Template_div_ngbCollapseChange_668_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isClosed9, $event) || (ctx.isClosed9 = $event);
          return $event;
        });
        \u0275\u0275elementStart(669, "div", 133)(670, "div", 134)(671, "h6", 123);
        \u0275\u0275text(672, "Thank you for reporting this.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(673, "button", 124);
        \u0275\u0275listener("click", function AlertsComponent_Template_button_click_673_listener() {
          return ctx.Closetoggle("close9");
        });
        \u0275\u0275element(674, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(675, "hr", 125);
        \u0275\u0275elementStart(676, "div", 126)(677, "p", 127);
        \u0275\u0275text(678, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
        \u0275\u0275elementStart(679, "a", 128);
        \u0275\u0275text(680, "Visit for support for queries ?");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(681, "div", 13)(682, "pre", 14)(683, "code", 14);
        \u0275\u0275text(684, '<div class="col-xl-6">\n<div class="alert alert-primary overflow-hidden p-0" role="alert">\n<div class="p-3 bg-primary text-fixed-white d-flex justify-content-between">\n<h6 class="aletr-heading mb-0">Thank you for reporting this.</h6>\n<button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n<hr class="my-0">\n<div class="p-3">\n<p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries ?</a></p>\n</div>\n</div>\n</div>\n\n<div class="col-xl-6">\n<div class="alert alert-secondary overflow-hidden p-0" role="alert">\n<div class="p-3 bg-secondary text-fixed-white d-flex justify-content-between">\n<h6 class="aletr-heading mb-0">Thank you for reporting this.</h6>\n<button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n<hr class="my-0">\n<div class="p-3">\n<p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries ?</a></p>\n</div>\n</div>\n</div>\n\n<div class="col-xl-6">\n<div class="alert alert-success overflow-hidden p-0" role="alert">\n<div class="p-3 bg-success text-fixed-white d-flex justify-content-between">\n<h6 class="aletr-heading mb-0">Thank you for reporting this.</h6>\n<button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n<hr class="my-0">\n<div class="p-3">\n<p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries ?</a></p>\n</div>\n</div>\n</div>\n\n<div class="col-xl-6">\n<div class="alert alert-warning overflow-hidden p-0" role="alert">\n<div class="p-3 bg-warning text-fixed-white d-flex justify-content-between">\n<h6 class="aletr-heading mb-0">Thank you for reporting this.</h6>\n<button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>\n</div>\n<hr class="my-0">\n<div class="p-3">\n<p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries ?</a></p>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("dismissible", true);
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.livealerts);
        \u0275\u0275advance(103);
        \u0275\u0275repeater(ctx.solidAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.outlineAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.solidShadowsAlerts);
        \u0275\u0275advance(42);
        \u0275\u0275repeater(ctx.solidroundedAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.roundedoutlineAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.roundeDefaultAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.CustomeButtonAlerts);
        \u0275\u0275advance(66);
        \u0275\u0275repeater(ctx.CustomizedButtonAlerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.imagesalerts);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.sizeimgssalerts);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosedA);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosedA);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosedB);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosedB);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosedC);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosedC);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosedD);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosedD);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed1);
        \u0275\u0275advance(11);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed1);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed2);
        \u0275\u0275advance(11);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed2);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed3);
        \u0275\u0275advance(17);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed3);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed4);
        \u0275\u0275advance(17);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed4);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed5);
        \u0275\u0275advance(11);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed5);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed6);
        \u0275\u0275advance(11);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed6);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed7);
        \u0275\u0275advance(17);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed7);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed8);
        \u0275\u0275advance(17);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed8);
        \u0275\u0275advance(20);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed10);
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed10);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed11);
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed11);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed12);
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed12);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isClosed9);
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-expanded", !ctx.isClosed9);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule, NgbAlert, NgbCollapse, CommonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertsComponent, { className: "AlertsComponent", filePath: "src\\app\\components\\uielements\\alerts\\alerts.component.ts", lineNumber: 279 });
})();
export {
  AlertsComponent
};
//# sourceMappingURL=alerts.component-QLRJLADG.js.map
