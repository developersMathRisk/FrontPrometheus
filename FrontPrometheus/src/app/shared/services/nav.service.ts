import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
  dirchange?: boolean;
  nochild?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  // Menú real de la app (Prometheus / riesgo de mercado). Iconos estilo Lucide (trazo 1.5, sin relleno).
  MENUITEMS: Menu[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      path: 'registro/inicio',
      title: 'Inicio',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Portafolio',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/portafolio/dashboard-portafolio',
          title: 'Visualización',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Riesgo de Mercado',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/var/ejecutar',
          title: 'Ejecutar VaR',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/var/consulta',
          title: 'Consultar VaR',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/var/backtesting',
          title: 'Backtesting',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/var/anexo9',
          title: 'Anexo N° 9 (SBS)',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Stress Testing',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/stress-testing/ejecutar',
          title: 'Ejecutar escenario',
          type: 'link',
          dirchange: false,
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'Beta',
        },
        {
          path: 'registro/stress-testing/consulta',
          title: 'Consultar resultados',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Mantenedores',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/mantenedor/producto',
          title: 'Instrumentos Financieros',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/mantenedor/factor',
          title: 'Factores de Riesgo',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/mantenedor/atributo-financiero',
          title: 'Atributos Financieros',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/mantenedor/portafolio',
          title: 'Portafolios',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Próximamente',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/cargas/factores',
          title: 'Cargas Diarias',
          type: 'link',
          dirchange: false,
          badgeClass: 'badge bg-warning-transparent',
          badgeValue: 'Pronto',
        },
        {
          path: 'registro/valorizacion/ejecucion',
          title: 'Valorización · Ejecución',
          type: 'link',
          dirchange: false,
          badgeClass: 'badge bg-warning-transparent',
          badgeValue: 'Pronto',
        },
        {
          path: 'registro/valorizacion/consulta',
          title: 'Valorización · Consulta',
          type: 'link',
          dirchange: false,
          badgeClass: 'badge bg-warning-transparent',
          badgeValue: 'Pronto',
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
