import {
  BaseChartDirective
} from "./chunk-S5D7NJY4.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  DashboardHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule
} from "./chunk-JG564GD5.js";
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

// src/app/shared/data/dashboard_chartData/hrcharts.data.ts
var applicationChartsData = {
  chart: {
    height: 170,
    width: 170,
    type: "radialBar"
  },
  series: [85],
  colors: ["#4454c3"],
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
var ShortlistedChartsData = {
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
var RejectedChartsData = {
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
var projectTrackedChartData = {
  series: [
    {
      name: "Project In'",
      data: [
        1453,
        3425,
        7654,
        3245,
        4532,
        5643,
        7635,
        5465,
        6754,
        5432,
        5435,
        6545
      ]
    },
    {
      name: "Project take",
      data: [
        1123,
        2435,
        5463,
        1245,
        3245,
        4534,
        5435,
        3452,
        5432,
        3452,
        2564,
        3456
      ]
    },
    {
      name: "On Hold",
      data: [
        1123,
        2435,
        5463,
        1245,
        3245,
        4534,
        5435,
        3452,
        5432,
        3452,
        2564,
        3456
      ]
    }
  ],
  chart: {
    stacked: true,
    type: "bar",
    height: 310,
    toolbar: {
      show: false
    }
  },
  grid: {
    borderColor: "rgba(67, 87, 133, .09)",
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true
        // Ensure y-axis grids are shown
      }
    }
  },
  colors: ["#4454c3", "#f72d66", "#cedbfd"],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      colors: {
        ranges: [
          {
            from: -100,
            to: -46,
            color: "#ebeff5"
          },
          {
            from: -45,
            to: 0,
            color: "#ebeff5"
          }
        ]
      },
      columnWidth: "20%"
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
    position: "top"
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: "rgba(67, 87, 133, 0.05)",
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(67, 87, 133, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      show: true,
      formatter: function(y) {
        return y.toFixed(0) + "";
      }
    }
  },
  xaxis: {
    type: "month",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ],
    axisBorder: {
      show: false,
      color: "rgba(67, 87, 133, 0.05)",
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: false,
      borderType: "solid",
      color: "rgba(67, 87, 133, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90
    }
  }
};
var PieChartData = {
  datasets: [
    {
      data: [68, 55, 45, 34, 27],
      backgroundColor: [
        "#4454c3",
        "#f72d66",
        "#2dce89",
        "#45aaf2",
        "#ecb403",
        "#ff5b51"
      ],
      hoverBackgroundColor: [
        "#4454c3",
        "#f72d66",
        "#2dce89",
        "#45aaf2",
        "#ecb403",
        "#ff5b51"
      ]
    }
  ],
  labels: ["Application", "Shortlisted", "Rejected", "On Hold", "Finalised"]
};
var PieChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top"
    }
  }
};
var DoughnutChartType = "doughnut";
var PieChartType = "pie";

// src/app/components/dashboards/hr/hr.component.ts
var HrComponent = class _HrComponent {
  constructor() {
    this.chartOptions = applicationChartsData;
    this.chartOptions1 = ShortlistedChartsData;
    this.chartOptions2 = RejectedChartsData;
    this.chartOptions3 = projectTrackedChartData;
    this.PieChartData = PieChartData;
    this.PieChartOptions = PieChartOptions;
    this.PieChartType = PieChartType;
    this.DoughnutChartType = DoughnutChartType;
  }
  static {
    this.\u0275fac = function HrComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrComponent, selectors: [["app-hr"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 582, vars: 33, consts: [["title", "Hr Dashboard"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-body"], [1, "col"], [1, "mb-2", "fs-15", "text-muted"], [1, "fw-bold", "mb-1"], [1, "text-success"], [1, "fa", "fa-arrow-up", "me-1"], [1, "col", "col-auto", "mx-auto"], ["id", "application", 3, "labels", "series", "chart", "plotOptions", "stroke", "colors", "fill"], ["id", "chart-circle-primary2", 3, "labels", "series", "chart", "plotOptions", "stroke", "colors", "fill"], [1, "text-danger"], [1, "fa", "fa-arrow-down", "me-1"], ["id", "chart-circle-primary3", 3, "labels", "series", "chart", "plotOptions", "stroke", "colors", "fill"], [1, "col-xl-8", "col-md-12", "col-lg-7"], [1, "card-header"], [1, "card-title"], [1, "d-flex", "ms-auto"], ["ngbDropdown", "", 1, "btn-group", "mb-0"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-0"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "card-body", "pb-0"], ["id", "projectTracked", 1, "overflow-hidden"], [3, "series", "chart", "xaxis", "plotOptions", "dataLabels", "legend", "grid", "colors", "yaxis"], [1, "card-footer", "text-start"], [1, "col-xl-4", "col-lg-4", "col-sm-4", "mb-4", "mb-sm-0", "text-center"], [1, "fw-normal", "text-dark", "mb-0"], [1, "text-muted", "mb-1", "fs-13", "d-inline-flex"], [1, "chart-label", "bg-primary", "me-2", "mt-1", "br-3"], [1, "chart-label", "bg-secondary", "me-2", "mt-1", "br-3"], [1, "col-xl-4", "col-lg-4", "col-sm-4", "text-center"], [1, "chart-label", "bg-light", "me-2", "mt-1", "br-3"], [1, "col-xl-4", "col-md-12", "col-lg-5"], [1, "card", "overflow-hidden"], [1, "card-options"], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", "aria-expanded", "false", "href", "javascript:void(0);", 1, "option-dots"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-divider"], [1, "fa", "fa-cog", "me-2"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "transaction-table", "mb-0", "text-nowrap", "table-borderless"], [1, "d-sm-flex"], ["src", "./assets/images/faces/1.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], [1, "mt-1"], [1, "mb-1", "fw-semibold"], [1, "text-muted"], [1, "text-end"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light"], ["src", "./assets/images/faces/4.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], ["src", "./assets/images/faces/5.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], ["src", "./assets/images/faces/2.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], ["src", "./assets/images/faces/10.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], ["src", "./assets/images/faces/12.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "rounded", "me-3"], [1, "col-xl-4", "col-lg-5"], [1, "card-body", "mx-auto", "text-center"], [1, "overflow-hidden"], [1, "chart-container"], ["height", "245", "width", "245", "id", "Projects", "baseChart", "", 1, "canvasDoughnut3", 3, "data", "options", "type"], [1, "table", "table-hover", "mb-0"], [1, ""], [1, "p-3", "d-flex"], [1, "chart-label", "bg-primary", "me-2", "mt-1"], [1, "p-3"], [1, "chart-label", "bg-secondary", "me-2", "mt-1"], [1, "chart-label", "bg-success", "me-2", "mt-1"], [1, "chart-label", "bg-info", "me-2", "mt-1"], [1, "border-bottom-0", "p-3", "d-flex"], [1, "chart-label", "bg-warning", "me-2", "mt-1"], [1, "border-bottom-0", "p-3"], [1, "col-xl-8", "col-lg-7"], [1, "p-4"], [1, "row", "d-sm-flex", "d-block"], [1, "col", "my-sm-0", "my-2"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "text", "placeholder", "Date", 1, "form-control"], ["type", "text", "placeholder", "Reason", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-block", "w-100"], [1, "card-body", "table-responsive", "p-0", "mx-313", "scroll-3"], [1, "table", "text-nowrap", "index4-table"], ["scope", "row"], [1, "badge", "bg-success", "rounded-pill"], [1, "badge", "bg-primary", "rounded-pill"], [1, "badge", "bg-danger", "rounded-pill"], [1, "card-footer", "text-center", "border-top-0"], ["href", "javascript:void(0);", 1, "btn-link"], [1, "col-md-12"], [1, "table", "table-hover", "text-nowrap", "table-bordered"], ["scope", "row", 1, "text-start"], ["scope", "row", 1, "text-center"], [1, "d-flex"], ["src", "./assets/images/faces/1.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], [1, "ms-3", "mt-2"], [1, "mb-0", "text-dark"], [1, "mb-0", "fs-13", "text-muted"], [1, "text-center"], [1, "d-flex", "align-items-center"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-danger", 2, "width", "45%"], [1, "ms-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "./assets/images/faces/2.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "55%"], ["src", "./assets/images/faces/3.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-success", 2, "width", "85%"], ["src", "./assets/images/faces/4.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-success", 2, "width", "90%"], ["src", "./assets/images/faces/5.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "65%"], ["src", "./assets/images/faces/6.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-animate", "progress-xs", "w-100"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-danger", 2, "width", "40%"], ["src", "./assets/images/faces/7.jpg", "alt", "Image description", 1, "avatar", "avatar-lg", "avatar-rounded", "me-3"]], template: function HrComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-dashboard-header", 0);
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
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275element(15, "apx-chart", 11);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 1)(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, " Shortlisted ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2", 7);
        \u0275\u0275text(24, "30,175");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 8);
        \u0275\u0275element(26, "i", 9);
        \u0275\u0275text(27, " +1.8%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275element(29, "apx-chart", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 1)(34, "div", 5)(35, "div", 6);
        \u0275\u0275text(36, " Rejected ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2", 7);
        \u0275\u0275text(38, "7,745");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 13);
        \u0275\u0275element(40, "i", 14);
        \u0275\u0275text(41, " -2.4%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 10);
        \u0275\u0275element(43, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(44, "div", 1)(45, "div", 16)(46, "div", 3)(47, "div", 17)(48, "h3", 18);
        \u0275\u0275text(49, "Project Tracked");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "button", 21);
        \u0275\u0275text(53, "This Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 22)(55, "a", 23);
        \u0275\u0275text(56, "last Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "a", 23);
        \u0275\u0275text(58, "2018");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "a", 23);
        \u0275\u0275text(60, "2017");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "div", 24)(62, "div", 25);
        \u0275\u0275element(63, "apx-chart", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 27)(65, "div", 1)(66, "div", 28)(67, "h2", 29);
        \u0275\u0275text(68, "1,897");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 30);
        \u0275\u0275element(70, "div", 31);
        \u0275\u0275text(71, " Project In");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 28)(73, "h2", 29);
        \u0275\u0275text(74, "3,785");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 30);
        \u0275\u0275element(76, "div", 32);
        \u0275\u0275text(77, " Project Take");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 33)(79, "h2", 29);
        \u0275\u0275text(80, "16,897");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 30);
        \u0275\u0275element(82, "div", 34);
        \u0275\u0275text(83, " On Hold");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(84, "div", 35)(85, "div", 36)(86, "div", 17)(87, "h3", 18);
        \u0275\u0275text(88, "Best Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 37)(90, "div", 20)(91, "a", 38);
        \u0275\u0275element(92, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 40)(94, "a", 23);
        \u0275\u0275text(95, " Download Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "a", 23);
        \u0275\u0275text(97, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "a", 23);
        \u0275\u0275text(99, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "a", 23);
        \u0275\u0275text(101, "Yearly");
        \u0275\u0275elementEnd();
        \u0275\u0275element(102, "div", 41);
        \u0275\u0275elementStart(103, "a", 23);
        \u0275\u0275element(104, "i", 42);
        \u0275\u0275text(105, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(106, "div", 43)(107, "div", 44)(108, "table", 45)(109, "tbody")(110, "tr")(111, "td", 46);
        \u0275\u0275element(112, "img", 47);
        \u0275\u0275elementStart(113, "div", 48)(114, "h6", 49);
        \u0275\u0275text(115, "John Wisely");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "small", 50);
        \u0275\u0275text(117, "Angular Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "td", 51)(119, "a", 52);
        \u0275\u0275text(120, "Profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "tr")(122, "td", 46);
        \u0275\u0275element(123, "img", 53);
        \u0275\u0275elementStart(124, "div", 48)(125, "h6", 49);
        \u0275\u0275text(126, "Nicki Fanning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "small", 50);
        \u0275\u0275text(128, "Php Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "td", 51)(130, "a", 52);
        \u0275\u0275text(131, "Profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "tr")(133, "td", 46);
        \u0275\u0275element(134, "img", 54);
        \u0275\u0275elementStart(135, "div", 48)(136, "h6", 49);
        \u0275\u0275text(137, "Lula Malone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "small", 50);
        \u0275\u0275text(139, "Ui Designer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(140, "td", 51)(141, "a", 52);
        \u0275\u0275text(142, "Profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "tr")(144, "td", 46);
        \u0275\u0275element(145, "img", 55);
        \u0275\u0275elementStart(146, "div", 48)(147, "h6", 49);
        \u0275\u0275text(148, "Rina Summa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "small", 50);
        \u0275\u0275text(150, "Java Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "td", 51)(152, "a", 52);
        \u0275\u0275text(153, "Profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(154, "tr")(155, "td", 46);
        \u0275\u0275element(156, "img", 56);
        \u0275\u0275elementStart(157, "div", 48)(158, "h6", 49);
        \u0275\u0275text(159, "Yadira Acklin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "small", 50);
        \u0275\u0275text(161, "Web Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(162, "td", 51)(163, "a", 52);
        \u0275\u0275text(164, "Profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "tr")(166, "td", 46);
        \u0275\u0275element(167, "img", 57);
        \u0275\u0275elementStart(168, "div", 48)(169, "h6", 49);
        \u0275\u0275text(170, "Joanna Latta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "small", 50);
        \u0275\u0275text(172, "Angular Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "td", 51)(174, "a", 52);
        \u0275\u0275text(175, "Profile");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(176, "div", 1)(177, "div", 58)(178, "div", 36)(179, "div", 17)(180, "h3", 18);
        \u0275\u0275text(181, "Project Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 19)(183, "div", 20)(184, "button", 21);
        \u0275\u0275text(185, "This Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 22)(187, "a", 23);
        \u0275\u0275text(188, "last Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "a", 23);
        \u0275\u0275text(190, "2018");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "a", 23);
        \u0275\u0275text(192, "2017");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(193, "div", 59)(194, "div", 60)(195, "div", 61);
        \u0275\u0275element(196, "canvas", 62);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(197, "div", 43)(198, "table", 63)(199, "tbody")(200, "tr", 64)(201, "td", 65);
        \u0275\u0275element(202, "div", 66);
        \u0275\u0275text(203, " Applications ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "td", 67);
        \u0275\u0275text(205, "4,678");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "td", 67);
        \u0275\u0275text(207, "68%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "tr", 64)(209, "td", 65);
        \u0275\u0275element(210, "div", 68);
        \u0275\u0275text(211, " Shortlisted ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "td", 67);
        \u0275\u0275text(213, "3,789");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "td", 67);
        \u0275\u0275text(215, "55%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "tr", 64)(217, "td", 65);
        \u0275\u0275element(218, "div", 69);
        \u0275\u0275text(219, " Rejected ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "td", 67);
        \u0275\u0275text(221, "2,137");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "td", 67);
        \u0275\u0275text(223, "45%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(224, "tr", 64)(225, "td", 65);
        \u0275\u0275element(226, "div", 70);
        \u0275\u0275text(227, " On Hold ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "td", 67);
        \u0275\u0275text(229, "1,786");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "td", 67);
        \u0275\u0275text(231, "34%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "tr", 64)(233, "td", 71);
        \u0275\u0275element(234, "div", 72);
        \u0275\u0275text(235, " Finalised ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "td", 73);
        \u0275\u0275text(237, "897");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "td", 73);
        \u0275\u0275text(239, "27%");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(240, "div", 74)(241, "div", 3)(242, "div", 17)(243, "h3", 18);
        \u0275\u0275text(244, "Application Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "div", 75)(246, "div", 76)(247, "div", 77);
        \u0275\u0275element(248, "input", 78);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 77);
        \u0275\u0275element(250, "input", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 77);
        \u0275\u0275element(252, "input", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "div", 77)(254, "a", 81);
        \u0275\u0275text(255, "Search");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(256, "div", 82)(257, "table", 83)(258, "thead")(259, "tr")(260, "th", 84);
        \u0275\u0275text(261, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "th", 84);
        \u0275\u0275text(263, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "th", 84);
        \u0275\u0275text(265, "Employee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "th", 84);
        \u0275\u0275text(267, "Leave");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "th", 84);
        \u0275\u0275text(269, "Period");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "th", 84);
        \u0275\u0275text(271, "Reason");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "th", 84);
        \u0275\u0275text(273, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(274, "tbody")(275, "tr")(276, "td");
        \u0275\u0275text(277, "2548");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "td");
        \u0275\u0275text(279, "3rd Feb 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(280, "td");
        \u0275\u0275text(281, "Emp-2312");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "td");
        \u0275\u0275text(283, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "td");
        \u0275\u0275text(285, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "td");
        \u0275\u0275text(287, "Sick");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "td")(289, "span", 85);
        \u0275\u0275text(290, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(291, "tr")(292, "td");
        \u0275\u0275text(293, "4536");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "td");
        \u0275\u0275text(295, "23rd Mar 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "td");
        \u0275\u0275text(297, "Emp-6754");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "td");
        \u0275\u0275text(299, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "td");
        \u0275\u0275text(301, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(302, "td");
        \u0275\u0275text(303, "Hospital");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(304, "td")(305, "span", 85);
        \u0275\u0275text(306, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(307, "tr")(308, "td");
        \u0275\u0275text(309, "2567");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "td");
        \u0275\u0275text(311, "4th Feb 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "td");
        \u0275\u0275text(313, "Emp-1432");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "td");
        \u0275\u0275text(315, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(316, "td");
        \u0275\u0275text(317, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(318, "td");
        \u0275\u0275text(319, "Outside");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(320, "td")(321, "span", 86);
        \u0275\u0275text(322, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(323, "tr")(324, "td");
        \u0275\u0275text(325, "7654");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(326, "td");
        \u0275\u0275text(327, "13th Mar 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(328, "td");
        \u0275\u0275text(329, "Emp-1254");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(330, "td");
        \u0275\u0275text(331, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "td");
        \u0275\u0275text(333, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(334, "td");
        \u0275\u0275text(335, "Normal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(336, "td")(337, "span", 87);
        \u0275\u0275text(338, "Rejected");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(339, "tr")(340, "td");
        \u0275\u0275text(341, "8754");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(342, "td");
        \u0275\u0275text(343, "28th Feb 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(344, "td");
        \u0275\u0275text(345, "Emp-8765");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(346, "td");
        \u0275\u0275text(347, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "td");
        \u0275\u0275text(349, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(350, "td");
        \u0275\u0275text(351, "Sick");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(352, "td")(353, "span", 85);
        \u0275\u0275text(354, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(355, "tr")(356, "td");
        \u0275\u0275text(357, "1232");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(358, "td");
        \u0275\u0275text(359, "23rd Apr 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(360, "td");
        \u0275\u0275text(361, "Emp-7643");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(362, "td");
        \u0275\u0275text(363, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(364, "td");
        \u0275\u0275text(365, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(366, "td");
        \u0275\u0275text(367, "Other Work");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(368, "td")(369, "span", 87);
        \u0275\u0275text(370, "Rejected");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(371, "tr")(372, "td");
        \u0275\u0275text(373, "8765");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "td");
        \u0275\u0275text(375, "16th Feb 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "td");
        \u0275\u0275text(377, "Emp-2431");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(378, "td");
        \u0275\u0275text(379, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(380, "td");
        \u0275\u0275text(381, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(382, "td");
        \u0275\u0275text(383, "Sick");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(384, "td")(385, "span", 86);
        \u0275\u0275text(386, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(387, "tr")(388, "td");
        \u0275\u0275text(389, "7654");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(390, "td");
        \u0275\u0275text(391, "23rd Mar 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "td");
        \u0275\u0275text(393, "Emp-5643");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(394, "td");
        \u0275\u0275text(395, "PL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(396, "td");
        \u0275\u0275text(397, "1 Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(398, "td");
        \u0275\u0275text(399, "Outside");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(400, "td")(401, "span", 87);
        \u0275\u0275text(402, "Rejected");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(403, "div", 88)(404, "a", 89);
        \u0275\u0275text(405, "View All");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(406, "div", 1)(407, "div", 90)(408, "div", 3)(409, "div", 17)(410, "h3", 18);
        \u0275\u0275text(411, "Employee Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(412, "div", 4)(413, "div", 44)(414, "table", 91)(415, "thead")(416, "tr")(417, "th", 92);
        \u0275\u0275text(418, "Employee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(419, "th", 93);
        \u0275\u0275text(420, "Occupation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "th", 93);
        \u0275\u0275text(422, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(423, "th", 93);
        \u0275\u0275text(424, "Performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(425, "th", 93);
        \u0275\u0275text(426, " Actions ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(427, "tbody")(428, "tr")(429, "td")(430, "div", 94);
        \u0275\u0275element(431, "img", 95);
        \u0275\u0275elementStart(432, "div", 96)(433, "h5", 97);
        \u0275\u0275text(434, "Lillian Blake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "p", 98);
        \u0275\u0275text(436, "lillianblake@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(437, "td", 99);
        \u0275\u0275text(438, "Angular Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(439, "td", 99);
        \u0275\u0275text(440, "876");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(441, "td")(442, "div", 100)(443, "div", 101);
        \u0275\u0275element(444, "div", 102);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(445, "div", 103);
        \u0275\u0275text(446, "45%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(447, "td", 51)(448, "a", 104);
        \u0275\u0275text(449, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(450, "tr")(451, "td")(452, "div", 94);
        \u0275\u0275element(453, "img", 105);
        \u0275\u0275elementStart(454, "div", 96)(455, "h5", 97);
        \u0275\u0275text(456, "Georgine Earle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(457, "p", 98);
        \u0275\u0275text(458, "georgineearle@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(459, "td", 99);
        \u0275\u0275text(460, "Php Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(461, "td", 99);
        \u0275\u0275text(462, "342");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(463, "td")(464, "div", 100)(465, "div", 106);
        \u0275\u0275element(466, "div", 107);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "div", 103);
        \u0275\u0275text(468, "55%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(469, "td", 51)(470, "a", 104);
        \u0275\u0275text(471, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(472, "tr")(473, "td")(474, "div", 94);
        \u0275\u0275element(475, "img", 108);
        \u0275\u0275elementStart(476, "div", 96)(477, "h5", 97);
        \u0275\u0275text(478, "Veta Willson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(479, "p", 98);
        \u0275\u0275text(480, "vetawillson@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(481, "td", 99);
        \u0275\u0275text(482, "Web Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(483, "td", 99);
        \u0275\u0275text(484, "564");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(485, "td")(486, "div", 100)(487, "div", 109);
        \u0275\u0275element(488, "div", 110);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(489, "div", 103);
        \u0275\u0275text(490, "85%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(491, "td", 51)(492, "a", 104);
        \u0275\u0275text(493, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(494, "tr")(495, "td")(496, "div", 94);
        \u0275\u0275element(497, "img", 111);
        \u0275\u0275elementStart(498, "div", 96)(499, "h5", 97);
        \u0275\u0275text(500, "Kayleigh Throneberry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(501, "p", 98);
        \u0275\u0275text(502, "kayleighthroneberry@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(503, "td", 99);
        \u0275\u0275text(504, "Web Designer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(505, "td", 99);
        \u0275\u0275text(506, "345");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(507, "td")(508, "div", 100)(509, "div", 112);
        \u0275\u0275element(510, "div", 113);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(511, "div", 103);
        \u0275\u0275text(512, "90%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(513, "td", 51)(514, "a", 104);
        \u0275\u0275text(515, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(516, "tr")(517, "td")(518, "div", 94);
        \u0275\u0275element(519, "img", 114);
        \u0275\u0275elementStart(520, "div", 96)(521, "h5", 97);
        \u0275\u0275text(522, "Gretta Perro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(523, "p", 98);
        \u0275\u0275text(524, "grettaperro@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(525, "td", 99);
        \u0275\u0275text(526, "Angular Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(527, "td", 99);
        \u0275\u0275text(528, "123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(529, "td")(530, "div", 100)(531, "div", 115);
        \u0275\u0275element(532, "div", 116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(533, "div", 103);
        \u0275\u0275text(534, "65%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(535, "td", 51)(536, "a", 104);
        \u0275\u0275text(537, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(538, "tr")(539, "td")(540, "div", 94);
        \u0275\u0275element(541, "img", 117);
        \u0275\u0275elementStart(542, "div", 96)(543, "h5", 97);
        \u0275\u0275text(544, "Emelina Poisson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(545, "p", 98);
        \u0275\u0275text(546, "emelinapoisson@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(547, "td", 99);
        \u0275\u0275text(548, "Web Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(549, "td", 99);
        \u0275\u0275text(550, "456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(551, "td")(552, "div", 100)(553, "div", 118);
        \u0275\u0275element(554, "div", 119);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(555, "div", 103);
        \u0275\u0275text(556, "40%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(557, "td", 51)(558, "a", 104);
        \u0275\u0275text(559, " View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(560, "tr")(561, "td")(562, "div", 94);
        \u0275\u0275element(563, "img", 120);
        \u0275\u0275elementStart(564, "div", 96)(565, "h5", 97);
        \u0275\u0275text(566, "Marleen Sohn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(567, "p", 98);
        \u0275\u0275text(568, "marleensohn@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(569, "td", 99);
        \u0275\u0275text(570, "Web Designer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(571, "td", 99);
        \u0275\u0275text(572, "876");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(573, "td", 99)(574, "div", 100)(575, "div", 115);
        \u0275\u0275element(576, "div", 116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(577, "div", 103);
        \u0275\u0275text(578, "65%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(579, "td", 51)(580, "a", 104);
        \u0275\u0275text(581, " View Details");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("labels", ctx.chartOptions.labels)("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill);
        \u0275\u0275advance(14);
        \u0275\u0275property("labels", ctx.chartOptions1.labels)("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("plotOptions", ctx.chartOptions1.plotOptions)("stroke", ctx.chartOptions1.stroke)("colors", ctx.chartOptions1.colors)("fill", ctx.chartOptions1.fill);
        \u0275\u0275advance(14);
        \u0275\u0275property("labels", ctx.chartOptions2.labels)("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("plotOptions", ctx.chartOptions2.plotOptions)("stroke", ctx.chartOptions2.stroke)("colors", ctx.chartOptions2.colors)("fill", ctx.chartOptions2.fill);
        \u0275\u0275advance(20);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("xaxis", ctx.chartOptions3.xaxis)("plotOptions", ctx.chartOptions3.plotOptions)("dataLabels", ctx.chartOptions3.dataLabels)("legend", ctx.chartOptions3.legend)("grid", ctx.chartOptions3.grid)("colors", ctx.chartOptions3.colors)("yaxis", ctx.chartOptions3.yaxis);
        \u0275\u0275advance(133);
        \u0275\u0275property("data", ctx.PieChartData)("options", ctx.PieChartOptions)("type", ctx.DoughnutChartType);
      }
    }, dependencies: [SharedModule, DashboardHeaderComponent, NgApexchartsModule, ChartComponent, BaseChartDirective, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrComponent, { className: "HrComponent", filePath: "src\\app\\components\\dashboards\\hr\\hr.component.ts", lineNumber: 15 });
})();
export {
  HrComponent
};
//# sourceMappingURL=hr.component-GCKSLCSB.js.map
