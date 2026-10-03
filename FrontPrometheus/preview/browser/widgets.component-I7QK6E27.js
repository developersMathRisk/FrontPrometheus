import {
  LightgalleryModule
} from "./chunk-ATT2GAFS.js";
import {
  GallerizeDirective,
  Gallery,
  ImageItem,
  LightboxModule
} from "./chunk-KMVUC57N.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/widgets/widgets/widgets.component.ts
function WidgetsComponent_For_662_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "a", 162);
    \u0275\u0275element(2, "img", 163);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", img_r1.srcUrl, \u0275\u0275sanitizeUrl);
  }
}
var WidgetsComponent = class _WidgetsComponent {
  constructor(gallery) {
    this.gallery = gallery;
    this.imageData = data;
  }
  ngOnInit() {
    this.items = this.imageData.map((item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }
  static {
    this.\u0275fac = function WidgetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WidgetsComponent)(\u0275\u0275directiveInject(Gallery));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WidgetsComponent, selectors: [["app-widgets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 732, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Widgets", "title", "Widgets", "activeTitle", "Widgets"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12"], [1, "card"], [1, "card-body"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-success", "icon-dropshadow-success"], ["opacity", ".0", "d", "M3.31,11 L5.51,19.01 L18.5,19 L20.7,11 L3.31,11 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z"], ["d", "M22,9 L17.21,9 L12.83,2.44 C12.64,2.16 12.32,2.02 12,2.02 C11.68,2.02 11.36,2.16 11.17,2.45 L6.79,9 L2,9 C1.45,9 1,9.45 1,10 C1,10.09 1.01,10.18 1.04,10.27 L3.58,19.54 C3.81,20.38 4.58,21 5.5,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,10 C23,9.45 22.55,9 22,9 Z M12,4.8 L14.8,9 L9.2,9 L12,4.8 Z M18.5,19 L5.51,19.01 L3.31,11 L20.7,11 L18.5,19 Z M12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z"], [1, "mb-1"], [1, "mb-1", "fw-bold"], [1, "mb-1", "text-muted"], [1, "text-danger"], [1, "fa", "fa-caret-down", "me-1"], [1, "progress", "progress-sm", "mt-3", "bg-success-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-success", 2, "width", "78%"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-secondary", "icon-dropshadow-secondary"], ["opacity", ".0", "d", "M12.07,6.01 C8.2,6.01 5.07,9.14 5.07,13.01 C5.07,16.88 8.2,20.01 12.07,20.01 C15.94,20.01 19.07,16.88 19.07,13.01 C19.07,9.14 15.94,6.01 12.07,6.01 Z M13.07,14.01 L11.07,14.01 L11.07,8.01 L13.07,8.01 L13.07,14.01 Z"], ["d", "M9.07,1.01 L15.07,1.01 L15.07,3.01 L9.07,3.01 L9.07,1.01 Z M11.07,8.01 L13.07,8.01 L13.07,14.01 L11.07,14.01 L11.07,8.01 Z M19.1,7.39 L20.52,5.97 C20.09,5.46 19.62,4.98 19.11,4.56 L17.69,5.98 C16.14,4.74 14.19,4 12.07,4 C7.1,4 3.07,8.03 3.07,13 C3.07,17.97 7.09,22 12.07,22 C17.05,22 21.07,17.97 21.07,13 C21.07,10.89 20.33,8.93 19.1,7.39 Z M12.07,20.01 C8.2,20.01 5.07,16.88 5.07,13.01 C5.07,9.14 8.2,6.01 12.07,6.01 C15.94,6.01 19.07,9.14 19.07,13.01 C19.07,16.88 15.94,20.01 12.07,20.01 Z"], [1, "text-success"], [1, "fa", "fa-caret-up", "me-1"], [1, "progress", "progress-sm", "mt-3", "bg-secondary-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-secondary", 2, "width", "58%"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-primary", "icon-dropshadow-primary"], ["d", "M17.65,6.35 C16.2,4.9 14.21,4 12,4 C7.58,4 4.01,7.58 4.01,12 C4.01,16.42 7.58,20 12,20 C15.73,20 18.84,17.45 19.73,14 L17.65,14 C16.83,16.33 14.61,18 12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C13.66,6 15.14,6.69 16.22,7.78 L13,11 L20,11 L20,4 L17.65,6.35 Z"], [1, "progress", "progress-sm", "mt-3", "bg-primary-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "58%"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, ""], [1, "mdi", "mdi-file-outline", "icon-dropshadow-primary", "text-primary", "fs-60"], [1, "mdi", "mdi-clock", "icon-dropshadow-warning", "text-warning", "fs-60"], [1, "mdi", "mdi-heart-outline", "icon-dropshadow-success", "text-success", "fs-60"], [1, "mdi", "mdi-account-multiple-outline", "icon-dropshadow-secondary", "text-secondary", "fs-60"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "bg-primary", "text-fixed-white"], [1, "card-body", "text-center"], ["src", "./assets/images/faces/16.jpg", "alt", "img", 1, "avatar", "avatar-xxl", "avatar-rounded", "mb-4"], [1, "fw-semibold", "mb-1", "text-fixed-white"], [1, "fs-12", "mb-0", "text-fixed-white"], [1, "card-body", "border-transparent"], [1, "row", "mb-3"], [1, "col-4", "fs-12", "text-fixed-white"], [1, "col-8", "fw-semibold", "fs-12", "text-fixed-white"], [1, "card-header"], [1, "card-title"], [1, "fw-bold"], [1, "d-flex", "mb-3"], [1, "icon", "icon-shape", "bg-primary", "rounded-circle", "text-fixed-white", "mb-0", "me-3"], [1, "text-muted"], [1, "d-flex"], [1, "icon", "icon-shape", "bg-secondary", "rounded-circle", "text-fixed-white", "mb-0", "me-3"], [1, "card-body", "p-6"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "mb-0"], [1, "d-flex", "align-items-end", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], [1, "progress", "progress-sm", "mb-5"], [1, "progress-bar", "bg-primary", 2, "width", "50%"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "progress", "progress-sm", "mb-0"], [1, "progress-bar", "bg-warning", 2, "width", "60%"], [1, "col-lg-4"], [1, "mb-3", "fs-14", "fw-semibold"], [1, "col"], [1, "col", "col-auto"], [1, "text-success", "h5"], [1, "progress", "progress-sm", "mb-3", "mt-2"], [1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "row", "mt-3"], [1, "mb-1", "fs-12"], [1, "mb-0", "fw-semibold"], [1, "text-danger", "h5"], [1, "progress-bar", "bg-secondary", 2, "width", "30%"], [1, "progress-bar", "bg-success", 2, "width", "95%"], [1, "row", "g-0"], [1, "col-xl-2", "col-lg-6", "col-sm-6", "pe-0", "ps-0", "border-sm-end"], [1, "mb-0", "text-muted"], [1, "col-xl-2", "col-lg-6", "col-sm-6", "pe-0", "ps-0"], [1, "fs-12", "text-muted", "mx-1"], [1, "progress", "progress-xs", "mt-2"], [1, "progress-bar", "bg-primary", 2, "width", "78%"], [1, "progress-bar", "bg-secondary", 2, "width", "58%"], [1, "progress-bar", "bg-warning", 2, "width", "58%"], [1, "col-sm-6", "col-md-6", "col-lg-3"], [1, "progress", "progress-sm", "mt-2"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "37%"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-warning", 2, "width", "57%"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-info", 2, "width", "70%"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-secondary", 2, "width", "87%"], [1, "col-md-12", "col-xl-3", "col-lg-6"], [1, "card", "text-center"], [1, "mb-1", "mt-1", "fw-bold"], [1, "si", "si-arrow-up-circle", "text-danger", "me-1"], [1, "si", "si-arrow-up-circle", "text-success", "me-1"], [1, "si", "si-arrow-up-circle", "text-warning", "me-1"], [1, "col-sm-12", "col-lg-4"], [1, "card-body", "text-center", "list-icons"], ["x", "0", "y", "240", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "svg-icon2", "fill-transparent", "text-primary", "icon-dropshadow-primary"], ["stroke-linejoin", "round", "stroke-linecap", "round", "stroke-width", "2", "stroke", "currentColor", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4v0a2 2 0 100-4v0zm-8 2a2 2 0 11-4 0v0a2 2 0 114 0v0z"], [1, "card-text", "mt-3", "mb-0"], [1, "h2", "text-center", "fw-bold"], ["xmlns", "http://www.w3.org/2000/svg", "height", "100%", "width", "100%", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "svg-icon2", "text-success", "icon-dropshadow-success"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["x", "0", "y", "240", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "svg-icon2", "fill-secondary", "icon-dropshadow-secondary"], ["opacity", ".0", "d", "M20,8 L12,13 L4,8 L4,18 L20,18 L20,8 Z M20,6 L4,6 L12,10.99 L20,6 Z"], ["d", "M4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 Z M20,6 L12,10.99 L4,6 L20,6 Z M4,8 L12,13 L20,8 L20,18 L4,18 L4,8 Z"], [1, "col-sm-6", "col-lg-3"], [1, "h2", "m-0", "fw-bold"], [1, "mdi", "mdi-account-multiple-outline", "text-primary"], [1, "text-muted", "mb-0"], [1, "mdi", "mdi-cash-multiple", "text-secondary"], [1, "mdi", "mdi-chart-line", "text-warning"], [1, "mdi", "mdi-account-outline", "text-info"], [1, "col-sm-12", "col-md-6", "col-xl-3"], [1, "card", "bg-primary"], [1, "d-flex", "no-block", "align-items-center"], [1, "text-fixed-white"], [1, "text-fixed-white", "m-0", "fw-bold"], [1, "ms-auto"], [1, "text-fixed-white", "display-6"], [1, "fa", "fa-file-text-o"], [1, "card", "bg-secondary"], [1, "fa", "fa-signal"], [1, "card", "bg-warning"], [1, "fa", "fa-usd"], [1, "card", "bg-info"], [1, "fa", "fa-newspaper-o"], [1, "col-lg-12", "col-xl-4", "col-sm-12"], [1, "card", "mb-5"], [1, "media", "mt-0"], ["src", "./assets/images/faces/1.jpg", "alt", "Generic placeholder image", 1, "avatar", "avatar-rounded", "avatar-md", "me-3"], [1, "media-body", "d-flex", "w-100"], [1, "time-title", "p-0", "mb-0", "fw-semibold", "leading-normal", "text-nowrap", "text-truncate"], [1, "ms-auto", "d-sm-flex", "d-none"], ["type", "button", "aria-label", "button", 1, "btn", "btn-primary", "me-2"], [1, "fa", "fa-comments"], ["type", "button", "aria-label", "button", 1, "btn", "btn-info"], [1, "fa", "fa-phone"], [1, "card-footer", "text-secondary", "border-top"], [1, "text-primary"], ["src", "./assets/images/faces/16.jpg", "alt", "Generic placeholder image", 1, "avatar", "avatar-rounded", "avatar-md", "me-3"], ["src", "./assets/images/faces/3.jpg", "alt", "Generic placeholder image", 1, "avatar", "avatar-rounded", "avatar-md", "me-3"], [1, "col-md-12", "col-sm-12", "col-lg-12"], ["gallerize", "", 1, "row", "img-gallery"], [1, "col-lg-3", "col-sm-6"], [1, "col-lg-6", "col-xl-3", "col-md-6", "col-sm-12", "m-b-3"], [1, "card", "overflow-hidden"], [1, "facebook", "p-3"], [1, "text-center", "text-fixed-white", "social"], [1, "bi", "bi-facebook"], [1, "card-body", "mt-0"], [1, "d-flex", "align-items-center"], [1, "fw-semibold", "mb-1"], [1, "twitter", "p-3"], [1, "bi", "bi-twitter-x"], [1, "linkedin", "p-3"], [1, "bi", "bi-linkedin"], [1, "instagram", "p-3"], [1, "bi", "bi-instagram"], ["aria-label", "anchor", "data-gallery", "gallery1", 1, "glightbox", "card", "link-overlay"], ["alt", "", 3, "src"]], template: function WidgetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5);
        \u0275\u0275element(6, "path", 6)(7, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, "All Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h2", 9);
        \u0275\u0275text(11, "3257");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 10)(13, "span", 11);
        \u0275\u0275element(14, "i", 12);
        \u0275\u0275text(15, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275element(18, "div", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 2)(20, "div", 3)(21, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 15);
        \u0275\u0275element(23, "path", 16)(24, "path", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "p", 8);
        \u0275\u0275text(26, "Pending Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2", 9);
        \u0275\u0275text(28, "1658");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 10)(30, "span", 18);
        \u0275\u0275element(31, "i", 19);
        \u0275\u0275text(32, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275element(35, "div", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 2)(37, "div", 3)(38, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 22);
        \u0275\u0275element(40, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "p", 8);
        \u0275\u0275text(42, "Refund Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "h2", 9);
        \u0275\u0275text(44, "168");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 10)(46, "span", 18);
        \u0275\u0275element(47, "i", 19);
        \u0275\u0275text(48, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 24);
        \u0275\u0275element(51, "div", 25);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(52, "div", 1)(53, "div", 26)(54, "div", 3)(55, "div", 4)(56, "div", 27)(57, "div", 28)(58, "p", 8);
        \u0275\u0275text(59, "Page Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "h2", 9);
        \u0275\u0275text(61, "234k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 10)(63, "span", 11);
        \u0275\u0275element(64, "i", 12);
        \u0275\u0275text(65, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " than last month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 28);
        \u0275\u0275element(68, "i", 29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "div", 26)(70, "div", 3)(71, "div", 4)(72, "div", 27)(73, "div", 28)(74, "p", 8);
        \u0275\u0275text(75, "Time On Site");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "h2", 9);
        \u0275\u0275text(77, "12m 3s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span", 10)(79, "span", 18);
        \u0275\u0275element(80, "i", 19);
        \u0275\u0275text(81, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " than last month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div");
        \u0275\u0275element(84, "i", 30);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(85, "div", 26)(86, "div", 3)(87, "div", 4)(88, "div", 27)(89, "div")(90, "p", 8);
        \u0275\u0275text(91, "Impressions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h2", 9);
        \u0275\u0275text(93, "168");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "span", 10)(95, "span", 18);
        \u0275\u0275element(96, "i", 19);
        \u0275\u0275text(97, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " than last month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div");
        \u0275\u0275element(100, "i", 31);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(101, "div", 26)(102, "div", 3)(103, "div", 4)(104, "div", 27)(105, "div")(106, "p", 8);
        \u0275\u0275text(107, "Total Followers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "h2", 9);
        \u0275\u0275text(109, "3456k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "span", 10)(111, "span", 18);
        \u0275\u0275element(112, "i", 19);
        \u0275\u0275text(113, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(114, " than last month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div");
        \u0275\u0275element(116, "i", 32);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(117, "div", 1)(118, "div", 33)(119, "div", 34)(120, "div", 35);
        \u0275\u0275element(121, "img", 36);
        \u0275\u0275elementStart(122, "h4", 37);
        \u0275\u0275text(123, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "p", 38);
        \u0275\u0275text(125, "UI/UX Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 39)(127, "div", 40)(128, "div", 41);
        \u0275\u0275text(129, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 42);
        \u0275\u0275text(131, "New Tech Software Pvt Ltd");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 1)(133, "div", 41);
        \u0275\u0275text(134, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 42);
        \u0275\u0275text(136, "Bachelors of Engineering");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(137, "div", 33)(138, "div", 3)(139, "div", 43)(140, "div", 44);
        \u0275\u0275text(141, "Interview Schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 4)(143, "h3", 45);
        \u0275\u0275text(144, "04");
        \u0275\u0275elementStart(145, "sup");
        \u0275\u0275text(146, "th");
        \u0275\u0275elementEnd();
        \u0275\u0275text(147, " July, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 46)(149, "div", 47)(150, "div");
        \u0275\u0275text(151, "04");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div")(153, "p", 8);
        \u0275\u0275text(154, "New Modal Technologies");
        \u0275\u0275element(155, "br");
        \u0275\u0275elementStart(156, "b");
        \u0275\u0275text(157, "Software Pvt ltd");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "small", 48);
        \u0275\u0275text(159, "10.04am");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 49)(161, "div", 50)(162, "div");
        \u0275\u0275text(163, "04");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div")(165, "p", 8);
        \u0275\u0275text(166, "New Modal Technologies");
        \u0275\u0275element(167, "br");
        \u0275\u0275elementStart(168, "b");
        \u0275\u0275text(169, "Software Pvt ltd");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "small", 48);
        \u0275\u0275text(171, "12.04pm");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(172, "div", 33)(173, "div", 3)(174, "div", 43)(175, "h3", 44);
        \u0275\u0275text(176, "Revenue of this Month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "div", 51)(178, "div", 52)(179, "h6", 53);
        \u0275\u0275text(180, "Monthly Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "span", 28);
        \u0275\u0275text(182, "57.45% goal reached");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 54)(184, "h4", 55);
        \u0275\u0275text(185, "$25,854");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "h4", 55);
        \u0275\u0275text(187, "45,000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 56);
        \u0275\u0275element(189, "div", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 52)(191, "h6", 53);
        \u0275\u0275text(192, "Monthly Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "span", 28);
        \u0275\u0275text(194, "52.43% goal reached");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "div", 58)(196, "h4", 55);
        \u0275\u0275text(197, "8,654");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "h4", 55);
        \u0275\u0275text(199, "50,000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "div", 59);
        \u0275\u0275element(201, "div", 60);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(202, "div", 1)(203, "div", 61)(204, "div", 3)(205, "div", 4)(206, "div", 62);
        \u0275\u0275text(207, " Actual Revenue Vs Target Revenue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 1)(209, "div", 63);
        \u0275\u0275text(210, " Target Achivement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "div", 64)(212, "span", 65);
        \u0275\u0275text(213, "+90%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(214, "div", 66);
        \u0275\u0275element(215, "div", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 68)(217, "div", 63)(218, "h6", 69);
        \u0275\u0275text(219, "Target Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "h4", 70);
        \u0275\u0275text(221, "$35,425");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "div", 64)(223, "h6", 69);
        \u0275\u0275text(224, "Actual Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "h4", 70);
        \u0275\u0275text(226, "$28,425");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(227, "div", 61)(228, "div", 3)(229, "div", 4)(230, "div", 62);
        \u0275\u0275text(231, " Actual Customers Vs Target ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 1)(233, "div", 63);
        \u0275\u0275text(234, " Target Achivement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "div", 64)(236, "span", 71);
        \u0275\u0275text(237, "-25%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(238, "div", 66);
        \u0275\u0275element(239, "div", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(240, "div", 68)(241, "div", 63)(242, "h6", 69);
        \u0275\u0275text(243, "Target Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "h4", 70);
        \u0275\u0275text(245, "5,643");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(246, "div", 64)(247, "h6", 69);
        \u0275\u0275text(248, "Actual Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "h4", 70);
        \u0275\u0275text(250, "2,341");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(251, "div", 61)(252, "div", 3)(253, "div", 4)(254, "div", 62);
        \u0275\u0275text(255, " Customer Avg Revenue Vs Target ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "div", 1)(257, "div", 63);
        \u0275\u0275text(258, " Target Achievement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "div", 64)(260, "span", 65);
        \u0275\u0275text(261, "+95%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(262, "div", 66);
        \u0275\u0275element(263, "div", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "div", 68)(265, "div", 63)(266, "h6", 69);
        \u0275\u0275text(267, "Target Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "h4", 70);
        \u0275\u0275text(269, "$67,234");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "div", 64)(271, "h6", 69);
        \u0275\u0275text(272, "Actual Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "h4", 70);
        \u0275\u0275text(274, "$32,543");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(275, "div", 3)(276, "div", 74)(277, "div", 75)(278, "div", 35)(279, "p", 8);
        \u0275\u0275text(280, "Visits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "h3", 9);
        \u0275\u0275text(282, "3,56,667");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "span", 76)(284, "span", 18);
        \u0275\u0275element(285, "i", 19);
        \u0275\u0275text(286, " 0.7%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(287, " Last month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(288, "div", 75)(289, "div", 35)(290, "p", 8);
        \u0275\u0275text(291, "Avg visit Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(292, "h3", 9);
        \u0275\u0275text(293, "39Sec");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "span", 76)(295, "span", 18);
        \u0275\u0275element(296, "i", 19);
        \u0275\u0275text(297, " 0.2%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(298, " Last month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(299, "div", 75)(300, "div", 35)(301, "p", 8);
        \u0275\u0275text(302, "Page Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "h3", 9);
        \u0275\u0275text(304, "5,987");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "span", 76)(306, "span", 11);
        \u0275\u0275element(307, "i", 12);
        \u0275\u0275text(308, " 12%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(309, " Last month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(310, "div", 75)(311, "div", 35)(312, "p", 8);
        \u0275\u0275text(313, "Bounce Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "h3", 9);
        \u0275\u0275text(315, "35.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(316, "span", 76)(317, "span", 18);
        \u0275\u0275element(318, "i", 19);
        \u0275\u0275text(319, " 0.2%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(320, " Last month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(321, "div", 75)(322, "div", 35)(323, "p", 8);
        \u0275\u0275text(324, "Pages per Visit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "h3", 9);
        \u0275\u0275text(326, "2.89");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(327, "span", 76)(328, "span", 11);
        \u0275\u0275element(329, "i", 12);
        \u0275\u0275text(330, " 1.2%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(331, " Last month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(332, "div", 77)(333, "div", 35)(334, "p", 8);
        \u0275\u0275text(335, "Goal Conversion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(336, "h3", 9);
        \u0275\u0275text(337, "12.7%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(338, "span", 76)(339, "span", 11);
        \u0275\u0275element(340, "i", 12);
        \u0275\u0275text(341, " 0.6%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(342, " Last month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(343, "div", 1)(344, "div", 2)(345, "div", 3)(346, "div", 4)(347, "p", 8);
        \u0275\u0275text(348, "Income Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(349, "h3", 9);
        \u0275\u0275text(350, "4500,00");
        \u0275\u0275elementStart(351, "span", 78);
        \u0275\u0275text(352, "this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(353, "span", 10)(354, "span", 11);
        \u0275\u0275element(355, "i", 12);
        \u0275\u0275text(356, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(357, " vs $56,699 than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(358, "div", 79);
        \u0275\u0275element(359, "div", 80);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(360, "div", 2)(361, "div", 3)(362, "div", 4)(363, "p", 8);
        \u0275\u0275text(364, "Expense Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "h3", 9);
        \u0275\u0275text(366, "5678,20");
        \u0275\u0275elementStart(367, "span", 78);
        \u0275\u0275text(368, "this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(369, "span", 10)(370, "span", 18);
        \u0275\u0275element(371, "i", 19);
        \u0275\u0275text(372, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(373, " vs $36,144 than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "div", 79);
        \u0275\u0275element(375, "div", 81);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(376, "div", 2)(377, "div", 3)(378, "div", 4)(379, "p", 8);
        \u0275\u0275text(380, "Gross Profit Margin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "h3", 9);
        \u0275\u0275text(382, "78%");
        \u0275\u0275elementStart(383, "span", 78);
        \u0275\u0275text(384, "since last week");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(385, "span", 10)(386, "span", 18);
        \u0275\u0275element(387, "i", 19);
        \u0275\u0275text(388, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(389, " vs 1.6% than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(390, "div", 79);
        \u0275\u0275element(391, "div", 82);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(392, "div", 1)(393, "div", 83)(394, "div", 3)(395, "div", 4)(396, "h2", 9);
        \u0275\u0275text(397, "678");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(398, "div", 48);
        \u0275\u0275text(399, "Visitors online");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(400, "div", 84);
        \u0275\u0275element(401, "div", 85);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(402, "div", 83)(403, "div", 3)(404, "div", 4)(405, "h2", 9);
        \u0275\u0275text(406, "567");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(407, "div", 48);
        \u0275\u0275text(408, "Total Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "div", 84);
        \u0275\u0275element(410, "div", 86);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(411, "div", 83)(412, "div", 3)(413, "div", 4)(414, "h2", 9);
        \u0275\u0275text(415, "56");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(416, "div", 48);
        \u0275\u0275text(417, "Total Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(418, "div", 84);
        \u0275\u0275element(419, "div", 87);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(420, "div", 83)(421, "div", 3)(422, "div", 4)(423, "h2", 9);
        \u0275\u0275text(424, "567");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(425, "div", 48);
        \u0275\u0275text(426, "Today Income");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "div", 84);
        \u0275\u0275element(428, "div", 88);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(429, "div", 1)(430, "div", 89)(431, "div", 90)(432, "div", 4)(433, "span");
        \u0275\u0275text(434, "Today Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "h1", 91);
        \u0275\u0275text(436, "6532");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(437, "div", 48);
        \u0275\u0275element(438, "i", 92);
        \u0275\u0275elementStart(439, "span", 28);
        \u0275\u0275text(440, "15%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(441, " Increase");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(442, "div", 89)(443, "div", 90)(444, "div", 4)(445, "span");
        \u0275\u0275text(446, "Today Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(447, "h1", 91);
        \u0275\u0275text(448, "5835");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(449, "div", 48);
        \u0275\u0275element(450, "i", 93);
        \u0275\u0275elementStart(451, "span", 28);
        \u0275\u0275text(452, "22%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(453, " Increase");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(454, "div", 89)(455, "div", 90)(456, "div", 4)(457, "span");
        \u0275\u0275text(458, "Today Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(459, "h1", 91);
        \u0275\u0275text(460, "$69588");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(461, "div", 48);
        \u0275\u0275element(462, "i", 93);
        \u0275\u0275elementStart(463, "span", 28);
        \u0275\u0275text(464, "32%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(465, " Increase");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(466, "div", 89)(467, "div", 90)(468, "div", 4)(469, "span");
        \u0275\u0275text(470, "Position in Market");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(471, "h1", 91);
        \u0275\u0275text(472, "12");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(473, "div", 48);
        \u0275\u0275element(474, "i", 94)(475, "span", 28);
        \u0275\u0275text(476, " Increase from 20 to 12");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(477, "div", 1)(478, "div", 95)(479, "div", 3)(480, "div", 96);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(481, "svg", 97);
        \u0275\u0275element(482, "path", 98);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(483, "p", 99);
        \u0275\u0275text(484, "New Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(485, "p", 100);
        \u0275\u0275text(486, "262");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(487, "div", 95)(488, "div", 3)(489, "div", 96);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(490, "svg", 101);
        \u0275\u0275element(491, "path", 102)(492, "circle", 103)(493, "path", 104)(494, "path", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(495, "p", 99);
        \u0275\u0275text(496, "Customer Visitis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(497, "p", 100);
        \u0275\u0275text(498, "2635");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(499, "div", 95)(500, "div", 3)(501, "div", 96);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(502, "svg", 106);
        \u0275\u0275element(503, "path", 107)(504, "path", 108);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(505, "p", 99);
        \u0275\u0275text(506, "Mails");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(507, "p", 100);
        \u0275\u0275text(508, "245");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(509, "div", 1)(510, "div", 109)(511, "div", 3)(512, "div", 35)(513, "div", 110);
        \u0275\u0275element(514, "i", 111);
        \u0275\u0275text(515, " 67");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(516, "div", 112);
        \u0275\u0275text(517, " Customers");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(518, "div", 109)(519, "div", 3)(520, "div", 35)(521, "div", 110);
        \u0275\u0275element(522, "i", 113);
        \u0275\u0275text(523, " 76");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "div", 112);
        \u0275\u0275text(525, " Total Sales");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(526, "div", 109)(527, "div", 3)(528, "div", 35)(529, "div", 110);
        \u0275\u0275element(530, "i", 114);
        \u0275\u0275text(531, " 45");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(532, "div", 112);
        \u0275\u0275text(533, " New Orders");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(534, "div", 109)(535, "div", 3)(536, "div", 35)(537, "div", 110);
        \u0275\u0275element(538, "i", 115);
        \u0275\u0275text(539, " 38");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(540, "div", 112);
        \u0275\u0275text(541, " Invoice");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(542, "div", 1)(543, "div", 116)(544, "div", 117)(545, "div", 4)(546, "div", 118)(547, "div")(548, "h6", 119);
        \u0275\u0275text(549, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(550, "h2", 120);
        \u0275\u0275text(551, "625");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(552, "div", 121)(553, "span", 122);
        \u0275\u0275element(554, "i", 123);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(555, "div", 116)(556, "div", 124)(557, "div", 4)(558, "div", 118)(559, "div")(560, "h6", 119);
        \u0275\u0275text(561, "Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(562, "h2", 120);
        \u0275\u0275text(563, "25k");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(564, "div", 121)(565, "span", 122);
        \u0275\u0275element(566, "i", 125);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(567, "div", 116)(568, "div", 126)(569, "div", 4)(570, "div", 118)(571, "div")(572, "h6", 119);
        \u0275\u0275text(573, "Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(574, "h2", 120);
        \u0275\u0275text(575, "62K");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(576, "div", 121)(577, "span", 122);
        \u0275\u0275element(578, "i", 127);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(579, "div", 116)(580, "div", 128)(581, "div", 4)(582, "div", 118)(583, "div")(584, "h6", 119);
        \u0275\u0275text(585, "News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(586, "h2", 120);
        \u0275\u0275text(587, "542");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(588, "div", 121)(589, "span", 122);
        \u0275\u0275element(590, "i", 129);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(591, "div", 1)(592, "div", 130)(593, "div", 131)(594, "div", 4)(595, "div", 132);
        \u0275\u0275element(596, "img", 133);
        \u0275\u0275elementStart(597, "div", 134)(598, "div")(599, "h5", 135);
        \u0275\u0275text(600, "Victoria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(601, "p", 53);
        \u0275\u0275text(602, "New york, UK");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(603, "div", 136)(604, "button", 137);
        \u0275\u0275element(605, "i", 138);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(606, "button", 139);
        \u0275\u0275element(607, "i", 140);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(608, "div", 141);
        \u0275\u0275text(609, " Email: ");
        \u0275\u0275elementStart(610, "span", 142);
        \u0275\u0275text(611, "victoriacott@Dashtic.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(612, "div", 130)(613, "div", 131)(614, "div", 4)(615, "div", 132);
        \u0275\u0275element(616, "img", 143);
        \u0275\u0275elementStart(617, "div", 134)(618, "div")(619, "h5", 135);
        \u0275\u0275text(620, "Thomas Jaim");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(621, "p", 53);
        \u0275\u0275text(622, "Spain, UN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(623, "div", 136)(624, "button", 137);
        \u0275\u0275element(625, "i", 138);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(626, "button", 139);
        \u0275\u0275element(627, "i", 140);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(628, "div", 141);
        \u0275\u0275text(629, " Email: ");
        \u0275\u0275elementStart(630, "span", 142);
        \u0275\u0275text(631, "thomasjaim@Dashtic.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(632, "div", 130)(633, "div", 131)(634, "div", 4)(635, "div", 132);
        \u0275\u0275element(636, "img", 144);
        \u0275\u0275elementStart(637, "div", 134)(638, "div")(639, "h5", 135);
        \u0275\u0275text(640, "Rebbaca wisely");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(641, "p", 53);
        \u0275\u0275text(642, "Japan, UN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(643, "div", 136)(644, "button", 137);
        \u0275\u0275element(645, "i", 138);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(646, "button", 139);
        \u0275\u0275element(647, "i", 140);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(648, "div", 141);
        \u0275\u0275text(649, " Email: ");
        \u0275\u0275elementStart(650, "span", 142);
        \u0275\u0275text(651, "rebbacawisely@Dashtic.com");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(652, "div", 1)(653, "div", 145)(654, "div", 3)(655, "div", 43)(656, "h3", 44);
        \u0275\u0275text(657, "Best Pictures for Today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(658, "div", 4)(659, "div")(660, "div", 146);
        \u0275\u0275repeaterCreate(661, WidgetsComponent_For_662_Template, 3, 1, "div", 147, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(663, "div", 1)(664, "div", 148)(665, "div", 149)(666, "div", 150)(667, "div", 151);
        \u0275\u0275element(668, "i", 152);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(669, "div", 153)(670, "div", 154)(671, "div")(672, "h3", 155);
        \u0275\u0275text(673, "56k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(674, "h5", 112);
        \u0275\u0275text(675, "Following");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(676, "div", 121)(677, "h3", 155);
        \u0275\u0275text(678, "17k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(679, "h5", 112);
        \u0275\u0275text(680, "Friends");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(681, "div", 148)(682, "div", 149)(683, "div", 156)(684, "div", 151);
        \u0275\u0275element(685, "i", 157);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(686, "div", 153)(687, "div", 154)(688, "div")(689, "h3", 155);
        \u0275\u0275text(690, "86k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(691, "h5", 112);
        \u0275\u0275text(692, "Following");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(693, "div", 121)(694, "h3", 155);
        \u0275\u0275text(695, "20k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(696, "h5", 112);
        \u0275\u0275text(697, "Friends");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(698, "div", 148)(699, "div", 149)(700, "div", 158)(701, "div", 151);
        \u0275\u0275element(702, "i", 159);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(703, "div", 153)(704, "div", 154)(705, "div")(706, "h3", 155);
        \u0275\u0275text(707, "76k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(708, "h5", 112);
        \u0275\u0275text(709, "Following");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(710, "div", 121)(711, "h3", 155);
        \u0275\u0275text(712, "27k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(713, "h5", 112);
        \u0275\u0275text(714, "Friends");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(715, "div", 148)(716, "div", 149)(717, "div", 160)(718, "div", 151);
        \u0275\u0275element(719, "i", 161);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(720, "div", 153)(721, "div", 154)(722, "div")(723, "h3", 155);
        \u0275\u0275text(724, "36k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(725, "h5", 112);
        \u0275\u0275text(726, "Following");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(727, "div", 121)(728, "h3", 155);
        \u0275\u0275text(729, "10k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(730, "h5", 112);
        \u0275\u0275text(731, "Friends");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(661);
        \u0275\u0275repeater(ctx.imageData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, HttpClientModule, NgbModule, LightgalleryModule, LightboxModule, GallerizeDirective], styles: ["\n\n  .leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive {\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n  #leaflet2 {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n/*# sourceMappingURL=widgets.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WidgetsComponent, { className: "WidgetsComponent", filePath: "src\\app\\components\\widgets\\widgets\\widgets.component.ts", lineNumber: 18 });
})();
var data = [
  {
    srcUrl: "./assets/images/photos/1.jpg",
    previewUrl: "./assets/images/photos/1.jpg"
  },
  {
    srcUrl: "./assets/images/photos/2.jpg",
    previewUrl: "./assets/images/photos/2.jpg"
  },
  {
    srcUrl: "./assets/images/photos/3.jpg",
    previewUrl: "./assets/images/photos/3.jpg"
  },
  {
    srcUrl: "./assets/images/photos/4.jpg",
    previewUrl: "./assets/images/photos/4.jpg"
  },
  {
    srcUrl: "./assets/images/photos/5.jpg",
    previewUrl: "./assets/images/photos/5.jpg"
  },
  {
    srcUrl: "./assets/images/photos/6.jpg",
    previewUrl: "./assets/images/photos/6.jpg"
  },
  {
    srcUrl: "./assets/images/photos/7.jpg",
    previewUrl: "./assets/images/photos/7.jpg"
  },
  {
    srcUrl: "./assets/images/photos/8.jpg",
    previewUrl: "./assets/images/photos/8.jpg"
  }
];
export {
  WidgetsComponent
};
//# sourceMappingURL=widgets.component-I7QK6E27.js.map
