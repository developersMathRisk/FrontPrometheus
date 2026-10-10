import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LucideAngularModule, MousePointerClick } from 'lucide-angular';
import { CurvaEnFecha, RegistroService, ResumenCurva } from '../../../../../shared/services/registro.service';
import { mensajeDeError } from '../../../../../shared/components/tabla-estado/tabla-estado.component';
import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';

type Vista = 'grafico' | 'datos';

/**
 * Curvas (histórico cargado): una fila por curva con su fuente, rango de fechas y estado. Un clic abre los
 * datos de la curva en una fecha; doble clic, su gráfico (comparado con la fecha anterior). Las curvas
 * se actualizan solas cada día hábil (carga diaria): no hay botón de descarga para no sobrecargar el portal.
 */
@Component({
  selector: 'app-curvas-sbs',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule, LucideAngularModule, LoaderComponent, DatePickerComponent],
  templateUrl: './curvas-sbs.component.html',
  styleUrl: './curvas-sbs.component.scss',
})
export class CurvasSbsComponent implements OnInit, OnDestroy {
  @ViewChild('detalle') detalle!: TemplateRef<unknown>;
  private readonly modales = inject(NgbModal);

  readonly iconoClic = MousePointerClick;
  readonly hoy = new Date().toISOString().slice(0, 10);

  resumen: ResumenCurva[] = [];
  cargandoResumen = false;
  errorResumen = '';

  // Visor (modal)
  vista: Vista = 'grafico';
  curvaSeleccionada: string | null = null;
  fechaConsulta: string | null = null;
  curva: CurvaEnFecha | null = null;
  cargandoCurva = false;
  errorCurva = '';
  grafico: any = null;

  private temporizadorClic: ReturnType<typeof setTimeout> | null = null;

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.cargandoResumen = true;
    this.registroService.getResumenCurvas().subscribe({
      next: (r) => { this.resumen = r; this.cargandoResumen = false; },
      error: (e: HttpErrorResponse) => { this.errorResumen = mensajeDeError(e); this.cargandoResumen = false; },
    });
  }

  ngOnDestroy(): void {
    if (this.temporizadorClic) clearTimeout(this.temporizadorClic);
  }

  /** Días hábiles desde la última fecha cargada (sábados y domingos no cuentan). */
  diasHabilesAtraso(ultima: string): number {
    let d = new Date(ultima + 'T00:00:00');
    const fin = new Date(this.hoy + 'T00:00:00');
    let n = 0;
    while (d < fin) {
      d = new Date(d.getTime() + 86400000);
      if (d.getDay() !== 0 && d.getDay() !== 6) n++;
    }
    return n;
  }

  // Un clic espera un instante por si llega el segundo: así el doble clic no abre también los datos.
  alClic(codigo: string) {
    if (this.temporizadorClic) clearTimeout(this.temporizadorClic);
    this.temporizadorClic = setTimeout(() => { this.temporizadorClic = null; this.abrir(codigo, 'datos'); }, 240);
  }

  alDobleClic(codigo: string) {
    if (this.temporizadorClic) { clearTimeout(this.temporizadorClic); this.temporizadorClic = null; }
    this.abrir(codigo, 'grafico');
  }

  abrir(codigo: string, vista: Vista) {
    this.vista = vista;
    this.curvaSeleccionada = codigo;
    this.fechaConsulta = null;
    this.curva = null;
    this.grafico = null;
    this.cargarCurva();
    this.modales.open(this.detalle, { centered: true, scrollable: true, size: 'xl', windowClass: 'curva-modal' });
  }

  alCambiarFecha(fecha: string | null) {
    this.fechaConsulta = fecha;
    this.cargarCurva();
  }

  private cargarCurva() {
    if (!this.curvaSeleccionada) return;
    this.cargandoCurva = true;
    this.errorCurva = '';
    this.registroService.getCurvaEnFecha(this.curvaSeleccionada, this.fechaConsulta).subscribe({
      next: (c) => { this.curva = c; this.grafico = this.armarGrafico(c); this.cargandoCurva = false; },
      error: (e: HttpErrorResponse) => { this.curva = null; this.grafico = null; this.errorCurva = mensajeDeError(e); this.cargandoCurva = false; },
    });
  }

  variacionPb(p: { tasa: number; tasaAnterior: number | null }): number | null {
    return p.tasaAnterior == null ? null : (p.tasa - p.tasaAnterior) * 100;
  }

  private armarGrafico(c: CurvaEnFecha) {
    const series: any[] = [{ name: c.fecha, data: c.puntos.map(p => ({ x: p.plazo, y: p.tasa })) }];
    if (c.fechaAnterior) {
      series.push({ name: c.fechaAnterior, data: c.puntos.filter(p => p.tasaAnterior != null).map(p => ({ x: p.plazo, y: p.tasaAnterior })) });
    }
    return {
      series,
      chart: { type: 'line', height: 340, toolbar: { show: false }, zoom: { enabled: false } },
      colors: ['#3874B8', '#9aa5b1'],
      stroke: { width: [2.5, 1.5], dashArray: [0, 5] },
      markers: { size: c.puntos.length > 40 ? 0 : 3 },
      dataLabels: { enabled: false },
      legend: { position: 'top', horizontalAlign: 'left', fontSize: '11px' },
      xaxis: { type: 'numeric', title: { text: 'Plazo (días)', style: { fontSize: '11px' } }, labels: { style: { fontSize: '10px' } } },
      yaxis: { title: { text: 'Tasa (%)', style: { fontSize: '11px' } }, labels: { formatter: (v: number) => v.toFixed(2), style: { fontSize: '10px' } } },
      grid: { borderColor: 'rgba(128,128,128,0.15)' },
      tooltip: { x: { formatter: (v: number) => `${v} días` }, y: { formatter: (v: number) => `${v.toFixed(4)} %` } },
    };
  }
}
