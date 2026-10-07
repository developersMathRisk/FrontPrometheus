import { Component, ViewChild } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { RegistroService } from '../../../../shared/services/registro.service';
import { CargaPortafolioProductoComponent } from "../carga-portafolio-producto/carga-portafolio-producto.component";
import { PortafolioInstrumento } from '../../../../shared/models/portafolio/portafolio-instrumento';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';

const COLORES_DISTRIBUCION = ['rgb(68,84,195)', 'rgb(247,45,102)', 'rgb(45,206,137)', 'rgb(240,165,30)', 'rgb(90,90,90)'];

@Component({
  selector: 'app-dashboard-portafolio',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, FormsModule, NgSelectModule, CommonModule, CargaPortafolioProductoComponent, DatePickerComponent],
  templateUrl: './dashboard-portafolio.component.html',
  styleUrl: './dashboard-portafolio.component.scss'
})
export class DashboardPortafolioComponent {
  fechaConsulta = new Date().toLocaleDateString('sv-SE');
  listaPortafolio: Portafolio[] = [];
  idPortafolioSeleccionado: number = 0;

  @ViewChild('chart') chart!: ChartComponent;
  // Distribución del valor de mercado por tipo de instrumento: se recalcula con datos reales
  // cada vez que cambia el filtro (ver recalcularIndicadores). Nada de series de ejemplo.
  public chartOptions2: any = { series: [], labels: [] };

  // Valor de mercado total: suma real de cantidad × precio de las posiciones filtradas.
  valorMercadoTotal = 0;

  modalRef: any;

  listDataResumen:PortafolioInstrumento[] = [];
  listDataResumenFiltrado:PortafolioInstrumento[] = [];

  dsResumen!: MatTableDataSource<PortafolioInstrumento>;
  @ViewChild('paginatorResumen') paginatorResumen!: MatPaginator;
  @ViewChild('sortResumen') sortResumen!: MatSort;
  displayedColumnsResumen: string[] = [
    'fechaValor',
    'descripcionPortafolio',
    'descripcionTipoInstrumento',
    'codISIN',
    'codticker',
    'cantidad',
    'precio',
    'total'
  ];

  constructor(private registroService: RegistroService, private modalService: NgbModal) {}

  ngOnInit(){
    this.obtenerListPortafolio();
    this.obtenerListPortafolioInstrumento();
  }

  obtenerListPortafolio(){
    this.registroService.getListaPortafolio().subscribe(
      (response: Portafolio[]) => {
        this.listaPortafolio = response;
        this.listaPortafolio = [
          { idPortafolio: 0, descripcionPortafolio: 'Todos'} as Portafolio,
          ...response
        ];
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
        this.filtrarPortafolioInstrumentoResumen();
      }
    )
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
    this.listDataResumenFiltrado = this.listDataResumen.filter(e => (this.idPortafolioSeleccionado == 0 || e.idPortafolio == this.idPortafolioSeleccionado) && (this.fechaConsulta ? new Date(e.fechaValor).toISOString().slice(0, 10) === this.fechaConsulta : true));
    this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listDataResumenFiltrado);
    this.dsResumen.paginator = this.paginatorResumen;
    this.dsResumen.sort = this.sortResumen;
    this.recalcularIndicadores();
  }

  // Valor de mercado total y distribución por tipo de instrumento, calculados a partir de las
  // posiciones reales ya filtradas (nada de cifras de ejemplo).
  private recalcularIndicadores() {
    this.valorMercadoTotal = this.listDataResumenFiltrado.reduce(
      (acc, p) => acc + (p.cantidad ?? 0) * (p.precio ?? 0), 0);

    const valorPorTipo = new Map<string, number>();
    for (const p of this.listDataResumenFiltrado) {
      const tipo = p.descripcionTipoInstrumento || 'Sin clasificar';
      valorPorTipo.set(tipo, (valorPorTipo.get(tipo) ?? 0) + (p.cantidad ?? 0) * (p.precio ?? 0));
    }
    const etiquetas = Array.from(valorPorTipo.keys());
    this.chartOptions2 = {
      series: Array.from(valorPorTipo.values()),
      labels: etiquetas,
      chart: { height: 200, type: 'donut' },
      dataLabels: { enabled: true },
      legend: { show: true, customLegendItems: etiquetas },
      colors: COLORES_DISTRIBUCION,
    };
  }

}
