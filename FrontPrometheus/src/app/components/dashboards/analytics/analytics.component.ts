import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  NgApexchartsModule
} from "ng-apexcharts";
import { StatusData} from '../../../shared/data/dashboard_chartData/analyticscharts.data';
import * as chartData from '../../../shared/data/dashboard_chartData/projectcharts.data';
import { BaseChartDirective } from 'ng2-charts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  colors:string[];
};


@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [RouterModule,SharedModule,NgbModule,NgCircleProgressModule,NgApexchartsModule,BaseChartDirective],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})

export class AnalyticsComponent {

  // Goal = "Goal"
  public statusData = StatusData;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions> | any;
  
  //Doughnut and Pie Chart Data
public PieChartData = chartData.PieChartData;
public PieChartOptions = chartData.PieChartOptions;
public PieChartType = chartData.PieChartType;
public DoughnutChartType = chartData.DoughnutChartType;
  constructor() {
    this.chartOptions = {
      chart: {
        height: 248,
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
    };
    this.chartOptions2= {
      series: [300, 50, 100],
  chart: {
    height: 250,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#2dce89", "#4454c3", "#ff5b51"],
    };
  }
}