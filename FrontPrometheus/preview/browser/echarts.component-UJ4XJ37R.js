import {
  echarts_exports,
  time_exports
} from "./chunk-A3RX4DKI.js";
import {
  NGX_ECHARTS_CONFIG,
  NgxEchartsDirective,
  NgxEchartsModule
} from "./chunk-CCUPFDJS.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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

// src/app/components/charts/echarts/echarts.ts
var data = [
  [
    [28604, 77, 17096869, "Australia", 1990],
    [31163, 77.4, 27662440, "Canada", 1990],
    [1516, 68, 1154605773, "China", 1990],
    [13670, 74.7, 10582082, "Cuba", 1990],
    [28599, 75, 4986705, "Finland", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [28666, 78.1, 254830, "Iceland", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [2076, 67.9, 20194354, "North Korea", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [24021, 75.4, 3397534, "New Zealand", 1990],
    [43296, 76.8, 4240375, "Norway", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [26424, 75.7, 57110117, "United Kingdom", 1990],
    [37062, 75.4, 252847810, "United States", 1990]
  ],
  [
    [44056, 81.8, 23968973, "Australia", 2015],
    [43294, 81.7, 35939927, "Canada", 2015],
    [13334, 76.9, 1376048943, "China", 2015],
    [21291, 78.5, 11389562, "Cuba", 2015],
    [38923, 80.8, 5503457, "Finland", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [42182, 82.8, 329425, "Iceland", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [1390, 71.4, 25155317, "North Korea", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [34186, 80.6, 4528526, "New Zealand", 2015],
    [64304, 81.6, 5210967, "Norway", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [38225, 81.4, 64715810, "United Kingdom", 2015],
    [53354, 79.1, 321773631, "United States", 2015]
  ]
];

// src/app/shared/data/echart.data.ts
var echartHorizontalLineBarChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line"
    }
  ],
  color: "#4454c3"
};
var smoothlinechart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true
    }
  ],
  color: "#4454c3"
};
var basicAreaChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      areaStyle: {}
    }
  ],
  color: "#4454c3"
};
var stackedlineChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    textStyle: {
      color: "#777"
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"]
};
var stackedAreaChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    textStyle: {
      color: "#777"
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    }
  ],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top"
      },
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"]
};
var steplineChart = {
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["Step Start", "Step Middle", "Step End"],
    textStyle: {
      color: "#777"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      name: "Step Start",
      type: "line",
      step: "start",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Step Middle",
      type: "line",
      step: "middle",
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: "Step End",
      type: "line",
      step: "end",
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#ff5b51", "#45aaf2"]
};
var basicBarChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar"
    }
  ],
  color: "#4454c3"
};
var barBgChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)"
      }
    }
  ],
  color: "#4454c3"
};
var singleBarChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: "#f72d66"
          }
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: "bar"
    }
  ],
  color: "#4454c3"
};
var waterFallChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    },
    formatter: function(params) {
      let tar = params[1];
      return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    splitLine: { show: false },
    data: ["Total", "Rent", "Utilities", "Transportation", "Meals", "Other"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      itemStyle: {
        borderColor: "transparent",
        color: "transparent"
      },
      emphasis: {
        itemStyle: {
          borderColor: "transparent",
          color: "transparent"
        }
      },
      data: [0, 1700, 1400, 1200, 300, 0]
    },
    {
      name: "Life Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "inside"
      },
      data: [2900, 1200, 300, 200, 900, 300]
    }
  ],
  color: "#4454c3"
};
var barChartNegativeChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    type: "category",
    // axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    // splitLine: { show: false },
    data: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one"
    ],
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    }
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
        position: "right"
        // Set the position property to a valid value
      },
      data: [
        { value: -0.07 },
        { value: -0.09 },
        0.2,
        0.44,
        { value: -0.23 },
        0.08,
        { value: -0.17 },
        0.47,
        { value: -0.36 },
        0.18
      ]
    }
  ],
  color: "#4454c3"
};
var app = {};
var posList = [
  "left",
  "right",
  "top",
  "bottom",
  "inside",
  "insideTop",
  "insideLeft",
  "insideRight",
  "insideBottom",
  "insideTopLeft",
  "insideTopRight",
  "insideBottomLeft",
  "insideBottomRight"
];
app.config = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: "left",
      center: "center",
      right: "right"
    }
  },
  verticalAlign: {
    options: {
      top: "top",
      middle: "middle",
      bottom: "bottom"
    }
  },
  position: {
    options: posList.reduce(function(map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: "left",
  verticalAlign: "middle",
  position: "insideBottom",
  distance: 15,
  onChange: function() {
    const labelOption2 = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
  }
};
var labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: "{c}  {name|{a}}",
  fontSize: 16,
  rich: {
    name: {}
  }
};
var barLableChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["Forest", "Steppe", "Desert", "Wetland"],
    textStyle: {
      color: "#777"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar", "stack"] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["2012", "2013", "2014", "2015", "2016"],
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    }
  ],
  series: [
    {
      name: "Forest",
      type: "bar",
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: "series"
      },
      data: [320, 332, 301, 334, 390]
    },
    {
      name: "Steppe",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series"
      },
      data: [220, 182, 191, 234, 290]
    },
    {
      name: "Desert",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series"
      },
      data: [150, 232, 201, 154, 190]
    },
    {
      name: "Wetland",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series"
      },
      data: [98, 77, 101, 99, 40]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2"]
};
var horizontalBarChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    textStyle: {
      color: "#777"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    type: "category",
    data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      name: "2011",
      type: "bar",
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: "2012",
      type: "bar",
      data: [19325, 23438, 31e3, 121594, 134141, 681807]
    }
  ],
  color: ["#4454c3", "#f72d66"]
};
var horizontalStackedBarChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow"
      // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: "#777"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "20%",
    containLabel: true
  },
  xAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      name: "Direct",
      type: "bar",
      stack: "total",
      label: {
        show: true
      },
      emphasis: {
        focus: "series"
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: "Mail Ad",
      type: "bar",
      stack: "total",
      label: {
        show: true
      },
      emphasis: {
        focus: "series"
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Affiliate Ad",
      type: "bar",
      stack: "total",
      label: {
        show: true
      },
      emphasis: {
        focus: "series"
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Video Ad",
      type: "bar",
      stack: "total",
      label: {
        show: true
      },
      emphasis: {
        focus: "series"
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: "Search Engine",
      type: "bar",
      stack: "total",
      label: {
        show: true
      },
      emphasis: {
        focus: "series"
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"]
};
var pieChart = {
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    left: "left",
    textStyle: {
      color: "#777"
    }
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"]
};
var doughutChart = {
  tooltip: {
    trigger: "item"
  },
  legend: {
    top: "0%",
    left: "center",
    textStyle: {
      color: "#777"
    }
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "17",
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ]
    }
  ],
  color: ["#4454c3", "#f72d66", "#ecb403", "#45aaf2", "#ff5b51"]
};
var scatterChart = {
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      symbolSize: 20,
      data: [
        [10, 8.04],
        [8.07, 6.95],
        [13, 7.58],
        [9.05, 8.81],
        [11, 8.33],
        [14, 7.66],
        [13.4, 6.81],
        [10, 6.33],
        [14, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12, 6.26],
        [12, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: "scatter"
    }
  ],
  color: ["#4454c3"]
};
var bubbleChart = {
  legend: {
    right: "10%",
    top: "3%",
    data: ["1990", "2015"],
    textStyle: {
      color: "#777"
    }
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%"
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    scale: true
  },
  series: [
    {
      name: "1990",
      data: data[0],
      type: "scatter",
      symbolSize: function(data2) {
        return Math.sqrt(data2[2]) / 500;
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(25, 100, 150, 0.5)",
        shadowOffsetY: 5
      }
    },
    {
      name: "2015",
      data: data[1],
      type: "scatter",
      symbolSize: function(data2) {
        return Math.sqrt(data2[2]) / 500;
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(120, 36, 50, 0.5)",
        shadowOffsetY: 5
        // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
        //     {
        //         offset: 0,
        //         color: 'rgb(185, 93, 75)'
        //     },
        //     {
        //         offset: 1,
        //         color: 'rgb(185, 93, 75)'
        //     }
        // ])
      }
    }
  ],
  color: ["#49b6f5", "#e6533c"]
};
var candlestickChart = {
  grid: {
    left: "5%",
    right: "0%",
    bottom: "10%",
    top: "10%"
  },
  xAxis: {
    data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    }
  },
  series: [
    {
      type: "candlestick",
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42]
      ],
      itemStyle: {
        color: "#4454c3",
        color0: "#f72d66",
        borderColor: "#4454c3",
        borderColor0: "#f72d66"
      }
    }
  ]
};
var radarChart = {
  legend: {
    data: ["Allocated Budget", "Actual Spending"],
    left: "0%",
    top: "0%",
    textStyle: {
      color: "#777"
    }
  },
  radar: {
    indicator: [
      { name: "Sales", max: 6500 },
      { name: "Administration", max: 16e3 },
      { name: "Information Technology", max: 3e4 },
      { name: "Customer Support", max: 38e3 },
      { name: "Development", max: 52e3 },
      { name: "Marketing", max: 25e3 }
    ]
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3],
          name: "Allocated Budget"
        },
        {
          value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3],
          name: "Actual Spending"
        }
      ]
    }
  ],
  color: ["#4454c3", "#f72d66"]
};
var treemapChart = {
  series: [
    {
      type: "treemap",
      data: [
        {
          name: "nodeA",
          value: 10,
          children: [
            {
              name: "nodeAa",
              value: 4
            },
            {
              name: "nodeAb",
              value: 6
            }
          ]
        },
        {
          name: "nodeB",
          value: 20,
          children: [
            {
              name: "nodeBa",
              value: 20,
              children: [
                {
                  name: "nodeBa1",
                  value: 20
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  color: ["#4454c3", "#f72d66"]
};
var funnelChart = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ["Show", "Click", "Visit", "Inquiry", "Order"],
    textStyle: {
      color: "#777"
    }
  },
  series: [
    {
      name: "Funnel",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        show: true,
        position: "inside"
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: "Visit" },
        { value: 40, name: "Inquiry" },
        { value: 20, name: "Order" },
        { value: 80, name: "Click" },
        { value: 100, name: "Show" }
      ]
    }
  ],
  color: ["#4454c3", "#f72d66", "#fbbc0b", "#ee335e", "#49b6f5"]
};
var guageChart = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%"
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}"
      },
      data: [
        {
          value: 50,
          name: "SCORE"
        }
      ]
    }
  ],
  color: ["#4454c3"]
};
var graphChart = {
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      type: "graph",
      layout: "none",
      symbolSize: 50,
      roam: true,
      label: {
        show: true
      },
      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: "Node 1",
          x: 300,
          y: 300
        },
        {
          name: "Node 2",
          x: 800,
          y: 300
        },
        {
          name: "Node 3",
          x: 550,
          y: 100
        },
        {
          name: "Node 4",
          x: 550,
          y: 500
        }
      ],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        },
        {
          source: "Node 2",
          target: "Node 1",
          label: {
            show: true
          },
          lineStyle: {
            curveness: 0.2
          }
        },
        {
          source: "Node 1",
          target: "Node 3"
        },
        {
          source: "Node 2",
          target: "Node 3"
        },
        {
          source: "Node 2",
          target: "Node 4"
        },
        {
          source: "Node 1",
          target: "Node 4"
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ],
  color: ["#4454c3"]
};
var barChart = {
  title: {
    text: "Rainfall vs Evaporation",
    subtext: "Fake Data"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["Rainfall", "Evaporation"]
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: "category",
      // prettier-ignore
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Rainfall",
      type: "bar",
      data: [
        2,
        4.9,
        7,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20,
        6.4,
        3.3
      ],
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }]
      }
    },
    {
      name: "Evaporation",
      type: "bar",
      data: [
        2.6,
        5.9,
        9,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6,
        2.3
      ],
      markPoint: {
        data: [
          { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
          { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }]
      }
    }
  ],
  color: ["#4454c3", "#f72d66"]
};

// src/app/components/charts/echarts/echarts.component.ts
var EchartsComponent = class _EchartsComponent {
  constructor() {
    this.echartHorizontalLineBarChart = echartHorizontalLineBarChart;
    this.smoothlinechart = smoothlinechart;
    this.basicAreaChart = basicAreaChart;
    this.stackedlineChart = stackedlineChart;
    this.stackedAreaChart = stackedAreaChart;
    this.steplineChart = steplineChart;
    this.basicBarChart = basicBarChart;
    this.barBgChart = barBgChart;
    this.singleBarChart = singleBarChart;
    this.waterFallChart = waterFallChart;
    this.barChartNegativeChart = barChartNegativeChart;
    this.barLableChart = barLableChart;
    this.horizontalBarChart = horizontalBarChart;
    this.horizontalStackedBarChart = horizontalStackedBarChart;
    this.pieChart = pieChart;
    this.doughutChart = doughutChart;
    this.scatterChart = scatterChart;
    this.bubbleChart = bubbleChart;
    this.radarChart = radarChart;
    this.candlestickChart = candlestickChart;
    this.treemapChart = treemapChart;
    this.funnelChart = funnelChart;
    this.guageChart = guageChart;
    this.graphChart = graphChart;
    this.barChart = barChart;
  }
  ngOnInit() {
    this.options = {
      title: {
        top: 30,
        left: "center",
        text: "Daily Step Count"
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 1e4,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["auto", 13],
        range: "2016",
        itemStyle: {
          borderWidth: 0.5
        },
        yearLabel: { show: false }
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: this.getVirtualData("2016")
      }
    };
  }
  getVirtualData(year) {
    const date = +time_exports.parse(year + "-01-01");
    const end = +time_exports.parse(+year + 1 + "-01-01");
    const dayTime = 3600 * 24 * 1e3;
    const data2 = [];
    for (let time = date; time < end; time += dayTime) {
      data2.push([
        time_exports.format(time, "{yyyy}-{MM}-{dd}", false),
        Math.floor(Math.random() * 1e4)
      ]);
    }
    return data2;
  }
  static {
    this.\u0275fac = function EchartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EchartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EchartsComponent, selectors: [["app-echarts"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NGX_ECHARTS_CONFIG,
        useFactory: () => ({ echarts: echarts_exports })
      }
    ]), \u0275\u0275StandaloneFeature], decls: 184, vars: 26, consts: [["hassub", "", "sub", "Home", "title1", "Charts", "title", "Echarts Charts", "activeTitle", "Echarts Charts"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "echart-basic-line", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-smoothed-line", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-basic-area", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-stacked-line", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-stacked-area", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-step-line", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bar-basic", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bar-background", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bar-single", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-waterfall", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-negative-values", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bar-labels", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bar-horizontal", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-stacked-horizontal", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-pie", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-doughnut", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-scatter", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-bubble", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-simple-graph", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-candlestick", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-basic-radar", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-heatmap", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-treemap", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-funnel", "echarts", "", 1, "echart-charts", 3, "options"], ["id", "echart-gauge-basic", "echarts", "", 1, "echart-charts", 3, "options"]], template: function EchartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Basic Line Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "div", 5);
        \u0275\u0275text(13, "Smoothed Line Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275element(15, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 5);
        \u0275\u0275text(20, "Basic Area Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6);
        \u0275\u0275element(22, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 2)(24, "div", 3)(25, "div", 4)(26, "div", 5);
        \u0275\u0275text(27, "Stacked Line Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 6);
        \u0275\u0275element(29, "div", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 5);
        \u0275\u0275text(34, "Stacked Area Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 6);
        \u0275\u0275element(36, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "div", 5);
        \u0275\u0275text(41, "Step Line Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 6);
        \u0275\u0275element(43, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 2)(45, "div", 3)(46, "div", 4)(47, "div", 5);
        \u0275\u0275text(48, "Basic Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 6);
        \u0275\u0275element(50, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 2)(52, "div", 3)(53, "div", 4)(54, "div", 5);
        \u0275\u0275text(55, "Bar With Background Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 6);
        \u0275\u0275element(57, "div", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 2)(59, "div", 3)(60, "div", 4)(61, "div", 5);
        \u0275\u0275text(62, "Style For a Single Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 6);
        \u0275\u0275element(64, "div", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 2)(66, "div", 3)(67, "div", 4)(68, "div", 5);
        \u0275\u0275text(69, "Water Fall Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 6);
        \u0275\u0275element(71, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "div", 5);
        \u0275\u0275text(76, "Bar With Negative Values Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 6);
        \u0275\u0275element(78, "div", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 2)(80, "div", 3)(81, "div", 4)(82, "div", 5);
        \u0275\u0275text(83, "Bar With Labels Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 6);
        \u0275\u0275element(85, "div", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 2)(87, "div", 3)(88, "div", 4)(89, "div", 5);
        \u0275\u0275text(90, "Horizontal Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 6);
        \u0275\u0275element(92, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "div", 2)(94, "div", 3)(95, "div", 4)(96, "div", 5);
        \u0275\u0275text(97, "Horizontal Stacked Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div", 6);
        \u0275\u0275element(99, "div", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 2)(101, "div", 3)(102, "div", 4)(103, "div", 5);
        \u0275\u0275text(104, "Pie Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 6);
        \u0275\u0275element(106, "div", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "div", 2)(108, "div", 3)(109, "div", 4)(110, "div", 5);
        \u0275\u0275text(111, "Doughnut Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 6);
        \u0275\u0275element(113, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 2)(115, "div", 3)(116, "div", 4)(117, "div", 5);
        \u0275\u0275text(118, "Basic Scatter Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 6);
        \u0275\u0275element(120, "div", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "div", 2)(122, "div", 3)(123, "div", 4)(124, "div", 5);
        \u0275\u0275text(125, "Basic Bubble Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 6);
        \u0275\u0275element(127, "div", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(128, "div", 2)(129, "div", 3)(130, "div", 4)(131, "div", 5);
        \u0275\u0275text(132, "Simple Graph Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 6);
        \u0275\u0275element(134, "div", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 2)(136, "div", 3)(137, "div", 4)(138, "div", 5);
        \u0275\u0275text(139, "Candlestick Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 6);
        \u0275\u0275element(141, "div", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "div", 2)(143, "div", 3)(144, "div", 4)(145, "div", 5);
        \u0275\u0275text(146, "Basic Radar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "div", 6);
        \u0275\u0275element(148, "div", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "div", 2)(150, "div", 3)(151, "div", 4)(152, "div", 5);
        \u0275\u0275text(153, "Heatmap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "div", 6);
        \u0275\u0275element(155, "div", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(156, "div", 2)(157, "div", 3)(158, "div", 4)(159, "div", 5);
        \u0275\u0275text(160, "Treemap Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div", 6);
        \u0275\u0275element(162, "div", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "div", 2)(164, "div", 3)(165, "div", 4)(166, "div", 5);
        \u0275\u0275text(167, "Funnel Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "div", 6);
        \u0275\u0275element(169, "div", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(170, "div", 2)(171, "div", 3)(172, "div", 4)(173, "div", 5);
        \u0275\u0275text(174, "Basic Gauge Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(175, "div", 6);
        \u0275\u0275element(176, "div", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(177, "div", 2)(178, "div", 3)(179, "div", 4)(180, "div", 5);
        \u0275\u0275text(181, "Bar Chart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 6);
        \u0275\u0275element(183, "div", 31);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("options", ctx.echartHorizontalLineBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.smoothlinechart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.basicAreaChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.stackedlineChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.stackedAreaChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.steplineChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.basicBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.barBgChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.singleBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.waterFallChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.barChartNegativeChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.barLableChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.horizontalBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.horizontalStackedBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.pieChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.doughutChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.scatterChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.bubbleChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.graphChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.candlestickChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.radarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.options);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.treemapChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.funnelChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.guageChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.barChart);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgxEchartsModule, NgxEchartsDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EchartsComponent, { className: "EchartsComponent", filePath: "src\\app\\components\\charts\\echarts\\echarts.component.ts", lineNumber: 22 });
})();
export {
  EchartsComponent
};
//# sourceMappingURL=echarts.component-UJ4XJ37R.js.map
