import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
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
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/profile/profile-1/profile-1.component.ts
var _c0 = () => ["/pages/profile/edit-profile"];
var Profile1Component = class _Profile1Component {
  static {
    this.\u0275fac = function Profile1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Profile1Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile1Component, selectors: [["app-profile-1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 188, vars: 2, consts: [["hassub", "", "sub", "Pages", "title1", "Profile", "title", "Profile 1", "activeTitle", "Profile 1"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12"], [1, "card"], [1, "mx-auto", "mt-4", "text-center"], ["alt", "User Avatar", "src", "./assets/images/faces/16.jpg", 1, "rounded-circle"], [1, "card-body", "text-center"], [1, ""], [1, "text-dark", "mb-1", "fw-bold"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-sm", "mt-3", "me-1", 3, "routerLink"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-sm", "mt-3", "me-1"], [1, "card-footer", "p-0"], [1, "col-sm-6", "border-end", "text-center"], [1, "p-4"], [1, "mb-1", "fw-bold"], [1, "col-sm-6"], [1, "text-center", "p-4"], [1, "card-body"], [1, "card-title"], [1, "table-responsive"], [1, "table", "table-borderless", "mb-0"], [1, "py-2", "px-2"], [1, "fw-semibold", "w-50"], [1, "col-xl-8", "col-lg-8", "col-md-12"], [1, "main-content-body", "main-content-body-profile", "card", "mg-b-20"], [1, "main-profile-body"], [1, "tab-content"], ["id", "about", 1, "tab-pane", "show", "active", "p-0", "border-0"], [1, "mb-4"], [1, "profile-edit"], ["placeholder", "What are you doing right now?", "rows", "5", 1, "form-control"], [1, "profile-share", "border", "border-light2", "border-top-0"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-3"], ["aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Audio"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 13.3c.66 0 1.19-.54 1.19-1.2l.01-6.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v6.2c0 .66.54 1.2 1.2 1.2z", "opacity", ".3"], ["d", "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"], ["aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Video"], ["d", "M5 8h10v8H5z", "opacity", ".3"], ["d", "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"], ["aria-label", "anchor", "href", "javascript:void(0)", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Picture"], ["d", "M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z", "opacity", ".3"], ["d", "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z"], ["type", "submit", 1, "btn", "btn-sm", "btn-success"], [1, "fa", "fa-share", "ms-1"], [1, "fw-bold"], [1, "main-profile-bio", "mb-0"], [1, "mb-0"], ["href", "javascript:void(0)"], [1, "card-body", "border-top"], [1, "main-profile-contact-list", "d-xxl-flex"], [1, "media", "me-5", "d-block", "d-sm-flex"], [1, "media-icon", "bg-success-transparent", "text-success", "me-4"], [1, "fa", "fa-whatsapp"], [1, "media-body", "mt-2", "mt-sm-0"], [1, "fw-bold", "mb-1"], ["href", "javascript:void(0)", 1, "btn-link"], [1, "media", "d-block", "d-sm-flex"], [1, "media-icon", "bg-danger-transparent", "text-danger", "me-4"], [1, "fa", "fa-briefcase"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-light", "mt-1", "me-1"], [1, "media", "me-4"], [1, "media-icon", "bg-primary-transparent", "text-primary", "me-3", "mt-1"], [1, "fa", "fa-phone"], [1, "media-body"], [1, "media-icon", "bg-warning-transparent", "text-warning", "me-3", "mt-1"], [1, "fa", "fa-slack"], [1, "media"], [1, "media-icon", "bg-info-transparent", "text-info", "me-3", "mt-1"], [1, "fa", "fa-map"]], template: function Profile1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h4", 8);
        \u0275\u0275text(9, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h6", 9);
        \u0275\u0275text(11, "Web Designer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275text(13, "Edit Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 11);
        \u0275\u0275text(15, "Follow");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 1)(18, "div", 13)(19, "div", 14)(20, "h5", 15);
        \u0275\u0275text(21, "689k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 9);
        \u0275\u0275text(23, "Followers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "h5", 15);
        \u0275\u0275text(27, "3,765");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 9);
        \u0275\u0275text(29, "Following");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(30, "div", 3)(31, "div", 18)(32, "h4", 19);
        \u0275\u0275text(33, "Personal Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20)(35, "table", 21)(36, "tbody")(37, "tr")(38, "td", 22)(39, "span", 23);
        \u0275\u0275text(40, "Name ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "td", 22);
        \u0275\u0275text(42, "Jacob Smith");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "tr")(44, "td", 22)(45, "span", 23);
        \u0275\u0275text(46, "Location ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "td", 22);
        \u0275\u0275text(48, "USA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "tr")(50, "td", 22)(51, "span", 23);
        \u0275\u0275text(52, "Languages ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "td", 22);
        \u0275\u0275text(54, "English, German");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "td", 22)(57, "span", 23);
        \u0275\u0275text(58, "Website ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "td", 22);
        \u0275\u0275text(60, "smithabgd.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "tr")(62, "td", 22)(63, "span", 23);
        \u0275\u0275text(64, "Email ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "td", 22);
        \u0275\u0275text(66, "georgemestayer@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "tr")(68, "td", 22)(69, "span", 23);
        \u0275\u0275text(70, "Phone ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "td", 22);
        \u0275\u0275text(72, "+125 254 3562s");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(73, "div", 24)(74, "div", 25)(75, "div", 26)(76, "div", 27)(77, "div", 28)(78, "div", 18)(79, "div", 29)(80, "form", 30);
        \u0275\u0275element(81, "textarea", 31);
        \u0275\u0275elementStart(82, "div", 32)(83, "div", 33)(84, "a", 34);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(85, "svg", 35);
        \u0275\u0275element(86, "path", 36)(87, "path", 37)(88, "path", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(89, "a", 39);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(90, "svg", 35);
        \u0275\u0275element(91, "path", 36)(92, "path", 40)(93, "path", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(94, "a", 42);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(95, "svg", 35);
        \u0275\u0275element(96, "path", 36)(97, "path", 43)(98, "path", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(99, "button", 45);
        \u0275\u0275element(100, "i", 46);
        \u0275\u0275text(101, " Share");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "h5", 47);
        \u0275\u0275text(103, "Biography");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 48)(105, "p");
        \u0275\u0275text(106, "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries nchanged.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "p");
        \u0275\u0275text(108, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "p", 49);
        \u0275\u0275text(110, "pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.. ");
        \u0275\u0275elementStart(111, "a", 50);
        \u0275\u0275text(112, "More");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "div", 51)(114, "h5", 47);
        \u0275\u0275text(115, "Work & Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 52)(117, "div", 53)(118, "div", 54);
        \u0275\u0275element(119, "i", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 56)(121, "h6", 57);
        \u0275\u0275text(122, "Web Designer at ");
        \u0275\u0275elementStart(123, "a", 58);
        \u0275\u0275text(124, "Spruko");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "span");
        \u0275\u0275text(126, "2018 - present");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "p");
        \u0275\u0275text(128, "Past Work: Spruko, Inc.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "div", 59)(130, "div", 60);
        \u0275\u0275element(131, "i", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 56)(133, "h6", 57);
        \u0275\u0275text(134, "Studied at ");
        \u0275\u0275elementStart(135, "a", 58);
        \u0275\u0275text(136, "University");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "span");
        \u0275\u0275text(138, "2004-2008");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "p");
        \u0275\u0275text(140, "Graduation: Bachelor of Science in Computer Science");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(141, "div", 51)(142, "h5", 47);
        \u0275\u0275text(143, "Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "a", 62);
        \u0275\u0275text(145, "HTML5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "a", 62);
        \u0275\u0275text(147, "CSS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "a", 62);
        \u0275\u0275text(149, "Java Script");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "a", 62);
        \u0275\u0275text(151, "Photo Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "a", 62);
        \u0275\u0275text(153, "Php");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "a", 62);
        \u0275\u0275text(155, "Wordpress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "a", 62);
        \u0275\u0275text(157, "Sass");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "a", 62);
        \u0275\u0275text(159, "Angular");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 51)(161, "h5", 47);
        \u0275\u0275text(162, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "div", 52)(164, "div", 63)(165, "div", 64);
        \u0275\u0275element(166, "i", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 66)(168, "small", 9);
        \u0275\u0275text(169, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "div", 47);
        \u0275\u0275text(171, " +245 354 654 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "div", 63)(173, "div", 67);
        \u0275\u0275element(174, "i", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div", 66)(176, "small", 9);
        \u0275\u0275text(177, "Stack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 47);
        \u0275\u0275text(179, " @spruko.com ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(180, "div", 69)(181, "div", 70);
        \u0275\u0275element(182, "i", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "div", 66)(184, "small", 9);
        \u0275\u0275text(185, "Current Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 47);
        \u0275\u0275text(187, " San Francisco, USA ");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, RouterModule, RouterLink, NgbModule, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile1Component, { className: "Profile1Component", filePath: "src\\app\\components\\pages\\profile\\profile-1\\profile-1.component.ts", lineNumber: 13 });
})();
export {
  Profile1Component
};
//# sourceMappingURL=profile-1.component-K2IZGI6L.js.map
