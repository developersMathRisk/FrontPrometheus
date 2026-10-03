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

// src/app/components/pages/invoice/invoice-details/invoice-1/invoice-1.component.ts
var Invoice1Component = class _Invoice1Component {
  static {
    this.\u0275fac = function Invoice1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Invoice1Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Invoice1Component, selectors: [["app-invoice-1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 142, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Invoice Details", "title", "Invoice 1", "activeTitle", "Invoice 1"], [1, "row"], [1, "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-body"], [1, "text-primary", "fw-bold"], [1, "mb-1"], [1, "card-body", "ps-0", "pe-0"], [1, "col-sm-6"], [1, "col-sm-6", "text-end"], [1, "border-bottom"], [1, "row", "pt-4"], [1, "col-lg-6"], [1, "h5", "fw-bold"], [1, "col-lg-6", "text-end"], [1, "table-responsive", "push"], [1, "table", "table-bordered", "table-hover", "text-nowrap"], [1, ""], ["scope", "col", 1, "text-center"], ["scope", "col"], ["scope", "col", 1, "text-end"], [1, "text-center"], [1, "fw-semibold", "mb-1"], [1, "text-muted"], [1, "text-end"], ["colspan", "4", 1, "fw-semibold", "text-end"], ["colspan", "4", 1, "fw-bold", "text-uppercase", "text-end", "h4", "mb-0"], [1, "fw-bold", "text-end", "h4", "mb-0"], ["colspan", "5", 1, "text-end"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-primary", "me-1"], [1, "si", "si-wallet"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-secondary", "me-1"], [1, "si", "si-paper-plane"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "btn-info", "me-1"], [1, "si", "si-printer"], [1, "text-muted", "text-center", "mt-4", "mb-0"]], template: function Invoice1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
        \u0275\u0275text(6, "INVOICE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h5", 6);
        \u0275\u0275text(8, "Hi ");
        \u0275\u0275elementStart(9, "strong");
        \u0275\u0275text(10, "Jessica Allen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, ",");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " This is the receipt for a payment of ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "$450.00");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " (USD) for your works ");
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 1)(18, "div", 8)(19, "span");
        \u0275\u0275text(20, "Payment No.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "br");
        \u0275\u0275elementStart(22, "strong");
        \u0275\u0275text(23, "INV23456-234");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9)(25, "span");
        \u0275\u0275text(26, "Payment Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "br");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "Aug 10, 2019 - 12:20 pm");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(30, "div", 10);
        \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "p", 13);
        \u0275\u0275text(34, "Bill From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "address");
        \u0275\u0275text(36, " Street Address");
        \u0275\u0275element(37, "br");
        \u0275\u0275text(38, " State, City");
        \u0275\u0275element(39, "br");
        \u0275\u0275text(40, " Region, Postal Code");
        \u0275\u0275element(41, "br");
        \u0275\u0275text(42, " ltd@example.com ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 14)(44, "p", 13);
        \u0275\u0275text(45, "Bill To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "address");
        \u0275\u0275text(47, " Street Address");
        \u0275\u0275element(48, "br");
        \u0275\u0275text(49, " State, City");
        \u0275\u0275element(50, "br");
        \u0275\u0275text(51, " Region, Postal Code");
        \u0275\u0275element(52, "br");
        \u0275\u0275text(53, " ctr@example.com ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 15)(55, "table", 16)(56, "tbody")(57, "tr", 17);
        \u0275\u0275element(58, "th", 18);
        \u0275\u0275elementStart(59, "th", 19);
        \u0275\u0275text(60, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th", 18);
        \u0275\u0275text(62, "Qnty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 20);
        \u0275\u0275text(64, "Unit Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th", 20);
        \u0275\u0275text(66, "Amount");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "tr")(68, "td", 21);
        \u0275\u0275text(69, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "td")(71, "p", 22);
        \u0275\u0275text(72, "Logo Creation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 23);
        \u0275\u0275text(74, "Logo and business cards design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "td", 21);
        \u0275\u0275text(76, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "td", 24);
        \u0275\u0275text(78, "$60.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "td", 24);
        \u0275\u0275text(80, "$120.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "tr")(82, "td", 21);
        \u0275\u0275text(83, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "td")(85, "p", 22);
        \u0275\u0275text(86, "Online Store Design & Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 23);
        \u0275\u0275text(88, "Design/Development for all popular modern browsers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "td", 21);
        \u0275\u0275text(90, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td", 24);
        \u0275\u0275text(92, "$80.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td", 24);
        \u0275\u0275text(94, "$240.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td", 21);
        \u0275\u0275text(97, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "td")(99, "p", 22);
        \u0275\u0275text(100, "App Design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 23);
        \u0275\u0275text(102, "Promotional mobile application");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "td", 21);
        \u0275\u0275text(104, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "td", 24);
        \u0275\u0275text(106, "$40.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "td", 24);
        \u0275\u0275text(108, "$40.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "tr")(110, "td", 25);
        \u0275\u0275text(111, "Subtotal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "td", 24);
        \u0275\u0275text(113, "$400.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "tr")(115, "td", 25);
        \u0275\u0275text(116, "Vat Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "td", 24);
        \u0275\u0275text(118, "20%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "tr")(120, "td", 25);
        \u0275\u0275text(121, "Vat Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "td", 24);
        \u0275\u0275text(123, "$50.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "tr")(125, "td", 26);
        \u0275\u0275text(126, "Total Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "td", 27);
        \u0275\u0275text(128, "$450.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "tr")(130, "td", 28)(131, "button", 29);
        \u0275\u0275element(132, "i", 30);
        \u0275\u0275text(133, " Pay Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "button", 31);
        \u0275\u0275element(135, "i", 32);
        \u0275\u0275text(136, " Send Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "button", 33);
        \u0275\u0275element(138, "i", 34);
        \u0275\u0275text(139, " Print Invoice");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(140, "p", 35);
        \u0275\u0275text(141, "Thank you very much for doing business with us. We look forward to working with you again!");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Invoice1Component, { className: "Invoice1Component", filePath: "src\\app\\components\\pages\\invoice\\invoice-details\\invoice-1\\invoice-1.component.ts", lineNumber: 11 });
})();
export {
  Invoice1Component
};
//# sourceMappingURL=invoice-1.component-LIUPVUZH.js.map
