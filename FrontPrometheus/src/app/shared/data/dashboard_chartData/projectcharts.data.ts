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