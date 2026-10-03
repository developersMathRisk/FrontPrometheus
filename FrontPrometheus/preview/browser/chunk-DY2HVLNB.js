import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-YMML7LXJ.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BKD3PXJL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  HttpClientModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";

// src/app/components/pages/email/mail-read/mail-read.component.ts
var _c0 = () => ["/apps/gallery"];
function MailReadComponent_ng_template_8_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    \u0275\u0275property("value", data_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r6.name);
  }
}
function MailReadComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "h6", 91);
    \u0275\u0275text(2, "Compose Mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275listener("click", function MailReadComponent_ng_template_8_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 93)(5, "div", 2)(6, "div", 94)(7, "label", 95);
    \u0275\u0275text(8, "From");
    \u0275\u0275elementStart(9, "sup");
    \u0275\u0275element(10, "i", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 94)(13, "label", 98);
    \u0275\u0275text(14, "To");
    \u0275\u0275elementStart(15, "sup");
    \u0275\u0275element(16, "i", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ng-select", 99);
    \u0275\u0275twoWayListener("ngModelChange", function MailReadComponent_ng_template_8_Template_ng_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.mailSelectData, $event) || (ctx_r4.mailSelectData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(18, MailReadComponent_ng_template_8_For_19_Template, 2, 2, "ng-option", 100, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(20, "ng-option", 100);
    \u0275\u0275text(21, "Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 94)(23, "label", 101);
    \u0275\u0275text(24, "Cc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 94)(27, "label", 103);
    \u0275\u0275text(28, "Bcc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 105)(31, "label", 106);
    \u0275\u0275text(32, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 108)(35, "label", 109);
    \u0275\u0275text(36, "Content :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 110)(38, "div", 111)(39, "angular-editor", 112);
    \u0275\u0275twoWayListener("ngModelChange", function MailReadComponent_ng_template_8_Template_angular_editor_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.htmlContent1, $event) || (ctx_r4.htmlContent1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(40, "div");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 113)(42, "button", 114);
    \u0275\u0275listener("click", function MailReadComponent_ng_template_8_Template_button_click_42_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 115);
    \u0275\u0275text(45, "Send");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.mailSelectData);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.selected);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "custom");
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.htmlContent1);
    \u0275\u0275property("config", ctx_r4.config1);
  }
}
var MailReadComponent = class _MailReadComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.mailSelectData = [1];
    this.selected = [
      { id: 1, name: "Jay@gmail.com" },
      { id: 2, name: "Kimo@gmail.com" },
      { id: 3, name: "Don@gmail.com" },
      { id: 4, name: "kimo@gmail.com" }
    ];
    this.htmlContent1 = ``;
    this.config1 = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      defaultParagraphSeparator: "p",
      defaultFontName: "Arial",
      toolbarHiddenButtons: [
        ["bold"]
      ],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { size: "lg" });
  }
  static {
    this.\u0275fac = function MailReadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MailReadComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailReadComponent, selectors: [["app-mail-read"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 181, vars: 6, consts: [["content", ""], ["hassub", "", "sub", "Pages", "title1", "Mail", "title", "Mail Read", "activeTitle", "Mail Read"], [1, "row"], [1, "col-md-12", "col-lg-4", "col-xl-3"], [1, "card", "filemanager-list"], [1, "card-header", "p-3"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#mail-Compose", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "w-100", 3, "click"], [1, "ri-add-circle-line", "fs-16", "align-middle", "me-1"], [1, "card-body", "px-0", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "file-manger", "px-0"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "py-2", "active"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], [1, "ms-auto", "badge", "bg-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center"], ["d", "M20 16V6H4v10.01L20 16zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z", "opacity", ".3"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z"], ["d", "M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z"], [1, "ms-auto", "badge", "bg-danger"], ["d", "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z", "opacity", ".3"], ["d", "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z"], ["d", "M12 15.36l-8-5.02V18h16l-.01-7.63z", "opacity", ".3"], ["d", "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"], ["d", "M16 7H5v10h11l3.55-5z", "opacity", ".3"], ["d", "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], [1, "card-body", "border-top", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "mail-inbox"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "px-0", "py-2"], [1, "rounded-dot", "bg-primary-transparent", "me-2"], [1, "rounded-dot", "bg-secondary-transparent", "me-2"], [1, "rounded-dot", "bg-success-transparent", "me-2"], [1, "rounded-dot", "bg-info-transparent", "me-2"], [1, "rounded-dot", "bg-warning-transparent", "me-2"], [1, "rounded-dot", "bg-danger-transparent", "me-2"], [1, "col-md-12", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "email-media", "mt-0", "d-sm-flex"], ["src", "./assets/images/faces/2.jpg", "alt", "avatar", 1, "me-2", "rounded-circle", "avatar", "avatar-lg"], [1, "d-flex", "w-100"], [1, ""], [1, "media-title", "text-dark", "fw-semibold", "mt-1"], [1, "text-muted", "fw-semibold"], [1, "mb-0"], [1, "me-2", "d-md-none"], [1, "ms-auto", "d-none", "d-md-flex", "fs-15"], [1, "me-3", "mt-1", "text-muted"], ["aria-label", "anchor", "data-bs-toggle", "tooltip", "title", "", "ngbTooltip", "Rated", 1, "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["aria-label", "anchor", "data-bs-toggle", "tooltip", "title", "", "ngbTooltip", "Reply", 1, "me-3"], ["d", "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"], ["ngbDropdown", "", 1, "me-3"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "no-caret"], ["d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "fe", "fe-share", "d-inline-flex", "me-2"], [1, "fe", "fe-alert-circle", "d-inline-flex", "me-2"], [1, "fe", "fe-trash", "d-inline-flex", "me-2"], [1, "fe", "fe-printer", "d-inline-flex", "me-2"], [1, "fe", "fe-filter", "d-inline-flex", "me-2"], [1, "eamil-body", "mt-4"], [1, "bg-light", "border"], [1, "email-attch", "d-flex"], [1, "fw-semibold", "d-inline-flex"], ["href", "javascript:void(0)", 1, "ms-2"], [1, "ms-auto"], ["aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "tooltip", "title", "", "ngbTooltip", "Download"], ["d", "M14.17 11H13V5h-2v6H9.83L12 13.17z", "opacity", ".3"], ["d", "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"], [1, "col-sm-6", "col-lg-4", "col-xl-2", "mt-4"], [1, "", 3, "routerLink"], [1, "border", "p-0", "text-center"], ["src", "./assets/images/files/file2.png", "alt", "img", 1, "w-100", "mx-auto"], [1, "bg-light", "p-3", "border", "border-top-0"], [1, "fa", "fa-file-excel-o", "me-1"], ["src", "./assets/images/files/doc.png", "alt", "img", 1, "w-100", "mx-auto"], [1, "fa", "fa-file-word-o", "me-1"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-1", "mb-1", "me-1"], [1, "fa", "fa-reply"], ["href", "javascript:void(0)", 1, "btn", "btn-secondary", "mt-1", "mb-1", "me-1"], [1, "fa", "fa-share"], [1, "modal-header"], ["id", "mail-ComposeLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4"], [1, "col-xl-6", "mb-2"], ["for", "fromMail", 1, "form-label"], [1, "ri-star-s-fill", "text-success", "fs-8"], ["type", "email", "id", "fromMail", "value", "jsontaylor2345@gmail.com", 1, "form-control"], ["for", "toMail", 1, "form-label"], [3, "ngModelChange", "multiple", "ngModel"], [3, "value"], ["for", "mailCC", 1, "form-label", "text-dark", "fw-semibold"], ["type", "email", "id", "mailCC", 1, "form-control"], ["for", "mailBcc", 1, "form-label", "text-dark", "fw-semibold"], ["type", "email", "id", "mailBcc", 1, "form-control"], [1, "col-xl-12", "mb-2"], ["for", "Subject", 1, "form-label"], ["type", "text", "id", "Subject", "placeholder", "Subject", 1, "form-control"], [1, "col-xl-12"], [1, "col-form-label"], [1, "mail-compose"], ["id", "mail-compose-editor"], [3, "ngModelChange", "ngModel", "config"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function MailReadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275listener("click", function MailReadComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(9);
          return \u0275\u0275resetView(ctx.openWindowCustomClass(content_r2));
        });
        \u0275\u0275element(6, "i", 7);
        \u0275\u0275text(7, "Compose Mail ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, MailReadComponent_ng_template_8_Template, 46, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 11);
        \u0275\u0275element(14, "path", 12)(15, "path", 13)(16, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "Inbox ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "span", 15);
        \u0275\u0275text(19, "14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 11);
        \u0275\u0275element(22, "path", 12)(23, "path", 17)(24, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "Sent Mail ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 11);
        \u0275\u0275element(28, "path", 12)(29, "path", 19)(30, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "Important ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "span", 21);
        \u0275\u0275text(33, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 11);
        \u0275\u0275element(36, "path", 12)(37, "path", 22)(38, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "Starred ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 11);
        \u0275\u0275element(42, "path", 12)(43, "path", 24)(44, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "Drafts ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 11);
        \u0275\u0275element(48, "path", 12)(49, "path", 26)(50, "path", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, "Tags ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(52, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 11);
        \u0275\u0275element(54, "path", 12)(55, "path", 28)(56, "path", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "Trash ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "div", 30)(59, "div", 31)(60, "a", 32);
        \u0275\u0275element(61, "span", 33);
        \u0275\u0275text(62, " Friends ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "a", 32);
        \u0275\u0275element(64, "span", 34);
        \u0275\u0275text(65, "Family ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 32);
        \u0275\u0275element(67, "span", 35);
        \u0275\u0275text(68, " Social ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "a", 32);
        \u0275\u0275element(70, "span", 36);
        \u0275\u0275text(71, " Office ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "a", 32);
        \u0275\u0275element(73, "span", 37);
        \u0275\u0275text(74, " Work ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 32);
        \u0275\u0275element(76, "span", 38);
        \u0275\u0275text(77, "Settings ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(78, "div", 39)(79, "div", 40)(80, "div", 41)(81, "h4", 42);
        \u0275\u0275text(82, "Main Read");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 43)(84, "div", 44);
        \u0275\u0275element(85, "img", 45);
        \u0275\u0275elementStart(86, "div", 46)(87, "div", 47)(88, "div", 48);
        \u0275\u0275text(89, "Alica Nestle ");
        \u0275\u0275elementStart(90, "span", 49);
        \u0275\u0275text(91, "( alicnestle@gmail.com )");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "small", 50);
        \u0275\u0275text(93, "to Adam Cotter ( adamcotter@gmail.com ) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "small", 51);
        \u0275\u0275text(95, "Sep 13 , 2019 12:45 pm");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 52)(97, "small", 53);
        \u0275\u0275text(98, "Sep 13 , 2019 12:45 pm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "a", 54);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(100, "svg", 55);
        \u0275\u0275element(101, "path", 12)(102, "path", 22)(103, "path", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(104, "a", 56);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(105, "svg", 55);
        \u0275\u0275element(106, "path", 12)(107, "path", 57);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(108, "div", 58)(109, "a", 59);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(110, "svg", 55);
        \u0275\u0275element(111, "path", 12)(112, "path", 60);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(113, "div", 61)(114, "a", 62);
        \u0275\u0275element(115, "i", 63);
        \u0275\u0275text(116, " Reply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "a", 62);
        \u0275\u0275element(118, "i", 64);
        \u0275\u0275text(119, "Report Spam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "a", 62);
        \u0275\u0275element(121, "i", 65);
        \u0275\u0275text(122, "Delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "a", 62);
        \u0275\u0275element(124, "i", 66);
        \u0275\u0275text(125, "Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "a", 62);
        \u0275\u0275element(127, "i", 67);
        \u0275\u0275text(128, "Filter");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(129, "div", 68)(130, "h6");
        \u0275\u0275text(131, "Hi Sir/Madam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "p");
        \u0275\u0275text(135, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "p");
        \u0275\u0275text(137, " Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "p", 50);
        \u0275\u0275text(139, "Thanking you Sir/Madam");
        \u0275\u0275elementEnd();
        \u0275\u0275element(140, "hr", 69);
        \u0275\u0275elementStart(141, "div", 70)(142, "p", 71);
        \u0275\u0275text(143, "3 Attachments ");
        \u0275\u0275elementStart(144, "a", 72);
        \u0275\u0275text(145, "View");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 73)(147, "a", 74);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(148, "svg", 55);
        \u0275\u0275element(149, "path", 12)(150, "path", 75)(151, "path", 76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(152, "div", 2)(153, "div", 77)(154, "a", 78)(155, "div", 79);
        \u0275\u0275element(156, "img", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 81);
        \u0275\u0275element(158, "i", 82);
        \u0275\u0275text(159, " xlsdocument.xls ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 77)(161, "a", 78)(162, "div", 79);
        \u0275\u0275element(163, "img", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 81);
        \u0275\u0275element(165, "i", 84);
        \u0275\u0275text(166, " worddocument ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 77)(168, "a", 78)(169, "div", 79);
        \u0275\u0275element(170, "img", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "div", 81);
        \u0275\u0275element(172, "i", 84);
        \u0275\u0275text(173, " worddocument ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(174, "div", 85)(175, "a", 86);
        \u0275\u0275element(176, "i", 87);
        \u0275\u0275text(177, " Reply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "a", 88);
        \u0275\u0275element(179, "i", 89);
        \u0275\u0275text(180, " Forward");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(154);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, AngularEditorModule, AngularEditorComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbTooltip, FormsModule, NgControlStatus, NgModel, HttpClientModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailReadComponent, { className: "MailReadComponent", filePath: "src\\app\\components\\pages\\email\\mail-read\\mail-read.component.ts", lineNumber: 17 });
})();

export {
  MailReadComponent
};
//# sourceMappingURL=chunk-DY2HVLNB.js.map
