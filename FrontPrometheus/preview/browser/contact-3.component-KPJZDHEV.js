import {
  OverlayscrollbarsModule,
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
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/contact/contact-3/contact-3.component.ts
function Contact3Component_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 3)(2, "div", 26);
    \u0275\u0275element(3, "div", 27);
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "div", 30);
    \u0275\u0275element(7, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275element(16, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35)(18, "button", 36);
    \u0275\u0275text(19, " View Contact ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 37)(21, "button", 38);
    \u0275\u0275element(22, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul", 16)(24, "li")(25, "a", 17);
    \u0275\u0275element(26, "i", 40);
    \u0275\u0275text(27, "Share");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li")(29, "a", 17);
    \u0275\u0275element(30, "i", 41);
    \u0275\u0275text(31, "Call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li")(33, "a", 17);
    \u0275\u0275element(34, "i", 42);
    \u0275\u0275text(35, "Message");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li")(37, "a", 17);
    \u0275\u0275element(38, "i", 43);
    \u0275\u0275text(39, "Video Call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "a", 17);
    \u0275\u0275element(42, "i", 44);
    \u0275\u0275text(43, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "li")(45, "a", 17);
    \u0275\u0275element(46, "i", 45);
    \u0275\u0275text(47, "Favourite");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "button", 46);
    \u0275\u0275element(49, "i", 47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("src", data_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.contact, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("ri-heart-3-", data_r1.like, " fs-16 text-danger");
  }
}
var Contact3Component = class _Contact3Component {
  constructor() {
    this.CardData = [
      {
        name: "Melissa Jane",
        email: "melissajane2134@gmail.com",
        contact: " +1(555) 354 2345",
        image: "./assets/images/faces/4.jpg",
        like: "fill"
      },
      {
        name: " Simon Cowall",
        email: "simoncowal111@gmail.com",
        contact: "  +1(555) 873 8923",
        image: "./assets/images/faces/15.jpg",
        like: "line"
      },
      {
        name: " Susana Sane",
        email: "susanasane@gmail.com",
        contact: " +1(555) 347 0923",
        image: "./assets/images/faces/2.jpg",
        like: "fill"
      },
      {
        name: "Sahne Watson",
        email: "shanewatson@gmail.com",
        contact: " +1(555) 674 7824",
        image: "./assets/images/faces/13.jpg",
        like: "line"
      },
      {
        name: "Dwayne Happy",
        email: "dwaynehappy235@gmail.com",
        contact: " +1(555) 985 2893",
        image: "./assets/images/faces/3.jpg",
        like: "line"
      },
      {
        name: "Meisha Tite",
        email: "meishatite456@gmail.com",
        contact: "  +1(555) 675 4680",
        image: "./assets/images/faces/5.jpg",
        like: "line"
      },
      {
        name: "Andrew Gerfield",
        email: "andrewgerfield00@gmail.com",
        contact: "+1(555) 765 8937",
        image: "./assets/images/faces/10.jpg",
        like: "line"
      },
      {
        name: "Samantha Melon",
        email: "samanthamelon@gmail.com",
        contact: "  +1(555) 890 5687",
        image: "./assets/images/faces/4.jpg",
        like: "line"
      },
      {
        name: " Elisha Smith",
        email: "elishasmith@gmail.com",
        contact: " +1(555) 972 9883",
        image: "./assets/images/faces/11.jpg",
        like: "line"
      },
      {
        name: "Devon Convoy",
        email: "devonconvoy65@gmail.com",
        contact: " +1(555) 693 7836",
        image: "./assets/images/faces/15.jpg",
        like: "fill"
      },
      {
        name: "  Jason Mama",
        email: "jasonmama96@gmail.com",
        contact: "+1(555) 875 6789",
        image: "./assets/images/faces/12.jpg",
        like: "line"
      },
      {
        name: "Monika Karen",
        email: "monikakaren@gmail.com",
        contact: " +1(555) 568 9234",
        image: "./assets/images/faces/1.jpg",
        like: "line"
      },
      {
        name: "  Tom Holland",
        email: "tomholland98@gmail.com",
        contact: "+1(555) 892 4334",
        image: "./assets/images/faces/15.jpg",
        like: "line"
      },
      {
        name: "Anelica Julie",
        email: "angelicajulie@gmail.com<",
        contact: "  +1(555) 882 3445",
        image: "./assets/images/faces/17.jpg",
        like: "line"
      },
      {
        name: "Aneera Khan",
        email: "aneerakhan@gmail.com",
        contact: " +1(555) 973 8734",
        image: "./assets/images/faces/8.jpg",
        like: "line"
      },
      {
        name: " Linda Simson",
        email: "lindasimson@gmail.com",
        contact: " +1(555) 234 9345",
        image: "./assets/images/faces/15.jpg",
        like: "fill"
      },
      {
        name: "Umaga Nigel",
        email: "umaganigel89@gmail.com",
        contact: "+1(555) 783 0213",
        image: "./assets/images/faces/14.jpg",
        like: "line"
      },
      {
        name: " Json Taylor",
        email: "jsontaylor@gmail.com",
        contact: "+1(555) 234 2452",
        image: "./assets/images/faces/17.jpg",
        like: "fill"
      },
      {
        name: " Karizma Tope",
        email: "Karizmatope@gmail.com",
        contact: "+1(555) 890 2455",
        image: "./assets/images/faces/7.jpg",
        like: "line"
      },
      {
        name: " Gahaskar Shaik",
        email: "gahaskarshaik@gmail.com",
        contact: " +1(555) 982 7648",
        image: "./assets/images/faces/9.jpg",
        like: "line"
      },
      {
        name: "   Balvinder Singh",
        email: "balvindersingh@gmail.com",
        contact: "+1(555) 002 1239",
        image: "./assets/images/faces/17.jpg",
        like: "line"
      },
      {
        name: " Ramika Missi",
        email: "ramikamissi@gmail.com",
        contact: "  +1(555) 982 4834",
        image: "./assets/images/faces/6.jpg",
        like: "line"
      }
    ];
  }
  static {
    this.\u0275fac = function Contact3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Contact3Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact3Component, selectors: [["app-contact-3"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 0, consts: [["hassub", "apps", "sub", "", "title1", "Contact", "title", "Contact List 3", "activeTitle", "Contact List 3"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "contact-header"], [1, "d-sm-flex", "d-block", "align-items-center", "justify-content-between"], [1, "h5", "fw-semibold", "mb-0"], [1, "d-flex", "mt-sm-0", "mt-2", "align-items-center"], [1, "input-group"], ["type", "text", "placeholder", "Search Contact", "aria-describedby", "search-contact-member", 1, "form-control", "bg-light", "border-0"], ["aria-label", "button", "type", "button", "id", "search-contact-member", 1, "btn", "btn-light", "border-0"], [1, "ri-search-line", "text-muted"], ["ngbDropdown", "", 1, "dropdown", "ms-2"], ["ngbDropdownToggle", "", "aria-label", "button", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-primary-light", "btn-wave", "no-caret"], [1, "ti", "ti-dots-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["aria-label", "button", "type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Add Contact", 1, "btn", "btn-icon", "btn-secondary-light", "ms-2"], [1, "ri-add-line"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [1, "pagination", "justify-content-end"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "card-body", "contact-action"], [1, "contact-overlay"], [1, "d-flex", "align-items-top"], [1, "d-flex", "flex-fill", "flex-wrap", "gap-3"], [1, "avatar", "avatar-xl", "avatar-rounded"], ["alt", "", 3, "src"], [1, "mb-1", "fw-semibold"], [1, "mb-1", "text-muted", "contact-mail", "text-truncate"], [1, "fw-semibold", "fs-11", "mb-0", "text-primary"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "contact-hover-buttons"], ["type", "button", 1, "btn", "btn-sm", "btn-light", "contact-hover-btn"], ["ngbDropdown", "", 1, "dropdown", "contact-hover-dropdown"], ["ngbDropdownToggle", "", "aria-label", "button", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-icon", "btn-light", "btn-wave", "no-caret"], [1, "ri-more-2-fill"], [1, "ri-share-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-phone-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-chat-2-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-video-chat-line", "me-2", "align-middle", "d-inline-block"], [1, "ri-delete-bin-5-line", "me-2", "align-middle", "d-inline-block"], [1, "ri", "ri-heart-3-line", "me-2", "align-middle", "d-inline-block"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-light", "contact-hover-dropdown1"], [1, "ri-heart-3-fill", "text-danger"]], template: function Contact3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275text(8, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
        \u0275\u0275element(11, "input", 10);
        \u0275\u0275elementStart(12, "button", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13)(15, "button", 14);
        \u0275\u0275element(16, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 16)(18, "li")(19, "a", 17);
        \u0275\u0275text(20, "Delete All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li")(22, "a", 17);
        \u0275\u0275text(23, "Copy All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "li")(25, "a", 17);
        \u0275\u0275text(26, "Move To");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "button", 18);
        \u0275\u0275element(28, "i", 19);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275repeaterCreate(29, Contact3Component_For_30_Template, 50, 7, "div", 20, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(31, "nav", 21)(32, "ul", 22)(33, "li", 23)(34, "a", 24);
        \u0275\u0275text(35, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li", 25)(37, "a", 24);
        \u0275\u0275text(38, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li", 25)(40, "a", 24);
        \u0275\u0275text(41, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li", 25)(43, "a", 24);
        \u0275\u0275text(44, "Next");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275repeater(ctx.CardData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, OverlayscrollbarsModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact3Component, { className: "Contact3Component", filePath: "src\\app\\components\\apps\\contact\\contact-3\\contact-3.component.ts", lineNumber: 13 });
})();
export {
  Contact3Component
};
//# sourceMappingURL=contact-3.component-KPJZDHEV.js.map
