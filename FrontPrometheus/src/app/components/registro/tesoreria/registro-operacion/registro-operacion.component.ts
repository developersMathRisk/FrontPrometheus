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
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
