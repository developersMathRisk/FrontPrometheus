import { Injectable } from '@angular/core';

// fijo: el menú permanece abierto. auto: solo iconos; se despliega al pasar el mouse y se pliega al salir.
export type ModoMenu = 'fijo' | 'auto';

@Injectable({ providedIn: 'root' })
export class MenuLateralService {
  private readonly clave = 'menuLateralModo';
  private readonly anchoEscritorio = 992;
  private _modo: ModoMenu = this.leer();

  get modo(): ModoMenu {
    return this._modo;
  }

  get fijo(): boolean {
    return this._modo === 'fijo';
  }

  /** Aplica el modo guardado al cargar la app. */
  iniciar(): void {
    this.aplicar();
  }

  alternar(): void {
    this.establecer(this.fijo ? 'auto' : 'fijo');
  }

  establecer(modo: ModoMenu): void {
    this._modo = modo;
    this.guardar();
    this.aplicar();
  }

  /** Refleja el modo en los atributos que usa el tema. En pantallas pequeñas el menú es un panel que abre el botón del encabezado; al volver a escritorio, el sidebar vuelve a llamar aquí. */
  aplicar(): void {
    const html = document.documentElement;
    if (html.getAttribute('data-nav-layout') !== 'vertical') return;
    html.setAttribute('data-vertical-style', 'overlay');
    if (window.innerWidth <= this.anchoEscritorio) {
      html.setAttribute('data-toggled', 'close');
      return;
    }
    html.setAttribute('data-toggled', this.fijo ? '' : 'icon-overlay-close');
    html.removeAttribute('data-icon-overlay');
  }

  private leer(): ModoMenu {
    try {
      return localStorage.getItem(this.clave) === 'auto' ? 'auto' : 'fijo';
    } catch {
      return 'fijo';
    }
  }

  private guardar(): void {
    try {
      localStorage.setItem(this.clave, this._modo);
    } catch {
      // sin almacenamiento (modo privado): el modo vale solo para esta sesión
    }
  }
}
