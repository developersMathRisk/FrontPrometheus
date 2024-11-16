export let StatusData: any = { 
    series: [
        {
          name: "Page views",
          type: "column",
          data: [
            1453, 3425, 7654, 3245, 4532, 5643, 7635, 5465, 6754, 5432, 5435, 6545,
          ],
        },
        {
          name: "New Visitors",
          type: "column",
          data: [
            1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564, 3456,
          ],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 315,
        type: "line",
        stacked: false,
        fontFamily: "roboto, sans-serif",
      },
      grid: {
        stroke: 1,
        borderColor: "rgba(67, 87, 133, .09)",
        color: "rgba(67, 87, 133, .09)",
        strokeDashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: undefined,
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
          "Dec",
        ],
        axisLine: {
          lineStyle: {
            color: "rgba(67, 87, 133, .09)",
          },
        },
        axisTicks: {
          show: true,
          color: "rgba(67, 87, 133, .09)",
        },
        axisBorder: {
          show: false,
          color: "rgba(67, 87, 133, .09)",
        },
        labels: {
          style: {
            colors: "rgba(67, 87, 133, .09)",
          },
        },
      },
      yaxis: [
        {
          show: true,
          axisLine: {
            lineStyle: {
              color: "rgba(67, 87, 133, .09)",
            },
          },
          axisTicks: {
            show: true,
            color: "rgba(67, 87, 133, .09)",
          },
          axisBorder: {
            show: false,
            color: "rgba(67, 87, 133, .09)",
          },
          labels: {
            style: {
              colors: "rgba(67, 87, 133, .09)",
            },
          },
          title: {
            text: undefined,
          },
          tooltip: {
            enabled: true,
          },
        },
      ],
      tooltip: {
        enabled: true,
      },
      legend: {
        show: true,
        position: "bottom",
        offsetX: 50,
        offsetY: 5,
        fontSize: "13px",
        fontWeight: "normal",
        labels: {
          colors: "rgba(67, 87, 133, .09)",
        },
        markers: {
          width: 10,
          height: 10,
        },
      },
      stroke: {
        width: [2, 2],
        dashArray: [0, 0],
      },
      plotOptions: {
        bar: {
          endingShape: 'rounded',
          columnWidth: "35%",
          horizontal: false,
        },
      },
      colors: ["#4454c3", "#f72d66"],
}
export let followerChartData: any = { 
  chart: {
    height: 225,
    type: "radialBar",
  },
  series: [85],
  colors: ["#4454c3"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "65%",
      },
      dataLabels: {
        name: {
          offsetY: 30,
          show: true,
        },
        value: {
          offsetY: -15,
          show: true,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Goal"],
}


import { ChartConfiguration, ChartData, ChartType } from "chart.js";
//DoughNut Chart and Pie chart data

export let PieChartData: ChartConfiguration['data'] = {datasets: [
    {
      data: [68, 55, 45],
      backgroundColor: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"],
      borderColor: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"],
    },
  ],
  }
  export let PieChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    plugins:{legend: {
      display: false,
    },
    
  }
  }
  export let DoughnutChartType: ChartType = 'doughnut';

  export let PieChartType: ChartType = 'pie';