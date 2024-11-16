import { Component, ElementRef, HostListener, Renderer2, TemplateRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-filemanager',
  standalone: true,
  imports: [SharedModule,NgbModule,NgApexchartsModule],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {
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
  FileData = [
    {
      src:'./assets/images/files/file.png',
      Category:'document.pdf',
      Size:'23kb',
     },
     {
      src:'./assets/images/files/folder.png',
      Category:'Images',
      Size:'1.23gb',
     },
     {
      src:'./assets/images/files/folder.png',
      Category:'Music',
      Size:'897mb',
     },
      {
      src:'./assets/images/files/folder.png',
      Category:'Downloads',
      Size:'453kb',
     },

     {
      src:'./assets/images/files/folder.png',
      Category:'Videos',
      Size:'1.5gb',
     }, {
      src:'./assets/images/files/folder.png',
      Category:'Documents',
      Size:'234mb',
     },
     {
      src:'./assets/images/photos/1.jpg',
      logo:'fa-music',
      Category:'topmp4song.mp4',
      Size:'4kb',
     },
     {
      src:'./assets/images/photos/2.jpg',
      Category:'image.jpg',
      Size:'65kb',
     },
     {
      src:'./assets/images/files/folder.png',
      Category:'File documents',
      Size:'1.23gb',
     }, {
      src:'./assets/images/files/folder.png',
      Category:'New Folder',
      Size:'897mb',
     },
     {
      src:'./assets/images/files/word.png',
      Category:'Word document',
      Size:'23kb',
     },
     {
      src:'./assets/images/files/file.png',
      Category:'document.pdf',
      Size:'23kb',
     },
   
  ]
}