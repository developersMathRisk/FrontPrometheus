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

  MENUITEMS: Menu[] = [
    // Dashboard
    {
      title: 'Dashboards',
      icon: ` <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/dashboards/sales',
          title: 'Sales Dashboard',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/analytics',
          title: 'Analytics Dashboard',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/projects',
          title: 'Projects Dashboard',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/hr',
          title: 'Hr Dashboard',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/crypto',
          title: 'Crypto Dashboard',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Apps',
      type: 'sub',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/apps/fullcalender',
          title: 'Full Calender',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/gallery',
          title: 'Gallery',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/sweetalerts',
          title: 'Sweetalerts',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Chat',
          type: 'sub',
          badgeClass: 'secondary',
          badgeText: 'secondary',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/chat/chat-01',
              title: 'Chat 01',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/chat/chat-02',
              title: 'Chat 02',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/chat/chat-03',
              title: 'Chat 03',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Contact',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/contact/contacts',
              title: 'Contacts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/contact/contacts-02',
              title: 'Contact 02',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/contact/contacts-03',
              title: 'Contact 03',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'File Manager',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/filemanager/filemanager',
              title: 'File manager',
              type: 'link',
              dirchange: false,
            },
            {
              title: 'File Manager List',
              type: 'sub',
              active: false,
              dirchange: false,
              selected: false,
              children: [
                {
                  path: '/apps/filemanager/filemanager-list/file-list-01',
                  title: 'File List 01',
                  type: 'link',
                  dirchange: false,
                },
                {
                  path: '/apps/filemanager/filemanager-list/file-list-02',
                  title: 'File List 02',
                  type: 'link',
                  dirchange: false,
                },
              ],
            },
            {
              path: '/apps/filemanager/filemanager-details',
              title: 'File manager Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Todo List',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/todo-list/todo-list',
              title: 'Todo List 01',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/todo-list/todo-list-02',
              title: 'Todo List 02',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/todo-list/todo-list-03',
              title: 'Todo List 03',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/todo-list/todo-list-04',
              title: 'Todo List 04',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'User List',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/user-list/userlist',
              title: 'User List 01',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/user-list/userlist-02',
              title: 'User List 02',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/user-list/userlist-03',
              title: 'User List 03',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/user-list/userlist-04',
              title: 'User List 04',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Widgets',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/widgets/widgets',
          title: 'Widgets',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/widgets/chart-widgets',
          title: 'Chart Widgets',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Forms',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Form Elements',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/forms/form-elements/inputs',
              title: 'Inputs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/checks-radios',
              title: 'Check & Radios',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputgroup',
              title: 'Input Group',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/formselect',
              title: 'Form Select',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/range-slider',
              title: 'Range Slider',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputmask',
              title: 'Input Mask',
              type: 'link',
              dirchange: false,
            },

            {
              path: '/forms/form-elements/file-uploads',
              title: 'File Uploads',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/datetimepickers',
              title: 'Date Time Picker',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/color-pickers',
              title: 'Color Pickers',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/forms/floating-labels',
          title: 'Floating Labels',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-wizard',
          title: 'Form Wizard',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Form Editors',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/forms/form-editor/angular-editor',
              title: 'Angular Editor',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/forms/validation',
          title: 'Validation',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/select2',
          title: 'Select2',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Charts',
      type: 'sub',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Apex Charts',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/charts/apex-charts/line-charts',
              title: 'Line Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/area-charts',
              title: 'Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/column-charts',
              title: 'Column Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bar-charts',
              title: 'Bar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/mixedcharts',
              title: 'Mixed Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/rangeareacharts',
              title: 'Range Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/timelinecharts',
              title: 'TimeLine Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/candlestickcharts',
              title: 'CandleStick Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/boxplotcharts',
              title: 'BoxPlot Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bubblecharts',
              title: 'Bubble charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/scattercharts',
              title: 'Scatter Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/heatmapcharts',
              title: 'Heatmap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/treemapcharts',
              title: 'TreeMap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/piecharts',
              title: 'Pie Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radialbarcharts',
              title: 'Radialbar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radarcharts',
              title: 'Radar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/polarareacharts',
              title: 'Polararea Charts',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/charts/chartjs',
          title: 'Chartjs Charts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/charts/echart',
          title: 'Echart Charts',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Tables',
      type: 'sub',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/tables/tables',
          title: 'Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/angular-material-tables',
          title: 'Angular material Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/ngx-easy-table',
          title: 'Ngx Easy Table',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Maps',
      type: 'sub',
      icon: `<svg class="feather feather-map-pin side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/maps/leafletmaps',
          title: 'Leaflet Maps',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/maps/google-map',
          title: 'Google Map',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Elements',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/ui-elements/alerts',
          title: 'Alerts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/badge',
          title: 'Badge',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/breadcrumb',
          title: 'Breadcrumb',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/buttons',
          title: 'Buttons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/button-group',
          title: 'Button Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/cards',
          title: 'cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/dropdowns',
          title: 'DropDowns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/images&figures',
          title: 'Images & Figures',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/list-group',
          title: 'List Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/nav-tabs',
          title: 'Navs & Tabs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/objectfit',
          title: 'Object Fit',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/pagination',
          title: 'Pagination',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/popovers',
          title: 'Popovers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/progress',
          title: 'Progress',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/spinners',
          title: 'Spinners',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/toasts',
          title: 'Toasts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/tooltips',
          title: 'Tooltips',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/typography',
          title: 'Typography',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
      path: 'icons',
      title: 'Icons',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Advanced Ui',
      type: 'sub',
      icon: `<svg class="feather feather-archive side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/advanced-ui/accordions',
          title: 'Accordions & Collapse',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/carousel',
          title: 'Carousel',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/draggable-cards',
          title: 'Draggable Cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/modals-closes',
          title: 'Models & Closes',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/navbar',
          title: 'Navbar',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/offcanvas',
          title: 'OffCanvas',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/placeholders',
          title: 'placeholders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/rating',
          title: 'Rating',
          type: 'link',
          dirchange: false,
        },

        {
          path: '/advanced-ui/scrollspy',
          title: 'Scrollspy',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/swiperjs',
          title: 'SwiperJs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/treeview',
          title: 'Treeview',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ribbons',
          title: 'Ribbons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/counters',
          title: 'Counters',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/loaders',
          title: 'Loaders',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Pages',
      type: 'sub',
      active: false,
      selected: false,
      dirchange: false,
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`,
      children: [
        {
          path: '/pages/about-us',
          title: 'About Us',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Blog',
          type: 'sub',
          active: false,
          dirchange: false,
          selected: false,
          children: [
            {
              title: 'Blog',
              type: 'sub',
              dirchange: false,
              children: [
                {
                  path: '/pages/blog/blog/blog-01',
                  title: 'Blog-01',
                  type: 'link',
                  dirchange: false,
                },
                {
                  path: '/pages/blog/blog/blog-02',
                  title: 'Blog-02',
                  type: 'link',
                  dirchange: false,
                },
                {
                  path: '/pages/blog/blog/blog-03',
                  title: 'Blog-03',
                  type: 'link',
                  dirchange: false,
                },
              ],
            },
            {
              path: '/pages/blog/blog-details',
              title: 'Blog Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/create-blog',
              title: 'Create Blog',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Ecommerce',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/ecommerce/addproduct',
              title: 'Add Products',
              type: 'link',
              dirchange: false,
            },

            {
              path: '/pages/ecommerce/cart',
              title: 'Cart',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/checkout',
              title: 'Checkout',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/edit-products',
              title: 'Edit products',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/orderdetails',
              title: 'Order Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/orders',
              title: 'Orders',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/products',
              title: 'Products',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/product-details',
              title: 'Product Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/products-list',
              title: 'Products List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/ecommerce/wishlist',
              title: 'Wishlist',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Email',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/email/mail-inbox',
              title: 'Mail Inbox',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/email/mail-read',
              title: 'Mail Read',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/email/mail-settings',
              title: 'mail Settings',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/emptypage',
          title: 'Empty',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/faqs',
          title: "FAQ's",
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Invoice',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/invoice/create-invoice',
              title: 'Create Invoice',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/edit-invoice',
              title: 'Edit Invoice',
              type: 'link',
              dirchange: false,
            },
            {
              title: 'Invoice Details',
              type: 'sub',
              dirchange: false,
              children: [
                {
                  path: '/pages/invoice/invoice-details/invoice-01',
                  title: 'Invoice-01',
                  type: 'link',
                  dirchange: false,
                },
                {
                  path: '/pages/invoice/invoice-details/invoice-02',
                  title: 'Invoice-02',
                  type: 'link',
                  dirchange: false,
                },
                {
                  path: '/pages/invoice/invoice-details/invoice-03',
                  title: 'Invoice-03',
                  type: 'link',
                  dirchange: false,
                },
              ],
            },
            {
              path: '/pages/invoice/invoice-list',
              title: 'Invoice List',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Pricing',
          type: 'sub',
          dirchange: false,
          children: [
            {
              path: '/pages/pricing/pricing-1',
              title: 'Pricing-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/pricing/pricing-2',
              title: 'Pricing-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/pricing/pricing-3',
              title: 'Pricing-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Profile',
          type: 'sub',
          dirchange: false,
          children: [
            {
              path: '/pages/profile/profile-1',
              title: 'Profile-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/profile/profile-2',
              title: 'Profile-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/profile/profile-3',
              title: 'Profile-3',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/profile/edit-profile',
              title: 'Edit Profile',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/reviews',
          title: 'Reviews',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/team',
          title: 'Team',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/terms-conditions',
          title: 'Terms & Conditions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/timeline',
          title: 'Timeline',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Nested Menu',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Nested-1',
          dirchange: false,
          type: 'empty',
          active: false,
          selected: false,
          path: '/nested-menu/nested-1',
        },
        {
          title: 'Nested-2',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Nested-2.1',
              type: 'empty',
              active: false,
            },
            {
              title: 'Nested-2.2',
              type: 'empty',
              active: false,
              // children: [
              //   {
              //     title: 'Nested-2.2.1',
              //     type: 'empty',
              //     active: false,
              //   },
              //   {
              //     title: 'Nested-2.2.2',
              //     type: 'empty',
              //     active: false,
              //   },
              // ],
            },
          ],
        },
      ],
    },
    {
      title: 'Accounts',
      type: 'sub',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/accounts/coming-soon',
          title: 'Coming-Soon',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
        },
        {
          path: '/accounts/under-maintenance',
          title: 'Under Maintenance',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Create Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/create-password/create-password-1',
              title: 'Create Password-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/create-password/create-password-2',
              title: 'Create Password-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/create-password/create-password-3',
              title: 'Create Password-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Lock Screen',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/lock-screen/lock-screen-1',
              title: 'Lock Screen-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/lock-screen/lock-screen-2',
              title: 'Lock Screen-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/lock-screen/lock-screen-3',
              title: 'Lock Screen-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Reset Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/reset-password/reset-password-1',
              title: 'Reset Password-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/reset-password/reset-password-2',
              title: 'Reset Password-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/reset-password/reset-password-3',
              title: 'Reset Password-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Log in',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/log-in/log-in-1',
              title: 'log In-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/log-in/log-in-2',
              title: 'Log In-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/log-in/log-in-3',
              title: 'Log In-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Forgot Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/forgot-password/forgot-password-1',
              title: 'Forgot Password-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/forgot-password/forgot-password-2',
              title: 'Forgot Password-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/forgot-password/forgot-password-3',
              title: 'Forgot Password-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Register',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/register/register-1',
              title: 'Register-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/register/register-2',
              title: 'Register-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/register/register-3',
              title: 'Register-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Two Step Verification',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'accounts/twostep-verification/twostep-verification-1',
              title: 'Two Step Verification-1',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/twostep-verification/twostep-verification-2',
              title: 'Two Step Verification-2',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'accounts/twostep-verification/twostep-verification-3',
              title: 'Two Step Verification-3',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Error Pages',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'error/error400',
          title: '400',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error401',
          title: '401',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error403',
          title: '403',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error404',
          title: '404',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error500',
          title: '500',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error503',
          title: '503',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Utilites',
      type: 'sub',
      icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/utilities/avatars',
          title: 'Avatars',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/borders',
          title: 'Borders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/break-point',
          title: 'Breakpoints',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/colors',
          title: 'Colors',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/columns',
          title: 'Columns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/flex',
          title: 'Flex',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/gutters',
          title: 'Gutters',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/helper',
          title: 'Helpers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/position',
          title: 'Position',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/additional-content',
          title: 'Additional-content',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Mantenedores',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/mantenedor/producto',
          title: 'Instrumentos de Deuda',
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
        }
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      path: 'registro/portafolio',
      title: 'Portafolio',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Cargas Diarias',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/cargas/factores',
          title: 'Factores de Riesgo',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Valorización',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'registro/valorizacion/ejecucion',
          title: 'Ejecución de valorizaciones',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'registro/valorizacion/consulta',
          title: 'Consulta de valorizaciones',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Banca',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Riesgo de Mercado',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'registro/var/ejecucion',
              title: 'Ejecución de VaR y Stress Testing',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'registro/var/consulta',
              title: 'Consulta de resultados VaR y Stress Testing',
              type: 'link',
              dirchange: false,
            }
          ],
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
