import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate2,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/form-elements/checksradios/checksradios.component.ts
function ChecksradiosComponent_div_613_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 236);
    \u0275\u0275listener("click", function ChecksradiosComponent_div_613_Template_div_click_1_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickEvent(i_r2));
    });
    \u0275\u0275element(2, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toggle_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", toggle_r4.class + (ctx_r2.statuses[i_r2] ? " on" : ""));
  }
}
function ChecksradiosComponent_For_693_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 221)(1, "div")(2, "p", 224);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 237);
    \u0275\u0275listener("click", function ChecksradiosComponent_For_693_Template_div_click_6_listener() {
      const toggle_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickEvent1(toggle_r6));
    });
    \u0275\u0275element(7, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toggle_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", toggle_r6.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toggle_r6.code);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("toggle mb-0 ", toggle_r6.code, " ", toggle_r6.bg, "");
    \u0275\u0275property("ngClass", toggle_r6.status ? "on" : "");
  }
}
var ChecksradiosComponent = class _ChecksradiosComponent {
  constructor() {
    this.toggles = [
      { class: "toggle radio-first" },
      { class: "toggle toggle-secondary" },
      { class: "toggle toggle-warning" },
      { class: "toggle toggle-info" },
      { class: "toggle toggle-success" },
      { class: "toggle toggle-danger" },
      { class: "toggle toggle-light" },
      { class: "toggle toggle-dark" }
      // Add more toggles as needed
    ];
    this.statuses = Array(this.toggles.length).fill(true);
    this.toggleSwitches = [
      { label: "Small size toggle switch", code: "toggle-sm", status: true },
      { label: "Default toggle switch", code: "toggle-md", status: true, bg: "toggle-secondary " },
      { label: "Large size toggle switch", code: "toggle-lg", status: true, bg: "toggle-success" }
      // Add more toggle switches as needed
    ];
  }
  clickEvent(index) {
    document.querySelector(`.${this.toggles[index].class}`)?.classList.toggle("on");
    this.statuses[index] = !this.statuses[index];
  }
  clickEvent1(toggle) {
    const toggleClass = toggle.code ? `toggle ${toggle.code}` : "toggle";
    document.querySelector(`.${toggleClass}`)?.classList.toggle("on");
    toggle.status = !toggle.status;
  }
  static {
    this.\u0275fac = function ChecksradiosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChecksradiosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChecksradiosComponent, selectors: [["app-checksradios"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 737, vars: 1, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Checks & Radios", "activeTitle", "Checks & Radios"], [1, "row"], [1, "col-xxl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light", "text-nowrap"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["type", "checkbox", "value", "", "id", "flexCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexCheckDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexCheckCheckedDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexRadioDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck2", "disabled", "", 1, "form-check-input"], ["for", "defaultCheck2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], [1, "col-xxl-4", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card-body", "d-sm-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "value", "", "id", "checkebox-sm", "checked", "", 1, "form-check-input"], ["for", "checkebox-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-md", "checked", "", 1, "form-check-input"], ["for", "checkebox-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-lg", "checked", "", 1, "form-check-input"], ["for", "checkebox-lg", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm", 1, "form-check-input"], ["for", "Radio-sm", 1, "form-check-label"], [1, "form-check", "form-check-md"], ["type", "radio", "name", "Radio", "id", "Radio-md", 1, "form-check-input"], ["for", "Radio-md", 1, "form-check-label"], [1, "form-check", "form-check-lg"], ["type", "radio", "name", "Radio", "id", "Radio-lg", "checked", "", 1, "form-check-input"], ["for", "Radio-lg", 1, "form-check-label"], [1, "card-body", "d-sm-flex", "align-item-center", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "switch-sm", 1, "form-check-input"], ["for", "switch-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input"], ["for", "switch-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-lg", 1, "form-check-input"], ["for", "switch-lg", 1, "form-check-label"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "inlineRadio3", 1, "form-check-label"], [1, "me-3"], ["type", "checkbox", "id", "checkboxNoLabel", "value", "", "aria-label", "...", 1, "form-check-input"], ["type", "radio", "name", "radioNoLabel", "id", "radioNoLabel1", "value", "", "aria-label", "...", 1, "form-check-input"], [1, "col-xxl-3", "col-lg-12", "col-md-12", "col-sm-12"], [1, "form-check", "form-check-reverse", "mb-3"], ["type", "checkbox", "value", "", "id", "reverseCheck1", 1, "form-check-input"], ["for", "reverseCheck1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "reverseCheck2", "disabled", "", 1, "form-check-input"], ["for", "reverseCheck2", 1, "form-check-label"], [1, "form-check", "form-switch", "form-check-reverse"], ["type", "checkbox", "id", "flexSwitchCheckReverse", 1, "form-check-input"], ["for", "flexSwitchCheckReverse", 1, "form-check-label"], ["type", "checkbox", "id", "btn-check-outlined", 1, "btn-check"], ["for", "btn-check-outlined", 1, "btn", "btn-outline-primary", "mb-3"], ["type", "checkbox", "id", "btn-check-2-outlined", "checked", "", 1, "btn-check"], ["for", "btn-check-2-outlined", 1, "btn", "btn-outline-secondary", "mb-3"], ["type", "radio", "name", "options-outlined", "id", "success-outlined", "checked", "", 1, "btn-check"], ["for", "success-outlined", 1, "btn", "btn-outline-success", "m-1"], ["type", "radio", "name", "options-outlined", "id", "danger-outlined", 1, "btn-check"], ["for", "danger-outlined", 1, "btn", "btn-outline-danger", "m-1"], ["type", "radio", "name", "options", "id", "option1", "checked", "", 1, "btn-check"], ["for", "option1", 1, "btn", "btn-primary", "m-1"], ["type", "radio", "name", "options", "id", "option2", 1, "btn-check"], ["for", "option2", 1, "btn", "btn-primary", "m-1"], ["type", "radio", "name", "options", "id", "option3", "disabled", "", 1, "btn-check"], ["for", "option3", 1, "btn", "btn-primary", "m-1"], ["type", "radio", "name", "options", "id", "option4", 1, "btn-check"], ["for", "option4", 1, "btn", "btn-primary", "m-1"], ["type", "checkbox", "id", "btn-check", 1, "btn-check"], ["for", "btn-check", 1, "btn", "btn-primary", "m-1"], ["type", "checkbox", "id", "btn-check-2", "checked", "", 1, "btn-check"], ["for", "btn-check-2", 1, "btn", "btn-primary", "m-1"], ["type", "checkbox", "id", "btn-check-3", "disabled", "", 1, "btn-check"], ["for", "btn-check-3", 1, "btn", "btn-primary", "m-1"], [1, "col", "col-md-6", "col-lg-6", "col-xl-4"], [1, "form-check", "mb-2"], ["type", "checkbox", "value", "", "id", "primaryChecked", "checked", "", 1, "form-check-input"], ["for", "primaryChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "secondaryChecked", "checked", "", 1, "form-check-input", "form-checked-secondary"], ["for", "secondaryChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "warningChecked", "checked", "", 1, "form-check-input", "form-checked-warning"], ["for", "warningChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "infoChecked", "checked", "", 1, "form-check-input", "form-checked-info"], ["for", "infoChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "successChecked", "checked", "", 1, "form-check-input", "form-checked-success"], ["for", "successChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "dangerChecked", "checked", "", 1, "form-check-input", "form-checked-danger"], ["for", "dangerChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "darkChecked", "checked", "", 1, "form-check-input", "form-checked-dark"], ["for", "darkChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "primaryoutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline"], ["for", "primaryoutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "secondaryoutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-secondary"], ["for", "secondaryoutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "warningoutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-warning"], ["for", "warningoutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "infooutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-info"], ["for", "infooutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "successoutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-success"], ["for", "successoutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "dangeroutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-danger"], ["for", "dangeroutlineChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "darkoutlineChecked", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-dark"], ["for", "darkoutlineChecked", 1, "form-check-label"], ["type", "radio", "name", "primaryRadio", "id", "primaryRadio", "checked", "", 1, "form-check-input"], ["for", "primaryRadio", 1, "form-check-label"], ["type", "radio", "name", "secondaryRadio", "id", "secondaryRadio", "checked", "", 1, "form-check-input", "form-checked-secondary"], ["for", "secondaryRadio", 1, "form-check-label"], ["type", "radio", "name", "warningRadio", "id", "warningRadio", "checked", "", 1, "form-check-input", "form-checked-warning"], ["for", "warningRadio", 1, "form-check-label"], ["type", "radio", "name", "InfoRadio", "id", "InfoRadio", "checked", "", 1, "form-check-input", "form-checked-info"], ["for", "InfoRadio", 1, "form-check-label"], ["type", "radio", "name", "successRadio", "id", "successRadio", "checked", "", 1, "form-check-input", "form-checked-success"], ["for", "successRadio", 1, "form-check-label"], ["type", "radio", "name", "dangerRadio", "id", "dangerRadio", "checked", "", 1, "form-check-input", "form-checked-danger"], ["for", "dangerRadio", 1, "form-check-label"], ["type", "radio", "name", "darkRadio", "id", "darkRadio", "checked", "", 1, "form-check-input", "form-checked-dark"], ["for", "darkRadio", 1, "form-check-label"], [1, "col", "col-md-6", "col-lg-6"], ["type", "radio", "name", "primaryoutlineRadio", "id", "primaryoutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline"], ["for", "primaryoutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "secondaryoutlineRadio", "id", "secondaryoutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-secondary"], ["for", "secondaryoutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "warningoutlineRadio", "id", "warningoutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-warning"], ["for", "warningoutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "InfooutlineRadio", "id", "InfooutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-info"], ["for", "InfooutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "successoutlineRadio", "id", "successoutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-success"], ["for", "successoutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "dangeroutlineRadio", "id", "dangeroutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-danger"], ["for", "dangeroutlineRadio", 1, "form-check-label"], ["type", "radio", "name", "darkoutlineRadio", "id", "darkoutlineRadio", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-dark"], ["for", "darkoutlineRadio", 1, "form-check-label"], [1, "form-check", "form-switch", "mb-2"], ["type", "checkbox", "role", "switch", "id", "switch-primary", "checked", "", 1, "form-check-input"], ["for", "switch-primary", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-secondary", "checked", "", 1, "form-check-input", "form-checked-secondary"], ["for", "switch-secondary", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-warning", "checked", "", 1, "form-check-input", "form-checked-warning"], ["for", "switch-warning", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-info", "checked", "", 1, "form-check-input", "form-checked-info"], ["for", "switch-info", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-success", "checked", "", 1, "form-check-input", "form-checked-success"], ["for", "switch-success", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-danger", "checked", "", 1, "form-check-input", "form-checked-danger"], ["for", "switch-danger", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-dark", "checked", "", 1, "form-check-input", "form-checked-dark"], ["for", "switch-dark", 1, "form-check-label"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12"], [1, "row", "gy-1"], ["class", "col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-xl-4"], [1, "custom-toggle-switch", "d-flex", "align-items-center", "mb-4"], ["id", "toggleswitchPrimary", "name", "toggleswitchPrimary", "type", "checkbox", "checked", ""], ["for", "toggleswitchPrimary", 1, "label-primary"], [1, "ms-3"], ["id", "toggleswitchSecondary", "name", "toggleswitchSecondary", "type", "checkbox", "checked", ""], ["for", "toggleswitchSecondary", 1, "label-secondary"], ["id", "toggleswitchWarning", "name", "toggleswitchWarning", "type", "checkbox", "checked", ""], ["for", "toggleswitchWarning", 1, "label-warning"], ["id", "toggleswitchInfo", "name", "toggleswitchInfo", "type", "checkbox", "checked", ""], ["for", "toggleswitchInfo", 1, "label-info"], ["id", "toggleswitchSuccess", "name", "toggleswitchSuccess", "type", "checkbox", "checked", ""], ["for", "toggleswitchSuccess", 1, "label-success"], ["id", "toggleswitchDanger", "name", "toggleswitchDanger", "type", "checkbox", "checked", ""], ["for", "toggleswitchDanger", 1, "label-danger"], ["id", "toggleswitchLight", "name", "toggleswitchLight", "type", "checkbox", "checked", ""], ["for", "toggleswitchLight", 1, "label-light"], ["id", "toggleswitchDark", "name", "toggleswitchDark", "type", "checkbox", "checked", ""], ["for", "toggleswitchDark", 1, "label-dark"], [1, "card-body", "pb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "mb-4"], [1, ""], [1, "text-muted", "m-0"], [1, "custom-toggle-switch", "toggle-sm", "ms-2"], ["id", "size-sm", "name", "toggleswitchsize", "type", "checkbox", "checked", ""], ["for", "size-sm", 1, "label-primary"], [1, "custom-toggle-switch", "ms-2"], ["id", "size-default", "name", "size-default", "type", "checkbox", "checked", ""], ["for", "size-default", 1, "label-secondary", "mb-1"], [1, "d-sm-flex", "d-block", "align-items-center", "flex-wrap"], [1, "mb-sm-0", "mb-2"], [1, "custom-toggle-switch", "toggle-lg", "ms-sm-2", "ms-0"], ["id", "size-lg", "name", "size-lg", "type", "checkbox", "checked", ""], ["for", "size-lg", 1, "label-success", "mb-2"], [1, "mb-3", 3, "click", "ngClass"], [3, "click", "ngClass"]], template: function ChecksradiosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Checks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "input", 11);
        \u0275\u0275elementStart(14, "label", 12);
        \u0275\u0275text(15, " Default checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275element(17, "input", 13);
        \u0275\u0275elementStart(18, "label", 14);
        \u0275\u0275text(19, " Checked checkbox ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 15)(21, "pre", 16)(22, "code", 16);
        \u0275\u0275text(23, '<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n<label class="form-check-label" for="flexCheckDefault">\nDefault checkbox\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"\nchecked>\n<label class="form-check-label" for="flexCheckChecked">\nChecked checkbox\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5);
        \u0275\u0275text(28, " Disabled ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 6)(30, "button", 7);
        \u0275\u0275text(31, "Show Code");
        \u0275\u0275element(32, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 9)(34, "div", 10);
        \u0275\u0275element(35, "input", 17);
        \u0275\u0275elementStart(36, "label", 18);
        \u0275\u0275text(37, " Disabled checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 10);
        \u0275\u0275element(39, "input", 19);
        \u0275\u0275elementStart(40, "label", 20);
        \u0275\u0275text(41, " Disabled checked checkbox ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 15)(43, "pre", 16)(44, "code", 16);
        \u0275\u0275text(45, '<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled"\ndisabled>\n<label class="form-check-label" for="flexCheckDisabled">\nDisabled checkbox\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="checkbox" value=""\nid="flexCheckCheckedDisabled" checked disabled>\n<label class="form-check-label" for="flexCheckCheckedDisabled">\nDisabled checked checkbox\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "div", 2)(47, "div", 3)(48, "div", 4)(49, "div", 5);
        \u0275\u0275text(50, " Radios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 6)(52, "button", 7);
        \u0275\u0275text(53, "Show Code");
        \u0275\u0275element(54, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 9)(56, "div", 10);
        \u0275\u0275element(57, "input", 21);
        \u0275\u0275elementStart(58, "label", 22);
        \u0275\u0275text(59, " Default radio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 10);
        \u0275\u0275element(61, "input", 23);
        \u0275\u0275elementStart(62, "label", 24);
        \u0275\u0275text(63, " Default checked radio ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 15)(65, "pre", 16)(66, "code", 16);
        \u0275\u0275text(67, '<div class="form-check">\n<input class="form-check-input" type="radio" name="flexRadioDefault"\nid="flexRadioDefault1">\n<label class="form-check-label" for="flexRadioDefault1">\nDefault radio\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="radio" name="flexRadioDefault"\nid="flexRadioDefault2" checked>\n<label class="form-check-label" for="flexRadioDefault2">\nDefault checked radio\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "div", 2)(69, "div", 3)(70, "div", 4)(71, "div", 5);
        \u0275\u0275text(72, " Disabled ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 6)(74, "button", 7);
        \u0275\u0275text(75, "Show Code");
        \u0275\u0275element(76, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 9)(78, "div", 10);
        \u0275\u0275element(79, "input", 25);
        \u0275\u0275elementStart(80, "label", 26);
        \u0275\u0275text(81, " Disabled radio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 10);
        \u0275\u0275element(83, "input", 27);
        \u0275\u0275elementStart(84, "label", 28);
        \u0275\u0275text(85, " Disabled checked radio ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 15)(87, "pre", 16)(88, "code", 16);
        \u0275\u0275text(89, '<div class="form-check">\n<input class="form-check-input" type="radio" name="flexRadioDisabled"\nid="flexRadioDisabled" disabled>\n<label class="form-check-label" for="flexRadioDisabled">\nDisabled radio\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="radio" name="flexRadioDisabled"\nid="flexRadioCheckedDisabled" checked disabled>\n<label class="form-check-label" for="flexRadioCheckedDisabled">\nDisabled checked radio\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(90, "div", 1)(91, "div", 29)(92, "div", 3)(93, "div", 4)(94, "div", 5);
        \u0275\u0275text(95, " Default (stacked) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 6)(97, "button", 7);
        \u0275\u0275text(98, "Show Code");
        \u0275\u0275element(99, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 9)(101, "div", 10);
        \u0275\u0275element(102, "input", 30);
        \u0275\u0275elementStart(103, "label", 31);
        \u0275\u0275text(104, " Default checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 10);
        \u0275\u0275element(106, "input", 32);
        \u0275\u0275elementStart(107, "label", 33);
        \u0275\u0275text(108, " Disabled checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 10);
        \u0275\u0275element(110, "input", 34);
        \u0275\u0275elementStart(111, "label", 35);
        \u0275\u0275text(112, " Default radio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 36);
        \u0275\u0275element(114, "input", 37);
        \u0275\u0275elementStart(115, "label", 38);
        \u0275\u0275text(116, " Disabled radio ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "div", 15)(118, "pre", 16)(119, "code", 16);
        \u0275\u0275text(120, '<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n<label class="form-check-label" for="defaultCheck1">\nDefault checkbox\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="defaultCheck2"\ndisabled>\n<label class="form-check-label" for="defaultCheck2">\nDisabled checkbox\n</label>\n</div>\n<div class="form-check">\n<input class="form-check-input" type="radio" name="exampleRadios"\nid="exampleRadios1" value="option1" checked>\n<label class="form-check-label" for="exampleRadios1">\nDefault radio\n</label>\n</div>\n<div class="form-check mb-0">\n<input class="form-check-input" type="radio" name="exampleRadios"\nid="exampleRadios3" value="option3" disabled>\n<label class="form-check-label" for="exampleRadios3">\nDisabled radio\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(121, "div", 29)(122, "div", 3)(123, "div", 4)(124, "div", 5);
        \u0275\u0275text(125, " Switches ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 6)(127, "button", 7);
        \u0275\u0275text(128, "Show Code");
        \u0275\u0275element(129, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div", 9)(131, "div", 39);
        \u0275\u0275element(132, "input", 40);
        \u0275\u0275elementStart(133, "label", 41);
        \u0275\u0275text(134, "Default switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 39);
        \u0275\u0275element(136, "input", 42);
        \u0275\u0275elementStart(137, "label", 43);
        \u0275\u0275text(138, "Checked switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 39);
        \u0275\u0275element(140, "input", 44);
        \u0275\u0275elementStart(141, "label", 45);
        \u0275\u0275text(142, "Disabled switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 46);
        \u0275\u0275element(144, "input", 47);
        \u0275\u0275elementStart(145, "label", 48);
        \u0275\u0275text(146, "Disabled checked switch checkbox input");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 15)(148, "pre", 16)(149, "code", 16);
        \u0275\u0275text(150, '<div class="form-check form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="flexSwitchCheckDefault">\n<label class="form-check-label" for="flexSwitchCheckDefault">Default switch\ncheckbox input</label>\n</div>\n<div class="form-check form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="flexSwitchCheckChecked" checked>\n<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch\ncheckbox input</label>\n</div>\n<div class="form-check form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="flexSwitchCheckDisabled" disabled>\n<label class="form-check-label" for="flexSwitchCheckDisabled">Disabled\nswitch\ncheckbox input</label>\n</div>\n<div class="form-check form-switch mb-0">\n<input class="form-check-input" type="checkbox" role="switch"\nid="flexSwitchCheckCheckedDisabled" checked disabled>\n<label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled\nchecked switch checkbox input</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(151, "div", 1)(152, "div", 49)(153, "div", 3)(154, "div", 4)(155, "div", 5);
        \u0275\u0275text(156, " Checkbox Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 6)(158, "button", 7);
        \u0275\u0275text(159, "Show Code");
        \u0275\u0275element(160, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(161, "div", 50)(162, "div", 10);
        \u0275\u0275element(163, "input", 51);
        \u0275\u0275elementStart(164, "label", 52);
        \u0275\u0275text(165, " Default ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 53);
        \u0275\u0275element(167, "input", 54);
        \u0275\u0275elementStart(168, "label", 55);
        \u0275\u0275text(169, " Medium ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 56);
        \u0275\u0275element(171, "input", 57);
        \u0275\u0275elementStart(172, "label", 58);
        \u0275\u0275text(173, " Large ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "div", 15)(175, "pre", 16)(176, "code", 16);
        \u0275\u0275text(177, '<div class="form-check">\n<input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked>\n<label class="form-check-label" for="checkebox-sm">\nDefault\n</label>\n</div>\n<div class="form-check form-check-md d-flex align-items-center">\n<input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked>\n<label class="form-check-label" for="checkebox-md">\nMedium\n</label>\n</div>\n<div class="form-check form-check-lg d-flex align-items-center">\n<input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked>\n<label class="form-check-label" for="checkebox-lg">\nLarge\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(178, "div", 49)(179, "div", 3)(180, "div", 4)(181, "div", 5);
        \u0275\u0275text(182, " Radio Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "div", 6)(184, "button", 7);
        \u0275\u0275text(185, "Show Code");
        \u0275\u0275element(186, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(187, "div", 50)(188, "div", 10);
        \u0275\u0275element(189, "input", 59);
        \u0275\u0275elementStart(190, "label", 60);
        \u0275\u0275text(191, " default ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(192, "div", 61);
        \u0275\u0275element(193, "input", 62);
        \u0275\u0275elementStart(194, "label", 63);
        \u0275\u0275text(195, " Medium ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div", 64);
        \u0275\u0275element(197, "input", 65);
        \u0275\u0275elementStart(198, "label", 66);
        \u0275\u0275text(199, " Large ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(200, "div", 15)(201, "pre", 16)(202, "code", 16);
        \u0275\u0275text(203, '<div class="form-check">\n<input class="form-check-input" type="radio" name="Radio" id="Radio-sm">\n<label class="form-check-label" for="Radio-sm">\ndefault\n</label>\n</div>\n<div class="form-check form-check-md">\n<input class="form-check-input" type="radio" name="Radio" id="Radio-md">\n<label class="form-check-label" for="Radio-md">\nMedium\n</label>\n</div>\n<div class="form-check form-check-lg">\n<input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked>\n<label class="form-check-label" for="Radio-lg">\nLarge\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(204, "div", 49)(205, "div", 3)(206, "div", 4)(207, "div", 5);
        \u0275\u0275text(208, " Switch Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "div", 6)(210, "button", 7);
        \u0275\u0275text(211, "Show Code");
        \u0275\u0275element(212, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "div", 67)(214, "div", 39);
        \u0275\u0275element(215, "input", 68);
        \u0275\u0275elementStart(216, "label", 69);
        \u0275\u0275text(217, "Default");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(218, "div", 70);
        \u0275\u0275element(219, "input", 71);
        \u0275\u0275elementStart(220, "label", 72);
        \u0275\u0275text(221, "Medium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "div", 73);
        \u0275\u0275element(223, "input", 74);
        \u0275\u0275elementStart(224, "label", 75);
        \u0275\u0275text(225, "Large");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(226, "div", 15)(227, "pre", 16)(228, "code", 16);
        \u0275\u0275text(229, '<div class="form-check form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="switch-sm">\n<label class="form-check-label" for="switch-sm">Default</label>\n</div>\n<div class="form-check form-check-md form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="switch-md">\n<label class="form-check-label" for="switch-md">Medium</label>\n</div>\n<div class="form-check form-check-lg form-switch">\n<input class="form-check-input" type="checkbox" role="switch"\nid="switch-lg">\n<label class="form-check-label" for="switch-lg">Large</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(230, "div", 1)(231, "div", 76)(232, "div", 3)(233, "div", 4)(234, "div", 5);
        \u0275\u0275text(235, " Inline ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 6)(237, "button", 7);
        \u0275\u0275text(238, "Show Code");
        \u0275\u0275element(239, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(240, "div", 9)(241, "div", 77);
        \u0275\u0275element(242, "input", 78);
        \u0275\u0275elementStart(243, "label", 79);
        \u0275\u0275text(244, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "div", 77);
        \u0275\u0275element(246, "input", 80);
        \u0275\u0275elementStart(247, "label", 81);
        \u0275\u0275text(248, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(249, "div", 77);
        \u0275\u0275element(250, "input", 82);
        \u0275\u0275elementStart(251, "label", 83);
        \u0275\u0275text(252, "3 (disabled)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "div", 77);
        \u0275\u0275element(254, "input", 84);
        \u0275\u0275elementStart(255, "label", 85);
        \u0275\u0275text(256, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "div", 77);
        \u0275\u0275element(258, "input", 86);
        \u0275\u0275elementStart(259, "label", 87);
        \u0275\u0275text(260, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "div", 77);
        \u0275\u0275element(262, "input", 88);
        \u0275\u0275elementStart(263, "label", 89);
        \u0275\u0275text(264, "3 (disabled)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(265, "div", 15)(266, "pre", 16)(267, "code", 16);
        \u0275\u0275text(268, '<div class="form-check form-check-inline">\n<input class="form-check-input" type="checkbox" id="inlineCheckbox1"\nvalue="option1">\n<label class="form-check-label" for="inlineCheckbox1">1</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="checkbox" id="inlineCheckbox2"\nvalue="option2">\n<label class="form-check-label" for="inlineCheckbox2">2</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="checkbox" id="inlineCheckbox3"\nvalue="option3" disabled>\n<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="radio" name="inlineRadioOptions"\nid="inlineRadio1" value="option1">\n<label class="form-check-label" for="inlineRadio1">1</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="radio" name="inlineRadioOptions"\nid="inlineRadio2" value="option2">\n<label class="form-check-label" for="inlineRadio2">2</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="radio" name="inlineRadioOptions"\nid="inlineRadio3" value="option3" disabled>\n<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>\n</div>');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(269, "div", 3)(270, "div", 4)(271, "div", 5);
        \u0275\u0275text(272, " Without labels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 6)(274, "button", 7);
        \u0275\u0275text(275, "Show Code");
        \u0275\u0275element(276, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(277, "div", 9)(278, "span", 90);
        \u0275\u0275element(279, "input", 91);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(280, "span");
        \u0275\u0275element(281, "input", 92);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(282, "div", 15)(283, "pre", 16)(284, "code", 16);
        \u0275\u0275text(285, '<span class="me-3">\n<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value=""\naria-label="...">\n</span>\n<span>\n<input class="form-check-input" type="radio" name="radioNoLabel"\nid="radioNoLabel1" value="" aria-label="...">\n</span>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(286, "div", 93)(287, "div", 3)(288, "div", 4)(289, "div", 5);
        \u0275\u0275text(290, " Reverse ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "div", 6)(292, "button", 7);
        \u0275\u0275text(293, "Show Code");
        \u0275\u0275element(294, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(295, "div", 9)(296, "div", 94);
        \u0275\u0275element(297, "input", 95);
        \u0275\u0275elementStart(298, "label", 96);
        \u0275\u0275text(299, " Reverse checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(300, "div", 94);
        \u0275\u0275element(301, "input", 97);
        \u0275\u0275elementStart(302, "label", 98);
        \u0275\u0275text(303, " Disabled reverse checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "div", 99);
        \u0275\u0275element(305, "input", 100);
        \u0275\u0275elementStart(306, "label", 101);
        \u0275\u0275text(307, "Reverse switch checkbox input");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(308, "div", 15)(309, "pre", 16)(310, "code", 16);
        \u0275\u0275text(311, '<div class="form-check form-check-reverse mb-3">\n<input class="form-check-input" type="checkbox" value=""\nid="reverseCheck1">\n<label class="form-check-label" for="reverseCheck1">\nReverse checkbox\n</label>\n</div>\n<div class="form-check form-check-reverse mb-3">\n<input class="form-check-input" type="checkbox" value=""\nid="reverseCheck2" disabled>\n<label class="form-check-label" for="reverseCheck2">\nDisabled reverse checkbox\n</label>\n</div>\n\n<div class="form-check form-switch form-check-reverse">\n<input class="form-check-input" type="checkbox"\nid="flexSwitchCheckReverse">\n<label class="form-check-label" for="flexSwitchCheckReverse">Reverse\nswitch\ncheckbox input</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(312, "div", 93)(313, "div", 3)(314, "div", 4)(315, "div", 5);
        \u0275\u0275text(316, " Outlined styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "div", 6)(318, "button", 7);
        \u0275\u0275text(319, "Show Code");
        \u0275\u0275element(320, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(321, "div", 9);
        \u0275\u0275element(322, "input", 102);
        \u0275\u0275elementStart(323, "label", 103);
        \u0275\u0275text(324, "Single toggle");
        \u0275\u0275elementEnd();
        \u0275\u0275element(325, "br")(326, "input", 104);
        \u0275\u0275elementStart(327, "label", 105);
        \u0275\u0275text(328, "Checked");
        \u0275\u0275elementEnd();
        \u0275\u0275element(329, "br")(330, "input", 106);
        \u0275\u0275elementStart(331, "label", 107);
        \u0275\u0275text(332, "Checked success radio");
        \u0275\u0275elementEnd();
        \u0275\u0275element(333, "input", 108);
        \u0275\u0275elementStart(334, "label", 109);
        \u0275\u0275text(335, "Danger radio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(336, "div", 15)(337, "pre", 16)(338, "code", 16);
        \u0275\u0275text(339, '<input type="checkbox" class="btn-check" id="btn-check-outlined">\n<label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single\ntoggle</label><br>\n\n<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked\n>\n<label class="btn btn-outline-secondary mb-3"\nfor="btn-check-2-outlined">Checked</label><br>\n\n<input type="radio" class="btn-check" name="options-outlined" id="success-outlined"\nchecked>\n<label class="btn btn-outline-success m-1" for="success-outlined">Checked success\nradio</label>\n\n<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined"\n>\n<label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(340, "div", 1)(341, "div", 76)(342, "div", 3)(343, "div", 4)(344, "div", 5);
        \u0275\u0275text(345, " Radio toggle buttons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(346, "div", 6)(347, "button", 7);
        \u0275\u0275text(348, "Show Code");
        \u0275\u0275element(349, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(350, "div", 9);
        \u0275\u0275element(351, "input", 110);
        \u0275\u0275elementStart(352, "label", 111);
        \u0275\u0275text(353, "Checked");
        \u0275\u0275elementEnd();
        \u0275\u0275element(354, "input", 112);
        \u0275\u0275elementStart(355, "label", 113);
        \u0275\u0275text(356, "Radio");
        \u0275\u0275elementEnd();
        \u0275\u0275element(357, "input", 114);
        \u0275\u0275elementStart(358, "label", 115);
        \u0275\u0275text(359, "Disabled");
        \u0275\u0275elementEnd();
        \u0275\u0275element(360, "input", 116);
        \u0275\u0275elementStart(361, "label", 117);
        \u0275\u0275text(362, "Radio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(363, "div", 15)(364, "pre", 16)(365, "code", 16);
        \u0275\u0275text(366, '<input type="radio" class="btn-check" name="options" id="option1"\nchecked>\n<label class="btn btn-primary m-1" for="option1">Checked</label>\n\n<input type="radio" class="btn-check" name="options" id="option2"\n>\n<label class="btn btn-primary m-1" for="option2">Radio</label>\n\n<input type="radio" class="btn-check" name="options" id="option3"\ndisabled>\n<label class="btn btn-primary m-1" for="option3">Disabled</label>\n\n<input type="radio" class="btn-check" name="options" id="option4"\n>\n<label class="btn btn-primary m-1" for="option4">Radio</label>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(367, "div", 76)(368, "div", 3)(369, "div", 4)(370, "div", 5);
        \u0275\u0275text(371, " Checkbox toggle buttons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(372, "div", 6)(373, "button", 7);
        \u0275\u0275text(374, "Show Code");
        \u0275\u0275element(375, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(376, "div", 9);
        \u0275\u0275element(377, "input", 118);
        \u0275\u0275elementStart(378, "label", 119);
        \u0275\u0275text(379, "Single toggle");
        \u0275\u0275elementEnd();
        \u0275\u0275element(380, "input", 120);
        \u0275\u0275elementStart(381, "label", 121);
        \u0275\u0275text(382, "Checked");
        \u0275\u0275elementEnd();
        \u0275\u0275element(383, "input", 122);
        \u0275\u0275elementStart(384, "label", 123);
        \u0275\u0275text(385, "Disabled");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(386, "div", 15)(387, "pre", 16)(388, "code", 16);
        \u0275\u0275text(389, '<input type="checkbox" class="btn-check" id="btn-check">\n<label class="btn btn-primary m-1" for="btn-check">Single toggle</label>\n<input type="checkbox" class="btn-check" id="btn-check-2" checked\n>\n<label class="btn btn-primary m-1" for="btn-check-2">Checked</label>\n<input type="checkbox" class="btn-check" id="btn-check-3"\ndisabled>\n<label class="btn btn-primary m-1" for="btn-check-3">Disabled</label>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(390, "div", 1)(391, "div", 124)(392, "div", 3)(393, "div", 4)(394, "div", 5);
        \u0275\u0275text(395, " Colored Checkboxes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(396, "div", 6)(397, "button", 7);
        \u0275\u0275text(398, "Show Code");
        \u0275\u0275element(399, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(400, "div", 9)(401, "div", 125);
        \u0275\u0275element(402, "input", 126);
        \u0275\u0275elementStart(403, "label", 127);
        \u0275\u0275text(404, " Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(405, "div", 125);
        \u0275\u0275element(406, "input", 128);
        \u0275\u0275elementStart(407, "label", 129);
        \u0275\u0275text(408, " Secondary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(409, "div", 125);
        \u0275\u0275element(410, "input", 130);
        \u0275\u0275elementStart(411, "label", 131);
        \u0275\u0275text(412, " Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(413, "div", 125);
        \u0275\u0275element(414, "input", 132);
        \u0275\u0275elementStart(415, "label", 133);
        \u0275\u0275text(416, " Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(417, "div", 125);
        \u0275\u0275element(418, "input", 134);
        \u0275\u0275elementStart(419, "label", 135);
        \u0275\u0275text(420, " Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(421, "div", 125);
        \u0275\u0275element(422, "input", 136);
        \u0275\u0275elementStart(423, "label", 137);
        \u0275\u0275text(424, " Danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(425, "div", 36);
        \u0275\u0275element(426, "input", 138);
        \u0275\u0275elementStart(427, "label", 139);
        \u0275\u0275text(428, " Dark ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(429, "div", 15)(430, "pre", 16)(431, "code", 16);
        \u0275\u0275text(432, '<div class="form-check mb-2">\n<input class="form-check-input" type="checkbox" value="" id="primaryChecked" checked>\n<label class="form-check-label" for="primaryChecked">\nPrimary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked" checked>\n<label class="form-check-label" for="secondaryChecked">\nSecondary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked" checked>\n<label class="form-check-label" for="warningChecked">\nWarning\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" checked>\n<label class="form-check-label" for="infoChecked">\nInfo\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-success" type="checkbox" value="" id="successChecked" checked>\n<label class="form-check-label" for="successChecked">\nSuccess\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" checked>\n<label class="form-check-label" for="dangerChecked">\nDanger\n</label>\n</div>\n<div class="form-check mb-0">\n<input class="form-check-input form-checked-dark" type="checkbox" value="" id="darkChecked" checked>\n<label class="form-check-label" for="darkChecked">\nDark\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(433, "div", 124)(434, "div", 3)(435, "div", 4)(436, "div", 5);
        \u0275\u0275text(437, " Outline Checkboxes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(438, "div", 6)(439, "button", 7);
        \u0275\u0275text(440, "Show Code");
        \u0275\u0275element(441, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(442, "div", 9)(443, "div", 125);
        \u0275\u0275element(444, "input", 140);
        \u0275\u0275elementStart(445, "label", 141);
        \u0275\u0275text(446, " Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(447, "div", 125);
        \u0275\u0275element(448, "input", 142);
        \u0275\u0275elementStart(449, "label", 143);
        \u0275\u0275text(450, " Secondary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(451, "div", 125);
        \u0275\u0275element(452, "input", 144);
        \u0275\u0275elementStart(453, "label", 145);
        \u0275\u0275text(454, " Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(455, "div", 125);
        \u0275\u0275element(456, "input", 146);
        \u0275\u0275elementStart(457, "label", 147);
        \u0275\u0275text(458, " Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(459, "div", 125);
        \u0275\u0275element(460, "input", 148);
        \u0275\u0275elementStart(461, "label", 149);
        \u0275\u0275text(462, " Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(463, "div", 125);
        \u0275\u0275element(464, "input", 150);
        \u0275\u0275elementStart(465, "label", 151);
        \u0275\u0275text(466, " Danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(467, "div", 36);
        \u0275\u0275element(468, "input", 152);
        \u0275\u0275elementStart(469, "label", 153);
        \u0275\u0275text(470, " Dark ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(471, "div", 15)(472, "pre", 16)(473, "code", 16);
        \u0275\u0275text(474, '<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked" checked>\n<label class="form-check-label" for="primaryoutlineChecked">\nPrimary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value="" id="secondaryoutlineChecked" checked>\n<label class="form-check-label" for="secondaryoutlineChecked">\nSecondary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-warning" type="checkbox" value="" id="warningoutlineChecked" checked>\n<label class="form-check-label" for="warningoutlineChecked">\nWarning\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-info" type="checkbox" value="" id="infooutlineChecked" checked>\n<label class="form-check-label" for="infooutlineChecked">\nInfo\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-success" type="checkbox" value="" id="successoutlineChecked" checked>\n<label class="form-check-label" for="successoutlineChecked">\nSuccess\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-danger" type="checkbox" value="" id="dangeroutlineChecked" checked>\n<label class="form-check-label" for="dangeroutlineChecked">\nDanger\n</label>\n</div>\n<div class="form-check mb-0">\n<input class="form-check-input form-checked-outline form-checked-dark" type="checkbox" value="" id="darkoutlineChecked" checked>\n<label class="form-check-label" for="darkoutlineChecked">\nDark\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(475, "div", 124)(476, "div", 3)(477, "div", 4)(478, "div", 5);
        \u0275\u0275text(479, " Colored Radios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(480, "div", 6)(481, "button", 7);
        \u0275\u0275text(482, "Show Code");
        \u0275\u0275element(483, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(484, "div", 9)(485, "div", 125);
        \u0275\u0275element(486, "input", 154);
        \u0275\u0275elementStart(487, "label", 155);
        \u0275\u0275text(488, " Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(489, "div", 125);
        \u0275\u0275element(490, "input", 156);
        \u0275\u0275elementStart(491, "label", 157);
        \u0275\u0275text(492, " Secondary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(493, "div", 125);
        \u0275\u0275element(494, "input", 158);
        \u0275\u0275elementStart(495, "label", 159);
        \u0275\u0275text(496, " Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(497, "div", 125);
        \u0275\u0275element(498, "input", 160);
        \u0275\u0275elementStart(499, "label", 161);
        \u0275\u0275text(500, " Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(501, "div", 125);
        \u0275\u0275element(502, "input", 162);
        \u0275\u0275elementStart(503, "label", 163);
        \u0275\u0275text(504, " Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(505, "div", 125);
        \u0275\u0275element(506, "input", 164);
        \u0275\u0275elementStart(507, "label", 165);
        \u0275\u0275text(508, " Danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(509, "div", 36);
        \u0275\u0275element(510, "input", 166);
        \u0275\u0275elementStart(511, "label", 167);
        \u0275\u0275text(512, " Dark ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(513, "div", 15)(514, "pre", 16)(515, "code", 16);
        \u0275\u0275text(516, '<div class="form-check mb-2">\n<input class="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" checked>\n<label class="form-check-label" for="primaryRadio">\nPrimary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-secondary" type="radio" name="secondaryRadio" id="secondaryRadio" checked>\n<label class="form-check-label" for="secondaryRadio">\nSecondary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio" checked>\n<label class="form-check-label" for="warningRadio">\nWarning\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" checked>\n<label class="form-check-label" for="InfoRadio">\nInfo\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio" checked>\n<label class="form-check-label" for="successRadio">\nSuccess\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio" checked>\n<label class="form-check-label" for="dangerRadio">\nDanger\n</label>\n</div>\n<div class="form-check mb-0">\n<input class="form-check-input form-checked-dark" type="radio" name="darkRadio" id="darkRadio" checked>\n<label class="form-check-label" for="darkRadio">\nDark\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(517, "div", 168)(518, "div", 3)(519, "div", 4)(520, "div", 5);
        \u0275\u0275text(521, " Outline Radios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(522, "div", 6)(523, "button", 7);
        \u0275\u0275text(524, "Show Code");
        \u0275\u0275element(525, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(526, "div", 9)(527, "div", 125);
        \u0275\u0275element(528, "input", 169);
        \u0275\u0275elementStart(529, "label", 170);
        \u0275\u0275text(530, " Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(531, "div", 125);
        \u0275\u0275element(532, "input", 171);
        \u0275\u0275elementStart(533, "label", 172);
        \u0275\u0275text(534, " Secondary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(535, "div", 125);
        \u0275\u0275element(536, "input", 173);
        \u0275\u0275elementStart(537, "label", 174);
        \u0275\u0275text(538, " Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(539, "div", 125);
        \u0275\u0275element(540, "input", 175);
        \u0275\u0275elementStart(541, "label", 176);
        \u0275\u0275text(542, " Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(543, "div", 125);
        \u0275\u0275element(544, "input", 177);
        \u0275\u0275elementStart(545, "label", 178);
        \u0275\u0275text(546, " Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(547, "div", 125);
        \u0275\u0275element(548, "input", 179);
        \u0275\u0275elementStart(549, "label", 180);
        \u0275\u0275text(550, " Danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(551, "div", 36);
        \u0275\u0275element(552, "input", 181);
        \u0275\u0275elementStart(553, "label", 182);
        \u0275\u0275text(554, " Dark ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(555, "div", 15)(556, "pre", 16)(557, "code", 16);
        \u0275\u0275text(558, '<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio" id="primaryoutlineRadio" checked>\n<label class="form-check-label" for="primaryoutlineRadio">\nPrimary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-secondary" type="radio" name="secondaryoutlineRadio" id="secondaryoutlineRadio" checked>\n<label class="form-check-label" for="secondaryoutlineRadio">\nSecondary\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-warning" type="radio" name="warningoutlineRadio" id="warningoutlineRadio" checked>\n<label class="form-check-label" for="warningoutlineRadio">\nWarning\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-info" type="radio" name="InfooutlineRadio" id="InfooutlineRadio" checked>\n<label class="form-check-label" for="InfooutlineRadio">\nInfo\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-success" type="radio" name="successoutlineRadio" id="successoutlineRadio" checked>\n<label class="form-check-label" for="successoutlineRadio">\nSuccess\n</label>\n</div>\n<div class="form-check mb-2">\n<input class="form-check-input form-checked-outline form-checked-danger" type="radio" name="dangeroutlineRadio" id="dangeroutlineRadio" checked>\n<label class="form-check-label" for="dangeroutlineRadio">\nDanger\n</label>\n</div>\n<div class="form-check mb-0">\n<input class="form-check-input form-checked-outline form-checked-dark" type="radio" name="darkoutlineRadio" id="darkoutlineRadio" checked>\n<label class="form-check-label" for="darkoutlineRadio">\nDark\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(559, "div", 168)(560, "div", 3)(561, "div", 4)(562, "div", 5);
        \u0275\u0275text(563, " Switches Colors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(564, "div", 6)(565, "button", 7);
        \u0275\u0275text(566, "Show Code");
        \u0275\u0275element(567, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(568, "div", 9)(569, "div", 183);
        \u0275\u0275element(570, "input", 184);
        \u0275\u0275elementStart(571, "label", 185);
        \u0275\u0275text(572, "Primary");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(573, "div", 183);
        \u0275\u0275element(574, "input", 186);
        \u0275\u0275elementStart(575, "label", 187);
        \u0275\u0275text(576, "Secondary");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(577, "div", 183);
        \u0275\u0275element(578, "input", 188);
        \u0275\u0275elementStart(579, "label", 189);
        \u0275\u0275text(580, "Warning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(581, "div", 183);
        \u0275\u0275element(582, "input", 190);
        \u0275\u0275elementStart(583, "label", 191);
        \u0275\u0275text(584, "Info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(585, "div", 183);
        \u0275\u0275element(586, "input", 192);
        \u0275\u0275elementStart(587, "label", 193);
        \u0275\u0275text(588, "Success");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(589, "div", 183);
        \u0275\u0275element(590, "input", 194);
        \u0275\u0275elementStart(591, "label", 195);
        \u0275\u0275text(592, "Danger");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(593, "div", 46);
        \u0275\u0275element(594, "input", 196);
        \u0275\u0275elementStart(595, "label", 197);
        \u0275\u0275text(596, "Dark");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(597, "div", 15)(598, "pre", 16)(599, "code", 16);
        \u0275\u0275text(600, '<div class="form-check form-switch mb-2">\n<input class="form-check-input" type="checkbox" role="switch"\nid="switch-primary" checked>\n<label class="form-check-label" for="switch-primary">Primary</label>\n</div>\n<div class="form-check form-switch mb-2">\n<input class="form-check-input form-checked-secondary" type="checkbox" role="switch"\nid="switch-secondary" checked>\n<label class="form-check-label" for="switch-secondary">Secondary</label>\n</div>\n<div class="form-check form-switch mb-2">\n<input class="form-check-input form-checked-warning" type="checkbox" role="switch"\nid="switch-warning" checked>\n<label class="form-check-label" for="switch-warning">Warning</label>\n</div>\n<div class="form-check form-switch mb-2">\n<input class="form-check-input form-checked-info" type="checkbox" role="switch"\nid="switch-info" checked>\n<label class="form-check-label" for="switch-info">Info</label>\n</div>\n<div class="form-check form-switch mb-2">\n<input class="form-check-input form-checked-success" type="checkbox" role="switch"\nid="switch-success" checked>\n<label class="form-check-label" for="switch-success">Success</label>\n</div>\n<div class="form-check form-switch mb-2">\n<input class="form-check-input form-checked-danger" type="checkbox" role="switch"\nid="switch-danger" checked>\n<label class="form-check-label" for="switch-danger">Danger</label>\n</div>\n<div class="form-check form-switch mb-0">\n<input class="form-check-input form-checked-dark" type="checkbox" role="switch"\nid="switch-dark" checked>\n<label class="form-check-label" for="switch-dark">Dark</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(601, "div", 1)(602, "div", 198)(603, "div", 3)(604, "div", 4)(605, "div", 5);
        \u0275\u0275text(606, " Toggle Switches Style-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(607, "div", 6)(608, "button", 7);
        \u0275\u0275text(609, "Show Code");
        \u0275\u0275element(610, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(611, "div", 9)(612, "div", 199);
        \u0275\u0275template(613, ChecksradiosComponent_div_613_Template, 3, 1, "div", 200);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(614, "div", 15)(615, "pre", 16)(616, "code", 16);
        \u0275\u0275text(617, '<div class="row gy-1">\n<div class="col-xl-4">\n<div class="toggle on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-secondary on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-warning on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-info on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-success on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-danger on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-light on mb-3">\n<span></span>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="toggle toggle-dark on mb-3">\n<span></span>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(618, "div", 198)(619, "div", 3)(620, "div", 4)(621, "div", 5);
        \u0275\u0275text(622, " Toggle Switches Style-2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(623, "div", 6)(624, "button", 7);
        \u0275\u0275text(625, "Show Code");
        \u0275\u0275element(626, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(627, "div", 9)(628, "div", 199)(629, "div", 201)(630, "div", 202);
        \u0275\u0275element(631, "input", 203)(632, "label", 204);
        \u0275\u0275elementStart(633, "span", 205);
        \u0275\u0275text(634, "Primary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(635, "div", 201)(636, "div", 202);
        \u0275\u0275element(637, "input", 206)(638, "label", 207);
        \u0275\u0275elementStart(639, "span", 205);
        \u0275\u0275text(640, "Secondary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(641, "div", 201)(642, "div", 202);
        \u0275\u0275element(643, "input", 208)(644, "label", 209);
        \u0275\u0275elementStart(645, "span", 205);
        \u0275\u0275text(646, "Warning");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(647, "div", 201)(648, "div", 202);
        \u0275\u0275element(649, "input", 210)(650, "label", 211);
        \u0275\u0275elementStart(651, "span", 205);
        \u0275\u0275text(652, "Info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(653, "div", 201)(654, "div", 202);
        \u0275\u0275element(655, "input", 212)(656, "label", 213);
        \u0275\u0275elementStart(657, "span", 205);
        \u0275\u0275text(658, "Success");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(659, "div", 201)(660, "div", 202);
        \u0275\u0275element(661, "input", 214)(662, "label", 215);
        \u0275\u0275elementStart(663, "span", 205);
        \u0275\u0275text(664, "Danger");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(665, "div", 201)(666, "div", 202);
        \u0275\u0275element(667, "input", 216)(668, "label", 217);
        \u0275\u0275elementStart(669, "span", 205);
        \u0275\u0275text(670, "Light");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(671, "div", 201)(672, "div", 202);
        \u0275\u0275element(673, "input", 218)(674, "label", 219);
        \u0275\u0275elementStart(675, "span", 205);
        \u0275\u0275text(676, "Dark");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(677, "div", 15)(678, "pre", 16)(679, "code", 16);
        \u0275\u0275text(680, '<div class="row gy-1">\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchPrimary" name="toggleswitchPrimary" type="checkbox" checked>\n<label for="toggleswitchPrimary" class="label-primary"></label><span class="ms-3">Primary</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchSecondary" name="toggleswitchSecondary" type="checkbox" checked>\n<label for="toggleswitchSecondary" class="label-secondary"></label><span class="ms-3">Secondary</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchWarning" name="toggleswitchWarning" type="checkbox" checked>\n<label for="toggleswitchWarning" class="label-warning"></label><span class="ms-3">Warning</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchInfo" name="toggleswitchInfo" type="checkbox" checked>\n<label for="toggleswitchInfo" class="label-info"></label><span class="ms-3">Info</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchSuccess" name="toggleswitchSuccess" type="checkbox" checked>\n<label for="toggleswitchSuccess" class="label-success"></label><span class="ms-3">Success</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchDanger" name="toggleswitchDanger" type="checkbox" checked>\n<label for="toggleswitchDanger" class="label-danger"></label><span class="ms-3">Danger</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchLight" name="toggleswitchLight" type="checkbox" checked>\n<label for="toggleswitchLight" class="label-light"></label><span class="ms-3">Light</span>\n</div>\n</div>\n<div class="col-xl-4 px-0">\n<div class="custom-toggle-switch d-flex align-items-center mb-4">\n<input id="toggleswitchDark" name="toggleswitchDark" type="checkbox" checked>\n<label for="toggleswitchDark" class="label-dark"></label><span class="ms-3">Dark</span>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(681, "div", 1)(682, "div", 76)(683, "div", 3)(684, "div", 4)(685, "div", 5);
        \u0275\u0275text(686, " Toggle Switch-1 Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(687, "div", 6)(688, "button", 7);
        \u0275\u0275text(689, "Show Code");
        \u0275\u0275element(690, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(691, "div", 220);
        \u0275\u0275repeaterCreate(692, ChecksradiosComponent_For_693_Template, 8, 7, "div", 221, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(694, "div", 15)(695, "pre", 16)(696, "code", 16);
        \u0275\u0275text(697, '<div class="d-flex align-items-center flex-wrap mb-3">\n<div class=""> <p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>\n<div class="toggle toggle-sm on mb-0">\n<span></span>\n</div>\n</div>\n<div class="d-flex align-items-center flex-wrap mb-3">\n<div class=""> <p class="text-muted m-0">Default toggle switch <code></code></p></div>\n<div class="toggle toggle-secondary on mb-0">\n<span></span>\n</div>\n</div>\n<div class="d-flex align-items-center flex-wrap">\n<div class=""> <p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>\n<div class="toggle toggle-lg toggle-success on mb-0">\n<span></span>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(698, "div", 76)(699, "div", 3)(700, "div", 4)(701, "div", 5);
        \u0275\u0275text(702, " Toggle Switch-2 Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(703, "div", 6)(704, "button", 7);
        \u0275\u0275text(705, "Show Code");
        \u0275\u0275element(706, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(707, "div", 9)(708, "div", 222)(709, "div", 223)(710, "p", 224);
        \u0275\u0275text(711, "Small size toggle switch ");
        \u0275\u0275elementStart(712, "code");
        \u0275\u0275text(713, "toggle-sm");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(714, "div", 225);
        \u0275\u0275element(715, "input", 226)(716, "label", 227);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(717, "div", 222)(718, "div", 223)(719, "p", 224);
        \u0275\u0275text(720, "Default toggle switch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(721, "div", 228);
        \u0275\u0275element(722, "input", 229)(723, "label", 230);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(724, "div", 231)(725, "div", 232)(726, "p", 224);
        \u0275\u0275text(727, "Large size toggle switch ");
        \u0275\u0275elementStart(728, "code");
        \u0275\u0275text(729, "toggle-lg");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(730, "div", 233);
        \u0275\u0275element(731, "input", 234)(732, "label", 235);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(733, "div", 15)(734, "pre", 16)(735, "code", 16);
        \u0275\u0275text(736, '<div class="d-flex align-items-center flex-wrap mb-4">\n<div class=""><p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>\n<div class="custom-toggle-switch toggle-sm ms-2">\n<input id="size-sm" name="toggleswitchsize" type="checkbox" checked>\n<label for="size-sm" class="label-primary"></label>\n</div>\n</div>\n<div class="d-flex align-items-center flex-wrap mb-4">\n<div class=""><p class="text-muted m-0">Default toggle switch</p></div>\n<div class="custom-toggle-switch ms-2">\n<input id="size-default" name="toggleswitchsize" type="checkbox" checked>\n<label for="size-default" class="label-secondary mb-1"></label>\n</div>\n</div>\n<div class="d-flex align-items-center flex-wrap">\n<div class=""><p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>\n<div class="custom-toggle-switch toggle-lg ms-2">\n<input id="size-lg" name="toggleswitchsize" type="checkbox" checked>\n<label for="size-lg" class="label-success mb-2"></label>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(613);
        \u0275\u0275property("ngForOf", ctx.toggles);
        \u0275\u0275advance(79);
        \u0275\u0275repeater(ctx.toggleSwitches);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, FormsModule, ReactiveFormsModule, NgbModule, CommonModule, NgClass, NgForOf] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChecksradiosComponent, { className: "ChecksradiosComponent", filePath: "src\\app\\components\\forms\\form-elements\\checksradios\\checksradios.component.ts", lineNumber: 14 });
})();
export {
  ChecksradiosComponent
};
//# sourceMappingURL=checksradios.component-BXVIN4CL.js.map
