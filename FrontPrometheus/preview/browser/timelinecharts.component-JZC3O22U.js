import {
  require_moment
} from "./chunk-P2PTZPGN.js";
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
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/charts/apexcharts/timelinecharts/timelinecharts.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["chart"];
var TimelinechartsComponent = class _TimelinechartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-02")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-04")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-04")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-08")).getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                (/* @__PURE__ */ new Date("2019-03-08")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-12")).getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                (/* @__PURE__ */ new Date("2019-03-12")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-18")).getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 320,
        type: "rangeBar"
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      colors: ["#4454c3"],
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
          data: [
            {
              x: "Analysis",
              y: [
                (/* @__PURE__ */ new Date("2019-02-27")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-04")).getTime()
              ],
              fillColor: "#4454c3"
            },
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-04")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-08")).getTime()
              ],
              fillColor: "#f72d66"
            },
            {
              x: "Coding",
              y: [
                (/* @__PURE__ */ new Date("2019-03-07")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-10")).getTime()
              ],
              fillColor: "#ecb403"
            },
            {
              x: "Testing",
              y: [
                (/* @__PURE__ */ new Date("2019-03-08")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-12")).getTime()
              ],
              fillColor: "#ff5b51"
            },
            {
              x: "Deployment",
              y: [
                (/* @__PURE__ */ new Date("2019-03-12")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-17")).getTime()
              ],
              fillColor: "#45aaf2"
            }
          ]
        }
      ],
      chart: {
        height: 320,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = (0, import_moment.default)(val[0]);
          var b = (0, import_moment.default)(val[1]);
          var diff = b.diff(a, "days");
          return label + ": " + diff + (diff > 1 ? " days" : " day");
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
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
        show: false
      },
      grid: {
        borderColor: "#f2f5f7"
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-05")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-08")).getTime()
              ]
            },
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-08")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-11")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-11")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-16")).getTime()
              ]
            }
          ]
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-02")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-05")).getTime()
              ]
            },
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-06")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-09")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-10")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-19")).getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 320,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          var a = (0, import_moment.default)(val[0]);
          var b = (0, import_moment.default)(val[1]);
          var diff = b.diff(a, "days");
          return diff + (diff > 1 ? " days" : " day");
        }
      },
      colors: ["#00ffbe", "#f72d66"],
      grid: {
        borderColor: "#f2f5f7"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: void 0,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
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
      legend: {
        position: "top"
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-05")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-08")).getTime()
              ]
            },
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-02")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-05")).getTime()
              ]
            },
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-05")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-07")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-03")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-09")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-08")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-11")).getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                (/* @__PURE__ */ new Date("2019-03-11")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-16")).getTime()
              ]
            },
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-01")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-03")).getTime()
              ]
            }
          ]
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-02")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-05")).getTime()
              ]
            },
            {
              x: "Test",
              y: [
                (/* @__PURE__ */ new Date("2019-03-06")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-16")).getTime()
              ],
              goals: [
                {
                  name: "Break",
                  value: (/* @__PURE__ */ new Date("2019-03-10")).getTime(),
                  strokeColor: "#CD2F2A"
                }
              ]
            },
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-03")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-07")).getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                (/* @__PURE__ */ new Date("2019-03-20")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-22")).getTime()
              ]
            },
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-10")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-16")).getTime()
              ]
            }
          ]
        },
        {
          name: "Dan",
          data: [
            {
              x: "Code",
              y: [
                (/* @__PURE__ */ new Date("2019-03-10")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-17")).getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                (/* @__PURE__ */ new Date("2019-03-05")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-09")).getTime()
              ],
              goals: [
                {
                  name: "Break",
                  value: (/* @__PURE__ */ new Date("2019-03-07")).getTime(),
                  strokeColor: "#CD2F2A"
                }
              ]
            }
          ]
        }
      ],
      chart: {
        height: 320,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      colors: ["#00ffbe", "#f72d66", "#ecb403"],
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
      grid: {
        borderColor: "#f2f5f7"
      },
      stroke: {
        width: 1
      },
      fill: {
        type: "solid",
        opacity: 0.6
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      }
    };
    this.chartOptions4 = {
      series: [
        // George Washington
        {
          name: "George Washington",
          data: [
            {
              x: "President",
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // John Adams
        {
          name: "John Adams",
          data: [
            {
              x: "President",
              y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
            },
            {
              x: "Vice President",
              y: [
                new Date(1789, 3, 21).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // Thomas Jefferson
        {
          name: "Thomas Jefferson",
          data: [
            {
              x: "President",
              y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()]
            },
            {
              x: "Vice President",
              y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
            },
            {
              x: "Secretary of State",
              y: [
                new Date(1790, 2, 22).getTime(),
                new Date(1793, 11, 31).getTime()
              ]
            }
          ]
        },
        // Aaron Burr
        {
          name: "Aaron Burr",
          data: [
            {
              x: "Vice President",
              y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()]
            }
          ]
        },
        // George Clinton
        {
          name: "George Clinton",
          data: [
            {
              x: "Vice President",
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1812, 3, 20).getTime()
              ]
            }
          ]
        },
        // John Jay
        {
          name: "John Jay",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1789, 8, 25).getTime(),
                new Date(1790, 2, 22).getTime()
              ]
            }
          ]
        },
        // Edmund Randolph
        {
          name: "Edmund Randolph",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1794, 0, 2).getTime(),
                new Date(1795, 7, 20).getTime()
              ]
            }
          ]
        },
        // Timothy Pickering
        {
          name: "Timothy Pickering",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1795, 7, 20).getTime(),
                new Date(1800, 4, 12).getTime()
              ]
            }
          ]
        },
        // Charles Lee
        {
          name: "Charles Lee",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1800, 5, 5).getTime()
              ]
            }
          ]
        },
        // John Marshall
        {
          name: "John Marshall",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1800, 5, 13).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            }
          ]
        },
        // Levi Lincoln
        {
          name: "Levi Lincoln",
          data: [
            {
              x: "Secretary of State",
              y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()]
            }
          ]
        },
        // James Madison
        {
          name: "James Madison",
          data: [
            {
              x: "Secretary of State",
              y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
          rangeBarGroupRows: true
        }
      },
      colors: [
        "#00ffbe",
        "#f72d66",
        "#ecb403",
        "#e74c3c",
        "#8f00ff",
        "#3F51B5",
        "#546E7A",
        "#D4526E",
        "#8D5B4C",
        "#F86624",
        "#D7263D",
        "#1B998B",
        "#2E294E",
        "#F46036",
        "#E2C044"
      ],
      grid: {
        borderColor: "#f2f5f7"
      },
      fill: {
        type: "solid"
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
      legend: {
        position: "right"
      }
    };
    this.chartOptions5 = {
      series: [
        {
          data: [
            {
              x: "Operations",
              y: [2800, 4500]
            },
            {
              x: "Customer Success",
              y: [3200, 4100]
            },
            {
              x: "Engineering",
              y: [2950, 7800]
            },
            {
              x: "Marketing",
              y: [3e3, 4600]
            },
            {
              x: "Product",
              y: [3500, 4100]
            },
            {
              x: "Data Science",
              y: [4500, 6500]
            },
            {
              x: "Sales",
              y: [4100, 5600]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
          enabled: false
        }
      },
      colors: ["#EC7D31", "#36BDCB"],
      plotOptions: {
        bar: {
          horizontal: true,
          isDumbbell: true,
          dumbbellColors: [["#EC7D31", "#36BDCB"]]
        }
      },
      title: {
        text: "Paygap Disparity"
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["Female", "Male"]
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: ["#36BDCB"],
          inverseColors: false,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  }
  static {
    this.\u0275fac = function TimelinechartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimelinechartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelinechartsComponent, selectors: [["app-timelinecharts"]], viewQuery: function TimelinechartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 52, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex TimeLine Charts", "activeTitle", "Apex TimeLine Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "timeline-basic"], ["id", "chart"], [3, "series", "chart", "colors", "plotOptions", "xaxis"], ["id", "timeline-colors"], [3, "series", "chart", "fill", "grid", "dataLabels", "plotOptions", "xaxis", "colors", "yaxis"], ["id", "timeline-multi"], [3, "series", "chart", "colors", "dataLabels", "plotOptions", "xaxis", "legend"], ["id", "timeline-advanced"], [3, "series", "chart", "colors", "fill", "legend", "plotOptions", "xaxis"], ["id", "timeline-grouped"], [3, "series", "chart", "stroke", "dataLabels", "plotOptions", "xaxis", "colors", "fill", "yaxis", "legend", "grid", "title"], ["id", "timeline-grouped", 3, "series", "chart", "stroke", "dataLabels", "plotOptions", "xaxis", "colors", "fill", "yaxis", "legend", "grid", "title"]], template: function TimelinechartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic TImeline Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Multiple Colored TImeline Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Multi Series Timeline Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275element(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7);
        \u0275\u0275elementStart(47, "div", 8)(48, "div", 9);
        \u0275\u0275text(49, "Advanced Timeline Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 18)(52, "div", 12);
        \u0275\u0275element(53, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "div", 2)(55, "div", 3);
        \u0275\u0275element(56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "div", 7);
        \u0275\u0275elementStart(60, "div", 8)(61, "div", 9);
        \u0275\u0275text(62, "Timeline-Grouped Rows");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 10)(64, "div", 20)(65, "div", 12);
        \u0275\u0275element(66, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "div", 2)(68, "div", 3);
        \u0275\u0275element(69, "div", 4)(70, "div", 5)(71, "div", 6)(72, "div", 7);
        \u0275\u0275elementStart(73, "div", 8)(74, "div", 9);
        \u0275\u0275text(75, "Dumbbell Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 10);
        \u0275\u0275element(77, "apx-chart", 22);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("fill", ctx.chartOptions1.fill)("grid", ctx.chartOptions1.grid)("dataLabels", ctx.chartOptions1.dataLabels)("plotOptions", ctx.chartOptions1.plotOptions)("xaxis", ctx.chartOptions1.xaxis)("colors", ctx.chartOptions1.colors)("yaxis", ctx.chartOptions1.yaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions)("xaxis", ctx.chartOptions2.xaxis)("legend", ctx.chartOptions2.legend);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("colors", ctx.chartOptions3.colors)("fill", ctx.chartOptions3.fill)("legend", ctx.chartOptions3.legend)("plotOptions", ctx.chartOptions3.plotOptions)("xaxis", ctx.chartOptions3.xaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions4.series)("chart", ctx.chartOptions4.chart)("stroke", ctx.chartOptions4.stroke)("dataLabels", ctx.chartOptions4.dataLabels)("plotOptions", ctx.chartOptions4.plotOptions)("xaxis", ctx.chartOptions4.xaxis)("colors", ctx.chartOptions4.colors)("fill", ctx.chartOptions4.fill)("yaxis", ctx.chartOptions4.yaxis)("legend", ctx.chartOptions4.legend)("grid", ctx.chartOptions4.grid)("title", ctx.chartOptions4.title);
        \u0275\u0275advance(11);
        \u0275\u0275property("series", ctx.chartOptions5.series)("chart", ctx.chartOptions5.chart)("stroke", ctx.chartOptions5.stroke)("dataLabels", ctx.chartOptions5.dataLabels)("plotOptions", ctx.chartOptions5.plotOptions)("xaxis", ctx.chartOptions5.xaxis)("colors", ctx.chartOptions5.colors)("fill", ctx.chartOptions5.fill)("yaxis", ctx.chartOptions5.yaxis)("legend", ctx.chartOptions5.legend)("grid", ctx.chartOptions5.grid)("title", ctx.chartOptions5.title);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelinechartsComponent, { className: "TimelinechartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\timelinecharts\\timelinecharts.component.ts", lineNumber: 46 });
})();
export {
  TimelinechartsComponent
};
//# sourceMappingURL=timelinecharts.component-JZC3O22U.js.map
