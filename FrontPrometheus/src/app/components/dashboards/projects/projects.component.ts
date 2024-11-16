import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from 'chart.js';
import * as chartData from '../../../shared/data/dashboard_chartData/projectcharts.data';
import { BaseChartDirective } from 'ng2-charts';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule,SharedModule,NgbModule,NgApexchartsModule,BaseChartDirective,OverlayscrollbarsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})  
export class ProjectsComponent  {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;

//Doughnut and Pie Chart Data
public PieChartData = chartData.PieChartData;
public PieChartOptions = chartData.PieChartOptions;
public PieChartType = chartData.PieChartType;
public DoughnutChartType = chartData.DoughnutChartType;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [13, 26, 20, 93, 61, 140, 85, 96],
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
      colors: ['rgb(68,84,195)'],

      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 60],
        },
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Project Budget",
          data: [
            7635, 5465, 6754, 5432, 5435, 6545, 4453, 3425, 7654, 3245, 4532, 5643,
          ],
        },
        {
          name: "Expenses",
          data: [
            5435, 3452, 5432, 3452, 2564, 3456, 3123, 2435, 5463, 1245, 3245, 4534,
          ],
        },
      ],
      chart: {
        height: 325,
        type: "line",
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
    this.chartOptions2= {
      series: [68, 55, 45],
  chart: {
    height: 270,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"],
    };
  }
  }
