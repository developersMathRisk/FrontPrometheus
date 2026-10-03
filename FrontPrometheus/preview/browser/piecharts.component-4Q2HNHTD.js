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

// src/app/components/charts/apexcharts/piecharts/piecharts.component.ts
var _c0 = ["chart"];
var PiechartsComponent = class _PiechartsComponent {
  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 300,
        type: "pie"
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"],
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      legend: {
        position: "bottom"
      },
      dataLabels: {
        dropShadow: {
          enabled: false
        }
      }
    };
    this.chartOptions1 = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
        height: 290
      },
      legend: {
        position: "bottom"
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"],
      dataLabels: {
        dropShadow: {
          enabled: false
        }
      }
    };
    this.chartOptions2 = {
      series: [44, 55, 13, 33],
      chart: {
        height: 310,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"],
      legend: {
        position: "bottom"
      }
    };
    this.chartOptions3 = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        height: 280,
        type: "pie"
      },
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      theme: {
        monochrome: {
          enabled: true,
          color: "#4454c3"
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5
          }
        }
      },
      title: {
        text: "Monochrome Pie",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
        dropShadow: {
          enabled: false
        }
      },
      legend: {
        show: false
      }
    };
    this.chartOptions4 = {
      series: [44, 55, 41, 17, 15],
      chart: {
        height: 288,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      // legend: {
      //   formatter: function (val:any, opts:any) {
      //     return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      //   },
      // },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"],
      title: {
        text: "Gradient Donut with custom Start-angle",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      legend: {
        position: "bottom"
      }
    };
    this.chartOptions5 = {
      series: [44, 55, 41, 17, 15],
      chart: {
        height: 250,
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"],
      labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#111"]
        },
        background: {
          enabled: true,
          foreColor: "#fff",
          borderWidth: 0
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: "none"
        }
      },
      theme: {
        palette: "palette2"
      },
      title: {
        text: "Favourite Movie Type",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.chartOptions6 = {
      series: [44, 33, 54, 45],
      chart: {
        height: 300,
        type: "pie"
      },
      colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],
      fill: {
        type: "image",
        opacity: 0.85,
        image: {
          src: [
            "./assets/images/media/media-8.jpg",
            "./assets/images/media/media-8.jpg",
            "./assets/images/media/media-8.jpg",
            "./assets/images/media/media-8.jpg"
          ],
          width: 25,
          imagedHeight: 25
        }
      },
      stroke: {
        width: 4
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#111"]
        },
        background: {
          enabled: true,
          foreColor: "#fff",
          borderWidth: 0
        }
      },
      legend: {
        position: "bottom"
      }
    };
  }
  static {
    this.\u0275fac = function PiechartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PiechartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PiechartsComponent, selectors: [["app-piecharts"]], viewQuery: function PiechartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 54, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Pie Charts", "activeTitle", "Apex Pie Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "pie-basic", 1, "apex-chart-width"], [3, "series", "dataLabels", "legend", "colors", "chart", "labels"], ["id", "donut-simple", 1, "apex-chart-width"], [3, "series", "chart", "colors", "legend", "dataLabels", "labels", "responsive"], ["id", "donut-update", 1, "apex-chart-width"], [3, "series", "chart", "labels", "legend", "colors", "dataLabels"], ["id", "pie-monochrome", 1, "apex-chart-width"], [3, "series", "chart", "labels", "colors", "title", "theme", "legend", "responsive"], ["id", "donut-gradient", 1, "apex-chart-width"], [3, "series", "chart", "labels", "legend", "colors", "fill", "dataLabels", "responsive"], ["id", "donut-pattern", 1, "apex-chart-width"], [3, "series", "chart", "labels", "dataLabels", "title", "colors", "fill", "states", "plotOptions", "stroke", "theme", "responsive"], ["id", "pie-image", 1, "apex-chart-width"], [3, "series", "chart", "labels", "responsive", "fill", "legend", "dataLabels"]], template: function PiechartsComponent_Template(rf, ctx) {
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
        \u0275\u0275text(22, "Simple Donut Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "div", 13);
        \u0275\u0275element(25, "apx-chart", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 2)(27, "div", 3);
        \u0275\u0275element(28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "div", 7);
        \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
        \u0275\u0275text(34, "Updating Donut Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 10)(36, "div", 15);
        \u0275\u0275element(37, "apx-chart", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "div", 3);
        \u0275\u0275element(40, "div", 4)(41, "div", 5)(42, "div", 6)(43, "div", 7);
        \u0275\u0275elementStart(44, "div", 8)(45, "div", 9);
        \u0275\u0275text(46, "Monochrome Pie Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 10)(48, "div", 17);
        \u0275\u0275element(49, "apx-chart", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 2)(51, "div", 3);
        \u0275\u0275element(52, "div", 4)(53, "div", 5)(54, "div", 6)(55, "div", 7);
        \u0275\u0275elementStart(56, "div", 8)(57, "div", 9);
        \u0275\u0275text(58, "Gradient Donut Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 10)(60, "div", 19);
        \u0275\u0275element(61, "apx-chart", 20);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 2)(63, "div", 3);
        \u0275\u0275element(64, "div", 4)(65, "div", 5)(66, "div", 6)(67, "div", 7);
        \u0275\u0275elementStart(68, "div", 8)(69, "div", 9);
        \u0275\u0275text(70, "Donut Chart With Patterns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 10)(72, "div", 21);
        \u0275\u0275element(73, "apx-chart", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 2)(75, "div", 3);
        \u0275\u0275element(76, "div", 4)(77, "div", 5)(78, "div", 6)(79, "div", 7);
        \u0275\u0275elementStart(80, "div", 8)(81, "div", 9);
        \u0275\u0275text(82, "Image Filled Pie Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 10)(84, "div", 23);
        \u0275\u0275element(85, "apx-chart", 24);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions.series)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("colors", ctx.chartOptions.colors)("chart", ctx.chartOptions.chart)("labels", ctx.chartOptions.labels);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("colors", ctx.chartOptions1.colors)("legend", ctx.chartOptions1.legend)("dataLabels", ctx.chartOptions1.dataLabels)("labels", ctx.chartOptions1.labels)("responsive", ctx.chartOptions1.responsive);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("labels", ctx.chartOptions2.labels)("legend", ctx.chartOptions2.legend)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("labels", ctx.chartOptions3.labels)("colors", ctx.chartOptions3.colors)("title", ctx.chartOptions3.title)("theme", ctx.chartOptions3.theme)("legend", ctx.chartOptions3.legend)("responsive", ctx.chartOptions3.responsive);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions4.series)("chart", ctx.chartOptions4.chart)("labels", ctx.chartOptions4.labels)("legend", ctx.chartOptions4.legend)("colors", ctx.chartOptions4.colors)("fill", ctx.chartOptions4.fill)("dataLabels", ctx.chartOptions4.dataLabels)("responsive", ctx.chartOptions4.responsive);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions5.series)("chart", ctx.chartOptions5.chart)("labels", ctx.chartOptions5.labels)("dataLabels", ctx.chartOptions5.dataLabels)("title", ctx.chartOptions5.title)("colors", ctx.chartOptions5.colors)("fill", ctx.chartOptions5.fill)("states", ctx.chartOptions5.states)("plotOptions", ctx.chartOptions5.plotOptions)("stroke", ctx.chartOptions5.stroke)("theme", ctx.chartOptions5.theme)("responsive", ctx.chartOptions5.responsive);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.chartOptions6.series)("chart", ctx.chartOptions6.chart)("labels", ctx.chartOptions6.labels)("responsive", ctx.chartOptions6.responsive)("fill", ctx.chartOptions6.fill)("legend", ctx.chartOptions6.legend)("dataLabels", ctx.chartOptions6.dataLabels);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PiechartsComponent, { className: "PiechartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\piecharts\\piecharts.component.ts", lineNumber: 37 });
})();
export {
  PiechartsComponent
};
//# sourceMappingURL=piecharts.component-4Q2HNHTD.js.map
