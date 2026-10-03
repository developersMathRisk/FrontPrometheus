import { ChangeDetectorRef, Component, ElementRef, HostListener, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SwitcherComponent } from '../switcher/switcher.component';
import { Menu, NavService } from '../../services/nav.service';
import { AppStateService } from '../../services/app-state.service';
import { MenuLateralService } from '../../services/menu-lateral.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public localdata:any;

  constructor(private cdr: ChangeDetectorRef, public elementRef: ElementRef,private appStateService: AppStateService, public menu: MenuLateralService, private navService: NavService, private router: Router){
    this.appStateService.state$.subscribe(state => {
      this.localdata = state;
    });
    this.navService.items.subscribe(items => this.pantallas = this.aplanar(items));
  }

  SwitcherClick() {
    this.offcanvasService.open(SwitcherComponent, {
      position: 'end',
      scroll: true,
    });
  }

  private modalService = inject(NgbModal);
  closeResult = '';
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  SerchClick(){
    document.querySelector('#headersearch')?.classList.toggle('searchdrop')
  }
  updateTheme(theme: string) {
    this.appStateService.updateState({ theme , menuColor:theme });
    if(theme=='light'){
      this.appStateService.updateState({ theme,themeBackground : '',headerColor:'light',menuColor:'light' });
      let html = document.querySelector('html');
        html?.style.removeProperty( '--body-bg-rgb');
        html?.style.removeProperty( '--body-bg-rgb2');
        html?.style.removeProperty( '--light-rgb');
        html?.style.removeProperty( '--form-control-bg');
        html?.style.removeProperty( '--input-border' );
        // html?.style.removeProperty('--primary');
        html?.style.removeProperty('--primary-rgb');
      }
    if(theme=='dark'){
      this.appStateService.updateState({ theme,themeBackground : '',headerColor:'dark',menuColor:'dark' });
      let html = document.querySelector('html');
        html?.style.removeProperty( '--body-bg-rgb');
        html?.style.removeProperty( '--body-bg-rgb2');
        html?.style.removeProperty( '--light-rgb');
        html?.style.removeProperty( '--form-control-bg');
        html?.style.removeProperty( '--input-border' );
        // html?.style.removeProperty('--primary');
        html?.style.removeProperty('--primary-rgb');
      
    }
  }
 

  // localStorageBackUp() {
  //   let styleId = document.querySelector('#style');
  
  //   let html = document.querySelector('html');
  //   //Theme Color Mode:
  //   if (localStorage.getItem('dashticHeader') == 'dark') {
  //     if (localStorage.getItem('dashticdarktheme')) {
  //       const type: any = localStorage.getItem('dashticdarktheme');
  //       html?.setAttribute('data-theme-mode', type);
  //       html?.setAttribute('data-header-styles', type);
  //       html?.setAttribute('data-menu-styles', type);
  //     }
  //     if (localStorage.getItem('dashticdarktheme') == 'light') {
  //       const type: any = localStorage.getItem('dashticdarktheme');
  //       html?.setAttribute('data-theme-mode', type);
  //       html?.setAttribute('data-header-styles', type);
  //       html?.setAttribute('data-menu-styles', type);
  //     }
  //   }
  // }

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  toggleSidebar() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    // Escritorio con menú vertical: alterna entre menú fijo y menú de iconos con despliegue al pasar el mouse
    if (html?.getAttribute('data-nav-layout') == 'vertical' && window.innerWidth > 992) {
      this.menu.alternar();
      return;
    }
    if (html?.getAttribute('data-toggled') == 'true') {
      document.querySelector('html')?.getAttribute('data-toggled') ==
        'icon-overlay-close';
    }
    else if (html?.getAttribute('data-nav-style') == 'menu-click') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'menu-click-closed'
          ? ''
          : 'menu-click-closed'
      );
    } else if (html?.getAttribute('data-nav-style') == 'menu-hover') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'menu-hover-closed'
          ? ''
          : 'menu-hover-closed'
      );
    } else if (html?.getAttribute('data-nav-style') == 'icon-click') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'icon-click-closed'
          ? ''
          : 'icon-click-closed'
      );
    } else if (html?.getAttribute('data-nav-style') == 'icon-hover') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'icon-hover-closed'
          ? ''
          : 'icon-hover-closed'
      );
    }
    else if (html?.getAttribute('data-vertical-style') == 'overlay') {
      html?.setAttribute(
        'data-vertical-style','overlay' 
      );
      html?.setAttribute(
        'data-toggled', html?.getAttribute('data-toggled') == 'icon-overlay-close'
        ? ''
        : 'icon-overlay-close'
      );
    } else if (html?.getAttribute('data-vertical-style')  == 'overlay') {
      document.querySelector('html')?.getAttribute('data-toggled') != null
        ? document.querySelector('html')?.removeAttribute('data-toggled')
        : document
            .querySelector('html')
            ?.setAttribute('data-toggled', 'icon-overlay-close');
    } else if (html?.getAttribute('data-vertical-style') == 'closed') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'close-menu-close'
          ? ''
          : 'close-menu-close'
      );
    } else if (html?.getAttribute('data-vertical-style') == 'icontext') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'icon-text-close'
          ? ''
          : 'icon-text-close'
      );
    } else if (html?.getAttribute('data-vertical-style') == 'detached') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'detached-close'
          ? ''
          : 'detached-close'
      );
    }else if (html?.getAttribute('data-vertical-style') == 'doublemenu') {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'double-menu-close' && document.querySelector(".slide.open")?.classList.contains("has-sub")? 'double-menu-open': 'double-menu-close' );
    } 

    if (window.innerWidth <= 992) {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'open' ? 'close' : 'open'
      );
    }
  }

// Full Screen event start //
  isFullscreen: boolean = false;

  toggleFullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreenChange(event: any) {
    this.isFullscreen = this.isFullScreen();
    this.cdr.detectChanges(); // Manually trigger change detection
  }
  
  private isFullScreen(): boolean {
    return !!document.fullscreenElement;
  }

  private requestFullscreen() {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  private exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  //Full Screen event close //

  //Toggled Shortcuts 
  private offcanvasService = inject(NgbOffcanvas);

  //Notifications 

  handleCardClick(event: MouseEvent) {
    // Prevent the click event from propagating to the container
    event.stopPropagation();
  }

  isCartEmpty: boolean = false;
  isNotifyEmpty: boolean = false;

  cartItemCount: number = 4;
  notificationCount: number = 4;

  removeRow(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }

  removeCart(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }

  removeNotify(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }
  
  isDropdownVisible: boolean = true;
  isCheckoutClicked: boolean = false;
  removeShowClass() {
    if (!this.isCheckoutClicked) {
      this.isDropdownVisible = false;
      this.isCheckoutClicked = true;
    }
  }


  toggleSwitcher() {
    this.offcanvasService.open(SwitcherComponent, {
      position: 'end',
      scroll: true,
    });
  }

  // Búsqueda de pantallas: filtra las opciones del menú y navega a la elegida
  pantallas: { titulo: string; ruta: string; path: string }[] = [];
  resultados: { titulo: string; ruta: string; path: string }[] = [];
  consulta = '';
  indiceActivo = 0;

  private aplanar(items: Menu[], migas: string[] = []): { titulo: string; ruta: string; path: string }[] {
    const salida: { titulo: string; ruta: string; path: string }[] = [];
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
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  abrirBusqueda(plantilla: TemplateRef<any>) {
    this.consulta = '';
    this.resultados = [];
    this.indiceActivo = 0;
    this.modalService.open(plantilla, { windowClass: 'busqueda-ventana', size: 'lg', scrollable: false });
    // El campo recibe el foco al abrir, para escribir de inmediato
    setTimeout(() => document.querySelector<HTMLInputElement>('.busqueda__entrada')?.focus(), 50);
  }

  buscarPantalla(texto: string) {
    this.consulta = texto ?? '';
    const q = this.normalizar(this.consulta);
    this.indiceActivo = 0;
    this.resultados = !q ? [] : this.pantallas
      .filter(p => this.normalizar(`${p.titulo} ${p.ruta}`).includes(q))
      .slice(0, 8);
  }

  teclaBusqueda(evento: KeyboardEvent, modal: any) {
    if (evento.key === 'ArrowDown' && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo + 1) % this.resultados.length;
    } else if (evento.key === 'ArrowUp' && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo - 1 + this.resultados.length) % this.resultados.length;
    } else if (evento.key === 'Enter' && this.resultados[this.indiceActivo]) {
      evento.preventDefault();
      this.irA(this.resultados[this.indiceActivo], modal);
    }
  }

  irA(resultado: { path: string }, modal: any) {
    modal?.close?.();
    this.router.navigateByUrl(resultado.path.startsWith('/') ? resultado.path : '/' + resultado.path);
  }

  @HostListener('document:keydown', ['$event'])
  atajoBusqueda(evento: KeyboardEvent) {
    if ((evento.ctrlKey || evento.metaKey) && evento.key.toLowerCase() === 'k') {
      evento.preventDefault();
      if (document.querySelector('.busqueda')) return;
      const boton = this.elementRef.nativeElement.querySelector('.header-buscar__boton') as HTMLElement | null;
      boton?.click();
    }
  }
}
