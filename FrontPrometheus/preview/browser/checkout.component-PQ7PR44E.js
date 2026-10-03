import {
  MatStep,
  MatStepper,
  MatStepperModule,
  MatStepperNext,
  MatStepperPrevious
} from "./chunk-VV4GJM7A.js";
import {
  MatInputModule
} from "./chunk-CRGZAC5F.js";
import "./chunk-4JAVGBFR.js";
import {
  MatFormFieldModule
} from "./chunk-F6B7KXT2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-KI24SFMQ.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import {
  BreakpointObserver
} from "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModal
} from "./chunk-JG564GD5.js";
import {
  FormBuilder,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  AsyncPipe,
  CommonModule,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/checkout/checkout.component.ts
var _c0 = () => ["/pages/ecommerce/products"];
var CheckoutComponent = class _CheckoutComponent {
  ngOnInit() {
    this.simpleItems = ["Alexgandria", "Fredrick", "Georgetown", "Rock Villa"];
    this.simpleItems1 = ["Alaska", "California", "Texas", "WashingTon Dc"];
  }
  constructor(modalService, _formBuilder, breakpointObserver) {
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this.selectedSimpleItem = "Georgetown";
    this.simpleItems = [];
    this.selectedSimpleItem1 = "Texas";
    this.simpleItems1 = [];
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ["", Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ["", Validators.required]
    });
    this.stepperOrientation = breakpointObserver.observe("(min-width: 800px)").pipe(map(({ matches }) => matches ? "horizontal" : "vertical"));
  }
  openBasic(basicModal) {
    this.modalService.open(basicModal);
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true
    });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BreakpointObserver));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 424, vars: 16, consts: [["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Checkout", "activeTitle", "Checkout"], [1, "row"], [1, "col-xl-9"], [1, "card"], [1, "card-body", "p-0", "product-checkout"], ["id", "myTab1", "role", "tablist", 1, "nav", "nav-tabs", "tab-style-2", "d-sm-flex", "d-block", "border-bottom", "border-block-end-dashed", "justify-content-between", 3, "orientation"], ["id", "order-tab", "role", "presentation", "label", "Shipping", 1, "nav-link", "ri-truck-line", 3, "stepControl"], [3, "formGroup"], ["id", "order-tab-pane", "role", "tabpanel", "aria-labelledby", "order-tab-pane", "tabindex", "0", 1, "tab-pane", "show", "active", "border-0", "p-0"], [1, "p-sm-4"], [1, "mb-1", "fw-semibold", "text-muted", "op-5", "fs-20"], [1, "fs-15", "fw-semibold", "d-sm-flex", "d-block", "align-items-center", "justify-content-between", "mb-3"], [1, "mt-sm-0", "mt-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modal-new-address", 1, "btn", "btn-primary", "btn-sm"], [1, "ri-add-line", "me-1", "align-middle", "fs-14", "fw-semibold", "d-inline-block"], ["id", "modal-new-address", "tabindex", "-1", "aria-labelledby", "modal-new-address", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "row", "gy-3"], [1, "col-xl-6"], ["for", "fullname-new", 1, "form-label"], ["type", "text", "id", "fullname-new", "placeholder", "Full Name", 1, "form-control"], ["for", "email-new", 1, "form-label"], ["type", "email", "id", "email-new", "placeholder", "email", 1, "form-control"], ["for", "phonenumber-new", 1, "form-label"], ["type", "number", "id", "phonenumber-new", "placeholder", "Phone", 1, "form-control"], ["for", "address-new", 1, "form-label"], ["type", "text", "id", "address-new", "placeholder", "Address", 1, "form-control"], [1, "col-xl-12"], [1, "col-xl-3"], ["for", "pincode-new", 1, "form-label"], ["type", "number", "id", "pincode-new", "placeholder", "pincode", 1, "form-control"], ["for", "city-new", 1, "form-label"], ["type", "text", "id", "city-new", "placeholder", "City", 1, "form-control"], ["for", "state-new", 1, "form-label"], ["type", "text", "id", "state-new", "placeholder", "State", 1, "form-control"], ["for", "country-new", 1, "form-label"], ["type", "text", "id", "country-new", "placeholder", "Country", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-success"], [1, "row", "gy-4", "mb-4"], [1, "form-floating"], ["type", "text", "id", "fullname-add", "value", "Json Taylor", "placeholder", "Name", 1, "form-control"], ["for", "fullname-add"], ["type", "email", "id", "email-add", "value", "jsontaylor2413@gmail.com", "placeholder", "name@example.com", 1, "form-control"], ["for", "email-add"], ["type", "email", "id", "phoneno-add", "value", "(555) 555-1234", "placeholder", "1234-XX-XXXX", 1, "form-control", "is-valid"], ["for", "phoneno-add"], ["placeholder", "Address Here", "id", "address-add", 1, "form-control"], ["for", "address-add"], [1, "form-check", "mt-1"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-success"], ["for", "invalidCheck", 1, "form-check-label", "text-success"], [1, "row", "gy-2"], ["type", "text", "id", "pincode-add", "value", "20071", "placeholder", "Name", 1, "form-control", "is-valid"], ["for", "pincode-add"], ["type", "text", "id", "city-add", "value", "Georgetown", "placeholder", "Name", 1, "form-control"], ["for", "city-add"], ["type", "text", "id", "state-add", "value", "Washington, D.C", "placeholder", "Name", 1, "form-control"], ["for", "state-add"], ["type", "text", "id", "country-add", "value", "USA", "placeholder", "Name", 1, "form-control"], ["for", "country-add"], [1, "fs-15", "fw-semibold", "mb-1"], [1, "form-check", "shipping-method-container", "mb-0"], ["id", "shipping-method1", "name", "shipping-methods", "type", "radio", "checked", "", 1, "form-check-input"], [1, "form-check-label"], [1, "d-sm-flex", "align-items-center", "justify-content-between"], [1, "shipping-partner-details"], [1, "mb-0", "fw-semibold"], [1, "text-muted", "fs-11", "mb-0"], [1, "fw-semibold", "me-sm-5", "me-0"], ["id", "shipping-method2", "name", "shipping-methods", "type", "radio", 1, "form-check-input"], ["id", "shipping-method3", "name", "shipping-methods", "type", "radio", 1, "form-check-input"], ["id", "shipping-method4", "name", "shipping-methods", "type", "radio", 1, "form-check-input"], [1, "px-4", "py-3", "border-top", "border-block-start-dashed", "d-sm-flex", "justify-content-end"], ["mat-button", "", "matStepperNext", "", "type", "button", "id", "personal-details-trigger", 1, "btn", "btn-success-light"], [1, "ri-user-3-line", "ms-2", "align-middle", "d-inline-block"], ["role", "presentation", "label", "Personal Details", 1, "nav-link", "ri-user-3-line", 3, "stepControl"], ["id", "confirm-tab-pane", "role", "tabpanel", "aria-labelledby", "confirm-tab-pane", "tabindex", "0", 1, "tab-pane", "border-0", "p-0"], [1, "row", "gy-4"], ["for", "firstname-personal", 1, "form-label"], ["type", "text", "id", "firstname-personal", "placeholder", "First Name", "value", "Json", 1, "form-control"], ["for", "lastname-personal", 1, "form-label"], ["type", "text", "id", "lastname-personal", "placeholder", "Last Name", "value", "Taylor", 1, "form-control"], ["for", "email-personal", 1, "form-label"], ["type", "email", "id", "email-personal", "placeholder", "xyz@example.com", "value", "", 1, "form-control"], ["for", "phoneno-personal", 1, "form-label"], ["type", "text", "id", "phoneno-personal", "placeholder", "(555)-555-1234", "value", "", 1, "form-control"], [1, "col-xxl-2"], ["for", "pincode-personal", 1, "form-label"], ["type", "text", "id", "pincode-personal", "placeholder", "200017", "value", "", 1, "form-control"], [1, "col-xxl-4"], ["for", "choices-single-default", 1, "form-label"], [3, "ngModelChange", "items", "ngModel"], ["for", "choices-single-default1", 1, "form-label"], ["for", "country-personal", 1, "form-label"], ["type", "text", "id", "country-personal", "placeholder", "Country", "value", "USA", 1, "form-control"], ["for", "text-area", 1, "form-label"], ["id", "text-area", "rows", "4", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck1", "required", "", "checked", "", 1, "form-check-input", "form-checked-outline", "form-checked-success"], ["for", "invalidCheck1", 1, "form-check-label", "text-success", "fs-12"], [1, "px-sm-4", "py-3", "border-top", "border-block-start-dashed", "d-sm-flex", "justify-content-between"], ["mat-button", "", "matStepperPrevious", "", "type", "button", "id", "back-shipping-trigger", 1, "btn", "btn-danger-light", "m-1"], [1, "ri-truck-line", "me-2", "align-middle", "d-inline-block"], ["mat-button", "", "matStepperNext", "", "type", "button", "id", "payment-trigger", 1, "btn", "btn-success-light", "m-1"], [1, "bi", "bi-credit-card-2-front", "align-middle", "ms-2", "d-inline-block"], ["role", "presentation", "label", "Payment", 1, "nav-link", "ri-bank-card-line", 3, "stepControl"], ["id", "shipped-tab-pane", "role", "tabpanel", "aria-labelledby", "shipped-tab-pane", "tabindex", "0", 1, "tab-pane", "border-0", "p-0"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], ["type", "text", "placeholder", "Address", "aria-label", "address", "aria-describedby", "payment-address", "value", "MIG-1-11,Monroe Street,Washington D.C,USA", 1, "form-control"], ["type", "button", "id", "payment-address", 1, "btn", "btn-info-light", "input-group-text"], [1, "card", "border", "shadow-none", "mb-3"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "mb-3", "d-sm-flex", "d-block"], ["type", "radio", "name", "btnradio", "id", "btnradio1", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-outline-light", "text-default"], ["type", "radio", "name", "btnradio", "id", "btnradio2", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-outline-light", "text-default", "mt-sm-0", "mt-1"], ["type", "radio", "name", "btnradio", "id", "btnradio3", "checked", "", 1, "btn-check"], ["for", "btnradio3", 1, "btn", "btn-outline-light", "text-default", "mt-sm-0", "mt-1"], ["for", "payment-card-number", 1, "form-label"], ["type", "text", "id", "payment-card-number", "placeholder", "Card Number", "value", "1245 - 5447 - 8934 - XXXX", 1, "form-control"], ["for", "payment-card-name", 1, "form-label"], ["type", "text", "id", "payment-card-name", "placeholder", "Name On Card", "value", "JSON TAYLOR", 1, "form-control"], [1, "col-xl-4"], ["for", "payment-cardexpiry-date", 1, "form-label"], ["type", "text", "id", "payment-cardexpiry-date", "placeholder", "MM/YY", "value", "08/2024", 1, "form-control"], ["for", "payment-cvv", 1, "form-label"], ["type", "text", "id", "payment-cvv", "placeholder", "XXX", "value", "341", 1, "form-control"], ["for", "payment-security", 1, "form-label"], ["type", "text", "id", "payment-security", "placeholder", "XXXXXX", "value", "183467", 1, "form-control"], ["for", "payment-security", 1, "form-label", "mt-1", "text-success", "fs-11"], [1, "ri-star-s-fill"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "payment-card-save", "checked", "", 1, "form-check-input", "form-checked-success"], ["for", "payment-card-save", 1, "form-check-label"], [1, "card-footer"], [1, "form-check", "payment-card-container", "mb-0", "lh-1"], ["id", "payment-card1", "name", "payment-cards", "type", "radio", "checked", "", 1, "form-check-input"], [1, "d-sm-flex", "d-block", "align-items-center", "justify-content-between"], [1, "me-2", "lh-1"], [1, "avatar", "avatar-md"], ["src", "./assets/images/products/ecommerce/2.png", "alt", ""], [1, "saved-card-details"], ["id", "payment-card2", "name", "payment-cards", "type", "radio", 1, "form-check-input"], ["src", "./assets/images/products/ecommerce/3.png", "alt", ""], [1, "px-4", "py-3", "border-top", "border-block-start-dashed", "d-sm-flex", "justify-content-between"], ["mat-button", "", "matStepperPrevious", "", "type", "button", "id", "back-personal-trigger", 1, "btn", "btn-danger-light", "m-1"], [1, "ri-user-3-line", "me-2", "align-middle", "d-inline-block"], ["mat-button", "", "matStepperNext", "", "type", "button", "id", "continue-payment-trigger", 1, "btn", "btn-success-light", "m-1"], ["role", "presentation", "label", "Confirmation", 1, "nav-link", "ri-checkbox-circle-line", 3, "stepControl"], ["id", "delivery-tab-pane", "role", "tabpanel", "aria-labelledby", "delivery-tab-pane", "tabindex", "0", 1, "tab-pane", "border-0", "p-0"], [1, "p-sm-5", "checkout-payment-success", "my-3"], [1, "mb-5"], [1, "text-success", "fw-semibold"], ["src", "./assets/images/products/ecommerce/1.png", "alt", "", 1, "img-fluid"], [1, "mb-4"], [1, "mb-1", "fs-14"], ["href", "javascript:void(0);", 1, "link-success"], [1, "text-muted"], [1, "btn", "btn-success", 3, "routerLink"], [1, "bi", "bi-cart", "ms-2"], [1, "card-title", "me-1"], [1, "badge", "bg-primary-transparent", "rounded-pill"], [1, "card-body", "p-0"], [1, "list-group", "mb-0", "border-0", "rounded-0"], [1, "list-group-item", "border-top-0", "border-start-0", "border-end-0"], [1, "d-flex", "align-items-center", "flex-wrap"], [1, "me-2"], [1, "avatar", "avatar-lg", "bg-light"], ["src", "./assets/images/products/8.jpg", "alt", ""], [1, "flex-fill"], [1, "mb-0", "text-muted", "fs-12"], [1, "badge", "bg-success-transparent", "ms-3"], [1, "mb-0", "fs-14", "fw-semibold"], [1, "ms-1", "text-muted", "fs-11", "d-inline-flex", "align-items-center"], [1, "list-group-item", "border-bottom", "border-block-end-dashed", "border-start-0", "border-end-0"], ["src", "./assets/images/products/1.jpg", "alt", ""], [1, "p-3", "border-bottom", "border-block-end-dashed"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "fs-12", "fw-semibold", "bg-primary-transparent", "p-1", "rounded"], [1, "text-success"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-muted", "op-7"], [1, "fw-semibold", "fs-14"], [1, "fw-semibold", "fs-14", "text-success"], [1, "fw-semibold", "fs-14", "text-danger"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "p-3"], [1, "fs-15"], [1, "fw-semibold", "fs-16", "text-dark"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-stepper", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "mat-step", 6)(8, "form", 7)(9, "div", 8)(10, "div", 9)(11, "p", 10);
        \u0275\u0275text(12, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "div");
        \u0275\u0275text(15, "Shipping Address :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275text(19, "Add New Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "h6", 19);
        \u0275\u0275text(25, "New Address ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "button", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "div", 23)(30, "label", 24);
        \u0275\u0275text(31, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 23)(34, "label", 26);
        \u0275\u0275text(35, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 23)(38, "label", 28);
        \u0275\u0275text(39, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 23)(42, "label", 30);
        \u0275\u0275text(43, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 32)(46, "div", 1)(47, "div", 33)(48, "label", 34);
        \u0275\u0275text(49, "Pincode");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 33)(52, "label", 36);
        \u0275\u0275text(53, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(54, "input", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 33)(56, "label", 38);
        \u0275\u0275text(57, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275element(58, "input", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 33)(60, "label", 40);
        \u0275\u0275text(61, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "input", 41);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(63, "div", 42)(64, "button", 43);
        \u0275\u0275text(65, "Close");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 44);
        \u0275\u0275text(67, "Save Address");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(68, "div", 45)(69, "div", 23)(70, "div", 46);
        \u0275\u0275element(71, "input", 47);
        \u0275\u0275elementStart(72, "label", 48);
        \u0275\u0275text(73, "Full Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 23)(75, "div", 46);
        \u0275\u0275element(76, "input", 49);
        \u0275\u0275elementStart(77, "label", 50);
        \u0275\u0275text(78, "Email");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 23)(80, "div", 46);
        \u0275\u0275element(81, "input", 51);
        \u0275\u0275elementStart(82, "label", 52);
        \u0275\u0275text(83, "Phone No");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 23)(85, "div", 46)(86, "textarea", 53);
        \u0275\u0275text(87, "MIG-1-11,Monroe Street,Washington D.C,USA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "label", 54);
        \u0275\u0275text(89, "Address");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 55);
        \u0275\u0275element(91, "input", 56);
        \u0275\u0275elementStart(92, "label", 57);
        \u0275\u0275text(93, " Same as Billing Address ? ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 32)(95, "div", 58)(96, "div", 33)(97, "div", 46);
        \u0275\u0275element(98, "input", 59);
        \u0275\u0275elementStart(99, "label", 60);
        \u0275\u0275text(100, "Pin Code");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "div", 33)(102, "div", 46);
        \u0275\u0275element(103, "input", 61);
        \u0275\u0275elementStart(104, "label", 62);
        \u0275\u0275text(105, "City");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 33)(107, "div", 46);
        \u0275\u0275element(108, "input", 63);
        \u0275\u0275elementStart(109, "label", 64);
        \u0275\u0275text(110, "State");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 33)(112, "div", 46);
        \u0275\u0275element(113, "input", 65);
        \u0275\u0275elementStart(114, "label", 66);
        \u0275\u0275text(115, "Country");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(116, "div", 22)(117, "p", 67);
        \u0275\u0275text(118, "Shipping Methods :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 23)(120, "div", 68);
        \u0275\u0275element(121, "input", 69);
        \u0275\u0275elementStart(122, "div", 70)(123, "div", 71)(124, "div", 72)(125, "p", 73);
        \u0275\u0275text(126, "UPS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "p", 74);
        \u0275\u0275text(128, "Delivered By 24,Nov 2022");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 75);
        \u0275\u0275text(130, " $9.99 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(131, "div", 23)(132, "div", 68);
        \u0275\u0275element(133, "input", 76);
        \u0275\u0275elementStart(134, "div", 70)(135, "div", 71)(136, "div", 72)(137, "p", 73);
        \u0275\u0275text(138, "USPS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "p", 74);
        \u0275\u0275text(140, "Delivered By 22,Nov 2022");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "div", 75);
        \u0275\u0275text(142, " $10.49 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(143, "div", 23)(144, "div", 68);
        \u0275\u0275element(145, "input", 77);
        \u0275\u0275elementStart(146, "div", 70)(147, "div", 71)(148, "div", 72)(149, "p", 73);
        \u0275\u0275text(150, "FedEx");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "p", 74);
        \u0275\u0275text(152, "Delivered Tomorrow");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "div", 75);
        \u0275\u0275text(154, " $12.29 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(155, "div", 23)(156, "div", 68);
        \u0275\u0275element(157, "input", 78);
        \u0275\u0275elementStart(158, "div", 70)(159, "div", 71)(160, "div", 72)(161, "p", 73);
        \u0275\u0275text(162, "DHL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "p", 74);
        \u0275\u0275text(164, "Delivered Today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(165, "div", 75);
        \u0275\u0275text(166, " $18.99 ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(167, "div", 79)(168, "button", 80);
        \u0275\u0275text(169, "Personal Details");
        \u0275\u0275element(170, "i", 81);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(171, "mat-step", 82)(172, "div", 83)(173, "div", 9)(174, "p", 10);
        \u0275\u0275text(175, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 11)(177, "div");
        \u0275\u0275text(178, "Personal Details :");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div", 84)(180, "div", 23)(181, "label", 85);
        \u0275\u0275text(182, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(183, "input", 86);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "div", 23)(185, "label", 87);
        \u0275\u0275text(186, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(187, "input", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 23)(189, "label", 89);
        \u0275\u0275text(190, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(191, "input", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 23)(193, "label", 91);
        \u0275\u0275text(194, "Phone no");
        \u0275\u0275elementEnd();
        \u0275\u0275element(195, "input", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "div", 93)(197, "label", 94);
        \u0275\u0275text(198, "Pincode");
        \u0275\u0275elementEnd();
        \u0275\u0275element(199, "input", 95);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "div", 96)(201, "label", 97);
        \u0275\u0275text(202, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "ng-select", 98);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_ng_select_ngModelChange_203_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem, $event) || (ctx.selectedSimpleItem = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 96)(205, "label", 99);
        \u0275\u0275text(206, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "ng-select", 98);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_ng_select_ngModelChange_207_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem1, $event) || (ctx.selectedSimpleItem1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "div", 93)(209, "label", 100);
        \u0275\u0275text(210, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(211, "input", 101);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "div", 32)(213, "label", 102);
        \u0275\u0275text(214, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(215, "textarea", 103);
        \u0275\u0275elementStart(216, "div", 55);
        \u0275\u0275element(217, "input", 104);
        \u0275\u0275elementStart(218, "label", 105);
        \u0275\u0275text(219, " Same as Shipping Address Address ? ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(220, "div", 106)(221, "button", 107);
        \u0275\u0275element(222, "i", 108);
        \u0275\u0275text(223, "Back To Shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "button", 109);
        \u0275\u0275text(225, "Continue To Payment");
        \u0275\u0275element(226, "i", 110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(227, "mat-step", 111)(228, "form", 7)(229, "div", 112)(230, "div", 9)(231, "p", 10);
        \u0275\u0275text(232, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "div", 11)(234, "div");
        \u0275\u0275text(235, "Payment Details :");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "div", 1)(237, "div", 32)(238, "div", 113)(239, "label", 114);
        \u0275\u0275text(240, "Delivery Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "div", 115);
        \u0275\u0275element(242, "input", 116);
        \u0275\u0275elementStart(243, "button", 117);
        \u0275\u0275text(244, "Change");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(245, "div", 118)(246, "div", 119)(247, "div", 120);
        \u0275\u0275text(248, " Payment Methods ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(249, "div", 121)(250, "div", 122);
        \u0275\u0275element(251, "input", 123);
        \u0275\u0275elementStart(252, "label", 124);
        \u0275\u0275text(253, "C.O.D(Cash on delivery)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(254, "input", 125);
        \u0275\u0275elementStart(255, "label", 126);
        \u0275\u0275text(256, "UPI");
        \u0275\u0275elementEnd();
        \u0275\u0275element(257, "input", 127);
        \u0275\u0275elementStart(258, "label", 128);
        \u0275\u0275text(259, "Credit/Debit Card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(260, "div", 22)(261, "div", 32)(262, "label", 129);
        \u0275\u0275text(263, "Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(264, "input", 130);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "div", 32)(266, "label", 131);
        \u0275\u0275text(267, "Name On Card");
        \u0275\u0275elementEnd();
        \u0275\u0275element(268, "input", 132);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "div", 133)(270, "label", 134);
        \u0275\u0275text(271, "Expiration Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(272, "input", 135);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 133)(274, "label", 136);
        \u0275\u0275text(275, "CVV");
        \u0275\u0275elementEnd();
        \u0275\u0275element(276, "input", 137);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "div", 133)(278, "label", 138);
        \u0275\u0275text(279, "O.T.P");
        \u0275\u0275elementEnd();
        \u0275\u0275element(280, "input", 139);
        \u0275\u0275elementStart(281, "label", 140)(282, "sup");
        \u0275\u0275element(283, "i", 141);
        \u0275\u0275elementEnd();
        \u0275\u0275text(284, "Do not share O.T.P with anyone");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div", 32)(286, "div", 142);
        \u0275\u0275element(287, "input", 143);
        \u0275\u0275elementStart(288, "label", 144);
        \u0275\u0275text(289, " Save this card ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(290, "div", 145)(291, "div", 22)(292, "p", 67);
        \u0275\u0275text(293, "Saved Cards :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "div", 23)(295, "div", 146);
        \u0275\u0275element(296, "input", 147);
        \u0275\u0275elementStart(297, "div", 70)(298, "div", 148)(299, "div", 149)(300, "span", 150);
        \u0275\u0275element(301, "img", 151);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(302, "div", 152)(303, "p", 73);
        \u0275\u0275text(304, "XXXX - XXXX - XXXX - 7646");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(305, "div", 23)(306, "div", 146);
        \u0275\u0275element(307, "input", 153);
        \u0275\u0275elementStart(308, "div", 70)(309, "div", 148)(310, "div", 149)(311, "span", 150);
        \u0275\u0275element(312, "img", 154);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(313, "div", 152)(314, "p", 73);
        \u0275\u0275text(315, "XXXX - XXXX - XXXX - 9556");
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(316, "div", 155)(317, "button", 156);
        \u0275\u0275element(318, "i", 157);
        \u0275\u0275text(319, "Back To Personal Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(320, "button", 158);
        \u0275\u0275text(321, "Continue Payment");
        \u0275\u0275element(322, "i", 110);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(323, "mat-step", 159)(324, "form", 7)(325, "div", 160)(326, "div", 161)(327, "div", 162)(328, "h5", 163);
        \u0275\u0275text(329, "Payment Successful...\u{1F91D}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(330, "div", 162);
        \u0275\u0275element(331, "img", 164);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "div", 165)(333, "p", 166);
        \u0275\u0275text(334, "You can track your order with Order Id ");
        \u0275\u0275elementStart(335, "b");
        \u0275\u0275text(336, "SPK#1FR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(337, " from ");
        \u0275\u0275elementStart(338, "a", 167)(339, "u");
        \u0275\u0275text(340, "Track Order");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(341, "p", 168);
        \u0275\u0275text(342, "Thankyou for shopping with us.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(343, "a", 169);
        \u0275\u0275text(344, "Continue Shopping");
        \u0275\u0275element(345, "i", 170);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(346, "div", 33)(347, "div", 3)(348, "div", 119)(349, "div", 171);
        \u0275\u0275text(350, "Order Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "span", 172);
        \u0275\u0275text(352, "02");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(353, "div", 173)(354, "ul", 174)(355, "li", 175)(356, "div", 176)(357, "div", 177)(358, "span", 178);
        \u0275\u0275element(359, "img", 179);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(360, "div", 180)(361, "p", 73);
        \u0275\u0275text(362, "Headphones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(363, "p", 181);
        \u0275\u0275text(364, "Quantity : 2 ");
        \u0275\u0275elementStart(365, "span", 182);
        \u0275\u0275text(366, "30% Off");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(367, "div")(368, "p", 183);
        \u0275\u0275text(369, "$189");
        \u0275\u0275elementStart(370, "span", 184)(371, "s");
        \u0275\u0275text(372, "$329");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(373, "li", 185)(374, "div", 176)(375, "div", 177)(376, "span", 178);
        \u0275\u0275element(377, "img", 186);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(378, "div", 180)(379, "p", 73);
        \u0275\u0275text(380, "Flower Pot");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "p", 181);
        \u0275\u0275text(382, "Quantity : 1 ");
        \u0275\u0275elementStart(383, "span", 182);
        \u0275\u0275text(384, "10% Off");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(385, "div")(386, "p", 183);
        \u0275\u0275text(387, "$129");
        \u0275\u0275elementStart(388, "span", 184)(389, "s");
        \u0275\u0275text(390, "$139");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(391, "div", 187)(392, "div", 188)(393, "div", 189);
        \u0275\u0275text(394, "SPRUKO25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "div", 190);
        \u0275\u0275text(396, "COUPON APPLIED");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(397, "div", 187)(398, "div", 191)(399, "div", 192);
        \u0275\u0275text(400, "Sub Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(401, "div", 193);
        \u0275\u0275text(402, "$318");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(403, "div", 191)(404, "div", 192);
        \u0275\u0275text(405, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(406, "div", 194);
        \u0275\u0275text(407, "10% - $31.8");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(408, "div", 191)(409, "div", 192);
        \u0275\u0275text(410, "Delivery Charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "div", 195);
        \u0275\u0275text(412, "- $29");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(413, "div", 196)(414, "div", 192);
        \u0275\u0275text(415, "Service Tax (18%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(416, "div", 193);
        \u0275\u0275text(417, "- $45.29");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(418, "div", 197)(419, "div", 196)(420, "div", 198);
        \u0275\u0275text(421, "Total :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(422, "div", 199);
        \u0275\u0275text(423, " $1,387");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("orientation", \u0275\u0275pipeBind1(6, 13, ctx.stepperOrientation));
        \u0275\u0275advance(2);
        \u0275\u0275property("stepControl", ctx.firstFormGroup);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.firstFormGroup);
        \u0275\u0275advance(163);
        \u0275\u0275property("stepControl", ctx.secondFormGroup);
        \u0275\u0275advance(32);
        \u0275\u0275property("items", ctx.simpleItems);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems1);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem1);
        \u0275\u0275advance(20);
        \u0275\u0275property("stepControl", ctx.thirdFormGroup);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.thirdFormGroup);
        \u0275\u0275advance(95);
        \u0275\u0275property("stepControl", ctx.forthFormGroup);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.forthFormGroup);
        \u0275\u0275advance(19);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
      }
    }, dependencies: [
      SharedModule,
      PageHeaderComponent,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      NgSelectModule,
      NgSelectComponent,
      MatButtonModule,
      MatButton,
      MatStepperModule,
      MatStep,
      MatStepper,
      MatStepperNext,
      MatStepperPrevious,
      MatFormFieldModule,
      MatInputModule,
      CommonModule,
      AsyncPipe,
      RouterModule,
      RouterLink
    ], data: { animation: [] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\components\\pages\\ecommerce\\checkout\\checkout.component.ts", lineNumber: 45 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-PQ7PR44E.js.map
