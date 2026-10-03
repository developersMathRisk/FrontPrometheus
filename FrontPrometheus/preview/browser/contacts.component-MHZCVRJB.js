import {
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
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/contacts/contacts.component.ts
function ContactsComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 29);
    \u0275\u0275element(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementStart(6, "div", 30)(7, "div", 31)(8, "a", 32);
    \u0275\u0275element(9, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33)(11, "a", 34);
    \u0275\u0275element(12, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 36)(14, "li")(15, "a", 20);
    \u0275\u0275element(16, "i", 37);
    \u0275\u0275text(17, "Share");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 20);
    \u0275\u0275element(20, "i", 38);
    \u0275\u0275text(21, "Video Call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 20);
    \u0275\u0275element(24, "i", 39);
    \u0275\u0275text(25, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 40);
    \u0275\u0275element(27, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 42)(29, "h6", 43);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 44);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 45);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 46)(36, "button", 47);
    \u0275\u0275element(37, "i", 48);
    \u0275\u0275text(38, " Contact ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 49);
    \u0275\u0275element(40, "i", 50);
    \u0275\u0275text(41, "Message ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275classMapInterpolate1("ri-heart-3-", data_r1.heart, "");
    \u0275\u0275advance(18);
    \u0275\u0275property("src", data_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r1.name, "@gmail.com");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.phone, " ");
  }
}
var ContactsComponent = class _ContactsComponent {
  constructor() {
    this.page = 1;
    this.cardData = [
      {
        heart: "fill",
        img: "./assets/images/faces/4.jpg",
        name: "Amelia",
        mail: "emiley2134@gmail.com",
        phone: "+1(222) 354 2345"
      },
      {
        heart: "line",
        img: "./assets/images/faces/15.jpg",
        name: "Jackson",
        mail: "Jackson111@gmail.com",
        phone: "+1(222) 873 8923"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/2.jpg",
        name: "Kingston",
        mail: "Kingston55@gmail.com",
        phone: "  +1(222) 347 0923"
      },
      {
        heart: "line",
        img: "./assets/images/faces/13.jpg",
        name: " Robin Keith",
        mail: " RobinKeith424@gmail.com",
        phone: "+1(222) 674 7824"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/9.jpg",
        name: "Sebastian",
        mail: "Sebastian@gmail.com",
        phone: "+1(222) 985 2893"
      },
      {
        heart: "line",
        img: "./assets/images/faces/5.jpg",
        name: "Juliana",
        mail: "Juliana@gmail.com",
        phone: "+1(222) 675 4680"
      },
      {
        heart: "line",
        img: "./assets/images/faces/10.jpg",
        name: "Clark",
        mail: "Clark@gmail.com",
        phone: "+1(222) 765 8937"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/21.jpg",
        name: "Stella",
        mail: "Stella4545@gmail.com",
        phone: " +1(222) 890 5687"
      },
      {
        heart: "line",
        img: "./assets/images/faces/4.jpg",
        name: "Angela",
        mail: "Angela1245@gmail.com",
        phone: "+1(222) 972 9883"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/3.jpg",
        name: "Anthony",
        mail: "Anthony@gmail.com",
        phone: " +1(222) 693 7836"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/6.jpg",
        name: "Evelyn",
        mail: "Evelyn2535@gmail.com",
        phone: "+1(222) 972 9883"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/7.jpg",
        name: "Benjamin",
        mail: "Benjamin1452@gmail.com",
        phone: "+1(222) 972 2583"
      },
      {
        heart: "fill",
        img: "./assets/images/faces/17.jpg",
        name: "Isabella",
        mail: "Isabella2541@gmail.com",
        phone: "+1(222) 568 9234"
      },
      {
        heart: "line",
        img: "./assets/images/faces/13.jpg",
        name: "Ronald Hanns",
        mail: "RonaldHanns@gmail.com",
        phone: "+1(222) 568 9356"
      },
      {
        heart: "fill",
        img: "./assets/images/media/media-36.jpg",
        name: "Miller",
        mail: "Miller@gmail.com",
        phone: "+1(222) 568 9994"
      },
      {
        heart: "line",
        img: "./assets/images/media/media-8.jpg",
        name: "Nitheri",
        mail: "Nitheri1452@gmail.com",
        phone: "+1(222) 568 9685"
      }
    ];
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "custom-card", "mt-4"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-body"], [1, "contact-header"], [1, "d-sm-flex", "d-block", "align-items-center", "justify-content-between"], [1, "h5", "fw-medium", "mb-0"], [1, "d-flex", "mt-sm-0", "mt-2", "align-items-center"], [1, "input-group"], ["type", "text", "placeholder", "Search Contact", "aria-describedby", "search-contact-member", 1, "form-control", "border-0"], ["type", "button", "id", "search-contact-member", 1, "btn", "btn-primary-light"], [1, "ri-search-line", "text-muted"], ["ngbDropdown", "", 1, "dropdown", "ms-2"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-primary-light", "btn-wave", "no-caret"], [1, "ti", "ti-dots-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Add Contact", 1, "btn", "btn-icon", "btn-secondary-light", "ms-2"], [1, "ri-add-line"], [1, "col-xxl-3", "col-xl-4", "col-sm-6"], ["aria-label", "Page navigation"], [1, "pagination", "justify-content-end"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "card", "custom-card", "text-center"], [1, "card-body", "p-4"], [1, "d-flex", "mb-2"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "Favourite", 1, "btn", "text-danger", "border", "border-light", "btn-sm", "btn-icon"], ["ngbDropdown", "", 1, "dropdown", "ms-auto"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-icon", "btn-sm", "no-caret"], [1, "ri-more-2-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "ri-share-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-video-chat-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-delete-bin-5-line", "me-2", "align-middle", "d-inline-block"], [1, "avatar", "avatar-xl", "rounded-2", "mb-3"], ["alt", "", 1, "img-thumbnail", 3, "src"], [1, "mb-3"], [1, "mb-1", "fw-medium"], [1, "mb-1", "text-muted", "contact-mail", "text-truncate"], [1, "fw-medium", "fs-11", "mb-0", "text-fixed-white"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "border"], [1, "ri-phone-line", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "border"], [1, "ri-chat-1-line", "me-1"]], template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        \u0275\u0275text(11, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "input", 13);
        \u0275\u0275elementStart(15, "button", 14);
        \u0275\u0275element(16, "i", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 16)(18, "button", 17);
        \u0275\u0275element(19, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "ul", 19)(21, "li")(22, "a", 20);
        \u0275\u0275text(23, "Delete All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "li")(25, "a", 20);
        \u0275\u0275text(26, "Copy All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li")(28, "a", 20);
        \u0275\u0275text(29, "Move To");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "button", 21);
        \u0275\u0275element(31, "i", 22);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275repeaterCreate(32, ContactsComponent_For_33_Template, 42, 7, "div", 23, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(34, "nav", 24)(35, "ul", 25)(36, "li", 26)(37, "a", 27);
        \u0275\u0275text(38, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li", 28)(40, "a", 27);
        \u0275\u0275text(41, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li", 28)(43, "a", 27);
        \u0275\u0275text(44, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li", 28)(46, "a", 27);
        \u0275\u0275text(47, "Next");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.cardData);
      }
    }, dependencies: [SharedModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src\\app\\components\\pages\\contacts\\contacts.component.ts", lineNumber: 12 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=contacts.component-MHZCVRJB.js.map
