import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject, Subscription, debounceTime, switchMap, of, catchError } from 'rxjs';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { ChipGroupComponent, ChipOpcion } from '../../../../shared/components/chip-group/chip-group.component';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { AsistenteIaService } from '../../../../shared/services/asistente-ia.service';
import { ToastService } from '../../../../shared/services/toast.service';
import {
  CalculoOperacion, CatalogosTesoreria, InstrumentoTesoreria, Operacion, SolicitudOperacion, TesoreriaService,
  TipoOperacion, hoyIso, sumarDiasHabiles,
} from '../../../../shared/services/tesoreria.service';

/**
 * Front Office · Registro de operación. El cálculo (monto limpio, cupón corrido, total, unidades) y las
 * validaciones los hace el backend en cada cambio (POST /simular), así la pantalla muestra exactamente lo que
 * se va a registrar. La operación queda Pendiente y pasa a Back Office para su liquidación.
 */
const fmtIa = (v: number | null | undefined) => Math.abs(Number(v ?? 0)).toLocaleString('es-PE', { maximumFractionDigits: 2 });

@Component({
  selector: 'app-registro-operacion',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, EncabezadoComponent, ChipGroupComponent, DatePickerComponent, LoaderComponent],
  templateUrl: './registro-operacion.component.html',
  styleUrl: './registro-operacion.component.scss',
})
export class RegistroOperacionComponent implements OnInit, OnDestroy {
  private readonly api = inject(TesoreriaService);
  private readonly toast = inject(ToastService);
  private readonly asistente = inject(AsistenteIaService);

  readonly tipos: ChipOpcion[] = [
    { valor: 'BONO', etiqueta: 'Bono / CD' }, { valor: 'ACCION', etiqueta: 'Acción' },
    { valor: 'FONDO', etiqueta: 'Fondo' }, { valor: 'FX_SPOT', etiqueta: 'FX spot' },
  ];
  readonly lados: ChipOpcion[] = [{ valor: 'COMPRA', etiqueta: 'Compra' }, { valor: 'VENTA', etiqueta: 'Venta' }];
  readonly mercados: ChipOpcion[] = [{ valor: 'SECUNDARIO', etiqueta: 'Secundario' }, { valor: 'PRIMARIO', etiqueta: 'Primario (licitación)' }];

  catalogos: CatalogosTesoreria | null = null;
  instrumentos: InstrumentoTesoreria[] = [];
  cargandoInstrumentos = false;

  s: SolicitudOperacion = this.solicitudVacia('BONO');
  calculo: CalculoOperacion | null = null;
  calculando = false;
  registrando = false;
  ultima: Operacion | null = null;

  private readonly cambios = new Subject<void>();
  private sub?: Subscription;

  ngOnInit(): void {
    this.api.catalogos().subscribe(c => (this.catalogos = c));
    this.cargarInstrumentos();
    this.sub = this.cambios.pipe(
      debounceTime(350),
      switchMap(() => {
        if (!this.listoParaSimular) { this.calculo = null; return of(null); }
        this.calculando = true;
        return this.api.simular(this.s).pipe(catchError((e: HttpErrorResponse) =>
          of({ montoLimpio: null, interesCorrido: null, montoTotal: null, monedaLiquidacion: null, unidades: null,
               errores: [mensajeDeError(e)], avisos: [] } as CalculoOperacion)));
      }),
    ).subscribe(c => { this.calculando = false; if (c) this.calculo = c; });
    this.registrarAsistente();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.asistente.liberar('front-operacion');
  }

  private registrarAsistente(): void {
    this.asistente.registrar({
      clave: 'front-operacion',
      modulo: 'Front Office · Registro de operación',
      titulo: 'Registro de operación',
      interpretacion: 'Complete instrumento, nominal, precio, portafolio y contraparte: el servidor calcula el monto, el cupón corrido y ' +
        'valida límites en cada cambio. Puedo explicarle el cálculo o los avisos.',
      opciones: [
        { etiqueta: 'Explicar el cálculo', responder: () => {
          const c = this.calculo;
          if (!c || c.montoTotal == null) return 'Aún no hay cálculo: complete los campos obligatorios (instrumento, nominal, precio, fechas, portafolio y contraparte).';
          const m = c.monedaLiquidacion ?? '';
          if (this.s.tipo === 'FX_SPOT')
            return `Compra/venta de US$ ${fmtIa(this.s.nominal)} a ${this.s.precio} S/ por US$: liquida S/ ${fmtIa(c.montoTotal)} el ${this.s.fechaLiquidacion}.`;
          if (this.s.tipo === 'BONO')
            return `Monto limpio = nominal ${fmtIa(this.s.nominal)} × precio ${this.s.precio}% = ${fmtIa(c.montoLimpio)} ${m}. ` +
              `Cupón corrido desde el último pago hasta la liquidación (${this.s.fechaLiquidacion}): ${fmtIa(c.interesCorrido)} ${m}. ` +
              `Monto total (sucio) = ${fmtIa(c.montoTotal)} ${m}` + (c.unidades ? `, equivalente a ${fmtIa(c.unidades)} títulos.` : '.');
          return `${fmtIa(this.s.nominal)} × ${this.s.precio} = ${fmtIa(c.montoTotal)} ${m}, a liquidar el ${this.s.fechaLiquidacion}.`;
        } },
        { etiqueta: '¿Por qué aparecen avisos?', responder: () => {
          const c = this.calculo;
          const lista = [...(c?.errores ?? []).map(e => 'Error: ' + e), ...(c?.avisos ?? []).map(a => 'Aviso: ' + a)];
          if (!lista.length) return 'No hay errores ni avisos para esta operación.';
          return lista.join(' ') + ' Los errores impiden registrar; los avisos (límite del portafolio, concentración) permiten registrar, ' +
            'pero quedan a la vista de Back Office y Riesgos.';
        } },
        { etiqueta: '¿Qué pasa después de registrar?', responder: () =>
          'La operación queda Pendiente. Back Office asigna portafolio, custodia y banco pagador, verifica fondos y la avanza: ' +
          'Pre liquidado → Confirmado → Liquidado. Al liquidar se aplica la caja, se registra el asiento contable y se actualiza la posición. ' +
          'Quien registra no puede liquidar (control maker-checker).' },
      ],
      placeholder: 'Pregunte sobre la operación, p. ej. ¿el precio está lejos del vector?',
      datos: () => ({
        solicitud: { ...this.s, observaciones: undefined }, instrumento: this.instrumento ?? null,
        contraparte: this.contraparte?.nombre ?? null, calculo: this.calculo, ultimaRegistrada: this.ultima?.codigo ?? null,
      }),
    });
  }

  private solicitudVacia(tipo: TipoOperacion): SolicitudOperacion {
    const hoy = hoyIso();
    return {
      tipo, codIsin: null, lado: 'COMPRA', nominal: null, precio: null, rendimiento: null, fechaOperacion: hoy,
      fechaLiquidacion: this.liquidacionPorDefecto(tipo, hoy), mercado: 'SECUNDARIO', idSubasta: null,
      idPortafolio: null, idContraparte: null, referenciaExterna: null, broker: null, observaciones: null,
    };
  }

  /** Convención de liquidación: FX T+0, bonos/CD T+1, acciones y fondos T+2. */
  private liquidacionPorDefecto(tipo: TipoOperacion, fecha: string): string {
    return tipo === 'FX_SPOT' ? fecha : sumarDiasHabiles(fecha, tipo === 'BONO' ? 1 : 2);
  }

  alCambiarTipo(tipo: TipoOperacion) {
    const conservar = { idPortafolio: this.s.idPortafolio, idContraparte: this.s.idContraparte, lado: this.s.lado };
    this.s = { ...this.solicitudVacia(tipo), ...conservar };
    this.calculo = null;
    this.cargarInstrumentos();
  }

  private cargarInstrumentos() {
    if (this.s.tipo === 'FX_SPOT') { this.instrumentos = []; return; }
    this.cargandoInstrumentos = true;
    this.api.instrumentos(this.s.tipo).subscribe({
      next: r => { this.instrumentos = r; this.cargandoInstrumentos = false; },
      error: () => (this.cargandoInstrumentos = false),
    });
  }

  alElegirInstrumento(ins: InstrumentoTesoreria | null) {
    this.s.codIsin = ins?.codIsin ?? null;
    if (ins?.precioReferencia && !this.s.precio) this.s.precio = Math.round(ins.precioReferencia * 10000) / 10000;
    this.cambio();
  }

  alCambiarFechaOperacion(f: string | null) {
    this.s.fechaOperacion = f;
    if (f) this.s.fechaLiquidacion = this.liquidacionPorDefecto(this.s.tipo, f);
    this.cambio();
  }

  cambio() {
    this.cambios.next();
  }

  get instrumento(): InstrumentoTesoreria | undefined {
    return this.instrumentos.find(i => i.codIsin === this.s.codIsin);
  }

  get contraparte() {
    return this.catalogos?.contrapartes.find(c => c.id === this.s.idContraparte);
  }

  get pideSubasta(): boolean {
    return !!this.contraparte?.exigeSubasta || this.s.mercado === 'PRIMARIO';
  }

  get etiquetaNominal(): string {
    return { BONO: 'Valor nominal', ACCION: 'Cantidad de acciones', FONDO: 'Cantidad de cuotas', FX_SPOT: 'Monto en USD' }[this.s.tipo];
  }

  get etiquetaPrecio(): string {
    return { BONO: 'Precio limpio (% del nominal)', ACCION: 'Precio por acción', FONDO: 'Valor cuota', FX_SPOT: 'Tipo de cambio (S/ por US$)' }[this.s.tipo];
  }

  get listoParaSimular(): boolean {
    const s = this.s;
    return !!(s.nominal && s.precio && s.fechaOperacion && s.fechaLiquidacion && s.idPortafolio && s.idContraparte
      && (s.tipo === 'FX_SPOT' || s.codIsin));
  }

  get puedeRegistrar(): boolean {
    return this.listoParaSimular && !!this.calculo && this.calculo.errores.length === 0 && !this.calculando && !this.registrando;
  }

  buscarInstrumento = (termino: string, i: InstrumentoTesoreria) => {
    const t = termino.toLowerCase();
    return [i.ticker, i.nombre, i.codIsin, i.emisor].some(x => (x ?? '').toLowerCase().includes(t));
  };

  registrar() {
    if (!this.puedeRegistrar) return;
    this.registrando = true;
    this.api.registrar(this.s).subscribe({
      next: op => {
        this.registrando = false;
        this.ultima = op;
        this.toast.mostrar(`${op.codigo} registrada como Pendiente; Back Office la liquidará.`, 'exito', 6000);
        this.s = { ...this.s, nominal: null, idSubasta: null, referenciaExterna: null, broker: null, observaciones: null };
        this.calculo = null;
      },
      error: (e: HttpErrorResponse) => {
        this.registrando = false;
        this.toast.mostrar(mensajeDeError(e), 'error', 7000);
      },
    });
  }
}
