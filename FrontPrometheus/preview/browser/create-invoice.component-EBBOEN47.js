import {
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/invoice/create-invoice/create-invoice.component.ts
function CreateInvoiceComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td");
    \u0275\u0275element(2, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "textarea", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "input", 24);
    \u0275\u0275elementEnd()();
  }
}
var CreateInvoiceComponent = class _CreateInvoiceComponent {
  constructor() {
    this.basicDemoValue = "Choose Date";
    this.selectedSimpleItem = "Select Currency";
    this.simpleItems = [];
    this.tables = [];
  }
  ngOnInit() {
    this.simpleItems = [
      "USD - (United States Dollar)",
      "BHD - (Bahraini Dinar)",
      "KWD - (Kuwaiti Dinar)",
      "CHF - (Swiss Franc)"
    ];
  }
  ngAfterViewInit() {
    const plus = document.querySelectorAll(".plus");
    const minus = document.querySelectorAll(".minus");
    function perfectChart() {
      plus.forEach((element) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener("click", () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener("click", () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }
  addTable() {
    this.tables.push({ isTableVisible: true });
  }
  static {
    this.\u0275fac = function CreateInvoiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateInvoiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateInvoiceComponent, selectors: [["app-create-invoice"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 79, vars: 1, consts: [["hassub", "", "sub", "Pages", "title1", "Invoice", "title", "Create Invoice", "activeTitle", "Create Invoice"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-12"], [1, "mb-4", "row"], [1, "form-label"], ["type", "text", "placeholder", "Invoice title", "value", "", 1, "form-control"], ["rows", "4", "placeholder", "Subject of Invoice", 1, "form-control"], ["type", "text", "placeholder", "Payment Number", "value", "", 1, "form-control"], ["type", "text", "id", "invoice-date-issued", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Bill To", 1, "form-control"], [1, "d-flex", "justify-content-end"], ["href", "javascript:void(0)", 1, "invoice-add-item", "btn", "btn-light", 3, "click"], [1, "fe", "fe-plus"], [1, "table-responsive"], [1, "table", "nowrap", "text-nowrap", "border", "mt-4"], ["scope", "col"], ["scope", "col", 1, "w-40"], [1, "invoice-body"], [1, "invoice-list"], ["placeholder", "", "type", "text", "value", "", 1, "form-control"], ["rows", "1", 1, "form-control"], [1, "row", "mt-4"], ["placeholder", "Vat Rate", "type", "text", "value", "", 1, "form-control"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "m-1"], ["href", "javascript:void(0)", 1, "btn", "btn-light", "m-1"]], template: function CreateInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Create Invoice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 1)(9, "div", 7)(10, "div", 8)(11, "div", 2)(12, "label", 9);
        \u0275\u0275text(13, "Invoice Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 2)(17, "label", 9);
        \u0275\u0275text(18, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "textarea", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 2)(22, "label", 9);
        \u0275\u0275text(23, "Payment Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "div", 2)(27, "label", 9);
        \u0275\u0275text(28, "Payment Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CreateInvoiceComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue, $event) || (ctx.basicDemoValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "div", 2)(32, "label", 9);
        \u0275\u0275text(33, "Bill To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "textarea", 14);
        \u0275\u0275text(35, "                                    ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "a", 16);
        \u0275\u0275listener("click", function CreateInvoiceComponent_Template_a_click_37_listener() {
          return ctx.addTable();
        });
        \u0275\u0275element(38, "i", 17);
        \u0275\u0275text(39, " Add Product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 18)(41, "table", 19)(42, "thead")(43, "tr")(44, "th", 20);
        \u0275\u0275text(45, "PRODUCT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th", 21);
        \u0275\u0275text(47, "DESCRIPTION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th", 20);
        \u0275\u0275text(49, "QNTY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th", 20);
        \u0275\u0275text(51, "UNIT PRICE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th", 20);
        \u0275\u0275text(53, "AMOUNT");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "tbody", 22)(55, "tr", 23)(56, "td");
        \u0275\u0275element(57, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "td");
        \u0275\u0275element(59, "textarea", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "td");
        \u0275\u0275element(61, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "td");
        \u0275\u0275element(63, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "td");
        \u0275\u0275element(65, "input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(66, CreateInvoiceComponent_For_67_Template, 11, 0, "tr", 23, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 26)(69, "div", 2)(70, "label", 9);
        \u0275\u0275text(71, "Vat Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 28)(74, "a", 29);
        \u0275\u0275element(75, "i", 17);
        \u0275\u0275text(76, " Add New Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "a", 30);
        \u0275\u0275text(78, "Cancel");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275twoWayProperty("ngModel", ctx.basicDemoValue);
        \u0275\u0275advance(37);
        \u0275\u0275repeater(ctx.tables);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, FlatpickrModule, FlatpickrDirective, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, NgSelectModule, NgbModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateInvoiceComponent, { className: "CreateInvoiceComponent", filePath: "src\\app\\components\\pages\\invoice\\create-invoice\\create-invoice.component.ts", lineNumber: 18 });
})();
export {
  CreateInvoiceComponent
};
//# sourceMappingURL=create-invoice.component-EBBOEN47.js.map
