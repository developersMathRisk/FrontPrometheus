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

// src/app/components/charts/apexcharts/rangeareacharts/rangeareacharts.component.ts
var _c0 = ["chart"];
var RangeareachartsComponent = class _RangeareachartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "New York Temperature",
          data: [
            {
              x: "Jan",
              y: [-2, 4]
            },
            {
              x: "Feb",
              y: [-1, 6]
            },
            {
              x: "Mar",
              y: [3, 10]
            },
            {
              x: "Apr",
              y: [8, 16]
            },
            {
              x: "May",
              y: [13, 22]
            },
            {
              x: "Jun",
              y: [18, 26]
            },
            {
              x: "Jul",
              y: [21, 29]
            },
            {
              x: "Aug",
              y: [21, 28]
            },
            {
              x: "Sep",
              y: [17, 24]
            },
            {
              x: "Oct",
              y: [11, 18]
            },
            {
              x: "Nov",
              y: [6, 12]
            },
            {
              x: "Dec",
              y: [1, 7]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea"
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "New York Temperature (all year round)"
      },
      colors: ["#4454c3", "#f72d66"],
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val + "\xB0C";
          }
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          type: "rangeArea",
          name: "Team B Range",
          data: [
            {
              x: "Jan",
              y: [1100, 1900]
            },
            {
              x: "Feb",
              y: [1200, 1800]
            },
            {
              x: "Mar",
              y: [900, 2900]
            },
            {
              x: "Apr",
              y: [1400, 2700]
            },
            {
              x: "May",
              y: [2600, 3900]
            },
            {
              x: "Jun",
              y: [500, 1700]
            },
            {
              x: "Jul",
              y: [1900, 2300]
            },
            {
              x: "Aug",
              y: [1e3, 1500]
            }
          ]
        },
        {
          type: "rangeArea",
          name: "Team A Range",
          data: [
            {
              x: "Jan",
              y: [3100, 3400]
            },
            {
              x: "Feb",
              y: [4200, 5200]
            },
            {
              x: "Mar",
              y: [3900, 4900]
            },
            {
              x: "Apr",
              y: [3400, 3900]
            },
            {
              x: "May",
              y: [5100, 5900]
            },
            {
              x: "Jun",
              y: [5400, 6700]
            },
            {
              x: "Jul",
              y: [4300, 4600]
            },
            {
              x: "Aug",
              y: [2100, 2900]
            }
          ]
        },
        {
          type: "line",
          name: "Team B Median",
          data: [
            {
              x: "Jan",
              y: 1500
            },
            {
              x: "Feb",
              y: 1700
            },
            {
              x: "Mar",
              y: 1900
            },
            {
              x: "Apr",
              y: 2200
            },
            {
              x: "May",
              y: 3e3
            },
            {
              x: "Jun",
              y: 1e3
            },
            {
              x: "Jul",
              y: 2100
            },
            {
              x: "Aug",
              y: 1200
            },
            {
              x: "Sep",
              y: 1800
            },
            {
              x: "Oct",
              y: 2e3
            }
          ]
        },
        {
          type: "line",
          name: "Team A Median",
          data: [
            {
              x: "Jan",
              y: 3300
            },
            {
              x: "Feb",
              y: 4900
            },
            {
              x: "Mar",
              y: 4300
            },
            {
              x: "Apr",
              y: 3700
            },
            {
              x: "May",
              y: 5500
            },
            {
              x: "Jun",
              y: 5900
            },
            {
              x: "Jul",
              y: 4500
            },
            {
              x: "Aug",
              y: 2400
            },
            {
              x: "Sep",
              y: 2100
            },
            {
              x: "Oct",
              y: 1500
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ["#4454c3", "#f72d66"],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Team B", "Team A"],
        inverseOrder: true
      },
      title: {
        text: "Range Area with Forecast Line (Combo)"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
  }
  static {
    this.\u0275fac = function RangeareachartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RangeareachartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RangeareachartsComponent, selectors: [["app-rangeareacharts"]], viewQuery: function RangeareachartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 21, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex RangeArea Charts", "activeTitle", "Apex RangeArea Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "rangearea-basic"], ["id", "chart"], [3, "series", "chart", "colors", "dataLabels", "markers", "xaxis", "yaxis", "stroke", "title"], ["id", "rangearea-combo"], [3, "series", "chart", "dataLabels", "markers", "xaxis", "yaxis", "stroke", "title", "colors", "fill", "forecastDataPoints", "legend"]], template: function RangeareachartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, " Basic Range Area Chart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, " Combo Range Area Chart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("dataLabels", ctx.chartOptions.dataLabels)("markers", ctx.chartOptions.markers)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("dataLabels", ctx.chartOptions1.dataLabels)("markers", ctx.chartOptions1.markers)("xaxis", ctx.chartOptions1.xaxis)("yaxis", ctx.chartOptions1.yaxis)("stroke", ctx.chartOptions1.stroke)("title", ctx.chartOptions1.title)("colors", ctx.chartOptions1.colors)("fill", ctx.chartOptions1.fill)("forecastDataPoints", ctx.chartOptions1.forecastDataPoints)("legend", ctx.chartOptions1.legend);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RangeareachartsComponent, { className: "RangeareachartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\rangeareacharts\\rangeareacharts.component.ts", lineNumber: 43 });
})();
export {
  RangeareachartsComponent
};
//# sourceMappingURL=rangeareacharts.component-OWCY6PIZ.js.map
