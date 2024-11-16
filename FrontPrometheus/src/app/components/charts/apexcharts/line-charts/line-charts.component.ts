import { Component, ViewChild } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import {NgApexchartsModule,} from 'ng-apexcharts';
import * as chartData from '../../../../shared/data/charts/apex_chart';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  fill: ApexFill;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: any; // ApexTooltip;
  toolbar: any;
};

@Component({
    selector: 'app-line-charts',
    standalone: true,
    templateUrl: './line-charts.component.html',
    styleUrl: './line-charts.component.scss',
    imports: [SharedModule, NgApexchartsModule]
})
export class LineChartsComponent {
    public BasicLineData: any = chartData.BasicLineChartData;
    public DataLableLinechartData: any = chartData.DataLableLineChartData;
    public LineAnnotationData: any = chartData.LineAnnotationsData;
    public BrushChartsData1: any = chartData.BrushChartData1;
    public BrushChartsData2: any = chartData.BrushChartData2;
    public StepLineChartData: any = chartData.StepLineData;
    public GradientLineCahrtData: any = chartData.GradientLineData;
    public MissingNullChartData: any = chartData.MissingNullChartData;
    public DasheLineChartData: any = chartData.DasheLineChartData;
    public SyncingChartData1: any = chartData.SyncingChartData1;
    public SyncingChartData2: any = chartData.SyncingChartData2;
    public SyncingChartData3: any = chartData.SyncingChartData3;
    public ReatTimeChartData: any = chartData.ReatTimeChartData;
    public ZoomableChartData: any = chartData.ZoomableChartData;
    public commonOptions1: Partial<ChartOptions> | any = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    toolbar: {
      tools: {
        selection: false,
      },
    },
    markers: {
      size: 6,
      hover: {
        size: 10,
      },
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
    grid: {
      clipMarkers: false,
    },
    xaxis: {
      type: 'datetime',
    },
  };
  
  
    public generateDayWiseTimeSeries(
      baseval: number,
      count: number,
      yrange: { max: number; min: number }
    ) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
}  