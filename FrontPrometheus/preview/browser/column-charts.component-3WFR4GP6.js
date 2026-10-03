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

// src/app/components/charts/apexcharts/column-charts/data-series.ts
var arrayData = [
  {
    y: 400,
    quarters: [
      {
        x: "Q1",
        y: 120
      },
      {
        x: "Q2",
        y: 90
      },
      {
        x: "Q3",
        y: 100
      },
      {
        x: "Q4",
        y: 90
      }
    ]
  },
  {
    y: 430,
    quarters: [
      {
        x: "Q1",
        y: 120
      },
      {
        x: "Q2",
        y: 110
      },
      {
        x: "Q3",
        y: 90
      },
      {
        x: "Q4",
        y: 110
      }
    ]
  },
  {
    y: 448,
    quarters: [
      {
        x: "Q1",
        y: 70
      },
      {
        x: "Q2",
        y: 100
      },
      {
        x: "Q3",
        y: 140
      },
      {
        x: "Q4",
        y: 138
      }
    ]
  },
  {
    y: 470,
    quarters: [
      {
        x: "Q1",
        y: 150
      },
      {
        x: "Q2",
        y: 60
      },
      {
        x: "Q3",
        y: 190
      },
      {
        x: "Q4",
        y: 70
      }
    ]
  },
  {
    y: 540,
    quarters: [
      {
        x: "Q1",
        y: 120
      },
      {
        x: "Q2",
        y: 120
      },
      {
        x: "Q3",
        y: 130
      },
      {
        x: "Q4",
        y: 170
      }
    ]
  },
  {
    y: 580,
    quarters: [
      {
        x: "Q1",
        y: 170
      },
      {
        x: "Q2",
        y: 130
      },
      {
        x: "Q3",
        y: 120
      },
      {
        x: "Q4",
        y: 160
      }
    ]
  }
];

// src/app/components/charts/apexcharts/column-charts/column-charts.component.ts
var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3"
];
var ColumnChartsComponent = class _ColumnChartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      chart: {
        type: "bar",
        height: 320
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%"
          // endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
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
    this.chartOptions1 = {
      series: [{
        name: "Inflation",
        data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
      chart: {
        height: 320,
        type: "bar"
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top"
            // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#8c9097"]
        }
      },
      colors: ["#4454c3"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true
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
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      colors: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2"],
      chart: {
        type: "bar",
        height: 320,
        stacked: true
      },
      toolbar: {
        show: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      xaxis: {
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43, 21, 49]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27, 33, 12]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14, 15, 13]
        }
      ],
      colors: ["#4454c3", "#f72d66", "#ecb403"],
      chart: {
        type: "bar",
        height: 320,
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%"
          // endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      xaxis: {
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      }
    };
    this.chartOptions4 = {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      colors: ["#4454c3", "#f72d66"],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "60%"
        }
      },
      // colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"]
        }
      }
    };
    this.chartOptions5 = {
      series: [{
        name: "Servings",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
      }],
      annotations: {
        points: [{
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0"
            },
            text: "Bananas are good"
          }
        }]
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%"
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#845adf"],
      stroke: {
        width: 2
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      xaxis: {
        labels: {
          rotate: -45,
          rotateAlways: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label"
          }
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas"
        ],
        tickPlacement: "on"
      },
      yaxis: {
        labels: {
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label"
          }
        },
        title: {
          text: "Servings",
          style: {
            color: "#8c9097"
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: void 0,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
    this.chartOptions6 = {
      series: [
        {
          name: "Cash Flow",
          data: [
            1.45,
            5.42,
            5.9,
            -0.42,
            -12.6,
            -18.1,
            -18.2,
            -14.16,
            -11.1,
            -6.09,
            0.34,
            3.88,
            13.07,
            5.8,
            2,
            7.37,
            8.1,
            13.57,
            15.75,
            17.1,
            19.8,
            -27.03,
            -54.4,
            -47.2,
            -43.3,
            -18.6,
            -48.6,
            -41.1,
            -39.6,
            -37.6,
            -29.4,
            -21.4,
            -2.4
          ]
        }
      ],
      colors: ["#4454c3", "#f72d66"],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46"
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019"
              }
            ]
          },
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        title: {
          text: "Growth"
        },
        labels: {
          formatter: function(y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
          "2011-12-01",
          "2012-01-01",
          "2012-02-01",
          "2012-03-01",
          "2012-04-01",
          "2012-05-01",
          "2012-06-01",
          "2012-07-01",
          "2012-08-01",
          "2012-09-01",
          "2012-10-01",
          "2012-11-01",
          "2012-12-01",
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          "2013-06-01",
          "2013-07-01",
          "2013-08-01",
          "2013-09-01"
        ],
        labels: {
          // rotate: 90,
        }
      }
    };
    this.chartOptions7 = {
      series: [
        {
          name: "blue",
          data: [
            {
              x: "Team A",
              y: [1, 5]
            },
            {
              x: "Team B",
              y: [4, 6]
            },
            {
              x: "Team C",
              y: [5, 8]
            },
            {
              x: "Team D",
              y: [3, 11]
            }
          ]
        },
        {
          name: "green",
          data: [
            {
              x: "Team A",
              y: [2, 6]
            },
            {
              x: "Team B",
              y: [1, 3]
            },
            {
              x: "Team C",
              y: [7, 8]
            },
            {
              x: "Team D",
              y: [5, 9]
            }
          ]
        }
      ],
      colors: ["#4454c3", "#f72d66"],
      chart: {
        type: "rangeBar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      }
    };
    this.chartOptions9 = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        height: 420,
        type: "bar",
        events: {
          click: function(chart, w, e) {
          }
        }
      },
      colors: [
        "#9673e4",
        "#44c2e9",
        "#f6c364",
        "#64c1f6",
        "#ea6d59",
        "#46c9a4",
        "#737ecf",
        "#b3768a"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
    this.chartOptions8 = {
      series: [
        {
          name: "year",
          data: this.makeData()
        }
      ],
      chart: {
        id: "barYear",
        height: 400,
        width: "100%",
        type: "bar",
        events: {
          dataPointSelection: (e, chart, opts) => {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");
            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl.classList.contains("active")) {
                this.updateQuarterChart(chart, "barQuarter");
              } else {
                yearChartEl.classList.add("chart-quarter-activated");
                quarterChartEl.classList.add("active");
                this.updateQuarterChart(chart, "barQuarter");
              }
            } else {
              this.updateQuarterChart(chart, "barQuarter");
            }
            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl.classList.remove("chart-quarter-activated");
              quarterChartEl.classList.remove("active");
            }
          },
          updated: (chart) => {
            this.updateQuarterChart(chart, "barQuarter");
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: "75%",
          dataLabels: {
            position: "bottom"
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      colors,
      states: {
        normal: {
          filter: {
            type: "desaturate"
          }
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: "darken",
            value: 1
          }
        }
      },
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(val, opts) {
              return opts.w.globals.labels[opts.dataPointIndex];
            }
          }
        }
      },
      title: {
        text: "Yearly Results",
        offsetX: 15
      },
      subtitle: {
        text: "(Click on bar to see details)",
        offsetX: 15
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    };
    this.chartQuarterOptions8 = {
      series: [
        {
          name: "quarter",
          data: []
        }
      ],
      chart: {
        id: "barQuarter",
        height: 400,
        width: "100%",
        type: "bar",
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          horizontal: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "Quarterly Results",
        offsetX: 10
      },
      tooltip: {
        x: {
          formatter: function(val, opts) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          }
        },
        y: {
          title: {
            formatter: function(val, opts) {
              return opts.w.globals.labels[opts.dataPointIndex];
            }
          }
        }
      }
    };
  }
  makeData() {
    var dataSet = this.shuffleArray(arrayData);
    var dataYearSeries = [
      {
        x: "2011",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters
      },
      {
        x: "2012",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters
      },
      {
        x: "2013",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters
      },
      {
        x: "2014",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters
      },
      {
        x: "2015",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters
      },
      {
        x: "2016",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters
      }
    ];
    return dataYearSeries;
  }
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  updateQuarterChart(sourceChart, destChartIDToUpdate) {
    var series = [];
    var seriesIndex = 0;
    var colors2 = [];
    if (sourceChart.w.globals.selectedDataPoints[0]) {
      var selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
        var selectedIndex = selectedPoints[seriesIndex][i];
        var yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters
        });
        colors2.push(yearSeries.data[selectedIndex].color);
      }
      if (series.length === 0)
        series = [
          {
            data: []
          }
        ];
      return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
        series,
        colors: colors2,
        fill: {
          colors: colors2
        }
      });
    }
  }
  static {
    this.\u0275fac = function ColumnChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ColumnChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColumnChartsComponent, selectors: [["app-column-charts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 95, consts: [["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Column Charts", "activeTitle", "Apex Column Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "column-basic"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "colors", "xaxis"], ["id", "column-datalabels"], [3, "series", "chart", "plotOptions", "yaxis", "xaxis", "fill", "title", "colors"], ["id", "column-stacked"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "legend", "fill", "colors"], ["id", "column-stacked-full"], ["id", "column-markers"], [3, "series", "chart", "legend", "dataLabels", "colors", "plotOptions"], ["id", "column-rotated-labels"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "stroke", "grid", "fill", "annotations", "colors"], ["id", "column-negative"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "colors"], ["id", "column-range"], [3, "series", "chart", "dataLabels", "plotOptions", "colors"], ["id", "chart-year"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "subtitle", "colors", "states", "title", "tooltip"], ["id", "chart-quarter"], [3, "series", "chart", "legend", "plotOptions", "yaxis", "xaxis", "grid", "title"], ["id", "columns-distributed"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "colors", "grid"]], template: function ColumnChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Basic Column Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "apx-chart", 8);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "div", 5);
        \u0275\u0275text(14, "Column Chart With Datalabels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "div", 9);
        \u0275\u0275element(17, "apx-chart", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "div", 5);
        \u0275\u0275text(22, "Stacked Column Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "div", 11);
        \u0275\u0275element(25, "apx-chart", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div", 5);
        \u0275\u0275text(30, "100% Stacked Column Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 6)(32, "div", 13);
        \u0275\u0275element(33, "apx-chart", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 2)(35, "div", 3)(36, "div", 4)(37, "div", 5);
        \u0275\u0275text(38, "Column Chart With Markers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 6)(40, "div", 14);
        \u0275\u0275element(41, "apx-chart", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 2)(43, "div", 3)(44, "div", 4)(45, "div", 5);
        \u0275\u0275text(46, "Column Chart With Rotated Labels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 6)(48, "div", 16);
        \u0275\u0275element(49, "apx-chart", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 2)(51, "div", 3)(52, "div", 4)(53, "div", 5);
        \u0275\u0275text(54, "Column Chart With Negative Values");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 6)(56, "div", 18);
        \u0275\u0275element(57, "apx-chart", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "div", 2)(59, "div", 3)(60, "div", 4)(61, "div", 5);
        \u0275\u0275text(62, "Range Column Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 6)(64, "div", 20);
        \u0275\u0275element(65, "apx-chart", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 2)(67, "div", 3)(68, "div", 4)(69, "div", 5);
        \u0275\u0275text(70, "Dynamic Loaded Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 6)(72, "div", 22);
        \u0275\u0275element(73, "apx-chart", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 24);
        \u0275\u0275element(75, "apx-chart", 25);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "div", 2)(77, "div", 3)(78, "div", 4)(79, "div", 5);
        \u0275\u0275text(80, "Distributed Columns Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 6)(82, "div", 26);
        \u0275\u0275element(83, "apx-chart", 27);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("colors", ctx.chartOptions.colors)("xaxis", ctx.chartOptions.xaxis);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("plotOptions", ctx.chartOptions1.plotOptions)("yaxis", ctx.chartOptions1.yaxis)("xaxis", ctx.chartOptions1.xaxis)("fill", ctx.chartOptions1.fill)("title", ctx.chartOptions.title)("colors", ctx.chartOptions1.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions)("responsive", ctx.chartOptions2.responsive)("xaxis", ctx.chartOptions2.xaxis)("legend", ctx.chartOptions2.legend)("fill", ctx.chartOptions2.fill)("colors", ctx.chartOptions2.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("dataLabels", ctx.chartOptions3.dataLabels)("plotOptions", ctx.chartOptions3.plotOptions)("responsive", ctx.chartOptions3.responsive)("xaxis", ctx.chartOptions3.xaxis)("legend", ctx.chartOptions3.legend)("fill", ctx.chartOptions3.fill)("colors", ctx.chartOptions3.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions4.series)("chart", ctx.chartOptions4.chart)("legend", ctx.chartOptions4.legend)("dataLabels", ctx.chartOptions4.dataLabels)("colors", ctx.chartOptions4.colors)("plotOptions", ctx.chartOptions4.plotOptions)("colors", ctx.chartOptions4.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions5.series)("chart", ctx.chartOptions5.chart)("dataLabels", ctx.chartOptions5.dataLabels)("plotOptions", ctx.chartOptions5.plotOptions)("yaxis", ctx.chartOptions5.yaxis)("xaxis", ctx.chartOptions5.xaxis)("stroke", ctx.chartOptions5.stroke)("grid", ctx.chartOptions5.grid)("fill", ctx.chartOptions5.fill)("annotations", ctx.chartOptions5.annotations)("colors", ctx.chartOptions5.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions6.series)("chart", ctx.chartOptions6.chart)("dataLabels", ctx.chartOptions6.dataLabels)("plotOptions", ctx.chartOptions6.plotOptions)("yaxis", ctx.chartOptions6.yaxis)("xaxis", ctx.chartOptions6.xaxis)("colors", ctx.chartOptions6.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions7.series)("chart", ctx.chartOptions7.chart)("dataLabels", ctx.chartOptions7.dataLabels)("plotOptions", ctx.chartOptions7.plotOptions)("colors", ctx.chartOptions7.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions8.series)("chart", ctx.chartOptions8.chart)("dataLabels", ctx.chartOptions8.dataLabels)("plotOptions", ctx.chartOptions8.plotOptions)("yaxis", ctx.chartOptions8.yaxis)("xaxis", ctx.chartOptions8.xaxis)("subtitle", ctx.chartOptions8.subtitle)("colors", ctx.chartOptions8.colors)("states", ctx.chartOptions8.states)("title", ctx.chartOptions8.title)("tooltip", ctx.chartOptions8.tooltip);
        \u0275\u0275advance(2);
        \u0275\u0275property("series", ctx.chartQuarterOptions8.series)("chart", ctx.chartQuarterOptions8.chart)("legend", ctx.chartQuarterOptions8.legend)("plotOptions", ctx.chartQuarterOptions8.plotOptions)("yaxis", ctx.chartQuarterOptions8.yaxis)("xaxis", ctx.chartQuarterOptions8.xaxis)("grid", ctx.chartQuarterOptions8.grid)("title", ctx.chartQuarterOptions8.title);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.chartOptions9.series)("chart", ctx.chartOptions9.chart)("dataLabels", ctx.chartOptions9.dataLabels)("plotOptions", ctx.chartOptions9.plotOptions)("yaxis", ctx.chartOptions9.yaxis)("xaxis", ctx.chartOptions9.xaxis)("legend", ctx.chartOptions9.legend)("colors", ctx.chartOptions9.colors)("grid", ctx.chartOptions9.grid);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent], styles: ["\n\n/*# sourceMappingURL=column-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColumnChartsComponent, { className: "ColumnChartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\column-charts\\column-charts.component.ts", lineNumber: 26 });
})();
export {
  ColumnChartsComponent
};
//# sourceMappingURL=column-charts.component-3WFR4GP6.js.map
