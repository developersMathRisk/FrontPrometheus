import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { projectTrackedChartData,ShortlistedChartsData,RejectedChartsData,applicationChartsData } from '../../../shared/data/dashboard_chartData/hrcharts.data';
import * as chartData from '../../../shared/data/dashboard_chartData/hrcharts.data';
import { BaseChartDirective } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,BaseChartDirective,NgbModule],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.scss'
})
export class HrComponent {
  public chartOptions= applicationChartsData;
  public chartOptions1= ShortlistedChartsData;
  public chartOptions2= RejectedChartsData;
  public chartOptions3 = projectTrackedChartData;
  //Doughnut and Pie Chart Data
public PieChartData = chartData.PieChartData;
public PieChartOptions = chartData.PieChartOptions;
public PieChartType = chartData.PieChartType;
public DoughnutChartType = chartData.DoughnutChartType;
  constructor() {

}
}
