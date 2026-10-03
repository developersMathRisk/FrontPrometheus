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
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BKD3PXJL.js";
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

// src/app/components/forms/form-elements/inputs/inputs.component.ts
var InputsComponent = class _InputsComponent {
  constructor() {
    this.timePicker = null;
    this.dateTimeValue = /* @__PURE__ */ new Date();
  }
  static {
    this.\u0275fac = function InputsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputsComponent, selectors: [["app-inputs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 326, vars: 0, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Inputs", "activeTitle", "Inputs"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "row", "gy-4"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], ["for", "input-label", 1, "form-label"], ["type", "text", "id", "input", 1, "form-control"], ["type", "text", "id", "input-label", 1, "form-control"], ["for", "input-placeholder", 1, "form-label"], ["type", "text", "id", "input-placeholder", "placeholder", "Placeholder", 1, "form-control"], ["for", "input-text", 1, "form-label"], ["type", "text", "id", "input-text", "placeholder", "Text", 1, "form-control"], ["for", "input-number", 1, "form-label"], ["type", "number", "id", "input-number", "placeholder", "Number", 1, "form-control"], ["for", "input-password", 1, "form-label"], ["type", "password", "id", "input-password", "placeholder", "Password", 1, "form-control"], ["for", "input-email", 1, "form-label"], ["type", "email", "id", "input-email", "placeholder", "Email@xyz.com", 1, "form-control"], ["for", "input-tel", 1, "form-label"], ["type", "tel", "id", "input-tel", "placeholder", "+1100-2031-1233", 1, "form-control"], ["for", "input-date", 1, "form-label"], ["type", "date", "id", "input-date", 1, "form-control"], ["for", "input-week", 1, "form-label"], ["type", "week", "id", "input-week", 1, "form-control"], ["for", "input-month", 1, "form-label"], ["type", "month", "id", "input-month", 1, "form-control"], ["for", "input-time", 1, "form-label"], ["type", "time", "id", "input-time", 1, "form-control"], ["for", "input-datetime-local", 1, "form-label"], ["type", "datetime-local", "id", "input-datetime-local", 1, "form-control"], ["for", "input-search", 1, "form-label"], ["type", "search", "id", "input-search", "placeholder", "Search", 1, "form-control"], ["for", "input-submit", 1, "form-label"], ["type", "submit", "id", "input-submit", "value", "Submit", 1, "form-control"], ["for", "input-reset", 1, "form-label"], ["type", "reset", "id", "input-reset", 1, "form-control"], ["for", "input-button", 1, "form-label"], ["type", "button", "id", "input-button", "value", "Button", 1, "form-control", "btn", "btn-primary"], [1, "row", "gap-2", "gap-xl-0"], [1, "col-xl-3"], [1, "form-label"], ["type", "color", "value", "#136bd0", 1, "form-control", "form-input-color"], [1, "col-xl-5"], [1, "form-check", "ps-xl-3", "ps-0"], [1, "mb-3", "px-0", "text-muted"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input", "ms-2"], [1, "col-xl-4"], ["type", "radio", "checked", "", 1, "form-check-input", "ms-2"], ["for", "input-file", 1, "form-label"], ["type", "file", "id", "input-file", 1, "form-control"], ["type", "url", "name", "website", "placeholder", "http://example.com", 1, "form-control"], ["for", "input-disabled", 1, "form-label"], ["type", "text", "id", "input-disabled", "placeholder", "Disabled input", "disabled", "", 1, "form-control"], ["for", "input-readonlytext", 1, "form-label"], ["type", "text", "readonly", "", "id", "input-readonlytext", "value", "email@example.com", 1, "form-control-plaintext"], ["for", "disabled-readonlytext", 1, "form-label"], ["type", "text", "value", "Disabled readonly input", "id", "disabled-readonlytext", "aria-label", "Disabled input example", "disabled", "", "readonly", "", 1, "form-control"], ["type", "text", "value", "Readonly input here...", "aria-label", "readonly input example", "readonly", "", 1, "form-control"], ["for", "text-area", 1, "form-label"], ["id", "text-area", "rows", "1", 1, "form-control"], ["for", "input-DataList", 1, "form-label"], ["list", "datalistOptions", "id", "input-DataList", "placeholder", "Type to search...", 1, "form-control"], ["id", "datalistOptions"], ["value", "San Francisco"], ["value", "New York"], ["value", "Seattle"], ["value", "Los Angeles"], ["value", "Chicago"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "col-xl-6"], [1, "row", "gy-3"], ["for", "input-noradius", 1, "form-label"], ["type", "text", "id", "input-noradius", "placeholder", "No Radius", 1, "form-control", "rounded-0"], ["for", "input-rounded", 1, "form-label"], ["type", "text", "id", "input-rounded", "placeholder", "Default Radius", 1, "form-control"], ["for", "input-rounded-pill", 1, "form-label"], ["type", "text", "id", "input-rounded-pill", "placeholder", "Rounded", 1, "form-control", "rounded-pill"], ["for", "input-rounded1", 1, "form-label"], ["type", "text", "id", "input-rounded1", "placeholder", "Default", 1, "form-control"], ["for", "input-rounded2", 1, "form-label"], ["type", "text", "id", "input-rounded2", "placeholder", "Dotted", 1, "form-control", "border-dotted"], ["for", "input-rounded3", 1, "form-label"], ["type", "text", "id", "input-rounded3", "placeholder", "Dashed", 1, "form-control", "border-dashed"], ["type", "text", "placeholder", ".form-control-sm", "aria-label", ".form-control-sm example", 1, "form-control", "form-control-sm", "mb-3"], ["type", "text", "placeholder", "Default input", "aria-label", "default input example", 1, "form-control", "mb-3"], ["type", "text", "placeholder", ".form-control-lg", "aria-label", ".form-control-lg example", 1, "form-control", "form-control-lg"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "inputPassword5", 1, "form-label"], ["type", "password", "id", "inputPassword5", "aria-describedby", "passwordHelpBlock", 1, "form-control"], ["id", "passwordHelpBlock", 1, "form-text"], [1, "text-danger"], [1, "row", "g-3", "align-items-center"], [1, "col-auto"], ["for", "inputPassword6", 1, "col-form-label"], ["type", "password", "id", "inputPassword6", "aria-describedby", "passwordHelpInline", 1, "form-control"], ["id", "passwordHelpInline", 1, "form-text"], ["disabled", ""], ["for", "disabledTextInput", 1, "form-label"], ["type", "text", "id", "disabledTextInput", "placeholder", "Disabled input", 1, "form-control"], ["for", "disabledSelect", 1, "form-label"], ["id", "disabledSelect", 1, "form-select"], [1, "form-check"], ["type", "checkbox", "id", "disabledFieldsetCheck", "disabled", "", 1, "form-check-input"], ["for", "disabledFieldsetCheck", 1, "form-check-label"]], template: function InputsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Input Types ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
        \u0275\u0275text(15, "Basic Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
        \u0275\u0275text(19, "Form Input With Label");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "label", 15);
        \u0275\u0275text(23, "Form Input With Placeholder");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 11)(26, "label", 17);
        \u0275\u0275text(27, "Type Text");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 11)(30, "label", 19);
        \u0275\u0275text(31, "Type Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11)(34, "label", 21);
        \u0275\u0275text(35, "Type Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 11)(38, "label", 23);
        \u0275\u0275text(39, "Type Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 11)(42, "label", 25);
        \u0275\u0275text(43, "Type Tel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 11)(46, "label", 27);
        \u0275\u0275text(47, "Type Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 11)(50, "label", 29);
        \u0275\u0275text(51, "Type Week");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 11)(54, "label", 31);
        \u0275\u0275text(55, "Type Month");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "input", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 11)(58, "label", 33);
        \u0275\u0275text(59, "Type Time");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "input", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 11)(62, "label", 35);
        \u0275\u0275text(63, "Type datetime-local");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 11)(66, "label", 37);
        \u0275\u0275text(67, "Type Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "input", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 11)(70, "label", 39);
        \u0275\u0275text(71, "Type Submit");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 11)(74, "label", 41);
        \u0275\u0275text(75, "Type Reset");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "input", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 11)(78, "label", 43);
        \u0275\u0275text(79, "Type Button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 11)(82, "div", 45)(83, "div", 46)(84, "label", 47);
        \u0275\u0275text(85, "Type Color");
        \u0275\u0275elementEnd();
        \u0275\u0275element(86, "input", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 49)(88, "div", 50)(89, "p", 51);
        \u0275\u0275text(90, "Type Checkbox");
        \u0275\u0275elementEnd();
        \u0275\u0275element(91, "input", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 53)(93, "div", 50)(94, "p", 51);
        \u0275\u0275text(95, "Type Radio");
        \u0275\u0275elementEnd();
        \u0275\u0275element(96, "input", 54);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "div", 11)(98, "label", 55);
        \u0275\u0275text(99, "Type File");
        \u0275\u0275elementEnd();
        \u0275\u0275element(100, "input", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 11)(102, "label", 47);
        \u0275\u0275text(103, "Type Url");
        \u0275\u0275elementEnd();
        \u0275\u0275element(104, "input", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 11)(106, "label", 58);
        \u0275\u0275text(107, "Type Disabled");
        \u0275\u0275elementEnd();
        \u0275\u0275element(108, "input", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 11)(110, "label", 60);
        \u0275\u0275text(111, "Input Readonly Text");
        \u0275\u0275elementEnd();
        \u0275\u0275element(112, "input", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 11)(114, "label", 62);
        \u0275\u0275text(115, "Disabled Readonly Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(116, "input", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 11)(118, "label", 47);
        \u0275\u0275text(119, "Type Readonly Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(120, "input", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 11)(122, "label", 65);
        \u0275\u0275text(123, "Textarea");
        \u0275\u0275elementEnd();
        \u0275\u0275element(124, "textarea", 66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 11)(126, "label", 67);
        \u0275\u0275text(127, "Datalist example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(128, "input", 68);
        \u0275\u0275elementStart(129, "datalist", 69);
        \u0275\u0275element(130, "option", 70)(131, "option", 71)(132, "option", 72)(133, "option", 73)(134, "option", 74);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "div", 75)(136, "pre", 76)(137, "code", 76);
        \u0275\u0275text(138, '<div class="row gy-4">\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<p class="mb-2 text-muted">Basic Input:</p>\n<input type="text" class="form-control" id="input">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-label" class="form-label">Form Input With Label</label>\n<input type="text" class="form-control" id="input-label">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-placeholder" class="form-label">Form Input With Placeholder</label>\n<input type="text" class="form-control" id="input-placeholder" placeholder="Placeholder">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-text" class="form-label">Type Text</label>\n<input type="text" class="form-control" id="input-text" placeholder="Text">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-number" class="form-label">Type Number</label>\n<input type="number" class="form-control" id="input-number" placeholder="Number">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-password" class="form-label">Type Password</label>\n<input type="password" class="form-control" id="input-password" placeholder="Password">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-email" class="form-label">Type Email</label>\n<input type="email" class="form-control" id="input-email" placeholder="Email@xyz.com">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-tel" class="form-label">Type Tel</label>\n<input type="tel" class="form-control" id="input-tel" placeholder="+1100-2031-1233">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-date" class="form-label">Type Date</label>\n<input type="date" class="form-control" id="input-date">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-week" class="form-label">Type Week</label>\n<input type="week" class="form-control" id="input-week">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-month" class="form-label">Type Month</label>\n<input type="month" class="form-control" id="input-month">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-time" class="form-label">Type Time</label>\n<input type="time" class="form-control" id="input-time">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-datetime-local" class="form-label">Type datetime-local</label>\n<input type="datetime-local" class="form-control" id="input-datetime-local">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-search" class="form-label">Type Search</label>\n<input type="search" class="form-control" id="input-search" placeholder="Search">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-submit" class="form-label">Type Submit</label>\n<input type="submit" class="form-control" id="input-submit" value="Submit">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-reset" class="form-label">Type Reset</label>\n<input type="reset" class="form-control" id="input-reset">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-button" class="form-label">Type Button</label>\n<input type="button" class="form-control btn btn-primary" id="input-button"  value="Button">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<div class="row">\n<div class="col-xl-4">\n<label class="form-label">Type Color</label>\n<input class="form-control form-input-color" type="color" value="#136bd0">\n</div>\n<div class="col-xl-4">\n<div class="form-check">\n<p class="mb-3 px-0 text-muted">Type Checkbox</p>\n<input class="form-check-input ms-2" type="checkbox" value="" checked>\n</div>\n</div>\n<div class="col-xl-3">\n<div class="form-check">\n<p class="mb-3 px-0 text-muted">Type Radio</p>\n<input class="form-check-input ms-2" type="radio" checked>\n</div>\n</div>\n</div>\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-file" class="form-label">Type File</label>\n<input class="form-control" type="file" id="input-file">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label class="form-label">Type Url</label>\n<input class="form-control" type="url"  name="website" placeholder="http://example.com">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-disabled" class="form-label">Type Disabled</label>\n<input type="text" id="input-disabled" class="form-control" placeholder="Disabled input" disabled>\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-readonlytext" class="form-label">Input Readonly Text</label>\n<input type="text" readonly class="form-control-plaintext" id="input-readonlytext" value="email@example.com">\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="disabled-readonlytext" class="form-label">Disabled Readonly Input</label>\n<input class="form-control" type="text" value="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled readonly>\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label class="form-label">Type Readonly Input</label>\n<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="text-area" class="form-label">Textarea</label>\n<textarea class="form-control" id="text-area" rows="1"></textarea>\n</div>\n<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">\n<label for="input-DataList" class="form-label">Datalist example</label>\n<input class="form-control" list="datalistOptions" id="input-DataList" placeholder="Type to search...">\n<datalist id="datalistOptions">\n<option value="San Francisco">\n</option>\n<option value="New York">\n</option>\n<option value="Seattle">\n</option>\n<option value="Los Angeles">\n</option>\n<option value="Chicago">\n</option>\n</datalist>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(139, "div", 1)(140, "div", 77)(141, "div", 3)(142, "div", 4)(143, "div", 5);
        \u0275\u0275text(144, " Input shapes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 6)(146, "button", 7);
        \u0275\u0275text(147, "Show Code");
        \u0275\u0275element(148, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "div", 9)(150, "div", 78)(151, "div", 2)(152, "label", 79);
        \u0275\u0275text(153, "Input With No Radius");
        \u0275\u0275elementEnd();
        \u0275\u0275element(154, "input", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 2)(156, "label", 81);
        \u0275\u0275text(157, "Input With Radius");
        \u0275\u0275elementEnd();
        \u0275\u0275element(158, "input", 82);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 2)(160, "label", 83);
        \u0275\u0275text(161, "Rounded Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(162, "input", 84);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "div", 75)(164, "pre", 76)(165, "code", 76);
        \u0275\u0275text(166, '<div class="row gy-3">\n<div class="col-xl-12">\n<label for="input-noradius" class="form-label">Input With No Radius</label>\n<input type="text" class="form-control rounded-0" id="input-noradius" placeholder="No Radius">\n</div>\n<div class="col-xl-12">\n<label for="input-rounded" class="form-label">Input With Radius</label>\n<input type="text" class="form-control" id="input-rounded" placeholder="Default Radius">\n</div>\n<div class="col-xl-12">\n<label for="input-rounded-pill" class="form-label">Rounded Input</label>\n<input type="text" class="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded">\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(167, "div", 77)(168, "div", 3)(169, "div", 4)(170, "div", 5);
        \u0275\u0275text(171, " Input border Styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div", 6)(173, "button", 7);
        \u0275\u0275text(174, "Show Code");
        \u0275\u0275element(175, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(176, "div", 9)(177, "div", 78)(178, "div", 2)(179, "label", 85);
        \u0275\u0275text(180, "Default");
        \u0275\u0275elementEnd();
        \u0275\u0275element(181, "input", 86);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 2)(183, "label", 87);
        \u0275\u0275text(184, "Dotted Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(185, "input", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 2)(187, "label", 89);
        \u0275\u0275text(188, "Dashed Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(189, "input", 90);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(190, "div", 75)(191, "pre", 76)(192, "code", 76);
        \u0275\u0275text(193, '<div class="row gy-3">\n<div class="col-xl-12">\n<label for="input-rounded1" class="form-label">Default</label>\n<input type="text" class="form-control" id="input-rounded1" placeholder="Default">\n</div>\n<div class="col-xl-12">\n<label for="input-rounded2" class="form-label">Dotted Input</label>\n<input type="text" class="form-control border-dotted" id="input-rounded2" placeholder="Dotted">\n</div>\n<div class="col-xl-12">\n<label for="input-rounded3" class="form-label">Dashed Input</label>\n<input type="text" class="form-control border-dashed" id="input-rounded3" placeholder="Dashed">\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(194, "div", 1)(195, "div", 2)(196, "div", 3)(197, "div", 4)(198, "div", 5);
        \u0275\u0275text(199, " Input Sizing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "div", 6)(201, "button", 7);
        \u0275\u0275text(202, "Show Code");
        \u0275\u0275element(203, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(204, "div", 9);
        \u0275\u0275element(205, "input", 91)(206, "input", 92)(207, "input", 93);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 75)(209, "pre", 76)(210, "code", 76);
        \u0275\u0275text(211, '<input class="form-control form-control-sm mb-3" type="text"\nplaceholder=".form-control-sm" aria-label=".form-control-sm example">\n<input class="form-control mb-3" type="text" placeholder="Default input"\naria-label="default input example">\n<input class="form-control form-control-lg" type="text"\nplaceholder=".form-control-lg" aria-label=".form-control-lg example">');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(212, "div", 1)(213, "div", 77)(214, "div", 3)(215, "div", 4)(216, "div", 5);
        \u0275\u0275text(217, " Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "div", 6)(219, "button", 7);
        \u0275\u0275text(220, "Show Code");
        \u0275\u0275element(221, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(222, "div", 9)(223, "form")(224, "div", 94)(225, "label", 95);
        \u0275\u0275text(226, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(227, "input", 96);
        \u0275\u0275elementStart(228, "div", 97);
        \u0275\u0275text(229, "We'll never share your email with anyone else.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(230, "div", 94)(231, "label", 98);
        \u0275\u0275text(232, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(233, "input", 99);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 100);
        \u0275\u0275element(235, "input", 101);
        \u0275\u0275elementStart(236, "label", 102);
        \u0275\u0275text(237, "Check me out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "button", 103);
        \u0275\u0275text(239, "Submit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(240, "div", 75)(241, "pre", 76)(242, "code", 76);
        \u0275\u0275text(243, `<form>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email
address</label>
<input type="email" class="form-control" id="exampleInputEmail1"
aria-describedby="emailHelp">
<div id="emailHelp" class="form-text">We'll
never share your email
with
anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1">
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check
me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(244, "div", 77)(245, "div", 1)(246, "div", 2)(247, "div", 3)(248, "div", 4)(249, "div", 5);
        \u0275\u0275text(250, " Form text ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 6)(252, "button", 7);
        \u0275\u0275text(253, "Show Code");
        \u0275\u0275element(254, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(255, "div", 9)(256, "label", 104);
        \u0275\u0275text(257, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(258, "input", 105);
        \u0275\u0275elementStart(259, "div", 106);
        \u0275\u0275text(260, " Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "div", 75)(262, "pre", 76)(263, "code", 76);
        \u0275\u0275text(264, '<label for="inputPassword5" class="form-label">Password</label>\n<input type="password" id="inputPassword5" class="form-control"\naria-describedby="passwordHelpBlock">\n<div id="passwordHelpBlock" class="form-text">\nYour password must be 8-20 characters long, contain letters and\nnumbers,\nand\nmust not contain spaces, special characters, or emoji.\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(265, "div", 2)(266, "div", 3)(267, "div", 4)(268, "div", 5);
        \u0275\u0275text(269, " Inline text can use any typical inline HTML element with nothing more than the ");
        \u0275\u0275elementStart(270, "span", 107);
        \u0275\u0275text(271, ".form-text");
        \u0275\u0275elementEnd();
        \u0275\u0275text(272, " class. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 6)(274, "button", 7);
        \u0275\u0275text(275, "Show Code");
        \u0275\u0275element(276, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(277, "div", 9)(278, "div", 108)(279, "div", 109)(280, "label", 110);
        \u0275\u0275text(281, "Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(282, "div", 109);
        \u0275\u0275element(283, "input", 111);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "div", 109)(285, "span", 112);
        \u0275\u0275text(286, " Must be 8-20 characters long. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(287, "div", 75)(288, "pre", 76)(289, "code", 76);
        \u0275\u0275text(290, '<div class="row g-3 align-items-center">\n<div class="col-auto">\n<label for="inputPassword6" class="col-form-label">Password</label>\n</div>\n<div class="col-auto">\n<input type="password" id="inputPassword6" class="form-control"\naria-describedby="passwordHelpInline">\n</div>\n<div class="col-auto">\n<span id="passwordHelpInline" class="form-text">\nMust be 8-20 characters long.\n</span>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(291, "div", 77)(292, "div", 3)(293, "div", 4)(294, "div", 5);
        \u0275\u0275text(295, " Disabled forms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "div", 6)(297, "button", 7);
        \u0275\u0275text(298, "Show Code");
        \u0275\u0275element(299, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(300, "div", 9)(301, "form")(302, "fieldset", 113)(303, "legend");
        \u0275\u0275text(304, "Disabled fieldset example");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "div", 94)(306, "label", 114);
        \u0275\u0275text(307, "Disabled input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(308, "input", 115);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "div", 94)(310, "label", 116);
        \u0275\u0275text(311, "Disabled select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "select", 117)(313, "option");
        \u0275\u0275text(314, "Disabled select");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(315, "div", 94)(316, "div", 118);
        \u0275\u0275element(317, "input", 119);
        \u0275\u0275elementStart(318, "label", 120);
        \u0275\u0275text(319, " Can't check this ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(320, "button", 103);
        \u0275\u0275text(321, "Submit");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(322, "div", 75)(323, "pre", 76)(324, "code", 76);
        \u0275\u0275text(325, `<form>
<fieldset disabled>
<legend>Disabled fieldset example</legend>
<div class="mb-3">
<label for="disabledTextInput" class="form-label">Disabled
input</label>
<input type="text" id="disabledTextInput" class="form-control"
placeholder="Disabled input">
</div>
<div class="mb-3">
<label for="disabledSelect" class="form-label">Disabled select
menu</label>
<select id="disabledSelect" class="form-select">
<option>Disabled select</option>
</select>
</div>
<div class="mb-3">
<div class="form-check">
<input class="form-check-input" type="checkbox"
id="disabledFieldsetCheck" disabled>
<label class="form-check-label" for="disabledFieldsetCheck">
Can't check this
</label>
</div>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</fieldset>
</form>`);
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, FormsModule, NgForm] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputsComponent, { className: "InputsComponent", filePath: "src\\app\\components\\forms\\form-elements\\inputs\\inputs.component.ts", lineNumber: 13 });
})();
export {
  InputsComponent
};
//# sourceMappingURL=inputs.component-OHOQL5JF.js.map
