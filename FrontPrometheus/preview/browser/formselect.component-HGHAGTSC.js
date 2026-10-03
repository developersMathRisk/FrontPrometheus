import {
  NgOptgroupTemplateDirective,
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/form-elements/formselect/formselect.component.ts
var _c0 = () => [];
function FormselectComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    \u0275\u0275textInterpolate1(" ", item_r1.country || "Unnamed group", " ");
  }
}
function FormselectComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, " Only values matching specific conditions can be added ");
    \u0275\u0275elementEnd();
  }
}
var FormselectComponent = class _FormselectComponent {
  constructor() {
    this.companies = [];
    this.companiesNames = ["Uber", "Microsoft", "Flexigen"];
    this.selectedMonth = "6";
    this.selectedAccount = "AZ";
    this.email = "abc@hotmail.com";
    this.emailFormControl = new FormControl("", [
      Validators.required,
      Validators.email
    ]);
    this.uniqueOptions = ["child1", "child2"];
    this.accounts = [
      {
        name: "Arizona",
        value: "AZ",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Colorado",
        value: "CO",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Idaho",
        value: "ID",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Montana",
        value: "MT",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Nebraska",
        value: "NE",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "New Mexico",
        value: "NM",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "North Dakota",
        value: "AZ",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Utah",
        value: "UT",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Wyoming",
        value: "WY",
        country: "Mountain Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Alabama",
        value: "AL",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Arkansas",
        value: "AR",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Illinois",
        value: "IL",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Iowa",
        value: "IA",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Kansas",
        value: "KS",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Kentucky",
        value: "KY",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Louisiana",
        value: "LA",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Minnesota",
        value: "MN",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Mississippi",
        value: "MS",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Missouri",
        value: "MO",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Oklahoma",
        value: "OK",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "South Dakota",
        value: "SD",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Texas",
        value: "TX",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Tennessee",
        value: "TN",
        country: "Central Time Zone",
        child: { state: "Active" }
      },
      {
        name: "Wisconsin",
        value: "WI",
        country: "Central Time Zone",
        child: { state: "Active" }
      }
    ];
    this.selectedAccounts = [{ name: "Adam" }];
    this.compareAccounts = (item, selected) => {
      if (selected.country && item.country) {
        return item.country === selected.country;
      }
      if (item.name && selected.name) {
        return item.name === selected.name;
      }
      return false;
    };
    this.hideselectedAccounts = [{ name: "Adam" }];
    this.hidecompareAccounts = (item, selected) => {
      if (selected.country && item.country) {
        return item.country === selected.country;
      }
      if (item.name && selected.name) {
        return item.name === selected.name;
      }
      return false;
    };
    this.selectedUniqueValue = ["child-1", "child-2"];
    this.selectedgroup = "Adam";
    this.groups = [
      { name: "Adam", email: "adam@email.com", age: 12, country: "United States", child: { state: "Active" } },
      { name: "Homer", email: "homer@email.com", age: 47, country: "", child: { state: "Active" } },
      { name: "Samantha", email: "samantha@email.com", age: 30, country: "United States", child: { state: "Active" } },
      { name: "Amalie", email: "amalie@email.com", age: 12, country: "Argentina", child: { state: "Active" } },
      { name: "Estefan\xEDa", email: "estefania@email.com", age: 21, country: "Argentina", child: { state: "Active" } },
      { name: "Adrian", email: "adrian@email.com", age: 21, country: "Ecuador", child: { state: "Active" } },
      { name: "Wladimir", email: "wladimir@email.com", age: 30, country: "Ecuador", child: { state: "Inactive" } },
      { name: "Natasha", email: "natasha@email.com", age: 54, country: "Ecuador", child: { state: "Inactive" } },
      { name: "Nicole", email: "nicole@email.com", age: 43, country: "Colombia", child: { state: "Inactive" } },
      { name: "Michael", email: "michael@email.com", age: 15, country: "Colombia", child: { state: "Inactive" } },
      { name: "Nicol\xE1s", email: "nicole@email.com", age: 43, country: "Colombia", child: { state: "Inactive" } }
    ];
    this.showattributeName = [{ name: "one" }];
    this.MultipleAttribute = (item, selected) => {
      if (selected.country && item.country) {
        return item.country === selected.country;
      }
      if (item.name && selected.name) {
        return item.name === selected.name;
      }
      return false;
    };
  }
  ngOnInit() {
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });
  }
  addTagFn(name) {
    return { name, tag: true };
  }
  static {
    this.\u0275fac = function FormselectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormselectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormselectComponent, selectors: [["app-formselect"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 299, vars: 26, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Form Select", "activeTitle", "Form Select"], [1, "fw-semibold", "mb-2"], [1, "row"], [1, "col-xl-6"], [1, "col-xl-12"], [1, "card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "card-title"], [1, "card-body"], ["bindLabel", "month", "placeholder", "Select month", 1, "", 3, "multiple", "hideSelected", "closeOnSelect", "searchable"], ["value", "Choice 1", "selected", ""], ["value", "Choice 2"], ["value", "Choice 3"], ["value", "Choice 4", "disabled", ""], [1, "fw-semibold", "m-2"], ["bindLabel", "name", "groupBy", "country", 1, "", 3, "ngModelChange", "items", "multiple", "closeOnSelect", "selectableGroup", "selectableGroupAsModel", "compareWith", "ngModel"], ["ng-optgroup-tmp", ""], [1, "card-header"], ["bindLabel", "name", 1, "", 3, "ngModelChange", "items", "addTag", "hideSelected", "multiple", "ngModel"], ["name", "choices-single-no-search", "id", "choices-single-no-search", "placeholder", "Label One", 1, "p-0"], ["placeholder", "Select", "data-trigger", "", "name", "choices-single-default", "id", "choices-single-default", 1, ""], ["value", ""], ["value", "Choice 1"], ["placeholder", "Choose a city", "data-trigger", "", "name", "choices-single-groups", "id", "choices-single-groups", 1, ""], ["label", "UK"], ["value", "London"], ["value", "Manchester"], ["value", "Liverpool"], ["label", "FR"], ["value", "Paris"], ["value", "Lyon"], ["value", "Marseille"], ["label", "DE", "disabled", ""], ["value", "Hamburg"], ["value", "Munich"], ["value", "Berlin"], ["label", "US"], ["value", "New York"], ["value", "Washington", "disabled", ""], ["value", "Michigan"], ["label", "SP"], ["value", "Madrid"], ["value", "Barcelona"], ["value", "Malaga"], ["label", "CA"], ["value", "Montreal"], ["value", "Toronto"], ["value", "Vancouver"], ["id", "choices-text-email-filter", "type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "formControl"], [1, "text-danger"], [1, "p-0", 3, "ngModelChange", "items", "ngModel", "addTag", "multiple", "selectOnTab", "isOpen"], [1, "col-xl-4"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], ["aria-label", "Default select example", "placeholder", "Open this select menu", 1, ""], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["aria-label", "Disabled select example", "disabled", "", 1, "form-select"], ["placeholder", "Open this select menu", "aria-label", "Default select example", 1, "rounded-select", "rounded-pill"], ["multiple", "", "aria-label", "multiple select example", 1, "form-select"], ["size", "4", "aria-label", "size 3 select example", 1, "form-select"], ["value", "4"], ["value", "5"], ["aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm", "mb-3"], ["aria-label", "Default select", 1, "form-select", "mb-3"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg"]], template: function FormselectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "h6", 1);
        \u0275\u0275text(2, "Choices:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 2)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h6", 7);
        \u0275\u0275text(10, "Multiple Select");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "p", 1);
        \u0275\u0275text(13, "Default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "ng-select", 9)(15, "ng-option", 10);
        \u0275\u0275text(16, "Choice 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ng-option", 11);
        \u0275\u0275text(18, "Choice 4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "ng-option", 12);
        \u0275\u0275text(20, "Choice 5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ng-option", 13);
        \u0275\u0275text(22, "Choice 6");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "p", 14);
        \u0275\u0275text(24, "Option groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ng-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function FormselectComponent_Template_ng_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedAccounts, $event) || (ctx.selectedAccounts = $event);
          return $event;
        });
        \u0275\u0275template(26, FormselectComponent_ng_template_26_Template, 1, 1, "ng-template", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 4)(28, "div", 5)(29, "div", 17)(30, "div", 7);
        \u0275\u0275text(31, " Passing Through Options ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 8)(33, "ng-select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function FormselectComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCompanies, $event) || (ctx.selectedCompanies = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 4)(35, "div", 5)(36, "div", 17)(37, "div", 7);
        \u0275\u0275text(38, " Options added via config with no search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 8)(40, "ng-select", 19)(41, "ng-option");
        \u0275\u0275text(42, "Label Five");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ng-option");
        \u0275\u0275text(44, "Label Four");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "ng-option");
        \u0275\u0275text(46, "Label One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ng-option");
        \u0275\u0275text(48, "Label Six");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "ng-option");
        \u0275\u0275text(50, "Label Three");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ng-option");
        \u0275\u0275text(52, "Label Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "ng-option");
        \u0275\u0275text(54, "Label Zero");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(55, "div", 3)(56, "div", 2)(57, "div", 4)(58, "div", 5)(59, "div", 6)(60, "h6", 7);
        \u0275\u0275text(61, "Single Select");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 8)(63, "p", 1);
        \u0275\u0275text(64, "Default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "ng-select", 20)(66, "ng-option", 21);
        \u0275\u0275text(67, "This is a placeholder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "ng-option", 22);
        \u0275\u0275text(69, "Choice 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "ng-option", 11);
        \u0275\u0275text(71, "Choice 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "ng-option", 12);
        \u0275\u0275text(73, "Choice 3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "p", 14);
        \u0275\u0275text(75, "Option groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "ng-select", 23)(77, "ng-option", 21);
        \u0275\u0275text(78, "Choose a city");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "ng-option", 24)(80, "ng-option", 25);
        \u0275\u0275text(81, "London");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "ng-option", 26);
        \u0275\u0275text(83, "Manchester");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ng-option", 27);
        \u0275\u0275text(85, "Liverpool");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "ng-option", 28)(87, "ng-option", 29);
        \u0275\u0275text(88, "Paris");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "ng-option", 30);
        \u0275\u0275text(90, "Lyon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "ng-option", 31);
        \u0275\u0275text(92, "Marseille");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "ng-option", 32)(94, "ng-option", 33);
        \u0275\u0275text(95, "Hamburg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "ng-option", 34);
        \u0275\u0275text(97, "Munich");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "ng-option", 35);
        \u0275\u0275text(99, "Berlin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "ng-option", 36)(101, "ng-option", 37);
        \u0275\u0275text(102, "New York");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "ng-option", 38);
        \u0275\u0275text(104, "Washington");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "ng-option", 39);
        \u0275\u0275text(106, "Michigan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "ng-option", 40)(108, "ng-option", 41);
        \u0275\u0275text(109, "Madrid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "ng-option", 42);
        \u0275\u0275text(111, "Barcelona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "ng-option", 43);
        \u0275\u0275text(113, "Malaga");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "ng-option", 44)(115, "ng-option", 45);
        \u0275\u0275text(116, "Montreal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "ng-option", 46);
        \u0275\u0275text(118, "Toronto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "ng-option", 47);
        \u0275\u0275text(120, "Vancouver");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(121, "div", 4)(122, "div", 5)(123, "div", 17)(124, "div", 7);
        \u0275\u0275text(125, " Email Address Only ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 8)(127, "input", 48);
        \u0275\u0275twoWayListener("ngModelChange", function FormselectComponent_Template_input_ngModelChange_127_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(128, FormselectComponent_Conditional_128_Template, 2, 0, "div", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "div", 4)(130, "div", 5)(131, "div", 17)(132, "div", 7);
        \u0275\u0275text(133, " Passing Unique Values ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 8)(135, "ng-select", 50);
        \u0275\u0275twoWayListener("ngModelChange", function FormselectComponent_Template_ng_select_ngModelChange_135_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.uniqueOptions, $event) || (ctx.uniqueOptions = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(136, "div", 2)(137, "div", 51)(138, "div", 5)(139, "div", 52)(140, "div", 7);
        \u0275\u0275text(141, " Default Select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 53)(143, "button", 54);
        \u0275\u0275text(144, "Show Code");
        \u0275\u0275element(145, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "div", 8)(147, "ng-select", 56)(148, "ng-option", 57);
        \u0275\u0275text(149, "Open this select menu ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "ng-option", 58);
        \u0275\u0275text(151, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "ng-option", 59);
        \u0275\u0275text(153, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "ng-option", 60);
        \u0275\u0275text(155, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(156, "div", 61)(157, "pre", 62)(158, "code", 62);
        \u0275\u0275text(159, '<select class="form-select" aria-label="Default select example">\n<option selected>Open this select menu\n</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(160, "div", 51)(161, "div", 5)(162, "div", 52)(163, "div", 7);
        \u0275\u0275text(164, " Disabled Select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div", 53)(166, "button", 54);
        \u0275\u0275text(167, "Show Code");
        \u0275\u0275element(168, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(169, "div", 8)(170, "select", 63)(171, "option", 57);
        \u0275\u0275text(172, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "option", 58);
        \u0275\u0275text(174, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "option", 59);
        \u0275\u0275text(176, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "option", 60);
        \u0275\u0275text(178, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(179, "div", 61)(180, "pre", 62)(181, "code", 62);
        \u0275\u0275text(182, '<select class="form-select" aria-label="Disabled select example" disabled>\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(183, "div", 51)(184, "div", 5)(185, "div", 52)(186, "div", 7);
        \u0275\u0275text(187, " Rounded Select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 53)(189, "button", 54);
        \u0275\u0275text(190, "Show Code");
        \u0275\u0275element(191, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div", 8)(193, "ng-select", 64)(194, "ng-option", 57);
        \u0275\u0275text(195, "Open this select menu ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "ng-option", 58);
        \u0275\u0275text(197, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "ng-option", 59);
        \u0275\u0275text(199, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "ng-option", 60);
        \u0275\u0275text(201, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(202, "div", 61)(203, "pre", 62)(204, "code", 62);
        \u0275\u0275text(205, '<select class="form-select rounded-pill" aria-label="Default select example">\n<option selected>Open this select menu\n</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(206, "div", 2)(207, "div", 3)(208, "div", 5)(209, "div", 52)(210, "div", 7);
        \u0275\u0275text(211, " Multiple Attribute Select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "div", 53)(213, "button", 54);
        \u0275\u0275text(214, "Show Code");
        \u0275\u0275element(215, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "div", 8)(217, "select", 65)(218, "option", 57);
        \u0275\u0275text(219, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "option", 58);
        \u0275\u0275text(221, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "option", 59);
        \u0275\u0275text(223, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "option", 60);
        \u0275\u0275text(225, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(226, "div", 61)(227, "pre", 62)(228, "code", 62);
        \u0275\u0275text(229, '<select class="form-select" multiple aria-label="multiple select example">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(230, "div", 3)(231, "div", 5)(232, "div", 52)(233, "div", 7);
        \u0275\u0275text(234, " Using Size Attribute ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "div", 53)(236, "button", 54);
        \u0275\u0275text(237, "Show Code");
        \u0275\u0275element(238, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(239, "div", 8)(240, "select", 66)(241, "option", 57);
        \u0275\u0275text(242, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "option", 58);
        \u0275\u0275text(244, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "option", 59);
        \u0275\u0275text(246, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "option", 60);
        \u0275\u0275text(248, "Three");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "option", 67);
        \u0275\u0275text(250, "Four");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "option", 68);
        \u0275\u0275text(252, "Five");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(253, "div", 61)(254, "pre", 62)(255, "code", 62);
        \u0275\u0275text(256, '<select class="form-select" size="4" aria-label="size 3 select example">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n<option value="4">Four</option>\n<option value="5">Five</option>\n</select>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(257, "div", 2)(258, "div", 4)(259, "div", 5)(260, "div", 52)(261, "div", 7);
        \u0275\u0275text(262, " Select Sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "div", 53)(264, "button", 54);
        \u0275\u0275text(265, "Show Code");
        \u0275\u0275element(266, "i", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(267, "div", 8)(268, "select", 69)(269, "option", 57);
        \u0275\u0275text(270, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(271, "option", 58);
        \u0275\u0275text(272, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "option", 59);
        \u0275\u0275text(274, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "option", 60);
        \u0275\u0275text(276, "Three");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(277, "select", 70)(278, "option", 57);
        \u0275\u0275text(279, "Open this select menu ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(280, "option", 58);
        \u0275\u0275text(281, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "option", 59);
        \u0275\u0275text(283, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "option", 60);
        \u0275\u0275text(285, "Three");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(286, "select", 71)(287, "option", 57);
        \u0275\u0275text(288, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "option", 58);
        \u0275\u0275text(290, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "option", 59);
        \u0275\u0275text(292, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "option", 60);
        \u0275\u0275text(294, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(295, "div", 61)(296, "pre", 62)(297, "code", 62);
        \u0275\u0275text(298, '<select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select><select class="form-select mb-3" aria-label="Default select">\n<option selected>Open this select menu\n</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n<select class="form-select form-select-lg"\naria-label=".form-select-lg example">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("multiple", true)("hideSelected", true)("closeOnSelect", false)("searchable", false);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.accounts)("multiple", true)("closeOnSelect", false)("selectableGroup", true)("selectableGroupAsModel", false)("compareWith", ctx.compareAccounts);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAccounts);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.companies)("addTag", ctx.addTagFn)("hideSelected", true)("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCompanies);
        \u0275\u0275advance(94);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275property("formControl", ctx.emailFormControl);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.emailFormControl.hasError("email") && ctx.emailFormControl.touched ? 128 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", \u0275\u0275pureFunction0(25, _c0));
        \u0275\u0275twoWayProperty("ngModel", ctx.uniqueOptions);
        \u0275\u0275property("addTag", true)("multiple", true)("selectOnTab", true)("isOpen", false);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgSelectModule, NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, FormControlDirective], styles: ["\n\n  .dark .list-area {\n  background-color: rgb(var(--dark-bg)) !important;\n}\n  .dark .ng-dropdown-panel {\n  border-color: var(--tw-border-opacity);\n}\n  .pilled-selcect {\n  border-radius: 50px !important;\n}\n/*# sourceMappingURL=formselect.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormselectComponent, { className: "FormselectComponent", filePath: "src\\app\\components\\forms\\form-elements\\formselect\\formselect.component.ts", lineNumber: 15 });
})();
export {
  FormselectComponent
};
//# sourceMappingURL=formselect.component-HGHAGTSC.js.map
