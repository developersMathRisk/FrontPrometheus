export let lineChartData1: any = { 
  series: [
    {
      data: [83, 56, 80, 73, 61, 75, 81, 56],
    },
  ],
  chart: {
    height: 105,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  colors: ["rgb(249, 162, 60)"],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.02,
      opacityTo: 0.4,
      stops: [0, 100],
    },
  },
}
export let lineChartData2: any = { 
  series: [
    {
      data: [45, 78, 67, 78, 36, 78, 89, 84],
    },
  ],
  chart: {
    height: 105,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  colors: ['rgb(68, 84, 195)'],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.02,
      opacityTo: 0.4,
      stops: [0, 100],
    },
  },
}

export let lineChartData3: any = { 
  series: [
    {
      data: [56, 78, 36, 78, 29, 78, 37, 56],
    },
  ],
  chart: {
    height: 105,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'rgba(249, 162, 60,0.8)',
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  colors: ['rgb(70, 212, 151)'],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.02,
      opacityTo: 0.4,
      stops: [0, 100],
    },
  },
}

export let lineChartData4: any = { 
  series: [

    {
      data: [45, 78, 98, 34, 67, 28, 89, 45],
      name:'Betcoin'
    },
  ],
  chart: {
    height: 105,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  colors: ['rgb(248, 70, 120)'],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.02,
      opacityTo: 0.4,
      stops: [0, 100],
    },
  },
}
export let lineChartData5: any = { 
  series: [
    {
      name: "Last Price $",
      data: [254, 678, 346, 789, 452, 389, 576, 689, 937, 457, 782, 827],
    },
    {
      name: "Daily Change $",
      data: [154, 578, 226, 589, 252, 189, 376, 289, 637, 257, 582, 727],
    },
  ],
  chart: {
    height: 280,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    enabled: false,
    position: "top",
    horizontalAlign: "center",
    offsetX: -15,
    fontWeight: "bold",
  },
  stroke: {
    curve: "smooth",
    width: "3",
  },
  grid: {
    borderColor: "rgba(67, 87, 133, .09)",
  },
  colors: ["rgb(68,84,195)", "rgb(247,45,102)"],
  yaxis: {
    title: {
      style: {
        color: "#adb5be",
        fontSize: "14px",
        fontFamily: "poppins, sans-serif",
        fontWeight: 600,
        cssClass: "apexcharts-yaxis-label",
      },
    },
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
      "Dec",
    ],
    axisBorder: {
      show: true,
      color: "rgba(67, 87, 133, .09)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(67, 87, 133, .09)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}


// import { ChartConfiguration, ChartData, ChartOptions, ChartType } from "chart.js";
// //DoughNut Chart and Pie chart data



// export let lineChartData: ChartConfiguration<'line'>['data'] = {datasets: [
//   {
//     data: [83, 56, 89, 73, 61, 75, 86, 56],
//     label: "Bitcon",
//     backgroundColor: "rgb(249, 162, 60,0.06)",
//     borderColor: "rgba(249, 162, 60,0.8)",
//     fill: true,
//     // borderWidth: "3",
//     pointBorderColor: "transparent",
//     pointBackgroundColor: "transparent",
//     // lineTension: 0.3,
//   },
//   ],
//   }
//   export let lineChartOptions: ChartOptions<'line'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     interaction: {
//       intersect: false,
//       mode: "index",
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//       plugins: {
//       legend: {
//         display: false,
//       },
      
//       tooltip: {
//         enabled: true,
//       },
//     },
//   }
  
//   export let lineChartType: ChartType = 'line';

//   export let lineChartlegend: ChartType = 'line';