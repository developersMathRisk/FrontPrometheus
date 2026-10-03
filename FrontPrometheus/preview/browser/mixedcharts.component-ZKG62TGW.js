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

// src/app/components/charts/apexcharts/mixedcharts/mixedcharts.component.ts
var _c0 = ["chart"];
var MixedchartsComponent = class _MixedchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      colors: ["#4454c3", "#f72d66"],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Income",
          type: "column",
          data: [14, 20, 25, 15, 25, 28, 38, 46]
        },
        {
          name: "Cashflow",
          type: "column",
          data: [11, 30, 31, 40, 41, 49, 65, 85]
        },
        {
          name: "Revenue",
          type: "line",
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "XYZ - Stock Analysis (2009 - 2016)",
        align: "left",
        offsetX: 110,
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#4454c3"
          },
          labels: {
            style: {
              colors: "#4454c3"
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#4454c3"
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#f72d66"
          },
          labels: {
            style: {
              colors: "#f72d66"
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#f72d66"
            }
          }
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#ecb403"
          },
          labels: {
            style: {
              colors: "#ecb403"
            }
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#ecb403"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "TEAM A",
          type: "area",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
          name: "TEAM B",
          type: "line",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        curve: "smooth"
      },
      fill: {
        type: "solid",
        opacity: [0.35, 1]
      },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09 ",
        "Dec 10",
        "Dec 11"
      ],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: "Series A"
          }
        },
        {
          opposite: true,
          title: {
            text: "Series B"
          }
        }
      ],
      xaxis: {
        labels: {
          trim: false
        }
      },
      colors: ["#4454c3", "#f72d66"],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        zoom: {
          enabled: false
        }
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      grid: {
        borderColor: "#f2f5f7"
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
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
        title: {
          text: "Points",
          style: {
            color: "#8c9097"
          }
        },
        min: 0,
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
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }
  static {
    this.\u0275fac = function MixedchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MixedchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MixedchartsComponent, selectors: [["app-mixedcharts"]], viewQuery: function MixedchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 43, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Mixed Charts", "activeTitle", "Apex Mixed Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "mixed-linecolumn"], ["id", "chart"], [3, "series", "chart", "colors", "yaxis", "xaxis", "labels", "stroke", "title", "dataLabels", "fill", "tooltip"], ["id", "mixed-multiple-y"], [3, "series", "chart", "xaxis", "markers", "stroke", "colors", "dataLabels", "title", "fill", "tooltip", "legend"], ["id", "mixed-linearea"], [3, "series", "chart", "colors", "yaxis", "xaxis", "labels", "stroke", "markers", "fill", "tooltip"], ["id", "mixed-all"], [3, "series", "chart", "colors", "yaxis", "xaxis", "labels", "stroke", "plotOptions", "markers", "fill", "tooltip"]], template: function MixedchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Line & Column Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Multiple Y-Axis Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Line & Area Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275element(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7);
        \u0275\u0275elementStart(47, "div", 8)(48, "div", 9);
        \u0275\u0275text(49, "Line,Column & Area Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 18)(52, "div", 12);
        \u0275\u0275element(53, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("labels", ctx.chartOptions.labels)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title)("dataLabels", ctx.chartOptions.dataLabels)("fill", ctx.chartOptions.fill)("tooltip", ctx.chartOptions.tooltip);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("xaxis", ctx.chartOptions1.xaxis)("markers", ctx.chartOptions1.markers)("stroke", ctx.chartOptions1.stroke)("colors", ctx.chartOptions1.colors)("dataLabels", ctx.chartOptions1.dataLabels)("title", ctx.chartOptions1.title)("fill", ctx.chartOptions1.fill)("tooltip", ctx.chartOptions1.tooltip)("legend", ctx.chartOptions1.legend);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("colors", ctx.chartOptions2.colors)("yaxis", ctx.chartOptions2.yaxis)("xaxis", ctx.chartOptions2.xaxis)("labels", ctx.chartOptions2.labels)("stroke", ctx.chartOptions2.stroke)("markers", ctx.chartOptions2.markers)("fill", ctx.chartOptions2.fill)("tooltip", ctx.chartOptions2.tooltip);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("colors", ctx.chartOptions3.colors)("yaxis", ctx.chartOptions3.yaxis)("xaxis", ctx.chartOptions3.xaxis)("labels", ctx.chartOptions3.labels)("stroke", ctx.chartOptions3.stroke)("plotOptions", ctx.chartOptions3.plotOptions)("markers", ctx.chartOptions3.markers)("fill", ctx.chartOptions3.fill)("tooltip", ctx.chartOptions3.tooltip);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MixedchartsComponent, { className: "MixedchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\mixedcharts\\mixedcharts.component.ts", lineNumber: 39 });
})();
export {
  MixedchartsComponent
};
//# sourceMappingURL=mixedcharts.component-ZKG62TGW.js.map
