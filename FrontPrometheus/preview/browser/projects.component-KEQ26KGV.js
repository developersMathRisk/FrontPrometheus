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
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
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

// src/app/components/dashboards/projects/projects.component.ts
var _c0 = ["chart"];
var ProjectsComponent = class _ProjectsComponent {
  constructor() {
    this.PieChartData = PieChartData;
    this.PieChartOptions = PieChartOptions;
    this.PieChartType = PieChartType;
    this.DoughnutChartType = DoughnutChartType;
    this.chartOptions = {
      series: [
        {
          data: [13, 26, 20, 93, 61, 140, 85, 96]
        }
      ],
      chart: {
        height: 105,
        type: "area",
        fontFamily: "Roboto, Arial, sans-serif",
        foreColor: "#5d6162",
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      },
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      title: {
        text: void 0
      },
      grid: {
        borderColor: "transparent"
      },
      xaxis: {
        crosshairs: {
          show: false
        }
      },
      colors: ["rgb(68,84,195)"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 60]
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Project Budget",
          data: [
            7635,
            5465,
            6754,
            5432,
            5435,
            6545,
            4453,
            3425,
            7654,
            3245,
            4532,
            5643
          ]
        },
        {
          name: "Expenses",
          data: [
            5435,
            3452,
            5432,
            3452,
            2564,
            3456,
            3123,
            2435,
            5463,
            1245,
            3245,
            4534
          ]
        }
      ],
      chart: {
        height: 325,
        type: "line",
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: void 0,
          top: 5,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        enabled: false,
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold"
      },
      stroke: {
        curve: "smooth",
        width: "3"
      },
      grid: {
        borderColor: "rgba(67, 87, 133, .09)"
      },
      colors: ["rgb(68,84,195)", "rgb(247,45,102)"],
      yaxis: {
        title: {
          style: {
            color: "#adb5be",
            fontSize: "14px",
            fontFamily: "poppins, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label"
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
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisBorder: {
          show: true,
          color: "rgba(67, 87, 133, .09)",
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(67, 87, 133, .09)",
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          rotate: -90
        }
      }
    };
    this.chartOptions2 = {
      series: [68, 55, 45],
      chart: {
        height: 270,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"]
    };
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 544, vars: 27, consts: [["title", "Projects Dashboard"], [1, "row"], [1, "col-xl-4", "col-md-12"], [1, "card", "expenses-card", "overflow-hidden"], [1, "card-body"], [1, "feature"], [1, "fa", "fa-university", "feature-icon"], [1, "fw-bold", "mb-0", "mt-3"], [1, "text-muted", "fs-18", "mb-0"], [1, "chart-wrapper", "mt-5"], [1, "chart-container", "pt-4"], [3, "series", "title", "chart", "labels", "xaxis", "dataLabels", "colors", "fill", "markers", "grid", "stroke"], [1, "col-xl-8", "col-md-12"], [1, "card"], [1, "col-12", "col-sm", "d-flex", "mb-4", "mb-sm-0"], [1, "mdi", "mdi-basket-fill", "fs-60", "text-success", "me-3"], [1, "mt-4"], [1, "mb-0", "fw-bold"], [1, "mdi", "mdi-basket-fill", "fs-60", "text-primary", "me-3"], [1, "col-12", "col-sm", "d-flex"], [1, "mdi", "mdi-basket-fill", "fs-60", "text-danger", "me-3"], [1, "col-xl-4", "col-lg-4", "col-md-12"], [1, "mb-1"], [1, "mb-1", "fw-bold"], [1, "mb-1", "text-muted"], [1, "text-danger"], [1, "fa", "fa-caret-down", "me-1"], [1, "text-success"], [1, "fa", "fa-caret-up", "me-1"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "card-header"], [1, "card-title"], [1, "d-flex", "ms-auto"], ["ngbDropdown", "", 1, "btn-group", "mb-0"], ["ngbDropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "latest-timeline", "latest-timeline1"], [1, "timeline", "mb-0"], [1, "mt-0", "media", "media-lg"], [1, "latest-timeline1-icon", "bg-primary"], [1, "media", "mt-0"], [1, "media-body"], ["href", "javascript:void(0);", 1, "fw-semibold", "fs-17"], [1, "badge", "bg-success", "ms-2"], [1, "mt-1", "fs-13", "mb-1"], [1, "text-muted", "fs-12", "d-block"], ["href", "javascript:void(0);", 1, "text-primary", "fs-12", "fw-bold"], [1, "latest-timeline1-icon", "bg-secondary"], [1, "badge", "bg-secondary", "ms-2"], [1, "mt-0", "media", "media-lg", "mb-0", "pb-0"], [1, "latest-timeline1-icon", "bg-success"], [1, "badge", "bg-primary", "ms-2"], [1, "col-xl-8", "col-lg-12", "col-md-12"], ["ngbDropdown", "btn-group mb-0"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-0"], ["id", "projectInvestment", 1, "h-330"], [3, "series", "chart", "xaxis", "dataLabels", "legend", "yaxis", "grid", "stroke", "colors", "title"], [1, "col-xl-4", "col-lg-5", "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-body", "mx-auto", "text-center"], [1, "chart-container2"], ["height", "260", "width", "320", "id", "Statistics", 1, "canvasDoughnut2", 3, "series", "chart", "labels", "legend", "colors", "dataLabels"], [1, "card-body", "pt-0", "border-top-0"], [1, "row", "mt-4", "no-gutters"], [1, "col"], [1, "text-muted", "mb-1", "fs-13", "d-flex"], [1, "chart-label2", "bg-primary"], [1, "chart-label2", "bg-secondary"], [1, "chart-label2", "bg-success"], [1, "col-xl-8", "col-lg-7", "col-md-12"], [1, "card-options"], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", "aria-expanded", "false", "href", "javascript:void(0);", 1, "option-dots", "no-caret"], [1, "fa", "fa-ellipsis-v"], [1, "fa", "fa-cog", "me-2"], [1, ""], [1, "table-responsive", "invoice-table-responsive"], [1, "table", "card-table", "table-vcenter", "text-nowrap", "mb-0", "border"], ["scope", "row", 1, "wd-lg-10p"], ["scope", "row", 1, "wd-lg-20p"], ["scope", "row"], [1, "fw-semibold"], [1, "text-nowrap"], [1, "badge", "bg-success", "rounded-pill"], [1, "badge", "bg-danger", "rounded-pill"], [1, "col-xl-4", "col-lg-12", "col-md-12"], [1, "d-flex", "align-items-end", "justify-content-between", "mg-b-5"], [1, "fw-bold", "mb-1"], [1, "progress", "progress-sm", "mb-4"], [1, "progress-bar", "bg-primary", 2, "width", "50%"], [1, "progress-bar", "bg-secondary", 2, "width", "60%"], [1, "progress-bar", "bg-info", 2, "width", "40%"], [1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "progress-bar", "bg-danger", 2, "width", "50%"], [1, "progress", "progress-sm", "mb-0"], [1, "progress-bar", "bg-warning", 2, "width", "90%"], ["id", "activity-scrollbar", 1, "card-body"], [1, "activity"], ["src", "./assets/images/faces/14.jpg", "alt", "", 1, "img-activity3", "border-primary"], [1, "time-activity"], [1, "item-activity"], [1, "text-muted"], ["src", "./assets/images/faces/10.jpg", "alt", "", 1, "img-activity3", "border-secondary"], ["src", "./assets/images/faces/4.jpg", "alt", "", 1, "img-activity3", "border-success"], ["src", "./assets/images/faces/8.jpg", "alt", "", 1, "img-activity3", "border-danger"], [1, "time-activity", "mb-0"], [1, "item-activity", "mb-0"], ["id", "notify-scroll", 1, "card-body"], ["src", "./assets/images/faces/4.jpg", "alt", "", 1, "img-activity3", "border-primary"], ["src", "./assets/images/faces/2.jpg", "alt", "", 1, "img-activity3", "border-secondary"], ["src", "./assets/images/faces/1.jpg", "alt", "", 1, "img-activity3", "border-success"], ["src", "./assets/images/faces/3.jpg", "alt", "", 1, "img-activity3", "border-danger"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-dashboard-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275elementStart(7, "h1", 7);
        \u0275\u0275text(8, "$12,345.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10, "Expenses This Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "apx-chart", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 1)(18, "div", 14);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275elementStart(20, "div", 16)(21, "h6");
        \u0275\u0275text(22, "Total Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h3", 17);
        \u0275\u0275text(24, "2245");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275element(26, "i", 18);
        \u0275\u0275elementStart(27, "div", 16)(28, "h6");
        \u0275\u0275text(29, "Recent Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h3", 17);
        \u0275\u0275text(31, "45%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 19);
        \u0275\u0275element(33, "i", 20);
        \u0275\u0275elementStart(34, "div", 16)(35, "h6");
        \u0275\u0275text(36, "Cancel Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h3", 17);
        \u0275\u0275text(38, "56%");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(39, "div", 1)(40, "div", 21)(41, "div", 13)(42, "div", 4)(43, "p", 22);
        \u0275\u0275text(44, "Total Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h2", 23);
        \u0275\u0275text(46, "245");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 24)(48, "span", 25);
        \u0275\u0275element(49, "i", 26);
        \u0275\u0275text(50, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 21)(53, "div", 13)(54, "div", 4)(55, "p", 22);
        \u0275\u0275text(56, "Credited Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "h2", 23);
        \u0275\u0275text(58, "$53k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 24)(60, "span", 27);
        \u0275\u0275element(61, "i", 28);
        \u0275\u0275text(62, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 21)(65, "div", 13)(66, "div", 4)(67, "p", 22);
        \u0275\u0275text(68, "Pending Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "h2", 23);
        \u0275\u0275text(70, "$2345");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span", 24)(72, "span", 27);
        \u0275\u0275element(73, "i", 28);
        \u0275\u0275text(74, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " last month");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(76, "div", 1)(77, "div", 29)(78, "div", 13)(79, "div", 30)(80, "h3", 31);
        \u0275\u0275text(81, "Project Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 32)(83, "div", 33)(84, "button", 34);
        \u0275\u0275text(85, "This week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 35)(87, "a", 36);
        \u0275\u0275text(88, "Next Week");
        \u0275\u0275elementEnd();
        \u0275\u0275element(89, "div", 37);
        \u0275\u0275elementStart(90, "a", 36);
        \u0275\u0275text(91, " Last Month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(92, "div", 4)(93, "div", 38)(94, "ul", 39)(95, "li", 40)(96, "span", 41);
        \u0275\u0275text(97, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 42)(99, "div", 43)(100, "h6", 22)(101, "a", 44);
        \u0275\u0275text(102, "Angular Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "span", 45);
        \u0275\u0275text(104, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "p", 46)(106, "b");
        \u0275\u0275text(107, "Client:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, " Hoyt Righter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "span", 47);
        \u0275\u0275text(110, "12.00 am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "a", 48);
        \u0275\u0275text(112, "View Details");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "li", 40)(114, "div", 42)(115, "span", 49);
        \u0275\u0275text(116, "11");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 43)(118, "h6", 22)(119, "a", 44);
        \u0275\u0275text(120, "Html Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span", 50);
        \u0275\u0275text(122, "Hold");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "p", 46)(124, "b");
        \u0275\u0275text(125, "Client:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " Riva Digangi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "span", 47);
        \u0275\u0275text(128, "11.00 am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "a", 48);
        \u0275\u0275text(130, "View Details");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(131, "li", 51)(132, "div", 42)(133, "span", 52);
        \u0275\u0275text(134, "12");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 43)(136, "h6", 22)(137, "a", 44);
        \u0275\u0275text(138, "Php Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "span", 53);
        \u0275\u0275text(140, "Running");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "p", 46)(142, "b");
        \u0275\u0275text(143, "Client:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(144, " Craig Dollard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "span", 47);
        \u0275\u0275text(146, "10.00am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "a", 48);
        \u0275\u0275text(148, "View Details");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(149, "div", 54)(150, "div", 13)(151, "div", 30)(152, "h3", 31);
        \u0275\u0275text(153, "Project Investment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 32)(155, "div", 55)(156, "button", 34);
        \u0275\u0275text(157, "This Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 56)(159, "a", 36);
        \u0275\u0275text(160, "last Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "a", 36);
        \u0275\u0275text(162, "2018");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "a", 36);
        \u0275\u0275text(164, "2017");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(165, "div", 4)(166, "div", 57);
        \u0275\u0275element(167, "apx-chart", 58);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(168, "div", 59)(169, "div", 60)(170, "div", 30)(171, "h3", 31);
        \u0275\u0275text(172, "Project Statistics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 61)(174, "div", 62);
        \u0275\u0275element(175, "apx-chart", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "div", 64)(177, "div", 65)(178, "div", 66)(179, "div", 67);
        \u0275\u0275element(180, "div", 68);
        \u0275\u0275text(181, " Running");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 66)(183, "div", 67);
        \u0275\u0275element(184, "div", 69);
        \u0275\u0275text(185, " Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 66)(187, "div", 67);
        \u0275\u0275element(188, "div", 70);
        \u0275\u0275text(189, " Completed");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(190, "div", 71)(191, "div", 13)(192, "div", 30)(193, "h3", 31);
        \u0275\u0275text(194, "Complete Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "div", 72)(196, "div", 33)(197, "a", 73);
        \u0275\u0275element(198, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "div", 35)(200, "a", 36);
        \u0275\u0275text(201, " Download Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "a", 36);
        \u0275\u0275text(203, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "a", 36);
        \u0275\u0275text(205, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "a", 36);
        \u0275\u0275text(207, "Yearly");
        \u0275\u0275elementEnd();
        \u0275\u0275element(208, "div", 37);
        \u0275\u0275elementStart(209, "a", 36);
        \u0275\u0275element(210, "i", 75);
        \u0275\u0275text(211, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(212, "div", 4)(213, "div", 76)(214, "div", 77)(215, "table", 78)(216, "thead")(217, "tr")(218, "th", 79);
        \u0275\u0275text(219, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "th", 80);
        \u0275\u0275text(221, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "th", 80);
        \u0275\u0275text(223, "Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "th", 80);
        \u0275\u0275text(225, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "th", 80);
        \u0275\u0275text(227, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "th", 81);
        \u0275\u0275text(229, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(230, "tbody")(231, "tr")(232, "td", 82);
        \u0275\u0275text(233, "Hoyt Righter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "td", 83);
        \u0275\u0275text(235, "Jan 13, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "td");
        \u0275\u0275text(237, "INV-1432");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "td");
        \u0275\u0275text(239, "$34,980");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(240, "td")(241, "span", 84);
        \u0275\u0275text(242, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "td")(244, "div", 33)(245, "button", 34);
        \u0275\u0275text(246, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "div", 35)(248, "a", 36);
        \u0275\u0275text(249, "Copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "a", 36);
        \u0275\u0275text(251, "Send Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "a", 36);
        \u0275\u0275text(253, "Before Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "a", 36);
        \u0275\u0275text(255, "Print Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "a", 36);
        \u0275\u0275text(257, "Download Print");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(258, "tr")(259, "td", 82);
        \u0275\u0275text(260, "Melvina Harn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "td", 83);
        \u0275\u0275text(262, "Feb 12, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "td");
        \u0275\u0275text(264, "INV-5467");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "td");
        \u0275\u0275text(266, "$35,768");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(267, "td")(268, "span", 84);
        \u0275\u0275text(269, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "td")(271, "div", 33)(272, "button", 34);
        \u0275\u0275text(273, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "div", 35)(275, "a", 36);
        \u0275\u0275text(276, "Copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "a", 36);
        \u0275\u0275text(278, "Send Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "a", 36);
        \u0275\u0275text(280, "Before Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "a", 36);
        \u0275\u0275text(282, "Print Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "a", 36);
        \u0275\u0275text(284, "Download Print");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(285, "tr")(286, "td", 82);
        \u0275\u0275text(287, "Riva Digangi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "td", 83);
        \u0275\u0275text(289, "Mar 23, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "td");
        \u0275\u0275text(291, "INV-6543");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(292, "td");
        \u0275\u0275text(293, "$13,456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "td")(295, "span", 84);
        \u0275\u0275text(296, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "td")(298, "div", 33)(299, "button", 34);
        \u0275\u0275text(300, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "div", 35)(302, "a", 36);
        \u0275\u0275text(303, "Copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(304, "a", 36);
        \u0275\u0275text(305, "Send Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(306, "a", 36);
        \u0275\u0275text(307, "Before Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(308, "a", 36);
        \u0275\u0275text(309, "Print Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "a", 36);
        \u0275\u0275text(311, "Download Print");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(312, "tr")(313, "td", 82);
        \u0275\u0275text(314, "Craig Dollard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(315, "td", 83);
        \u0275\u0275text(316, "Apr 11, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "td");
        \u0275\u0275text(318, "INV-3245");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(319, "td");
        \u0275\u0275text(320, "$25,678");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "td")(322, "span", 85);
        \u0275\u0275text(323, "Due");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(324, "td")(325, "div", 33)(326, "button", 34);
        \u0275\u0275text(327, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(328, "div", 35)(329, "a", 36);
        \u0275\u0275text(330, "Copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(331, "a", 36);
        \u0275\u0275text(332, "Send Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "a", 36);
        \u0275\u0275text(334, "Before Due");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "a", 36);
        \u0275\u0275text(336, "Print Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "a", 36);
        \u0275\u0275text(338, "Download Print");
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(339, "div", 86)(340, "div", 13)(341, "div", 30)(342, "h3", 31);
        \u0275\u0275text(343, "Project Payment Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(344, "div", 4)(345, "div", 87)(346, "h6", 76);
        \u0275\u0275text(347, "Angular Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "h6", 88);
        \u0275\u0275text(349, "50%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(350, "div", 89);
        \u0275\u0275element(351, "div", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(352, "div", 87)(353, "h6", 76);
        \u0275\u0275text(354, "Php Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(355, "h6", 88);
        \u0275\u0275text(356, "60%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(357, "div", 89);
        \u0275\u0275element(358, "div", 91);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(359, "div", 87)(360, "h6", 76);
        \u0275\u0275text(361, "Ecommerce Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(362, "h6", 88);
        \u0275\u0275text(363, "40%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(364, "div", 89);
        \u0275\u0275element(365, "div", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(366, "div", 87)(367, "h6", 76);
        \u0275\u0275text(368, "Html Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "h6", 88);
        \u0275\u0275text(370, "100%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(371, "div", 89);
        \u0275\u0275element(372, "div", 93);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(373, "div", 87)(374, "h6", 76);
        \u0275\u0275text(375, "Java Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "h6", 88);
        \u0275\u0275text(377, "50%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(378, "div", 89);
        \u0275\u0275element(379, "div", 94);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(380, "div", 87)(381, "h6", 76);
        \u0275\u0275text(382, "Wordpress Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(383, "h6", 88);
        \u0275\u0275text(384, "90%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(385, "div", 95);
        \u0275\u0275element(386, "div", 96);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(387, "div", 29)(388, "div", 60)(389, "div", 30)(390, "h3", 31);
        \u0275\u0275text(391, "Project Review Activity");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(392, "overlay-scrollbars", 97)(393, "div", 98);
        \u0275\u0275element(394, "img", 99);
        \u0275\u0275elementStart(395, "div", 100)(396, "div", 101)(397, "p", 17);
        \u0275\u0275text(398, "Adam Berry ");
        \u0275\u0275elementStart(399, "span", 102);
        \u0275\u0275text(400, "Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(401, " AngularJS Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(402, "small", 102);
        \u0275\u0275text(403, "30 mins ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(404, "img", 103);
        \u0275\u0275elementStart(405, "div", 100)(406, "div", 101)(407, "p", 17);
        \u0275\u0275text(408, "Irene Hunter ");
        \u0275\u0275elementStart(409, "span", 102);
        \u0275\u0275text(410, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(411, "Free HTML Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(412, "small", 102);
        \u0275\u0275text(413, "1 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(414, "img", 104);
        \u0275\u0275elementStart(415, "div", 100)(416, "div", 101)(417, "p", 17);
        \u0275\u0275text(418, "John Payne");
        \u0275\u0275elementStart(419, "span", 102);
        \u0275\u0275text(420, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(421, "Free PSD Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(422, "small", 102);
        \u0275\u0275text(423, "3 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(424, "img", 105);
        \u0275\u0275elementStart(425, "div", 100)(426, "div", 101)(427, "p", 17);
        \u0275\u0275text(428, "Julia Hardacre");
        \u0275\u0275elementStart(429, "span", 102);
        \u0275\u0275text(430, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(431, "Free UI Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(432, "small", 102);
        \u0275\u0275text(433, "5 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(434, "img", 99);
        \u0275\u0275elementStart(435, "div", 100)(436, "div", 101)(437, "p", 17);
        \u0275\u0275text(438, "Adam Berry ");
        \u0275\u0275elementStart(439, "span", 102);
        \u0275\u0275text(440, "Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(441, " AngularJS Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(442, "small", 102);
        \u0275\u0275text(443, "30 mins ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(444, "img", 103);
        \u0275\u0275elementStart(445, "div", 100)(446, "div", 101)(447, "p", 17);
        \u0275\u0275text(448, "Irene Hunter ");
        \u0275\u0275elementStart(449, "span", 102);
        \u0275\u0275text(450, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(451, "Free HTML Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(452, "small", 102);
        \u0275\u0275text(453, "1 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(454, "img", 104);
        \u0275\u0275elementStart(455, "div", 100)(456, "div", 101)(457, "p", 17);
        \u0275\u0275text(458, "John Payne");
        \u0275\u0275elementStart(459, "span", 102);
        \u0275\u0275text(460, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(461, "Free PSD Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(462, "small", 102);
        \u0275\u0275text(463, "3 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(464, "img", 105);
        \u0275\u0275elementStart(465, "div", 106)(466, "div", 107)(467, "p", 17);
        \u0275\u0275text(468, "Julia Hardacre");
        \u0275\u0275elementStart(469, "span", 102);
        \u0275\u0275text(470, " Add a new projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(471, "Free UI Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(472, "small", 102);
        \u0275\u0275text(473, "5 days ago");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(474, "div", 29)(475, "div", 60)(476, "div", 30)(477, "h3", 31);
        \u0275\u0275text(478, "Email Notification");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(479, "overlay-scrollbars", 108)(480, "div", 98);
        \u0275\u0275element(481, "img", 109);
        \u0275\u0275elementStart(482, "div", 100)(483, "div", 101)(484, "p", 17);
        \u0275\u0275text(485, "New Project ");
        \u0275\u0275elementStart(486, "span", 102);
        \u0275\u0275text(487, "Issue Fixed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(488, "small", 102);
        \u0275\u0275text(489, "30 mins ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(490, "img", 110);
        \u0275\u0275elementStart(491, "div", 100)(492, "div", 101)(493, "p", 17);
        \u0275\u0275text(494, "Wordpress Project");
        \u0275\u0275elementStart(495, "span", 102);
        \u0275\u0275text(496, " New theme updated ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(497, "small", 102);
        \u0275\u0275text(498, "1 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(499, "img", 111);
        \u0275\u0275elementStart(500, "div", 100)(501, "div", 101)(502, "p", 17);
        \u0275\u0275text(503, "E-Commerce");
        \u0275\u0275elementStart(504, "span", 102);
        \u0275\u0275text(505, "Plugin Issue Fixed and Updated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(506, "small", 102);
        \u0275\u0275text(507, "3 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(508, "img", 112);
        \u0275\u0275elementStart(509, "div", 100)(510, "div", 101)(511, "p", 17);
        \u0275\u0275text(512, "New Theme");
        \u0275\u0275elementStart(513, "span", 102);
        \u0275\u0275text(514, " Updated in Site");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(515, "small", 102);
        \u0275\u0275text(516, "5 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(517, "img", 109);
        \u0275\u0275elementStart(518, "div", 100)(519, "div", 101)(520, "p", 17);
        \u0275\u0275text(521, "New Project ");
        \u0275\u0275elementStart(522, "span", 102);
        \u0275\u0275text(523, "Issue Fixed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(524, "small", 102);
        \u0275\u0275text(525, "30 mins ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(526, "img", 110);
        \u0275\u0275elementStart(527, "div", 100)(528, "div", 101)(529, "p", 17);
        \u0275\u0275text(530, "Wordpress Project");
        \u0275\u0275elementStart(531, "span", 102);
        \u0275\u0275text(532, " New theme updated ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(533, "small", 102);
        \u0275\u0275text(534, "1 days ago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(535, "img", 111);
        \u0275\u0275elementStart(536, "div", 100)(537, "div", 101)(538, "p", 17);
        \u0275\u0275text(539, "E-Commerce");
        \u0275\u0275elementStart(540, "span", 102);
        \u0275\u0275text(541, "Plugin Issue Fixed and Updated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(542, "small", 102);
        \u0275\u0275text(543, "3 days ago");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions.series)("title", ctx.chartOptions.title)("chart", ctx.chartOptions.chart)("labels", ctx.chartOptions.labels)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill)("markers", ctx.chartOptions.markers)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke);
        \u0275\u0275advance(154);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("xaxis", ctx.chartOptions1.xaxis)("dataLabels", ctx.chartOptions1.dataLabels)("legend", ctx.chartOptions1.legend)("yaxis", ctx.chartOptions1.yaxis)("grid", ctx.chartOptions1.grid)("stroke", ctx.chartOptions1.stroke)("colors", ctx.chartOptions1.colors)("title", ctx.chartOptions1.title);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("labels", ctx.chartOptions2.labels)("legend", ctx.chartOptions2.legend)("colors", ctx.chartOptions2.colors)("dataLabels", ctx.chartOptions2.dataLabels);
      }
    }, dependencies: [RouterModule, SharedModule, DashboardHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgApexchartsModule, ChartComponent, OverlayscrollbarsModule, OverlayScrollbarsComponent], styles: ["\n\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\components\\dashboards\\projects\\projects.component.ts", lineNumber: 17 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=projects.component-KEQ26KGV.js.map
