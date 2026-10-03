import {
  MatDatepickerModule,
  MaterialModuleModule
} from "./chunk-GKAVOCE2.js";
import "./chunk-J5SGSLZO.js";
import "./chunk-GE2TBQ5B.js";
import "./chunk-FUFMTRYL.js";
import "./chunk-PSOT7MFX.js";
import "./chunk-VV4GJM7A.js";
import "./chunk-CRGZAC5F.js";
import "./chunk-BP4DFEFY.js";
import "./chunk-4JAVGBFR.js";
import "./chunk-DJZSF5ZU.js";
import "./chunk-ZN2CT4H2.js";
import "./chunk-F6B7KXT2.js";
import "./chunk-KI24SFMQ.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
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
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/form-elements/datetimepicker/datetimepicker.component.ts
var DatetimepickerComponent = class _DatetimepickerComponent {
  constructor() {
    this.basicDemoValue = "2024-01-01";
    this.modelValueAsDate = /* @__PURE__ */ new Date();
    this.dateTimeValue = /* @__PURE__ */ new Date();
    this.multiDates = [/* @__PURE__ */ new Date(), (/* @__PURE__ */ new Date())["fp_incr"](10)];
    this.rangeValue = {
      from: /* @__PURE__ */ new Date(),
      to: (/* @__PURE__ */ new Date())["fp_incr"](10)
    };
    this.inlineDatePicker = /* @__PURE__ */ new Date();
    this.timePicker = null;
    this.timePicker1 = null;
    this.timePicker2 = null;
    this.timePicker3 = null;
    this.timePicker4 = null;
    this.min = "16:00 pm";
    this.max = "22:00 pm";
    this.min1 = "04:00";
    this.max1 = "10:00";
    this.basicDemoValue1 = "10:00";
  }
  static {
    this.\u0275fac = function DatetimepickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatetimepickerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatetimepickerComponent, selectors: [["app-datetimepicker"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 133, vars: 49, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Date & Time Pickers", "activeTitle", "Date & Time Pickers"], [1, "row"], [1, "col-xl-3"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "id", "date", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "datetime", "placeholder", "Choose date with time", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", 1, "form-control", 3, "ngModelChange", "ngModel", "altInput", "convertModelValue", "enableTime"], ["type", "text", "id", "humanfrienndlydate", "placeholder", "Human friendly dates", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "altInput"], ["type", "text", "id", "daterange", "mode", "range", "placeholder", "Date range picker", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "altInput", "convertModelValue"], [1, "ri-time-line"], ["type", "text", "id", "timepikcr", "placeholder", "Choose time", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat"], ["type", "text", "id", "timepickr1", "placeholder", "Choose time in 24hr format", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat"], ["type", "text", "id", "limittime", "placeholder", "choose time min 16:00 to max 22:30", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "minTime", "maxTime", "enableTime", "dateFormat"], ["type", "text", "id", "limitdatetime", "placeholder", "date with time limit from 16:00 to 22:00", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", 1, "form-control", 3, "ngModelChange", "ngModel", "minTime", "maxTime", "altInput", "convertModelValue", "enableTime"], [1, "col-xl-6"], [1, "col-xl-12"], [1, "form-group", "mb-0"], ["type", "text", "id", "weeknum", "placeholder", "Choose date", "mwlFlatpickr", "", "mode", "multiple", 1, "form-control", 3, "ngModelChange", "ngModel", "altInput", "convertModelValue"], ["type", "text", "id", "inlinetime", "placeholder", "Choose time", 1, "form-control", 3, "ngModelChange", "ngModel"], ["mwlFlatpickr", "", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat", "inline"], ["type", "text", "id", "pretime", "placeholder", "Preloading time", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat", "convertModelValue"], [1, "form-group", "overflow-auto"], ["type", "text", "id", "inlinecalendar", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "altInput", "convertModelValue", "inline"]], template: function DatetimepickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic Date picker ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue, $event) || (ctx.basicDemoValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "div", 5);
        \u0275\u0275text(17, " Date picker With Time ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 7)(20, "div", 8)(21, "div", 9);
        \u0275\u0275element(22, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTimeValue, $event) || (ctx.dateTimeValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5);
        \u0275\u0275text(28, " Human Friendly dates ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 6)(30, "div", 7)(31, "div", 8)(32, "div", 9);
        \u0275\u0275element(33, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.modelValueAsDate, $event) || (ctx.modelValueAsDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(35, "div", 2)(36, "div", 3)(37, "div", 4)(38, "div", 5);
        \u0275\u0275text(39, " Date range picker ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 6)(41, "div", 7)(42, "div", 8)(43, "div", 9);
        \u0275\u0275element(44, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.rangeValue, $event) || (ctx.rangeValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(46, "div", 1)(47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "div", 5);
        \u0275\u0275text(51, " Basic Time picker ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 6)(53, "div", 7)(54, "div", 8)(55, "div", 9);
        \u0275\u0275element(56, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker, $event) || (ctx.timePicker = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(58, "div", 2)(59, "div", 3)(60, "div", 4)(61, "div", 5);
        \u0275\u0275text(62, " Time picker with 24hr Format ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 6)(64, "div", 7)(65, "div", 8)(66, "div", 9);
        \u0275\u0275element(67, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker1, $event) || (ctx.timePicker1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(69, "div", 2)(70, "div", 3)(71, "div", 4)(72, "div", 5);
        \u0275\u0275text(73, " Time Picker with Limits ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 6)(75, "div", 7)(76, "div", 8)(77, "div", 9);
        \u0275\u0275element(78, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_79_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker2, $event) || (ctx.timePicker2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(80, "div", 2)(81, "div", 3)(82, "div", 4)(83, "div", 5);
        \u0275\u0275text(84, " DateTimePicker with Limited Time Range ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 6)(86, "div", 7)(87, "div", 8)(88, "div", 9);
        \u0275\u0275element(89, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_90_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTimeValue, $event) || (ctx.dateTimeValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(91, "div", 1)(92, "div", 20)(93, "div", 1)(94, "div", 21)(95, "div", 3)(96, "div", 4)(97, "div", 5);
        \u0275\u0275text(98, " Date Picker with week numbers ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 6)(100, "div", 22)(101, "div", 8)(102, "div", 9);
        \u0275\u0275element(103, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_104_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.multiDates, $event) || (ctx.multiDates = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(105, "div", 21)(106, "div", 3)(107, "div", 4)(108, "div", 5);
        \u0275\u0275text(109, " Inline Time Picker ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 6)(111, "div", 22)(112, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_112_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker4, $event) || (ctx.timePicker4 = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 25);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_div_ngModelChange_113_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker4, $event) || (ctx.timePicker4 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(114, "div", 21)(115, "div", 3)(116, "div", 4)(117, "div", 5);
        \u0275\u0275text(118, " Preloading time ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 6)(120, "div", 22)(121, "div", 8)(122, "div", 9);
        \u0275\u0275element(123, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_124_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timePicker1, $event) || (ctx.timePicker1 = $event);
          return $event;
        })("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_124_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue1, $event) || (ctx.basicDemoValue1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(125, "div", 20)(126, "div", 3)(127, "div", 4)(128, "div", 5);
        \u0275\u0275text(129, " Inline Calendar ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 6)(131, "div", 27)(132, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_132_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.inlineDatePicker, $event) || (ctx.inlineDatePicker = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.basicDemoValue);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTimeValue);
        \u0275\u0275property("altInput", true)("convertModelValue", true)("enableTime", true);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.modelValueAsDate);
        \u0275\u0275property("altInput", true);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.rangeValue);
        \u0275\u0275property("altInput", true)("convertModelValue", true);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "h:i");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker1);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "H:i");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker2);
        \u0275\u0275property("noCalendar", true)("minTime", ctx.min)("maxTime", ctx.max)("enableTime", true)("dateFormat", "H:i");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTimeValue);
        \u0275\u0275property("minTime", ctx.min1)("maxTime", ctx.max1)("altInput", true)("convertModelValue", true)("enableTime", true);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.multiDates);
        \u0275\u0275property("altInput", true)("convertModelValue", true);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker4);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker4);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "H:i")("inline", true);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker1);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "H:i");
        \u0275\u0275twoWayProperty("ngModel", ctx.basicDemoValue1);
        \u0275\u0275property("convertModelValue", true);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.inlineDatePicker);
        \u0275\u0275property("altInput", true)("convertModelValue", true)("inline", true);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, MaterialModuleModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, MatDatepickerModule, FlatpickrModule, FlatpickrDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatetimepickerComponent, { className: "DatetimepickerComponent", filePath: "src\\app\\components\\forms\\form-elements\\datetimepicker\\datetimepicker.component.ts", lineNumber: 16 });
})();
export {
  DatetimepickerComponent
};
//# sourceMappingURL=datetimepicker.component-LJCR6TFM.js.map
