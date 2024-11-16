import { ChartConfiguration, ChartType } from "chart.js";

export let TotalRevenueChartData : any = {
    chart: {
        type: "area",
        height: 60,
        width: 160,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          opacity: 0.2,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
    series: [
      {
        name: 'Total Revenue',
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27,
           54, 43, 19, 46,
        ],
      },
    ],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
      },
      colors: ["#4454c3"],
  };
  

  export let UniqueVisitorsChartData : any = {
    chart: {
      type: 'area',
      height: 60,
      width: 160,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Unique Visitors',
        data: [
          0, 45, 53, 61, 27, 54, 43,93,19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27,
        ],
      },
    ],
    yaxis: {
      min: 0,
    },
    colors: ['#2dce89'],
  };

  export let ExpensesChartData : any = {
    chart: {
      type: 'area',
      height: 60,
      width: 160,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Expenses',
        data: [
          0 , 93, 35, 41, 35, 27, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24,
          65, 31, 37, 39, 62, 51,
        ],
      },
    ],
    yaxis: {
      min: 0,
    },
    colors: ['#ff5b51'],
  };
  export let EarningRevenueData : any = {
    series: [
        {
          name: "Sales",
          data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
        },
      ],
      chart: {
        type: "area",
        height: 386,
        toolbar: {
          show: false
        }
      },
      colors: [
        "var(--primary-color)",
        "rgb(69, 214, 91)",
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 2,
          opacityFrom: 2,
          opacityTo: 2,
          stops: [0, 90, 100],
          colorStops: [
            [
              {
                offset: 0,
                color: "var(--primary01)",
                opacity: 50
              },
            ],
            [
              {
                offset: 0,
                color: 'rgba(69, 214, 91, 0.1)',
                opacity: 1
              },
            ],
          ]
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
          width: 5,
          height: 5,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
      },
      stroke: {
        curve: 'smooth',
        width: [4],
        lineCap: 'round',
      },
      grid: {
        borderColor: "#edeef1",
        strokeDashArray: 2,
      },
      yaxis: {
        axisBorder: {
          show: false,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 10,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          formatter: function (y: number) {
            return y.toFixed(0) + "";
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
          "sep",
          "oct",
          "nov",
          "dec",
        ],
        axisBorder: {
          show: false,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          rotate: -90,
        },
      },
    }
