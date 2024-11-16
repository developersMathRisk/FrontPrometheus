import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, NgApexchartsModule } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  offsetX:boolean;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  colors:string[];
};

@Component({
  selector: 'app-file-list-01',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './file-list-01.component.html',
  styleUrl: './file-list-01.component.scss'
})
export class FileList01Component {
  public chartOptions: Partial<ChartOptions>;

	constructor() {
      this.chartOptions = {
        chart: {
          height: 100,
          width: 100,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
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
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: "1rem",
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
