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
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
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

// src/app/components/pages/email/mail-inbox/mail-inbox.component.ts
function MailInboxComponent_ng_template_8_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 99);
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
function MailInboxComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "h6", 90);
    \u0275\u0275text(2, "Compose Mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function MailInboxComponent_ng_template_8_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 92)(5, "div", 2)(6, "div", 93)(7, "label", 94);
    \u0275\u0275text(8, "From");
    \u0275\u0275elementStart(9, "sup");
    \u0275\u0275element(10, "i", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 93)(13, "label", 97);
    \u0275\u0275text(14, "To");
    \u0275\u0275elementStart(15, "sup");
    \u0275\u0275element(16, "i", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ng-select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function MailInboxComponent_ng_template_8_Template_ng_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.mailSelectData, $event) || (ctx_r4.mailSelectData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(18, MailInboxComponent_ng_template_8_For_19_Template, 2, 2, "ng-option", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(20, "ng-option", 99);
    \u0275\u0275text(21, "Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 93)(23, "label", 100);
    \u0275\u0275text(24, "Cc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 93)(27, "label", 102);
    \u0275\u0275text(28, "Bcc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 104)(31, "label", 105);
    \u0275\u0275text(32, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 107)(35, "label", 108);
    \u0275\u0275text(36, "Content :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 109)(38, "div", 110)(39, "angular-editor", 111);
    \u0275\u0275twoWayListener("ngModelChange", function MailInboxComponent_ng_template_8_Template_angular_editor_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.htmlContent1, $event) || (ctx_r4.htmlContent1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(40, "div");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 112)(42, "button", 113);
    \u0275\u0275listener("click", function MailInboxComponent_ng_template_8_Template_button_click_42_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 114);
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
var MailInboxComponent = class _MailInboxComponent {
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
    this.\u0275fac = function MailInboxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MailInboxComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailInboxComponent, selectors: [["app-mail-inbox"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 433, vars: 0, consts: [["content", ""], ["hassub", "", "sub", "Pages", "title1", "Mail", "title", "Mail Inbox", "activeTitle", "Mail Inbox"], [1, "row"], [1, "col-md-12", "col-lg-4", "col-xl-3"], [1, "card", "filemanager-list"], [1, "card-header", "p-3"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#mail-Compose", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "w-100", 3, "click"], [1, "ri-add-circle-line", "fs-16", "align-middle", "me-1"], [1, "card-body", "px-0", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "file-manger", "px-0"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "py-2", "active"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], [1, "ms-auto", "badge", "bg-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center"], ["d", "M20 16V6H4v10.01L20 16zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z", "opacity", ".3"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z"], ["d", "M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z"], [1, "ms-auto", "badge", "bg-danger"], ["d", "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z", "opacity", ".3"], ["d", "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z"], ["d", "M12 15.36l-8-5.02V18h16l-.01-7.63z", "opacity", ".3"], ["d", "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"], ["d", "M16 7H5v10h11l3.55-5z", "opacity", ".3"], ["d", "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], [1, "card-body", "border-top", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "mail-inbox"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "px-0", "py-2"], [1, "rounded-dot", "bg-primary-transparent", "me-2"], [1, "rounded-dot", "bg-secondary-transparent", "me-2"], [1, "rounded-dot", "bg-success-transparent", "me-2"], [1, "rounded-dot", "bg-info-transparent", "me-2"], [1, "rounded-dot", "bg-warning-transparent", "me-2"], [1, "rounded-dot", "bg-danger-transparent", "me-2"], [1, "col-md-12", "col-lg-8", "col-xl-9"], [1, "card", "overflow-hidden"], [1, "card-body", "p-0"], [1, "inbox-body"], [1, "mail-option", "border-bottom", "d-sm-flex"], [1, "d-flex", "align-items-center", "mb-2", "mb-sm-0"], [1, "chk-all"], [1, "form-check-label"], ["type", "checkbox", "value", "option2", 1, "form-check-input", "check-all"], [1, "btn-group"], ["aria-label", "anchor", "data-bs-original-title", "Refresh", "data-bs-placement", "top", "data-bs-toggle", "", "href", "javascript:void(0)", 1, "btn", "mini", "tooltips"], [1, "fa", "fa-refresh"], ["ngbDropdown", "", 1, "btn-group", "hidden-phone"], ["ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "href", "javascript:void(0)", "aria-expanded", "false", 1, "btn", "mini", "blue", "gap-2", "no-caret"], [1, "fa", "fa-angle-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item"], ["href", "javascript:void(0)"], [1, "me-2", "fa", "fa-pencil"], [1, "me-2", "fa", "fa-ban"], [1, "me-2", "fa", "fa-trash-o"], [1, "unstyled", "inbox-pagination", "d-flex", "align-items-center"], ["aria-label", "anchor", "href", "javascript:void(0)", 1, "np-btn"], [1, "fa", "fa-angle-right", "pagination-right"], [1, "table-responsive"], [1, "table", "border-0", "table-inbox", "text-nowrap", "mb-0"], [1, "mail-list"], [1, "inbox-small-cells"], [1, "form-check-label", "mail-checkbox"], ["type", "checkbox", "value", "option2", 1, "form-check-input"], [1, "fa", "fa-star", "text-warning"], [1, "fa", "fa-bookmark"], [1, "view-message", "dont-show", "fw-semibold"], [1, "view-message"], [1, "view-message", "text-end", "fw-semibold"], [1, "fa", "fa-star", "inbox-started"], [1, "unread", "mail-list"], [1, "fa", "fa-star"], [1, "fa", "fa-bookmark", "text-danger"], [1, "view-message", "dont-show"], [1, "view-message", "text-end"], [1, "fa", "fa-star", "inbox-started", "text-warning"], [1, "dont-show", "fw-semibold"], [1, "pagination"], [1, "page-item", "page-prev", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "page-next"], [1, "modal-header"], ["id", "mail-ComposeLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4"], [1, "col-xl-6", "mb-2"], ["for", "fromMail", 1, "form-label"], [1, "ri-star-s-fill", "text-success", "fs-8"], ["type", "email", "id", "fromMail", "value", "jsontaylor2345@gmail.com", 1, "form-control"], ["for", "toMail", 1, "form-label"], [3, "ngModelChange", "multiple", "ngModel"], [3, "value"], ["for", "mailCC", 1, "form-label", "text-dark", "fw-semibold"], ["type", "email", "id", "mailCC", 1, "form-control"], ["for", "mailBcc", 1, "form-label", "text-dark", "fw-semibold"], ["type", "email", "id", "mailBcc", 1, "form-control"], [1, "col-xl-12", "mb-2"], ["for", "Subject", 1, "form-label"], ["type", "text", "id", "Subject", "placeholder", "Subject", 1, "form-control"], [1, "col-xl-12"], [1, "col-form-label"], [1, "mail-compose"], ["id", "mail-compose-editor"], [3, "ngModelChange", "ngModel", "config"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function MailInboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275listener("click", function MailInboxComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(9);
          return \u0275\u0275resetView(ctx.openWindowCustomClass(content_r2));
        });
        \u0275\u0275element(6, "i", 7);
        \u0275\u0275text(7, "Compose Mail ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, MailInboxComponent_ng_template_8_Template, 46, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
        \u0275\u0275elementStart(78, "div", 39)(79, "div", 40)(80, "div", 41)(81, "div", 42)(82, "div", 43)(83, "div", 44)(84, "div", 45)(85, "label", 46);
        \u0275\u0275element(86, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 48)(88, "a", 49);
        \u0275\u0275element(89, "i", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 51)(91, "a", 52);
        \u0275\u0275text(92, " More ");
        \u0275\u0275element(93, "i", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "ul", 54)(95, "li", 55)(96, "a", 56);
        \u0275\u0275element(97, "i", 57);
        \u0275\u0275text(98, " Mark as Read");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "li", 55)(100, "a", 56);
        \u0275\u0275element(101, "i", 58);
        \u0275\u0275text(102, " Spam");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "li", 55)(104, "a", 56);
        \u0275\u0275element(105, "i", 59);
        \u0275\u0275text(106, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(107, "ul", 60)(108, "li")(109, "span");
        \u0275\u0275text(110, "1-50 of 234");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "li")(112, "a", 61);
        \u0275\u0275element(113, "i", 62);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(114, "div", 63)(115, "table", 64)(116, "tbody")(117, "tr", 65)(118, "td", 66)(119, "label", 67);
        \u0275\u0275element(120, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "td", 66);
        \u0275\u0275element(122, "i", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "td", 66);
        \u0275\u0275element(124, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "td", 71);
        \u0275\u0275text(126, "Tim Reid, S P N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "td", 72);
        \u0275\u0275text(128, "Boost Your Website Traffic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "td", 73);
        \u0275\u0275text(130, "April 01");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "tr", 65)(132, "td", 66)(133, "label", 67);
        \u0275\u0275element(134, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "td", 66);
        \u0275\u0275element(136, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "td", 66);
        \u0275\u0275element(138, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "td", 71);
        \u0275\u0275text(140, "Freelancer.com ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "td", 72);
        \u0275\u0275text(142, "Stop wasting your visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "td", 73);
        \u0275\u0275text(144, "May 23");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "tr", 75)(146, "td", 66)(147, "label", 67);
        \u0275\u0275element(148, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "td", 66);
        \u0275\u0275element(150, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "td", 66);
        \u0275\u0275element(152, "i", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "td", 78);
        \u0275\u0275text(154, "PHPClass");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "td", 72);
        \u0275\u0275text(156, "Added a new class: Login Class Fast Site");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "td", 79);
        \u0275\u0275text(158, "9:27 AM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "tr", 65)(160, "td", 66)(161, "label", 67);
        \u0275\u0275element(162, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(163, "td", 66);
        \u0275\u0275element(164, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "td", 66);
        \u0275\u0275element(166, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "td", 71);
        \u0275\u0275text(168, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "td", 72);
        \u0275\u0275text(170, "Somebody requested a new password ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "td", 73);
        \u0275\u0275text(172, "June 13");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "tr", 65)(174, "td", 66)(175, "label", 67);
        \u0275\u0275element(176, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "td", 66);
        \u0275\u0275element(178, "i", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "td", 66);
        \u0275\u0275element(180, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "td", 71);
        \u0275\u0275text(182, "Skype");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "td", 72);
        \u0275\u0275text(184, "Password successfully changed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "td", 73);
        \u0275\u0275text(186, "March 24");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(187, "tr", 65)(188, "td", 66)(189, "label", 67);
        \u0275\u0275element(190, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "td", 66);
        \u0275\u0275element(192, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "td", 66);
        \u0275\u0275element(194, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "td", 71);
        \u0275\u0275text(196, "Google+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "td", 72);
        \u0275\u0275text(198, "alireza, do you know");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "td", 73);
        \u0275\u0275text(200, "March 09");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "tr", 65)(202, "td", 66)(203, "label", 67);
        \u0275\u0275element(204, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "td", 66);
        \u0275\u0275element(206, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "td", 66);
        \u0275\u0275element(208, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "td", 71);
        \u0275\u0275text(210, "WOW Slider ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "td", 72);
        \u0275\u0275text(212, "New WOW Slider v7.8 - 67% off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "td", 73);
        \u0275\u0275text(214, "March 14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "tr", 65)(216, "td", 66)(217, "label", 67);
        \u0275\u0275element(218, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(219, "td", 66);
        \u0275\u0275element(220, "i", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "td", 66);
        \u0275\u0275element(222, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "td", 71);
        \u0275\u0275text(224, "LinkedIn Pulse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "td", 72);
        \u0275\u0275text(226, "The One Sign Your Co-Worker Will Stab");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "td", 73);
        \u0275\u0275text(228, "Feb 19");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(229, "tr", 75)(230, "td", 66)(231, "label", 67);
        \u0275\u0275element(232, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(233, "td", 66);
        \u0275\u0275element(234, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "td", 66);
        \u0275\u0275element(236, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "td", 71);
        \u0275\u0275text(238, "Google Webmaster ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "td", 72);
        \u0275\u0275text(240, "Improve the search presence of WebSite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "td", 73);
        \u0275\u0275text(242, "March 15");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "tr", 65)(244, "td", 66)(245, "label", 67);
        \u0275\u0275element(246, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(247, "td", 66);
        \u0275\u0275element(248, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "td", 66);
        \u0275\u0275element(250, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "td", 71);
        \u0275\u0275text(252, "JW Player");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "td", 72);
        \u0275\u0275text(254, "Last Chance: Upgrade to Pro for ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "td", 73);
        \u0275\u0275text(256, "March 15");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "tr", 65)(258, "td", 66)(259, "label", 67);
        \u0275\u0275element(260, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "td", 66);
        \u0275\u0275element(262, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "td", 66);
        \u0275\u0275element(264, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "td", 71);
        \u0275\u0275text(266, "Drupal Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(267, "td", 72);
        \u0275\u0275text(268, "Welcome to the Drupal Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "td", 73);
        \u0275\u0275text(270, "March 04");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(271, "tr", 65)(272, "td", 66)(273, "label", 67);
        \u0275\u0275element(274, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "td", 66);
        \u0275\u0275element(276, "i", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "td", 66);
        \u0275\u0275element(278, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "td", 81);
        \u0275\u0275text(280, "Zoosk ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "td", 72);
        \u0275\u0275text(282, "7 new singles we think you'll like");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "td", 73);
        \u0275\u0275text(284, "May 14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "tr", 65)(286, "td", 66)(287, "label", 67);
        \u0275\u0275element(288, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(289, "td", 66);
        \u0275\u0275element(290, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "td", 66);
        \u0275\u0275element(292, "i", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "td", 71);
        \u0275\u0275text(294, "LinkedIn ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "td", 72);
        \u0275\u0275text(296, "Alireza: Nokia Networks, System Group and ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "td", 73);
        \u0275\u0275text(298, "February 25");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(299, "tr", 65)(300, "td", 66)(301, "label", 67);
        \u0275\u0275element(302, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(303, "td", 66);
        \u0275\u0275element(304, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "td", 66);
        \u0275\u0275element(306, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "td", 81);
        \u0275\u0275text(308, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "td", 72);
        \u0275\u0275text(310, "Your account was recently logged into");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "td", 73);
        \u0275\u0275text(312, "March 14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(313, "tr", 65)(314, "td", 66)(315, "label", 67);
        \u0275\u0275element(316, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(317, "td", 66);
        \u0275\u0275element(318, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(319, "td", 66);
        \u0275\u0275element(320, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "td", 71);
        \u0275\u0275text(322, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(323, "td", 72);
        \u0275\u0275text(324, "Your Twitter password has been changed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "td", 73);
        \u0275\u0275text(326, "April 07");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(327, "tr", 65)(328, "td", 66)(329, "label", 67);
        \u0275\u0275element(330, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(331, "td", 66);
        \u0275\u0275element(332, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "td", 66);
        \u0275\u0275element(334, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "td", 71);
        \u0275\u0275text(336, "InternetSeer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "td", 72);
        \u0275\u0275text(338, "Performance Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "td", 73);
        \u0275\u0275text(340, "July 14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(341, "tr", 65)(342, "td", 66)(343, "label", 67);
        \u0275\u0275element(344, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(345, "td", 66);
        \u0275\u0275element(346, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(347, "td", 66);
        \u0275\u0275element(348, "i", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(349, "td", 71);
        \u0275\u0275text(350, "Bertina ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "td", 72);
        \u0275\u0275text(352, "IMPORTANT: Don't lose your domains!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(353, "td", 73);
        \u0275\u0275text(354, "June 16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(355, "tr", 65)(356, "td", 66)(357, "label", 67);
        \u0275\u0275element(358, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(359, "td", 66);
        \u0275\u0275element(360, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(361, "td", 66);
        \u0275\u0275element(362, "i", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(363, "td", 71);
        \u0275\u0275text(364, "Laura Gaffin, S P N ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "td", 72);
        \u0275\u0275text(366, "Your Website On Google (Higher Rankings Are Better)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(367, "td", 73);
        \u0275\u0275text(368, "August 10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(369, "tr", 65)(370, "td", 66)(371, "label", 67);
        \u0275\u0275element(372, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(373, "td", 66);
        \u0275\u0275element(374, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(375, "td", 66);
        \u0275\u0275element(376, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "td", 71);
        \u0275\u0275text(378, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(379, "td", 72);
        \u0275\u0275text(380, "Alireza Zare Login faild");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "td", 73);
        \u0275\u0275text(382, "feb 14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(383, "tr", 65)(384, "td", 66)(385, "label", 67);
        \u0275\u0275element(386, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(387, "td", 66);
        \u0275\u0275element(388, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "td", 66);
        \u0275\u0275element(390, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "td", 71);
        \u0275\u0275text(392, "AddMe.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "td", 72);
        \u0275\u0275text(394, "Submit Your Website to the AddMe Business Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "td", 73);
        \u0275\u0275text(396, "August 10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(397, "tr", 65)(398, "td", 66)(399, "label", 67);
        \u0275\u0275element(400, "input", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(401, "td", 66);
        \u0275\u0275element(402, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(403, "td", 66);
        \u0275\u0275element(404, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(405, "td", 71);
        \u0275\u0275text(406, "Terri Rexer, S P N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(407, "td", 72);
        \u0275\u0275text(408, "Forget Google AdWords: Un-Limited Clicks fo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "td", 73);
        \u0275\u0275text(410, "April 14");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(411, "ul", 82)(412, "li", 83)(413, "a", 84);
        \u0275\u0275text(414, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(415, "li", 85)(416, "a", 86);
        \u0275\u0275text(417, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(418, "li", 87)(419, "a", 86);
        \u0275\u0275text(420, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(421, "li", 87)(422, "a", 86);
        \u0275\u0275text(423, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(424, "li", 87)(425, "a", 86);
        \u0275\u0275text(426, "4");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(427, "li", 87)(428, "a", 86);
        \u0275\u0275text(429, "5");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(430, "li", 88)(431, "a", 86);
        \u0275\u0275text(432, "Next");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, AngularEditorModule, AngularEditorComponent, HttpClientModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailInboxComponent, { className: "MailInboxComponent", filePath: "src\\app\\components\\pages\\email\\mail-inbox\\mail-inbox.component.ts", lineNumber: 16 });
})();

export {
  MailInboxComponent
};
//# sourceMappingURL=chunk-BAGEOBGH.js.map
