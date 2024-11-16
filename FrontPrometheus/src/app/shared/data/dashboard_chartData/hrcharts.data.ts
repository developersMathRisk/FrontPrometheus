export let applicationChartsData: any = {
    chart: {
        height: 170,
        width: 170,
        type: "radialBar",
      },
    
      series: [85],
      colors: ["#4454c3"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
}

export let ShortlistedChartsData: any = {
    chart: {
        height: 170,
        width: 170,
        type: "radialBar",
      },
    
      series: [60],
      colors: ["#2dce89"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
}

export let RejectedChartsData: any = {
    chart: {
        height: 170,
        width: 170,
        type: "radialBar",
      },
      series: [45],
      colors: ["#f7346b"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: true,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
}
export let projectTrackedChartData: any = {
    series: [
        {
          name: "Project In'",
          data: [
            1453, 3425, 7654, 3245, 4532, 5643, 7635, 5465, 6754, 5432, 5435, 6545,
          ],
        },
        {
          name: "Project take",
          data: [
            1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564, 3456,
          ],
        },
        {
          name: "On Hold",
          data: [
            1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564, 3456,
          ],
        },
      ],
      chart: {
        stacked: true,
        type: "bar",
        height: 310,
        toolbar: {
          show: false,
        },
      },
      grid: {
        borderColor: "rgba(67, 87, 133, .09)",
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: true, // Ensure y-axis grids are shown
          },
        },
      },
      colors: ["#4454c3", "#f72d66", "#cedbfd"],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#ebeff5",
              },
              {
                from: -45,
                to: 0,
                color: "#ebeff5",
              },
            ],
          },
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        position: "top",
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: "rgba(67, 87, 133, 0.05)",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(67, 87, 133, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          show: true,
          formatter: function (y:any) {
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
          color: "rgba(67, 87, 133, 0.05)",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "rgba(67, 87, 133, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          rotate: -90,
        },
      },
};

import { ChartConfiguration, ChartData, ChartType } from "chart.js";
//DoughNut Chart and Pie chart data

export let PieChartData: ChartConfiguration['data'] = {datasets: [
    {
        data: [68, 55, 45, 34, 27],
        backgroundColor: [
          "#4454c3",
          "#f72d66",
          "#2dce89",
          "#45aaf2",
          "#ecb403",
          "#ff5b51",
        ],
        hoverBackgroundColor: [
          "#4454c3",
          "#f72d66",
          "#2dce89",
          "#45aaf2",
          "#ecb403",
          "#ff5b51",
        ],
      },
      
  ],
  labels: ["Application", "Shortlisted", "Rejected", "On Hold", "Finalised"],
  }
  export let PieChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
          display: false,
          position: "top",
        },
      },
  }
  export let DoughnutChartType: ChartType = 'doughnut';

  export let PieChartType: ChartType = 'pie';