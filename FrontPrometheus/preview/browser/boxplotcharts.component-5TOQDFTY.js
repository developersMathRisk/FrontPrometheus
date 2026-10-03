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

// src/app/components/charts/apexcharts/boxplotcharts/boxplotcharts.component.ts
var _c0 = ["chart"];
var BoxplotchartsComponent = class _BoxplotchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          type: "boxPlot",
          data: [
            {
              x: "Jan 2015",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Jan 2016",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Jan 2017",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Jan 2018",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Jan 2019",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Jan 2020",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Jan 2021",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      chart: {
        type: "boxPlot",
        height: 320
      },
      title: {
        text: "Basic BoxPlot Chart",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#4454c3",
            lower: "#f72d66"
          }
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label"
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label"
          }
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "box",
          type: "boxPlot",
          data: [
            {
              x: (/* @__PURE__ */ new Date("2017-01-01")).getTime(),
              y: [54, 66, 69, 75, 88]
            },
            {
              x: (/* @__PURE__ */ new Date("2018-01-01")).getTime(),
              y: [43, 65, 69, 76, 81]
            },
            {
              x: (/* @__PURE__ */ new Date("2019-01-01")).getTime(),
              y: [31, 39, 45, 51, 59]
            },
            {
              x: (/* @__PURE__ */ new Date("2020-01-01")).getTime(),
              y: [39, 46, 55, 65, 71]
            },
            {
              x: (/* @__PURE__ */ new Date("2021-01-01")).getTime(),
              y: [29, 31, 35, 39, 44]
            }
          ]
        },
        {
          name: "outliers",
          type: "scatter",
          data: [
            {
              x: (/* @__PURE__ */ new Date("2017-01-01")).getTime(),
              y: 32
            },
            {
              x: (/* @__PURE__ */ new Date("2018-01-01")).getTime(),
              y: 25
            },
            {
              x: (/* @__PURE__ */ new Date("2019-01-01")).getTime(),
              y: 64
            },
            {
              x: (/* @__PURE__ */ new Date("2020-01-01")).getTime(),
              y: 27
            },
            {
              x: (/* @__PURE__ */ new Date("2020-01-01")).getTime(),
              y: 78
            },
            {
              x: (/* @__PURE__ */ new Date("2021-01-01")).getTime(),
              y: 15
            }
          ]
        }
      ],
      chart: {
        type: "boxPlot",
        height: 320
      },
      colors: ["#4454c3", "#f72d66"],
      grid: {
        borderColor: "#f2f5f7"
      },
      title: {
        text: "BoxPlot - Scatter Chart",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#4454c3",
            lower: "#f72d66"
          }
        }
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          formatter: function(val) {
            return new Date(val).getFullYear();
          }
        },
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label"
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label"
          }
        }
      },
      tooltip: {
        shared: false,
        intersect: true
      }
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: "Category A",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Category B",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Category C",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Category D",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Category E",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Category F",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Category G",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "boxPlot"
      },
      title: {
        text: "Horizontal BoxPlot Chart",
        align: "left"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%"
        },
        boxPlot: {
          colors: {
            upper: "#e9ecef",
            lower: "#f8f9fa"
          }
        }
      },
      stroke: {
        colors: ["#6c757d"]
      }
    };
  }
  generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([baseval, y]);
      baseval += 864e5;
      i++;
    }
    return series;
  }
  static {
    this.\u0275fac = function BoxplotchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoxplotchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoxplotchartsComponent, selectors: [["app-boxplotcharts"]], viewQuery: function BoxplotchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 17, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Boxplot Charts", "activeTitle", "Apex Boxplot Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "boxplot-basic"], ["id", "chart"], [3, "series", "chart", "plotOptions", "title", "colors"], ["id", "boxplot-scatter"], [3, "series", "chart", "colors", "xaxis", "title", "plotOptions", "tooltip"], ["id", "boxplot-horizontal"], [3, "series", "chart", "plotOptions", "title", "stroke"]], template: function BoxplotchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Boxplot Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Boxplot With Scatter Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Horizontal Boxplot Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("title", ctx.chartOptions.title)("colors", ctx.chartOptions.colors);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("colors", ctx.chartOptions1.colors)("xaxis", ctx.chartOptions1.xaxis)("title", ctx.chartOptions1.title)("plotOptions", ctx.chartOptions1.plotOptions)("tooltip", ctx.chartOptions1.tooltip);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("plotOptions", ctx.chartOptions2.plotOptions)("title", ctx.chartOptions2.title)("stroke", ctx.chartOptions2.stroke);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoxplotchartsComponent, { className: "BoxplotchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\boxplotcharts\\boxplotcharts.component.ts", lineNumber: 34 });
})();
export {
  BoxplotchartsComponent
};
//# sourceMappingURL=boxplotcharts.component-5TOQDFTY.js.map
