// src/app/shared/data/dashboard_chartData/projectcharts.data.ts
var PieChartData = {
  datasets: [
    {
      data: [68, 55, 45],
      backgroundColor: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"],
      borderColor: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"]
    }
  ]
};
var PieChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
};
var DoughnutChartType = "doughnut";
var PieChartType = "pie";

export {
  PieChartData,
  PieChartOptions,
  DoughnutChartType,
  PieChartType
};
//# sourceMappingURL=chunk-FM5J3RCL.js.map
