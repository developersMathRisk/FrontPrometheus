import {
  SortablejsDirective,
  SortablejsModule
} from "./chunk-2OMUKYSD.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbCollapse,
  NgbModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/draggable-cards/draggable-cards.component.ts
var DraggableCardsComponent = class _DraggableCardsComponent {
  constructor() {
    this.isCollapsed = false;
    this.isCollapsed1 = false;
    this.normalOptions = {
      animation: 150,
      group: "shared"
      // Add other options here as needed
    };
  }
  ngOnInit() {
  }
  fullScreenToggle() {
    document.querySelector(".fullscreentoggle")?.classList.toggle("card-fullscreen");
  }
  // Handle sort end event
  onSortEnd(event) {
  }
  static {
    this.\u0275fac = function DraggableCardsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DraggableCardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DraggableCardsComponent, selectors: [["app-draggable-cards"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 154, vars: 8, consts: [["collapse", "ngbCollapse"], ["collapse1", "ngbCollapse"], ["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Draggable Cards", "activeTitle", "Draggable Cards"], [1, "row"], ["id", "draggable-left", 1, "col-xl-6", 3, "sortablejs", "sortablejsOptions"], [1, "card", "custom-card", "overlay-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], ["src", "./assets/images/media/media-34.jpg", "alt", "...", 1, "card-img"], [1, "card-img-overlay", "d-flex", "flex-column", "p-0", "over-content-bottom", "top-0"], [1, "card-body", "overflow-auto", "text-fixed-white"], [1, "card-text"], [1, "card-text", "mb-2"], [1, "card-footer", "text-fixed-white"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between", "pb-3"], [1, "card-title"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "click"], [1, "ri-arrow-down-s-line", "fs-18", "collapse-open"], [1, "ri-arrow-up-s-line", "collapse-close", "fs-18"], ["id", "collapseExample", 1, "collapse", "show", 3, "ngbCollapseChange", "ngbCollapse"], [1, "card-body"], [1, "card-text", "fw-medium"], [1, "card-text", "mb-0"], [1, "card-footer"], [1, "btn", "btn-primary"], [1, "card", "custom-card", "card-bg-success"], [1, "d-flex", "align-items-center", "w-100"], [1, "me-2"], [1, "avatar", "avatar-rounded"], ["src", "./assets/images/faces/5.jpg", "alt", "img"], [1, ""], [1, "fs-15", "fw-medium"], [1, "mb-0", "text-fixed-white", "op-7", "fs-12"], [1, "card", "custom-card", 3, "ngbCollapseChange", "ngbCollapse"], [1, "card-header", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "card-remove", 3, "click"], [1, "ri-close-line", "fs-18"], ["id", "draggable-right", 1, "col-xl-6", 3, "sortablejs", "sortablejsOptions"], [1, "card", "custom-card", "card-bg-primary"], ["href", "javascript:void(0);", 1, "card-anchor"], [1, "blockquote", "mb-0", "text-center"], [1, "text-fixed-white"], [1, "blockquote-footer", "mt-3", "fs-14", "text-fixed-white", "op-7"], ["title", "Source Title"], [1, "card", "custom-card", "fullscreentoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "card-fullscreen", 3, "click"], [1, "ri-fullscreen-line"], [1, "card", "custom-card", "overlay-card", "text-fixed-white"], ["src", "./assets/images/media/media-36.jpg", "alt", "...", 1, "card-img"], [1, "card-img-overlay", "d-flex", "flex-column", "p-0"], [1, "card-header", "text-fixed-white"], [1, "card", "custom-card", "border", "border-info"], [1, "d-flex", "align-items-center"], [1, "me-3"], [1, "avatar", "avatar-xl"], ["src", "./assets/images/faces/8.jpg", "alt", "img"], [1, "card-text", "text-info", "mb-1", "fs-14", "fw-medium"], [1, "card-title", "fs-12", "mb-1"], [1, "card-title", "text-muted", "fs-11", "mb-0"], [1, "avatar", "avatar-md"], ["src", "./assets/images/faces/15.jpg", "alt", "img"], [1, "card-text", "mb-0", "fs-14", "fw-medium"], [1, "card-title", "text-muted", "fs-12", "mb-0"]], template: function DraggableCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
        \u0275\u0275element(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "img", 10);
        \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "div", 13);
        \u0275\u0275text(12, " Image Overlays Are Awesome! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 14);
        \u0275\u0275text(14, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 15);
        \u0275\u0275text(16, "Last updated 3 mins ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 16);
        \u0275\u0275element(18, "div", 6)(19, "div", 7)(20, "div", 8)(21, "div", 9);
        \u0275\u0275elementStart(22, "div", 17)(23, "div", 18);
        \u0275\u0275text(24, " Card With Collapse Button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 19);
        \u0275\u0275listener("click", function DraggableCardsComponent_Template_a_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse_r2 = \u0275\u0275reference(29);
          return \u0275\u0275resetView(collapse_r2.toggle());
        });
        \u0275\u0275element(26, "i", 20)(27, "i", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 22, 0);
        \u0275\u0275twoWayListener("ngbCollapseChange", function DraggableCardsComponent_Template_div_ngbCollapseChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed, $event) || (ctx.isCollapsed = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(30, "div", 23)(31, "h6", 24);
        \u0275\u0275text(32, "Collapsible Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 25);
        \u0275\u0275text(34, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 26)(36, "button", 27);
        \u0275\u0275text(37, "Read More");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 28);
        \u0275\u0275element(39, "div", 6)(40, "div", 7)(41, "div", 8)(42, "div", 9);
        \u0275\u0275elementStart(43, "div", 23)(44, "div", 29)(45, "div", 30)(46, "span", 31);
        \u0275\u0275element(47, "img", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 33)(49, "div", 34);
        \u0275\u0275text(50, "Samantha sid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 35);
        \u0275\u0275text(52, "In leave for 1 month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "div", 36, 1);
        \u0275\u0275twoWayListener("ngbCollapseChange", function DraggableCardsComponent_Template_div_ngbCollapseChange_53_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed1, $event) || (ctx.isCollapsed1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275element(55, "div", 6)(56, "div", 7)(57, "div", 8)(58, "div", 9);
        \u0275\u0275elementStart(59, "div", 37)(60, "div", 18);
        \u0275\u0275text(61, " Card With Close Button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 38);
        \u0275\u0275listener("click", function DraggableCardsComponent_Template_a_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse1_r3 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(collapse1_r3.toggle());
        });
        \u0275\u0275element(63, "i", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 23)(65, "h6", 24);
        \u0275\u0275text(66, "Closed Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 25);
        \u0275\u0275text(68, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 26)(70, "button", 27);
        \u0275\u0275text(71, "Read More");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 40)(73, "div", 41);
        \u0275\u0275element(74, "div", 6)(75, "div", 7)(76, "div", 8)(77, "div", 9)(78, "a", 42);
        \u0275\u0275elementStart(79, "div", 23)(80, "blockquote", 43)(81, "h6", 44);
        \u0275\u0275text(82, "The best and most beautiful things in the world cannot be seen or even touched \u2014 they must be felt with the heart..");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "footer", 45);
        \u0275\u0275text(84, "Someone famous as ");
        \u0275\u0275elementStart(85, "cite", 46);
        \u0275\u0275text(86, "-Helen Keller");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(87, "div", 47);
        \u0275\u0275element(88, "div", 6)(89, "div", 7)(90, "div", 8)(91, "div", 9);
        \u0275\u0275elementStart(92, "div", 37)(93, "div", 18);
        \u0275\u0275text(94, " Card With Fullscreen Button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "a", 48);
        \u0275\u0275listener("click", function DraggableCardsComponent_Template_a_click_95_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fullScreenToggle());
        });
        \u0275\u0275element(96, "i", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 23)(98, "h6", 24);
        \u0275\u0275text(99, "FullScreen Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "p", 25);
        \u0275\u0275text(101, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 26)(103, "button", 27);
        \u0275\u0275text(104, "Read More");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 50);
        \u0275\u0275element(106, "div", 6)(107, "div", 7)(108, "div", 8)(109, "div", 9)(110, "img", 51);
        \u0275\u0275elementStart(111, "div", 52)(112, "div", 53)(113, "div", 18);
        \u0275\u0275text(114, " Image Overlays Are Awesome! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div", 12)(116, "div", 14);
        \u0275\u0275text(117, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 13);
        \u0275\u0275text(119, "Last updated 3 mins ago");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(120, "div", 54);
        \u0275\u0275element(121, "div", 6)(122, "div", 7)(123, "div", 8)(124, "div", 9)(125, "a", 42);
        \u0275\u0275elementStart(126, "div", 23)(127, "div", 55)(128, "div", 56)(129, "span", 57);
        \u0275\u0275element(130, "img", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div")(132, "p", 59);
        \u0275\u0275text(133, "Alicia Keys.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 60);
        \u0275\u0275text(135, "Department Of Commerce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 61);
        \u0275\u0275text(137, "24 Years, Female");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(138, "div", 16);
        \u0275\u0275element(139, "div", 6)(140, "div", 7)(141, "div", 8)(142, "div", 9)(143, "a", 42);
        \u0275\u0275elementStart(144, "div", 23)(145, "div", 55)(146, "div", 56)(147, "span", 62);
        \u0275\u0275element(148, "img", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div")(150, "p", 64);
        \u0275\u0275text(151, "Atharva Ayyan.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 65);
        \u0275\u0275text(153, "Correspondent Professor");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("sortablejs", ctx.normalList1)("sortablejsOptions", ctx.normalOptions);
        \u0275\u0275advance(23);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed);
        \u0275\u0275advance(25);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed1);
        \u0275\u0275advance(9);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed1);
        \u0275\u0275advance(10);
        \u0275\u0275property("sortablejs", ctx.normalList2)("sortablejsOptions", ctx.normalOptions);
      }
    }, dependencies: [NgbModule, NgbCollapse, SharedModule, PageHeaderComponent, SortablejsModule, SortablejsDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DraggableCardsComponent, { className: "DraggableCardsComponent", filePath: "src\\app\\components\\advancedui\\draggable-cards\\draggable-cards.component.ts", lineNumber: 14 });
})();
export {
  DraggableCardsComponent
};
//# sourceMappingURL=draggable-cards.component-NKT6NU4E.js.map
