import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbOffcanvas,
  OffcanvasDismissReasons
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/offcanvas/offcanvas.component.ts
function OffcanvasComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "h5", 22);
    \u0275\u0275text(2, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function OffcanvasComponent_ng_template_49_Template_button_click_3_listener() {
      const offcanvas_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(offcanvas_r4.close("Close click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "div")(6, "ul", 25)(7, "li", 26)(8, "div", 27)(9, "div", 28)(10, "span", 29);
    \u0275\u0275text(11, " NW ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 30)(13, "p", 31);
    \u0275\u0275text(14, "New Website Created");
    \u0275\u0275elementStart(15, "span", 32);
    \u0275\u0275text(16, "20 Nov 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275element(18, "i", 34);
    \u0275\u0275text(19, "30 mins ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "li", 26)(21, "div", 27)(22, "div", 28)(23, "span", 35);
    \u0275\u0275text(24, " CH ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 30)(26, "p", 31);
    \u0275\u0275text(27, "Prepare for the new project");
    \u0275\u0275elementStart(28, "span", 32);
    \u0275\u0275text(29, "3 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span", 33);
    \u0275\u0275element(31, "i", 34);
    \u0275\u0275text(32, "2 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "li", 26)(34, "div", 27)(35, "div", 28)(36, "span", 36);
    \u0275\u0275text(37, " S ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 30)(39, "p", 31);
    \u0275\u0275text(40, "Decide the live discussion");
    \u0275\u0275elementStart(41, "span", 32);
    \u0275\u0275text(42, "17 Feb 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "span", 33);
    \u0275\u0275element(44, "i", 34);
    \u0275\u0275text(45, "3 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "li", 26)(47, "div", 27)(48, "div", 28)(49, "span", 37);
    \u0275\u0275element(50, "img", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 30)(52, "p", 31);
    \u0275\u0275text(53, "Meeting at 3:00 pm");
    \u0275\u0275elementStart(54, "span", 32);
    \u0275\u0275text(55, "29 Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "span", 33);
    \u0275\u0275element(57, "i", 34);
    \u0275\u0275text(58, "4 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "li", 26)(60, "div", 27)(61, "div", 28)(62, "span", 39);
    \u0275\u0275text(63, " RC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 30)(65, "p", 31);
    \u0275\u0275text(66, "Prepare for presentation");
    \u0275\u0275elementStart(67, "span", 32);
    \u0275\u0275text(68, "31 Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "span", 33);
    \u0275\u0275element(70, "i", 34);
    \u0275\u0275text(71, "4 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "li", 26)(73, "div", 27)(74, "div", 28)(75, "span", 37);
    \u0275\u0275element(76, "img", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 30)(78, "p", 31);
    \u0275\u0275text(79, "Brenda New product launching");
    \u0275\u0275elementStart(80, "span", 32);
    \u0275\u0275text(81, "1 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "span", 33);
    \u0275\u0275element(83, "i", 34);
    \u0275\u0275text(84, "7 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "li", 26)(86, "div", 27)(87, "div", 28)(88, "span", 41);
    \u0275\u0275text(89, " M ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 30)(91, "p", 31);
    \u0275\u0275text(92, "Medeleine Hey! there i'm available");
    \u0275\u0275elementStart(93, "span", 32);
    \u0275\u0275text(94, "5 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "span", 33);
    \u0275\u0275element(96, "i", 34);
    \u0275\u0275text(97, "3 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "li", 26)(99, "div", 27)(100, "div", 28)(101, "span", 36);
    \u0275\u0275text(102, " OL ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 30)(104, "p", 31);
    \u0275\u0275text(105, "Olivia New schedule release");
    \u0275\u0275elementStart(106, "span", 32);
    \u0275\u0275text(107, "6 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "span", 33);
    \u0275\u0275element(109, "i", 34);
    \u0275\u0275text(110, "45 mins ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(111, "li", 26)(112, "div", 27)(113, "div", 28)(114, "span", 42);
    \u0275\u0275text(115, " A ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 30)(117, "p", 31);
    \u0275\u0275text(118, "Kamala Preparing for new admin launch");
    \u0275\u0275elementStart(119, "span", 32);
    \u0275\u0275text(120, "7 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "span", 33);
    \u0275\u0275element(122, "i", 34);
    \u0275\u0275text(123, "28 mins ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(124, "li", 26)(125, "div", 27)(126, "div", 28)(127, "span", 37);
    \u0275\u0275element(128, "img", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 30)(130, "p", 31);
    \u0275\u0275text(131, "Oisha Meeting with clinet for dinner");
    \u0275\u0275elementStart(132, "span", 32);
    \u0275\u0275text(133, "10 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "span", 33);
    \u0275\u0275element(135, "i", 34);
    \u0275\u0275text(136, "14 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(137, "li", 26)(138, "div", 27)(139, "div", 28)(140, "span", 35);
    \u0275\u0275text(141, " CH ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 30)(143, "p", 31);
    \u0275\u0275text(144, "Prepare for the new project");
    \u0275\u0275elementStart(145, "span", 32);
    \u0275\u0275text(146, "3 Jan 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "span", 33);
    \u0275\u0275element(148, "i", 34);
    \u0275\u0275text(149, "2 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "li", 26)(151, "div", 27)(152, "div", 28)(153, "span", 36);
    \u0275\u0275text(154, " S ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 30)(156, "p", 31);
    \u0275\u0275text(157, "Decide the live discussion");
    \u0275\u0275elementStart(158, "span", 32);
    \u0275\u0275text(159, "17 Feb 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "span", 33);
    \u0275\u0275element(161, "i", 34);
    \u0275\u0275text(162, "3 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(163, "li", 26)(164, "div", 27)(165, "div", 28)(166, "span", 37);
    \u0275\u0275element(167, "img", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 30)(169, "p", 31);
    \u0275\u0275text(170, "Meeting at 3:00 pm");
    \u0275\u0275elementStart(171, "span", 32);
    \u0275\u0275text(172, "29 Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "span", 33);
    \u0275\u0275element(174, "i", 34);
    \u0275\u0275text(175, "4 hrs ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(176, "li", 26)(177, "div", 27)(178, "div", 28)(179, "span", 39);
    \u0275\u0275text(180, " RC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "div", 30)(182, "p", 31);
    \u0275\u0275text(183, "Prepare for presentation");
    \u0275\u0275elementStart(184, "span", 32);
    \u0275\u0275text(185, "31 Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "span", 33);
    \u0275\u0275element(187, "i", 34);
    \u0275\u0275text(188, "4 hrs ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(189, "div", 45);
    \u0275\u0275elementEnd();
  }
}
function OffcanvasComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h5", 47);
    \u0275\u0275text(2, " Offcanvas top ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function OffcanvasComponent_ng_template_84_Template_button_click_3_listener() {
      const offcanvas_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(offcanvas_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
  }
}
var OffcanvasComponent = class _OffcanvasComponent {
  constructor(offcanvasService) {
    this.offcanvasService = offcanvasService;
    this.closeResult = "";
  }
  open(content) {
    this.offcanvasService.open(content, { ariaLabelledBy: "offcanvas-basic-title" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openNoBackdrop(content) {
    this.offcanvasService.open(content, { backdrop: false });
  }
  openStaticBackdrop(content) {
    this.offcanvasService.open(content, { backdrop: "static" });
  }
  EnableBackdrop(content) {
    this.offcanvasService.open(content, { scroll: false });
  }
  openTop(content) {
    this.offcanvasService.open(content, { position: "top" });
  }
  openRight(content) {
    this.offcanvasService.open(content, { position: "end" });
  }
  openBottom(content) {
    this.offcanvasService.open(content, { position: "bottom" });
  }
  getDismissReason(reason) {
    if (reason === OffcanvasDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return "by clicking on the backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  static {
    this.\u0275fac = function OffcanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OffcanvasComponent)(\u0275\u0275directiveInject(NgbOffcanvas));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OffcanvasComponent, selectors: [["app-offcanvas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 94, vars: 0, consts: [["content", ""], ["content1", ""], ["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "OffCanvas", "activeTitle", "OffCanvas"], [1, "row"], [1, "col-xl-4"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "prism-toggle"], ["appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "btn", "btn-primary", "mb-1", 3, "click"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasWithBothOptions", "aria-controls", "offcanvasWithBothOptions", 1, "btn", "btn-primary", 3, "click"], [1, "col-xl-5"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasTop", "aria-controls", "offcanvasTop", 1, "btn", "btn-primary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight", "aria-controls", "offcanvasRight", 1, "btn", "btn-primary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasBottom", "aria-controls", "offcanvasBottom", 1, "btn", "btn-primary", "mb-1", 3, "click"], [1, "offcanvas-header", "border-bottom", "border-block-end-dashed"], ["id", "staticBackdropLabel", 1, "offcanvas-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "offcanvas-body", "p-0"], [1, "list-group", "list-group-flush", "mb-0"], [1, "list-group-item"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "avatar", "avatar-md", "bg-primary", "avatar-rounded"], [1, "flex-fill"], [1, "fw-semibold", "mb-0"], [1, "badge", "bg-light", "text-muted", "float-end"], [1, "fs-12", "text-muted"], [1, "ri-time-line", "align-middle", "me-1", "d-inline-block"], [1, "avatar", "avatar-md", "bg-danger", "avatar-rounded"], [1, "avatar", "avatar-md", "bg-info", "avatar-rounded"], [1, "avatar", "avatar-md", "avatar-rounded"], ["src", "./assets/images/faces/12.jpg", "alt", ""], [1, "avatar", "avatar-md", "bg-success", "avatar-rounded"], ["src", "./assets/images/faces/1.jpg", "alt", ""], [1, "avatar", "avatar-md", "bg-secondary", "avatar-rounded"], [1, "avatar", "avatar-md", "bg-warning", "avatar-rounded"], ["src", "./assets/images/faces/6.jpg", "alt", ""], ["src", "./assets/images/faces/14.jpg", "alt", ""], [1, "text-end"], [1, "offcanvas-header"], ["id", "offcanvasTopLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "offcanvas-body"]], template: function OffcanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7);
        \u0275\u0275text(6, " Live demo ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 8)(8, "button", 9);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 11)(12, "a", 12);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_a_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.open(content_r2));
        });
        \u0275\u0275text(13, " Link with href ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " \xA0 ");
        \u0275\u0275elementStart(15, "button", 12);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.open(content_r2));
        });
        \u0275\u0275text(16, " Button with data-bs-target ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "pre", 14)(19, "code", 14);
        \u0275\u0275text(20, '<a class="btn btn-primary mb-1" data-bs-toggle="offcanvas" href="#offcanvasExample"\nrole="button" aria-controls="offcanvasExample">\nLink with href\n</a>\n<button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"\ndata-bs-target="#offcanvasExample" aria-controls="offcanvasExample">\nButton with data-bs-target\n</button>\n<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"\naria-labelledby="offcanvasExampleLabel">\n<div class="offcanvas-header border-bottom border-block-end-dashed">\n<h5 class="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>\n<button type="button" class="btn-close" data-bs-dismiss="offcanvas"\naria-label="Close"></button>\n</div>\n<div class="offcanvas-body p-0">\n-------\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 4)(22, "div", 5)(23, "div", 6)(24, "div", 7);
        \u0275\u0275text(25, " Disable BackDrop ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8)(27, "button", 9);
        \u0275\u0275text(28, "Show Code");
        \u0275\u0275element(29, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 11)(31, "button", 15);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.openNoBackdrop(content_r2));
        });
        \u0275\u0275text(32, "No BackDrop ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 13)(34, "pre", 14)(35, "code", 14);
        \u0275\u0275text(36, '<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"\ndata-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable\nbody scrolling\n</button>\n<div class="offcanvas offcanvas-start" data-bs-scroll="true"\ndata-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"\naria-labelledby="offcanvasScrollingLabel">\n<div class="offcanvas-header border-bottom border-block-end-dashed">\n<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>\n<button type="button" class="btn-close" data-bs-dismiss="offcanvas"\naria-label="Close"></button>\n</div>\n<div class="offcanvas-body p-0">\n-----\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "div", 5)(39, "div", 6)(40, "div", 7);
        \u0275\u0275text(41, " Static backdrop ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 8)(43, "button", 9);
        \u0275\u0275text(44, "Show Code");
        \u0275\u0275element(45, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 11)(47, "button", 15);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.openStaticBackdrop(content_r2));
        });
        \u0275\u0275text(48, " Toggle static offcanvas ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, OffcanvasComponent_ng_template_49_Template, 190, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 13)(52, "pre", 14)(53, "code", 14);
        \u0275\u0275text(54, '<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"\ndata-bs-target="#staticBackdrop" aria-controls="staticBackdrop">\nToggle static offcanvas\n</button>\n<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1"\nid="staticBackdrop" aria-labelledby="staticBackdropLabel">\n<div class="offcanvas-header border-bottom border-block-end-dashed">\n<h5 class="offcanvas-title" id="staticBackdropLabel">Notifications</h5>\n<button type="button" class="btn-close" data-bs-dismiss="offcanvas"\naria-label="Close"></button>\n</div>\n<div class="offcanvas-body p-0">\n--------\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(55, "div", 3)(56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "div", 7);
        \u0275\u0275text(60, "Body scrolling and backdrop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 8)(62, "button", 9);
        \u0275\u0275text(63, " Show Code");
        \u0275\u0275element(64, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 11)(66, "button", 16);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_66_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.EnableBackdrop(content_r2));
        });
        \u0275\u0275text(67, " Enable both scrolling & backdrop ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 13)(69, "pre", 14)(70, "code", 14);
        \u0275\u0275text(71, '<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"\n      data-bs-target="#offcanvasWithBothOptions"\n      aria-controls="offcanvasWithBothOptions">Enable both scrolling &\n      backdrop</button>\n  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"\n      id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">\n      <div class="offcanvas-header border-bottom border-block-end-dashed">\n          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"\n              aria-label="Close"></button>\n      </div>\n      <div class="offcanvas-body p-0">\n          -------\n      </div>\n  </div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(72, "div", 17)(73, "div", 5)(74, "div", 6)(75, "div", 7);
        \u0275\u0275text(76, "Placement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 8)(78, "button", 9);
        \u0275\u0275text(79, " Show Code");
        \u0275\u0275element(80, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 11)(82, "button", 18);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_82_listener() {
          \u0275\u0275restoreView(_r1);
          const content1_r5 = \u0275\u0275reference(85);
          return \u0275\u0275resetView(ctx.openTop(content1_r5));
        });
        \u0275\u0275text(83, " Toggle top offcanvas ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(84, OffcanvasComponent_ng_template_84_Template, 6, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(86, "button", 19);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_86_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(ctx.openRight(content_r2));
        });
        \u0275\u0275text(87, " Toggle right offcanvas ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "button", 20);
        \u0275\u0275listener("click", function OffcanvasComponent_Template_button_click_88_listener() {
          \u0275\u0275restoreView(_r1);
          const content1_r5 = \u0275\u0275reference(85);
          return \u0275\u0275resetView(ctx.openBottom(content1_r5));
        });
        \u0275\u0275text(89, " Toggle bottom offcanvas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 13)(91, "pre", 14)(92, "code", 14);
        \u0275\u0275text(93, '<button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"\n      data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top\n      offcanvas</button>\n  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"\n      aria-labelledby="offcanvasTopLabel">\n      <div class="offcanvas-header">\n          <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"\n              aria-label="Close"></button>\n      </div>\n      <div class="offcanvas-body">\n          ...\n      </div>\n  </div>\n  <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"\n      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right\n      offcanvas</button>\n  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"\n      aria-labelledby="offcanvasRightLabel1">\n      <div class="offcanvas-header border-bottom border-block-end-dashed">\n          <h5 class="offcanvas-title" id="offcanvasRightLabel1">Notifications\n          </h5>\n          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"\n              aria-label="Close"></button>\n      </div>\n      <div class="offcanvas-body p-0">\n          ----------\n      </div>\n  </div>\n  <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"\n      data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle\n      bottom\n      offcanvas</button>\n  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"\n      aria-labelledby="offcanvasBottomLabel">\n      <div class="offcanvas-header">\n          <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom\n          </h5>\n          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"\n              aria-label="Close"></button>\n      </div>\n      <div class="offcanvas-body small">\n          ...\n      </div>\n  </div>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OffcanvasComponent, { className: "OffcanvasComponent", filePath: "src\\app\\components\\advancedui\\offcanvas\\offcanvas.component.ts", lineNumber: 12 });
})();
export {
  OffcanvasComponent
};
//# sourceMappingURL=offcanvas.component-YDCGNBNS.js.map
