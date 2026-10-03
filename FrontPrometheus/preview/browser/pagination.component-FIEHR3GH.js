import {
  AppShowCodeDirective,
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
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/pagination/pagination.component.ts
var FILTER_PAG_REGEX = /[^0-9]/g;
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.page = 2;
    this.page0 = 3;
    this.page1 = 1;
    this.page2 = 3;
    this.page3 = 1;
    this.page5 = 8;
    this.page6 = 6;
    this.page7 = 3;
    this.page8 = 8;
    this.page9 = 5;
    this.pagef = 7;
    this.pageactive1 = 2;
    this.pageactive = 2;
    this.pages2 = 5;
    this.pageA = 5;
    this.pagest4 = 3;
    this.isDisabled = true;
  }
  getPageSymbol(current) {
    return ["A", "B", "C", "D", "E", "F", "G"][current - 1];
  }
  selectPage(page) {
    this.page = parseInt(page, 10) || 1;
  }
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  formatInput(input) {
    input.value = input.value.replace(FILTER_PAG_REGEX, "");
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 341, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "Pagination", "activeTitle", "Pagination"], [1, "row"], [1, "col-xxl-3", "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["aria-label", "Page navigation"], [1, "pagination", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["href", "javascript:void(0);", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "bx", "bx-chevron-left"], ["href", "javascript:void(0);", "aria-label", "Next", 1, "page-link"], [1, "bx", "bx-chevron-right"], [1, "col-xxl-6", "col-xl-12"], [1, "card-body", "d-flex", "flex-wrap", "justify-content-between", "gap-2"], ["aria-label", "..."], [1, "pagination", "pagination-sm", "mb-0"], ["aria-current", "page", 1, "page-item", "active"], [1, "page-link"], [1, "pagination", "pagination-lg", "mb-0"], [1, "col-xl-6"], [1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-end", "mb-0"], [1, "card-body", "d-flex", "flex-wrap"], ["aria-label", "...", 1, "me-3"], [1, "pagination"], ["aria-label", "Page navigation", 1, "pagination-style-1"], [1, "pagination", "mb-0", "flex-wrap"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "page-link"], [1, "ri-arrow-left-s-line", "align-middle"], [1, "page-item", "active"], [1, "bi", "bi-three-dots"], [1, "ri-arrow-right-s-line", "align-middle"], ["aria-label", "Page navigation", 1, "pagination-style-2"], ["href", "javascript:void(0);", 1, "page-link", "text-primary"], ["aria-label", "Page navigation", 1, "pagination-style-3"], ["aria-label", "Page navigation", 1, "pagination-style-4"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic Pagination ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "nav", 10)(13, "ul", 11)(14, "li", 12)(15, "a", 13);
        \u0275\u0275text(16, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li", 14)(18, "a", 13);
        \u0275\u0275text(19, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li", 14)(21, "a", 13);
        \u0275\u0275text(22, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li", 14)(24, "a", 13);
        \u0275\u0275text(25, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "div", 15)(27, "pre", 16)(28, "code", 16);
        \u0275\u0275text(29, '<nav aria-label="Page navigation">\n<ul class="pagination mb-0">\n<li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 5);
        \u0275\u0275text(34, " Pagination With Icons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 6)(36, "button", 7);
        \u0275\u0275text(37, "Show Code");
        \u0275\u0275element(38, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 9)(40, "nav", 10)(41, "ul", 11)(42, "li", 14)(43, "a", 17)(44, "span", 18);
        \u0275\u0275element(45, "i", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "li", 14)(47, "a", 13);
        \u0275\u0275text(48, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "li", 14)(50, "a", 13);
        \u0275\u0275text(51, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "li", 14)(53, "a", 13);
        \u0275\u0275text(54, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li", 14)(56, "a", 20)(57, "span", 18);
        \u0275\u0275element(58, "i", 21);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(59, "div", 15)(60, "pre", 16)(61, "code", 16);
        \u0275\u0275text(62, '<nav aria-label="Page navigation">\n<ul class="pagination mb-0">\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);" aria-label="Previous">\n<span aria-hidden="true"><i class="bx bx-chevron-left"></i></span>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);" aria-label="Next">\n<span aria-hidden="true"><i class="bx bx-chevron-right"></i></span>\n</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(63, "div", 22)(64, "div", 3)(65, "div", 4)(66, "div", 5);
        \u0275\u0275text(67, " Pagination Sizing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 6)(69, "button", 7);
        \u0275\u0275text(70, "Show Code");
        \u0275\u0275element(71, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 23)(73, "nav", 24)(74, "ul", 25)(75, "li", 26)(76, "span", 27);
        \u0275\u0275text(77, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "li", 14)(79, "a", 13);
        \u0275\u0275text(80, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "li", 14)(82, "a", 13);
        \u0275\u0275text(83, "3");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "nav", 24)(85, "ul", 11)(86, "li", 26)(87, "span", 27);
        \u0275\u0275text(88, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "li", 14)(90, "a", 13);
        \u0275\u0275text(91, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "li", 14)(93, "a", 13);
        \u0275\u0275text(94, "3");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(95, "nav", 24)(96, "ul", 28)(97, "li", 26)(98, "span", 27);
        \u0275\u0275text(99, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "li", 14)(101, "a", 13);
        \u0275\u0275text(102, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "li", 14)(104, "a", 13);
        \u0275\u0275text(105, "3");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(106, "div", 15)(107, "pre", 16)(108, "code", 16);
        \u0275\u0275text(109, '<nav aria-label="...">\n<ul class="pagination pagination-sm mb-0">\n<li class="page-item active" aria-current="page">\n<span class="page-link">1</span>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n</ul>\n</nav>\n<nav aria-label="...">\n<ul class="pagination mb-0">\n<li class="page-item active" aria-current="page">\n<span class="page-link">1</span>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n</ul>\n</nav>\n<nav aria-label="...">\n<ul class="pagination pagination-lg mb-0">\n<li class="page-item active" aria-current="page">\n<span class="page-link">1</span>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(110, "div", 1)(111, "div", 29)(112, "div", 3)(113, "div", 4)(114, "div", 5);
        \u0275\u0275text(115, " Center & Right Aligned Pagination ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 6)(117, "button", 7);
        \u0275\u0275text(118, "Show Code");
        \u0275\u0275element(119, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "div", 9)(121, "nav", 10)(122, "ul", 30)(123, "li", 12)(124, "a", 27);
        \u0275\u0275text(125, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "li", 14)(127, "a", 13);
        \u0275\u0275text(128, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "li", 14)(130, "a", 13);
        \u0275\u0275text(131, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "li", 14)(133, "a", 13);
        \u0275\u0275text(134, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "li", 14)(136, "a", 13);
        \u0275\u0275text(137, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(138, "nav", 10)(139, "ul", 31)(140, "li", 12)(141, "a", 27);
        \u0275\u0275text(142, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "li", 14)(144, "a", 13);
        \u0275\u0275text(145, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "li", 14)(147, "a", 13);
        \u0275\u0275text(148, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "li", 14)(150, "a", 13);
        \u0275\u0275text(151, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "li", 14)(153, "a", 13);
        \u0275\u0275text(154, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(155, "div", 15)(156, "pre", 16)(157, "code", 16);
        \u0275\u0275text(158, '<nav aria-label="Page navigation">\n<ul class="pagination justify-content-center">\n<li class="page-item disabled">\n<a class="page-link">Previous</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">Next</a>\n</li>\n</ul>\n</nav>\n<nav aria-label="Page navigation">\n<ul class="pagination justify-content-end mb-0">\n<li class="page-item disabled">\n<a class="page-link">Previous</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">Next</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(159, "div", 29)(160, "div", 3)(161, "div", 4)(162, "div", 5);
        \u0275\u0275text(163, " Active and disabled states ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 6)(165, "button", 7);
        \u0275\u0275text(166, "Show Code");
        \u0275\u0275element(167, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "div", 32)(169, "nav", 33)(170, "ul", 34)(171, "li", 12)(172, "a", 27);
        \u0275\u0275text(173, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "li", 14)(175, "a", 13);
        \u0275\u0275text(176, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "li", 26)(178, "a", 13);
        \u0275\u0275text(179, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "li", 14)(181, "a", 13);
        \u0275\u0275text(182, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(183, "nav", 24)(184, "ul", 34)(185, "li", 12)(186, "span", 27);
        \u0275\u0275text(187, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "li", 14)(189, "a", 13);
        \u0275\u0275text(190, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "li", 26)(192, "span", 27);
        \u0275\u0275text(193, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(194, "li", 14)(195, "a", 13);
        \u0275\u0275text(196, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(197, "div", 15)(198, "pre", 16)(199, "code", 16);
        \u0275\u0275text(200, '<nav aria-label="..." class="me-3">\n<ul class="pagination">\n<li class="page-item disabled">\n<a class="page-link">Previous</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item active" aria-current="page">\n<a class="page-link" href="javascript:void(0);">2</a>\n</li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">Next</a>\n</li>\n</ul>\n</nav>\n<nav aria-label="...">\n<ul class="pagination">\n<li class="page-item disabled">\n<span class="page-link">Previous</span>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item active" aria-current="page">\n<span class="page-link">2</span>\n</li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">Next</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(201, "div", 1)(202, "div", 29)(203, "div", 3)(204, "div", 4)(205, "div", 5);
        \u0275\u0275text(206, " Pagination Style-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 6)(208, "button", 7);
        \u0275\u0275text(209, "Show Code");
        \u0275\u0275element(210, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "div", 9)(212, "nav", 35)(213, "ul", 36)(214, "li", 12)(215, "a", 37);
        \u0275\u0275element(216, "i", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "li", 14)(218, "a", 13);
        \u0275\u0275text(219, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(220, "li", 39)(221, "a", 13);
        \u0275\u0275text(222, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "li", 14)(224, "a", 37);
        \u0275\u0275element(225, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(226, "li", 14)(227, "a", 13);
        \u0275\u0275text(228, "21");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(229, "li", 14)(230, "a", 37);
        \u0275\u0275element(231, "i", 41);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(232, "div", 15)(233, "pre", 16)(234, "code", 16);
        \u0275\u0275text(235, '<nav aria-label="Page navigation" class="pagination-style-1">\n<ul class="pagination mb-0">\n<li class="page-item disabled">\n<a class="page-link" href="javascript:void(0);">\n<i class="ri-arrow-left-s-line align-middle"></i>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">\n<i class="bi bi-three-dots"></i>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">21</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">\n<i class="ri-arrow-right-s-line align-middle"></i>\n</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(236, "div", 29)(237, "div", 3)(238, "div", 4)(239, "div", 5);
        \u0275\u0275text(240, " Pagination Style-2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "div", 6)(242, "button", 7);
        \u0275\u0275text(243, "Show Code");
        \u0275\u0275element(244, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(245, "div", 9)(246, "nav", 42)(247, "ul", 36)(248, "li", 12)(249, "a", 13);
        \u0275\u0275text(250, " Prev ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "li", 39)(252, "a", 13);
        \u0275\u0275text(253, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(254, "li", 14)(255, "a", 13);
        \u0275\u0275text(256, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "li", 14)(258, "a", 37);
        \u0275\u0275element(259, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(260, "li", 14)(261, "a", 13);
        \u0275\u0275text(262, "17");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "li", 14)(264, "a", 43);
        \u0275\u0275text(265, " next ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(266, "div", 15)(267, "pre", 16)(268, "code", 16);
        \u0275\u0275text(269, '<nav aria-label="Page navigation" class="pagination-style-2">\n<ul class="pagination mb-0 flex-wrap">\n<li class="page-item disabled">\n<a class="page-link" href="javascript:void(0);">\nPrev\n</a>\n</li>\n<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">\n<i class="bi bi-three-dots"></i>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>\n<li class="page-item">\n<a class="page-link text-primary" href="javascript:void(0);">\nnext\n</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(270, "div", 29)(271, "div", 3)(272, "div", 4)(273, "div", 5);
        \u0275\u0275text(274, " Pagination Style-3 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "div", 6)(276, "button", 7);
        \u0275\u0275text(277, "Show Code");
        \u0275\u0275element(278, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(279, "div", 9)(280, "nav", 44)(281, "ul", 36)(282, "li", 12)(283, "a", 13);
        \u0275\u0275text(284, " Prev ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "li", 39)(286, "a", 13);
        \u0275\u0275text(287, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "li", 14)(289, "a", 13);
        \u0275\u0275text(290, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(291, "li", 14)(292, "a", 37);
        \u0275\u0275element(293, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(294, "li", 14)(295, "a", 13);
        \u0275\u0275text(296, "16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "li", 14)(298, "a", 43);
        \u0275\u0275text(299, " next ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(300, "div", 15)(301, "pre", 16)(302, "code", 16);
        \u0275\u0275text(303, '<nav aria-label="Page navigation" class="pagination-style-3">\n<ul class="pagination mb-0 flex-wrap">\n<li class="page-item disabled">\n<a class="page-link" href="javascript:void(0);">\nPrev\n</a>\n</li>\n<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">\n<i class="bi bi-three-dots"></i>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>\n<li class="page-item">\n<a class="page-link text-primary" href="javascript:void(0);">\nnext\n</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(304, "div", 29)(305, "div", 3)(306, "div", 4)(307, "div", 5);
        \u0275\u0275text(308, " Pagination Style-4 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "div", 6)(310, "button", 7);
        \u0275\u0275text(311, "Show Code");
        \u0275\u0275element(312, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(313, "div", 9)(314, "nav", 45)(315, "ul", 36)(316, "li", 12)(317, "a", 13);
        \u0275\u0275text(318, " Prev ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(319, "li", 39)(320, "a", 13);
        \u0275\u0275text(321, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(322, "li", 14)(323, "a", 13);
        \u0275\u0275text(324, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(325, "li", 14)(326, "a", 37);
        \u0275\u0275element(327, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(328, "li", 14)(329, "a", 13);
        \u0275\u0275text(330, "16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(331, "li", 14)(332, "a", 13);
        \u0275\u0275text(333, "17");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(334, "li", 14)(335, "a", 43);
        \u0275\u0275text(336, " next ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(337, "div", 15)(338, "pre", 16)(339, "code", 16);
        \u0275\u0275text(340, '<nav aria-label="Page navigation" class="pagination-style-4">\n<ul class="pagination mb-0 flex-wrap">\n<li class="page-item disabled">\n<a class="page-link" href="javascript:void(0);">\nPrev\n</a>\n</li>\n<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>\n<li class="page-item">\n<a class="page-link" href="javascript:void(0);">\n<i class="bi bi-three-dots"></i>\n</a>\n</li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>\n<li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>\n<li class="page-item">\n<a class="page-link text-primary" href="javascript:void(0);">\nnext\n</a>\n</li>\n</ul>\n</nav>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src\\app\\components\\uielements\\pagination\\pagination.component.ts", lineNumber: 14 });
})();
export {
  PaginationComponent
};
//# sourceMappingURL=pagination.component-FIEHR3GH.js.map
