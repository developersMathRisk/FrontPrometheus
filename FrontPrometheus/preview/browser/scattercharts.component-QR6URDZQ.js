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

// src/app/components/charts/apexcharts/scattercharts/scattercharts.component.ts
var _c0 = ["chart"];
var ScatterchartsComponent = class _ScatterchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "SAMPLE A",
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            [29.9, 1.5],
            [27.1, 0.8],
            [22.1, 2]
          ]
        },
        {
          name: "SAMPLE B",
          data: [
            [36.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [0.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12]
          ]
        },
        {
          name: "SAMPLE C",
          data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, 0.3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
            [20.9, 4],
            [22.4, 0],
            [32.6, 10.3],
            [29.7, 20.8],
            [24.5, 0.8],
            [21.4, 0],
            [21.7, 6.9],
            [28.6, 7.7],
            [15.4, 0],
            [18.1, 0],
            [33.4, 0],
            [16.4, 0]
          ]
        }
      ],
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy"
        }
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        tickAmount: 7
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "TEAM 1",
          data: this.generateDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "TEAM 2",
          data: this.generateDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "TEAM 3",
          data: this.generateDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 30, {
            min: 10,
            max: 60
          })
        },
        {
          name: "TEAM 4",
          data: this.generateDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 10, {
            min: 10,
            max: 60
          })
        },
        {
          name: "TEAM 5",
          data: this.generateDayWiseTimeSeries((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 30, {
            min: 10,
            max: 60
          })
        }
      ],
      colors: ["#4454c3", "#f72d66", "#ecb403", "#e74c3c", "#3498db"],
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          type: "xy"
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        max: 70
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Image2",
          data: [
            [16.4, 5.4],
            [21.7, 4],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7],
            [10.9, 8.2],
            [16.4, 4],
            [13.6, 4.3],
            [13.6, 12],
            [29.9, 3],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 8],
            [24.5, 7.1],
            [10.9, 7],
            [8.1, 4.7],
            [19, 10],
            [27.1, 10],
            [24.5, 8],
            [27.1, 3],
            [29.9, 11.5],
            [27.1, 0.8],
            [22.1, 2]
          ]
        },
        {
          name: "Image2",
          data: [
            [6.4, 5.4],
            [11.7, 4],
            [15.4, 3],
            [9, 2],
            [10.9, 11],
            [20.9, 7],
            [12.9, 8.2],
            [6.4, 14],
            [11.6, 12]
          ]
        }
      ],
      colors: ["#056BF6", "#D2376A"],
      chart: {
        height: 350,
        type: "scatter",
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      xaxis: {
        tickAmount: 10,
        min: 0,
        max: 40,
        labels: {
          rotate: 0,
          trim: false
        }
      },
      yaxis: {
        tickAmount: 7
      },
      markers: {
        size: 20
      },
      fill: {
        type: "image",
        opacity: 1,
        image: {
          src: ["./assets/images/faces/2.jpg", "./assets/images/faces/5.jpg"],
          width: 40,
          height: 40
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML: [
            function() {
              return '<span><i class="fab fa-facebook"></i></span>';
            },
            function() {
              return '<span><i class="fab fa-instagram"></i></span>';
            }
          ]
        }
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
    this.\u0275fac = function ScatterchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScatterchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScatterchartsComponent, selectors: [["app-scattercharts"]], viewQuery: function ScatterchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 21, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Scatter Charts", "activeTitle", "Apex Scatter Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "scatter-basic"], ["id", "chart"], [3, "series", "chart", "colors", "xaxis", "yaxis"], ["id", "scatter-datetime"], [3, "series", "chart", "colors", "xaxis", "yaxis", "dataLabels", "grid"], ["id", "scatter-image"], [3, "series", "chart", "colors", "xaxis", "yaxis", "grid", "markers", "fill"]], template: function ScatterchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Scatter Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Datetime Scatter Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Image Fill Scatter Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("colors", ctx.chartOptions1.colors)("xaxis", ctx.chartOptions1.xaxis)("yaxis", ctx.chartOptions1.yaxis)("dataLabels", ctx.chartOptions1.dataLabels)("grid", ctx.chartOptions1.grid);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("colors", ctx.chartOptions2.colors)("xaxis", ctx.chartOptions2.xaxis)("yaxis", ctx.chartOptions2.yaxis)("colors", ctx.chartOptions2.colors)("grid", ctx.chartOptions2.grid)("markers", ctx.chartOptions2.markers)("fill", ctx.chartOptions2.fill);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScatterchartsComponent, { className: "ScatterchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\scattercharts\\scattercharts.component.ts", lineNumber: 31 });
})();
export {
  ScatterchartsComponent
};
//# sourceMappingURL=scattercharts.component-QR6URDZQ.js.map
