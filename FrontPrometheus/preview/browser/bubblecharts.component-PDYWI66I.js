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

// src/app/components/charts/apexcharts/bubblecharts/bubblecharts.component.ts
var _c0 = ["chart"];
var BubblechartsComponent = class _BubblechartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Bubble1",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble2",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble3",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble4",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 320,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      title: {
        text: "Simple Bubble Chart",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      xaxis: {
        tickAmount: 12,
        type: "category",
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
        max: 70,
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
          name: "Product1",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product2",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product3",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product4",
          data: this.generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 320,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      title: {
        text: "3D Bubble Chart",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label"
          }
        }
      },
      yaxis: {
        max: 70,
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
      theme: {
        palette: "palette2"
      }
    };
  }
  generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 864e5;
      i++;
    }
    return series;
  }
  static {
    this.\u0275fac = function BubblechartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BubblechartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BubblechartsComponent, selectors: [["app-bubblecharts"]], viewQuery: function BubblechartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 18, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Bubble Charts", "activeTitle", "Apex Bubble Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "bubble-simple"], ["id", "chart"], [3, "series", "chart", "colors", "xaxis", "fill", "dataLabels", "title", "yaxis"], ["id", "bubble-3d"], [3, "series", "chart", "colors", "xaxis", "fill", "dataLabels", "title", "yaxis", "tooltip", "theme"]], template: function BubblechartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Simple Bubble Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "3D Bubble Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("xaxis", ctx.chartOptions.xaxis)("fill", ctx.chartOptions.fill)("dataLabels", ctx.chartOptions.dataLabels)("title", ctx.chartOptions.title)("yaxis", ctx.chartOptions.yaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("colors", ctx.chartOptions1.colors)("xaxis", ctx.chartOptions1.xaxis)("fill", ctx.chartOptions1.fill)("dataLabels", ctx.chartOptions1.dataLabels)("title", ctx.chartOptions1.title)("yaxis", ctx.chartOptions1.yaxis)("tooltip", ctx.chartOptions1.tooltip)("theme", ctx.chartOptions1.theme);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BubblechartsComponent, { className: "BubblechartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\bubblecharts\\bubblecharts.component.ts", lineNumber: 38 });
})();
export {
  BubblechartsComponent
};
//# sourceMappingURL=bubblecharts.component-PDYWI66I.js.map
