import { ChartConfiguration, ChartType } from "chart.js"

export let TotalSalesData : any = {
    chart: {
        type: "bar",
        height: 50,
        barWidth: 5,
        barSpacing: 7,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
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
          name: "Total Revenue",
          data: [
            2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
            5, 4, 3, 4, 5,
          ],
        },
      ],
      yaxis: {
        min: 0,
      },
      colors: ["var(--primary-color)"],
}
export let TotalProfitsData : any = {
    chart: {
        type: "bar",
        height: 50,
        barWidth: 5,
        barSpacing: 7,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
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
          name: "Total Revenue",
          data: [
            2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
            5, 4, 3, 4, 5,
          ],
        },
      ],
      yaxis: {
        min: 0,
      },
      colors: ["#f7346b"],
}
export let TotalOrdersData : any = {
    chart: {
        type: "bar",
        height: 50,
        barWidth: 5,
        barSpacing: 7,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
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
          name: "Total Revenue",
          data: [
            2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
            5, 4, 3, 4, 5,
          ],
        },
      ],
      yaxis: {
        min: 0,
      },
      colors: ["#2dce89"],
}

export let SalesRevenueData : any = {
    chart: {
        type: "bar",
        height: 50,
        barWidth: 5,
        barSpacing: 7,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
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
          name: "Total Revenue",
          data: [
            2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
            5, 4, 3, 4, 5,
          ],
        },
      ],
      yaxis: {
        min: 0,
      },
      colors: ["#45aaf2"],
}

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
    elements: {
        line: {
          tension: 0.5,
        },
      },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
        //   display: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  }
  export let lineChartType: ChartType = 'line';
  export let lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [85, 72, 79, 73, 78, 75, 86, 56],
    label: "Bitcon",
    backgroundColor: "rgb(68, 84, 195,0.06)",
    borderColor: "rgba(68, 84, 195,0.6)",
    tension: 0.3,
    fill: true,
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(156, 197, 106)',
   
      },
    ],
     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  };

  //Line Charts
export let lineChartOptions1: ChartConfiguration['options'] = {
    elements: {
        line: {
          tension: 0.5,
        },
      },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
        //   display: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  }
  export let lineChartType1: ChartType = 'line';
  export let lineChartData1: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [45, 78, 67, 78, 66, 78, 89, 84],
    label: "Nem",
    backgroundColor: "rgb(68, 84, 195,0.06)",
    borderColor: "rgba(68, 84, 195,0.6)",
    tension: 0.3,
    fill: true,
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(156, 197, 106)',
   
      },
    ],
     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  };
    //Line Charts
export let lineChartOptions2: ChartConfiguration['options'] = {
    elements: {
        line: {
          tension: 0.5,
        },
      },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
        //   display: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  }
  export let lineChartType2: ChartType = 'line';
  export let lineChartData2: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [56, 78, 56, 78, 59, 78, 37, 56],
    label: "Ripple",
    backgroundColor: "rgb(68, 84, 195,0.06)",
    borderColor: "rgba(68, 84, 195,0.6)",
    tension: 0.3,
    fill: true,
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(156, 197, 106)',
   
      },
    ],
     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  };

      //Line Charts
export let lineChartOptions3: ChartConfiguration['options'] = {
    elements: {
        line: {
          tension: 0.5,
        },
      },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
        //   display: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  }
  export let lineChartType3: ChartType = 'line';
  export let lineChartData3: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [52, 59, 78, 54, 67, 28, 89, 45],
    label: "Neo",
    backgroundColor: "rgb(68, 84, 195,0.06)",
    borderColor: "rgba(68, 84, 195,0.6)",
    tension: 0.3,
    fill: true,
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(156, 197, 106)',
      },
    ],
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  };

  export let SharesData : any = { 
    chart: {
        height: 200,
        width: 200,
        type: "radialBar",
      },
    
      series: [65],
      colors: ["var(--primary-color)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              offsetX: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
  }
  export let ProjectsData : any = { 
    chart: {
        height: 200,
        width: 200,
        type: "radialBar",
      },
    
      series: [60],
      colors: ["#f72d66"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              offsetX: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
  }
  export let UsersData : any = { 
    chart: {
        height: 200,
        width: 200,
        type: "radialBar",
      },
    
      series: [60],
      colors: ["#3fd294"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              offsetX: 10,
              color: "#4b9bfa",
              fontSize: "1.25rem",
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Followers"],
  }
