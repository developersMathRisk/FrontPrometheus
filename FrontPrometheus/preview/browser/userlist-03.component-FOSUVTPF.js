import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule
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

// src/app/components/apps/user-list/userlist-03/userlist-03.component.ts
function Userlist03Component_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementStart(4, "div", 17)(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "div", 21)(11, "a", 22);
    \u0275\u0275element(12, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "a", 25);
    \u0275\u0275element(15, "i", 26);
    \u0275\u0275text(16, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 25);
    \u0275\u0275element(18, "i", 27);
    \u0275\u0275text(19, " Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "div", 28)(21, "p", 19);
    \u0275\u0275text(22, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29)(24, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 31);
    \u0275\u0275element(26, "path", 32)(27, "path", 33)(28, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 29)(32, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 31);
    \u0275\u0275element(34, "path", 32)(35, "path", 36)(36, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 35);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 38)(40, "a", 39);
    \u0275\u0275text(41, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 40);
    \u0275\u0275text(43, "View Profile");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.position);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(item_r1.mail);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(item_r1.phone);
  }
}
var Userlist03Component = class _Userlist03Component {
  constructor() {
    this.ContactData = [
      {
        name: "Denis Rosenblum",
        position: "Project Manager",
        image: "./assets/images/faces/7.jpg",
        mail: "denisrenblum@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Harvey Mattos",
        position: "Developer",
        image: "./assets/images/faces/6.jpg",
        mail: "harveymattos@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Catrice Doshier",
        position: "Assistant Manager",
        image: "./assets/images/faces/5.jpg",
        mail: "catricedoshier@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Catherina Bamber",
        position: "Compony Manager",
        image: "./assets/images/faces/1.jpg",
        mail: "catherina@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Margie Fitts",
        position: "IT Manager",
        image: "./assets/images/faces/8.jpg",
        mail: "margiefitts@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Dana Lott",
        position: "Hr Manager",
        image: "./assets/images/faces/2.jpg",
        mail: "danalott@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Benedict Vallone",
        position: "Hr Recriuter",
        image: "./assets/images/faces/3.jpg",
        mail: "benedict@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Robbie Ruder",
        position: "Ceo",
        image: "./assets/images/faces/4.jpg",
        mail: "benedict@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Micaela Aultman",
        position: "Php developer",
        image: "./assets/images/faces/5.jpg",
        mail: "micaela@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Jacquelynn Sapienza",
        position: "Web developer",
        image: "./assets/images/faces/6.jpg",
        mail: "jacquelynn@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Elida Distefano",
        position: "Hr Manager",
        image: "./assets/images/faces/8.jpg",
        mail: "distefano@gmail.com",
        phone: "+345 657 567"
      },
      {
        name: "Collin Bridgman",
        position: "web designer",
        image: "./assets/images/faces/9.jpg",
        mail: "bridgman@gmail.com",
        phone: "+345 657 567"
      }
    ];
  }
  static {
    this.\u0275fac = function Userlist03Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Userlist03Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Userlist03Component, selectors: [["app-userlist-03"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 0, consts: [["hassub", "Apps", "sub", "", "title1", "Userlist", "title", "User List 3", "activeTitle", "User List 3"], [1, "card"], [1, "card-body", "pb-2"], [1, "row", "mb-3"], [1, "col"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "text-nowrap", "mb-2"], [1, "fe", "fe-plus"], [1, "col", "col-auto"], [1, "input-group", "w-auto", "mb-2"], ["type", "text", "placeholder", "Search Files", 1, "form-control", "border-end-0"], ["aria-label", "button", "type", "button", 1, "btn", "btn-light", "bg-white", "border-start-0"], [1, "fe", "fe-search"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "card", "border", "p-0", "shadow-none", "overflow-hidden"], [1, "d-flex", "align-items-center", "p-4"], ["alt", "", 1, "avatar", "avatar-lg", "avatar-rounded", "d-block", "cover-image", 3, "src"], [1, "wrapper", "ms-3"], [1, "mb-0", "mt-1", "text-dark", "fw-semibold"], [1, "text-muted"], [1, "float-end", "ms-auto"], ["ngbDropdown", "", 1, "btn-group", "ms-3", "mb-0"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "option-dots", "no-caret"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "fe", "fe-edit", "me-2", "d-inline-flex"], [1, "fe", "fe-trash", "me-2", "d-inline-flex"], [1, "card-body", "border-top"], [1, "d-flex", "align-items-center"], [1, "media-icon", "me-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], [1, "h6", "my-auto", "text-truncate"], ["d", "M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z", "opacity", ".3"], ["d", "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-light", "btn-sm", "mb-1", "me-1"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-sm", "mb-1", "me-1"]], template: function Userlist03Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275text(7, " Add New User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
        \u0275\u0275element(10, "input", 9);
        \u0275\u0275elementStart(11, "button", 10);
        \u0275\u0275element(12, "i", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 12);
        \u0275\u0275repeaterCreate(14, Userlist03Component_For_15_Template, 44, 5, "div", 13, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.ContactData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Userlist03Component, { className: "Userlist03Component", filePath: "src\\app\\components\\apps\\user-list\\userlist-03\\userlist-03.component.ts", lineNumber: 12 });
})();
export {
  Userlist03Component
};
//# sourceMappingURL=userlist-03.component-FOSUVTPF.js.map
