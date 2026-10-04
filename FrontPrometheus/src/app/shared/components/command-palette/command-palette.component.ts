import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Router } from '@angular/router';
import { LucideAngularModule, Search } from 'lucide-angular';
import { Menu, NavService } from '../../services/nav.service';
import { CommandPaletteService } from '../../services/command-palette.service';

interface ResultadoBusqueda {
  titulo: string;
  ruta: string;
  path: string;
}

/**
 * Paleta de comandos global (Ctrl/⌘+K), sobre CDK Overlay. Busca por substring, sin acentos,
 * sobre el menú real (`NavService.items` aplanado). Se monta una sola vez en `content-layout`.
 */
@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './command-palette.component.html',
  styleUrl: './command-palette.component.scss',
})
export class CommandPaletteComponent {
  private readonly overlay = inject(Overlay);
  private readonly vcr = inject(ViewContainerRef);
  private readonly router = inject(Router);
  private readonly navService = inject(NavService);
  private readonly paletteService = inject(CommandPaletteService);

  @ViewChild('plantilla') private plantilla!: TemplateRef<unknown>;
  @ViewChild('entrada') private entradaRef?: ElementRef<HTMLInputElement>;

  readonly SearchIcon = Search;

  private overlayRef: OverlayRef | null = null;
  private pantallas: ResultadoBusqueda[] = [];

  consulta = '';
  resultados: ResultadoBusqueda[] = [];
  indiceActivo = 0;

  constructor() {
    this.navService.items.subscribe(items => this.pantallas = this.aplanar(items));
    this.paletteService.aperturaSolicitada.subscribe(() => this.abrir());
  }

  get abierta(): boolean {
    return !!this.overlayRef;
  }

  @HostListener('document:keydown', ['$event'])
  atajo(evento: KeyboardEvent): void {
    if ((evento.ctrlKey || evento.metaKey) && evento.key.toLowerCase() === 'k') {
      evento.preventDefault();
      this.abierta ? this.cerrar() : this.abrir();
    }
  }

  abrir(): void {
    if (this.overlayRef) return;
    this.consulta = '';
    this.resultados = [];
    this.indiceActivo = 0;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cmdk-backdrop',
      panelClass: 'cmdk-panel',
      positionStrategy: this.overlay.position().global().centerHorizontally().top('12vh'),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });
    this.overlayRef.backdropClick().subscribe(() => this.cerrar());
    this.overlayRef.keydownEvents().subscribe(evento => {
      if (evento.key === 'Escape') this.cerrar();
    });

    this.overlayRef.attach(new TemplatePortal(this.plantilla, this.vcr));
    setTimeout(() => this.entradaRef?.nativeElement.focus(), 30);
  }

  cerrar(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }

  buscar(texto: string): void {
    this.consulta = texto ?? '';
    const q = this.normalizar(this.consulta);
    this.indiceActivo = 0;
    this.resultados = !q ? [] : this.pantallas
      .filter(p => this.normalizar(`${p.titulo} ${p.ruta}`).includes(q))
      .slice(0, 8);
  }

  alTeclear(evento: KeyboardEvent): void {
    if (evento.key === 'ArrowDown' && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo + 1) % this.resultados.length;
    } else if (evento.key === 'ArrowUp' && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo - 1 + this.resultados.length) % this.resultados.length;
    } else if (evento.key === 'Enter' && this.resultados[this.indiceActivo]) {
      evento.preventDefault();
      this.ir(this.resultados[this.indiceActivo]);
    }
  }

  ir(resultado: ResultadoBusqueda): void {
    this.cerrar();
    this.router.navigateByUrl(resultado.path.startsWith('/') ? resultado.path : '/' + resultado.path);
  }

  private aplanar(items: Menu[], migas: string[] = []): ResultadoBusqueda[] {
    const salida: ResultadoBusqueda[] = [];
    for (const item of items ?? []) {
      if (!item.title) continue;
      if (item.path && item.type === 'link') {
        salida.push({ titulo: item.title, ruta: migas.join(' › '), path: item.path });
      }
      if (item.children?.length) {
        salida.push(...this.aplanar(item.children, [...migas, item.title]));
      }
    }
    return salida;
  }

  private normalizar(texto: string): string {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  }
}
