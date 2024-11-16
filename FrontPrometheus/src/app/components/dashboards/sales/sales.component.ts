import {Component, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {EarningRevenueData, ExpensesChartData, TotalRevenueChartData, UniqueVisitorsChartData } from '../../../shared/data/dashboard_chartData/salechart.data';
import { NgSelectModule } from '@ng-select/ng-select';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [RouterModule,SharedModule,NgbDropdownModule,FormsModule,ReactiveFormsModule,NgxEchartsModule,NgApexchartsModule,NgxEchartsModule,NgSelectModule,LeafletModule,OverlayscrollbarsModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent  {

  public ApexData1 = TotalRevenueChartData; 
  public ApexData2 = UniqueVisitorsChartData;
  public ApexData3 = ExpensesChartData;
  public chartOptions4 = EarningRevenueData;

  public generateData(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  center = latLng([46.879966, -121.726909]);
  options = {
    layers: [
      tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Open Street Map',
      }),
    ],
    zoom: 5,
    center: latLng(this.center),
  };
  
  get width() {
    return window.innerWidth;
  }
  
  @HostListener('resize')
  onMapReady(map: any) {
    setTimeout(() => map.invalidateSize(), 1);
  }

}