import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  NgApexchartsModule
} from "ng-apexcharts";
import { ExpensesChartData, TotalRevenueChartData, UniqueVisitorsChartData } from '../../../shared/data/dashboard_chartData/salechart.data';
import { ProjectsData, SalesRevenueData, SharesData, TotalOrdersData, TotalProfitsData, TotalSalesData, UsersData } from '../../../shared/data/widgetsCharts.data';
import * as chartData from '../../../shared/data/widgetsCharts.data';
import { BaseChartDirective  } from 'ng2-charts';

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
  selector: 'app-chart-widgets',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,BaseChartDirective ],
  templateUrl: './chart-widgets.component.html',
  styleUrl: './chart-widgets.component.scss'
})
export class ChartWidgetsComponent {
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public ApexData1 = TotalRevenueChartData; 
  public ApexData2 = UniqueVisitorsChartData;
  public ApexData3 = ExpensesChartData;
  public sparkline_bar1 = TotalSalesData;
  public sparkline_bar2 = TotalProfitsData;
  public sparkline_bar3 = TotalOrdersData;
  public sparkline_bar4 = SalesRevenueData;

 //Line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartData = chartData.lineChartData;
  //Line Chart1
  public lineChartOptions1 = chartData.lineChartOptions1;
  public lineChartType1 = chartData.lineChartType1;
  public lineChartData1 = chartData.lineChartData1;
  //Line Chart
  public lineChartOptions2 = chartData.lineChartOptions2;
  public lineChartType2 = chartData.lineChartType2;
  public lineChartData2 = chartData.lineChartData2;
  //Line Chart
  public lineChartOptions3 = chartData.lineChartOptions3;
  public lineChartType3 = chartData.lineChartType3;
  public lineChartData3 = chartData.lineChartData3;
  

  public SharesData = SharesData;
  public ProjectsData = ProjectsData;
  public UsersData = UsersData;
  

  constructor() {
    this.chartOptions = {
      chart: {
        height: 170,
        width: 170,
        type: "radialBar",
      },
    
      series: [85],
      colors: ["var(--primary-color)"],
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
    };
    this.chartOptions1 = {
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
    };
    this.chartOptions2 = {
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
    };
  }

  
}
