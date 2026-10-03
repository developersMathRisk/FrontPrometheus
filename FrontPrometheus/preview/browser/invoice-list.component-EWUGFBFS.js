import {
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  PageHeaderComponent,
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
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  interval,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/invoice/invoice-list/invoice-list.component.ts
var _c0 = ["chart"];
var _c1 = () => ["/pages/invoice/create-invoice"];
var _c2 = () => ["/pages/invoice/invoice-details/invoice-01"];
var DATA = [
  {
    img: "./assets/images/faces/11.jpg",
    name: "Json Taylor",
    mail: "jsontaylor2416@gmail.com",
    id: "#SPK12032901",
    issueDate: "25,Nov 2022",
    price: "$212.45",
    bg: "success-transparent",
    text: "success",
    status: "Paid",
    dueDate: "25,Dec 2022"
  },
  {
    img: "./assets/images/faces/7.jpg",
    name: "Suzika Stallone",
    mail: "suzikastallone3214@gmail.com",
    id: "#SPK12032912",
    issueDate: "13,Nov 2022",
    price: "$512.99",
    bg: "warning-transparent",
    text: "warning",
    status: "Pending",
    dueDate: "13,Dec 2022"
  },
  {
    img: "./assets/images/faces/15.jpg",
    name: "Roman Killon",
    mail: "romankillon143@gmail.com",
    id: "#SPK12032945",
    issueDate: "30,Nov 2022",
    price: "$2199.49",
    bg: "danger-transparent",
    text: "danger",
    status: "Overdue",
    dueDate: "30,Dec 2022"
  },
  {
    img: "./assets/images/faces/12.jpg",
    name: "Charlie Davieson",
    mail: "charliedavieson@gmail.com",
    id: "#SPK12032922",
    issueDate: "18,Nov 2022",
    price: " $1569.99",
    bg: "success-transparent",
    text: "success",
    status: "Paid",
    dueDate: "18,Dec 2022"
  },
  {
    img: "./assets/images/faces/4.jpg",
    name: "Selena Deoyl",
    mail: "selenadeoyl114@gmail.com",
    id: "#SPK12032932",
    issueDate: "18,Nov 2022",
    price: "  $4,873.99",
    bg: "primary-transparent",
    text: "primary",
    status: "Due By 1 Day",
    dueDate: "18,Dec 2022"
  },
  {
    img: "./assets/images/faces/7.jpg",
    name: "Kiara Advensh",
    mail: "kiaraadvensh87@gmail.com",
    id: "#SPK12032978",
    issueDate: "02,Nov 2022",
    price: "  $1923.99",
    bg: "success-transparent",
    text: "success",
    status: "Paid",
    dueDate: "18,Dec 2022"
  },
  {
    img: "./assets/images/faces/9.jpg",
    name: "Joseph Samurai",
    mail: "josephsamurai@gmail.com",
    id: "#SPK12032919",
    issueDate: "15,Nov 2022",
    price: "$1,623.99",
    bg: "success-transparent",
    text: "success",
    status: "Paid",
    dueDate: "15,Dec 2022"
  },
  {
    img: "./assets/images/faces/13.jpg",
    name: "Kevin Powell",
    mail: "kevinpowell@gmail.com",
    id: "#SPK12032931",
    issueDate: "21,Nov 2022",
    price: " $3,423.99",
    bg: "warning-transparent",
    text: "warning",
    status: "Pending",
    dueDate: "21,Dec 2022"
  },
  {
    img: "./assets/images/faces/8.jpg",
    name: "Darla Jung",
    mail: "darlajung555&@gmail.com",
    id: "#SPK12032958",
    issueDate: "15,Oct 2022",
    price: " $2,982.99",
    bg: "success-transparent",
    text: "success",
    status: "Paid",
    dueDate: "15,Nov 2022"
  }
];
var InvoiceListComponent = class _InvoiceListComponent {
  constructor() {
    this.invoices = DATA;
    this.counter1 = 1;
    this.source = interval(0.2);
    this.subscribe = this.source.subscribe(() => {
      this.counter1++;
      if (this.counter1 == 549) {
        this.subscribe.unsubscribe();
      }
    });
    this.counter2 = 1;
    this.source2 = interval(0.2);
    this.subscribe2 = this.source2.subscribe(() => {
      this.counter2++;
      if (this.counter2 == 451) {
        this.subscribe2.unsubscribe();
      }
    });
    this.counter3 = 1;
    this.source3 = interval(0.2);
    this.subscribe3 = this.source3.subscribe(() => {
      this.counter3++;
      if (this.counter3 == 124) {
        this.subscribe3.unsubscribe();
      }
    });
    this.counter4 = 1;
    this.source4 = interval(0.2);
    this.subscribe4 = this.source4.subscribe(() => {
      this.counter4++;
      if (this.counter4 == 125) {
        this.subscribe4.unsubscribe();
      }
    });
    this.chartOptions = {
      series: [
        {
          name: "Total",
          data: [76, 85, 101, 98, 87, 105]
        },
        {
          name: "Paid",
          data: [35, 41, 36, 26, 45, 48]
        },
        {
          name: "Pending",
          data: [44, 55, 57, 56, 61, 58]
        },
        {
          name: "Overdue",
          data: [13, 27, 31, 29, 35, 25]
        }
      ],
      chart: {
        type: "bar",
        height: 210,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded"
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
      stroke: {
        show: true,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
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
          style: {
            color: "#8c9097"
          }
        },
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
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
  click(id) {
    const data = this.invoices.filter((x) => {
      return x.id != id;
    });
    this.invoices = data;
  }
  static {
    this.\u0275fac = function InvoiceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceListComponent, selectors: [["app-invoice-list"]], viewQuery: function InvoiceListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 338, vars: 18, consts: [["hassub", "", "sub", "Pages", "title1", "Invoice", "title", "Invoice List", "activeTitle", "Invoice List"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col", "mb-4"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fe", "fe-plus"], [1, "col", "col-auto", "mb-4"], [1, "input-group", "w-auto"], ["aria-label", "button", "type", "button", 1, "btn", "btn-light", "bg-white", "border-end-0"], [1, "fe", "fe-search"], ["type", "text", "placeholder", "Search Invoice", 1, "form-control", "border-start-0"], [1, "e-table"], [1, "table-responsive", "table-lg"], ["id", "invoice-list", 1, "table", "card-table", "table-vcenter", "text-nowrap", "border"], ["scope", "col"], [1, "align-middle"], [1, "form-check-label"], ["type", "checkbox", "value", "option2", 1, "form-check-input"], [1, "d-flex"], ["src", "./assets/images/files/file.png", "alt", "img", 1, "avatar", "avatar-sm", "me-2"], [1, "mt-1"], [1, "btn-link", 3, "routerLink"], [1, "text-nowrap", "align-middle"], [1, "fw-bold"], ["ngbDropdown", "", 1, ""], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "no-caret"], [1, "fa", "fa-angle-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fe", "fe-eye", "me-2", "d-inline-flex"], [1, "fe", "fe-share", "me-2", "d-inline-flex"], [1, "fe", "fe-edit", "me-2", "d-inline-flex"], [1, "fe", "fe-trash", "me-2", "d-inline-flex"]], template: function InvoiceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "a", 6);
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275text(9, " Add New Invoice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "button", 10);
        \u0275\u0275element(13, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "table", 15)(18, "thead")(19, "tr");
        \u0275\u0275element(20, "th", 16);
        \u0275\u0275elementStart(21, "th", 16);
        \u0275\u0275text(22, "Invoice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th", 16);
        \u0275\u0275text(24, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th", 16);
        \u0275\u0275text(26, "Generate Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 16);
        \u0275\u0275text(28, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 16);
        \u0275\u0275text(30, "Bill to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 16);
        \u0275\u0275text(32, "Options");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "tbody")(34, "tr")(35, "td", 17)(36, "label", 18);
        \u0275\u0275element(37, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "td", 17)(39, "div", 20);
        \u0275\u0275element(40, "img", 21);
        \u0275\u0275elementStart(41, "div", 22)(42, "a", 23);
        \u0275\u0275text(43, "INVOICE #23543");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "td", 24)(45, "span", 25);
        \u0275\u0275text(46, "$230");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "td", 24)(48, "span");
        \u0275\u0275text(49, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "td", 24);
        \u0275\u0275text(51, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "td", 24);
        \u0275\u0275text(53, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "td")(55, "div", 26)(56, "a", 27);
        \u0275\u0275text(57, "Options ");
        \u0275\u0275element(58, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 29)(60, "a", 30);
        \u0275\u0275element(61, "i", 31);
        \u0275\u0275text(62, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "a", 30);
        \u0275\u0275element(64, "i", 32);
        \u0275\u0275text(65, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 30);
        \u0275\u0275element(67, "i", 33);
        \u0275\u0275text(68, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "a", 30);
        \u0275\u0275element(70, "i", 34);
        \u0275\u0275text(71, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(72, "tr")(73, "td", 17)(74, "label", 18);
        \u0275\u0275element(75, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "td", 17)(77, "div", 20);
        \u0275\u0275element(78, "img", 21);
        \u0275\u0275elementStart(79, "div", 22)(80, "a", 23);
        \u0275\u0275text(81, "INVOICE #43245");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "td", 24)(83, "span", 25);
        \u0275\u0275text(84, "$640");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "td", 24)(86, "span");
        \u0275\u0275text(87, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "td", 24);
        \u0275\u0275text(89, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "td", 24);
        \u0275\u0275text(91, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "td")(93, "div", 26)(94, "a", 27);
        \u0275\u0275text(95, "Options ");
        \u0275\u0275element(96, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 29)(98, "a", 30);
        \u0275\u0275element(99, "i", 31);
        \u0275\u0275text(100, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "a", 30);
        \u0275\u0275element(102, "i", 32);
        \u0275\u0275text(103, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "a", 30);
        \u0275\u0275element(105, "i", 33);
        \u0275\u0275text(106, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "a", 30);
        \u0275\u0275element(108, "i", 34);
        \u0275\u0275text(109, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(110, "tr")(111, "td", 17)(112, "label", 18);
        \u0275\u0275element(113, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "td", 17)(115, "div", 20);
        \u0275\u0275element(116, "img", 21);
        \u0275\u0275elementStart(117, "div", 22)(118, "a", 23);
        \u0275\u0275text(119, "INVOICE #54323");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(120, "td", 24)(121, "span", 25);
        \u0275\u0275text(122, "$241");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "td", 24)(124, "span");
        \u0275\u0275text(125, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "td", 24);
        \u0275\u0275text(127, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "td", 24);
        \u0275\u0275text(129, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "td")(131, "div", 26)(132, "a", 27);
        \u0275\u0275text(133, "Options ");
        \u0275\u0275element(134, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 29)(136, "a", 30);
        \u0275\u0275element(137, "i", 31);
        \u0275\u0275text(138, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "a", 30);
        \u0275\u0275element(140, "i", 32);
        \u0275\u0275text(141, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "a", 30);
        \u0275\u0275element(143, "i", 33);
        \u0275\u0275text(144, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "a", 30);
        \u0275\u0275element(146, "i", 34);
        \u0275\u0275text(147, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(148, "tr")(149, "td", 17)(150, "label", 18);
        \u0275\u0275element(151, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "td", 17)(153, "div", 20);
        \u0275\u0275element(154, "img", 21);
        \u0275\u0275elementStart(155, "div", 22)(156, "a", 23);
        \u0275\u0275text(157, "INVOICE #52345");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(158, "td", 24)(159, "span", 25);
        \u0275\u0275text(160, "$543");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "td", 24)(162, "span");
        \u0275\u0275text(163, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "td", 24);
        \u0275\u0275text(165, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "td", 24);
        \u0275\u0275text(167, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "td")(169, "div", 26)(170, "a", 27);
        \u0275\u0275text(171, "Options ");
        \u0275\u0275element(172, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 29)(174, "a", 30);
        \u0275\u0275element(175, "i", 31);
        \u0275\u0275text(176, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "a", 30);
        \u0275\u0275element(178, "i", 32);
        \u0275\u0275text(179, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "a", 30);
        \u0275\u0275element(181, "i", 33);
        \u0275\u0275text(182, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "a", 30);
        \u0275\u0275element(184, "i", 34);
        \u0275\u0275text(185, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(186, "tr")(187, "td", 17)(188, "label", 18);
        \u0275\u0275element(189, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(190, "td", 17)(191, "div", 20);
        \u0275\u0275element(192, "img", 21);
        \u0275\u0275elementStart(193, "div", 22)(194, "a", 23);
        \u0275\u0275text(195, "INVOICE #65343");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(196, "td", 24)(197, "span", 25);
        \u0275\u0275text(198, "$654");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "td", 24)(200, "span");
        \u0275\u0275text(201, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "td", 24);
        \u0275\u0275text(203, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "td", 24);
        \u0275\u0275text(205, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "td")(207, "div", 26)(208, "a", 27);
        \u0275\u0275text(209, "Options ");
        \u0275\u0275element(210, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "div", 29)(212, "a", 30);
        \u0275\u0275element(213, "i", 31);
        \u0275\u0275text(214, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "a", 30);
        \u0275\u0275element(216, "i", 32);
        \u0275\u0275text(217, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "a", 30);
        \u0275\u0275element(219, "i", 33);
        \u0275\u0275text(220, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "a", 30);
        \u0275\u0275element(222, "i", 34);
        \u0275\u0275text(223, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(224, "tr")(225, "td", 17)(226, "label", 18);
        \u0275\u0275element(227, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "td", 17)(229, "div", 20);
        \u0275\u0275element(230, "img", 21);
        \u0275\u0275elementStart(231, "div", 22)(232, "a", 23);
        \u0275\u0275text(233, "INVOICE #23654");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(234, "td", 24)(235, "span", 25);
        \u0275\u0275text(236, "$523");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(237, "td", 24)(238, "span");
        \u0275\u0275text(239, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "td", 24);
        \u0275\u0275text(241, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "td", 24);
        \u0275\u0275text(243, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "td")(245, "div", 26)(246, "a", 27);
        \u0275\u0275text(247, "Options ");
        \u0275\u0275element(248, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 29)(250, "a", 30);
        \u0275\u0275element(251, "i", 31);
        \u0275\u0275text(252, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "a", 30);
        \u0275\u0275element(254, "i", 32);
        \u0275\u0275text(255, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "a", 30);
        \u0275\u0275element(257, "i", 33);
        \u0275\u0275text(258, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "a", 30);
        \u0275\u0275element(260, "i", 34);
        \u0275\u0275text(261, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(262, "tr")(263, "td", 17)(264, "label", 18);
        \u0275\u0275element(265, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(266, "td", 17)(267, "div", 20);
        \u0275\u0275element(268, "img", 21);
        \u0275\u0275elementStart(269, "div", 22)(270, "a", 23);
        \u0275\u0275text(271, "INVOICE #53245");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(272, "td", 24)(273, "span", 25);
        \u0275\u0275text(274, "$324");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "td", 24)(276, "span");
        \u0275\u0275text(277, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(278, "td", 24);
        \u0275\u0275text(279, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(280, "td", 24);
        \u0275\u0275text(281, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "td")(283, "div", 26)(284, "a", 27);
        \u0275\u0275text(285, "Options ");
        \u0275\u0275element(286, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(287, "div", 29)(288, "a", 30);
        \u0275\u0275element(289, "i", 31);
        \u0275\u0275text(290, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "a", 30);
        \u0275\u0275element(292, "i", 32);
        \u0275\u0275text(293, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "a", 30);
        \u0275\u0275element(295, "i", 33);
        \u0275\u0275text(296, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "a", 30);
        \u0275\u0275element(298, "i", 34);
        \u0275\u0275text(299, " Delete");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(300, "tr")(301, "td", 17)(302, "label", 18);
        \u0275\u0275element(303, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "td", 17)(305, "div", 20);
        \u0275\u0275element(306, "img", 21);
        \u0275\u0275elementStart(307, "div", 22)(308, "a", 23);
        \u0275\u0275text(309, "INVOICE #34234");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(310, "td", 24)(311, "span", 25);
        \u0275\u0275text(312, "$543");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(313, "td", 24)(314, "span");
        \u0275\u0275text(315, "10 Jan 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(316, "td", 24);
        \u0275\u0275text(317, " 25 Jan 2020 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(318, "td", 24);
        \u0275\u0275text(319, " Daneil Robert ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(320, "td")(321, "div", 26)(322, "a", 27);
        \u0275\u0275text(323, "Options ");
        \u0275\u0275element(324, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "div", 29)(326, "a", 30);
        \u0275\u0275element(327, "i", 31);
        \u0275\u0275text(328, " View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "a", 30);
        \u0275\u0275element(330, "i", 32);
        \u0275\u0275text(331, " Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "a", 30);
        \u0275\u0275element(333, "i", 33);
        \u0275\u0275text(334, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "a", 30);
        \u0275\u0275element(336, "i", 34);
        \u0275\u0275text(337, " Delete");
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1));
        \u0275\u0275advance(35);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c2));
        \u0275\u0275advance(38);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c2));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceListComponent, { className: "InvoiceListComponent", filePath: "src\\app\\components\\pages\\invoice\\invoice-list\\invoice-list.component.ts", lineNumber: 149 });
})();
export {
  InvoiceListComponent
};
//# sourceMappingURL=invoice-list.component-EWUGFBFS.js.map
