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

// src/app/components/charts/apexcharts/candlestickcharts/candlestickcharts.component.ts
var import_moment = __toESM(require_moment());

// src/app/components/charts/apexcharts/candlestickcharts/data.ts
var seriesData = [
  {
    x: new Date(2016, 1, 1),
    y: [51.98, 56.29, 51.59, 53.85]
  },
  {
    x: new Date(2016, 2, 1),
    y: [53.66, 54.99, 51.35, 52.95]
  },
  {
    x: new Date(2016, 3, 1),
    y: [52.96, 53.78, 51.54, 52.48]
  },
  {
    x: new Date(2016, 4, 1),
    y: [52.54, 52.79, 47.88, 49.24]
  },
  {
    x: new Date(2016, 5, 1),
    y: [49.1, 52.86, 47.7, 52.78]
  },
  {
    x: new Date(2016, 6, 1),
    y: [52.83, 53.48, 50.32, 52.29]
  },
  {
    x: new Date(2016, 7, 1),
    y: [52.2, 54.48, 51.64, 52.58]
  },
  {
    x: new Date(2016, 8, 1),
    y: [52.76, 57.35, 52.15, 57.03]
  },
  {
    x: new Date(2016, 9, 1),
    y: [57.04, 58.15, 48.88, 56.19]
  },
  {
    x: new Date(2016, 10, 1),
    y: [56.09, 58.85, 55.48, 58.79]
  },
  {
    x: new Date(2016, 11, 1),
    y: [58.78, 59.65, 58.23, 59.05]
  },
  {
    x: new Date(2017, 0, 1),
    y: [59.37, 61.11, 59.35, 60.34]
  },
  {
    x: new Date(2017, 1, 1),
    y: [60.4, 60.52, 56.71, 56.93]
  },
  {
    x: new Date(2017, 2, 1),
    y: [57.02, 59.71, 56.04, 56.82]
  },
  {
    x: new Date(2017, 3, 1),
    y: [56.97, 59.62, 54.77, 59.3]
  },
  {
    x: new Date(2017, 4, 1),
    y: [59.11, 62.29, 59.1, 59.85]
  },
  {
    x: new Date(2017, 5, 1),
    y: [59.97, 60.11, 55.66, 58.42]
  },
  {
    x: new Date(2017, 6, 1),
    y: [58.34, 60.93, 56.75, 57.42]
  },
  {
    x: new Date(2017, 7, 1),
    y: [57.76, 58.08, 51.18, 54.71]
  },
  {
    x: new Date(2017, 8, 1),
    y: [54.8, 61.42, 53.18, 57.35]
  },
  {
    x: new Date(2017, 9, 1),
    y: [57.56, 63.09, 57, 62.99]
  },
  {
    x: new Date(2017, 10, 1),
    y: [62.89, 63.42, 59.72, 61.76]
  },
  {
    x: new Date(2017, 11, 1),
    y: [61.71, 64.15, 61.29, 63.04]
  }
];
var seriesDataLinear = [
  {
    x: new Date(2016, 1, 1),
    y: 3.85
  },
  {
    x: new Date(2016, 2, 1),
    y: 2.95
  },
  {
    x: new Date(2016, 3, 1),
    y: -12.48
  },
  {
    x: new Date(2016, 4, 1),
    y: 19.24
  },
  {
    x: new Date(2016, 5, 1),
    y: 12.78
  },
  {
    x: new Date(2016, 6, 1),
    y: 22.29
  },
  {
    x: new Date(2016, 7, 1),
    y: -12.58
  },
  {
    x: new Date(2016, 8, 1),
    y: -17.03
  },
  {
    x: new Date(2016, 9, 1),
    y: -19.19
  },
  {
    x: new Date(2016, 10, 1),
    y: -28.79
  },
  {
    x: new Date(2016, 11, 1),
    y: -39.05
  },
  {
    x: new Date(2017, 0, 1),
    y: 20.34
  },
  {
    x: new Date(2017, 1, 1),
    y: 36.93
  },
  {
    x: new Date(2017, 2, 1),
    y: 36.82
  },
  {
    x: new Date(2017, 3, 1),
    y: 29.3
  },
  {
    x: new Date(2017, 4, 1),
    y: 39.85
  },
  {
    x: new Date(2017, 5, 1),
    y: 28.42
  },
  {
    x: new Date(2017, 6, 1),
    y: 37.42
  },
  {
    x: new Date(2017, 7, 1),
    y: 24.71
  },
  {
    x: new Date(2017, 8, 1),
    y: 37.35
  },
  {
    x: new Date(2017, 9, 1),
    y: 32.99
  },
  {
    x: new Date(2017, 10, 1),
    y: 31.76
  },
  {
    x: new Date(2017, 11, 1),
    y: 43.04
  }
];

// src/app/components/charts/apexcharts/candlestickcharts/candlestickcharts.component.ts
var _c0 = ["chart"];
var CandlestickchartsComponent = class _CandlestickchartsComponent {
  constructor() {
    this.chartOptions = {
      series: [{
        data: [
          {
            x: /* @__PURE__ */ new Date(15387786e5),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
          },
          {
            x: /* @__PURE__ */ new Date(15387804e5),
            y: [6632.01, 6643.59, 6620, 6630.11]
          },
          {
            x: /* @__PURE__ */ new Date(15387822e5),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
          },
          {
            x: /* @__PURE__ */ new Date(1538784e6),
            y: [6635.65, 6651, 6629.67, 6638.24]
          },
          {
            x: /* @__PURE__ */ new Date(15387858e5),
            y: [6638.24, 6640, 6620, 6624.47]
          },
          {
            x: /* @__PURE__ */ new Date(15387876e5),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
          },
          {
            x: /* @__PURE__ */ new Date(15387894e5),
            y: [6624.61, 6632.2, 6617, 6626.02]
          },
          {
            x: /* @__PURE__ */ new Date(15387912e5),
            y: [6627, 6627.62, 6584.22, 6603.02]
          },
          {
            x: /* @__PURE__ */ new Date(1538793e6),
            y: [6605, 6608.03, 6598.95, 6604.01]
          },
          {
            x: /* @__PURE__ */ new Date(15387948e5),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
          },
          {
            x: /* @__PURE__ */ new Date(15387966e5),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
          },
          {
            x: /* @__PURE__ */ new Date(15387984e5),
            y: [6608.91, 6618.99, 6608.01, 6612]
          },
          {
            x: /* @__PURE__ */ new Date(15388002e5),
            y: [6612, 6615.13, 6605.09, 6612]
          },
          {
            x: /* @__PURE__ */ new Date(1538802e6),
            y: [6612, 6624.12, 6608.43, 6622.95]
          },
          {
            x: /* @__PURE__ */ new Date(15388038e5),
            y: [6623.91, 6623.91, 6615, 6615.67]
          },
          {
            x: /* @__PURE__ */ new Date(15388056e5),
            y: [6618.69, 6618.74, 6610, 6610.4]
          },
          {
            x: /* @__PURE__ */ new Date(15388074e5),
            y: [6611, 6622.78, 6610.4, 6614.9]
          },
          {
            x: /* @__PURE__ */ new Date(15388092e5),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
          },
          {
            x: /* @__PURE__ */ new Date(1538811e6),
            y: [6623.48, 6627, 6618.38, 6620.35]
          },
          {
            x: /* @__PURE__ */ new Date(15388128e5),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
          },
          {
            x: /* @__PURE__ */ new Date(15388146e5),
            y: [6615.53, 6617.93, 6610, 6615.19]
          },
          {
            x: /* @__PURE__ */ new Date(15388164e5),
            y: [6615.19, 6621.6, 6608.2, 6620]
          },
          {
            x: /* @__PURE__ */ new Date(15388182e5),
            y: [6619.54, 6625.17, 6614.15, 6620]
          },
          {
            x: /* @__PURE__ */ new Date(153882e7),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
          },
          {
            x: /* @__PURE__ */ new Date(15388218e5),
            y: [6625.95, 6626, 6611.66, 6617.58]
          },
          {
            x: /* @__PURE__ */ new Date(15388236e5),
            y: [6619, 6625.97, 6595.27, 6598.86]
          },
          {
            x: /* @__PURE__ */ new Date(15388254e5),
            y: [6598.86, 6598.88, 6570, 6587.16]
          },
          {
            x: /* @__PURE__ */ new Date(15388272e5),
            y: [6588.86, 6600, 6580, 6593.4]
          },
          {
            x: /* @__PURE__ */ new Date(1538829e6),
            y: [6593.99, 6598.89, 6585, 6587.81]
          },
          {
            x: /* @__PURE__ */ new Date(15388308e5),
            y: [6587.81, 6592.73, 6567.14, 6578]
          },
          {
            x: /* @__PURE__ */ new Date(15388326e5),
            y: [6578.35, 6581.72, 6567.39, 6579]
          },
          {
            x: /* @__PURE__ */ new Date(15388344e5),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
          },
          {
            x: /* @__PURE__ */ new Date(15388362e5),
            y: [6575.96, 6589, 6571.77, 6588.92]
          },
          {
            x: /* @__PURE__ */ new Date(1538838e6),
            y: [6588.92, 6594, 6577.55, 6589.22]
          },
          {
            x: /* @__PURE__ */ new Date(15388398e5),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
          },
          {
            x: /* @__PURE__ */ new Date(15388416e5),
            y: [6597.5, 6600, 6588.39, 6596.25]
          },
          {
            x: /* @__PURE__ */ new Date(15388434e5),
            y: [6598.03, 6600, 6588.73, 6595.97]
          },
          {
            x: /* @__PURE__ */ new Date(15388452e5),
            y: [6595.97, 6602.01, 6588.17, 6602]
          },
          {
            x: /* @__PURE__ */ new Date(1538847e6),
            y: [6602, 6607, 6596.51, 6599.95]
          },
          {
            x: /* @__PURE__ */ new Date(15388488e5),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
          },
          {
            x: /* @__PURE__ */ new Date(15388506e5),
            y: [6591.02, 6603.08, 6591, 6591]
          },
          {
            x: /* @__PURE__ */ new Date(15388524e5),
            y: [6591, 6601.32, 6585, 6592]
          },
          {
            x: /* @__PURE__ */ new Date(15388542e5),
            y: [6593.13, 6596.01, 6590, 6593.34]
          },
          {
            x: /* @__PURE__ */ new Date(1538856e6),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
          },
          {
            x: /* @__PURE__ */ new Date(15388578e5),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
          },
          {
            x: /* @__PURE__ */ new Date(15388596e5),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
          },
          {
            x: /* @__PURE__ */ new Date(15388614e5),
            y: [6596.25, 6604.2, 6590, 6602.99]
          },
          {
            x: /* @__PURE__ */ new Date(15388632e5),
            y: [6602.99, 6606, 6584.99, 6587.81]
          },
          {
            x: /* @__PURE__ */ new Date(1538865e6),
            y: [6587.81, 6595, 6583.27, 6591.96]
          },
          {
            x: /* @__PURE__ */ new Date(15388668e5),
            y: [6591.97, 6596.07, 6585, 6588.39]
          },
          {
            x: /* @__PURE__ */ new Date(15388686e5),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
          },
          {
            x: /* @__PURE__ */ new Date(15388704e5),
            y: [6596.44, 6601, 6590, 6596.55]
          },
          {
            x: /* @__PURE__ */ new Date(15388722e5),
            y: [6598.91, 6605, 6596.61, 6600.02]
          },
          {
            x: /* @__PURE__ */ new Date(1538874e6),
            y: [6600.55, 6605, 6589.14, 6593.01]
          },
          {
            x: /* @__PURE__ */ new Date(15388758e5),
            y: [6593.15, 6605, 6592, 6603.06]
          },
          {
            x: /* @__PURE__ */ new Date(15388776e5),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
          },
          {
            x: /* @__PURE__ */ new Date(15388794e5),
            y: [6604.44, 6604.44, 6600, 6603.5]
          },
          {
            x: /* @__PURE__ */ new Date(15388812e5),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
          },
          {
            x: /* @__PURE__ */ new Date(1538883e6),
            y: [6603.85, 6605, 6600, 6604.07]
          },
          {
            x: /* @__PURE__ */ new Date(15388848e5),
            y: [6604.98, 6606, 6604.07, 6606]
          }
        ]
      }],
      chart: {
        type: "candlestick",
        height: 350
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
        style: {
          color: "#8c9097",
          fontSize: "13px",
          fontWeight: "bold"
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#4454c3",
            downward: "#f72d66"
          }
        }
      },
      grid: {
        borderColor: "#f2f5f7"
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
        tooltip: {
          enabled: true
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
      }
    };
    this.chartCandleOptions1 = {
      series: [{
        data: seriesData
      }],
      chart: {
        type: "candlestick",
        height: 215,
        id: "candles",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#4454c3",
            downward: "#f72d66"
          }
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
      }
    };
    this.chartBarOptions = {
      series: [{
        name: "volume",
        data: seriesDataLinear
      }],
      chart: {
        height: 120,
        type: "bar",
        brush: {
          enabled: true,
          target: "candles"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: (/* @__PURE__ */ new Date("20 Jan 2017")).getTime(),
            max: (/* @__PURE__ */ new Date("10 Dec 2017")).getTime()
          },
          fill: {
            color: "#ccc",
            opacity: 0.4
          },
          stroke: {
            color: "#0D47A1"
          }
        }
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [{
              from: -1e3,
              to: 0,
              color: "#f39c12"
            }, {
              from: 1,
              to: 1e4,
              color: "#e74c3c"
            }]
          }
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          offsetX: 13
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
        labels: {
          show: false
        },
        style: {
          colors: "#8c9097",
          fontSize: "11px",
          fontWeight: 600,
          cssClass: "apexcharts-yaxis-label"
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "candle",
          data: [
            {
              x: /* @__PURE__ */ new Date(15387786e5),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: /* @__PURE__ */ new Date(15387804e5),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: /* @__PURE__ */ new Date(15387822e5),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: /* @__PURE__ */ new Date(1538784e6),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: /* @__PURE__ */ new Date(15387858e5),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: /* @__PURE__ */ new Date(15387876e5),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: /* @__PURE__ */ new Date(15387894e5),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: /* @__PURE__ */ new Date(15387912e5),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: /* @__PURE__ */ new Date(1538793e6),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: /* @__PURE__ */ new Date(15387948e5),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: /* @__PURE__ */ new Date(15387966e5),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: /* @__PURE__ */ new Date(15387984e5),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: /* @__PURE__ */ new Date(15388002e5),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: /* @__PURE__ */ new Date(1538802e6),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: /* @__PURE__ */ new Date(15388038e5),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: /* @__PURE__ */ new Date(15388056e5),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: /* @__PURE__ */ new Date(15388074e5),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: /* @__PURE__ */ new Date(15388092e5),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: /* @__PURE__ */ new Date(1538811e6),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: /* @__PURE__ */ new Date(15388128e5),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: /* @__PURE__ */ new Date(15388146e5),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: /* @__PURE__ */ new Date(15388164e5),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: /* @__PURE__ */ new Date(15388182e5),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: /* @__PURE__ */ new Date(153882e7),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: /* @__PURE__ */ new Date(15388218e5),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: /* @__PURE__ */ new Date(15388236e5),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: /* @__PURE__ */ new Date(15388254e5),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: /* @__PURE__ */ new Date(15388272e5),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: /* @__PURE__ */ new Date(1538829e6),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: /* @__PURE__ */ new Date(15388308e5),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: /* @__PURE__ */ new Date(15388326e5),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: /* @__PURE__ */ new Date(15388344e5),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: /* @__PURE__ */ new Date(15388362e5),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: /* @__PURE__ */ new Date(1538838e6),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: /* @__PURE__ */ new Date(15388398e5),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: /* @__PURE__ */ new Date(15388416e5),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: /* @__PURE__ */ new Date(15388434e5),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: /* @__PURE__ */ new Date(15388452e5),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: /* @__PURE__ */ new Date(1538847e6),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: /* @__PURE__ */ new Date(15388488e5),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: /* @__PURE__ */ new Date(15388506e5),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: /* @__PURE__ */ new Date(15388524e5),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: /* @__PURE__ */ new Date(15388542e5),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: /* @__PURE__ */ new Date(1538856e6),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: /* @__PURE__ */ new Date(15388578e5),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: /* @__PURE__ */ new Date(15388596e5),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: /* @__PURE__ */ new Date(15388614e5),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: /* @__PURE__ */ new Date(15388632e5),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: /* @__PURE__ */ new Date(1538865e6),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: /* @__PURE__ */ new Date(15388668e5),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: /* @__PURE__ */ new Date(15388686e5),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: /* @__PURE__ */ new Date(15388704e5),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: /* @__PURE__ */ new Date(15388722e5),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: /* @__PURE__ */ new Date(1538874e6),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: /* @__PURE__ */ new Date(15388758e5),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: /* @__PURE__ */ new Date(15388776e5),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: /* @__PURE__ */ new Date(15388794e5),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: /* @__PURE__ */ new Date(15388812e5),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: /* @__PURE__ */ new Date(1538883e6),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: /* @__PURE__ */ new Date(15388848e5),
              y: [6604.98, 6606, 6604.07, 6606]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "candlestick"
      },
      title: {
        text: "CandleStick Chart - Category X-axis",
        align: "left"
      },
      tooltip: {
        enabled: true
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: function(val) {
            return (0, import_moment.default)(val).format("MMM DD HH:mm");
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#4454c3",
            downward: "#f72d66"
          },
          wick: {
            useFillColor: true
          }
        }
      }
    };
    this.chartOptions3 = {
      series: [{
        name: "line",
        type: "line",
        data: [
          {
            x: /* @__PURE__ */ new Date(15387786e5),
            y: 6604
          },
          {
            x: /* @__PURE__ */ new Date(15387822e5),
            y: 6602
          },
          {
            x: /* @__PURE__ */ new Date(15388146e5),
            y: 6607
          },
          {
            x: /* @__PURE__ */ new Date(15388848e5),
            y: 6620
          }
        ]
      }, {
        name: "candle",
        type: "candlestick",
        data: [
          {
            x: /* @__PURE__ */ new Date(15387786e5),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
          },
          {
            x: /* @__PURE__ */ new Date(15387804e5),
            y: [6632.01, 6643.59, 6620, 6630.11]
          },
          {
            x: /* @__PURE__ */ new Date(15387822e5),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
          },
          {
            x: /* @__PURE__ */ new Date(1538784e6),
            y: [6635.65, 6651, 6629.67, 6638.24]
          },
          {
            x: /* @__PURE__ */ new Date(15387858e5),
            y: [6638.24, 6640, 6620, 6624.47]
          },
          {
            x: /* @__PURE__ */ new Date(15387876e5),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
          },
          {
            x: /* @__PURE__ */ new Date(15387894e5),
            y: [6624.61, 6632.2, 6617, 6626.02]
          },
          {
            x: /* @__PURE__ */ new Date(15387912e5),
            y: [6627, 6627.62, 6584.22, 6603.02]
          },
          {
            x: /* @__PURE__ */ new Date(1538793e6),
            y: [6605, 6608.03, 6598.95, 6604.01]
          },
          {
            x: /* @__PURE__ */ new Date(15387948e5),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
          },
          {
            x: /* @__PURE__ */ new Date(15387966e5),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
          },
          {
            x: /* @__PURE__ */ new Date(15387984e5),
            y: [6608.91, 6618.99, 6608.01, 6612]
          },
          {
            x: /* @__PURE__ */ new Date(15388002e5),
            y: [6612, 6615.13, 6605.09, 6612]
          },
          {
            x: /* @__PURE__ */ new Date(1538802e6),
            y: [6612, 6624.12, 6608.43, 6622.95]
          },
          {
            x: /* @__PURE__ */ new Date(15388038e5),
            y: [6623.91, 6623.91, 6615, 6615.67]
          },
          {
            x: /* @__PURE__ */ new Date(15388056e5),
            y: [6618.69, 6618.74, 6610, 6610.4]
          },
          {
            x: /* @__PURE__ */ new Date(15388074e5),
            y: [6611, 6622.78, 6610.4, 6614.9]
          },
          {
            x: /* @__PURE__ */ new Date(15388092e5),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
          },
          {
            x: /* @__PURE__ */ new Date(1538811e6),
            y: [6623.48, 6627, 6618.38, 6620.35]
          },
          {
            x: /* @__PURE__ */ new Date(15388128e5),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
          },
          {
            x: /* @__PURE__ */ new Date(15388146e5),
            y: [6615.53, 6617.93, 6610, 6615.19]
          },
          {
            x: /* @__PURE__ */ new Date(15388164e5),
            y: [6615.19, 6621.6, 6608.2, 6620]
          },
          {
            x: /* @__PURE__ */ new Date(15388182e5),
            y: [6619.54, 6625.17, 6614.15, 6620]
          },
          {
            x: /* @__PURE__ */ new Date(153882e7),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
          },
          {
            x: /* @__PURE__ */ new Date(15388218e5),
            y: [6625.95, 6626, 6611.66, 6617.58]
          },
          {
            x: /* @__PURE__ */ new Date(15388236e5),
            y: [6619, 6625.97, 6595.27, 6598.86]
          },
          {
            x: /* @__PURE__ */ new Date(15388254e5),
            y: [6598.86, 6598.88, 6570, 6587.16]
          },
          {
            x: /* @__PURE__ */ new Date(15388272e5),
            y: [6588.86, 6600, 6580, 6593.4]
          },
          {
            x: /* @__PURE__ */ new Date(1538829e6),
            y: [6593.99, 6598.89, 6585, 6587.81]
          },
          {
            x: /* @__PURE__ */ new Date(15388308e5),
            y: [6587.81, 6592.73, 6567.14, 6578]
          },
          {
            x: /* @__PURE__ */ new Date(15388326e5),
            y: [6578.35, 6581.72, 6567.39, 6579]
          },
          {
            x: /* @__PURE__ */ new Date(15388344e5),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
          },
          {
            x: /* @__PURE__ */ new Date(15388362e5),
            y: [6575.96, 6589, 6571.77, 6588.92]
          },
          {
            x: /* @__PURE__ */ new Date(1538838e6),
            y: [6588.92, 6594, 6577.55, 6589.22]
          },
          {
            x: /* @__PURE__ */ new Date(15388398e5),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
          },
          {
            x: /* @__PURE__ */ new Date(15388416e5),
            y: [6597.5, 6600, 6588.39, 6596.25]
          },
          {
            x: /* @__PURE__ */ new Date(15388434e5),
            y: [6598.03, 6600, 6588.73, 6595.97]
          },
          {
            x: /* @__PURE__ */ new Date(15388452e5),
            y: [6595.97, 6602.01, 6588.17, 6602]
          },
          {
            x: /* @__PURE__ */ new Date(1538847e6),
            y: [6602, 6607, 6596.51, 6599.95]
          },
          {
            x: /* @__PURE__ */ new Date(15388488e5),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
          },
          {
            x: /* @__PURE__ */ new Date(15388506e5),
            y: [6591.02, 6603.08, 6591, 6591]
          },
          {
            x: /* @__PURE__ */ new Date(15388524e5),
            y: [6591, 6601.32, 6585, 6592]
          },
          {
            x: /* @__PURE__ */ new Date(15388542e5),
            y: [6593.13, 6596.01, 6590, 6593.34]
          },
          {
            x: /* @__PURE__ */ new Date(1538856e6),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
          },
          {
            x: /* @__PURE__ */ new Date(15388578e5),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
          },
          {
            x: /* @__PURE__ */ new Date(15388596e5),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
          },
          {
            x: /* @__PURE__ */ new Date(15388614e5),
            y: [6596.25, 6604.2, 6590, 6602.99]
          },
          {
            x: /* @__PURE__ */ new Date(15388632e5),
            y: [6602.99, 6606, 6584.99, 6587.81]
          },
          {
            x: /* @__PURE__ */ new Date(1538865e6),
            y: [6587.81, 6595, 6583.27, 6591.96]
          },
          {
            x: /* @__PURE__ */ new Date(15388668e5),
            y: [6591.97, 6596.07, 6585, 6588.39]
          },
          {
            x: /* @__PURE__ */ new Date(15388686e5),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
          },
          {
            x: /* @__PURE__ */ new Date(15388704e5),
            y: [6596.44, 6601, 6590, 6596.55]
          },
          {
            x: /* @__PURE__ */ new Date(15388722e5),
            y: [6598.91, 6605, 6596.61, 6600.02]
          },
          {
            x: /* @__PURE__ */ new Date(1538874e6),
            y: [6600.55, 6605, 6589.14, 6593.01]
          },
          {
            x: /* @__PURE__ */ new Date(15388758e5),
            y: [6593.15, 6605, 6592, 6603.06]
          },
          {
            x: /* @__PURE__ */ new Date(15388776e5),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
          },
          {
            x: /* @__PURE__ */ new Date(15388794e5),
            y: [6604.44, 6604.44, 6600, 6603.5]
          },
          {
            x: /* @__PURE__ */ new Date(15388812e5),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
          },
          {
            x: /* @__PURE__ */ new Date(1538883e6),
            y: [6603.85, 6605, 6600, 6604.07]
          },
          {
            x: /* @__PURE__ */ new Date(15388848e5),
            y: [6604.98, 6606, 6604.07, 6606]
          }
        ]
      }],
      chart: {
        height: 350,
        type: "line"
      },
      grid: {
        borderColor: "#f2f5f7"
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          color: "#8c9097"
        }
      },
      stroke: {
        width: [3, 1]
      },
      colors: ["#3498db"],
      tooltip: {
        shared: true,
        custom: [
          function({ seriesIndex, dataPointIndex, w }) {
            return w.globals.series[seriesIndex][dataPointIndex];
          },
          function({ seriesIndex, dataPointIndex, w }) {
            const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
            return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + o + '</span></div><div>High: <span class="value">' + h + '</span></div><div>Low: <span class="value">' + l + '</span></div><div>Close: <span class="value">' + c + "</span></div></div>";
          }
        ]
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#4454c3",
            downward: "#f72d66"
          }
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
      }
    };
  }
  generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([baseval, y]);
      baseval += 864e5;
      i++;
    }
    return series;
  }
  static {
    this.\u0275fac = function CandlestickchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CandlestickchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandlestickchartsComponent, selectors: [["app-candlestickcharts"]], viewQuery: function CandlestickchartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 38, consts: [["chartCandle", ""], ["chartBar", ""], ["hassub", "", "sub", "Charts", "title1", "Apex Charts", "title", "Apex Candlestick Charts", "activeTitle", "Apex Candlestick Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "top-left"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "candlestick-basic"], ["id", "chart"], [3, "series", "chart", "plotOptions", "xaxis", "yaxis", "colors", "title"], [1, "top-right"], [1, "chart-box"], ["id", "chart-candlestick"], [3, "series", "plotOptions", "chart", "xaxis", "colors"], ["id", "chart-bar"], [3, "series", "chart", "plotOptions", "xaxis", "yaxis", "colors", "dataLabels", "stroke"], [1, "bottom-left"], ["id", "candlestick-categoryx"], [3, "series", "chart", "plotOptions", "xaxis", "yaxis", "title", "colors", "tooltip"], [1, "bottom-right"], ["id", "candlestick-line"], [3, "series", "chart", "plotOptions", "xaxis", "title", "tooltip", "colors", "stroke"]], template: function CandlestickchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
        \u0275\u0275element(4, "div", 6);
        \u0275\u0275elementStart(5, "div", 7)(6, "div", 8);
        \u0275\u0275text(7, "Basic Candlestick Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "div", 11);
        \u0275\u0275element(11, "apx-chart", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 4)(13, "div", 5);
        \u0275\u0275element(14, "div", 13);
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8);
        \u0275\u0275text(17, "Candlestick Synced With Brush Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 14)(20, "div", 15);
        \u0275\u0275element(21, "apx-chart", 16, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17);
        \u0275\u0275element(24, "apx-chart", 18, 1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "div", 4)(27, "div", 5);
        \u0275\u0275element(28, "div", 19);
        \u0275\u0275elementStart(29, "div", 7)(30, "div", 8);
        \u0275\u0275text(31, "Candlestick With Cateory X-axis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 9)(33, "div", 20)(34, "div", 11);
        \u0275\u0275element(35, "apx-chart", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 4)(37, "div", 5);
        \u0275\u0275element(38, "div", 22);
        \u0275\u0275elementStart(39, "div", 7)(40, "div", 8);
        \u0275\u0275text(41, "Candlestick With Line Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 9)(43, "div", 23)(44, "div", 11);
        \u0275\u0275element(45, "apx-chart", 24);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("colors", ctx.chartOptions.colors)("title", ctx.chartOptions.title);
        \u0275\u0275advance(10);
        \u0275\u0275property("series", ctx.chartCandleOptions1.series)("plotOptions", ctx.chartCandleOptions1.plotOptions)("chart", ctx.chartCandleOptions1.chart)("xaxis", ctx.chartCandleOptions1.xaxis)("colors", ctx.chartCandleOptions1.colors)("plotOptions", ctx.chartCandleOptions1.plotOptions);
        \u0275\u0275advance(3);
        \u0275\u0275property("series", ctx.chartBarOptions.series)("chart", ctx.chartBarOptions.chart)("plotOptions", ctx.chartBarOptions.plotOptions)("xaxis", ctx.chartBarOptions.xaxis)("yaxis", ctx.chartBarOptions.yaxis)("colors", ctx.chartBarOptions.colors)("dataLabels", ctx.chartBarOptions.dataLabels)("stroke", ctx.chartBarOptions.stroke)("plotOptions", ctx.chartBarOptions.plotOptions);
        \u0275\u0275advance(11);
        \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("plotOptions", ctx.chartOptions2.plotOptions)("xaxis", ctx.chartOptions2.xaxis)("yaxis", ctx.chartOptions2.yaxis)("title", ctx.chartOptions2.title)("colors", ctx.chartOptions2.colors)("tooltip", ctx.chartOptions2.tooltip);
        \u0275\u0275advance(10);
        \u0275\u0275property("series", ctx.chartOptions3.series)("chart", ctx.chartOptions3.chart)("plotOptions", ctx.chartOptions3.plotOptions)("xaxis", ctx.chartOptions3.xaxis)("title", ctx.chartOptions3.title)("tooltip", ctx.chartOptions3.tooltip)("colors", ctx.chartOptions3.colors)("stroke", ctx.chartOptions3.stroke);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandlestickchartsComponent, { className: "CandlestickchartsComponent", filePath: "src\\app\\components\\charts\\apexcharts\\candlestickcharts\\candlestickcharts.component.ts", lineNumber: 35 });
})();
export {
  CandlestickchartsComponent
};
//# sourceMappingURL=candlestickcharts.component-L7E6NPAX.js.map
