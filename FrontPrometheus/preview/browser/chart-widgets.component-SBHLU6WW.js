import {
  ExpensesChartData,
  TotalRevenueChartData,
  UniqueVisitorsChartData
} from "./chunk-CXIYJZQQ.js";
import {
  BaseChartDirective
} from "./chunk-S5D7NJY4.js";
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/shared/data/widgetsCharts.data.ts
var TotalSalesData = {
  chart: {
    type: "bar",
    height: 50,
    barWidth: 5,
    barSpacing: 7,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: false,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: void 0,
    width: 2,
    dashArray: 0
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  series: [
    {
      name: "Total Revenue",
      data: [
        2,
        4,
        3,
        4,
        5,
        4,
        5,
        3,
        4,
        5,
        2,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5
      ]
    }
  ],
  yaxis: {
    min: 0
  },
  colors: ["var(--primary-color)"]
};
var TotalProfitsData = {
  chart: {
    type: "bar",
    height: 50,
    barWidth: 5,
    barSpacing: 7,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: false,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: void 0,
    width: 2,
    dashArray: 0
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  series: [
    {
      name: "Total Revenue",
      data: [
        2,
        4,
        3,
        4,
        5,
        4,
        5,
        3,
        4,
        5,
        2,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5
      ]
    }
  ],
  yaxis: {
    min: 0
  },
  colors: ["#f7346b"]
};
var TotalOrdersData = {
  chart: {
    type: "bar",
    height: 50,
    barWidth: 5,
    barSpacing: 7,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: false,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: void 0,
    width: 2,
    dashArray: 0
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  series: [
    {
      name: "Total Revenue",
      data: [
        2,
        4,
        3,
        4,
        5,
        4,
        5,
        3,
        4,
        5,
        2,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5
      ]
    }
  ],
  yaxis: {
    min: 0
  },
  colors: ["#2dce89"]
};
var SalesRevenueData = {
  chart: {
    type: "bar",
    height: 50,
    barWidth: 5,
    barSpacing: 7,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: false,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: void 0,
    width: 2,
    dashArray: 0
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  series: [
    {
      name: "Total Revenue",
      data: [
        2,
        4,
        3,
        4,
        5,
        4,
        5,
        3,
        4,
        5,
        2,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5,
        4,
        5,
        4,
        3,
        5,
        4,
        3,
        4,
        5
      ]
    }
  ],
  yaxis: {
    min: 0
  },
  colors: ["#45aaf2"]
};
var lineChartOptions = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index"
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        //   display: false,
      }
    },
    tooltip: {
      enabled: true
    }
  }
};
var lineChartType = "line";
var lineChartData = {
  datasets: [
    {
      data: [85, 72, 79, 73, 78, 75, 86, 56],
      label: "Bitcon",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      tension: 0.3,
      fill: true,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(156, 197, 106)"
    }
  ],
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
};
var lineChartOptions1 = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index"
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        //   display: false,
      }
    },
    tooltip: {
      enabled: true
    }
  }
};
var lineChartType1 = "line";
var lineChartData1 = {
  datasets: [
    {
      data: [45, 78, 67, 78, 66, 78, 89, 84],
      label: "Nem",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      tension: 0.3,
      fill: true,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(156, 197, 106)"
    }
  ],
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
};
var lineChartOptions2 = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index"
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        //   display: false,
      }
    },
    tooltip: {
      enabled: true
    }
  }
};
var lineChartType2 = "line";
var lineChartData2 = {
  datasets: [
    {
      data: [56, 78, 56, 78, 59, 78, 37, 56],
      label: "Ripple",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      tension: 0.3,
      fill: true,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(156, 197, 106)"
    }
  ],
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
};
var lineChartOptions3 = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index"
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        //   display: false,
      }
    },
    tooltip: {
      enabled: true
    }
  }
};
var lineChartType3 = "line";
var lineChartData3 = {
  datasets: [
    {
      data: [52, 59, 78, 54, 67, 28, 89, 45],
      label: "Neo",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      tension: 0.3,
      fill: true,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(156, 197, 106)"
    }
  ],
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
};
var SharesData = {
  chart: {
    height: 200,
    width: 200,
    type: "radialBar"
  },
  series: [65],
  colors: ["var(--primary-color)"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "40%",
        background: "#fff"
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 10,
          offsetX: 10,
          color: "#4b9bfa",
          fontSize: "1.25rem",
          show: false
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Followers"]
};
var ProjectsData = {
  chart: {
    height: 200,
    width: 200,
    type: "radialBar"
  },
  series: [60],
  colors: ["#f72d66"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "40%",
        background: "#fff"
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 10,
          offsetX: 10,
          color: "#4b9bfa",
          fontSize: "1.25rem",
          show: false
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Followers"]
};
var UsersData = {
  chart: {
    height: 200,
    width: 200,
    type: "radialBar"
  },
  series: [60],
  colors: ["#3fd294"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "40%",
        background: "#fff"
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 10,
          offsetX: 10,
          color: "#4b9bfa",
          fontSize: "1.25rem",
          show: false
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Followers"]
};

// src/app/components/widgets/chart-widgets/chart-widgets.component.ts
var ChartWidgetsComponent = class _ChartWidgetsComponent {
  constructor() {
    this.ApexData1 = TotalRevenueChartData;
    this.ApexData2 = UniqueVisitorsChartData;
    this.ApexData3 = ExpensesChartData;
    this.sparkline_bar1 = TotalSalesData;
    this.sparkline_bar2 = TotalProfitsData;
    this.sparkline_bar3 = TotalOrdersData;
    this.sparkline_bar4 = SalesRevenueData;
    this.lineChartOptions = lineChartOptions;
    this.lineChartType = lineChartType;
    this.lineChartData = lineChartData;
    this.lineChartOptions1 = lineChartOptions1;
    this.lineChartType1 = lineChartType1;
    this.lineChartData1 = lineChartData1;
    this.lineChartOptions2 = lineChartOptions2;
    this.lineChartType2 = lineChartType2;
    this.lineChartData2 = lineChartData2;
    this.lineChartOptions3 = lineChartOptions3;
    this.lineChartType3 = lineChartType3;
    this.lineChartData3 = lineChartData3;
    this.SharesData = SharesData;
    this.ProjectsData = ProjectsData;
    this.UsersData = UsersData;
    this.chartOptions = {
      chart: {
        height: 170,
        width: 170,
        type: "radialBar"
      },
      series: [85],
      colors: ["var(--primary-color)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Followers"]
    };
    this.chartOptions1 = {
      chart: {
        height: 170,
        width: 170,
        type: "radialBar"
      },
      series: [60],
      colors: ["#2dce89"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Followers"]
    };
    this.chartOptions2 = {
      chart: {
        height: 170,
        width: 170,
        type: "radialBar"
      },
      series: [45],
      colors: ["#f7346b"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Followers"]
    };
  }
  static {
    this.\u0275fac = function ChartWidgetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartWidgetsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartWidgetsComponent, selectors: [["app-chart-widgets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 273, vars: 93, consts: [["hassub", "", "sub", "Home", "title1", "Widgets", "title", "Chart Widgets", "activeTitle", "Chart Widgets"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-body"], [1, "col"], [1, "mb-2", "fs-15", "text-muted"], [1, "fw-bold", "mb-1"], [1, "text-success"], [1, "fa", "fa-arrow-up", "me-1"], [1, "col", "col-auto", "mx-auto"], ["id", "chart-circle-primary1"], [3, "series", "chart", "plotOptions", "stroke", "colors", "fill"], ["id", "chart-circle-primary2"], [1, "text-danger"], [1, "fa", "fa-arrow-down", "me-1"], ["id", "chart-circle-primary3"], [1, "col-xl-4", "col-md-12", "col-lg-6"], [1, "mb-1"], [1, "mb-0", "fw-bold"], ["id", "spark11"], [3, "chart", "stroke", "fill", "series", "yaxis", "colors"], ["id", "spark2"], ["id", "spark3"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card", "overflow-hidden"], [1, "text-start", "mb-4"], [1, "fa", "fa-line-chart", "me-1", "text-primary"], [1, "fs-12", "text-muted"], [1, "text-success", "me-1"], [1, "fe", "fe-arrow-up", "ms-1"], [1, "chart-wrapper"], ["id", "sparkline_bar11"], [1, "fa", "fa-usd", "me-1", "text-secondary"], [1, "text-danger", "me-1"], [1, "fe", "fe-arrow-down", "ms-1"], ["id", "sparkline_bar12"], [1, "fa", "fa-cart-arrow-down", "me-1", "text-success"], ["id", "sparkline_bar13"], [1, "fa", "fa-signal", "me-1", "text-info"], ["id", "sparkline_bar14"], [1, "col-xl-3", "col-md-12", "col-lg-6"], [1, "card-body", "pb-0"], [1, "mb-0"], [1, "mb-1", "fw-bold"], ["baseChart", "", "id", "widget-CryptoChart", "baseChart", "", 1, "h-5", "overflow-hidden", 3, "data", "options", "type"], ["id", "widget-CryptoChart11", "baseChart", "", 1, "h-5", "overflow-hidden", 3, "data", "options", "type"], ["id", "widget-CryptoChart2", "baseChart", "", 1, "h-5", "overflow-hidden", 3, "data", "options", "type"], ["id", "widget-CryptoChart3", "baseChart", "", 1, "h-5", "overflow-hidden", 3, "data", "options", "type"], [1, "col-lg-4", "col-sm-12"], [1, "card", "text-center"], [1, "widget-line"], [1, "mb-2"], [1, "fw-bold", "mb-0"], [1, "position-relative"], ["id", "shares"], [3, "series", "colors", "chart", "dataLabels", "xaxis", "legend", "plotOptions"], [1, "chart-circle-value"], [1, "fa", "fa-random", "text-primary"], [1, "widget-line-list"], [1, "border-end"], [1, "fa", "fa-hand-o-up"], [1, "fa", "fa-hand-o-down"], ["id", "projects"], [1, "fa", "fa-life-ring", "text-secondary"], ["id", "users"], [1, "fa", "fa-tags", "text-success"]], template: function ChartWidgetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6);
        \u0275\u0275text(8, " Total Application ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2", 7);
        \u0275\u0275text(10, "45,675");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275text(13, " +1.4%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
        \u0275\u0275element(16, "apx-chart", 12);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(17, "div", 2)(18, "div", 3)(19, "div", 4)(20, "div", 1)(21, "div", 5)(22, "div", 6);
        \u0275\u0275text(23, " Shortlisted ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "h2", 7);
        \u0275\u0275text(25, "30,175");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 8);
        \u0275\u0275element(27, "i", 9);
        \u0275\u0275text(28, " +1.8%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 13);
        \u0275\u0275element(31, "apx-chart", 12);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(32, "div", 2)(33, "div", 3)(34, "div", 4)(35, "div", 1)(36, "div", 5)(37, "div", 6);
        \u0275\u0275text(38, " Rejected ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h2", 7);
        \u0275\u0275text(40, "7,745");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 14);
        \u0275\u0275element(42, "i", 15);
        \u0275\u0275text(43, " -2.4%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 10)(45, "div", 16);
        \u0275\u0275element(46, "apx-chart", 12);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(47, "div", 1)(48, "div", 17)(49, "div", 3)(50, "div", 4)(51, "div", 1)(52, "div", 5)(53, "p", 18);
        \u0275\u0275text(54, "Today Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "h2", 19);
        \u0275\u0275text(56, "$897k");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 5)(58, "div", 20);
        \u0275\u0275element(59, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(60, "div", 17)(61, "div", 3)(62, "div", 4)(63, "div", 1)(64, "div", 5)(65, "p", 18);
        \u0275\u0275text(66, "Unique Visitors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h2", 19);
        \u0275\u0275text(68, "5,896");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 5)(70, "div", 22);
        \u0275\u0275element(71, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(72, "div", 17)(73, "div", 3)(74, "div", 4)(75, "div", 1)(76, "div", 5)(77, "p", 18);
        \u0275\u0275text(78, "Expenses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "h2", 19);
        \u0275\u0275text(80, "$1,678");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 5)(82, "div", 23);
        \u0275\u0275element(83, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(84, "div", 1)(85, "div", 24)(86, "div", 25)(87, "div", 4)(88, "div", 26)(89, "p", 18);
        \u0275\u0275element(90, "i", 27);
        \u0275\u0275text(91, " Total Sales ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h2", 19);
        \u0275\u0275text(93, "4,786");
        \u0275\u0275elementStart(94, "span", 28)(95, "span", 29);
        \u0275\u0275element(96, "i", 30);
        \u0275\u0275text(97, " 12%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " last week");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(99, "div", 31)(100, "div", 32);
        \u0275\u0275element(101, "apx-chart", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "div", 24)(103, "div", 25)(104, "div", 4)(105, "div", 26)(106, "p", 18);
        \u0275\u0275element(107, "i", 33);
        \u0275\u0275text(108, " Total Profits ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h2", 19);
        \u0275\u0275text(110, "$873");
        \u0275\u0275elementStart(111, "span", 28)(112, "span", 34);
        \u0275\u0275element(113, "i", 35);
        \u0275\u0275text(114, " 0.34%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " last week");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "div", 31)(117, "div", 36);
        \u0275\u0275element(118, "apx-chart", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(119, "div", 24)(120, "div", 25)(121, "div", 4)(122, "div", 26)(123, "p", 18);
        \u0275\u0275element(124, "i", 37);
        \u0275\u0275text(125, " Total Orders ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "h2", 19);
        \u0275\u0275text(127, "6,295");
        \u0275\u0275elementStart(128, "span", 28)(129, "span", 29);
        \u0275\u0275element(130, "i", 30);
        \u0275\u0275text(131, " 0.22%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(132, " last week");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(133, "div", 31)(134, "div", 38);
        \u0275\u0275element(135, "apx-chart", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(136, "div", 24)(137, "div", 25)(138, "div", 4)(139, "div", 26)(140, "p", 18);
        \u0275\u0275element(141, "i", 39);
        \u0275\u0275text(142, " Total Sales Revenue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "h2", 19);
        \u0275\u0275text(144, "$356");
        \u0275\u0275elementStart(145, "span", 28)(146, "span", 34);
        \u0275\u0275element(147, "i", 35);
        \u0275\u0275text(148, "0.82%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(149, " last week");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "div", 31)(151, "div", 40);
        \u0275\u0275element(152, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(153, "div", 1)(154, "div", 41)(155, "div", 25)(156, "div", 42)(157, "div")(158, "p", 43);
        \u0275\u0275text(159, "BTC / USDT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "h3", 44);
        \u0275\u0275text(161, "$10513");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(162, "div", 31);
        \u0275\u0275element(163, "canvas", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(164, "div", 41)(165, "div", 25)(166, "div", 42)(167, "div")(168, "p", 43);
        \u0275\u0275text(169, "XEM / USDT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "h3", 44);
        \u0275\u0275text(171, "$966");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "div", 31);
        \u0275\u0275element(173, "canvas", 46);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "div", 41)(175, "div", 25)(176, "div", 42)(177, "div")(178, "p", 43);
        \u0275\u0275text(179, "XRP / USDT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "h3", 44);
        \u0275\u0275text(181, "$7,349");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "div", 31);
        \u0275\u0275element(183, "canvas", 47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(184, "div", 41)(185, "div", 25)(186, "div", 42)(187, "div")(188, "p", 43);
        \u0275\u0275text(189, "NEO / USDT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "h3", 44);
        \u0275\u0275text(191, "$5,563");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div", 31);
        \u0275\u0275element(193, "canvas", 48);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(194, "div", 1)(195, "div", 49)(196, "div", 50)(197, "div", 4)(198, "div", 51)(199, "p", 52);
        \u0275\u0275text(200, "Shares");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "h1", 53);
        \u0275\u0275text(202, "1452");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "div", 54)(204, "div", 55);
        \u0275\u0275element(205, "apx-chart", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "div", 57);
        \u0275\u0275element(207, "i", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "ul", 59)(209, "li", 60);
        \u0275\u0275text(210, "45% ");
        \u0275\u0275element(211, "br");
        \u0275\u0275elementStart(212, "span", 8);
        \u0275\u0275element(213, "i", 61);
        \u0275\u0275text(214, " Positive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "li");
        \u0275\u0275text(216, "6% ");
        \u0275\u0275element(217, "br");
        \u0275\u0275elementStart(218, "span", 14);
        \u0275\u0275element(219, "i", 62);
        \u0275\u0275text(220, " Negative");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(221, "div", 49)(222, "div", 50)(223, "div", 4)(224, "div", 51)(225, "p", 52);
        \u0275\u0275text(226, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "h1", 53);
        \u0275\u0275text(228, "3265");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(229, "div", 54)(230, "div", 63);
        \u0275\u0275element(231, "apx-chart", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 57);
        \u0275\u0275element(233, "i", 64);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "ul", 59)(235, "li", 60);
        \u0275\u0275text(236, "55% ");
        \u0275\u0275element(237, "br");
        \u0275\u0275elementStart(238, "span", 8);
        \u0275\u0275element(239, "i", 61);
        \u0275\u0275text(240, " Positive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "li");
        \u0275\u0275text(242, "3% ");
        \u0275\u0275element(243, "br");
        \u0275\u0275elementStart(244, "span", 14);
        \u0275\u0275element(245, "i", 62);
        \u0275\u0275text(246, " Negative");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(247, "div", 49)(248, "div", 50)(249, "div", 4)(250, "div", 51)(251, "p", 52);
        \u0275\u0275text(252, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "h1", 53);
        \u0275\u0275text(254, "9562");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(255, "div", 54)(256, "div", 65);
        \u0275\u0275element(257, "apx-chart", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 57);
        \u0275\u0275element(259, "i", 66);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(260, "ul", 59)(261, "li", 60);
        \u0275\u0275text(262, "75% ");
        \u0275\u0275element(263, "br");
        \u0275\u0275elementStart(264, "span", 8);
        \u0275\u0275element(265, "i", 61);
        \u0275\u0275text(266, " Positive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "li");
        \u0275\u0275text(268, "6% ");
        \u0275\u0275element(269, "br");
        \u0275\u0275elementStart(270, "span", 14);
        \u0275\u0275element(271, "i", 62);
        \u0275\u0275text(272, " Negative");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill);
        \u0275\u0275advance(15);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("plotOptions", ctx.chartOptions1.plotOptions)("stroke", ctx.chartOptions1.stroke)("colors", ctx.chartOptions1.colors)("fill", ctx.chartOptions1.fill);
        \u0275\u0275advance(15);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("plotOptions", ctx.chartOptions2.plotOptions)("stroke", ctx.chartOptions2.stroke)("colors", ctx.chartOptions2.colors)("fill", ctx.chartOptions2.fill);
        \u0275\u0275advance(13);
        \u0275\u0275property("chart", ctx.ApexData1.chart)("stroke", ctx.ApexData1.stroke)("fill", ctx.ApexData1.fill)("series", ctx.ApexData1.series)("yaxis", ctx.ApexData1.yaxis)("colors", ctx.ApexData1.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.ApexData2.chart)("stroke", ctx.ApexData2.stroke)("fill", ctx.ApexData2.fill)("series", ctx.ApexData2.series)("yaxis", ctx.ApexData2.yaxis)("colors", ctx.ApexData2.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.ApexData3.chart)("stroke", ctx.ApexData3.stroke)("fill", ctx.ApexData3.fill)("series", ctx.ApexData3.series)("yaxis", ctx.ApexData3.yaxis)("colors", ctx.ApexData3.colors);
        \u0275\u0275advance(18);
        \u0275\u0275property("chart", ctx.sparkline_bar1.chart)("stroke", ctx.sparkline_bar1.stroke)("fill", ctx.sparkline_bar1.fill)("series", ctx.sparkline_bar1.series)("yaxis", ctx.sparkline_bar1.yaxis)("colors", ctx.sparkline_bar1.colors);
        \u0275\u0275advance(17);
        \u0275\u0275property("chart", ctx.sparkline_bar2.chart)("stroke", ctx.sparkline_bar2.stroke)("fill", ctx.sparkline_bar2.fill)("series", ctx.sparkline_bar2.series)("yaxis", ctx.sparkline_bar2.yaxis)("colors", ctx.sparkline_bar2.colors);
        \u0275\u0275advance(17);
        \u0275\u0275property("chart", ctx.sparkline_bar3.chart)("stroke", ctx.sparkline_bar3.stroke)("fill", ctx.sparkline_bar3.fill)("series", ctx.sparkline_bar3.series)("yaxis", ctx.sparkline_bar3.yaxis)("colors", ctx.sparkline_bar3.colors);
        \u0275\u0275advance(17);
        \u0275\u0275property("chart", ctx.sparkline_bar4.chart)("stroke", ctx.sparkline_bar4.stroke)("fill", ctx.sparkline_bar4.fill)("series", ctx.sparkline_bar4.series)("yaxis", ctx.sparkline_bar4.yaxis)("colors", ctx.sparkline_bar4.colors);
        \u0275\u0275advance(11);
        \u0275\u0275property("data", ctx.lineChartData)("options", ctx.lineChartOptions)("type", ctx.lineChartType);
        \u0275\u0275advance(10);
        \u0275\u0275property("data", ctx.lineChartData1)("options", ctx.lineChartOptions1)("type", ctx.lineChartType1);
        \u0275\u0275advance(10);
        \u0275\u0275property("data", ctx.lineChartData2)("options", ctx.lineChartOptions2)("type", ctx.lineChartType2);
        \u0275\u0275advance(10);
        \u0275\u0275property("data", ctx.lineChartData3)("options", ctx.lineChartOptions3)("type", ctx.lineChartType3);
        \u0275\u0275advance(12);
        \u0275\u0275property("series", ctx.SharesData.series)("colors", ctx.SharesData.colors)("chart", ctx.SharesData.chart)("dataLabels", ctx.SharesData.dataLabels)("xaxis", ctx.SharesData.xaxis)("legend", ctx.SharesData.legend)("plotOptions", ctx.SharesData.plotOptions);
        \u0275\u0275advance(26);
        \u0275\u0275property("series", ctx.ProjectsData.series)("colors", ctx.ProjectsData.colors)("chart", ctx.ProjectsData.chart)("dataLabels", ctx.ProjectsData.dataLabels)("xaxis", ctx.ProjectsData.xaxis)("legend", ctx.ProjectsData.legend)("plotOptions", ctx.ProjectsData.plotOptions);
        \u0275\u0275advance(26);
        \u0275\u0275property("series", ctx.UsersData.series)("colors", ctx.UsersData.colors)("chart", ctx.UsersData.chart)("dataLabels", ctx.UsersData.dataLabels)("xaxis", ctx.UsersData.xaxis)("legend", ctx.UsersData.legend)("plotOptions", ctx.UsersData.plotOptions);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent, BaseChartDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartWidgetsComponent, { className: "ChartWidgetsComponent", filePath: "src\\app\\components\\widgets\\chart-widgets\\chart-widgets.component.ts", lineNumber: 33 });
})();
export {
  ChartWidgetsComponent
};
//# sourceMappingURL=chart-widgets.component-SBHLU6WW.js.map
