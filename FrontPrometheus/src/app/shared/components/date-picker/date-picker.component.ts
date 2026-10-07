import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Calendar, ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

interface CeldaDia {
  fecha: Date;
  enMes: boolean;
  esHoy: boolean;
  seleccionado: boolean;
}

const DIAS_SEMANA = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

/**
 * Selector de fecha (reemplaza `<input type="date">`). Valor en ISO `yyyy-MM-dd`, compatible con
 * `ngModel`/`formControl`. Semana de lunes a domingo, hoy marcado con anillo, atajo "Hoy".
 */
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true,
  }],
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() placeholder = 'Seleccionar fecha';

  @ViewChild('disparador', { static: true }) private disparadorRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('plantilla') private plantilla!: TemplateRef<unknown>;

  private readonly overlay = inject(Overlay);
  private readonly vcr = inject(ViewContainerRef);
  private overlayRef: OverlayRef | null = null;

  readonly CalendarIcon = Calendar;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly diasSemana = DIAS_SEMANA;

  valorIso: string | null = null;
  disabled = false;
  mesVisible = new Date();
  /** 'dias' calendario; 'meses' zoom-out a los meses del año; 'anios' zoom-out a bloques de 12 años. */
  vista: 'dias' | 'meses' | 'anios' = 'dias';
  anioBloqueInicio = 0;
  readonly nombresMeses = MESES;

  get bloqueAnios(): number[] {
    return Array.from({ length: 12 }, (_, i) => this.anioBloqueInicio + i);
  }

  get rangoBloqueAnios(): string {
    return `${this.anioBloqueInicio} – ${this.anioBloqueInicio + 11}`;
  }

  private onChange: (valor: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  get etiqueta(): string {
    if (!this.valorIso) return this.placeholder;
    const d = this.parseIso(this.valorIso);
    return `${String(d.getDate()).padStart(2, '0')} ${MESES[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
  }

  get mesEtiqueta(): string {
    return `${MESES[this.mesVisible.getMonth()]} ${this.mesVisible.getFullYear()}`;
  }

  get diasDelMes(): CeldaDia[] {
    const anio = this.mesVisible.getFullYear();
    const mes = this.mesVisible.getMonth();
    const primerDia = new Date(anio, mes, 1);
    const offsetLunes = (primerDia.getDay() + 6) % 7;
    const inicio = new Date(anio, mes, 1 - offsetLunes);
    const hoyIso = this.toIso(new Date());

    const celdas: CeldaDia[] = [];
    for (let i = 0; i < 42; i++) {
      const fecha = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate() + i);
      const fechaIso = this.toIso(fecha);
      celdas.push({
        fecha,
        enMes: fecha.getMonth() === mes,
        esHoy: fechaIso === hoyIso,
        seleccionado: !!this.valorIso && fechaIso === this.valorIso,
      });
    }
    return celdas;
  }

  writeValue(valor: string | null): void {
    this.valorIso = valor;
  }

  registerOnChange(fn: (valor: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(estaDeshabilitado: boolean): void {
    this.disabled = estaDeshabilitado;
  }

  abrir(): void {
    if (this.overlayRef || this.disabled) return;
    this.mesVisible = this.valorIso ? this.parseIso(this.valorIso) : new Date();
    this.vista = 'dias';

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.disparadorRef)
        .withPositions([
          { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 6 },
          { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -6 },
        ]),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.overlayRef.backdropClick().subscribe(() => this.cerrar());
    this.overlayRef.keydownEvents().subscribe(evento => {
      if (evento.key === 'Escape') this.cerrar();
    });
    this.overlayRef.attach(new TemplatePortal(this.plantilla, this.vcr));
  }

  cerrar(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
    this.onTouched();
  }

  elegirDia(dia: CeldaDia): void {
    this.valorIso = this.toIso(dia.fecha);
    this.onChange(this.valorIso);
    this.cerrar();
  }

  irAHoy(): void {
    this.mesVisible = new Date();
    this.valorIso = this.toIso(new Date());
    this.onChange(this.valorIso);
    this.cerrar();
  }

  mesAnterior(): void {
    this.mesVisible = new Date(this.mesVisible.getFullYear(), this.mesVisible.getMonth() - 1, 1);
  }

  mesSiguiente(): void {
    this.mesVisible = new Date(this.mesVisible.getFullYear(), this.mesVisible.getMonth() + 1, 1);
  }

  abrirVistaMeses(): void {
    this.vista = 'meses';
  }

  abrirVistaAnios(): void {
    const anio = this.mesVisible.getFullYear();
    this.anioBloqueInicio = Math.floor(anio / 12) * 12;
    this.vista = 'anios';
  }

  bloqueAnterior(): void {
    this.anioBloqueInicio -= 12;
  }

  bloqueSiguiente(): void {
    this.anioBloqueInicio += 12;
  }

  elegirAnio(anio: number): void {
    this.mesVisible = new Date(anio, this.mesVisible.getMonth(), 1);
    this.vista = 'meses';
  }

  anioAnterior(): void {
    this.mesVisible = new Date(this.mesVisible.getFullYear() - 1, this.mesVisible.getMonth(), 1);
  }

  anioSiguiente(): void {
    this.mesVisible = new Date(this.mesVisible.getFullYear() + 1, this.mesVisible.getMonth(), 1);
  }

  elegirMes(mesIndex: number): void {
    this.mesVisible = new Date(this.mesVisible.getFullYear(), mesIndex, 1);
    this.vista = 'dias';
  }

  private toIso(fecha: Date): string {
    return fecha.toLocaleDateString('sv-SE');
  }

  private parseIso(iso: string): Date {
    const [anio, mes, dia] = iso.split('-').map(Number);
    return new Date(anio, mes - 1, dia);
  }
}
