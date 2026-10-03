import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/invoice/invoice-details/invoice-2/invoice-2.component.ts
var Invoice2Component = class _Invoice2Component {
  static {
    this.\u0275fac = function Invoice2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Invoice2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Invoice2Component, selectors: [["app-invoice-2"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Invoice Details", "title", "Invoice 2", "activeTitle", "Invoice 2"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "invoice-header", "text-end", "d-block", "mb-4"], [1, "invoice-title", "fw-bold", "text-uppercase", "mb-1"], [1, "row", "mt-4"], [1, "col-md"], [1, "fw-bold"], [1, "billed-to"], [1, "billed-from", "text-md-end"], [1, "table-responsive", "mt-4"], [1, "table", "table-bordered", "border", "text-nowrap", "mb-0"], ["scope", "col", 1, ""], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "text-end"], [1, "text-center"], [1, "text-end"], ["colspan", "2", "rowspan", "4", 1, "valign-middle"], [1, "invoice-notes"], [1, "main-content-label", "tx-13", "fw-semibold"], [1, "text-end", "fw-semibold"], ["colspan", "2", 1, "text-end", "fw-semibold"], [1, "text-uppercase", "fw-semibold"], ["colspan", "2", 1, "text-end"], [1, "text-primary", "fw-bold"], [1, "float-end"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-primary", "mt-4", "me-1"], [1, "si", "si-wallet"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-secondary", "mt-4", "me-1"], [1, "si", "si-paper-plane"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-info", "mt-4", "me-1"], [1, "si", "si-printer"]], template: function Invoice2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7, "Invoice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
        \u0275\u0275text(11, "Billed To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "h6");
        \u0275\u0275text(14, "Goerge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "2406 Raoul Wallenberg Place");
        \u0275\u0275element(17, "br");
        \u0275\u0275text(18, " Tel No: 203-875-4147");
        \u0275\u0275element(19, "br");
        \u0275\u0275text(20, " Email: goerge234@gmail.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 11)(23, "label", 9);
        \u0275\u0275text(24, "Billed From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h6");
        \u0275\u0275text(26, "Spruko Technologies Pvt Ltd.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28, "201 Something St., Something Town, YT 242, Country 6546");
        \u0275\u0275element(29, "br");
        \u0275\u0275text(30, " Tel No: 324 445-4544");
        \u0275\u0275element(31, "br");
        \u0275\u0275text(32, " Email: info@spruko.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 12)(34, "table", 13)(35, "thead")(36, "tr")(37, "th", 14);
        \u0275\u0275text(38, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 15);
        \u0275\u0275text(40, "QNTY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 16);
        \u0275\u0275text(42, "Unit Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th", 16);
        \u0275\u0275text(44, "Amount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td", 9);
        \u0275\u0275text(48, "Website design & development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "td", 17);
        \u0275\u0275text(50, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "td", 18);
        \u0275\u0275text(52, "$250.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "td", 18);
        \u0275\u0275text(54, "$1500.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "td", 9);
        \u0275\u0275text(57, "Branding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "td", 17);
        \u0275\u0275text(59, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "td", 18);
        \u0275\u0275text(61, "$900.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "td", 18);
        \u0275\u0275text(63, "$900.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "tr")(65, "td", 9);
        \u0275\u0275text(66, "Redesign Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "td", 17);
        \u0275\u0275text(68, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "td", 18);
        \u0275\u0275text(70, "$500.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "td", 18);
        \u0275\u0275text(72, "$500.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "tr")(74, "td", 9);
        \u0275\u0275text(75, "Wordpress Plugins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "td", 17);
        \u0275\u0275text(77, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "td", 18);
        \u0275\u0275text(79, "$360.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "td", 18);
        \u0275\u0275text(81, "$1800.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "tr")(83, "td", 19)(84, "div", 20)(85, "label", 21);
        \u0275\u0275text(86, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p");
        \u0275\u0275text(88, " voluptatum deleniti atque corrupti explicabo.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "td", 22);
        \u0275\u0275text(90, "Sub-Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td", 22);
        \u0275\u0275text(92, "$4700.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "tr")(94, "td", 22);
        \u0275\u0275text(95, "Tax (5%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "td", 23);
        \u0275\u0275text(97, "$235.50");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "tr")(99, "td", 22);
        \u0275\u0275text(100, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "td", 23);
        \u0275\u0275text(102, "-$50.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "tr")(104, "td", 24);
        \u0275\u0275text(105, "Total Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "td", 25)(107, "h4", 26);
        \u0275\u0275text(108, "$4,885.50");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(109, "div", 27)(110, "button", 28);
        \u0275\u0275element(111, "i", 29);
        \u0275\u0275text(112, " Pay Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "button", 30);
        \u0275\u0275element(114, "i", 31);
        \u0275\u0275text(115, " Send Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "button", 32);
        \u0275\u0275element(117, "i", 33);
        \u0275\u0275text(118, " Print Invoice");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Invoice2Component, { className: "Invoice2Component", filePath: "src\\app\\components\\pages\\invoice\\invoice-details\\invoice-2\\invoice-2.component.ts", lineNumber: 11 });
})();
export {
  Invoice2Component
};
//# sourceMappingURL=invoice-2.component-7FKCQCLW.js.map
