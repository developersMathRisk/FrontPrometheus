import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChevronRight, CircleCheck, CircleX, LucideAngularModule, Search, TriangleAlert } from 'lucide-angular';
import { InstrumentoElegibilidad } from '../../models/var/instrumento-elegibilidad';

interface GrupoMotivo {
  motivo: string;
  items: InstrumentoElegibilidad[];
}

/** Máximo de instrumentos dibujados por lista dentro de la ventana; el resto se alcanza con el buscador. */
const LIMITE_VISIBLE = 150;

/**
 * Resumen compacto de qué posiciones entran al cálculo. En pantalla solo se ven los totales y un aviso de las
 * excluidas; el detalle (agrupado por motivo, con buscador) se abre en una ventana, de modo que el resumen mide
 * lo mismo con 6 posiciones que con 1500.
 */
@Component({
  selector: 'app-cobertura-posiciones',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './cobertura-posiciones.component.html',
  styleUrl: './cobertura-posiciones.component.scss',
})
export class CoberturaPosicionesComponent {
  private readonly modales = inject(NgbModal);

  @Input() elegibles: InstrumentoElegibilidad[] = [];
  @Input() excluidos: InstrumentoElegibilidad[] = [];
  @Input() multiPortafolio = false;

  @ViewChild('detalle', { static: true }) private detalle!: TemplateRef<unknown>;

  readonly iconos = { CircleCheck, CircleX, TriangleAlert, ChevronRight, Search };
  readonly limite = LIMITE_VISIBLE;
  filtro = '';

  get total(): number {
    return this.elegibles.length + this.excluidos.length;
  }

  /** Excluidas agrupadas por motivo, de mayor a menor cantidad. */
  get gruposExcluidos(): GrupoMotivo[] {
    const mapa = new Map<string, InstrumentoElegibilidad[]>();
    for (const i of this.excluidos) {
      const m = i.motivo || 'Sin motivo informado';
      mapa.set(m, [...(mapa.get(m) ?? []), i]);
    }
    return [...mapa].map(([motivo, items]) => ({ motivo, items })).sort((a, b) => b.items.length - a.items.length);
  }

  get motivoPrincipal(): string {
    return this.gruposExcluidos[0]?.motivo ?? '';
  }

  coincide(i: InstrumentoElegibilidad): boolean {
    const q = this.filtro.trim().toLowerCase();
    return !q || `${i.codTicker} ${i.codISIN} ${i.descripcionPortafolio ?? ''}`.toLowerCase().includes(q);
  }

  filtrados(lista: InstrumentoElegibilidad[]): InstrumentoElegibilidad[] {
    return lista.filter((i) => this.coincide(i));
  }

  abrir(): void {
    this.filtro = '';
    this.modales.open(this.detalle, { centered: true, scrollable: true, size: 'lg', windowClass: 'cobertura-modal' });
  }
}
