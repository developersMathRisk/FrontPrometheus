import {
  BasicPieChartData,
  CircleImageChartData,
  CustomAngleChartData,
  GradientCircleChartData,
  SemiCircularGaugeData,
  StrokedCircularGaugeData,
  multipleradialBarChart
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

// src/app/components/charts/apexcharts/radialbarcharts/radialbarcharts.component.ts
var RadialbarchartsComponent = class _RadialbarchartsComponent {
  constructor() {
    this.BasicPieChartData = BasicPieChartData;
    this.multipleradialBarChart = multipleradialBarChart;
    this.CustomAngleChartData = CustomAngleChartData;
    this.GradientCircleChartData = GradientCircleChartData;
    this.CircleImageChartData = CircleImageChartData;
    this.StrokedCircularGaugeData = StrokedCircularGaugeData;
    this.SemiCircularGaugeData = SemiCircularGaugeData;
  }
  static {
    this.\u0275fac = function RadialbarchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadialbarchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadialbarchartsComponent, selectors: [["app-radialbarcharts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 42, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Radialbar Charts", "activeTitle", "Apex Radialbar Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "radialbar-basic"], [3, "series", "chart", "plotOptions", "labels", "colors"], ["id", "radialbar-multiple"], ["id", "circle-custom"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive"], ["id", "gradient-circle"], [3, "series", "chart", "plotOptions", "labels", "stroke", "fill"], ["id", "circular-stroked"], [3, "series", "chart", "plotOptions", "labels", "colors", "fill", "stroke"], ["id", "circle-image"], ["id", "circular-semi"], [3, "series", "chart", "plotOptions", "labels", "colors", "fill"]], template: function RadialbarchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Pie Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
        \u0275\u0275element(13, "apx-chart", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 2)(15, "div", 3);
        \u0275\u0275element(16, "div", 4)(17, "div", 5)(18, "div", 6)(19, "div", 7);
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9);
        \u0275\u0275text(22, "Multiple Radialbar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "div", 13);
        \u0275\u0275element(25, "apx-chart", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 2)(27, "div", 3);
        \u0275\u0275element(28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "div", 7);
        \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
        \u0275\u0275text(34, "Circle Chart - Custom Angle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 10)(36, "div", 14);
        \u0275\u0275element(37, "apx-chart", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "div", 3);
        \u0275\u0275element(40, "div", 4)(41, "div", 5)(42, "div", 6)(43, "div", 7);
        \u0275\u0275elementStart(44, "div", 8)(45, "div", 9);
        \u0275\u0275text(46, "Gradient Circle Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 10)(48, "div", 16);
        \u0275\u0275element(49, "apx-chart", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 2)(51, "div", 3);
        \u0275\u0275element(52, "div", 4)(53, "div", 5)(54, "div", 6)(55, "div", 7);
        \u0275\u0275elementStart(56, "div", 8)(57, "div", 9);
        \u0275\u0275text(58, "Stroked Circular Gauge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 10)(60, "div", 18);
        \u0275\u0275element(61, "apx-chart", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 2)(63, "div", 3);
        \u0275\u0275element(64, "div", 4)(65, "div", 5)(66, "div", 6)(67, "div", 7);
        \u0275\u0275elementStart(68, "div", 8)(69, "div", 9);
        \u0275\u0275text(70, "Circle Chart With Image");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 10)(72, "div", 20);
        \u0275\u0275element(73, "apx-chart", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 2)(75, "div", 3);
        \u0275\u0275element(76, "div", 4)(77, "div", 5)(78, "div", 6)(79, "div", 7);
        \u0275\u0275elementStart(80, "div", 8)(81, "div", 9);
        \u0275\u0275text(82, "Semi Circular Gauge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 10)(84, "div", 21);
        \u0275\u0275element(85, "apx-chart", 22);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.BasicPieChartData.series)("chart", ctx.BasicPieChartData.chart)("plotOptions", ctx.BasicPieChartData.plotOptions)("labels", ctx.BasicPieChartData.labels)("colors", ctx.BasicPieChartData.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.multipleradialBarChart.series)("chart", ctx.multipleradialBarChart.chart)("plotOptions", ctx.multipleradialBarChart.plotOptions)("labels", ctx.multipleradialBarChart.labels)("colors", ctx.multipleradialBarChart.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.CustomAngleChartData.series)("chart", ctx.CustomAngleChartData.chart)("plotOptions", ctx.CustomAngleChartData.plotOptions)("labels", ctx.CustomAngleChartData.labels)("legend", ctx.CustomAngleChartData.legend)("colors", ctx.CustomAngleChartData.colors)("responsive", ctx.CustomAngleChartData.responsive);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.GradientCircleChartData.series)("chart", ctx.GradientCircleChartData.chart)("plotOptions", ctx.GradientCircleChartData.plotOptions)("labels", ctx.GradientCircleChartData.labels)("stroke", ctx.GradientCircleChartData.stroke)("fill", ctx.GradientCircleChartData.fill);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.StrokedCircularGaugeData.series)("chart", ctx.StrokedCircularGaugeData.chart)("plotOptions", ctx.StrokedCircularGaugeData.plotOptions)("labels", ctx.StrokedCircularGaugeData.labels)("colors", ctx.StrokedCircularGaugeData.colors)("fill", ctx.StrokedCircularGaugeData.fill)("stroke", ctx.StrokedCircularGaugeData.stroke);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.CircleImageChartData.series)("chart", ctx.CircleImageChartData.chart)("plotOptions", ctx.CircleImageChartData.plotOptions)("labels", ctx.CircleImageChartData.labels)("stroke", ctx.CircleImageChartData.stroke)("fill", ctx.CircleImageChartData.fill);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.SemiCircularGaugeData.series)("chart", ctx.SemiCircularGaugeData.chart)("plotOptions", ctx.SemiCircularGaugeData.plotOptions)("labels", ctx.SemiCircularGaugeData.labels)("colors", ctx.SemiCircularGaugeData.colors)("fill", ctx.SemiCircularGaugeData.fill);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadialbarchartsComponent, { className: "RadialbarchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\radialbarcharts\\radialbarcharts.component.ts", lineNumber: 14 });
})();
export {
  RadialbarchartsComponent
};
//# sourceMappingURL=radialbarcharts.component-XWSFG3XU.js.map
