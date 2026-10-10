import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LucideAngularModule, RefreshCw } from 'lucide-angular';
import {
  CurvaEnFecha, RegistroService, ResultadoActualizacionCurva, ResumenCurva,
} from '../../../../../shared/services/registro.service';
import { mensajeDeError } from '../../../../../shared/components/tabla-estado/tabla-estado.component';
import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';

/**
 * Curvas SBS (histórico): qué hay cargado por curva (desde, hasta, cuántas fechas, si está al día), la
 * actualización automática desde el portal de la SBS y un visor de la curva en una fecha comparada con
 * la fecha anterior. Las curvas se actualizan solas cada día hábil (carga diaria); el botón lo hace al momento.
 */
@Component({
  selector: 'app-curvas-sbs',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule, LucideAngularModule, LoaderComponent, DatePickerComponent],
  templateUrl: './curvas-sbs.component.html',
  styleUrl: './curvas-sbs.component.scss',
})
export class CurvasSbsComponent implements OnInit {
  readonly iconoActualizar = RefreshCw;
  readonly hoy = new Date().toISOString().slice(0, 10);

  resumen: ResumenCurva[] = [];
  cargandoResumen = false;
  errorResumen = '';

  actualizando = false;
  resultados: ResultadoActualizacionCurva[] = [];
  errorActualizar = '';

  curvaSeleccionada: string | null = null;
  fechaConsulta: string | null = null;
  curva: CurvaEnFecha | null = null;
  cargandoCurva = false;
  errorCurva = '';
  grafico: any = null;

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.cargarResumen();
  }

  cargarResumen() {
    this.cargandoResumen = true;
    this.errorResumen = '';
    this.registroService.getResumenCurvas().subscribe({
      next: (r) => {
        this.resumen = r;
        this.cargandoResumen = false;
        if (!this.curvaSeleccionada && r.length) this.seleccionar(r.find(c => c.curva === 'CCPSS')?.curva ?? r[0].curva);
        else if (this.curvaSeleccionada) this.cargarCurva();
      },
      error: (e: HttpErrorResponse) => { this.errorResumen = mensajeDeError(e); this.cargandoResumen = false; },
    });
  }

  /** Días hábiles aproximados desde la última fecha cargada (sábados y domingos no cuentan). */
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

  actualizar() {
    this.actualizando = true;
    this.errorActualizar = '';
    this.resultados = [];
    this.registroService.actualizarCurvasSbs().subscribe({
      next: (r) => { this.resultados = r; this.actualizando = false; this.cargarResumen(); },
      error: (e: HttpErrorResponse) => { this.errorActualizar = mensajeDeError(e); this.actualizando = false; },
    });
  }

  seleccionar(codigo: string) {
    this.curvaSeleccionada = codigo;
    this.fechaConsulta = null;
    this.cargarCurva();
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

  private armarGrafico(c: CurvaEnFecha) {
    const series: any[] = [{ name: c.fecha, data: c.puntos.map(p => ({ x: p.plazo, y: p.tasa })) }];
    if (c.fechaAnterior) {
      series.push({ name: c.fechaAnterior, data: c.puntos.filter(p => p.tasaAnterior != null).map(p => ({ x: p.plazo, y: p.tasaAnterior })) });
    }
    return {
      series,
      chart: { type: 'line', height: 260, toolbar: { show: false }, zoom: { enabled: false }, animations: { enabled: false } },
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
