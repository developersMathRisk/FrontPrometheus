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

// src/app/components/pages/profile/profile-3/profile-3.component.ts
var _c0 = () => ["/pages/profile/edit-profile"];
var Profile3Component = class _Profile3Component {
  static {
    this.\u0275fac = function Profile3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Profile3Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile3Component, selectors: [["app-profile-3"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 338, vars: 2, consts: [["hassub", "", "sub", "Pages", "title1", "Profile", "title", "Profile 3", "activeTitle", "Profile 3"], [1, "card", "overflow-hidden"], [1, "card-body"], [1, "box-widget", "widget-user"], [1, "widget-user-image", "d-sm-flex"], ["alt", "User Avatar", "src", "./assets/images/faces/16.jpg", 1, "rounded-circle", "border", "p-0"], [1, "mt-4", "ms-sm-4", "ms-0"], [1, "pro-user-username", "text-dark", "mb-2", "fw-bold"], [1, "badge", "bg-light", "text-dark", "rounded-pill", "me-1"], [1, "d-flex", "mb-1", "mt-4"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", "opacity", ".3"], ["d", "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"], [1, "h6", "mb-0", "ms-3", "mt-1"], [1, "d-flex"], ["d", "M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z", "opacity", ".3"], ["d", "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z"], [1, "social", "social-profile-buttons"], [1, "text-center", "ps-0", "mt-2", "mb-0"], ["aria-label", "anchor", "href", "javascript:void(0)", 1, "social-icon"], [1, "bi", "bi-facebook"], [1, "bi", "bi-twitter-x"], [1, "bi", "bi-rss"], [1, "bi", "bi-youtube"], [1, "bi", "bi-linkedin"], [1, "bi", "bi-google"], [1, "btn", "btn-primary", "btn-sm", "mt-4", "me-1", 3, "routerLink"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-sm", "mt-4", "me-1"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-xxl-4"], [1, "card", "border", "p-0", "shadow-none"], [1, "card-header"], [1, "card-title"], [1, "main-profile-contact-list"], [1, "media", "mt-0", "d-sm-flex", "d-block"], [1, "media-icon", "bg-success-transparent", "text-success", "me-sm-3", "mb-2", "mb-sm-0"], [1, "fa", "fa-whatsapp", "media-icon"], [1, "media-body"], [1, "fw-bold", "mb-1"], ["href", "javascript:void(0)", 1, "btn-link"], [1, "media", "d-sm-flex", "d-block"], [1, "media-icon", "bg-danger-transparent", "text-danger", "me-sm-3", "mb-2", "mb-sm-0"], [1, "fa", "fa-briefcase", "media-icon"], [1, "mb-0"], [1, "media", "mb-3"], [1, "media-icon", "bg-primary-transparent", "text-primary", "me-3", "mt-1"], [1, "fa", "fa-phone"], [1, "text-muted"], [1, "fw-bold"], [1, "media-icon", "bg-warning-transparent", "text-warning", "me-3", "mt-1"], [1, "fa", "fa-slack"], [1, "media"], [1, "media-icon", "bg-info-transparent", "text-info", "me-3", "mt-1"], [1, "fa", "fa-map"], [1, "col-xxl-8"], [1, "profile-edit", "mb-4"], ["placeholder", "What are you doing right now?", "rows", "5", 1, "form-control"], [1, "profile-share", "border", "border-light2", "border-top-0", "d-flex", "align-items-center"], ["aria-label", "anchor", "href", "javascript:void(0)", "title", "", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Audio", 1, "me-2"], ["d", "M12 13.3c.66 0 1.19-.54 1.19-1.2l.01-6.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v6.2c0 .66.54 1.2 1.2 1.2z", "opacity", ".3"], ["d", "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"], ["aria-label", "anchor", "href", "javascript:void(0)", "title", "", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Video", 1, "me-2"], ["d", "M5 8h10v8H5z", "opacity", ".3"], ["d", "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"], ["aria-label", "anchor", "href", "javascript:void(0)", "title", "", "data-bs-toggle", "tooltip", "placement", "bottom", "ngbTooltip", "Picture", 1, "me-2"], ["d", "M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z", "opacity", ".3"], ["d", "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z"], ["type", "submit", 1, "btn", "btn-sm", "btn-success", "ms-auto"], [1, "fa", "fa-share", "ms-1"], [1, "media", "mt-0"], [1, "media-user", "me-2"], [1, ""], ["alt", "", "src", "./assets/images/faces/16.jpg", 1, "rounded-circle", "avatar", "avatar-md"], [1, "mb-0", "mt-1", "fw-bold"], [1, "text-primary"], [1, "ms-auto"], ["ngbDropdown", "", 1, "dropdown", "show"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "JavaScript:void(0);", "data-bs-toggle", "dropdown", 1, "new", "option-dots", "no-caret"], ["d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "mt-4"], [1, "media", "profile-footer", "d-sm-flex", "align-items-center", "justify-content-center", "d-block"], [1, "d-sm-flex", "align-items-center"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-rounded", "avatar-sm"], ["src", "./assets/images/faces/12.jpg", "alt", "img"], ["src", "./assets/images/faces/2.jpg", "alt", "img"], ["src", "./assets/images/faces/9.jpg", "alt", "img"], ["src", "./assets/images/faces/4.jpg", "alt", "img"], [1, "my-auto", "ms-2"], ["aria-label", "anchor", "href", "JavaScript:void(0);", 1, "new"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-3", "mt-2"], ["d", "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", "opacity", ".3"], ["d", "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"], ["d", "M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z", "opacity", ".3"], ["d", "M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "mt-2"], ["cx", "18", "cy", "5", "opacity", ".3", "r", "1"], ["cx", "6", "cy", "12", "opacity", ".3", "r", "1"], ["cx", "18", "cy", "19.02", "opacity", ".3", "r", "1"], ["d", "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], ["src", "./assets/images/photos/2.jpg", "alt", "img", 1, "w-40p", "m-1", "br-7"], ["src", "./assets/images/photos/3.jpg", "alt", "img", 1, "w-40p", "m-1", "br-7"], ["src", "./assets/images/photos/4.jpg", "alt", "img", 1, "w-30p", "m-1", "br-7"], ["src", "./assets/images/photos/5.jpg", "alt", "img", 1, "w-30p", "m-1", "br-7"], ["src", "./assets/images/photos/6.jpg", "alt", "img", 1, "w-30p", "m-1", "br-7"]], template: function Profile3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "h4", 7);
        \u0275\u0275text(9, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div")(11, "span", 8);
        \u0275\u0275text(12, "admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Company director");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 10);
        \u0275\u0275element(17, "path", 11)(18, "path", 12)(19, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "div", 14);
        \u0275\u0275text(21, "collinbridgman@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 10);
        \u0275\u0275element(24, "path", 11)(25, "path", 16)(26, "path", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "div", 14);
        \u0275\u0275text(28, "+345 657 567");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 18)(30, "ul", 19)(31, "li")(32, "a", 20);
        \u0275\u0275element(33, "i", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "li")(35, "a", 20);
        \u0275\u0275element(36, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "li")(38, "a", 20);
        \u0275\u0275element(39, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li")(41, "a", 20);
        \u0275\u0275element(42, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "li")(44, "a", 20);
        \u0275\u0275element(45, "i", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "li")(47, "a", 20);
        \u0275\u0275element(48, "i", 26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "a", 27);
        \u0275\u0275text(50, "Edit Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 28);
        \u0275\u0275text(52, "Follow");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "div", 29)(54, "div", 30)(55, "div", 31)(56, "div", 32)(57, "div", 33)(58, "div", 34);
        \u0275\u0275text(59, "Education");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 2)(61, "div", 35)(62, "div", 36)(63, "div", 37);
        \u0275\u0275element(64, "i", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 39)(66, "h6", 40);
        \u0275\u0275text(67, "Web Designer at ");
        \u0275\u0275elementStart(68, "a", 41);
        \u0275\u0275text(69, "Spruko");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "span");
        \u0275\u0275text(71, "2018 - present");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, "Past Work: Spruko, Inc.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 42)(75, "div", 43);
        \u0275\u0275element(76, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 39)(78, "h6", 40);
        \u0275\u0275text(79, "Studied at ");
        \u0275\u0275elementStart(80, "a", 41);
        \u0275\u0275text(81, "University");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "span");
        \u0275\u0275text(83, "2004-2008");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p", 45);
        \u0275\u0275text(85, "Graduation: Bachelor of Science in Computer Science");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(86, "div", 32)(87, "div", 33)(88, "div", 34);
        \u0275\u0275text(89, "Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 2)(91, "div", 35)(92, "div", 46)(93, "div", 47);
        \u0275\u0275element(94, "i", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 39)(96, "small", 49);
        \u0275\u0275text(97, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 50);
        \u0275\u0275text(99, " +245 354 654 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 46)(101, "div", 51);
        \u0275\u0275element(102, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 39)(104, "small", 49);
        \u0275\u0275text(105, "Stack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 50);
        \u0275\u0275text(107, " @spruko.com ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "div", 53)(109, "div", 54);
        \u0275\u0275element(110, "i", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 39)(112, "small", 49);
        \u0275\u0275text(113, "Current Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 50);
        \u0275\u0275text(115, " San Francisco, USA ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(116, "div", 56)(117, "form", 57);
        \u0275\u0275element(118, "textarea", 58);
        \u0275\u0275elementStart(119, "div", 59)(120, "a", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(121, "svg", 10);
        \u0275\u0275element(122, "path", 11)(123, "path", 61)(124, "path", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(125, "a", 63);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(126, "svg", 10);
        \u0275\u0275element(127, "path", 11)(128, "path", 64)(129, "path", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(130, "a", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(131, "svg", 10);
        \u0275\u0275element(132, "path", 11)(133, "path", 67)(134, "path", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(135, "button", 69);
        \u0275\u0275element(136, "i", 70);
        \u0275\u0275text(137, " Share");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "div", 32)(139, "div", 33)(140, "div", 34);
        \u0275\u0275text(141, "Time Line");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 2)(143, "div", 15)(144, "div", 71)(145, "div", 72)(146, "div", 73);
        \u0275\u0275element(147, "img", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 39)(149, "h6", 75);
        \u0275\u0275text(150, "Peter Hill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "small", 76);
        \u0275\u0275text(152, "just now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(153, "div", 77)(154, "div", 78)(155, "a", 79);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(156, "svg", 10);
        \u0275\u0275element(157, "path", 11)(158, "path", 80);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(159, "div", 81)(160, "a", 82);
        \u0275\u0275text(161, "Edit Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "a", 82);
        \u0275\u0275text(163, "Delete Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "a", 82);
        \u0275\u0275text(165, "Personal Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(166, "div", 83)(167, "p", 45);
        \u0275\u0275text(168, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 84)(170, "div", 85)(171, "div", 72)(172, "div", 86)(173, "span", 87);
        \u0275\u0275element(174, "img", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "span", 87);
        \u0275\u0275element(176, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "span", 87);
        \u0275\u0275element(178, "img", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "span", 87);
        \u0275\u0275element(180, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "span", 87);
        \u0275\u0275element(182, "img", 91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(183, "div", 39)(184, "h6", 92);
        \u0275\u0275text(185, "28 people like your photo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 77)(187, "div", 15)(188, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(189, "svg", 94);
        \u0275\u0275element(190, "path", 11)(191, "path", 95)(192, "path", 96);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(193, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(194, "svg", 94);
        \u0275\u0275element(195, "path", 11)(196, "path", 97)(197, "path", 98);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(198, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(199, "svg", 99);
        \u0275\u0275element(200, "path", 11)(201, "circle", 100)(202, "circle", 101)(203, "circle", 102)(204, "path", 103);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(205, "div", 2)(206, "div", 15)(207, "div", 71)(208, "div", 72)(209, "div", 73);
        \u0275\u0275element(210, "img", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "div", 39)(212, "h6", 75);
        \u0275\u0275text(213, "Peter Hill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "small", 49);
        \u0275\u0275text(215, "Sep 26 2019, 10:14am");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "div", 77)(217, "div", 78)(218, "a", 79);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(219, "svg", 10);
        \u0275\u0275element(220, "path", 11)(221, "path", 80);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(222, "div", 81)(223, "a", 82);
        \u0275\u0275text(224, "Edit Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "a", 82);
        \u0275\u0275text(226, "Delete Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "a", 82);
        \u0275\u0275text(228, "Personal Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(229, "div", 83)(230, "p", 45);
        \u0275\u0275text(231, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 15);
        \u0275\u0275element(233, "img", 104)(234, "img", 105);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "div", 84)(236, "div", 85)(237, "div", 72)(238, "div", 86)(239, "span", 87);
        \u0275\u0275element(240, "img", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "span", 87);
        \u0275\u0275element(242, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "span", 87);
        \u0275\u0275element(244, "img", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "span", 87);
        \u0275\u0275element(246, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "span", 87);
        \u0275\u0275element(248, "img", 91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(249, "div", 39)(250, "h6", 92);
        \u0275\u0275text(251, "28 people like your photo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(252, "div", 77)(253, "div", 15)(254, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(255, "svg", 94);
        \u0275\u0275element(256, "path", 11)(257, "path", 95)(258, "path", 96);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(259, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(260, "svg", 94);
        \u0275\u0275element(261, "path", 11)(262, "path", 97)(263, "path", 98);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(264, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(265, "svg", 99);
        \u0275\u0275element(266, "path", 11)(267, "circle", 100)(268, "circle", 101)(269, "circle", 102)(270, "path", 103);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(271, "div", 2)(272, "div", 15)(273, "div", 71)(274, "div", 72)(275, "div", 73);
        \u0275\u0275element(276, "img", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(277, "div", 39)(278, "h6", 75);
        \u0275\u0275text(279, "Peter Hill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(280, "small", 49);
        \u0275\u0275text(281, "Sep 24 2019, 09:14am");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(282, "div", 77)(283, "div", 78)(284, "a", 79);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(285, "svg", 10);
        \u0275\u0275element(286, "path", 11)(287, "path", 80);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(288, "div", 81)(289, "a", 82);
        \u0275\u0275text(290, "Edit Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "a", 82);
        \u0275\u0275text(292, "Delete Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "a", 82);
        \u0275\u0275text(294, "Personal Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(295, "div", 83)(296, "p", 45);
        \u0275\u0275text(297, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "div", 15);
        \u0275\u0275element(299, "img", 106)(300, "img", 107)(301, "img", 108);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(302, "div", 84)(303, "div", 85)(304, "div", 72)(305, "div", 86)(306, "span", 87);
        \u0275\u0275element(307, "img", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(308, "span", 87);
        \u0275\u0275element(309, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "span", 87);
        \u0275\u0275element(311, "img", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "span", 87);
        \u0275\u0275element(313, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "span", 87);
        \u0275\u0275element(315, "img", 91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(316, "div", 39)(317, "h6", 92);
        \u0275\u0275text(318, "28 people like your photo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(319, "div", 77)(320, "div", 15)(321, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(322, "svg", 94);
        \u0275\u0275element(323, "path", 11)(324, "path", 95)(325, "path", 96);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(326, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(327, "svg", 94);
        \u0275\u0275element(328, "path", 11)(329, "path", 97)(330, "path", 98);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(331, "a", 93);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(332, "svg", 99);
        \u0275\u0275element(333, "path", 11)(334, "circle", 100)(335, "circle", 101)(336, "circle", 102)(337, "path", 103);
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(49);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, RouterModule, RouterLink, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile3Component, { className: "Profile3Component", filePath: "src\\app\\components\\pages\\profile\\profile-3\\profile-3.component.ts", lineNumber: 13 });
})();
export {
  Profile3Component
};
//# sourceMappingURL=profile-3.component-JIIMNQUY.js.map
