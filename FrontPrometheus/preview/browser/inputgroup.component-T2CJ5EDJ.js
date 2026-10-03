import {
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
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

// src/app/components/forms/form-elements/inputgroup/inputgroup.component.ts
var InputgroupComponent = class _InputgroupComponent {
  constructor() {
    this.selectedSimpleItem = "Choose...";
    this.simpleItems = [];
    this.selectedSimpleItem1 = "Choose...";
    this.simpleItems1 = [];
    this.selectedSimpleItem3 = "Choose...";
    this.simpleItems3 = [];
    this.selectedSimpleItem4 = "Choose...";
    this.simpleItems4 = [];
  }
  ngOnInit() {
    this.simpleItems = ["Choose...", "one", "two", "three"];
    this.simpleItems1 = ["Choose...", "one", "two", "three"];
    this.simpleItems3 = ["Choose...", "one", "two", "three"];
    this.simpleItems4 = ["Choose...", "one", "two", "three"];
  }
  static {
    this.\u0275fac = function InputgroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputgroupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputgroupComponent, selectors: [["app-inputgroup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 431, vars: 0, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Input Group", "activeTitle", "Input Group"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "basic-url", 1, "form-label"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["type", "text", "placeholder", "Username", "aria-label", "Username", 1, "form-control"], ["type", "text", "placeholder", "Server", "aria-label", "Server", 1, "form-control"], [1, "input-group"], ["aria-label", "With textarea", 1, "form-control"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "input-group", "flex-nowrap"], ["id", "addon-wrapping", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "addon-wrapping", 1, "form-control"], [1, "col-xl-6"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-lg", 1, "form-control"], ["type", "button", "id", "button-addon1", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "", "aria-label", "Example text with button addon", "aria-describedby", "button-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", 1, "form-control"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "", "aria-label", "Example text with two button addons", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username with two button addons", 1, "form-control"], ["ngbDropdown", "", 1, "input-group", "mb-3"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["ngbDropdown", "", 1, "input-group", "input-btn-outline", "mb-3"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["ngbDropdown", "", 1, "input-group", "flex-nowrap"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary-transparent", "dropdown-toggle", "btn-sm"], ["type", "text", "aria-label", "Text input with 2 dropdown buttons", 1, "form-control"], ["ngbDropdown", ""], ["for", "inputGroupFile01", 1, "input-group-text"], ["type", "file", "id", "inputGroupFile01", 1, "form-control"], ["type", "file", "id", "inputGroupFile02", 1, "form-control"], ["for", "inputGroupFile02", 1, "input-group-text"], ["type", "button", "id", "inputGroupFileAddon03", 1, "btn", "btn-primary", "btn-sm"], ["type", "file", "id", "inputGroupFile03", "aria-describedby", "inputGroupFileAddon03", "aria-label", "Upload", 1, "form-control"], ["type", "file", "id", "inputGroupFile04", "aria-describedby", "inputGroupFileAddon04", "aria-label", "Upload", 1, "form-control"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-primary", "btn-sm"], ["type", "text", "aria-label", "First name", 1, "form-control"], ["type", "text", "aria-label", "Last name", 1, "form-control"], ["type", "checkbox", "value", "", "aria-label", "Checkbox for following text input", 1, "form-check-input", "mt-0"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "value", "", "aria-label", "Radio button for following text input", 1, "form-check-input", "mt-0"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], ["type", "text", "aria-label", "Text input with segmented dropdown button", 1, "form-control"], ["ngbDropdown", "", 1, "input-group"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "inputGroupSelect02", 1, "form-select"], ["for", "inputGroupSelect02", 1, "input-group-text"], ["id", "inputGroupSelect03", "aria-label", "Example select with button addon", 1, "form-select"], ["id", "inputGroupSelect04", "aria-label", "Example select with button addon", 1, "form-select"]], template: function InputgroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Input Groups ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "span", 11);
        \u0275\u0275text(14, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275element(17, "input", 13);
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19, "@example.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "label", 15);
        \u0275\u0275text(21, "Your vanity URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 10)(23, "span", 16);
        \u0275\u0275text(24, "https://example.com/users/");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 10)(27, "span", 18);
        \u0275\u0275text(28, "$");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 19);
        \u0275\u0275elementStart(30, "span", 18);
        \u0275\u0275text(31, ".00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 10);
        \u0275\u0275element(33, "input", 20);
        \u0275\u0275elementStart(34, "span", 18);
        \u0275\u0275text(35, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 22)(38, "span", 18);
        \u0275\u0275text(39, "With textarea");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "textarea", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 24)(42, "pre", 25)(43, "code", 25);
        \u0275\u0275text(44, `<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">@</span>
<input type="text" class="form-control" placeholder="Username"
aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username"
aria-label="Recipient's username" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
<span class="input-group-text"
id="basic-addon3">https://example.com/users/</span>
<input type="text" class="form-control" id="basic-url"
aria-describedby="basic-addon3">
</div>
<div class="input-group mb-3">
<span class="input-group-text">$</span>
<input type="text" class="form-control"
aria-label="Amount (to the nearest dollar)">
<span class="input-group-text">.00</span>
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Username"
aria-label="Username">
<span class="input-group-text">@</span>
<input type="text" class="form-control" placeholder="Server"
aria-label="Server">
</div>
<div class="input-group">
<span class="input-group-text">With textarea</span>
<textarea class="form-control" aria-label="With textarea"></textarea>
</div>`);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(45, "div", 1)(46, "div", 2)(47, "div", 3)(48, "div", 4)(49, "div", 5);
        \u0275\u0275text(50, " Warpping ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 6)(52, "button", 7);
        \u0275\u0275text(53, "Show Code");
        \u0275\u0275element(54, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 9)(56, "div", 26)(57, "span", 27);
        \u0275\u0275text(58, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "input", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 24)(61, "pre", 25)(62, "code", 25);
        \u0275\u0275text(63, '<div class="input-group flex-nowrap">\n<span class="input-group-text" id="addon-wrapping">@</span>\n<input type="text" class="form-control" placeholder="Username"\naria-label="Username" aria-describedby="addon-wrapping">\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(64, "div", 1)(65, "div", 29)(66, "div", 1)(67, "div", 2)(68, "div", 3)(69, "div", 4)(70, "div", 5);
        \u0275\u0275text(71, " Sizing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 6)(73, "button", 7);
        \u0275\u0275text(74, "Show Code");
        \u0275\u0275element(75, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 9)(77, "div", 30)(78, "span", 31);
        \u0275\u0275text(79, "Small");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "input", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 10)(82, "span", 33);
        \u0275\u0275text(83, "Default");
        \u0275\u0275elementEnd();
        \u0275\u0275element(84, "input", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 35)(86, "span", 36);
        \u0275\u0275text(87, "Large");
        \u0275\u0275elementEnd();
        \u0275\u0275element(88, "input", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 24)(90, "pre", 25)(91, "code", 25);
        \u0275\u0275text(92, '<div class="input-group input-group-sm mb-3">\n<span class="input-group-text" id="inputGroup-sizing-sm">Small</span>\n<input type="text" class="form-control"\naria-label="Sizing example input"\naria-describedby="inputGroup-sizing-sm">\n</div>\n<div class="input-group mb-3">\n<span class="input-group-text"\nid="inputGroup-sizing-default">Default</span>\n<input type="text" class="form-control"\naria-label="Sizing example input"\naria-describedby="inputGroup-sizing-default">\n</div>\n<div class="input-group input-group-lg">\n<span class="input-group-text" id="inputGroup-sizing-lg">Large</span>\n<input type="text" class="form-control"\naria-label="Sizing example input"\naria-describedby="inputGroup-sizing-lg">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 2)(94, "div", 3)(95, "div", 4)(96, "div", 5);
        \u0275\u0275text(97, " Buttons addons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 6)(99, "button", 7);
        \u0275\u0275text(100, "Show Code");
        \u0275\u0275element(101, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 9)(103, "div", 10)(104, "button", 38);
        \u0275\u0275text(105, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(106, "input", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 10);
        \u0275\u0275element(108, "input", 40);
        \u0275\u0275elementStart(109, "button", 41);
        \u0275\u0275text(110, "Button");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 10)(112, "button", 42);
        \u0275\u0275text(113, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "button", 42);
        \u0275\u0275text(115, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(116, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 22);
        \u0275\u0275element(118, "input", 44);
        \u0275\u0275elementStart(119, "button", 42);
        \u0275\u0275text(120, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "button", 42);
        \u0275\u0275text(122, "Button");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 24)(124, "pre", 25)(125, "code", 25);
        \u0275\u0275text(126, `<div class="input-group mb-3">
<button class="btn btn-primary" type="button"
id="button-addon1">Button</button>
<input type="text" class="form-control" placeholder=""
aria-label="Example text with button addon"
aria-describedby="button-addon1">
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username"
aria-label="Recipient's username" aria-describedby="button-addon2">
<button class="btn btn-primary" type="button"
id="button-addon2">Button</button>
</div>
<div class="input-group mb-3">
<button class="btn btn-primary" type="button">Button</button>
<button class="btn btn-primary" type="button">Button</button>
<input type="text" class="form-control" placeholder=""
aria-label="Example text with two button addons">
</div>
<div class="input-group">
<input type="text" class="form-control" placeholder="Recipient's username"
aria-label="Recipient's username with two button addons">
<button class="btn btn-primary" type="button">Button</button>
<button class="btn btn-primary" type="button">Button</button>
</div>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(127, "div", 2)(128, "div", 3)(129, "div", 4)(130, "div", 5);
        \u0275\u0275text(131, " Buttons with dropdowns ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 6)(133, "button", 7);
        \u0275\u0275text(134, "Show Code");
        \u0275\u0275element(135, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "div", 9)(137, "div", 45)(138, "button", 46);
        \u0275\u0275text(139, "Dropdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "ul", 47)(141, "li")(142, "a", 48);
        \u0275\u0275text(143, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "li")(145, "a", 48);
        \u0275\u0275text(146, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "li")(148, "a", 48);
        \u0275\u0275text(149, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "li");
        \u0275\u0275element(151, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li")(153, "a", 48);
        \u0275\u0275text(154, "Separated link");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(155, "input", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 51);
        \u0275\u0275element(157, "input", 50);
        \u0275\u0275elementStart(158, "button", 52);
        \u0275\u0275text(159, "Dropdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "ul", 53)(161, "li")(162, "a", 48);
        \u0275\u0275text(163, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "li")(165, "a", 48);
        \u0275\u0275text(166, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "li")(168, "a", 48);
        \u0275\u0275text(169, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275element(171, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "li")(173, "a", 48);
        \u0275\u0275text(174, "Separated link");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(175, "div", 54)(176, "button", 55);
        \u0275\u0275text(177, "Dropdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "ul", 47)(179, "li")(180, "a", 48);
        \u0275\u0275text(181, "Action before");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "li")(183, "a", 48);
        \u0275\u0275text(184, "Another action before");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "li")(186, "a", 48);
        \u0275\u0275text(187, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275element(189, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li")(191, "a", 48);
        \u0275\u0275text(192, "Separated link");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(193, "input", 56);
        \u0275\u0275elementStart(194, "div", 57)(195, "button", 55);
        \u0275\u0275text(196, "Dropdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "ul", 53)(198, "li")(199, "a", 48);
        \u0275\u0275text(200, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "li")(202, "a", 48);
        \u0275\u0275text(203, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "li")(205, "a", 48);
        \u0275\u0275text(206, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "li");
        \u0275\u0275element(208, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li")(210, "a", 48);
        \u0275\u0275text(211, "Separated link");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(212, "div", 24)(213, "pre", 25)(214, "code", 25);
        \u0275\u0275text(215, '<div class="input-group mb-3">\n<button class="btn btn-primary dropdown-toggle" type="button"\ndata-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>\n<ul class="dropdown-menu">\n<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n<input type="text" class="form-control"\naria-label="Text input with dropdown button">\n</div>\n<div class="input-group mb-3">\n<input type="text" class="form-control"\naria-label="Text input with dropdown button">\n<button class="btn btn-outline-primary dropdown-toggle" type="button"\ndata-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>\n<ul class="dropdown-menu dropdown-menu-end">\n<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n</div>\n<div class="input-group">\n<button class="btn btn-primary-transparent dropdown-toggle" type="button"\ndata-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>\n<ul class="dropdown-menu">\n<li><a class="dropdown-item" href="javascript:void(0);">Action before</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action before</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n<input type="text" class="form-control"\naria-label="Text input with 2 dropdown buttons">\n<button class="btn btn-primary-transparent dropdown-toggle" type="button"\ndata-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>\n<ul class="dropdown-menu dropdown-menu-end">\n<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(216, "div", 2)(217, "div", 3)(218, "div", 4)(219, "div", 5);
        \u0275\u0275text(220, " Custom file input ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "div", 6)(222, "button", 7);
        \u0275\u0275text(223, "Show Code");
        \u0275\u0275element(224, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "div", 9)(226, "div", 10)(227, "label", 58);
        \u0275\u0275text(228, "Upload");
        \u0275\u0275elementEnd();
        \u0275\u0275element(229, "input", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "div", 10);
        \u0275\u0275element(231, "input", 60);
        \u0275\u0275elementStart(232, "label", 61);
        \u0275\u0275text(233, "Upload");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "div", 10)(235, "button", 62);
        \u0275\u0275text(236, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(237, "input", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "div", 22);
        \u0275\u0275element(239, "input", 64);
        \u0275\u0275elementStart(240, "button", 65);
        \u0275\u0275text(241, "Button");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(242, "div", 24)(243, "pre", 25)(244, "code", 25);
        \u0275\u0275text(245, '<div class="input-group mb-3">\n<label class="input-group-text" for="inputGroupFile01">Upload</label>\n<input type="file" class="form-control" id="inputGroupFile01">\n</div>\n\n<div class="input-group mb-3">\n<input type="file" class="form-control" id="inputGroupFile02">\n<label class="input-group-text" for="inputGroupFile02">Upload</label>\n</div>\n\n<div class="input-group mb-3">\n<button class="btn btn-primary" type="button"\nid="inputGroupFileAddon03">Button</button>\n<input type="file" class="form-control" id="inputGroupFile03"\naria-describedby="inputGroupFileAddon03" aria-label="Upload">\n</div>\n\n<div class="input-group">\n<input type="file" class="form-control" id="inputGroupFile04"\naria-describedby="inputGroupFileAddon04" aria-label="Upload">\n<button class="btn btn-primary" type="button"\nid="inputGroupFileAddon04">Button</button>\n</div>');
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(246, "div", 29)(247, "div", 1)(248, "div", 2)(249, "div", 3)(250, "div", 4)(251, "div", 5);
        \u0275\u0275text(252, " Multiple inputs ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "div", 6)(254, "button", 7);
        \u0275\u0275text(255, "Show Code");
        \u0275\u0275element(256, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(257, "div", 9)(258, "div", 22)(259, "span", 18);
        \u0275\u0275text(260, "First and last name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(261, "input", 66)(262, "input", 67);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "div", 24)(264, "pre", 25)(265, "code", 25);
        \u0275\u0275text(266, '<div class="input-group">\n<span class="input-group-text">First and last name</span>\n<input type="text" aria-label="First name" class="form-control">\n<input type="text" aria-label="Last name" class="form-control">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(267, "div", 2)(268, "div", 3)(269, "div", 4)(270, "div", 5);
        \u0275\u0275text(271, " Checkboxes and radios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "div", 6)(273, "button", 7);
        \u0275\u0275text(274, "Show Code");
        \u0275\u0275element(275, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(276, "div", 9)(277, "div", 10)(278, "div", 18);
        \u0275\u0275element(279, "input", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275element(280, "input", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "div", 22)(282, "div", 18);
        \u0275\u0275element(283, "input", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275element(284, "input", 71);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div", 24)(286, "pre", 25)(287, "code", 25);
        \u0275\u0275text(288, '<div class="input-group mb-3">\n<div class="input-group-text">\n<input class="form-check-input mt-0" type="checkbox" value=""\naria-label="Checkbox for following text input">\n</div>\n<input type="text" class="form-control"\naria-label="Text input with checkbox">\n</div>\n<div class="input-group">\n<div class="input-group-text">\n<input class="form-check-input mt-0" type="radio" value=""\naria-label="Radio button for following text input">\n</div>\n<input type="text" class="form-control"\naria-label="Text input with radio button">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(289, "div", 2)(290, "div", 3)(291, "div", 4)(292, "div", 5);
        \u0275\u0275text(293, " Multiple addons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "div", 6)(295, "button", 7);
        \u0275\u0275text(296, "Show Code");
        \u0275\u0275element(297, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(298, "div", 9)(299, "div", 10)(300, "div", 18);
        \u0275\u0275element(301, "input", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275element(302, "input", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "div", 22)(304, "div", 18);
        \u0275\u0275element(305, "input", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275element(306, "input", 71);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "div", 24)(308, "pre", 25)(309, "code", 25);
        \u0275\u0275text(310, '<div class="input-group mb-3">\n<div class="input-group-text">\n<input class="form-check-input mt-0" type="checkbox" value=""\naria-label="Checkbox for following text input">\n</div>\n<input type="text" class="form-control"\naria-label="Text input with checkbox">\n</div>\n<div class="input-group">\n<div class="input-group-text">\n<input class="form-check-input mt-0" type="radio" value=""\naria-label="Radio button for following text input">\n</div>\n<input type="text" class="form-control"\naria-label="Text input with radio button">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(311, "div", 2)(312, "div", 3)(313, "div", 4)(314, "div", 5);
        \u0275\u0275text(315, " Segmented buttons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(316, "div", 6)(317, "button", 7);
        \u0275\u0275text(318, "Show Code");
        \u0275\u0275element(319, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(320, "div", 9)(321, "div", 45)(322, "button", 42);
        \u0275\u0275text(323, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(324, "button", 72)(325, "span", 73);
        \u0275\u0275text(326, "Toggle Dropdown");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(327, "ul", 47)(328, "li")(329, "a", 48);
        \u0275\u0275text(330, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(331, "li")(332, "a", 48);
        \u0275\u0275text(333, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(334, "li")(335, "a", 48);
        \u0275\u0275text(336, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(337, "li");
        \u0275\u0275element(338, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "li")(340, "a", 48);
        \u0275\u0275text(341, "Separated link");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(342, "input", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(343, "div", 75);
        \u0275\u0275element(344, "input", 74);
        \u0275\u0275elementStart(345, "button", 42);
        \u0275\u0275text(346, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(347, "button", 72)(348, "span", 73);
        \u0275\u0275text(349, "Toggle Dropdown");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(350, "ul", 53)(351, "li")(352, "a", 48);
        \u0275\u0275text(353, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(354, "li")(355, "a", 48);
        \u0275\u0275text(356, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(357, "li")(358, "a", 48);
        \u0275\u0275text(359, "Something else here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(360, "li");
        \u0275\u0275element(361, "hr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(362, "li")(363, "a", 48);
        \u0275\u0275text(364, "Separated link");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(365, "div", 24)(366, "pre", 25)(367, "code", 25);
        \u0275\u0275text(368, '<div class="input-group mb-3">\n<button type="button" class="btn btn-primary">Action</button>\n<button type="button"\nclass="btn btn-primary dropdown-toggle dropdown-toggle-split"\ndata-bs-toggle="dropdown" aria-expanded="false">\n<span class="visually-hidden">Toggle Dropdown</span>\n</button>\n<ul class="dropdown-menu">\n<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n<input type="text" class="form-control"\naria-label="Text input with segmented dropdown button">\n</div>\n<div class="input-group">\n<input type="text" class="form-control"\naria-label="Text input with segmented dropdown button">\n<button type="button" class="btn btn-primary">Action</button>\n<button type="button"\nclass="btn btn-primary dropdown-toggle dropdown-toggle-split"\ndata-bs-toggle="dropdown" aria-expanded="false">\n<span class="visually-hidden">Toggle Dropdown</span>\n</button>\n<ul class="dropdown-menu dropdown-menu-end">\n<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\n<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\n<li>\n<hr class="dropdown-divider">\n</li>\n<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>\n</ul>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(369, "div", 2)(370, "div", 3)(371, "div", 4)(372, "div", 5);
        \u0275\u0275text(373, " Custom select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "div", 6)(375, "button", 7);
        \u0275\u0275text(376, "Show Code");
        \u0275\u0275element(377, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(378, "div", 9)(379, "div", 10)(380, "label", 76);
        \u0275\u0275text(381, "Options");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(382, "select", 77)(383, "option", 78);
        \u0275\u0275text(384, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(385, "option", 79);
        \u0275\u0275text(386, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(387, "option", 80);
        \u0275\u0275text(388, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "option", 81);
        \u0275\u0275text(390, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(391, "div", 10)(392, "select", 82)(393, "option", 78);
        \u0275\u0275text(394, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "option", 79);
        \u0275\u0275text(396, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "option", 80);
        \u0275\u0275text(398, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(399, "option", 81);
        \u0275\u0275text(400, "Three");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(401, "label", 83);
        \u0275\u0275text(402, "Options");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(403, "div", 10)(404, "button", 42);
        \u0275\u0275text(405, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(406, "select", 84)(407, "option", 78);
        \u0275\u0275text(408, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "option", 79);
        \u0275\u0275text(410, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "option", 80);
        \u0275\u0275text(412, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(413, "option", 81);
        \u0275\u0275text(414, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(415, "div", 22)(416, "select", 85)(417, "option", 78);
        \u0275\u0275text(418, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(419, "option", 79);
        \u0275\u0275text(420, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "option", 80);
        \u0275\u0275text(422, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(423, "option", 81);
        \u0275\u0275text(424, "Three");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(425, "button", 42);
        \u0275\u0275text(426, "Button");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(427, "div", 24)(428, "pre", 25)(429, "code", 25);
        \u0275\u0275text(430, '<div class="input-group mb-3">\n<label class="input-group-text" for="inputGroupSelect01">Options</label>\n<select class="form-select" id="inputGroupSelect01">\n<option selected>Choose...</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n</div>\n<div class="input-group mb-3">\n<select class="form-select" id="inputGroupSelect02">\n<option selected>Choose...</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n<label class="input-group-text" for="inputGroupSelect02">Options</label>\n</div>\n<div class="input-group mb-3">\n<button class="btn btn-primary" type="button">Button</button>\n<select class="form-select" id="inputGroupSelect03"\naria-label="Example select with button addon">\n<option selected>Choose...</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n</div>\n<div class="input-group">\n<select class="form-select" id="inputGroupSelect04"\naria-label="Example select with button addon">\n<option selected>Choose...</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n<button class="btn btn-primary" type="button">Button</button>\n</div>');
        \u0275\u0275elementEnd()()()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgSelectModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, FormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputgroupComponent, { className: "InputgroupComponent", filePath: "src\\app\\components\\forms\\form-elements\\inputgroup\\inputgroup.component.ts", lineNumber: 14 });
})();
export {
  InputgroupComponent
};
//# sourceMappingURL=inputgroup.component-T2CJ5EDJ.js.map
