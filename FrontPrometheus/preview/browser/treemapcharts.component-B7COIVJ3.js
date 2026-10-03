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

// src/app/components/charts/apexcharts/treemapcharts/treemapcharts.component.ts
var _c0 = ["chart"];
var TreemapchartsComponent = class _TreemapchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218
            },
            {
              x: "Kolkata",
              y: 149
            },
            {
              x: "Mumbai",
              y: 184
            },
            {
              x: "Ahmedabad",
              y: 55
            },
            {
              x: "Bangaluru",
              y: 84
            },
            {
              x: "Pune",
              y: 31
            },
            {
              x: "Chennai",
              y: 70
            },
            {
              x: "Jaipur",
              y: 30
            },
            {
              x: "Surat",
              y: 44
            },
            {
              x: "Hyderabad",
              y: 68
            },
            {
              x: "Lucknow",
              y: 28
            },
            {
              x: "Indore",
              y: 19
            },
            {
              x: "Kanpur",
              y: 29
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "treemap"
      },
      colors: ["#4454c3"],
      title: {
        text: "Basic Treemap"
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Desktops",
          data: [
            {
              x: "ABC",
              y: 10
            },
            {
              x: "DEF",
              y: 60
            },
            {
              x: "XYZ",
              y: 41
            }
          ]
        },
        {
          name: "Mobile",
          data: [
            {
              x: "ABCD",
              y: 10
            },
            {
              x: "DEFG",
              y: 20
            },
            {
              x: "WXYZ",
              y: 51
            },
            {
              x: "PQR",
              y: 30
            },
            {
              x: "MNO",
              y: 20
            },
            {
              x: "CDE",
              y: 30
            }
          ]
        }
      ],
      colors: ["#4454c3", "#f72d66"],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Multi-dimensional Treemap",
        align: "center"
      }
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218
            },
            {
              x: "Kolkata",
              y: 149
            },
            {
              x: "Mumbai",
              y: 184
            },
            {
              x: "Ahmedabad",
              y: 55
            },
            {
              x: "Bangaluru",
              y: 84
            },
            {
              x: "Pune",
              y: 31
            },
            {
              x: "Chennai",
              y: 70
            },
            {
              x: "Jaipur",
              y: 30
            },
            {
              x: "Surat",
              y: 44
            },
            {
              x: "Hyderabad",
              y: 68
            },
            {
              x: "Lucknow",
              y: 28
            },
            {
              x: "Indore",
              y: 19
            },
            {
              x: "Kanpur",
              y: 29
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Distibuted Treemap (different color for each cell)",
        align: "center"
      },
      colors: [
        "#4454c3",
        "#fc6c85",
        "#f39c12",
        "#a66a5e",
        "#a65e9a",
        "#2ecc71",
        "#e74c3c",
        "#3498db",
        "#8f00ff",
        "#2dce89",
        "#EF6537",
        "#8c9097"
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    };
    this.chartOptions3 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Treemap with color scale"
      },
      dataLabels: {
        enabled: true,
        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#4454c3"
              },
              {
                from: 1e-3,
                to: 6,
                color: "#f72d66"
              }
            ]
          }
        }
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
    this.\u0275fac = function TreemapchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TreemapchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreemapchartsComponent, selectors: [["app-treemapcharts"]], viewQuery: function TreemapchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 27, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex TreeMap Charts", "activeTitle", "Apex TreeMap Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "treemap-basic"], ["id", "chart"], [3, "series", "chart", "colors", "dataLabels", "plotOptions", "title", "legend"], ["id", "treemap-multi"], [3, "series", "chart", "dataLabels", "plotOptions", "title", "legend", "colors"], ["id", "treemap-distributed"], [3, "series", "chart", "dataLabels", "plotOptions", "title", "colors"], ["id", "treemap-colorranges"], [3, "series", "chart", "dataLabels", "plotOptions", "title", "colors", "legend"]], template: function TreemapchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Treemap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Multi Dimensional Treemap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Distributed Treemap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275element(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7);
        \u0275\u0275elementStart(47, "div", 8)(48, "div", 9);
        \u0275\u0275text(49, "Treemap with color ranges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 18)(52, "div", 12);
        \u0275\u0275element(53, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("title", ctx.chartOptions.title)("legend", ctx.chartOptions.legend);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("dataLabels", ctx.chartOptions1.dataLabels)("plotOptions", ctx.chartOptions1.plotOptions)("title", ctx.chartOptions1.title)("legend", ctx.chartOptions1.legend)("colors", ctx.chartOptions1.colors);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions)("title", ctx.chartOptions2.title)("colors", ctx.chartOptions2.colors);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("dataLabels", ctx.chartOptions3.dataLabels)("plotOptions", ctx.chartOptions3.plotOptions)("title", ctx.chartOptions3.title)("colors", ctx.chartOptions3.colors)("legend", ctx.chartOptions3.legend);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreemapchartsComponent, { className: "TreemapchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\treemapcharts\\treemapcharts.component.ts", lineNumber: 32 });
})();
export {
  TreemapchartsComponent
};
//# sourceMappingURL=treemapcharts.component-B7COIVJ3.js.map
