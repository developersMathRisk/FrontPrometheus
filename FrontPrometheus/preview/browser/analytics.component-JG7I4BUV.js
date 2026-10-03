import {
  NgCircleProgressModule
} from "./chunk-YMCBHBQE.js";
import {
  DoughnutChartType,
  PieChartData,
  PieChartOptions,
  PieChartType
} from "./chunk-FM5J3RCL.js";
import "./chunk-S5D7NJY4.js";
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
import {
  RouterModule
} from "./chunk-EXZMHBSY.js";
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

// src/app/shared/data/dashboard_chartData/analyticscharts.data.ts
var StatusData = {
  series: [
    {
      name: "Page views",
      type: "column",
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
      name: "New Visitors",
      type: "column",
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
    toolbar: {
      show: false
    },
    height: 315,
    type: "line",
    stacked: false,
    fontFamily: "roboto, sans-serif"
  },
  grid: {
    stroke: 1,
    borderColor: "rgba(67, 87, 133, .09)",
    color: "rgba(67, 87, 133, .09)",
    strokeDashArray: 0
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: void 0
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    axisLine: {
      lineStyle: {
        color: "rgba(67, 87, 133, .09)"
      }
    },
    axisTicks: {
      show: true,
      color: "rgba(67, 87, 133, .09)"
    },
    axisBorder: {
      show: false,
      color: "rgba(67, 87, 133, .09)"
    },
    labels: {
      style: {
        colors: "rgba(67, 87, 133, .09)"
      }
    }
  },
  yaxis: [
    {
      show: true,
      axisLine: {
        lineStyle: {
          color: "rgba(67, 87, 133, .09)"
        }
      },
      axisTicks: {
        show: true,
        color: "rgba(67, 87, 133, .09)"
      },
      axisBorder: {
        show: false,
        color: "rgba(67, 87, 133, .09)"
      },
      labels: {
        style: {
          colors: "rgba(67, 87, 133, .09)"
        }
      },
      title: {
        text: void 0
      },
      tooltip: {
        enabled: true
      }
    }
  ],
  tooltip: {
    enabled: true
  },
  legend: {
    show: true,
    position: "bottom",
    offsetX: 50,
    offsetY: 5,
    fontSize: "13px",
    fontWeight: "normal",
    labels: {
      colors: "rgba(67, 87, 133, .09)"
    },
    markers: {
      width: 10,
      height: 10
    }
  },
  stroke: {
    width: [2, 2],
    dashArray: [0, 0]
  },
  plotOptions: {
    bar: {
      endingShape: "rounded",
      columnWidth: "35%",
      horizontal: false
    }
  },
  colors: ["#4454c3", "#f72d66"]
};

// src/app/components/dashboards/analytics/analytics.component.ts
var _c0 = ["chart"];
var AnalyticsComponent = class _AnalyticsComponent {
  constructor() {
    this.statusData = StatusData;
    this.PieChartData = PieChartData;
    this.PieChartOptions = PieChartOptions;
    this.PieChartType = PieChartType;
    this.DoughnutChartType = DoughnutChartType;
    this.chartOptions = {
      chart: {
        height: 248,
        type: "radialBar"
      },
      series: [85],
      colors: ["#4454c3"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            name: {
              offsetY: 30,
              show: true
            },
            value: {
              offsetY: -15,
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Goal"]
    };
    this.chartOptions2 = {
      series: [300, 50, 100],
      chart: {
        height: 250,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors: ["#2dce89", "#4454c3", "#ff5b51"]
    };
  }
  static {
    this.\u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], viewQuery: function AnalyticsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 537, vars: 20, consts: [["title", "Analytics Dashboard"], [1, "row"], [1, "col-xl-6", "col-md-12", "col-lg-12"], [1, "card", "bg-primary", "text-fixed-white"], [1, "card-body", "p-2"], [1, "col-xl-7", "col-md-12", "col-lg-6", "my-auto"], [1, "d-block", "py-2", "border-0", "text-center", "px-0"], [1, "text-fixed-white", "text-center", "mb-3"], [1, "text-fixed-white"], [1, "row", "text-center"], [1, "col-md-12"], [1, "mb-0", "fs-40", "counter", "fw-bold", "text-fixed-white"], [1, "mt-3", "text-fixed-white", "op-5"], [1, "col-xl-5", "col-md-12", "col-lg-6"], ["alt", "img", "src", "./assets/images/photos/18.png", 1, "mx-auto", "text-center", "w-85"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card"], [1, "card-body", "text-center"], [1, "fs-50", "icon-muted"], [1, "si", "si-chart", "icon-dropshadow-info", "text-info"], [1, "mb-1"], [1, "mb-1", "fs-40", "fw-bold"], [1, "mb-1", "text-muted"], [1, "text-success"], [1, "fa", "fa-caret-up", "me-1"], [1, "si", "si-wallet", "icon-dropshadow-danger", "text-danger"], [1, "text-danger"], [1, "fa", "fa-caret-down", "me-1"], [1, "card-body"], [1, "fs-60", "mdi", "mdi-file-outline", "card-custom-icon2", "text-primary"], [1, "mb-1", "fw-bold"], [1, "mdi", "mdi-clock", "card-custom-icon2", "text-warning", "fs-60"], [1, "mdi", "mdi-heart-outline", "card-custom-icon2", "text-success", "fs-60"], [1, "mdi", "mdi-account-multiple-outline", "card-custom-icon2", "text-secondary", "fs-60"], [1, "col-xxl-3", "col-xl-6", "col-md-12", "col-lg-6"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pt-0"], [1, "text-center"], ["id", "chart-circle-primary"], [3, "labels", "series", "chart", "plotOptions", "stroke", "colors", "fill"], [1, "mb-0", "fs-50", "fw-bold"], [1, "fs-12", "text-muted"], [1, "text-danger", "me-1"], [1, "fe", "fe-arrow-down", "ms-1"], [1, "mt-4", "mb-2", "text-muted"], [1, "mt-1", "fs-12", "text-muted"], [1, "card-header", "mb-3"], [1, "p-2"], [1, "ps-3", "fw-bold", "mb-3"], [1, "table-responsive"], [1, "table", "text-nowrap", "table-borderless", "mb-2"], [1, "w-1"], ["alt", "flag", "src", "./assets/images/flags/us_flag.jpg", 1, "country-flag"], [1, "w-3", "text-end"], [1, ""], ["alt", "flag", "src", "./assets/images/flags/china_flag.jpg", 1, "country-flag"], ["alt", "flag", "src", "./assets/images/flags/germany_flag.jpg", 1, "country-flag"], ["alt", "flag", "src", "./assets/images/flags/russia_flag.jpg", 1, "country-flag"], ["alt", "flag", "src", "./assets/images/flags/india_flag.jpg", 1, "country-flag"], [1, "card-footer", "border-top", "px-4", "py-3"], ["href", "javascript:void(0);", 1, "btn", "btn-lg", "w-100", "btn-outline-light"], [1, "col-xxl-6", "col-xl-12", "col-md-12", "col-lg-12"], [1, "col-xl-12", "col-md-12", "col-lg-12"], ["id", "myfirstchart", 1, "BarChartShadow"], [3, "series", "colors", "chart", "dataLabels", "xaxis", "legend", "plotOptions"], [1, "col-xl-8", "col-lg-12", "col-md-12"], [1, "card-options"], ["ngbDropdown", "", 1, "btn-group", "mb-0"], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", "aria-expanded", "false", "href", "javascript:void(0);", 1, "option-dots", "no-caret"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "fa", "fa-cog", "me-2"], [1, "table", "table-bordered", "text-nowrap"], ["scope", "col", 1, "wd-45p", "border-bottom-0", "py-3", "fw-bold"], ["scope", "col", 1, "border-bottom-0", "py-3", "fw-bold", "text-center"], ["alt", "flag", "src", "./assets/images/flags/us_flag.jpg", 1, "country-flag", "me-2"], [1, "fa", "fa-caret-up", "text-success"], ["alt", "flag", "src", "./assets/images/flags/uk_flag.jpg", 1, "country-flag", "me-2"], [1, "fa", "fa-caret-down", "text-danger"], ["alt", "flag", "src", "./assets/images/flags/india_flag.jpg", 1, "country-flag", "me-2"], ["alt", "flag", "src", "./assets/images/flags/canada_flag.jpg", 1, "country-flag", "me-2"], ["alt", "flag", "src", "./assets/images/flags/french_flag.jpg", 1, "country-flag", "me-2"], ["alt", "flag", "src", "./assets/images/flags/china_flag.jpg", 1, "country-flag", "me-2"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "card-body", "text-center", "mx-auto", "py-5"], [1, "overflow-hidden"], [1, "chart-container"], ["id", "canvasDoughnut", "height", "250", "width", "250", 1, "chartjs-chart", 3, "series", "chart", "labels", "legend", "colors", "dataLabels"], [1, "card-footer", "border-top", "p-4"], [1, "col"], [1, "text-muted", "d-flex"], [1, "chart-label", "bg-success"], [1, "chart-label", "bg-primary"], [1, "chart-label", "bg-danger"], [1, "col-xl-12", "col-lg-12", "col-md-12"], [1, "table", "card-table", "table-vcenter", "text-nowrap", "mb-0", "border"], ["scope", "col", 1, "wd-lg-10p"], ["scope", "col", 1, "wd-lg-20p", "text-center"], ["scope", "col", 1, "text-center"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-rounded", "avatar-sm"], ["src", "./assets/images/faces/1.jpg", "alt", "img"], ["src", "./assets/images/faces/2.jpg", "alt", "img"], ["src", "./assets/images/faces/3.jpg", "alt", "img"], ["src", "./assets/images/faces/4.jpg", "alt", "img"], ["src", "./assets/images/faces/5.jpg", "alt", "img"], [1, "text-nowrap", "text-center"], [1, "w-1", "text-center"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-outline-light"], [1, "fe", "fe-eye"], ["src", "./assets/images/faces/6.jpg", "alt", "img"], ["src", "./assets/images/faces/7.jpg", "alt", "img"], ["src", "./assets/images/faces/8.jpg", "alt", "img"], ["src", "./assets/images/faces/9.jpg", "alt", "img"], ["src", "./assets/images/faces/10.jpg", "alt", "img"], ["src", "./assets/images/faces/11.jpg", "alt", "img"], ["src", "./assets/images/faces/12.jpg", "alt", "img"], ["src", "./assets/images/faces/13.jpg", "alt", "img"], ["src", "./assets/images/faces/14.jpg", "alt", "img"], ["src", "./assets/images/faces/15.jpg", "alt", "img"], ["src", "./assets/images/faces/16.jpg", "alt", "img"]], template: function AnalyticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-dashboard-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "h2", 7);
        \u0275\u0275text(9, "Congratulations ");
        \u0275\u0275elementStart(10, "b");
        \u0275\u0275text(11, "John!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "small", 8);
        \u0275\u0275text(13, "You reached Page Views");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "h2", 11);
        \u0275\u0275text(17, "10M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h6", 12);
        \u0275\u0275text(19, "You have done 100% reached target today.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275element(21, "img", 14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "span", 18);
        \u0275\u0275element(26, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 20);
        \u0275\u0275text(28, "Bounce Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2", 21);
        \u0275\u0275text(30, "52.12%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "small", 22)(32, "small", 23);
        \u0275\u0275element(33, "i", 24);
        \u0275\u0275text(34, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " vs 36,144 than last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "div", 17)(39, "span", 18);
        \u0275\u0275element(40, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 20);
        \u0275\u0275text(42, "Revenue Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "h2", 21);
        \u0275\u0275text(44, "$2,206.62");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "small", 22)(46, "small", 26);
        \u0275\u0275element(47, "i", 27);
        \u0275\u0275text(48, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " vs $5,699 than last month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "div", 1)(51, "div", 15)(52, "div", 16)(53, "div", 28);
        \u0275\u0275element(54, "i", 29);
        \u0275\u0275elementStart(55, "p", 20);
        \u0275\u0275text(56, "Page Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "h2", 30);
        \u0275\u0275text(58, "234k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 22)(60, "span", 26);
        \u0275\u0275element(61, "i", 27);
        \u0275\u0275text(62, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " than last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 15)(65, "div", 16)(66, "div", 28);
        \u0275\u0275element(67, "i", 31);
        \u0275\u0275elementStart(68, "p", 20);
        \u0275\u0275text(69, "Time On Site");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "h2", 30);
        \u0275\u0275text(71, "12m 3s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span", 22)(73, "span", 23);
        \u0275\u0275element(74, "i", 24);
        \u0275\u0275text(75, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " than last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 15)(78, "div", 16)(79, "div", 28);
        \u0275\u0275element(80, "i", 32);
        \u0275\u0275elementStart(81, "p", 20);
        \u0275\u0275text(82, "Impressions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "h2", 30);
        \u0275\u0275text(84, "168");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span", 22)(86, "span", 23);
        \u0275\u0275element(87, "i", 24);
        \u0275\u0275text(88, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " than last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "div", 15)(91, "div", 16)(92, "div", 28);
        \u0275\u0275element(93, "i", 33);
        \u0275\u0275elementStart(94, "p", 20);
        \u0275\u0275text(95, "Total Followers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "h2", 30);
        \u0275\u0275text(97, "3456k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "span", 22)(99, "span", 23);
        \u0275\u0275element(100, "i", 24);
        \u0275\u0275text(101, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " than last month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(103, "div", 1)(104, "div", 34)(105, "div", 16)(106, "div", 35)(107, "h3", 36);
        \u0275\u0275text(108, "Follower Growth");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 37)(110, "div", 38)(111, "div", 39);
        \u0275\u0275element(112, "apx-chart", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "h2", 41);
        \u0275\u0275text(114, "65,268");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "span", 42)(116, "span", 43);
        \u0275\u0275element(117, "i", 44);
        \u0275\u0275text(118, "0.82%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " since last week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "p", 45);
        \u0275\u0275text(121, "It is a long established fact that a ayout. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "small", 46);
        \u0275\u0275text(123, "Updated 20 minutes ago");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(124, "div", 34)(125, "div", 16)(126, "div", 47)(127, "h3", 36);
        \u0275\u0275text(128, "Country Wise Page Views");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 48)(130, "h5", 49);
        \u0275\u0275text(131, "This Week Page Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 50)(133, "table", 51)(134, "tbody")(135, "tr")(136, "td", 52);
        \u0275\u0275element(137, "img", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "td");
        \u0275\u0275text(139, "USA ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "td", 54)(141, "span", 55);
        \u0275\u0275text(142, "6425");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "tr")(144, "td", 52);
        \u0275\u0275element(145, "img", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "td");
        \u0275\u0275text(147, "China ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "td", 54)(149, "span", 55);
        \u0275\u0275text(150, "5582");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "tr")(152, "td", 52);
        \u0275\u0275element(153, "img", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "td");
        \u0275\u0275text(155, "Germany ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "td", 54)(157, "span", 55);
        \u0275\u0275text(158, "4587");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "tr")(160, "td", 52);
        \u0275\u0275element(161, "img", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "td");
        \u0275\u0275text(163, "Russia ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "td", 54)(165, "span", 55);
        \u0275\u0275text(166, "2520");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "tr")(168, "td", 52);
        \u0275\u0275element(169, "img", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "td");
        \u0275\u0275text(171, "India ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "td", 54)(173, "span", 55);
        \u0275\u0275text(174, "6429");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(175, "div", 60)(176, "a", 61);
        \u0275\u0275text(177, "View All");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(178, "div", 62)(179, "div", 16)(180, "div", 1)(181, "div", 63)(182, "div", 35)(183, "h4", 36);
        \u0275\u0275text(184, "Website Overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "div", 17)(186, "div", 64);
        \u0275\u0275element(187, "apx-chart", 65);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(188, "div", 1)(189, "div", 66)(190, "div", 16)(191, "div", 35)(192, "h3", 36);
        \u0275\u0275text(193, "Country Traffic Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 67)(195, "div", 68)(196, "a", 69);
        \u0275\u0275element(197, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div", 71)(199, "a", 72);
        \u0275\u0275text(200, " Download Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "a", 72);
        \u0275\u0275text(202, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "a", 72);
        \u0275\u0275text(204, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "a", 72);
        \u0275\u0275text(206, "Yearly");
        \u0275\u0275elementEnd();
        \u0275\u0275element(207, "div", 73);
        \u0275\u0275elementStart(208, "a", 72);
        \u0275\u0275element(209, "i", 74);
        \u0275\u0275text(210, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(211, "div", 28)(212, "div", 50)(213, "table", 75)(214, "thead")(215, "tr")(216, "th", 76);
        \u0275\u0275text(217, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "th", 77);
        \u0275\u0275text(219, "Total Traffic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "th", 77);
        \u0275\u0275text(221, "Entrances");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "th", 77);
        \u0275\u0275text(223, "Bounce Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "th", 77);
        \u0275\u0275text(225, "Exits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(226, "tbody")(227, "tr")(228, "td");
        \u0275\u0275element(229, "img", 78);
        \u0275\u0275elementStart(230, "strong");
        \u0275\u0275text(231, "United States");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "td", 38)(233, "strong");
        \u0275\u0275text(234, "4534");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "td", 38)(236, "strong");
        \u0275\u0275text(237, "134");
        \u0275\u0275elementEnd();
        \u0275\u0275text(238, " (1.51%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "td", 38);
        \u0275\u0275text(240, "33.58% ");
        \u0275\u0275element(241, "i", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "td", 38);
        \u0275\u0275text(243, "15.47% ");
        \u0275\u0275element(244, "i", 79);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "tr")(246, "td");
        \u0275\u0275element(247, "img", 80);
        \u0275\u0275elementStart(248, "strong");
        \u0275\u0275text(249, "United Kingdom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(250, "td", 38)(251, "strong");
        \u0275\u0275text(252, "5463");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "td", 38)(254, "strong");
        \u0275\u0275text(255, "290");
        \u0275\u0275elementEnd();
        \u0275\u0275text(256, " (3.30%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "td", 38);
        \u0275\u0275text(258, "9.22% ");
        \u0275\u0275element(259, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(260, "td", 38);
        \u0275\u0275text(261, "7.99% ");
        \u0275\u0275element(262, "i", 79);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "tr")(264, "td");
        \u0275\u0275element(265, "img", 82);
        \u0275\u0275elementStart(266, "strong");
        \u0275\u0275text(267, "India");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(268, "td", 38)(269, "strong");
        \u0275\u0275text(270, "6534");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(271, "td", 38)(272, "strong");
        \u0275\u0275text(273, "250");
        \u0275\u0275elementEnd();
        \u0275\u0275text(274, " (3.00%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "td", 38);
        \u0275\u0275text(276, "20.75% ");
        \u0275\u0275element(277, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "td", 38);
        \u0275\u0275text(279, "2.40% ");
        \u0275\u0275element(280, "i", 81);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(281, "tr")(282, "td");
        \u0275\u0275element(283, "img", 83);
        \u0275\u0275elementStart(284, "strong");
        \u0275\u0275text(285, "Canada");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(286, "td", 38)(287, "strong");
        \u0275\u0275text(288, "4532");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(289, "td", 38)(290, "strong");
        \u0275\u0275text(291, "216");
        \u0275\u0275elementEnd();
        \u0275\u0275text(292, " (2.79%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "td", 38);
        \u0275\u0275text(294, "32.07% ");
        \u0275\u0275element(295, "i", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "td", 38);
        \u0275\u0275text(297, "15.09% ");
        \u0275\u0275element(298, "i", 81);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(299, "tr")(300, "td");
        \u0275\u0275element(301, "img", 84);
        \u0275\u0275elementStart(302, "strong");
        \u0275\u0275text(303, "France");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "td", 38)(305, "strong");
        \u0275\u0275text(306, "5643");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "td", 38)(308, "strong");
        \u0275\u0275text(309, "216");
        \u0275\u0275elementEnd();
        \u0275\u0275text(310, " (2.79%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "td", 38);
        \u0275\u0275text(312, "32.07% ");
        \u0275\u0275element(313, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "td", 38);
        \u0275\u0275text(315, "15.09% ");
        \u0275\u0275element(316, "i", 79);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(317, "tr")(318, "td");
        \u0275\u0275element(319, "img", 85);
        \u0275\u0275elementStart(320, "strong");
        \u0275\u0275text(321, "China");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(322, "td", 38)(323, "strong");
        \u0275\u0275text(324, "6534");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(325, "td", 38)(326, "strong");
        \u0275\u0275text(327, "216");
        \u0275\u0275elementEnd();
        \u0275\u0275text(328, " (2.79%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "td", 38);
        \u0275\u0275text(330, "32.07% ");
        \u0275\u0275element(331, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "td", 38);
        \u0275\u0275text(333, "15.09% ");
        \u0275\u0275element(334, "i", 79);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(335, "div", 86)(336, "div", 16)(337, "div", 35)(338, "h3", 36);
        \u0275\u0275text(339, " Website Visitors");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(340, "div", 87)(341, "div", 88)(342, "div", 89);
        \u0275\u0275element(343, "apx-chart", 90);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(344, "div", 91)(345, "div", 1)(346, "div", 92)(347, "div", 93);
        \u0275\u0275element(348, "div", 94);
        \u0275\u0275text(349, " Local");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(350, "div", 92)(351, "div", 93);
        \u0275\u0275element(352, "div", 95);
        \u0275\u0275text(353, " Domestic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(354, "div", 92)(355, "div", 93);
        \u0275\u0275element(356, "div", 96);
        \u0275\u0275text(357, " International ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(358, "div", 1)(359, "div", 97)(360, "div", 16)(361, "div", 35)(362, "h3", 36);
        \u0275\u0275text(363, "Most Visited Pages ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(364, "div", 67)(365, "div", 68)(366, "a", 69);
        \u0275\u0275element(367, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(368, "div", 71)(369, "a", 72);
        \u0275\u0275text(370, " Download Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "a", 72);
        \u0275\u0275text(372, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(373, "a", 72);
        \u0275\u0275text(374, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(375, "a", 72);
        \u0275\u0275text(376, "Yearly");
        \u0275\u0275elementEnd();
        \u0275\u0275element(377, "div", 73);
        \u0275\u0275elementStart(378, "a", 72);
        \u0275\u0275element(379, "i", 74);
        \u0275\u0275text(380, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(381, "div", 28)(382, "div", 55)(383, "div", 50)(384, "table", 98)(385, "thead")(386, "tr")(387, "th", 99);
        \u0275\u0275text(388, "Page Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "th", 100);
        \u0275\u0275text(390, "Browsers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "th", 100);
        \u0275\u0275text(392, "Visitors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "th", 100);
        \u0275\u0275text(394, "Unique Page Visitors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "th", 100);
        \u0275\u0275text(396, "Bounce Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "th", 101);
        \u0275\u0275text(398, "Page Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(399, "th", 101);
        \u0275\u0275text(400, "Preview");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(401, "tbody")(402, "tr")(403, "td");
        \u0275\u0275text(404, "home/index.html");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(405, "td", 38)(406, "div", 102)(407, "span", 103);
        \u0275\u0275element(408, "img", 104);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "span", 103);
        \u0275\u0275element(410, "img", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "span", 103);
        \u0275\u0275element(412, "img", 106);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(413, "span", 103);
        \u0275\u0275element(414, "img", 107);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(415, "span", 103);
        \u0275\u0275element(416, "img", 108);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(417, "td", 38);
        \u0275\u0275text(418, "3456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(419, "td", 38);
        \u0275\u0275text(420, "556");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "td", 38);
        \u0275\u0275text(422, "13.6 ");
        \u0275\u0275element(423, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(424, "td", 109);
        \u0275\u0275text(425, "July 13, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(426, "td", 110)(427, "a", 111);
        \u0275\u0275element(428, "i", 112);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(429, "tr")(430, "td");
        \u0275\u0275text(431, "Store/shop/cart.html");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(432, "td", 38)(433, "div", 102)(434, "span", 103);
        \u0275\u0275element(435, "img", 113);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(436, "span", 103);
        \u0275\u0275element(437, "img", 114);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(438, "span", 103);
        \u0275\u0275element(439, "img", 115);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(440, "span", 103);
        \u0275\u0275element(441, "img", 116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(442, "span", 103);
        \u0275\u0275element(443, "img", 117);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(444, "td", 38);
        \u0275\u0275text(445, "3456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(446, "td", 38);
        \u0275\u0275text(447, "556");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(448, "td", 38);
        \u0275\u0275text(449, "13.6 ");
        \u0275\u0275element(450, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(451, "td", 109);
        \u0275\u0275text(452, "June 15, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(453, "td", 110)(454, "a", 111);
        \u0275\u0275element(455, "i", 112);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(456, "tr")(457, "td");
        \u0275\u0275text(458, "Store/shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(459, "td", 38)(460, "div", 102)(461, "span", 103);
        \u0275\u0275element(462, "img", 118);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(463, "span", 103);
        \u0275\u0275element(464, "img", 119);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(465, "span", 103);
        \u0275\u0275element(466, "img", 120);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "span", 103);
        \u0275\u0275element(468, "img", 121);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "span", 103);
        \u0275\u0275element(470, "img", 122);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(471, "td", 38);
        \u0275\u0275text(472, "3456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(473, "td", 38);
        \u0275\u0275text(474, "556");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(475, "td", 38);
        \u0275\u0275text(476, "13.6 ");
        \u0275\u0275element(477, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(478, "td", 109);
        \u0275\u0275text(479, "July 8, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(480, "td", 110)(481, "a", 111);
        \u0275\u0275element(482, "i", 112);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(483, "tr")(484, "td");
        \u0275\u0275text(485, "home/blog.html");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(486, "td", 38)(487, "div", 102)(488, "span", 103);
        \u0275\u0275element(489, "img", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(490, "span", 103);
        \u0275\u0275element(491, "img", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(492, "span", 103);
        \u0275\u0275element(493, "img", 116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(494, "span", 103);
        \u0275\u0275element(495, "img", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(496, "span", 103);
        \u0275\u0275element(497, "img", 107);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(498, "td", 38);
        \u0275\u0275text(499, "3456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(500, "td", 38);
        \u0275\u0275text(501, "556");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(502, "td", 38);
        \u0275\u0275text(503, "13.6 ");
        \u0275\u0275element(504, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(505, "td", 109);
        \u0275\u0275text(506, "June 28, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(507, "td", 110)(508, "a", 111);
        \u0275\u0275element(509, "i", 112);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(510, "tr")(511, "td");
        \u0275\u0275text(512, "home/blog/blog-overview.html");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(513, "td", 38)(514, "div", 102)(515, "span", 103);
        \u0275\u0275element(516, "img", 119);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(517, "span", 103);
        \u0275\u0275element(518, "img", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(519, "span", 103);
        \u0275\u0275element(520, "img", 116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(521, "span", 103);
        \u0275\u0275element(522, "img", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(523, "span", 103);
        \u0275\u0275element(524, "img", 107);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(525, "td", 38);
        \u0275\u0275text(526, "3456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(527, "td", 38);
        \u0275\u0275text(528, "556");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(529, "td", 38);
        \u0275\u0275text(530, "13.6 ");
        \u0275\u0275element(531, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(532, "td", 109);
        \u0275\u0275text(533, "July 2, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(534, "td", 110)(535, "a", 111);
        \u0275\u0275element(536, "i", 112);
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(112);
        \u0275\u0275property("labels", ctx.chartOptions.labels)("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill);
        \u0275\u0275advance(75);
        \u0275\u0275property("series", ctx.statusData.series)("colors", ctx.statusData.colors)("chart", ctx.statusData.chart)("dataLabels", ctx.statusData.dataLabels)("xaxis", ctx.statusData.xaxis)("legend", ctx.statusData.legend)("plotOptions", ctx.statusData.plotOptions);
        \u0275\u0275advance(156);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("labels", ctx.chartOptions2.labels)("legend", ctx.chartOptions2.legend)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels);
      }
    }, dependencies: [RouterModule, SharedModule, DashboardHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgCircleProgressModule, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src\\app\\components\\dashboards\\analytics\\analytics.component.ts", lineNumber: 37 });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=analytics.component-JG7I4BUV.js.map
