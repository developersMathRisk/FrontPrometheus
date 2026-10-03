import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

// En el modo de menú automático (solo iconos) el menú se despliega al pasar el mouse o al enfocarlo con teclado.
// Las pequeñas esperas evitan que el menú parpadee cuando el mouse solo cruza por encima.
@Directive({
  selector: '[appHoverEffectSidebar]',
})
export class HoverEffectSidebarDirective implements OnDestroy {
  private readonly esperaAbrir = 120;
  private readonly esperaCerrar = 220;
  private temporizador?: ReturnType<typeof setTimeout>;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') alEntrarMouse() {
    this.programar(true, this.esperaAbrir);
  }

  @HostListener('mouseleave') alSalirMouse() {
    // Si el foco de teclado sigue dentro, el menú se mantiene abierto hasta que salga
    if (this.contieneFoco()) return;
    this.programar(false, this.esperaCerrar);
  }

  @HostListener('focusin') alEnfocar() {
    this.programar(true, 0);
  }

  @HostListener('focusout', ['$event']) alPerderFoco(evento: FocusEvent) {
    const destino = evento.relatedTarget as Node | null;
    if (destino && this.elementRef.nativeElement.contains(destino)) return;
    this.programar(false, this.esperaCerrar);
  }

  ngOnDestroy() {
    clearTimeout(this.temporizador);
  }

  private contieneFoco(): boolean {
    return this.elementRef.nativeElement.contains(document.activeElement)
      && document.activeElement?.matches(':focus-visible') === true;
  }

  private programar(abrir: boolean, espera: number) {
    clearTimeout(this.temporizador);
    const aplicar = () => {
      if (window.innerWidth <= 768) return;
      const html = this.elementRef.nativeElement.ownerDocument.documentElement;
      abrir ? html.setAttribute('data-icon-overlay', 'open') : html.removeAttribute('data-icon-overlay');
    };
    espera > 0 ? (this.temporizador = setTimeout(aplicar, espera)) : aplicar();
  }
}
