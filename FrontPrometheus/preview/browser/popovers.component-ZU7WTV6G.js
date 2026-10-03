import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbPopover,
  NgbPopoverModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
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
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/popovers/popovers.component.ts
var PopoversComponent = class _PopoversComponent {
  static {
    this.\u0275fac = function PopoversComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PopoversComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PopoversComponent, selectors: [["app-popovers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 178, vars: 16, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "Popovers", "activeTitle", "Popovers"], [1, "row"], [1, "col-xxl-5"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "d-flex", "gap-2", "flex-wrap"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-outline-primary"], ["placement", "right", "ngbPopover", "popover", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", 1, "btn", "btn-outline-primary"], ["placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", 1, "btn", "btn-outline-primary"], ["placement", "start", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", 1, "btn", "btn-outline-primary"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "col-xxl-7"], ["type", "button", "placement", "top", "popoverClass", "header-primary", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "top", "popoverClass", "header-secondary", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-secondary"], ["type", "button", "placement", "top", "popoverClass", "header-info", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-info"], ["type", "button", "placement", "top", "popoverClass", "header-warning", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-warning"], ["type", "button", "placement", "top", "popoverClass", "header-success", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-success"], ["type", "button", "placement", "top", "popoverClass", "header-danger", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "colored header", 1, "btn", "btn-outline-danger"], [1, "col-xl-12"], ["type", "button", "popoverTitle", "Pop title", "placement", "top", "popoverClass", "popover-primary", "ngbPopover", "Popover with primary background.", 1, "btn", "btn-primary", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "end", "popoverClass", "popover-secondary", "ngbPopover", "Popover with secondary  background.", 1, "btn", "btn-secondary", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "start", "popoverClass", "popover-info", "ngbPopover", "Popover with info  background.", 1, "btn", "btn-info", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "bottom", "popoverClass", "popover-warning", "ngbPopover", "Popover with warning background.", 1, "btn", "btn-warning", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "top", "popoverClass", "popover-success", "ngbPopover", "Popover with success  background.", 1, "btn", "btn-success", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "end", "popoverClass", "popover-danger", "ngbPopover", "Popover with danger  background.", 1, "btn", "btn-danger", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "start", "popoverClass", "popover-teal", "ngbPopover", "Popover with teal   background.", 1, "btn", "btn-teal", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "top", "popoverClass", "popover-purple", "ngbPopover", "Popover with purple  background.", 1, "btn", "btn-purple", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "top", "popoverClass", "popover-primary-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-primary-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "start", "popoverClass", "popover-secondary-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-secondary-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "bottom", "popoverClass", "popover-info-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-info-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "end", "popoverClass", "popover-warning-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-warning-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "start", "popoverClass", "popover-success-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-success-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "top", "popoverClass", "popover-danger-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-danger-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "bottom", "popoverClass", "popover-teal-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-teal-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "placement", "end", "popoverClass", "popover-purple-light", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-purple-light", "btn-wave", "waves-effect", "waves-light", 3, "autoClose"], [1, "col-xxl-6"], [1, "card-body", "d-flex", "flex-wrap", "justify-content-between"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "placement", "auto", "popoverTitle", "Dismissible popover", "ngbPopover", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-primary", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "placement", "auto", "popoverTitle", "Dismissible popover", "ngbPopover", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-secondary", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "placement", "auto", "popoverTitle", "Dismissible popover", "ngbPopover", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-info", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "placement", "auto", "popoverTitle", "Dismissible popover", "ngbPopover", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-warning", "m-1"], [1, "col-xxl-3", "col-xl-6"], ["tabindex", "0", "data-bs-toggle", "popover", "data-bs-trigger", "hover focus", "data-bs-content", "Disabled popover", 1, "d-inline-block"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "popover", "placement", "auto", "popoverClass", "popover-primary only-body", "ngbPopover", "This popover is used to provide details about this icon.", 1, "me-4"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-primary"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"], ["href", "javascript:void(0);", "data-bs-toggle", "popover", "placement", "left", "popoverClass", "popover-secondary only-body", "ngbPopover", "This popover is used to provide information about this icon.", 1, "me-4"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-secondary"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"]], template: function PopoversComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Default Popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "button", 11);
        \u0275\u0275text(14, " Popover top ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 12);
        \u0275\u0275text(16, "Popover Right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 13);
        \u0275\u0275text(18, "Popover Bottom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 14);
        \u0275\u0275text(20, "Popover Left");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "pre", 16)(23, "code", 16);
        \u0275\u0275text(24, `<div class="btn-list">
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button"
data-bs-toggle="popover" data-bs-placement="top" title="Popover Top"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
Top
</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button"
data-bs-toggle="popover" data-bs-placement="right" title="Popover Right"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
Right</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button"
data-bs-toggle="popover" data-bs-placement="bottom" title="Popover Bottom"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
Bottom</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button"
data-bs-toggle="popover" data-bs-placement="left" title="Popover Left"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover
Left</a>
</div>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "div", 17)(26, "div", 3)(27, "div", 4)(28, "div", 5);
        \u0275\u0275text(29, " Colored Headers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 6)(31, "button", 7);
        \u0275\u0275text(32, "Show Code");
        \u0275\u0275element(33, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 9)(35, "div", 10)(36, "button", 18);
        \u0275\u0275text(37, " Header Primary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 19);
        \u0275\u0275text(39, " Header secondary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 20);
        \u0275\u0275text(41, " Header info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 21);
        \u0275\u0275text(43, " Header warning ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 22);
        \u0275\u0275text(45, " Header success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 23);
        \u0275\u0275text(47, " Header danger ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 15)(49, "pre", 16)(50, "code", 16);
        \u0275\u0275text(51, '<div class="btn-list">\n<button type="button" class="btn btn-outline-primary btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="header-primary"\ntitle="Color Header" data-bs-content="Popover with primary header.">\nHeader Primary\n</button>\n<button type="button" class="btn btn-outline-secondary btn-wave"\ndata-bs-toggle="popover" data-bs-placement="right"\ndata-bs-custom-class="header-secondary" title="Color Header"\ndata-bs-content="Popover with secondary header.">\nHeader Secondary\n</button>\n<button type="button" class="btn btn-outline-info btn-wave" data-bs-toggle="popover"\ndata-bs-placement="bottom" data-bs-custom-class="header-info"\ntitle="Color Header" data-bs-content="Popover with info header.">\nHeader Info\n</button>\n<button type="button" class="btn btn-outline-warning btn-wave" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="header-warning"\ntitle="Color Header" data-bs-content="Popover with warning header.">\nHeader Warning\n</button>\n<button type="button" class="btn btn-outline-success btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="header-success"\ntitle="Color Header" data-bs-content="Popover with success header.">\nHeader Success\n</button>\n<button type="button" class="btn btn-outline-danger btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="header-danger"\ntitle="Color Header" data-bs-content="Popover with danger header.">\nHeader Danger\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(52, "div", 1)(53, "div", 24)(54, "div", 3)(55, "div", 4)(56, "div", 5);
        \u0275\u0275text(57, " Colored Popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 6)(59, "button", 7);
        \u0275\u0275text(60, "Show Code");
        \u0275\u0275element(61, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 9)(63, "div", 10)(64, "button", 25);
        \u0275\u0275text(65, " primary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 26);
        \u0275\u0275text(67, " secondary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 27);
        \u0275\u0275text(69, " info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "button", 28);
        \u0275\u0275text(71, " warning ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 29);
        \u0275\u0275text(73, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 30);
        \u0275\u0275text(75, " danger ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 31);
        \u0275\u0275text(77, " Teal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "button", 32);
        \u0275\u0275text(79, " purple ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 15)(81, "pre", 16)(82, "code", 16);
        \u0275\u0275text(83, '<div class="btn-list">\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="popover-primary"\ntitle="Color Background" data-bs-content="Popover with primary background.">\nPrimary\n</button>\n<button type="button" class="btn btn-secondary btn-wave"\ndata-bs-toggle="popover" data-bs-placement="right"\ndata-bs-custom-class="popover-secondary" title="Color Background"\ndata-bs-content="Popover with secondary background.">\nSecondary\n</button>\n<button type="button" class="btn btn-info btn-wave" data-bs-toggle="popover"\ndata-bs-placement="bottom" data-bs-custom-class="popover-info"\ntitle="Color Background" data-bs-content="Popover with info background.">\nInfo\n</button>\n<button type="button" class="btn btn-warning btn-wave" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="popover-warning"\ntitle="Color Background" data-bs-content="Popover with warning background.">\nWarning\n</button>\n<button type="button" class="btn btn-success btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="popover-success"\ntitle="Color Background" data-bs-content="Popover with success background.">\nSuccess\n</button>\n<button type="button" class="btn btn-danger btn-wave" data-bs-toggle="popover"\ndata-bs-placement="right" data-bs-custom-class="popover-danger"\ntitle="Color Background" data-bs-content="Popover with danger background.">\nDanger\n</button>\n<button type="button" class="btn btn-teal btn-wave" data-bs-toggle="popover"\ndata-bs-placement="bottom" data-bs-custom-class="popover-teal"\ntitle="Color Background" data-bs-content="Popover with teal background.">\nTeal\n</button>\n<button type="button" class="btn btn-purple btn-wave" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="popover-purple"\ntitle="Color Background" data-bs-content="Popover with purple background.">\nPurple\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(84, "div", 1)(85, "div", 24)(86, "div", 3)(87, "div", 4)(88, "div", 5);
        \u0275\u0275text(89, " Light Popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 6)(91, "button", 7);
        \u0275\u0275text(92, "Show Code");
        \u0275\u0275element(93, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 9)(95, "div", 10)(96, "button", 33);
        \u0275\u0275text(97, " primary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "button", 34);
        \u0275\u0275text(99, " secondary ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "button", 35);
        \u0275\u0275text(101, " Info ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "button", 36);
        \u0275\u0275text(103, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 37);
        \u0275\u0275text(105, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "button", 38);
        \u0275\u0275text(107, " success ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 39);
        \u0275\u0275text(109, " Teal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "button", 40);
        \u0275\u0275text(111, " purple ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 15)(113, "pre", 16)(114, "code", 16);
        \u0275\u0275text(115, '<div class="btn-list">\n<button type="button" class="btn btn-primary-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="popover-primary-light"\ntitle="Light Background" data-bs-content="Popover with light primary background.">\nPrimary\n</button>\n<button type="button" class="btn btn-secondary-light btn-wave"\ndata-bs-toggle="popover" data-bs-placement="right"\ndata-bs-custom-class="popover-secondary-light" title="Light Background"\ndata-bs-content="Popover with light secondary background.">\nSecondary\n</button>\n<button type="button" class="btn btn-info-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="bottom" data-bs-custom-class="popover-info-light"\ntitle="Light Background" data-bs-content="Popover with light info background.">\nInfo\n</button>\n<button type="button" class="btn btn-warning-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="popover-warning-light"\ntitle="Light Background" data-bs-content="Popover with light warning background.">\nWarning\n</button>\n<button type="button" class="btn btn-success-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="popover-success-light"\ntitle="Light Background" data-bs-content="Popover with light success background.">\nSuccess\n</button>\n<button type="button" class="btn btn-danger-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="right" data-bs-custom-class="popover-danger-light"\ntitle="Light Background" data-bs-content="Popover with light danger background.">\nDanger\n</button>\n<button type="button" class="btn btn-teal-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="bottom" data-bs-custom-class="popover-teal-light"\ntitle="Light Background" data-bs-content="Popover with light teal background.">\nTeal\n</button>\n<button type="button" class="btn btn-purple-light btn-wave" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="popover-purple-light"\ntitle="Light Background" data-bs-content="Popover with light purple background.">\nPurple\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(116, "div", 1)(117, "div", 41)(118, "div", 3)(119, "div", 4)(120, "div", 5);
        \u0275\u0275text(121, " Dismissible Popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 6)(123, "button", 7);
        \u0275\u0275text(124, "Show Code");
        \u0275\u0275element(125, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 42)(127, "a", 43);
        \u0275\u0275text(128, "Popover Dismiss ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "a", 44);
        \u0275\u0275text(130, "Popover Dismiss ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "a", 45);
        \u0275\u0275text(132, "Popover Dismiss ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "a", 46);
        \u0275\u0275text(134, "Popover Dismiss ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 15)(136, "pre", 16)(137, "code", 16);
        \u0275\u0275text(138, `<a tabindex="0" class="btn btn-primary m-1" role="button"
data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Dismissible popover"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-secondary m-1" role="button"
data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" title="Dismissible popover"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-info m-1" role="button" data-bs-toggle="popover"
data-bs-trigger="focus" data-bs-placement="bottom" title="Dismissible popover"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-warning m-1" role="button" data-bs-toggle="popover"
data-bs-trigger="focus" data-bs-placement="left" title="Dismissible popover"
data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(139, "div", 47)(140, "div", 3)(141, "div", 4)(142, "div", 5);
        \u0275\u0275text(143, " Disabled Popover ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "div", 6)(145, "button", 7);
        \u0275\u0275text(146, "Show Code");
        \u0275\u0275element(147, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(148, "div", 9)(149, "span", 48)(150, "button", 49);
        \u0275\u0275text(151, "Disabled button");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "div", 15)(153, "pre", 16)(154, "code", 16);
        \u0275\u0275text(155, '<span class="d-inline-block" tabindex="0" data-bs-toggle="popover"\ndata-bs-trigger="hover focus" data-bs-content="Disabled popover">\n<button class="btn btn-primary" type="button" disabled>Disabled\nbutton</button>\n</span>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(156, "div", 47)(157, "div", 3)(158, "div", 4)(159, "div", 5);
        \u0275\u0275text(160, " Icon Popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 6)(162, "button", 7);
        \u0275\u0275text(163, "Show Code");
        \u0275\u0275element(164, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "div", 9)(166, "a", 50);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(167, "svg", 51);
        \u0275\u0275element(168, "path", 52)(169, "path", 53);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(170, "a", 54);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(171, "svg", 55);
        \u0275\u0275element(172, "path", 52)(173, "path", 56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(174, "div", 15)(175, "pre", 16)(176, "code", 16);
        \u0275\u0275text(177, '<a class="me-4" href="javascript:void(0)" data-bs-toggle="popover"\ndata-bs-placement="top" data-bs-custom-class="popover-primary only-body" data-bs-content="This popover is used to provide details about this icon.">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>\n</a>\n<a class="me-4" href="javascript:void(0)" data-bs-toggle="popover"\ndata-bs-placement="left" data-bs-custom-class="popover-secondary only-body" data-bs-content="This popover is used to provide information about this icon.">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>\n</a>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(64);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", true);
        \u0275\u0275advance(18);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(2);
        \u0275\u0275property("autoClose", "outside");
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbPopoverModule, NgbPopover] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PopoversComponent, { className: "PopoversComponent", filePath: "src\\app\\components\\uielements\\popovers\\popovers.component.ts", lineNumber: 11 });
})();
export {
  PopoversComponent
};
//# sourceMappingURL=popovers.component-ZU7WTV6G.js.map
