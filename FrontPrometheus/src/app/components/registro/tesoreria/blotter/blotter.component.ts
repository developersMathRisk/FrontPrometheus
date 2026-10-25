import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { ToastService } from '../../../../shared/services/toast.service';
import {
  CatalogosTesoreria, DetalleOperacion, ETIQUETA_TIPO, EstadoOperacion, Operacion, TesoreriaService, TipoOperacion, hoyIso,
} from '../../../../shared/services/tesoreria.service';

type Pestana = 'datos' | 'liquidacion' | 'asiento' | 'historial';

/**
 * Blotter de operaciones. Modo "consulta" (Front Office): lectura. Modo "back" (Back Office · Liquidación):
 * asignación de portafolio/custodia/banco pagador, suficiencia de fondos y avance del flujo
 * Pendiente → Pre liquidado → Confirmado → Liquidado (o anulación). El modo llega por `data.modo` de la ruta.
 */
const fmtIa = (v: number | null | undefined) => Math.abs(Number(v ?? 0)).toLocaleString('es-PE', { maximumFractionDigits: 2 });

@Component({
  selector: 'app-blotter',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, EncabezadoComponent, DatePickerComponent, LoaderComponent],
  templateUrl: './blotter.component.html',
  styleUrl: './blotter.component.scss',
})
export class BlotterComponent implements OnInit, OnDestroy {
  private readonly api = inject(TesoreriaService);
  private readonly toast = inject(ToastService);
  private readonly ruta = inject(ActivatedRoute);
  private readonly asistente = inject(AsistenteIaService);

  readonly modoBack = this.ruta.snapshot.data['modo'] === 'back';
  readonly etiquetaTipo = ETIQUETA_TIPO;
  readonly tiposOperacion: TipoOperacion[] = ['BONO', 'ACCION', 'FONDO', 'FX_SPOT'];
  readonly estados: (EstadoOperacion | 'Por liquidar' | 'Todas')[] = this.modoBack
    ? ['Por liquidar', 'Pendiente', 'Pre liquidado', 'Confirmado', 'Liquidado', 'Anulado', 'Todas']
    : ['Todas', 'Pendiente', 'Pre liquidado', 'Confirmado', 'Liquidado', 'Anulado'];

  catalogos: CatalogosTesoreria | null = null;
  operaciones: Operacion[] = [];
  cargando = false;
  error = '';

  // Filtros
  estado: string = this.modoBack ? 'Por liquidar' : 'Todas';
  desde: string | null = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  hasta: string | null = null;
  tipo: string | null = null;
  idPortafolio: number | null = null;
  contraparte: string | null = null;
  texto = '';
  pagina = 0;
  readonly porPagina = 10;

  // Detalle
  seleccion: DetalleOperacion | null = null;
  cargandoDetalle = false;
  pestana: Pestana = 'datos';
  asignacion = { idPortafolio: null as number | null, idCustodia: null as number | null, bancoPagador: null as string | null, tipoLiquidacion: 'DVP' };
  procesando = false;
  motivoAnulacion = '';
  pidiendoMotivo = false;

  ngOnInit(): void {
    this.api.catalogos().subscribe(c => (this.catalogos = c));
    this.cargar();
    this.registrarAsistente();
  }

  ngOnDestroy(): void {
    this.asistente.liberar(this.claveIa);
  }

  private get claveIa(): string {
    return this.modoBack ? 'back-liquidacion' : 'front-blotter';
  }

  private registrarAsistente(): void {
    const pendientes = () => this.operaciones.filter(o => !['Liquidado', 'Anulado'].includes(o.estado));
    this.asistente.registrar({
      clave: this.claveIa,
      modulo: this.modoBack ? 'Back Office · Liquidación' : 'Front Office · Blotter',
      titulo: this.modoBack ? 'Liquidación de operaciones' : 'Blotter de operaciones',
      interpretacion: this.modoBack
        ? 'Revise las operaciones por liquidar: asigne portafolio, custodia y banco, verifique fondos y avance el flujo. Puedo resumir lo urgente.'
        : 'Consulta de operaciones registradas. Puedo resumirlas o señalar lo que requiere atención.',
      opciones: [
        { etiqueta: 'Por liquidar hoy', responder: () => {
          const hoy = hoyIso();
          const ops = pendientes().filter(o => o.fechaLiquidacion <= hoy);
          if (!ops.length) return 'No hay operaciones pendientes con liquidación hoy o vencida.';
          return `${ops.length} operación(es) deben liquidarse hoy o están atrasadas: ` +
            ops.slice(0, 8).map(o => `${o.codigo} ${o.lado.toLowerCase()} ${o.ticker} ${fmtIa(o.montoTotal)} ${o.monedaLiquidacion} (${o.estado}${o.fechaLiquidacion < hoy ? ', atrasada' : ''})`).join('; ') + '.';
        } },
        { etiqueta: 'Pendientes sin asignación', responder: () => {
          const ops = pendientes().filter(o => !o.idPortafolio || !o.idCustodia || !o.bancoPagador);
          if (!ops.length) return 'Todas las operaciones pendientes tienen portafolio, custodia y banco pagador asignados.';
          return `${ops.length} sin asignación completa: ` + ops.slice(0, 8).map(o => `${o.codigo} (falta ${[
            !o.idPortafolio && 'portafolio', !o.idCustodia && 'custodia', !o.bancoPagador && 'banco'].filter(Boolean).join(', ')})`).join('; ') + '.';
        } },
        { etiqueta: 'Resumen del período', responder: () => {
          const ops = this.operaciones;
          if (!ops.length) return 'No hay operaciones en el rango de fechas.';
          const porEstado = ['Pendiente', 'Pre liquidado', 'Confirmado', 'Liquidado', 'Anulado'].map(e => `${e} ${this.conteo(e)}`).join(', ');
          const montos = new Map<string, number>();
          for (const o of ops.filter(x => x.estado !== 'Anulado')) montos.set(o.monedaLiquidacion, (montos.get(o.monedaLiquidacion) ?? 0) + o.montoTotal);
          return `${ops.length} operaciones: ${porEstado}. Volumen (sin anuladas): ` + [...montos].map(([m, v]) => `${fmtIa(v)} ${m}`).join(', ') + '.';
        } },
      ],
      placeholder: this.modoBack ? 'Pregunte, p. ej. ¿qué bloquea la liquidación de la seleccionada?' : 'Pregunte sobre las operaciones…',
      datos: () => ({
        modo: this.modoBack ? 'back office' : 'consulta', hoy: hoyIso(), filtros: { estado: this.estado, desde: this.desde, hasta: this.hasta, tipo: this.tipo },
        totalOperaciones: this.operaciones.length,
        operaciones: this.filtradas.slice(0, 40).map(o => ({ codigo: o.codigo, tipo: o.tipo, lado: o.lado, ticker: o.ticker, monto: o.montoTotal,
          moneda: o.monedaLiquidacion, fechaOperacion: o.fechaOperacion, fechaLiquidacion: o.fechaLiquidacion, estado: o.estado,
          portafolio: o.portafolio, custodia: o.custodia, banco: o.bancoPagador, contraparte: o.contraparte, trader: o.trader })),
        seleccionada: this.seleccion ? { ...this.seleccion, historial: this.seleccion.historial.slice(-5) } : null,
      }),
    });
  }

  cargar(idSeleccionar?: number) {
    this.cargando = true;
    this.error = '';
    this.api.operaciones(this.desde, this.hasta).subscribe({
      next: r => {
        this.operaciones = r;
        this.cargando = false;
        const id = idSeleccionar ?? this.seleccion?.operacion.id ?? (this.modoBack ? this.filtradas[0]?.id : undefined);
        if (id) this.abrir(id);
      },
      error: (e: HttpErrorResponse) => { this.error = mensajeDeError(e); this.cargando = false; },
    });
  }

  get contrapartes(): string[] {
    return [...new Set(this.operaciones.map(o => o.contraparte))].sort();
  }

  get filtradas(): Operacion[] {
    const t = this.texto.trim().toLowerCase();
    return this.operaciones.filter(o =>
      (this.estado === 'Todas' || (this.estado === 'Por liquidar' ? !['Liquidado', 'Anulado'].includes(o.estado) : o.estado === this.estado))
      && (!this.tipo || o.tipo === this.tipo)
      && (!this.idPortafolio || o.idPortafolio === this.idPortafolio)
      && (!this.contraparte || o.contraparte === this.contraparte)
      && (!t || [o.codigo, o.ticker, o.codIsin, o.nombreInstrumento, o.emisor, o.contraparte, o.portafolio, o.trader]
        .some(x => (x ?? '').toLowerCase().includes(t))));
  }

  get visibles(): Operacion[] {
    return this.filtradas.slice(this.pagina * this.porPagina, (this.pagina + 1) * this.porPagina);
  }

  get paginas(): number {
    return Math.max(1, Math.ceil(this.filtradas.length / this.porPagina));
  }

  conteo(e: string): number {
    if (e === 'Todas') return this.operaciones.length;
    if (e === 'Por liquidar') return this.operaciones.filter(o => !['Liquidado', 'Anulado'].includes(o.estado)).length;
    return this.operaciones.filter(o => o.estado === e).length;
  }

  filtrar() {
    this.pagina = 0;
  }

  claseEstado(e: string): string {
    return 'blt-estado blt-estado--' + e.toLowerCase().replace(/\s+/g, '-');
  }

  abrir(id: number) {
    this.cargandoDetalle = true;
    this.pidiendoMotivo = false;
    this.api.detalle(id).subscribe({
      next: d => {
        this.seleccion = d;
        this.cargandoDetalle = false;
        const o = d.operacion;
        this.asignacion = { idPortafolio: o.idPortafolio, idCustodia: o.idCustodia, bancoPagador: o.bancoPagador, tipoLiquidacion: o.tipoLiquidacion };
      },
      error: (e: HttpErrorResponse) => { this.cargandoDetalle = false; this.toast.mostrar(mensajeDeError(e), 'error'); },
    });
  }

  get editable(): boolean {
    return this.modoBack && this.seleccion?.operacion.estado === 'Pendiente';
  }

  get liquidaHoyOAntes(): boolean {
    return !!this.seleccion && this.seleccion.operacion.fechaLiquidacion <= hoyIso();
  }

  guardarAsignacion() {
    if (!this.seleccion) return;
    this.procesando = true;
    this.api.asignar(this.seleccion.operacion.id, this.asignacion).subscribe({
      next: () => { this.procesando = false; this.toast.mostrar('Asignación guardada.', 'exito'); this.cargar(this.seleccion!.operacion.id); },
      error: (e: HttpErrorResponse) => { this.procesando = false; this.toast.mostrar(mensajeDeError(e), 'error', 7000); },
    });
  }

  avanzar() {
    if (!this.seleccion) return;
    const op = this.seleccion.operacion;
    this.procesando = true;
    this.api.avanzar(op.id).subscribe({
      next: r => {
        this.procesando = false;
        this.toast.mostrar(`${r.codigo} → ${r.estado}` + (r.estado === 'Liquidado' ? ': caja aplicada, asiento registrado y posición actualizada.' : '.'), 'exito', 6000);
        this.cargar(op.id);
      },
      error: (e: HttpErrorResponse) => { this.procesando = false; this.toast.mostrar(mensajeDeError(e), 'error', 8000); },
    });
  }

  anular() {
    if (!this.seleccion || !this.motivoAnulacion.trim()) return;
    this.procesando = true;
    this.api.anular(this.seleccion.operacion.id, this.motivoAnulacion.trim()).subscribe({
      next: r => { this.procesando = false; this.pidiendoMotivo = false; this.motivoAnulacion = ''; this.toast.mostrar(`${r.codigo} anulada.`, 'info'); this.cargar(r.id); },
      error: (e: HttpErrorResponse) => { this.procesando = false; this.toast.mostrar(mensajeDeError(e), 'error', 7000); },
    });
  }

  textoBoton(sig: string | null): string {
    return sig === 'Pre liquidado' ? 'Pre liquidar' : sig === 'Confirmado' ? 'Confirmar liquidación' : sig === 'Liquidado' ? 'Marcar como liquidada' : '';
  }

  totalAsiento(campo: 'debe' | 'haber'): number {
    return (this.seleccion?.asiento ?? []).reduce((s, l) => s + l[campo], 0);
  }

  get asientoCuadrado(): boolean {
    return Math.abs(this.totalAsiento('debe') - this.totalAsiento('haber')) < 0.01;
  }

  exportarCsv() {
    const cab = ['Codigo', 'Fecha oper.', 'Fecha liq.', 'Tipo', 'Ticker', 'ISIN', 'Lado', 'Nominal', 'Precio', 'Monto total', 'Moneda', 'Estado', 'Portafolio', 'Contraparte', 'Trader'];
    const filas = this.filtradas.map(o => [o.codigo, o.fechaOperacion, o.fechaLiquidacion, ETIQUETA_TIPO[o.tipo], o.ticker, o.codIsin ?? '', o.lado,
      o.nominal, o.precio, o.montoTotal, o.monedaLiquidacion, o.estado, o.portafolio ?? '', o.contraparte, o.trader]);
    const csv = [cab, ...filas].map(f => f.map(v => `"${String(v).replace(/"/g, '""')}"`).join(';')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
    a.download = `blotter_${hoyIso()}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }
}
