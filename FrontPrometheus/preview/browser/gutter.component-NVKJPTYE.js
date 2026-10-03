import {
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

// src/app/components/utilities/gutter/gutter.component.ts
var GutterComponent = class _GutterComponent {
  static {
    this.\u0275fac = function GutterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GutterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GutterComponent, selectors: [["app-gutter"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 187, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Utilities", "title", "Gutters", "activeTitle", "Gutters"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-danger"], [1, "container", "px-4", "mb-3"], [1, "row", "gx-5", "gy-2"], [1, "col"], [1, "p-3", "border", "bg-light"], [1, "container", "overflow-hidden"], [1, "row", "gy-5"], [1, "col-6"], [1, "container"], [1, "row", "g-2"], [1, "row", "row-cols-sm-2", "row-cols-1", "row-cols-xxl-5", "row-cols-lg-3", "g-2", "g-lg-3"], [1, "row", "g-0"], [1, "col-sm-6", "col-md-8", "bd-example-grid"], [1, "col-6", "col-md-4", "bd-example-grid"]], template: function GutterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Horizontal gutters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "p")(9, "span", 7);
        \u0275\u0275text(10, ".gx-*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " classes can be used to control the horizontal gutter widths. The ");
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13, ".container");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " or ");
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16, ".container-fluid");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we\u2019ve increased the padding with ");
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19, ".px-4");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9)(23, "div", 10)(24, "div", 11);
        \u0275\u0275text(25, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "div", 11);
        \u0275\u0275text(28, "Custom column padding");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "An alternative solution is to add a wrapper around the ");
        \u0275\u0275elementStart(31, "span", 7);
        \u0275\u0275text(32, ".row");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " with the ");
        \u0275\u0275elementStart(34, "span", 7);
        \u0275\u0275text(35, ".overflow-hidden");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " class: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 12)(38, "div", 9)(39, "div", 10)(40, "div", 11);
        \u0275\u0275text(41, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 10)(43, "div", 11);
        \u0275\u0275text(44, "Custom column padding");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(45, "div", 2)(46, "div", 3)(47, "div", 4)(48, "div", 5);
        \u0275\u0275text(49, " Vertical gutters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 6)(51, "p")(52, "span", 7);
        \u0275\u0275text(53, ".gy-*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the .row at the end of a page. If this occurs, you add a wrapper around ");
        \u0275\u0275elementStart(55, "span", 7);
        \u0275\u0275text(56, ".row");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " with the ");
        \u0275\u0275elementStart(58, "span", 7);
        \u0275\u0275text(59, ".overflow-hidden");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " class: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 12)(62, "div", 13)(63, "div", 14)(64, "div", 11);
        \u0275\u0275text(65, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 14)(67, "div", 11);
        \u0275\u0275text(68, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 14)(70, "div", 11);
        \u0275\u0275text(71, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 14)(73, "div", 11);
        \u0275\u0275text(74, "Custom column padding");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(75, "div", 1)(76, "div", 2)(77, "div", 3)(78, "div", 4)(79, "div", 5);
        \u0275\u0275text(80, " Horizontal & vertical gutters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 6)(82, "p")(83, "span", 7);
        \u0275\u0275text(84, ".g-*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won\u2019t be a need to add the ");
        \u0275\u0275elementStart(86, "span", 7);
        \u0275\u0275text(87, ".overflow-hidden");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " wrapper class.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 15)(90, "div", 16)(91, "div", 14)(92, "div", 11);
        \u0275\u0275text(93, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 14)(95, "div", 11);
        \u0275\u0275text(96, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 14)(98, "div", 11);
        \u0275\u0275text(99, "Custom column padding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 14)(101, "div", 11);
        \u0275\u0275text(102, "Custom column padding");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(103, "div", 2)(104, "div", 3)(105, "div", 4)(106, "div", 5);
        \u0275\u0275text(107, " Row columns gutters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 6)(109, "p");
        \u0275\u0275text(110, "Gutter classes can also be added to ");
        \u0275\u0275elementStart(111, "span", 7);
        \u0275\u0275text(112, "row columns");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, ". In the following example, we use responsive row columns and responsive gutter classes. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 15)(115, "div", 17)(116, "div", 10)(117, "div", 11);
        \u0275\u0275text(118, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 10)(120, "div", 11);
        \u0275\u0275text(121, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 10)(123, "div", 11);
        \u0275\u0275text(124, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "div", 10)(126, "div", 11);
        \u0275\u0275text(127, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 10)(129, "div", 11);
        \u0275\u0275text(130, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 10)(132, "div", 11);
        \u0275\u0275text(133, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 10)(135, "div", 11);
        \u0275\u0275text(136, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 10)(138, "div", 11);
        \u0275\u0275text(139, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 10)(141, "div", 11);
        \u0275\u0275text(142, "Row column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 10)(144, "div", 11);
        \u0275\u0275text(145, "Row column");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(146, "div", 2)(147, "div", 3)(148, "div", 4)(149, "div", 5);
        \u0275\u0275text(150, " No gutters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 6)(152, "p");
        \u0275\u0275text(153, "The gutters between columns in our predefined grid classes can be removed with ");
        \u0275\u0275elementStart(154, "span", 7);
        \u0275\u0275text(155, ".g-0");
        \u0275\u0275elementEnd();
        \u0275\u0275text(156, ". This removes the negative ");
        \u0275\u0275elementStart(157, "span", 7);
        \u0275\u0275text(158, "margins");
        \u0275\u0275elementEnd();
        \u0275\u0275text(159, " from ");
        \u0275\u0275elementStart(160, "span", 7);
        \u0275\u0275text(161, ".row ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(162, "and the horizontal ");
        \u0275\u0275elementStart(163, "span", 7);
        \u0275\u0275text(164, "padding");
        \u0275\u0275elementEnd();
        \u0275\u0275text(165, " from all immediate children columns. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "p");
        \u0275\u0275text(167, "Need an edge-to-edge design? Drop the parent ");
        \u0275\u0275elementStart(168, "span", 7);
        \u0275\u0275text(169, ".container");
        \u0275\u0275elementEnd();
        \u0275\u0275text(170, " or ");
        \u0275\u0275elementStart(171, "span", 7);
        \u0275\u0275text(172, ".container-fluid");
        \u0275\u0275elementEnd();
        \u0275\u0275text(173, " and add ");
        \u0275\u0275elementStart(174, "span", 7);
        \u0275\u0275text(175, ".mx-0");
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, " to the ");
        \u0275\u0275elementStart(177, "span", 7);
        \u0275\u0275text(178, ".row");
        \u0275\u0275elementEnd();
        \u0275\u0275text(179, " to prevent overflow. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "p");
        \u0275\u0275text(181, "In practice, here\u2019s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 18)(183, "div", 19);
        \u0275\u0275text(184, ".col-sm-6 .col-md-8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "div", 20);
        \u0275\u0275text(186, ".col-6 .col-md-4");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GutterComponent, { className: "GutterComponent", filePath: "src\\app\\components\\utilities\\gutter\\gutter.component.ts", lineNumber: 11 });
})();
export {
  GutterComponent
};
//# sourceMappingURL=gutter.component-NVKJPTYE.js.map
