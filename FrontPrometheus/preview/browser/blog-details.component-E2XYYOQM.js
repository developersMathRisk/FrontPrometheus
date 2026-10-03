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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/blog/blog-details/blog-details.component.ts
var BlogDetailsComponent = class _BlogDetailsComponent {
  static {
    this.\u0275fac = function BlogDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailsComponent, selectors: [["app-blog-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 181, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Blog", "title", "Blog Details", "activeTitle", "Blog Details"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-body"], [1, "item7-card-img"], ["aria-label", "anchor", "href", "javascript:void(0)"], ["src", "./assets/images/photos/19.jpg", "alt", "img", 1, "cover-image", "br-7", "w-100"], [1, "item7-card-desc", "d-md-flex", "my-4"], ["href", "javascript:void(0)", 1, "d-flex", "me-3", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"], ["d", "M4 5.01h16V8H4z", "opacity", ".3"], [1, "mt-0"], ["href", "javascript:void(0)", 1, "d-flex", "mb-2"], ["d", "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", "opacity", ".3"], ["cx", "12", "cy", "8", "opacity", ".3", "r", "2"], ["d", "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"], [1, "ms-auto", "mb-2"], ["href", "javascript:void(0)", 1, "me-0", "d-flex"], ["d", "M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z", "opacity", ".3"], ["d", "M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"], ["href", "javascript:void(0)", 1, "mt-4"], [1, "fw-semibold"], [1, ""], [1, "mb-0"], [1, "card-footer"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-rounded", "avatar-sm"], ["src", "./assets/images/faces/12.jpg", "alt", "img"], ["src", "./assets/images/faces/2.jpg", "alt", "img"], ["src", "./assets/images/faces/9.jpg", "alt", "img"], ["src", "./assets/images/faces/10.jpg", "alt", "img"], [1, "ms-auto"], [1, "d-flex"], ["aria-label", "anchor", "href", "JavaScript:void(0);", 1, "new"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18", 1, "svg-icon", "me-3", "mt-2"], ["d", "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", "opacity", ".3"], ["d", "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18", 1, "svg-icon", "mt-2"], ["cx", "18", "cy", "5", "opacity", ".3", "r", "1"], ["cx", "6", "cy", "12", "opacity", ".3", "r", "1"], ["cx", "18", "cy", "19.02", "opacity", ".3", "r", "1"], ["d", "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "d-sm-flex", "p-4", "border", "border-bottom-0", "rounded-top", "w-100"], [1, "d-flex", "me-3"], ["href", "javascript:void(0)"], ["alt", "64x64", "src", "./assets/images/faces/1.jpg", 1, "avatar", "avatar-rounded", "avatar-md"], [1, "media-body", "w-100"], [1, "mt-0", "mb-1", "fw-semibold"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "verified", 1, "fs-14", "ms-0"], [1, "fa", "fa-check-circle-o", "text-success"], [1, "fs-14", "ms-2"], [1, "fa", "fa-star", "text-warning"], [1, "font-13", "mb-2", "mt-2"], ["href", "javascript:void(0)", 1, "me-2", "mt-1"], [1, "badge", "bg-primary"], ["href", "javascript:void(0)", "data-bs-toggle", "", "data-bs-target", "#Comment", 1, "me-2", "mt-1"], [1, "badge", "bg-light", "text-dark"], ["href", "javascript:void(0)", "data-bs-toggle", "", "data-bs-target", "#report", 1, "me-2", "mt-1"], [1, "btn-group", "btn-group-sm", "mb-1", "ms-auto", "float-sm-end", "mt-1"], ["aria-label", "button", "type", "button", 1, "btn", "btn-light"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18", 1, "svg-icon"], ["d", "M0 0h24v24H0V0zm0 0h24v24H0V0z", "fill", "none"], ["d", "M21 12v-2h-9l1.34-5.34L9 9v10h9z", "opacity", ".3"], ["d", "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"], ["d", "M0 0h24v24H0V0z", "fill", "none", "opacity", ".87"], ["d", "M3 12v2h8.77l-1.11 5.34L15 15V5H6z", "opacity", ".3"], ["d", "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z"], [1, "d-sm-flex", "p-4", "border", "rounded-bottom", "w-100"], ["alt", "64x64", "src", "./assets/images/faces/2.jpg", 1, "avatar", "avatar-rounded", "avatar-md"], ["href", "javascript:void(0)", "data-bs-toggle", "", "data-bs-target", "#Comment", 1, "mt-1", "me-2"], [1, "d-sm-flex", "p-4", "mt-4", "br-7", "border", "w-100"], ["alt", "64x64", "src", "./assets/images/faces/3.jpg", 1, "avatar", "avatar-rounded", "avatar-md"], [1, "mt-2"], [1, "mb-3"], ["type", "text", "id", "name1", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "id", "email", "placeholder", "Email Address", "autocomplete", "off", 1, "form-control"], ["name", "example-textarea-input", "rows", "6", "placeholder", "Write Review", 1, "form-control"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"]], template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "a", 6)(7, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 10);
        \u0275\u0275element(11, "path", 11)(12, "path", 12)(13, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 14);
        \u0275\u0275text(15, "Jan-18-2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "a", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 10);
        \u0275\u0275element(18, "path", 11)(19, "path", 16)(20, "circle", 17)(21, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "div", 14);
        \u0275\u0275text(23, "Anna Ogden");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 19)(25, "a", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 10);
        \u0275\u0275element(27, "path", 11)(28, "path", 21)(29, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "div", 14);
        \u0275\u0275text(31, "12 Comments");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "a", 23)(33, "h5", 24);
        \u0275\u0275text(34, "Excepteur occaecat cupidatat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 25);
        \u0275\u0275text(36, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 26);
        \u0275\u0275text(38, "but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "div", 29)(42, "span", 30);
        \u0275\u0275element(43, "img", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 30);
        \u0275\u0275element(45, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 30);
        \u0275\u0275element(47, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 30);
        \u0275\u0275element(49, "img", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 35)(51, "div", 36)(52, "a", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 38);
        \u0275\u0275element(54, "path", 11)(55, "path", 39)(56, "path", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(57, "a", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 38);
        \u0275\u0275element(59, "path", 11)(60, "path", 21)(61, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(62, "a", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(63, "svg", 41);
        \u0275\u0275element(64, "path", 11)(65, "circle", 42)(66, "circle", 43)(67, "circle", 44)(68, "path", 45);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(69, "div", 46)(70, "div", 47)(71, "h3", 48);
        \u0275\u0275text(72, "3 Comments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 4)(74, "div", 49)(75, "div", 50)(76, "a", 51);
        \u0275\u0275element(77, "img", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 53)(79, "h5", 54);
        \u0275\u0275text(80, "Joanne Scott ");
        \u0275\u0275elementStart(81, "span", 55);
        \u0275\u0275element(82, "i", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 57);
        \u0275\u0275text(84, " 4.5 ");
        \u0275\u0275element(85, "i", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "p", 59);
        \u0275\u0275text(87, " Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "a", 60)(89, "span", 61);
        \u0275\u0275text(90, "Helpful");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "a", 62)(92, "span", 63);
        \u0275\u0275text(93, "Comment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "a", 64)(95, "span", 63);
        \u0275\u0275text(96, "Report");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 65)(98, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(99, "svg", 67);
        \u0275\u0275element(100, "path", 68)(101, "path", 69)(102, "path", 70);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(103, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(104, "svg", 67);
        \u0275\u0275element(105, "path", 71)(106, "path", 72)(107, "path", 73);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(108, "div", 74)(109, "div", 50)(110, "a", 51);
        \u0275\u0275element(111, "img", 75);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 53)(113, "h5", 54);
        \u0275\u0275text(114, "Rose Slater ");
        \u0275\u0275elementStart(115, "span", 55);
        \u0275\u0275element(116, "i", 56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "p", 59);
        \u0275\u0275text(118, " Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "a", 76)(120, "span", 63);
        \u0275\u0275text(121, "Comment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 65)(123, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(124, "svg", 67);
        \u0275\u0275element(125, "path", 68)(126, "path", 69)(127, "path", 70);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(128, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(129, "svg", 67);
        \u0275\u0275element(130, "path", 71)(131, "path", 72)(132, "path", 73);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(133, "div", 77)(134, "div", 50)(135, "a", 51);
        \u0275\u0275element(136, "img", 78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 53)(138, "h5", 54);
        \u0275\u0275text(139, "Edward ");
        \u0275\u0275elementStart(140, "span", 55);
        \u0275\u0275element(141, "i", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "span", 57);
        \u0275\u0275text(143, " 4 ");
        \u0275\u0275element(144, "i", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "p", 59);
        \u0275\u0275text(146, " Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "a", 60)(148, "span", 61);
        \u0275\u0275text(149, "Helpful");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "a", 62)(151, "span", 63);
        \u0275\u0275text(152, "Comment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "a", 64)(154, "span", 63);
        \u0275\u0275text(155, "Report");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div", 65)(157, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(158, "svg", 67);
        \u0275\u0275element(159, "path", 68)(160, "path", 69)(161, "path", 70);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(162, "button", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(163, "svg", 67);
        \u0275\u0275element(164, "path", 71)(165, "path", 72)(166, "path", 73);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(167, "div", 46)(168, "div", 47)(169, "h3", 48);
        \u0275\u0275text(170, "Add a Comment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 4)(172, "div", 79)(173, "div", 80);
        \u0275\u0275element(174, "input", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div", 80);
        \u0275\u0275element(176, "input", 82);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 80);
        \u0275\u0275element(178, "textarea", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "a", 84);
        \u0275\u0275text(180, "Send Reply");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailsComponent, { className: "BlogDetailsComponent", filePath: "src\\app\\components\\pages\\blog\\blog-details\\blog-details.component.ts", lineNumber: 12 });
})();
export {
  BlogDetailsComponent
};
//# sourceMappingURL=blog-details.component-E2XYYOQM.js.map
