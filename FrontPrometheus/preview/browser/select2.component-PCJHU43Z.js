import {
  NgHeaderTemplateDirective,
  NgLabelTemplateDirective,
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbCollapse,
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/select2/select2.component.ts
function Select2Component_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const select_r2 = ctx.$implicit;
    \u0275\u0275property("value", select_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(select_r2.name);
  }
}
function Select2Component_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ng-option", 14);
    \u0275\u0275text(3, "Custom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r3 = ctx.$implicit;
    \u0275\u0275property("value", car_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", "custom");
  }
}
function Select2Component_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 21);
  }
}
function Select2Component_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275property("src", item_r4.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
  }
}
function Select2Component_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275property("src", item_r5.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
  }
}
function Select2Component_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r6 = ctx.$implicit;
    \u0275\u0275property("value", car_r6.id)("disabled", car_r6.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r6.name);
  }
}
function Select2Component_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r7 = ctx.$implicit;
    \u0275\u0275property("value", car_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r7.name);
  }
}
var Select2Component = class _Select2Component {
  constructor() {
    this.isCollapsed = false;
    this.selectedSimpleItem = "Selection-3";
    this.simpleItems = [];
    this.multiSelect = ["Multiple-1"];
    this.multiselect = [
      { id: 1, name: "Multiple-1" },
      { id: 2, name: "Multiple-2" },
      { id: 3, name: "Multiple-3" },
      { id: 4, name: "Multiple-4" }
    ];
    this.simpleItems2 = [];
    this.selectedCars2 = ["Volvo"];
    this.cars2 = [
      { id: 1, name: "Volvo" },
      { id: 2, name: "Saab", disabled: true },
      { id: 3, name: "Opel" },
      { id: 4, name: "Audi" }
    ];
    this.selectedSimpleItem1 = "Select city";
    this.simpleItems1 = [];
    this.selectCity = [];
    this.selectedSimpleItem2 = "Select Cars";
    this.cars1 = [
      { id: 1, name: "Volvo" },
      { id: 2, name: "Saab" },
      { id: 3, name: "Opel" },
      { id: 4, name: "Audi" }
    ];
    this.cities1 = [
      {
        id: 1,
        name: "Andrew",
        avatar: "./assets/images/faces/select2/p-5.jpg"
      },
      {
        id: 2,
        name: "Maya",
        avatar: "./assets/images/faces/select2/p-4.jpg"
      },
      {
        id: 3,
        name: "Brodus Axel",
        avatar: "./assets/images/faces/select2/p-2.jpg"
      },
      {
        id: 4,
        name: "Goldens",
        avatar: "./assets/images/faces/select2/p-1.jpg"
      },
      {
        id: 5,
        name: "Angelina",
        avatar: "./assets/images/faces/select2/p-2.jpg"
      }
    ];
    this.selectedCity = this.cities1[0].name;
    this.cities2 = [
      {
        id: 1,
        name: "Andrew",
        avatar: "./assets/images/faces/select2/p-5.jpg"
      },
      {
        id: 2,
        name: "Maya",
        avatar: "./assets/images/faces/select2/p-4.jpg"
      },
      {
        id: 3,
        name: "Brodus Axel",
        avatar: "./assets/images/faces/select2/p-2.jpg"
      },
      {
        id: 4,
        name: "Goldens",
        avatar: "./assets/images/faces/select2/p-1.jpg"
      },
      {
        id: 5,
        name: "Angelina",
        avatar: "./assets/images/faces/select2/p-2.jpg"
      }
    ];
    this.selectedCity1 = this.cities2[0].name;
    this.selectedSimpleItem3 = "Selection-4";
    this.simpleItems3 = [];
    this.selectedCars3 = ["Volvo"];
    this.cars3 = [
      { id: 1, name: "Volvo" },
      { id: 2, name: "Saab" },
      { id: 3, name: "Opel" },
      { id: 4, name: "Audi" }
    ];
    this.isCarsDisabled = false;
  }
  ngOnInit() {
    this.simpleItems = [
      "Selection-1",
      "Selection-2",
      "Selection-3",
      "Selection-4",
      "Selection-5"
    ];
    this.simpleItems1 = [
      "Select city",
      "Texas",
      "Georgia",
      "California",
      " Washington D C",
      "Virigine"
    ];
    this.simpleItems3 = [
      "Selection-1",
      "Selection-2",
      "Selection-3",
      "Selection-4",
      "Selection-5"
    ];
  }
  toggleDisabled() {
    const car = this.multiselect[1];
    car.disabled = !car.disabled;
  }
  toggleDisabled1() {
    const car = this.cars1[1];
    car.disabled = !car.disabled;
  }
  enable() {
    this.isCarsDisabled = false;
  }
  disable() {
    this.isCarsDisabled = true;
  }
  filterCities(searchValue) {
    this.cities1 = this.filterCitiesArray(searchValue);
  }
  filterCitiesArray(searchValue) {
    return this.cities1.filter((city) => city.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
  static {
    this.\u0275fac = function Select2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Select2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Select2Component, selectors: [["app-select2"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 22, consts: [["collapse", "ngbCollapse"], ["hassub", "", "sub", "Home", "title1", "Forms", "title", "Select2", "activeTitle", "Select2"], [1, "alert", "alert-solid-secondary", "alert-dismissible", "fs-15", "fade", "show", "mb-4", 3, "ngbCollapseChange", "ngbCollapse"], [1, "text-fixed-black"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "bi", "bi-x"], [1, "row"], [1, "col-xl-4"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngModelChange", "items", "ngModel"], [3, "ngModelChange", "multiple", "ngModel"], [3, "value"], ["placeholder", "Select cars", 3, "ngModelChange", "multiple", "ngModel"], [1, "card-body", "templating"], ["bindLabel", "name", "bindValue", "name", 3, "ngModelChange", "items", "ngModel"], ["ng-header-tmp", ""], ["ng-label-tmp", ""], ["bindLabel", "name", "bindValue", "name", 3, "ngModelChange", "items", "ngModel", "maxSelectedItems"], ["type", "text", 2, "width", "100%", "line-height", "24px"], [1, "col-xl-6"], [3, "ngModelChange", "multiple", "maxSelectedItems", "ngModel"], [3, "value", "disabled"], [1, "card-body", "vstack", "gap-3"], [3, "ngModelChange", "multiple", "ngModel", "disabled"], [1, "btn", "btn-primary", 3, "click"], ["height", "15", "width", "15", 3, "src"]], template: function Select2Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2, 0);
        \u0275\u0275twoWayListener("ngbCollapseChange", function Select2Component_Template_div_ngbCollapseChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed, $event) || (ctx.isCollapsed = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275text(3, " We Placed ");
        \u0275\u0275elementStart(4, "strong", 3);
        \u0275\u0275text(5, "Select2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " only in this page by using ");
        \u0275\u0275elementStart(7, "strong", 3);
        \u0275\u0275text(8, "jquery");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " cdn link. ");
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function Select2Component_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isCollapsed = !ctx.isCollapsed);
        });
        \u0275\u0275element(11, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10);
        \u0275\u0275text(17, " Basic Select2 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem, $event) || (ctx.selectedSimpleItem = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "div", 9)(23, "div", 10);
        \u0275\u0275text(24, " Multiple Select ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 11)(26, "ng-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.multiSelect, $event) || (ctx.multiSelect = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(27, Select2Component_For_28_Template, 2, 2, "ng-option", 14, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 7)(30, "div", 8)(31, "div", 9)(32, "div", 10);
        \u0275\u0275text(33, " Single Select With Placeholder ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 11)(35, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem1, $event) || (ctx.selectedSimpleItem1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 7)(37, "div", 8)(38, "div", 9)(39, "div", 10);
        \u0275\u0275text(40, " Multiple Select With Placeholder ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11)(42, "ng-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_42_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem2, $event) || (ctx.selectedSimpleItem2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(43, Select2Component_For_44_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 7)(46, "div", 8)(47, "div", 9)(48, "div", 10);
        \u0275\u0275text(49, " Templating ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 16)(51, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCity, $event) || (ctx.selectedCity = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(52, Select2Component_ng_template_52_Template, 1, 0, "ng-template", 18)(53, Select2Component_ng_template_53_Template, 2, 2, "ng-template", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 7)(55, "div", 8)(56, "div", 9)(57, "div", 10);
        \u0275\u0275text(58, " Templating Selection ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 11)(60, "ng-select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCity1, $event) || (ctx.selectedCity1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(61, Select2Component_ng_template_61_Template, 2, 2, "ng-template", 19);
        \u0275\u0275element(62, "input", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(63, "div", 6)(64, "div", 22)(65, "div", 8)(66, "div", 9)(67, "div", 10);
        \u0275\u0275text(68, " Max Selections Limiting ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 11)(70, "ng-select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_70_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCars2, $event) || (ctx.selectedCars2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(71, Select2Component_For_72_Template, 2, 3, "ng-option", 24, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(73, "ng-option", 14);
        \u0275\u0275text(74, "Custom");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "div", 22)(76, "div", 8)(77, "div", 9)(78, "div", 10);
        \u0275\u0275text(79, " Disabling a Select2 control ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 25)(81, "ng-select", 26);
        \u0275\u0275twoWayListener("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_81_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCars3, $event) || (ctx.selectedCars3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(82, Select2Component_For_83_Template, 2, 2, "ng-option", 14, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div")(85, "button", 27);
        \u0275\u0275listener("click", function Select2Component_Template_button_click_85_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.enable());
        });
        \u0275\u0275text(86, "Enable");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, " \xA0 ");
        \u0275\u0275elementStart(88, "button", 27);
        \u0275\u0275listener("click", function Select2Component_Template_button_click_88_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.disable());
        });
        \u0275\u0275text(89, "Disabled");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed);
        \u0275\u0275advance(9);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed);
        \u0275\u0275advance(9);
        \u0275\u0275property("items", ctx.simpleItems);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem);
        \u0275\u0275advance(7);
        \u0275\u0275property("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.multiSelect);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.multiselect);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.simpleItems1);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem1);
        \u0275\u0275advance(7);
        \u0275\u0275property("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem2);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cars1);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.cities1);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity);
        \u0275\u0275advance(9);
        \u0275\u0275property("items", ctx.cities2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity1);
        \u0275\u0275property("maxSelectedItems", 2);
        \u0275\u0275advance(10);
        \u0275\u0275property("multiple", true)("maxSelectedItems", 2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCars2);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cars2);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "custom");
        \u0275\u0275advance(8);
        \u0275\u0275property("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCars3);
        \u0275\u0275property("disabled", ctx.isCarsDisabled);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cars3);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, NgLabelTemplateDirective, NgHeaderTemplateDirective, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, NgbModule, NgbCollapse] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Select2Component, { className: "Select2Component", filePath: "src\\app\\components\\forms\\select2\\select2.component.ts", lineNumber: 14 });
})();
export {
  Select2Component
};
//# sourceMappingURL=select2.component-PCJHU43Z.js.map
