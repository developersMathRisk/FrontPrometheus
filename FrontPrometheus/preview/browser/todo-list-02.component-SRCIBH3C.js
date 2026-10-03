import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/todo-list/todo-list-02/todo-list-02.component.ts
function TodoList02Component_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "label", 40);
    \u0275\u0275element(5, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "div", 43)(8, "a", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 45);
    \u0275\u0275element(10, "path", 10)(11, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 47)(13, "a", 48);
    \u0275\u0275text(14, "Assigned to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 48);
    \u0275\u0275text(16, "Mark As Unread");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 48);
    \u0275\u0275text(18, "Mark As Important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 48);
    \u0275\u0275text(20, "Add to Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 48);
    \u0275\u0275text(22, "Add Star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 48);
    \u0275\u0275text(24, "Move to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 48);
    \u0275\u0275text(26, "Mute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 48);
    \u0275\u0275text(28, "Move to Trash");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 49)(30, "a", 50)(31, "div", 51);
    \u0275\u0275element(32, "img", 52);
    \u0275\u0275elementStart(33, "div", 53)(34, "h6", 54);
    \u0275\u0275text(35, "Shamika Griffith");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "Angular Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 55)(39, "a", 48);
    \u0275\u0275text(40, "View Total Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 48);
    \u0275\u0275text(42, "Completed Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 48);
    \u0275\u0275text(44, "Delete Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 48);
    \u0275\u0275text(46, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 56)(48, "small", 57);
    \u0275\u0275text(49, "10.54am");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h6", 58);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 56)(53, "small", 57);
    \u0275\u0275text(54, "10.54am");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h6", 58);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 59)(58, "a", 60);
    \u0275\u0275text(59, "Assign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 61);
    \u0275\u0275text(61, "View All");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(32);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(item_r1.msg1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r1.msg2);
  }
}
var TodoList02Component = class _TodoList02Component {
  constructor() {
    this.litData = [
      {
        image: "./assets/images/faces/1.jpg",
        name: "Shamika Griffith",
        position: "Angular Developer",
        msg1: "Work Assigned by Clients ,try to get new work",
        msg2: "Sed ut perspiciatis unde omnis iste natus"
      },
      {
        image: "./assets/images/faces/2.jpg",
        name: "Margarette Wycoff",
        position: "Angular Developer",
        msg1: "Voluptatem Accusantium Dolo Laudantium",
        msg2: "Inventore Veritatis Et Quasi Architecto"
      },
      {
        image: "./assets/images/faces/3.jpg",
        name: "Myrta Powe",
        position: "Angular Developer",
        msg1: "Nemo Enim Ipsam Voluptatem Quia Voluptas",
        msg2: "Vero Eos Et Accusamus Et Iusto Odio Dignissimos"
      },
      {
        image: "./assets/images/faces/4.jpg",
        name: "Consuelo Valenzuela",
        position: "Angular Developer",
        msg1: "Ut Enim Ad Minima Veniam Nostrum Exercitationem",
        msg2: "Quis Autem Vel Eum Iure Reprehenderit Qui"
      },
      {
        image: "./assets/images/faces/5.jpg",
        name: "Carolyne Wirtz",
        position: "Angular Developer",
        msg1: "I Must Explain To You How All This Mistaken",
        msg2: "I Will Give You A Complete Account Of The System"
      },
      {
        image: "./assets/images/faces/6.jpg",
        name: "Archie Kesler",
        position: "Angular Developer",
        msg1: "Rationally Encounter Quences Extremely Painful",
        msg2: "Which Of Us Ever Undertakes Laborious Physical"
      }
    ];
  }
  static {
    this.\u0275fac = function TodoList02Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TodoList02Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoList02Component, selectors: [["app-todo-list-02"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 0, consts: [["hassub", "Apps", "sub", "", "title1", "Todo list", "title", "Todo list2", "activeTitle", "Todo List2"], [1, "row"], [1, "col-md-12", "col-xl-3", "col-lg-4"], [1, "card", "filemanager-list"], [1, "card-header", "p-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "card-body", "px-0", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "file-manger", "px-0"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "active"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-5 7v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7zm-9 2h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z"], ["d", "M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2zm6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2zm-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75zm7.65-.25c-.02.09-.06.17-.09.25-.23.68-.64 1.28-1.18 1.75H19v-2h-3.13z", "opacity", ".3"], [1, "ms-auto", "badge", "bg-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center"], ["d", "M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z"], [1, "ms-auto", "badge", "bg-danger"], ["d", "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z", "opacity", ".3"], ["d", "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z"], ["d", "M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"], ["d", "M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z", "opacity", ".3"], ["d", "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], [1, "card-body", "border-top", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "mail-inbox"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "px-0", "py-2"], [1, "rounded-dot", "bg-primary-transparent", "me-2"], [1, "rounded-dot", "bg-secondary-transparent", "me-2"], [1, "rounded-dot", "bg-success-transparent", "me-2"], [1, "rounded-dot", "bg-info-transparent", "me-2"], [1, "rounded-dot", "bg-warning-transparent", "me-2"], [1, "rounded-dot", "bg-danger-transparent", "me-2"], [1, "col-md-12", "col-lg-8", "col-xl-9"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-sm-6"], [1, "card"], [1, "card-body", "p-0"], [1, "todo-widget-header", "d-flex", "p-3"], [1, "form-check-label", "mb-0"], ["type", "checkbox", "value", "option2", 1, "form-check-input"], [1, "ms-auto"], ["ngbDropdown", "", 1, ""], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", 1, "option-dots", "new-list", "no-caret"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "fs-13", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["ngbDropdown", "", 1, "px-3", "pb-3"], ["ngbDropdownToggle", "", "data-bs-toggle", "dropdown", 1, "p-0", "text-muted", "no-caret"], [1, "d-flex"], ["alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "me-2", 3, "src"], [1, "mt-1"], [1, "fw-semibold", "mb-0"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "fs-13"], [1, "p-3", "border-top"], [1, "text-muted"], [1, "mb-0", "mt-1", "fs-13"], [1, "card-footer", "d-sm-flex", "gap-3", "flex-wrap"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "Assign Task", 1, "btn", "btn-primary", "btn-sm", "btn-w-sm", "mb-1"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "View Task", 1, "btn", "btn-outline-primary", "ms-auto", "float-end", "btn-sm", "btn-w-sm", "mb-1"]], template: function TodoList02Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275text(6, "Add New Task");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "a", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 9);
        \u0275\u0275element(11, "path", 10)(12, "path", 11)(13, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "All Tasks");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "span", 13);
        \u0275\u0275text(16, "12");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 9);
        \u0275\u0275element(19, "path", 10)(20, "path", 15)(21, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Important ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "span", 17);
        \u0275\u0275text(24, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 9);
        \u0275\u0275element(27, "path", 10)(28, "path", 18)(29, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Starred ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 9);
        \u0275\u0275element(33, "path", 20)(34, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Spam ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 9);
        \u0275\u0275element(38, "path", 10)(39, "path", 22)(40, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " Archive ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 9);
        \u0275\u0275element(44, "path", 10)(45, "path", 24)(46, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, " Trash ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "div", 26)(49, "div", 27)(50, "a", 28);
        \u0275\u0275element(51, "span", 29);
        \u0275\u0275text(52, " Pending Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "a", 28);
        \u0275\u0275element(54, "span", 30);
        \u0275\u0275text(55, "Unassigned Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "a", 28);
        \u0275\u0275element(57, "span", 31);
        \u0275\u0275text(58, " Completed Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "a", 28);
        \u0275\u0275element(60, "span", 32);
        \u0275\u0275text(61, " Hold Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 28);
        \u0275\u0275element(63, "span", 33);
        \u0275\u0275text(64, " Task Issue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "a", 28);
        \u0275\u0275element(66, "span", 34);
        \u0275\u0275text(67, " Settings ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "div", 35)(69, "div", 1);
        \u0275\u0275repeaterCreate(70, TodoList02Component_For_71_Template, 62, 3, "div", 36, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(70);
        \u0275\u0275repeater(ctx.litData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoList02Component, { className: "TodoList02Component", filePath: "src\\app\\components\\apps\\todo-list\\todo-list-02\\todo-list-02.component.ts", lineNumber: 12 });
})();
export {
  TodoList02Component
};
//# sourceMappingURL=todo-list-02.component-SRCIBH3C.js.map
