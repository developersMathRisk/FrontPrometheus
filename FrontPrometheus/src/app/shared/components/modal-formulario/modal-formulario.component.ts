import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { LoaderComponent } from '../loader/loader.component';

let contador = 0;

/**
 * Estructura común de los modales de alta y edición: encabezado con título y texto de apoyo,
 * cuerpo con scroll y pie con «Cancelar» + acción principal. Pide confirmación si se cierra
 * con datos sin guardar y habilita la acción principal solo cuando están los campos obligatorios.
 */
@Component({
  selector: 'app-modal-formulario',
  standalone: true,
  imports: [CommonModule, MatIconModule, LoaderComponent],
  templateUrl: './modal-formulario.component.html',
  styleUrl: './modal-formulario.component.scss'
})
export class ModalFormularioComponent implements OnInit, AfterViewInit {
  @Input() titulo = '';
  @Input() subtitulo = '';
  @Input() accion = 'Registrar';
  /** Etiquetas de los campos obligatorios que aún faltan; con elementos, la acción queda deshabilitada. */
  @Input() faltantes: string[] = [];
  /** Objeto que edita el formulario; sirve para detectar si hay cambios sin guardar. */
  @Input() datos: unknown = null;
  @Input() guardando = false;

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<void>();

  @ViewChild('cuerpo', { static: true }) cuerpo!: ElementRef<HTMLElement>;

  readonly idTitulo = `modal-formulario-titulo-${++contador}`;
  private estadoInicial = '';

  ngOnInit() {
    this.estadoInicial = this.serializar();
  }

  ngAfterViewInit() {
    // Deja el cursor en el primer campo editable
    setTimeout(() => this.cuerpo.nativeElement
      .querySelector<HTMLElement>('input:not([type="hidden"]):not([disabled]), textarea:not([disabled])')?.focus(), 60);
  }

  get puedeGuardar(): boolean {
    return !this.guardando && this.faltantes.length === 0;
  }

  private serializar(): string {
    try {
      return JSON.stringify(this.datos ?? null);
    } catch {
      return '';
    }
  }

  private get hayCambios(): boolean {
    return this.serializar() !== this.estadoInicial;
  }

  intentarCerrar() {
    if (!this.hayCambios) {
      this.cerrar.emit();
      return;
    }
    Swal.fire({
      icon: 'warning',
      title: '¿Descartar los cambios?',
      text: 'Los datos ingresados no se guardarán.',
      showCancelButton: true,
      confirmButtonText: 'Descartar',
      cancelButtonText: 'Seguir editando',
      reverseButtons: true,
      focusCancel: true
    }).then(resultado => {
      if (resultado.isConfirmed) {
        this.cerrar.emit();
      }
    });
  }

  // Enter confirma, salvo en listas desplegables (donde selecciona una opción)
  alPresionarEnter(evento: Event) {
    const destino = evento.target as HTMLElement;
    if (destino.tagName !== 'INPUT' || destino.closest('ng-select') || !this.puedeGuardar) {
      return;
    }
    evento.preventDefault();
    this.guardar.emit();
  }
}
