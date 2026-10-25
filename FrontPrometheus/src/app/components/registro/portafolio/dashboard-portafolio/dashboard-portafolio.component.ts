import { Component, OnDestroy, ViewChild } from '@angular/core';
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
import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
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
export class DashboardPortafolioComponent implements OnDestroy {
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

  constructor(private registroService: RegistroService, private modalService: NgbModal, private asistente: AsistenteIaService) {}

  ngOnDestroy(): void {
    this.asistente.liberar('dashboard-portafolio');
  }

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
    // Las posiciones son una foto por fecha: para la fecha elegida se muestra, de cada portafolio, la foto más
    // reciente que no la supere (así hoy muestra la de ayer hasta que corra la carga diaria, en vez de una tabla vacía).
    const delPortafolio = this.listDataResumen.filter(e => this.idPortafolioSeleccionado == 0 || e.idPortafolio == this.idPortafolioSeleccionado);
    const dia = (e: PortafolioInstrumento) => String(e.fechaValor).slice(0, 10);
    if (!this.fechaConsulta) {
      this.listDataResumenFiltrado = delPortafolio;
    } else {
      const ultima = new Map<number, string>();
      for (const e of delPortafolio) {
        const f = dia(e);
        if (f <= this.fechaConsulta && f > (ultima.get(e.idPortafolio) ?? '')) ultima.set(e.idPortafolio, f);
      }
      this.listDataResumenFiltrado = delPortafolio.filter(e => dia(e) === ultima.get(e.idPortafolio));
    }
    this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listDataResumenFiltrado);
    this.dsResumen.paginator = this.paginatorResumen;
    this.dsResumen.sort = this.sortResumen;
    this.recalcularIndicadores();
  }

  // Valor de mercado total y distribución por tipo de instrumento, calculados a partir de las
  // posiciones reales ya filtradas (nada de cifras de ejemplo).
  private valorDe(p: PortafolioInstrumento): number {
    return (p.cantidad ?? 0) * (p.precio ?? 0);
  }

  private registrarAsistente(): void {
    const pos = this.listDataResumenFiltrado;
    const total = pos.reduce((s, p) => s + this.valorDe(p), 0);
    const nombre = this.listaPortafolio.find(p => p.idPortafolio == this.idPortafolioSeleccionado)?.descripcionPortafolio ?? 'Todos';
    const fmt = (v: number) => v.toLocaleString('es-PE', { maximumFractionDigits: 2 });
    const agrupar = (clave: (p: PortafolioInstrumento) => string) => {
      const m = new Map<string, number>();
      for (const p of pos) m.set(clave(p), (m.get(clave(p)) ?? 0) + this.valorDe(p));
      return [...m.entries()].sort((a, b) => b[1] - a[1]);
    };
    const pct = (v: number) => total ? `${(v / total * 100).toFixed(1)}%` : '—';
    this.asistente.registrar({
      clave: 'dashboard-portafolio',
      modulo: 'Portafolio · Visualización de posiciones',
      titulo: `Posiciones · ${nombre}`,
      interpretacion: pos.length
        ? `${pos.length} posiciones de ${nombre} al ${this.fechaConsulta || 'último corte'}, con valor de mercado de ${fmt(total)} (moneda de cada instrumento, sin convertir).`
        : 'No hay posiciones para el filtro elegido; cambie el portafolio o la fecha.',
      opciones: [
        { etiqueta: 'Mayor concentración', responder: () => {
          const top = agrupar(p => p.codticker || p.codISIN).slice(0, 5);
          if (!top.length) return 'No hay posiciones para analizar.';
          const hhi = agrupar(p => p.codticker || p.codISIN).reduce((s, [, v]) => s + (total ? (v / total) ** 2 : 0), 0);
          return 'Mayores posiciones: ' + top.map(([t, v], i) => `${i + 1}) ${t} ${pct(v)}`).join('; ') +
            `. Índice de concentración (HHI) ${(hhi * 10000).toFixed(0)}: ${hhi > 0.25 ? 'alta concentración' : hhi > 0.15 ? 'concentración moderada' : 'cartera diversificada'}.`;
        } },
        { etiqueta: 'Composición por tipo', responder: () => {
          const g = agrupar(p => p.descripcionTipoInstrumento || 'Sin clasificar');
          return g.length ? 'Por tipo de instrumento: ' + g.map(([t, v]) => `${t} ${pct(v)} (${fmt(v)})`).join('; ') + '.' : 'No hay posiciones.';
        } },
        { etiqueta: 'Composición por portafolio', responder: () => {
          const g = agrupar(p => p.descripcionPortafolio);
          return g.length ? g.map(([t, v]) => `${t}: ${fmt(v)} (${pct(v)})`).join('; ') + '.' : 'No hay posiciones.';
        } },
      ],
      placeholder: 'Pregunte sobre la cartera, p. ej. ¿qué riesgos ve en la composición?',
      datos: () => ({
        portafolio: nombre, fecha: this.fechaConsulta, totalPosiciones: pos.length, valorMercadoTotal: total,
        porTipo: agrupar(p => p.descripcionTipoInstrumento || 'Sin clasificar').map(([tipo, valor]) => ({ tipo, valor })),
        posiciones: [...pos].sort((a, b) => this.valorDe(b) - this.valorDe(a)).slice(0, 40).map(p => ({
          portafolio: p.descripcionPortafolio, tipo: p.descripcionTipoInstrumento, isin: p.codISIN, ticker: p.codticker,
          cantidad: p.cantidad, precio: p.precio, valor: this.valorDe(p), fecha: String(p.fechaValor).slice(0, 10) })),
      }),
    });
  }

  private recalcularIndicadores() {
    this.registrarAsistente();
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
