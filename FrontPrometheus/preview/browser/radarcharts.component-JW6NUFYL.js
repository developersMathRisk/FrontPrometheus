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
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/charts/apexcharts/radarcharts/radarcharts.component.ts
var _c0 = ["chart"];
var RadarchartsComponent = class _RadarchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      colors: ["#4454c3"],
      title: {
        text: "Basic Radar Chart"
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 0
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Series 1",
          data: [20, 100, 40, 30, 50, 80, 33]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: "#e9e9e9",
            fill: {
              // colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar with Polygon Fill"
      },
      colors: ["#f72d66"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#23b7e5"],
        strokeWidth: 2
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function(val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return "";
            }
          }
        }
      }
    };
  }
  static {
    this.\u0275fac = function RadarchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadarchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadarchartsComponent, selectors: [["app-radarcharts"]], viewQuery: function RadarchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 25, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Radar Charts", "activeTitle", "Apex Radar Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "radar-basic"], ["id", "chart"], [3, "series", "chart", "colors", "xaxis", "title"], ["id", "radar-multiple"], [3, "series", "chart", "xaxis", "stroke", "colors", "markers", "fill", "title"], ["id", "radar-polygon"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "tooltip", "plotOptions", "markers", "yaxis", "fill", "title"]], template: function RadarchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Radar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Radar Chart-Multiple Series");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Radar Chart polygon Fill");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("xaxis", ctx.chartOptions.xaxis)("title", ctx.chartOptions.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("xaxis", ctx.chartOptions1.xaxis)("stroke", ctx.chartOptions1.stroke)("colors", ctx.chartOptions1.colors)("markers", ctx.chartOptions1.markers)("fill", ctx.chartOptions1.fill)("title", ctx.chartOptions1.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("xaxis", ctx.chartOptions2.xaxis)("stroke", ctx.chartOptions2.stroke)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels)("tooltip", ctx.chartOptions2.tooltip)("plotOptions", ctx.chartOptions2.plotOptions)("markers", ctx.chartOptions2.markers)("yaxis", ctx.chartOptions2.yaxis)("fill", ctx.chartOptions2.fill)("title", ctx.chartOptions2.title);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadarchartsComponent, { className: "RadarchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\radarcharts\\radarcharts.component.ts", lineNumber: 42 });
})();
export {
  RadarchartsComponent
};
//# sourceMappingURL=radarcharts.component-JW6NUFYL.js.map
