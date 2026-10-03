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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/invoice/edit-invoice/edit-invoice.component.ts
function EditInvoiceComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td");
    \u0275\u0275element(2, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "textarea", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "input", 35);
    \u0275\u0275elementEnd()();
  }
}
var EditInvoiceComponent = class _EditInvoiceComponent {
  constructor() {
    this.tables = [];
  }
  addTable() {
    this.tables.push({ isTableVisible: true });
  }
  static {
    this.\u0275fac = function EditInvoiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditInvoiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInvoiceComponent, selectors: [["app-edit-invoice"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Invoice", "title", "Edit Invoice", "activeTitle", "Edit Invoice"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-12"], [1, "mb-4", "row"], [1, "form-label"], ["type", "text", "placeholder", "Invoice title", "value", "Invoice", 1, "form-control"], ["rows", "4", "placeholder", "Subject of Invoice", 1, "form-control"], ["type", "text", "placeholder", "Payment Number", "value", "23543", 1, "form-control"], ["type", "text", "placeholder", "Payment Date", 1, "form-control"], ["rows", "4", "placeholder", "Bill To", 1, "form-control"], [1, "d-flex", "justify-content-end"], ["href", "javascript:void(0)", 1, "invoice-add-item", "btn", "btn-light", 3, "click"], [1, "fe", "fe-plus"], [1, "table-responsive"], [1, "table", "nowrap", "text-nowrap", "border", "mt-4"], ["scope", "col"], ["scope", "col", 1, "w-40"], [1, "invoice-body"], [1, "invoice-list"], ["placeholder", "", "type", "text", "value", "Logo Creation", 1, "form-control"], ["rows", "1", 1, "form-control"], ["placeholder", "", "type", "text", "value", "2", 1, "form-control"], ["placeholder", "", "type", "text", "value", "$60.00", 1, "form-control"], ["placeholder", "", "type", "text", "value", "$120.00", 1, "form-control"], [1, "row", "mt-4"], ["placeholder", "Vat Rate", "type", "text", "value", "20%", 1, "form-control"], [1, "card-footer"], [1, "col"], ["href", "javascript:void(0)", 1, "m-1", "btn", "btn-success"], ["href", "javascript:void(0)", 1, "m-1", "btn", "btn-light"], ["placeholder", "", "type", "text", "value", "", 1, "form-control"]], template: function EditInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Edit Invoice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 1)(9, "div", 7)(10, "div", 8)(11, "div", 2)(12, "label", 9);
        \u0275\u0275text(13, "Invoice Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 2)(17, "label", 9);
        \u0275\u0275text(18, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "textarea", 11);
        \u0275\u0275text(20, "Hi Jessica Allen,This is the receipt for a payment of $450.00 (USD) for your works");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 2)(23, "label", 9);
        \u0275\u0275text(24, "Payment Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "div", 2)(28, "label", 9);
        \u0275\u0275text(29, "Payment Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 8)(32, "div", 2)(33, "label", 9);
        \u0275\u0275text(34, "Bill To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 14);
        \u0275\u0275text(36, "Street Address, State, City, Region, Postal Code, ctr@");
        \u0275\u0275text(37, "example.com");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 15)(39, "a", 16);
        \u0275\u0275listener("click", function EditInvoiceComponent_Template_a_click_39_listener() {
          return ctx.addTable();
        });
        \u0275\u0275element(40, "i", 17);
        \u0275\u0275text(41, " Add Product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 18)(43, "table", 19)(44, "thead")(45, "tr")(46, "th", 20);
        \u0275\u0275text(47, "PRODUCT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th", 21);
        \u0275\u0275text(49, "DESCRIPTION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th", 20);
        \u0275\u0275text(51, "QNTY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th", 20);
        \u0275\u0275text(53, "UNIT PRICE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th", 20);
        \u0275\u0275text(55, "AMOUNT");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "tbody", 22)(57, "tr", 23)(58, "td");
        \u0275\u0275element(59, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "td")(61, "textarea", 25);
        \u0275\u0275text(62, "Logo and business cards design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "td");
        \u0275\u0275element(64, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "td");
        \u0275\u0275element(66, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "td");
        \u0275\u0275element(68, "input", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(69, EditInvoiceComponent_For_70_Template, 11, 0, "tr", 23, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 29)(72, "div", 2)(73, "label", 9);
        \u0275\u0275text(74, "Vat Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 31)(77, "div", 1)(78, "div", 32)(79, "a", 33);
        \u0275\u0275element(80, "i", 17);
        \u0275\u0275text(81, " Add New Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "a", 34);
        \u0275\u0275text(83, "Cancel");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(69);
        \u0275\u0275repeater(ctx.tables);
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInvoiceComponent, { className: "EditInvoiceComponent", filePath: "src\\app\\components\\pages\\invoice\\edit-invoice\\edit-invoice.component.ts", lineNumber: 11 });
})();
export {
  EditInvoiceComponent
};
//# sourceMappingURL=edit-invoice.component-LDL5ZQJC.js.map
