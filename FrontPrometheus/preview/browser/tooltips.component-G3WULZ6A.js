import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/tooltips/tooltips.component.ts
var TooltipsComponent = class _TooltipsComponent {
  static {
    this.\u0275fac = function TooltipsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipsComponent, selectors: [["app-tooltips"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 150, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "ToolTips", "activeTitle", "ToolTips"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "d-flex", "gap-3", "flex-wrap"], ["type", "button", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Tooltip on top", 1, "btn", "btn-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "placement", "right", "ngbTooltip", "Tooltip on right", 1, "btn", "btn-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Tooltip on bottom", 1, "btn", "btn-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "placement", "left", "ngbTooltip", "Tooltip on left", 1, "btn", "btn-primary", "btn-wave"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "btn-list", "gap-1", "d-flex", "flex-wrap"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-primary", "placement", "auto", "ngbTooltip", "Primary Tooltip", 1, "btn", "btn-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-secondary", "placement", "auto", "ngbTooltip", "Secondary Tooltip", 1, "btn", "btn-secondary", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-warning", "placement", "auto", "ngbTooltip", "Warning Tooltip", 1, "btn", "btn-warning", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-info", "placement", "auto", "ngbTooltip", "Info Tooltip", 1, "btn", "btn-info", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-success", "placement", "auto", "ngbTooltip", "Success Tooltip", 1, "btn", "btn-success", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-danger", "placement", "auto", "ngbTooltip", "Danger Tooltip", 1, "btn", "btn-danger", "btn-wave"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-light", "placement", "auto", "ngbTooltip", "Light Tooltip", 1, "btn", "btn-light", "btn-wave", "tooltip-light"], ["type", "button", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-dark", "placement", "auto", "ngbTooltip", "Dark Tooltip", 1, "btn", "btn-dark", "text-white", "btn-wave"], [1, "col-xl-4"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "tooltipClass", "tooltip-primary", "ngbTooltip", "Link Tooltip", 1, "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Home", "tooltipClass", "tooltip-primary", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-primary"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Message", "tooltipClass", "tooltip-secondary", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-secondary"], ["d", "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Add User", "tooltipClass", "tooltip-warning", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-warning"], ["fill", "none", "height", "24", "width", "24"], ["d", "M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Send File", "tooltipClass", "tooltip-info", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-info"], ["d", "M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Action", "tooltipClass", "tooltip-success", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-success"], ["d", "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], ["tabindex", "0", "data-bs-toggle", "tooltip", "ngbTooltip", "Disabled tooltip", 1, "d-inline-block"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Alex Carey", "tooltipClass", "tooltip-primary", 1, "avatar", "avatar-md", "me-2", "online", "avatar-rounded"], ["src", "./assets/images/faces/12.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Marina Kai", "tooltipClass", "tooltip-primary", 1, "avatar", "avatar-lg", "me-2", "online", "avatar-rounded"], ["src", "./assets/images/faces/3.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "ngbTooltip", "Tim Cook", "tooltipClass", "tooltip-primary", 1, "avatar", "avatar-xl", "me-2", "offline", "avatar-rounded"], ["src", "./assets/images/faces/15.jpg", "alt", "img"]], template: function TooltipsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Tooltip Directions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "button", 11);
        \u0275\u0275text(14, " Tooltip on top ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 12);
        \u0275\u0275text(16, " Tooltip on right ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 13);
        \u0275\u0275text(18, " Tooltip on bottom ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 14);
        \u0275\u0275text(20, " Tooltip on left ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "pre", 16)(23, "code", 16);
        \u0275\u0275text(24, '<div class="btn-list">\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip"\ndata-bs-placement="top" title="Tooltip on top">\nTooltip on top\n</button>\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip"\ndata-bs-placement="right" title="Tooltip on right">\nTooltip on right\n</button>\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip"\ndata-bs-placement="bottom" title="Tooltip on bottom">\nTooltip on bottom\n</button>\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip"\ndata-bs-placement="left" title="Tooltip on left">\nTooltip on left\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(25, "div", 1)(26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div", 5);
        \u0275\u0275text(30, " Colored Tooltips ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 6)(32, "button", 7);
        \u0275\u0275text(33, "Show Code");
        \u0275\u0275element(34, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 9)(36, "div", 17)(37, "button", 18);
        \u0275\u0275text(38, " Primary Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 19);
        \u0275\u0275text(40, " Secondary Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 20);
        \u0275\u0275text(42, " Warning Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 21);
        \u0275\u0275text(44, " Info Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 22);
        \u0275\u0275text(46, " Success Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 23);
        \u0275\u0275text(48, " Danger Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 24);
        \u0275\u0275text(50, " Light Tooltip ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 25);
        \u0275\u0275text(52, " Dark Tooltip ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 15)(54, "pre", 16)(55, "code", 16);
        \u0275\u0275text(56, '<div class="btn-list">\n<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary"\ndata-bs-placement="top" title="Primary Tooltip">\nPrimary Tooltip\n</button>\n<button type="button" class="btn btn-secondary btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-secondary"\ndata-bs-placement="right" title="Secondary Tooltip">\nSecondary Tooltip\n</button>\n<button type="button" class="btn btn-warning btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-warning"\ndata-bs-placement="bottom" title="Warning Tooltip">\nWarning Tooltip\n</button>\n<button type="button" class="btn btn-info btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-info"\ndata-bs-placement="left" title="Info Tooltip">\nInfo Tooltip\n</button>\n<button type="button" class="btn btn-success btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-success"\ndata-bs-placement="top" title="Success Tooltip">\nSuccess Tooltip\n</button>\n<button type="button" class="btn btn-danger btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-danger"\ndata-bs-placement="bottom" title="Danger Tooltip">\nDanger Tooltip\n</button>\n<button type="button" class="btn btn-light btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-light"\ndata-bs-placement="bottom" title="Light Tooltip">\nLight Tooltip\n</button>\n<button type="button" class="btn btn-dark text-white btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark"\ndata-bs-placement="bottom" title="Dark Tooltip">\nDark Tooltip\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(57, "div", 1)(58, "div", 26)(59, "div", 3)(60, "div", 4)(61, "div", 5);
        \u0275\u0275text(62, " Tooltips on links ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 6)(64, "button", 7);
        \u0275\u0275text(65, "Show Code");
        \u0275\u0275element(66, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div", 9)(68, "p", 27);
        \u0275\u0275text(69, " Hover on the link to view the ");
        \u0275\u0275elementStart(70, "a", 28);
        \u0275\u0275text(71, "Tooltip");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 15)(73, "pre", 16)(74, "code", 16);
        \u0275\u0275text(75, '<p class="text-muted mb-0">\nHover on the link to view the <a href="javascript:void(0);"\ndata-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" title="Link Tooltip" class="text-primary">Tooltip</a>\n</p>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(76, "div", 26)(77, "div", 3)(78, "div", 4)(79, "div", 5);
        \u0275\u0275text(80, " With an SVG's ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 6)(82, "button", 7);
        \u0275\u0275text(83, "Show Code");
        \u0275\u0275element(84, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 9)(86, "a", 29);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(87, "svg", 30);
        \u0275\u0275element(88, "path", 31)(89, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(90, "a", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(91, "svg", 34);
        \u0275\u0275element(92, "path", 31)(93, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(94, "a", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(95, "svg", 37)(96, "g");
        \u0275\u0275element(97, "rect", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "g");
        \u0275\u0275element(99, "path", 39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(100, "a", 40);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(101, "svg", 41);
        \u0275\u0275element(102, "path", 31)(103, "path", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(104, "a", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(105, "svg", 44);
        \u0275\u0275element(106, "path", 31)(107, "path", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(108, "div", 15)(109, "pre", 16)(110, "code", 16);
        \u0275\u0275text(111, '<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Home" data-bs-custom-class="tooltip-primary" class="me-3">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Message" data-bs-custom-class="tooltip-secondary" class="me-3">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Add User" data-bs-custom-class="tooltip-warning" class="me-3">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-warning" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g></svg>\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Send File" data-bs-custom-class="tooltip-info" class="me-3">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-info" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"/></svg>\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Action" data-bs-custom-class="tooltip-success" class="me-3">\n<svg xmlns="http://www.w3.org/2000/svg" class="svg-success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>\n</a>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(112, "div", 26)(113, "div", 3)(114, "div", 4)(115, "div", 5);
        \u0275\u0275text(116, " Disabled elements ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 6)(118, "button", 7);
        \u0275\u0275text(119, "Show Code");
        \u0275\u0275element(120, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "div", 9)(122, "span", 46)(123, "button", 47);
        \u0275\u0275text(124, "Disabled button ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "div", 15)(126, "pre", 16)(127, "code", 16);
        \u0275\u0275text(128, '<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip"\ntitle="Disabled tooltip">\n<button class="btn btn-primary" type="button" disabled="">Disabled\nbutton\n</button>\n</span>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(129, "div", 1)(130, "div", 26)(131, "div", 3)(132, "div", 4)(133, "div", 5);
        \u0275\u0275text(134, " Tooltip For Images ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 6)(136, "button", 7);
        \u0275\u0275text(137, "Show Code");
        \u0275\u0275element(138, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 9)(140, "a", 48);
        \u0275\u0275element(141, "img", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "a", 50);
        \u0275\u0275element(143, "img", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "a", 52);
        \u0275\u0275element(145, "img", 53);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 15)(147, "pre", 16)(148, "code", 16);
        \u0275\u0275text(149, '<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Alex Carey" data-bs-custom-class="tooltip-primary" class="avatar avatar-md me-2 online avatar-rounded">\n<img src="./assets/images/faces/12.jpg" alt="img">\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Marina Kai" data-bs-custom-class="tooltip-primary" class="avatar avatar-lg me-2 online avatar-rounded">\n<img src="./assets/images/faces/3.jpg" alt="img">\n</a>\n<a href="javascript:void(0);" data-bs-toggle="tooltip" title="Tim Cook" data-bs-custom-class="tooltip-primary" class="avatar avatar-xl me-2 offline avatar-rounded">\n<img src="./assets/images/faces/15.jpg" alt="img">\n</a>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipsComponent, { className: "TooltipsComponent", filePath: "src\\app\\components\\uielements\\tooltips\\tooltips.component.ts", lineNumber: 12 });
})();
export {
  TooltipsComponent
};
//# sourceMappingURL=tooltips.component-G3WULZ6A.js.map
