import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/images-figures/images-figures.component.ts
var ImagesFiguresComponent = class _ImagesFiguresComponent {
  static {
    this.\u0275fac = function ImagesFiguresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImagesFiguresComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImagesFiguresComponent, selectors: [["app-images-figures"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 184, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "Image & Figures", "activeTitle", "Image & Figures"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block", "flex-wrap"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "card-title", "mb-3"], [1, "text-center"], ["src", "./assets/images/media/media-42.jpg", "alt", "...", 1, "img-fluid"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["src", "./assets/images/media/media-43.jpg", "alt", "...", 1, "img-fluid", "rounded"], ["src", "./assets/images/media/media-44.jpg", "alt", "...", 1, "img-fluid", "rounded-pill"], ["src", "./assets/images/media/media-47.jpg", "alt", "...", 1, "rounded", "float-start"], ["src", "./assets/images/media/media-49.jpg", "alt", "...", 1, "rounded", "mx-auto", "d-block"], ["src", "./assets/images/media/media-48.jpg", "alt", "...", 1, "rounded", "float-end"], [1, "col-xl-6"], [1, "card-body", "d-flex", "justify-content-between", "gap-2"], [1, "figure"], ["src", "./assets/images/media/media-50.jpg", "alt", "...", 1, "bd-placeholder-img", "figure-img", "img-fluid", "rounded", "card-img"], [1, "figure-caption", "mt-2"], [1, "figure", "float-end"], ["src", "./assets/images/media/media-51.jpg", "alt", "...", 1, "bd-placeholder-img", "figure-img", "img-fluid", "rounded", "card-img"], [1, "figure-caption", "text-end", "mt-2"], [1, "col-xl-3"], ["src", "./assets/images/media/media-45.jpg", "alt", "...", 1, "img-thumbnail"], ["src", "./assets/images/media/media-46.jpg", "alt", "...", 1, "img-thumbnail", "rounded-pill"]], template: function ImagesFiguresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Responsive image ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "p", 10);
        \u0275\u0275text(13, "Use ");
        \u0275\u0275elementStart(14, "code");
        \u0275\u0275text(15, " .img-fluid ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "class to the img tag to get responsive image.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275element(18, "img", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13)(20, "pre", 14)(21, "code", 14);
        \u0275\u0275text(22, '<div class="text-center">\n<img src="./assets/images/media/media-42.jpg" class="img-fluid" alt="...">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(23, "div", 2)(24, "div", 3)(25, "div", 4)(26, "div", 5);
        \u0275\u0275text(27, " Image With Radius ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 6)(29, "button", 7);
        \u0275\u0275text(30, "Show Code");
        \u0275\u0275element(31, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 9)(33, "p", 10);
        \u0275\u0275text(34, "Use ");
        \u0275\u0275elementStart(35, "code");
        \u0275\u0275text(36, ".rounded");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " class along with ");
        \u0275\u0275elementStart(38, "code");
        \u0275\u0275text(39, ".img-fluid");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " to get border radius.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 11);
        \u0275\u0275element(42, "img", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 13)(44, "pre", 14)(45, "code", 14);
        \u0275\u0275text(46, '<div class="text-center">\n<img src="./assets/images/media/media-43.jpg" class="img-fluid rounded" alt="...">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "div", 5);
        \u0275\u0275text(51, " Rounded Image ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 6)(53, "button", 7);
        \u0275\u0275text(54, "Show Code");
        \u0275\u0275element(55, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 9)(57, "p", 10);
        \u0275\u0275text(58, "Use ");
        \u0275\u0275elementStart(59, "code");
        \u0275\u0275text(60, ".rounded-pill");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " class to ");
        \u0275\u0275elementStart(62, "code");
        \u0275\u0275text(63, "img");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " tag to get rounded image.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 11);
        \u0275\u0275element(66, "img", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 13)(68, "pre", 14)(69, "code", 14);
        \u0275\u0275text(70, '<div class="text-center">\n<img src="./assets/images/media/media-44.jpg" class="img-fluid rounded-pill" alt="...">\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(71, "div", 1)(72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "div", 5);
        \u0275\u0275text(76, "Image Left Align");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 6)(78, "button", 7);
        \u0275\u0275text(79, "Show Code");
        \u0275\u0275element(80, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 9);
        \u0275\u0275element(82, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 13)(84, "pre", 14)(85, "code", 14);
        \u0275\u0275text(86, '<img class="rounded float-start" src="./assets/images/media/media-47.jpg" alt="...">');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(87, "div", 2)(88, "div", 3)(89, "div", 4)(90, "div", 5);
        \u0275\u0275text(91, "Image Center Align");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 6)(93, "button", 7);
        \u0275\u0275text(94, "Show Code");
        \u0275\u0275element(95, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 9);
        \u0275\u0275element(97, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 13)(99, "pre", 14)(100, "code", 14);
        \u0275\u0275text(101, '<img class="rounded mx-auto d-block" src="./assets/images/media/media-49.jpg" alt="...">');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(102, "div", 2)(103, "div", 3)(104, "div", 4)(105, "div", 5);
        \u0275\u0275text(106, "Image Right Align");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 6)(108, "button", 7);
        \u0275\u0275text(109, "Show Code");
        \u0275\u0275element(110, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 9);
        \u0275\u0275element(112, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 13)(114, "pre", 14)(115, "code", 14);
        \u0275\u0275text(116, '<img class="rounded float-end" src="./assets/images/media/media-48.jpg" alt="...">');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(117, "div", 20)(118, "div", 3)(119, "div", 4)(120, "div", 5);
        \u0275\u0275text(121, " Figures ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 6)(123, "button", 7);
        \u0275\u0275text(124, "Show Code");
        \u0275\u0275element(125, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 21)(127, "figure", 22);
        \u0275\u0275element(128, "img", 23);
        \u0275\u0275elementStart(129, "figcaption", 24);
        \u0275\u0275text(130, "A caption for the above image. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "figure", 25);
        \u0275\u0275element(132, "img", 26);
        \u0275\u0275elementStart(133, "figcaption", 27);
        \u0275\u0275text(134, "A caption for the above image. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 13)(136, "pre", 14)(137, "code", 14);
        \u0275\u0275text(138, '<figure class="figure">\n<img class="bd-placeholder-img figure-img img-fluid rounded card-img" src="./assets/images/media/media-50.jpg" alt="...">\n<figcaption class="figure-caption">A caption for the above image.\n</figcaption>\n</figure>\n<figure class="figure float-end">\n<img class="bd-placeholder-img figure-img img-fluid rounded card-img" src="./assets/images/media/media-51.jpg" alt="...">\n<figcaption class="figure-caption text-end">A caption for the above image.\n</figcaption>\n</figure>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(139, "div", 28)(140, "div", 3)(141, "div", 4)(142, "div", 5);
        \u0275\u0275text(143, " Image Thumbnail ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "div", 6)(145, "button", 7);
        \u0275\u0275text(146, "Show Code");
        \u0275\u0275element(147, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(148, "div", 9)(149, "p", 10);
        \u0275\u0275text(150, "Use ");
        \u0275\u0275elementStart(151, "code");
        \u0275\u0275text(152, " .img-thumbnail ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(153, "to give an image a rounded 1px border.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 11);
        \u0275\u0275element(155, "img", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div", 13)(157, "pre", 14)(158, "code", 14);
        \u0275\u0275text(159, '<div class="text-center">\n<img src="./assets/images/media/media-45.jpg" class="img-thumbnail" alt="...">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(160, "div", 28)(161, "div", 3)(162, "div", 4)(163, "div", 5);
        \u0275\u0275text(164, " Rounded Thumbnail ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div", 6)(166, "button", 7);
        \u0275\u0275text(167, "Show Code");
        \u0275\u0275element(168, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(169, "div", 9)(170, "p", 10);
        \u0275\u0275text(171, "Use ");
        \u0275\u0275elementStart(172, "code");
        \u0275\u0275text(173, " .rounded-pill ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(174, "along with ");
        \u0275\u0275elementStart(175, "code");
        \u0275\u0275text(176, " .img-thummbnail ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(177, " to get radius.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 11);
        \u0275\u0275element(179, "img", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "div", 13)(181, "pre", 14)(182, "code", 14);
        \u0275\u0275text(183, '<div class="text-center">\n<img src="./assets/images/media/media-46.jpg" class="img-thumbnail rounded-pill" alt="...">\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImagesFiguresComponent, { className: "ImagesFiguresComponent", filePath: "src\\app\\components\\uielements\\images-figures\\images-figures.component.ts", lineNumber: 11 });
})();
export {
  ImagesFiguresComponent
};
//# sourceMappingURL=images-figures.component-4GHUQ6VH.js.map
