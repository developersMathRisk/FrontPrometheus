import { ChangeDetectorRef, Component, ElementRef, HostListener, TemplateRef, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ModalDismissReasons, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Menu, NavService } from '../../services/nav.service';
import { AppStateService } from '../../services/app-state.service';
import { MenuLateralService } from '../../services/menu-lateral.service';
import { CommandPaletteService } from '../../services/command-palette.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public localdata:any;

  readonly hoy = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' });
  migaActual: { grupo: string; titulo: string } | null = null;
  private pantallasMigas: { titulo: string; ruta: string; path: string }[] = [];

  constructor(private cdr: ChangeDetectorRef, public elementRef: ElementRef,private appStateService: AppStateService, public menu: MenuLateralService, private navService: NavService, private router: Router, public paletteService: CommandPaletteService){
    this.appStateService.state$.subscribe(state => {
      this.localdata = state;
    });
    this.navService.items.subscribe(items => {
      this.pantallasMigas = this.aplanarMigas(items);
      this.actualizarMiga();
    });
    this.router.events.pipe(filter(evento => evento instanceof NavigationEnd)).subscribe(() => this.actualizarMiga());
  }

  private aplanarMigas(items: Menu[], migas: string[] = []): { titulo: string; ruta: string; path: string }[] {
    const salida: { titulo: string; ruta: string; path: string }[] = [];
    for (const item of items ?? []) {
      if (!item.title) continue;
      if (item.path && item.type === 'link') {
        salida.push({ titulo: item.title, ruta: migas.join(' › '), path: item.path });
      }
      if (item.children?.length) {
        salida.push(...this.aplanarMigas(item.children, [...migas, item.title]));
      }
    }
    return salida;
  }

  private actualizarMiga(): void {
    const url = this.router.url.replace(/^\//, '').split('?')[0];
    const actual = this.pantallasMigas.find(p => url === p.path || url.startsWith(p.path + '/'));
    this.migaActual = actual ? { grupo: actual.ruta, titulo: actual.titulo } : null;
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



}
