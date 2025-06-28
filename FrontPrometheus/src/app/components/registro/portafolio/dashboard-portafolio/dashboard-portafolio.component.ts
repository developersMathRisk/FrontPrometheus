import { Component, ViewChild } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { ChartOptions } from 'chart.js';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IndiceMercado } from '../../../../shared/models/factor/indice-mercado';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DetallePortafolioComponent } from "../detalle-portafolio/detalle-portafolio.component";
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { RegistroService } from '../../../../shared/services/registro.service';
import { CargaPortafolioProductoComponent } from "../carga-portafolio-producto/carga-portafolio-producto.component";
import { PortafolioInstrumento } from '../../../../shared/models/portafolio/portafolio-instrumento';

@Component({
  selector: 'app-dashboard-portafolio',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, MatTableModule, MatSortModule, MatPaginatorModule, FormsModule, NgSelectModule, DetallePortafolioComponent, CargaPortafolioProductoComponent],
  templateUrl: './dashboard-portafolio.component.html',
  styleUrl: './dashboard-portafolio.component.scss'
})
export class DashboardPortafolioComponent {
  fechaConsulta = new Date().toLocaleDateString('sv-SE');
  listaPortafolio: Portafolio[] = [];
  idPortafolioSeleccionado: number = 0;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions2: Partial<ChartOptions> | any;
  chartOptions4: any;

  modalRef: any;

  listDataResumen:PortafolioInstrumento[] = [];
  listDataResumenFiltrado:PortafolioInstrumento[] = [];
  listDataDetalle:IndiceMercado[] = [];

  dsResumen!: MatTableDataSource<PortafolioInstrumento>;
  @ViewChild('paginatorResumen') paginatorResumen!: MatPaginator;
  @ViewChild('sortResumen') sortResumen!: MatSort;
  displayedColumnsResumen: string[] = [
    'descripcionTipoInstrumento',
    'codISIN',
    'codticker',
    'cantidad',
    'precio'
  ];

  dsDetalle!: MatTableDataSource<IndiceMercado>;
  @ViewChild('paginatorDetalle') paginatorDetalle!: MatPaginator;
  @ViewChild('sortDetalle') sortDetalle!: MatSort;
  displayedColumnsDetalle: string[] = [
    'codigo',
    'codigo',
    'codigo',
    'codigo',
    'codigo',
    'codigo',
    'codigo',
    'codigo'
  ];

  constructor(private registroService: RegistroService, private modalService: NgbModal) {}

  ngOnInit(){
    this.obtenerListPortafolio();
    this.obtenerListPortafolioInstrumento();

    for(let i = 1; i < 10; i++){
      let objDataDetalle: IndiceMercado = new IndiceMercado();
      objDataDetalle.codigo = i;
      this.listDataDetalle.push(objDataDetalle);
    }
    this.dsDetalle = new MatTableDataSource<IndiceMercado>(this.listDataDetalle);
    this.dsDetalle.paginator = this.paginatorDetalle;
    this.dsDetalle.sort = this.sortDetalle;


    this.chartOptions2 = {
      series: [68, 55, 45],
      labels: ['Bono', 'Acción', 'Fondo de Inversión'],
      chart: {
        height: 200,
        type: 'donut',
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
        customLegendItems: ['Bono', 'Acción', 'Fondo de Inversión'],
      },
      colors: ["rgb(247,45,102)", "rgb(68,84,195)", "rgb(45,206,137)"],
    };

    this.chartOptions4 = {
      series: [
        {
          name: 'Madurez',
          data: [
            {
              x: '2024',
              y: 4000,
            },
            {
              x: '2025',
              y: 4432,
            },
            {
              x: '2026',
              y: 5423,
            },
            {
              x: '2027',
              y: 6653,
            },
          ],
        },
      ],
      colors: ['#4454c3'],
      chart: {
        height: 300,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Madurez por año'],
        markers: {
          fillColors: ['#4454c3'],
        },
      },
    };
  }

  obtenerListPortafolio(){
    this.registroService.getListaPortafolio().subscribe(
      (response: Portafolio[]) => {
        this.listaPortafolio = response;
      }
    )
  }

  obtenerListPortafolioInstrumento(){
    this.registroService.getListaPortafolioInstrumento().subscribe(
      (response: PortafolioInstrumento[]) => {
        this.listDataResumen = response;
        this.listDataResumenFiltrado = this.listDataResumen;
        this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listDataResumenFiltrado);
        this.dsResumen.paginator = this.paginatorResumen;
        this.dsResumen.sort = this.sortResumen;
      }
    )
  }

  abrirModalDetalle(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModal(event: any){
    this.modalRef.close();
    this.obtenerListPortafolio();
    this.obtenerListPortafolioInstrumento();
  }

  registrar(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  filtrarPortafolioInstrumentoResumen(){
    this.listDataResumenFiltrado = this.listDataResumen.filter(e => e.idPortafolio == this.idPortafolioSeleccionado);
    this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listDataResumenFiltrado);
    this.dsResumen.paginator = this.paginatorResumen;
    this.dsResumen.sort = this.sortResumen;
  }

}
