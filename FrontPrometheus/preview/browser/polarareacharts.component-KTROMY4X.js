import {
  PolarAreaChartData,
  PolarAreaMonochromeChart
} from "./chunk-INMJBR4K.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/charts/apexcharts/polarareacharts/polarareacharts.component.ts
var PolarareachartsComponent = class _PolarareachartsComponent {
  constructor() {
    this.PolarAreaChartData = PolarAreaChartData;
    this.PolarAreaMonochromeChart = PolarAreaMonochromeChart;
  }
  static {
    this.\u0275fac = function PolarareachartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolarareachartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PolarareachartsComponent, selectors: [["app-polarareacharts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 18, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex PolarArea Charts", "activeTitle", "Apex PolarArea Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "polararea-basic"], [3, "series", "chart", "labels", "fill", "colors", "stroke", "responsive", "legend"], ["id", "polararea-monochrome"], [3, "series", "chart", "labels", "title", "theme", "fill", "yaxis", "stroke", "legend", "plotOptions"]], template: function PolarareachartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Polar Area Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
        \u0275\u0275element(13, "apx-chart", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 2)(15, "div", 3);
        \u0275\u0275element(16, "div", 4)(17, "div", 5)(18, "div", 6)(19, "div", 7);
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9);
        \u0275\u0275text(22, "Polar Area Monochrome Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "div", 13);
        \u0275\u0275element(25, "apx-chart", 14);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.PolarAreaChartData.series)("chart", ctx.PolarAreaChartData.chart)("labels", ctx.PolarAreaChartData.labels)("fill", ctx.PolarAreaChartData.fill)("colors", ctx.PolarAreaChartData.colors)("stroke", ctx.PolarAreaChartData.stroke)("responsive", ctx.PolarAreaChartData.responsive)("legend", ctx.PolarAreaChartData.legend);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.PolarAreaMonochromeChart.series)("chart", ctx.PolarAreaMonochromeChart.chart)("labels", ctx.PolarAreaMonochromeChart.labels)("title", ctx.PolarAreaMonochromeChart.title)("theme", ctx.PolarAreaMonochromeChart.theme)("fill", ctx.PolarAreaMonochromeChart.fill)("yaxis", ctx.PolarAreaMonochromeChart.yaxis)("stroke", ctx.PolarAreaMonochromeChart.stroke)("legend", ctx.PolarAreaMonochromeChart.legend)("plotOptions", ctx.PolarAreaMonochromeChart.plotOptions);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PolarareachartsComponent, { className: "PolarareachartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\polarareacharts\\polarareacharts.component.ts", lineNumber: 14 });
})();
export {
  PolarareachartsComponent
};
//# sourceMappingURL=polarareacharts.component-KTROMY4X.js.map
