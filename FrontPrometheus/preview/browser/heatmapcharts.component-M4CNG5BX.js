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

// src/app/components/charts/apexcharts/heatmapcharts/heatmapcharts.component.ts
var _c0 = ["chart"];
var HeatmapchartsComponent = class _HeatmapchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#4454c3"],
      title: {
        text: "HeatMap Chart (Single color)"
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "W1",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W2",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W3",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W4",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W5",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W6",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W7",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W8",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W9",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W10",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W11",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W12",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W13",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W14",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W15",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#4454c3", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", "#A9D794", "#46AF78", "#A93F55", "#8C5E58", "#2176FF", "#33A1FD", "#7A918D", "#BAFF29"],
      xaxis: {
        type: "category",
        categories: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "01:00",
          "01:30"
        ]
      },
      title: {
        text: "HeatMap Chart (Different color shades for each series)"
      },
      grid: {
        padding: {
          right: 20
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Jan",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Feb",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Mar",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Apr",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "May",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Jun",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Jul",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Aug",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: "Sep",
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                name: "low",
                color: "#4454c3"
              },
              {
                from: 6,
                to: 20,
                name: "medium",
                color: "#f72d66"
              },
              {
                from: 21,
                to: 45,
                name: "high",
                color: "#ecb403"
              },
              {
                from: 46,
                to: 55,
                name: "extreme",
                color: "#ff5b51"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "HeatMap Chart with Color Range"
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: "#4454c3"
              },
              {
                from: 51,
                to: 100,
                color: "#f72d66"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"]
        }
      },
      xaxis: {
        type: "category"
      },
      title: {
        text: "Rounded (Range without Shades)"
      }
    };
  }
  generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x,
        y
      });
      i++;
    }
    return series;
  }
  static {
    this.\u0275fac = function HeatmapchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeatmapchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeatmapchartsComponent, selectors: [["app-heatmapcharts"]], viewQuery: function HeatmapchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 26, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex HeatMap Charts", "activeTitle", "Apex HeatMap Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "heatmap-basic"], ["id", "chart"], [3, "series", "chart", "dataLabels", "title", "colors"], ["id", "heatmap-multiseries"], [3, "series", "chart", "dataLabels", "colors", "grid", "xaxis", "title"], ["id", "heatmap-colorrange"], [3, "series", "chart", "colors", "dataLabels", "plotOptions", "title"], ["id", "heatmap-range"], [3, "series", "chart", "dataLabels", "colors", "stroke", "plotOptions", "xaxis", "title"]], template: function HeatmapchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Heatmap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Multi Series Heatmap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Color Range Heatmap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275element(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7);
        \u0275\u0275elementStart(47, "div", 8)(48, "div", 9);
        \u0275\u0275text(49, "Heatmap Range Without Shades");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 18)(52, "div", 12);
        \u0275\u0275element(53, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("title", ctx.chartOptions.title)("colors", ctx.chartOptions.colors);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("dataLabels", ctx.chartOptions1.dataLabels)("colors", ctx.chartOptions1.colors)("grid", ctx.chartOptions1.grid)("xaxis", ctx.chartOptions1.xaxis)("title", ctx.chartOptions1.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions)("title", ctx.chartOptions2.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("dataLabels", ctx.chartOptions3.dataLabels)("colors", ctx.chartOptions3.colors)("stroke", ctx.chartOptions3.stroke)("plotOptions", ctx.chartOptions3.plotOptions)("xaxis", ctx.chartOptions3.xaxis)("title", ctx.chartOptions3.title);
      }
    }, dependencies: [NgApexchartsModule, ChartComponent, SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeatmapchartsComponent, { className: "HeatmapchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\heatmapcharts\\heatmapcharts.component.ts", lineNumber: 35 });
})();
export {
  HeatmapchartsComponent
};
//# sourceMappingURL=heatmapcharts.component-M4CNG5BX.js.map
