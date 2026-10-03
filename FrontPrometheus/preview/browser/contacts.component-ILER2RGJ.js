import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
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

// src/app/components/apps/contact/contacts/contacts.component.ts
function ContactsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17)(10, "a", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 19);
    \u0275\u0275element(12, "path", 20)(13, "path", 21)(14, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Message");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "a", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 19);
    \u0275\u0275element(18, "path", 20)(19, "path", 24)(20, "circle", 25)(21, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "Profile");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.position);
  }
}
var ContactsComponent = class _ContactsComponent {
  constructor() {
    this.ContactData = [
      {
        name: "Denis Rosenblum",
        position: "Project Manager",
        image: "./assets/images/faces/7.jpg"
      },
      {
        name: "Catherina Bamber",
        position: "Compony Manager",
        image: "./assets/images/faces/1.jpg"
      },
      {
        name: "Dana Lott",
        position: "Hr Manager",
        image: "./assets/images/faces/2.jpg"
      },
      {
        name: "Benedict Vallone",
        position: "Hr Recriuter",
        image: "./assets/images/faces/3.jpg"
      },
      {
        name: "Robbie Ruder",
        position: "Ceo",
        image: "./assets/images/faces/4.jpg"
      },
      {
        name: "Micaela Aultman",
        position: "Php developer",
        image: "./assets/images/faces/5.jpg"
      },
      {
        name: "Jacquelynn Sapienza",
        position: "Web developer",
        image: "./assets/images/faces/6.jpg"
      },
      {
        name: "Elida Distefano",
        position: "Hr Manager",
        image: "./assets/images/faces/8.jpg"
      },
      {
        name: "Collin Bridgman",
        position: "web designer",
        image: "./assets/images/faces/9.jpg"
      }
    ];
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 0, consts: [["hassub", "Apps", "sub", "", "title1", "Contact", "title", "Contact's", "activeTitle", "Contact's"], [1, "row"], [1, "col", "mb-4"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "text-nowrap"], [1, "fe", "fe-plus"], [1, "col", "col-auto", "mb-4"], [1, "input-group", "mb-3"], ["aria-label", "button", "type", "button", 1, "btn", "btn-light"], [1, "fe", "fe-search"], ["type", "text", "placeholder", "Recipient's username", 1, "form-control"], [1, "col-xl-4", "col-lg-6"], [1, "card", "text-center", "user-contact-list"], [1, "p-4"], [1, "avatar", "avatar-xxl", "avatar-rounded", "d-block", "cover-image", "mx-auto", 3, "src"], [1, "wrapper", "mt-3"], [1, "mb-0", "mt-1", "text-dark", "fw-semibold"], [1, "text-muted"], [1, ""], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "btn-svgs", "mt-4", "me-1"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-3"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z", "opacity", ".3"], ["d", "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "btn-svgs", "mt-4", "me-1"], ["d", "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", "opacity", ".3"], ["cx", "12", "cy", "8", "opacity", ".3", "r", "2"], ["d", "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"]], template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Add New Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "button", 7);
        \u0275\u0275element(9, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 1);
        \u0275\u0275repeaterCreate(12, ContactsComponent_For_13_Template, 23, 3, "div", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.ContactData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src\\app\\components\\apps\\contact\\contacts\\contacts.component.ts", lineNumber: 11 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=contacts.component-ILER2RGJ.js.map
