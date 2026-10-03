import {
  MatSelect,
  MatSelectModule
} from "./chunk-ZN2CT4H2.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-F6B7KXT2.js";
import {
  MatOption
} from "./chunk-CM5ST2VM.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  AppShowCodeDirective,
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

// src/app/components/forms/floating-labels/floating-labels.component.ts
var FloatingLabelsComponent = class _FloatingLabelsComponent {
  static {
    this.\u0275fac = function FloatingLabelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FloatingLabelsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloatingLabelsComponent, selectors: [["app-floating-labels"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 195, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Forms", "title", "Floating labels", "activeTitle", "Floating labels"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInput"], [1, "form-floating"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["type", "email", "readonly", "", "id", "floatingEmptyPlaintextInput", "placeholder", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingEmptyPlaintextInput"], ["type", "email", "readonly", "", "id", "floatingPlaintextInput", "placeholder", "name@example.com", "value", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingPlaintextInput"], [1, "form-floating", "my-3"], ["type", "email", "id", "floatingInputValue", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control"], ["for", "floatingInputValue"], [1, "form-floatin"], ["type", "email", "id", "floatingInputInvalid", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control", "is-invalid"], ["for", "floatingInputInvalid"], [1, "form-floating", "mb-4"], ["placeholder", "Leave a comment here", "id", "floatingTextarea", 1, "form-control"], ["for", "floatingTextarea"], ["placeholder", "Leave a comment here", "id", "floatingTextarea2", "rows", "1", "disabled", "", 1, "form-control"], ["for", "floatingTextarea2"], ["value", "one"], ["value", "two"], ["value", "three"], [1, "row", "g-2"], [1, "col-md"], ["type", "email", "id", "floatingInputGrid", "placeholder", "name@example.com", "value", "mdo@example.com", 1, "form-control"], ["for", "floatingInputGrid"], ["for", "floatingSelectGrid"], [1, "col-xl-12"], [1, "row", "gy-4"], [1, "col-xl-4"], [1, "form-floating", "mb-4", "floating-primary"], ["type", "email", "id", "floatingInputprimary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputprimary"], [1, "form-floating", "mb-4", "floating-secondary"], ["type", "email", "id", "floatingInputsecondary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsecondary"], [1, "form-floating", "mb-4", "floating-warning"], ["type", "email", "id", "floatingInputwarning", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputwarning"], [1, "form-floating", "mb-4", "floating-info"], ["type", "email", "id", "floatingInputinfo", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputinfo"], [1, "form-floating", "mb-4", "floating-success"], ["type", "email", "id", "floatingInputsuccess", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsuccess"], [1, "form-floating", "mb-4", "floating-danger"], ["type", "email", "id", "floatingInputdanger", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputdanger"]], template: function FloatingLabelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic Examples ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "input", 11);
        \u0275\u0275elementStart(14, "label", 12);
        \u0275\u0275text(15, "Email address");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275element(17, "input", 14);
        \u0275\u0275elementStart(18, "label", 15);
        \u0275\u0275text(19, "Password");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "pre", 17)(22, "code", 17);
        \u0275\u0275text(23, '<div class="form-floating mb-3">\n<input type="email" class="form-control" id="floatingInput"\nplaceholder="name@example.com">\n<label for="floatingInput">Email address</label>\n</div>\n<div class="form-floating">\n<input type="password" class="form-control" id="floatingPassword"\nplaceholder="Password">\n<label for="floatingPassword">Password</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5);
        \u0275\u0275text(28, " Readonly plain text ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 6)(30, "button", 7);
        \u0275\u0275text(31, "Show Code");
        \u0275\u0275element(32, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 9)(34, "div", 10);
        \u0275\u0275element(35, "input", 18);
        \u0275\u0275elementStart(36, "label", 19);
        \u0275\u0275text(37, "Empty input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13);
        \u0275\u0275element(39, "input", 20);
        \u0275\u0275elementStart(40, "label", 21);
        \u0275\u0275text(41, "Input with value");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 16)(43, "pre", 17)(44, "code", 17);
        \u0275\u0275text(45, '<div class="form-floating mb-3">\n<input type="email" readonly class="form-control-plaintext"\nid="floatingEmptyPlaintextInput" placeholder="name@example.com">\n<label for="floatingEmptyPlaintextInput">Empty input</label>\n</div>\n<div class="form-floating">\n<input type="email" readonly class="form-control-plaintext"\nid="floatingPlaintextInput" placeholder="name@example.com"\nvalue="name@example.com">\n<label for="floatingPlaintextInput">Input with value</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(46, "div", 1)(47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "div", 5);
        \u0275\u0275text(51, " Floating Labels With Pre Defined Values ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 6)(53, "button", 7);
        \u0275\u0275text(54, "Show Code");
        \u0275\u0275element(55, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 9)(57, "div", 22);
        \u0275\u0275element(58, "input", 23);
        \u0275\u0275elementStart(59, "label", 24);
        \u0275\u0275text(60, "Input with value");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 25);
        \u0275\u0275element(62, "input", 26);
        \u0275\u0275elementStart(63, "label", 27);
        \u0275\u0275text(64, "Invalid input");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 16)(66, "pre", 17)(67, "code", 17);
        \u0275\u0275text(68, '<div class="form-floating my-3">\n<input type="email" class="form-control" id="floatingInputValue"\nplaceholder="name@example.com" value="test@example.com">\n<label for="floatingInputValue">Input with value</label>\n</div>\n<div class="form-floatin">\n<input type="email" class="form-control is-invalid"\nid="floatingInputInvalid" placeholder="name@example.com"\nvalue="test@example.com">\n<label for="floatingInputInvalid">Invalid input</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "div", 2)(70, "div", 3)(71, "div", 4)(72, "div", 5);
        \u0275\u0275text(73, " Textareas ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 6)(75, "button", 7);
        \u0275\u0275text(76, "Show Code");
        \u0275\u0275element(77, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 9)(79, "div", 28);
        \u0275\u0275element(80, "textarea", 29);
        \u0275\u0275elementStart(81, "label", 30);
        \u0275\u0275text(82, "Description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 13);
        \u0275\u0275element(84, "textarea", 31);
        \u0275\u0275elementStart(85, "label", 32);
        \u0275\u0275text(86, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 16)(88, "pre", 17)(89, "code", 17);
        \u0275\u0275text(90, '<div class="form-floating mb-4">\n<textarea class="form-control" placeholder="Leave a comment here"\nid="floatingTextarea"></textarea>\n<label for="floatingTextarea">Description</label>\n</div>\n<div class="form-floating">\n<textarea class="form-control" placeholder="Leave a comment here"\nid="floatingTextarea2" rows="1" disabled></textarea>\n<label for="floatingTextarea2">Disabled</label>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(91, "div", 1)(92, "div", 2)(93, "div", 3)(94, "div", 4)(95, "div", 5);
        \u0275\u0275text(96, " Floating Labels In Select ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 6)(98, "button", 7);
        \u0275\u0275text(99, "Show Code");
        \u0275\u0275element(100, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "div", 9)(102, "div", 13)(103, "mat-form-field", 13)(104, "mat-label");
        \u0275\u0275text(105, "Works with selects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "mat-select")(107, "mat-option", 33);
        \u0275\u0275text(108, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-option", 34);
        \u0275\u0275text(110, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "mat-option", 35);
        \u0275\u0275text(112, "Three");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(113, "div", 16)(114, "pre", 17)(115, "code", 17);
        \u0275\u0275text(116, '<div class="form-floating">\n<select class="form-select" id="floatingSelect"\naria-label="Floating label select example">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n<label for="floatingSelect">Works with selects</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(117, "div", 2)(118, "div", 3)(119, "div", 4)(120, "div", 5);
        \u0275\u0275text(121, " Floating Labels With Layouts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 6)(123, "button", 7);
        \u0275\u0275text(124, "Show Code");
        \u0275\u0275element(125, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 9)(127, "div", 36)(128, "div", 37)(129, "div", 13);
        \u0275\u0275element(130, "input", 38);
        \u0275\u0275elementStart(131, "label", 39);
        \u0275\u0275text(132, "Email address");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(133, "div", 37)(134, "div", 13)(135, "mat-form-field")(136, "mat-label", 40);
        \u0275\u0275text(137, "Works with selects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "mat-select")(139, "mat-option", 33);
        \u0275\u0275text(140, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "mat-option", 34);
        \u0275\u0275text(142, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "mat-option", 35);
        \u0275\u0275text(144, "Three");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(145, "div", 16)(146, "pre", 17)(147, "code", 17);
        \u0275\u0275text(148, '<div class="row g-2">\n<div class="col-md">\n<div class="form-floating">\n<input type="email" class="form-control" id="floatingInputGrid"\nplaceholder="name@example.com" value="mdo@example.com">\n<label for="floatingInputGrid">Email address</label>\n</div>\n</div>\n<div class="col-md">\n<div class="form-floating">\n<select class="form-select" id="floatingSelectGrid">\n<option selected>Open this select menu</option>\n<option value="1">One</option>\n<option value="2">Two</option>\n<option value="3">Three</option>\n</select>\n<label for="floatingSelectGrid">Works with selects</label>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(149, "div", 1)(150, "div", 41)(151, "div", 3)(152, "div", 4)(153, "div", 5);
        \u0275\u0275text(154, " Floating Label Colors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 6)(156, "button", 7);
        \u0275\u0275text(157, "Show Code");
        \u0275\u0275element(158, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "div", 9)(160, "div", 42)(161, "div", 43)(162, "div", 44);
        \u0275\u0275element(163, "input", 45);
        \u0275\u0275elementStart(164, "label", 46);
        \u0275\u0275text(165, "primary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "div", 43)(167, "div", 47);
        \u0275\u0275element(168, "input", 48);
        \u0275\u0275elementStart(169, "label", 49);
        \u0275\u0275text(170, "secondary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "div", 43)(172, "div", 50);
        \u0275\u0275element(173, "input", 51);
        \u0275\u0275elementStart(174, "label", 52);
        \u0275\u0275text(175, "warning");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(176, "div", 43)(177, "div", 53);
        \u0275\u0275element(178, "input", 54);
        \u0275\u0275elementStart(179, "label", 55);
        \u0275\u0275text(180, "info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(181, "div", 43)(182, "div", 56);
        \u0275\u0275element(183, "input", 57);
        \u0275\u0275elementStart(184, "label", 58);
        \u0275\u0275text(185, "success");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 43)(187, "div", 59);
        \u0275\u0275element(188, "input", 60);
        \u0275\u0275elementStart(189, "label", 61);
        \u0275\u0275text(190, "danger");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(191, "div", 16)(192, "pre", 17)(193, "code", 17);
        \u0275\u0275text(194, '<div class="row gy-4">\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-primary">\n<input type="email" class="form-control" id="floatingInputprimary" placeholder="name@example.com">\n<label for="floatingInputprimary">primary</label>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-secondary">\n<input type="email" class="form-control" id="floatingInputsecondary" placeholder="name@example.com">\n<label for="floatingInputsecondary">secondary</label>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-warning">\n<input type="email" class="form-control" id="floatingInputwarning" placeholder="name@example.com">\n<label for="floatingInputwarning">warning</label>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-info">\n<input type="email" class="form-control" id="floatingInputinfo" placeholder="name@example.com">\n<label for="floatingInputinfo">info</label>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-success">\n<input type="email" class="form-control" id="floatingInputsuccess" placeholder="name@example.com">\n<label for="floatingInputsuccess">success</label>\n</div>\n</div>\n<div class="col-xl-4">\n<div class="form-floating mb-4 floating-danger">\n<input type="email" class="form-control" id="floatingInputdanger" placeholder="name@example.com">\n<label for="floatingInputdanger">danger</label>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgSelectModule, MatFormFieldModule, MatFormField, MatLabel, MatSelectModule, MatSelect, MatOption] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatingLabelsComponent, { className: "FloatingLabelsComponent", filePath: "src\\app\\components\\forms\\floating-labels\\floating-labels.component.ts", lineNumber: 14 });
})();
export {
  FloatingLabelsComponent
};
//# sourceMappingURL=floating-labels.component-7YV7C6OL.js.map
