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

// src/app/components/uielements/breadcrumb/breadcrumb.component.ts
var BreadcrumbComponent = class _BreadcrumbComponent {
  static {
    this.\u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbComponent, selectors: [["app-breadcrumb"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 264, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "BreadCrumb", "activeTitle", "BreadCrumb"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript:void(0);"], [1, "breadcrumb", "mb-0"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "breadcrumb", "breadcrumb-example1"], [1, "breadcrumb", "breadcrumb-example1", "mb-0"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", "'~'"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E")`], ["aria-current", "page", 1, "breadcrumb-item", "active", "embedded-breadcrumb"], [1, "breadcrumb", "breadcrumb-style1", "mb-0"], [1, "breadcrumb", "breadcrumb-style2", "mb-0"], [1, "ti", "ti-home-2", "me-1", "fs-15", "d-inline-block"], [1, "ti", "ti-apps", "me-1", "fs-15", "d-inline-block"], [1, "col-xl-12"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", "''"], [1, "breadcrumb1", "bg-primary"], [1, "breadcrumb-item1", "text-fixed-white"], ["href", "javascript:void(0);", 1, "text-fixed-white"], [1, "breadcrumb-item1", "active", "text-fixed-white"], [1, "breadcrumb1", "bg-secondary"], [1, "breadcrumb-item1"], ["href", "javascript:void(0)", 1, "text-fixed-white"], [1, "breadcrumb1", "bg-success"], [1, "breadcrumb", "breadcrumb-arrow", "mb-3"], ["href", "javascript:void(0)"], [1, "active"], [1, "breadcrumb", "breadcrumb-arrow", "mb-2"]], template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Example ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "nav", 10)(13, "ol", 11)(14, "li", 12);
        \u0275\u0275text(15, "Home");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "nav", 10)(17, "ol", 11)(18, "li", 13)(19, "a", 14);
        \u0275\u0275text(20, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li", 12);
        \u0275\u0275text(22, "Library");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "nav", 10)(24, "ol", 15)(25, "li", 13)(26, "a", 14);
        \u0275\u0275text(27, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li", 13)(29, "a", 14);
        \u0275\u0275text(30, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li", 12);
        \u0275\u0275text(32, "Data");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 16)(34, "pre", 17)(35, "code", 17);
        \u0275\u0275text(36, '<nav aria-label="breadcrumb">\n<ol class="breadcrumb">\n<li class="breadcrumb-item active" aria-current="page">Home</li>\n</ol>\n</nav>\n\n<nav aria-label="breadcrumb">\n<ol class="breadcrumb">\n<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n<li class="breadcrumb-item active" aria-current="page">Library</li>\n</ol>\n</nav>\n\n<nav aria-label="breadcrumb">\n<ol class="breadcrumb mb-0">\n<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n<li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n<li class="breadcrumb-item active" aria-current="page">Data</li>\n</ol>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "div", 5);
        \u0275\u0275text(41, " Example1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 6)(43, "button", 7);
        \u0275\u0275text(44, "Show Code");
        \u0275\u0275element(45, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 9)(47, "nav", 10)(48, "ol", 18)(49, "li", 12);
        \u0275\u0275text(50, "Home");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "nav", 10)(52, "ol", 18)(53, "li", 13)(54, "a", 14);
        \u0275\u0275text(55, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "li", 12);
        \u0275\u0275text(57, "Library");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "nav", 10)(59, "ol", 19)(60, "li", 13)(61, "a", 14);
        \u0275\u0275text(62, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "li", 13)(64, "a", 14);
        \u0275\u0275text(65, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "li", 12);
        \u0275\u0275text(67, "Data");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 16)(69, "pre", 17)(70, "code", 17);
        \u0275\u0275text(71, '<nav aria-label="breadcrumb">\n<ol class="breadcrumb breadcrumb-example1">\n<li class="breadcrumb-item active" aria-current="page">Home</li>\n</ol>\n</nav>\n\n<nav aria-label="breadcrumb">\n<ol class="breadcrumb breadcrumb-example1">\n<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n<li class="breadcrumb-item active" aria-current="page">Library</li>\n</ol>\n</nav>\n\n<nav aria-label="breadcrumb">\n<ol class="breadcrumb breadcrumb-example1 mb-0">\n<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n<li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n<li class="breadcrumb-item active" aria-current="page">Data</li>\n</ol>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "div", 5);
        \u0275\u0275text(76, " Dividers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 6)(78, "button", 7);
        \u0275\u0275text(79, "Show Code");
        \u0275\u0275element(80, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 9)(82, "nav", 20)(83, "ol", 15)(84, "li", 13)(85, "a", 14);
        \u0275\u0275text(86, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "li", 12);
        \u0275\u0275text(88, "Library");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "div", 16)(90, "pre", 17)(91, "code", 17);
        \u0275\u0275text(92, `<nav style="--bs-breadcrumb-divider: '~';" aria-label="breadcrumb">
<ol class="breadcrumb mb-0">
<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 2)(94, "div", 3)(95, "div", 4)(96, "div", 5);
        \u0275\u0275text(97, " Embedded SVG icon ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 6)(99, "button", 7);
        \u0275\u0275text(100, "Show Code");
        \u0275\u0275element(101, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 9)(103, "nav", 21)(104, "ol", 15)(105, "li", 13)(106, "a", 14);
        \u0275\u0275text(107, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "li", 22);
        \u0275\u0275text(109, "Library");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(110, "div", 16)(111, "pre", 17)(112, "code", 17);
        \u0275\u0275text(113, `<nav style="--bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");"
aria-label="breadcrumb">
<ol class="breadcrumb mb-0">
<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
<li class="breadcrumb-item active embedded-breadcrumb" aria-current="page">Library</li>
</ol>
</nav>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(114, "div", 2)(115, "div", 3)(116, "div", 4)(117, "div", 5);
        \u0275\u0275text(118, " Breadcrumb Style-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 6)(120, "button", 7);
        \u0275\u0275text(121, "Show Code");
        \u0275\u0275element(122, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 9)(124, "nav", 10)(125, "ol", 23)(126, "li", 13)(127, "a", 14);
        \u0275\u0275text(128, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "li", 13)(130, "a", 14);
        \u0275\u0275text(131, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "li", 12);
        \u0275\u0275text(133, "Data");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(134, "div", 16)(135, "pre", 17)(136, "code", 17);
        \u0275\u0275text(137, '<nav aria-label="breadcrumb">\n<ol class="breadcrumb breadcrumb-style1 mb-0">\n<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n<li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n<li class="breadcrumb-item active" aria-current="page">Data</li>\n</ol>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(138, "div", 2)(139, "div", 3)(140, "div", 4)(141, "div", 5);
        \u0275\u0275text(142, " Breadcrumb Style-2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 6)(144, "button", 7);
        \u0275\u0275text(145, "Show Code");
        \u0275\u0275element(146, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 9)(148, "nav", 10)(149, "ol", 24)(150, "li", 13)(151, "a", 14);
        \u0275\u0275element(152, "i", 25);
        \u0275\u0275text(153, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "li", 13)(155, "a", 14);
        \u0275\u0275element(156, "i", 26);
        \u0275\u0275text(157, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "li", 12);
        \u0275\u0275text(159, "Services");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(160, "div", 16)(161, "pre", 17)(162, "code", 17);
        \u0275\u0275text(163, '<nav aria-label="breadcrumb">\n<ol class="breadcrumb breadcrumb-style2 mb-0">\n<li class="breadcrumb-item"><a href="javascript:void(0);"><i class="ti ti-home-2 me-1 fs-15"></i>Home</a></li>\n<li class="breadcrumb-item"><a href="javascript:void(0);"><i class="ti ti-apps me-1 fs-15"></i>About</a></li>\n<li class="breadcrumb-item active" aria-current="page">Services</li>\n</ol>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(164, "div", 27)(165, "div", 3)(166, "div", 4)(167, "div", 5);
        \u0275\u0275text(168, " Background colors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "div", 6)(170, "button", 7);
        \u0275\u0275text(171, "Show Code");
        \u0275\u0275element(172, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "div", 9)(174, "nav", 28)(175, "ol", 15)(176, "li", 13)(177, "a", 14);
        \u0275\u0275text(178, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "li", 12);
        \u0275\u0275text(180, "Library");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(181, "div", 16)(182, "pre", 17)(183, "code", 17);
        \u0275\u0275text(184, `<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
<ol class="breadcrumb mb-0">
<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(185, "div", 27)(186, "div", 3)(187, "div", 4)(188, "div", 5);
        \u0275\u0275text(189, " Color BreadcrumbS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 6)(191, "button", 7);
        \u0275\u0275text(192, "Show Code");
        \u0275\u0275element(193, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(194, "div", 9)(195, "ol", 29)(196, "li", 30)(197, "a", 31);
        \u0275\u0275text(198, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "li", 32);
        \u0275\u0275text(200, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "ol", 33)(202, "li", 34)(203, "a", 35);
        \u0275\u0275text(204, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "li", 32);
        \u0275\u0275text(206, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "ol", 36)(208, "li", 34)(209, "a", 35);
        \u0275\u0275text(210, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "li", 30)(212, "a", 35);
        \u0275\u0275text(213, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(214, "li", 32);
        \u0275\u0275text(215, "Data");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "div", 16)(217, "pre", 17)(218, "code", 17);
        \u0275\u0275text(219, '\n<ol class="breadcrumb1 bg-primary"><\n<li class="breadcrumb-item1 text-fixed-white"><a> href="javascript:void(0);" class="text-fixed-white">Home</a></li>\n<li> class="breadcrumb-item1 active text-fixed-white">About</li>\n</ol>\n<ol class="breadcrumb1 bg-secondary">\n<li class="breadcrumb-item1"><a> href="javascript:void(0)" class="text-fixed-white">Home</a></li>\n<li> class="breadcrumb-item1 active text-fixed-white">Library</li>\n</ol>\n<ol class="breadcrumb1 bg-success">\n<li class="breadcrumb-item1"><a> href="javascript:void(0)" class="text-fixed-white">Home</a></li>\n<li class="breadcrumb-item1 text-fixed-white"><a> href="javascript:void(0)" class="text-fixed-white">Library</a></li>\n<li> class="breadcrumb-item1 active text-fixed-white">Data</li>\n</ol>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(220, "div", 27)(221, "div", 3)(222, "div", 4)(223, "div", 5);
        \u0275\u0275text(224, " Custom-style BreadcrumbS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "div", 6)(226, "button", 7);
        \u0275\u0275text(227, "Show Code");
        \u0275\u0275element(228, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(229, "div", 9)(230, "ol", 37)(231, "li")(232, "a", 38);
        \u0275\u0275text(233, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "li", 39)(235, "span");
        \u0275\u0275text(236, "Data");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(237, "ol", 37)(238, "li")(239, "a", 38);
        \u0275\u0275text(240, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "li")(242, "a", 38);
        \u0275\u0275text(243, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(244, "li", 39)(245, "span");
        \u0275\u0275text(246, "Data");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(247, "ol", 40)(248, "li")(249, "a", 38);
        \u0275\u0275text(250, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "li")(252, "a", 38);
        \u0275\u0275text(253, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(254, "li")(255, "a", 38);
        \u0275\u0275text(256, "Elements");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "li", 39)(258, "span");
        \u0275\u0275text(259, "Data");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(260, "div", 16)(261, "pre", 17)(262, "code", 17);
        \u0275\u0275text(263, '<ol class="breadcrumb breadcrumb-arrow mt-3">\n<li><a href="javascript:void(0)">Home</a></li>\n<li class="active"><span>Data</span></li>\n</ol>\n<ol class="breadcrumb breadcrumb-arrow mt-3">\n<li><a href="javascript:void(0)">Home</a></li>\n<li><a href="javascript:void(0)">Library</a></li>\n<li class="active"><span>Data</span></li>\n</ol>\n<ol class="breadcrumb breadcrumb-arrow mt-3">\n<li><a href="javascript:void(0)">Home</a></li>\n<li><a href="javascript:void(0)">Library</a></li>\n<li><a href="javascript:void(0)">Elements</a></li>\n<li class="active"><span>Data</span></li>\n</ol>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src\\app\\components\\uielements\\breadcrumb\\breadcrumb.component.ts", lineNumber: 11 });
})();
export {
  BreadcrumbComponent
};
//# sourceMappingURL=breadcrumb.component-YXFSR5LT.js.map
