import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  interval,
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

// src/app/components/pages/aboutus/aboutus.component.ts
var AboutusComponent = class _AboutusComponent {
  constructor() {
    this.counter1 = 1;
    this.source = interval(0.2);
    this.subscribe = this.source.subscribe(() => {
      this.counter1++;
      if (this.counter1 == 137) {
        this.subscribe.unsubscribe();
      }
    });
    this.counter2 = 1;
    this.source2 = interval(0.2);
    this.subscribe2 = this.source2.subscribe(() => {
      this.counter2++;
      if (this.counter2 == 2501) {
        this.subscribe2.unsubscribe();
      }
    });
  }
  static {
    this.\u0275fac = function AboutusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutusComponent, selectors: [["app-aboutus"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 167, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Pages", "title", "About Us", "activeTitle", "About Us"], [1, "container"], [1, "row", "mb-5", "justify-content-center"], [1, "col-lg-8", "col-md-8", "col-sm-12", "text-center"], [1, "mb-3", "fw-semibold"], [1, "text-primary"], [1, "leading-normal", "lead-1"], [1, "leading-normal"], [1, "row", "mx-0"], [1, "card", "overflow-hidden", "px-0"], ["src", "./assets/images/photos/17.jpg", "alt", "image"], [1, "row"], [1, "col-lg-12"], [1, "card", "mt-7"], [1, "card-body", "text-dark"], [1, "statistics-info"], [1, "col-xl-6", "my-auto"], [1, ""], [1, "fw-bold", "mb-4", "text-dark"], [1, "leading-normal", "fw-normal", "mb-4", "text-dark"], [1, "text-center"], ["src", "./assets/images/photos/16.png", "alt", "", 1, "w-100"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card"], [1, "card-body"], [1, "counter-status", "md-mb-0"], [1, "text-center", "mb-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "about-icons"], ["fill", "#4454c3", "d", "M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z", "opacity", ".99"], ["fill", "#8e98db", "d", "M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z"], [1, "counter", "mb-2"], [1, "mb-0"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", 1, "about-icons"], ["cx", "10", "cy", "8.5", "r", "5", "fill", "#fbb8c7"], ["fill", "#fa95ac", "d", "M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00018,0,0.00037,0,0.00055C2.00012,20.05267,2.44788,20.50012,3,20.5h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z"], ["fill", "#f74f75", "d", "M18.3335,13.5c-0.26526,0.0003-0.51971-0.10515-0.707-0.293l-1.3335-1.333c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l0.62647,0.626l1.95953-1.96c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-2.6665,2.667C18.85321,13.39485,18.59877,13.5003,18.3335,13.5z"], ["fill", "#f3d267", "d", "M19,6H5C3.34315,6,2,7.34315,2,9v2.72087L8.8374,14h6.3252L22,11.72087V9C22,7.34315,20.65685,6,19,6z"], ["fill", "#ecb403", "d", "M10,6V5h4v1h2V5c-0.00126-1.10405-0.89595-1.99874-2-2h-4C8.89595,3.00126,8.00126,3.89595,8,5v1H10z M8.8374,14L2,11.72083V18c0.00181,1.65611,1.34389,2.99819,3,3h14c1.65611-0.00181,2.99819-1.34389,3-3v-6.27917L15.1626,14H8.8374z"], ["cx", "12", "cy", "9.25", "r", "6", "fill", "#b4ddf9"], ["fill", "#8fccf7", "d", "M19.57391,17.01288L17.00854,12.56l-0.00873,0.00433C15.92511,14.18231,14.08795,15.25,12,15.25c-0.1286,0-0.25439-0.01123-0.38098-0.01923l0.38953,0.66925l2.37408,4.11218c0.13806,0.23914,0.44385,0.32111,0.68304,0.18304c0.07391-0.04266,0.13562-0.10358,0.17938-0.17682l1.32349-2.21844l2.57941-0.0376c0.27612-0.00397,0.4967-0.23108,0.49268-0.5072C19.6394,17.17004,19.61646,17.08667,19.57391,17.01288z"], ["fill", "#45aaf2", "d", "M11.61896,15.23071c-1.92963-0.12152-3.61176-1.14911-4.62012-2.66864l-2.56421,4.45081c-0.04248,0.07379-0.06549,0.15717-0.06671,0.24231c-0.00397,0.27612,0.21661,0.50323,0.49274,0.5072L7.44,17.79999l1.32355,2.21844c0.0437,0.07324,0.10547,0.13416,0.17938,0.17682c0.23914,0.13806,0.54492,0.05609,0.68298-0.18304L12,15.90002l0.00427-0.00732l-0.38525-0.66193L11.61896,15.23071z"], [1, "col-xxl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card", "p-3"], [1, "mb-3", "text-center", "about-team"], ["src", "./assets/images/faces/1.jpg", "alt", "image", 1, "rounded-pill", "avatar", "avatar-xxl"], [1, "fs-16", "text-center", "fw-semibold"], [1, "fs-14", "text-center", "text-muted", "mb-3"], [1, "text-center", "fs-14", "mb-3"], [1, "btn-list", "text-center"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-primary"], [1, "bi", "bi-facebook"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-info"], [1, "bi", "bi-twitter-x"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-danger"], [1, "bi", "bi-google"], ["src", "./assets/images/faces/2.jpg", "alt", "image", 1, "rounded-pill", "avatar", "avatar-xxl"], ["src", "./assets/images/faces/3.jpg", "alt", "image", 1, "rounded-pill", "avatar", "avatar-xxl"], ["src", "./assets/images/faces/4.jpg", "alt", "image", 1, "rounded-pill", "avatar", "avatar-xxl"]], template: function AboutusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Hello! This is ");
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Dashtic.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Majority have suffered alteration in some form.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum you are going to use a passage of Lorem Ipsum");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275element(14, "img", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 11)(21, "div", 16)(22, "div", 17)(23, "h2", 18);
        \u0275\u0275text(24, "We Help to ");
        \u0275\u0275elementStart(25, "span", 5);
        \u0275\u0275text(26, "Build");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Your Dream Project.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "h5", 19);
        \u0275\u0275text(29, "majority have suffered alteration in some form, by injected humour");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35, " If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 16)(37, "div", 20);
        \u0275\u0275element(38, "img", 21);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(39, "div", 11)(40, "div", 22)(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 27);
        \u0275\u0275element(46, "path", 28)(47, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "div", 26)(49, "h2", 30);
        \u0275\u0275text(50, "256");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h6", 31);
        \u0275\u0275text(52, "Completed Projects");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 22)(54, "div", 23)(55, "div", 24)(56, "div", 25)(57, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 32);
        \u0275\u0275element(59, "circle", 33)(60, "path", 34)(61, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(62, "div", 26)(63, "h2", 30);
        \u0275\u0275text(64, "7,234");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "h6", 31);
        \u0275\u0275text(66, "Total Customers");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "div", 24)(70, "div", 25)(71, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(72, "svg", 32);
        \u0275\u0275element(73, "path", 36)(74, "path", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(75, "div", 26)(76, "h2", 30);
        \u0275\u0275text(77, "846");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "h6", 31);
        \u0275\u0275text(79, "Available Employeed");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(80, "div", 22)(81, "div", 23)(82, "div", 24)(83, "div", 25)(84, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(85, "svg", 32);
        \u0275\u0275element(86, "circle", 38)(87, "path", 39)(88, "path", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(89, "div", 26)(90, "h2", 30);
        \u0275\u0275text(91, "153");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h6", 31);
        \u0275\u0275text(93, "Awards won");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(94, "div", 11)(95, "div", 41)(96, "div", 42)(97, "div", 24)(98, "div", 43);
        \u0275\u0275element(99, "img", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 45);
        \u0275\u0275text(101, " Rosen Berg ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 46);
        \u0275\u0275text(103, " Chief Manager ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 47);
        \u0275\u0275text(105, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 48)(107, "button", 49);
        \u0275\u0275element(108, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "button", 51);
        \u0275\u0275element(110, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "button", 53);
        \u0275\u0275element(112, "i", 54);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(113, "div", 41)(114, "div", 42)(115, "div", 24)(116, "div", 43);
        \u0275\u0275element(117, "img", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 45);
        \u0275\u0275text(119, " Mclaren mcannen ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 46);
        \u0275\u0275text(121, " Sales Manager ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 47);
        \u0275\u0275text(123, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 48)(125, "button", 49);
        \u0275\u0275element(126, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "button", 51);
        \u0275\u0275element(128, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "button", 53);
        \u0275\u0275element(130, "i", 54);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(131, "div", 41)(132, "div", 42)(133, "div", 24)(134, "div", 43);
        \u0275\u0275element(135, "img", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 45);
        \u0275\u0275text(137, " Shimpa Craig ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 46);
        \u0275\u0275text(139, " Author & writer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 47);
        \u0275\u0275text(141, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 48)(143, "button", 49);
        \u0275\u0275element(144, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "button", 51);
        \u0275\u0275element(146, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "button", 53);
        \u0275\u0275element(148, "i", 54);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(149, "div", 41)(150, "div", 42)(151, "div", 24)(152, "div", 43);
        \u0275\u0275element(153, "img", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 45);
        \u0275\u0275text(155, " Limo Peter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 46);
        \u0275\u0275text(157, " Operations Head ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 47);
        \u0275\u0275text(159, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 48)(161, "button", 49);
        \u0275\u0275element(162, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "button", 51);
        \u0275\u0275element(164, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "button", 53);
        \u0275\u0275element(166, "i", 54);
        \u0275\u0275elementEnd()()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutusComponent, { className: "AboutusComponent", filePath: "src\\app\\components\\pages\\aboutus\\aboutus.component.ts", lineNumber: 12 });
})();
export {
  AboutusComponent
};
//# sourceMappingURL=aboutus.component-Y6H64OSD.js.map
