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

// src/app/components/charts/apexcharts/bar-charts/bar-charts.component.ts
var _c0 = ["chart"];
var BarChartsComponent = class _BarChartsComponent {
  constructor() {
    this.chartOptions = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: "bar",
        height: 320
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      colors: ["#4454c3"],
      grid: {
        borderColor: "#f2f5f7"
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ],
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
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chart: {
        type: "bar",
        height: 320
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      colors: ["#4454c3", "#f72d66"],
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "10px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
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
    this.chartOptions2 = {
      series: [{
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      chart: {
        type: "bar",
        height: 320,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"],
      grid: {
        borderColor: "#f2f5f7"
      },
      title: {
        text: "Fiction Books Sales",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function(val) {
            return val + "K";
          },
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
          text: void 0
        },
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
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    this.chartOptions3 = {
      series: [{
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      chart: {
        type: "bar",
        height: 320,
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"],
      grid: {
        borderColor: "#f2f5f7"
      },
      title: {
        text: "100% Stacked Bar",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    this.chartOptions4 = {
      series: [
        {
          name: "Males",
          data: [
            0.4,
            0.65,
            0.76,
            0.88,
            1.5,
            2.1,
            2.9,
            3.8,
            3.9,
            4.2,
            4,
            4.3,
            4.1,
            4.2,
            4.5,
            3.9,
            3.5,
            3
          ]
        },
        {
          name: "Females",
          data: [
            -0.8,
            -1.05,
            -1.06,
            -1.18,
            -1.4,
            -2.2,
            -2.85,
            -3.7,
            -3.96,
            -4.22,
            -4.3,
            -4.4,
            -4.1,
            -4,
            -4.1,
            -3.4,
            -3.1,
            -2.8
          ]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      colors: ["#4454c3", "#f72d66"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        }
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function(val) {
            return val.toString();
          }
        },
        y: {
          formatter: function(val) {
            return Math.abs(val) + "%";
          }
        }
      },
      xaxis: {
        categories: [
          "85+",
          "80-84",
          "75-79",
          "70-74",
          "65-69",
          "60-64",
          "55-59",
          "50-54",
          "45-49",
          "40-44",
          "35-39",
          "30-34",
          "25-29",
          "20-24",
          "15-19",
          "10-14",
          "5-9",
          "0-4"
        ],
        title: {
          text: "Percent"
        },
        labels: {
          formatter: function(val) {
            return Math.abs(Math.round(parseInt(val, 10))) + "%";
          }
        }
      }
    };
    this.chartOptions5 = {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 12,
              goals: [
                {
                  name: "Expected",
                  value: 14,
                  strokeWidth: 2,
                  strokeDashArray: 2,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 44,
              goals: [
                {
                  name: "Expected",
                  value: 54,
                  strokeWidth: 5,
                  strokeHeight: 10,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 54,
              goals: [
                {
                  name: "Expected",
                  value: 52,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 66,
              goals: [
                {
                  name: "Expected",
                  value: 61,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 81,
              goals: [
                {
                  name: "Expected",
                  value: 66,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 67,
              goals: [
                {
                  name: "Expected",
                  value: 70,
                  strokeWidth: 5,
                  strokeHeight: 10,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      colors: ["#f72d66"],
      dataLabels: {
        formatter: function(val, opt) {
          const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"]
        }
      },
      xaxis: {
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
    this.chartOptions6 = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690]
      }],
      chart: {
        type: "bar",
        height: 320
      },
      annotations: {
        xaxis: [{
          x: 500,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396"
            },
            text: "X annotation"
          }
        }],
        yaxis: [{
          y: "July",
          y2: "September",
          label: {
            text: "Y annotation"
          }
        }]
      },
      colors: ["#4454c3"],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: ["June", "July", "August", "September", "October", "November", "December"],
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
      grid: {
        xaxis: {
          lines: {
            show: true
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
        },
        reversed: true,
        axisTicks: {
          show: true
        }
      }
    };
    this.chartOptions7 = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: "bar",
        height: 320
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
        "#4454c3",
        "#f72d66",
        "#ecb403",
        "#45aaf2",
        "#ff5b51",
        "#fc6c85",
        "#8f00ff",
        "#a65e9a",
        "#2ecc71",
        "#f72d66"
      ],
      grid: {
        borderColor: "#f2f5f7"
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "India"
        ],
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
          show: false
        }
      },
      title: {
        text: "Custom DataLabels",
        align: "center",
        floating: true,
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      subtitle: {
        text: "Category Names as DataLabels inside bars",
        align: "center"
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        }
      }
    };
    this.chartOptions8 = {
      series: [{
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      }],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      colors: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51"],
      title: {
        text: "Compare Sales Strategy",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
          text: void 0
        },
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
        shared: false,
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          style: ["circles", "slantedLines", "verticalLines", "horizontalLines"]
          // string or array of strings
        }
      },
      states: {
        hover: {
          filter: "none"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      }
    };
    this.chartOptions9 = {
      series: [{
        name: "coins",
        data: [
          2,
          4,
          3,
          4,
          3,
          5,
          5,
          6.5,
          6,
          5,
          4,
          5,
          8,
          7,
          7,
          8,
          8,
          10,
          9,
          9,
          12,
          12,
          11,
          12,
          13,
          14,
          16,
          14,
          15,
          17,
          19,
          21
        ]
      }],
      chart: {
        type: "bar",
        height: 350,
        animations: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ["#fff"],
        width: 0.2
      },
      labels: Array.from({ length: 39 }).map(function(el, index) {
        return index + 1;
      }),
      xaxis: {
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
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        },
        title: {
          text: "Weight",
          style: {
            color: "#8c9097"
          }
        }
      },
      grid: {
        position: "back"
      },
      title: {
        text: "Paths filled by clipped image",
        align: "right",
        offsetY: 30,
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      fill: {
        type: "image",
        opacity: 0.87,
        image: {
          src: ["./assets/images/media/media-4.jpg"],
          width: 466,
          height: 406
        }
      }
    };
  }
  static {
    this.\u0275fac = function BarChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChartsComponent, selectors: [["app-bar-charts"]], viewQuery: function BarChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 132, vars: 97, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Bar Charts", "activeTitle", "Apex Bar Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "bar-basic"], ["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors"], ["id", "bar-group"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors", "stroke"], ["id", "bar-stacked"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "stroke", "fill", "yaxis", "title", "colors", "tooltip", "legend"], ["id", "bar-full"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors", "stroke", "fill", "title", "tooltip", "legend"], ["id", "bar-negative"], [3, "series", "chart", "dataLabels", "stroke", "colors", "title", "grid", "tooltip", "plotOptions", "yaxis", "xaxis"], ["id", "bar-markers"], [3, "series", "chart", "legend", "dataLabels", "colors", "plotOptions"], ["id", "bar-reversed"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors", "grid", "yaxis", "annotations"], ["id", "bar-categories"], [3, "series", "chart", "dataLabels", "stroke", "colors", "title", "subtitle", "plotOptions", "yaxis", "xaxis", "tooltip"], ["id", "bar-pattern"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "xaxis", "stroke", "colors", "tooltip", "fill", "states", "title"], ["id", "bar-image"], [3, "series", "chart", "dataLabels", "stroke", "colors", "title", "grid", "plotOptions", "yaxis", "fill", "labels"]], template: function BarChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, "Basic Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
        \u0275\u0275element(14, "apx-chart", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3);
        \u0275\u0275element(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 7);
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
        \u0275\u0275text(23, "Grouped Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 14)(26, "div", 12);
        \u0275\u0275element(27, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3);
        \u0275\u0275element(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 7);
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36, "Stacked Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "div", 16)(39, "div", 12);
        \u0275\u0275element(40, "apx-chart", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275element(43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "div", 7);
        \u0275\u0275elementStart(47, "div", 8)(48, "div", 9);
        \u0275\u0275text(49, "100% Stacked Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 18)(52, "div", 12);
        \u0275\u0275element(53, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "div", 2)(55, "div", 3);
        \u0275\u0275element(56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "div", 7);
        \u0275\u0275elementStart(60, "div", 8)(61, "div", 9);
        \u0275\u0275text(62, "Bar Chart With Negative Values");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 10)(64, "div", 20)(65, "div", 12);
        \u0275\u0275element(66, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "div", 2)(68, "div", 3);
        \u0275\u0275element(69, "div", 4)(70, "div", 5)(71, "div", 6)(72, "div", 7);
        \u0275\u0275elementStart(73, "div", 8)(74, "div", 9);
        \u0275\u0275text(75, "Bar Chart With Markers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 10)(77, "div", 22)(78, "div", 12);
        \u0275\u0275element(79, "apx-chart", 23);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "div", 2)(81, "div", 3);
        \u0275\u0275element(82, "div", 4)(83, "div", 5)(84, "div", 6)(85, "div", 7);
        \u0275\u0275elementStart(86, "div", 8)(87, "div", 9);
        \u0275\u0275text(88, "Reversed Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 10)(90, "div", 24)(91, "div", 12);
        \u0275\u0275element(92, "apx-chart", 25);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 2)(94, "div", 3);
        \u0275\u0275element(95, "div", 4)(96, "div", 5)(97, "div", 6)(98, "div", 7);
        \u0275\u0275elementStart(99, "div", 8)(100, "div", 9);
        \u0275\u0275text(101, "Bar With Categogry DataLabels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 10)(103, "div", 26)(104, "div", 12);
        \u0275\u0275element(105, "apx-chart", 27);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(106, "div", 2)(107, "div", 3);
        \u0275\u0275element(108, "div", 4)(109, "div", 5)(110, "div", 6)(111, "div", 7);
        \u0275\u0275elementStart(112, "div", 8)(113, "div", 9);
        \u0275\u0275text(114, "Patterned Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div", 10)(116, "div", 28)(117, "div", 12);
        \u0275\u0275element(118, "apx-chart", 29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(119, "div", 2)(120, "div", 3);
        \u0275\u0275element(121, "div", 4)(122, "div", 5)(123, "div", 6)(124, "div", 7);
        \u0275\u0275elementStart(125, "div", 8)(126, "div", 9);
        \u0275\u0275text(127, "Bar With Image Fill");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 10)(129, "div", 30)(130, "div", 12);
        \u0275\u0275element(131, "apx-chart", 31);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("dataLabels", ctx.chartOptions1.dataLabels)("plotOptions", ctx.chartOptions1.plotOptions)("xaxis", ctx.chartOptions1.xaxis)("colors", ctx.chartOptions1.colors)("stroke", ctx.chartOptions1.stroke);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions)("xaxis", ctx.chartOptions2.xaxis)("stroke", ctx.chartOptions2.stroke)("fill", ctx.chartOptions2.fill)("yaxis", ctx.chartOptions2.yaxis)("title", ctx.chartOptions2.title)("colors", ctx.chartOptions2.colors)("tooltip", ctx.chartOptions2.tooltip)("legend", ctx.chartOptions2.legend);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("dataLabels", ctx.chartOptions3.dataLabels)("plotOptions", ctx.chartOptions3.plotOptions)("xaxis", ctx.chartOptions3.xaxis)("colors", ctx.chartOptions3.colors)("stroke", ctx.chartOptions3.stroke)("fill", ctx.chartOptions3.fill)("title", ctx.chartOptions3.title)("tooltip", ctx.chartOptions3.tooltip)("legend", ctx.chartOptions3.legend);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions4.series)("chart", ctx.chartOptions4.chart)("dataLabels", ctx.chartOptions4.dataLabels)("stroke", ctx.chartOptions4.stroke)("colors", ctx.chartOptions4.colors)("title", ctx.chartOptions4.title)("grid", ctx.chartOptions4.grid)("tooltip", ctx.chartOptions4.tooltip)("plotOptions", ctx.chartOptions4.plotOptions)("yaxis", ctx.chartOptions4.yaxis)("xaxis", ctx.chartOptions4.xaxis);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions5.series)("chart", ctx.chartOptions5.chart)("legend", ctx.chartOptions5.legend)("dataLabels", ctx.chartOptions5.dataLabels)("colors", ctx.chartOptions5.colors)("plotOptions", ctx.chartOptions5.plotOptions);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions6.series)("chart", ctx.chartOptions6.chart)("dataLabels", ctx.chartOptions6.dataLabels)("plotOptions", ctx.chartOptions6.plotOptions)("xaxis", ctx.chartOptions6.xaxis)("colors", ctx.chartOptions6.colors)("grid", ctx.chartOptions6.grid)("yaxis", ctx.chartOptions6.yaxis)("annotations", ctx.chartOptions6.annotations);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions7.series)("chart", ctx.chartOptions7.chart)("dataLabels", ctx.chartOptions7.dataLabels)("stroke", ctx.chartOptions7.stroke)("colors", ctx.chartOptions7.colors)("title", ctx.chartOptions7.title)("subtitle", ctx.chartOptions7.subtitle)("plotOptions", ctx.chartOptions7.plotOptions)("yaxis", ctx.chartOptions7.yaxis)("xaxis", ctx.chartOptions7.xaxis)("tooltip", ctx.chartOptions7.tooltip);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions8.series)("chart", ctx.chartOptions8.chart)("dataLabels", ctx.chartOptions8.dataLabels)("plotOptions", ctx.chartOptions8.plotOptions)("yaxis", ctx.chartOptions8.yaxis)("legend", ctx.chartOptions8.legend)("xaxis", ctx.chartOptions8.xaxis)("stroke", ctx.chartOptions8.stroke)("colors", ctx.chartOptions8.colors)("tooltip", ctx.chartOptions8.tooltip)("fill", ctx.chartOptions8.fill)("states", ctx.chartOptions8.states)("title", ctx.chartOptions8.title);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.chartOptions9.series)("chart", ctx.chartOptions9.chart)("dataLabels", ctx.chartOptions9.dataLabels)("stroke", ctx.chartOptions9.stroke)("colors", ctx.chartOptions9.colors)("title", ctx.chartOptions9.title)("grid", ctx.chartOptions9.grid)("plotOptions", ctx.chartOptions9.plotOptions)("yaxis", ctx.chartOptions9.yaxis)("fill", ctx.chartOptions9.fill)("labels", ctx.chartOptions9.labels);
      }
    }, dependencies: [NgApexchartsModule, ChartComponent, SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChartsComponent, { className: "BarChartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\bar-charts\\bar-charts.component.ts", lineNumber: 40 });
})();
export {
  BarChartsComponent
};
//# sourceMappingURL=bar-charts.component-EWKEBPHU.js.map
