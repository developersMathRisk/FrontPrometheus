import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChevronRight, LucideAngularModule, TriangleAlert } from 'lucide-angular';

/**
 * Consolida las advertencias de un cálculo (cotizaciones faltantes, instrumentos excluidos, datos desactualizados…)
 * en un solo aviso visible que abre el detalle en una ventana, en vez de repartir una nota con signo de
 * exclamación por cada una dentro del resultado. Lo usan todas las pantallas que muestran resultados.
 */
@Component({
  selector: 'app-advertencias',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './advertencias.component.html',
  styleUrl: './advertencias.component.scss',
})
export class AdvertenciasComponent {
  private readonly modales = inject(NgbModal);

  @Input() items: string[] | null | undefined = [];
  /** Qué se calculó, para el título de la ventana: «Advertencias del cálculo de VaR». */
  @Input() contexto = 'del cálculo';

  @ViewChild('detalle', { static: true }) private detalle!: TemplateRef<unknown>;

  readonly iconos = { TriangleAlert, ChevronRight };

  get lista(): string[] {
    return (this.items ?? []).filter((a) => !!a && a.trim().length > 0);
  }

  abrir(): void {
    this.modales.open(this.detalle, { centered: true, scrollable: true, size: 'lg', windowClass: 'advertencias-modal' });
  }
}
