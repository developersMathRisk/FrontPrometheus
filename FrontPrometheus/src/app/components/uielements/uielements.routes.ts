import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'ui-elements',
    children: [
      {
        path: 'alerts',
        loadComponent: () =>  
          import('./alerts/alerts.component').then((m) => m.AlertsComponent),
        title: 'Dashtic - Alerts',
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./breadcrumb/breadcrumb.component').then(
            (m) => m.BreadcrumbComponent
          ),
        title: 'Dashtic - Breadcrumb',
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
        title: 'Dashtic - Buttons',
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./badge/badge.component').then((m) => m.BadgeComponent),
        title: 'Dashtic - Badge',
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('./buttongroup/buttongroup.component').then(
            (m) => m.ButtongroupComponent
          ),
        title: 'Dashtic - Button Group',
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('./cards/cards.component').then((m) => m.CardsComponent),
        title: 'Dashtic - Cards',
      },
      {
        path: 'dropdowns',
        loadComponent: () =>
          import('./dropdowns/dropdowns.component').then(
            (m) => m.DropdownsComponent
          ),
        title: 'Dashtic - Dropdowns',
      },
      {
        path: 'images&figures',
        loadComponent: () =>
          import('./images-figures/images-figures.component').then(
            (m) => m.ImagesFiguresComponent
          ),
        title: 'Dashtic - Images-Figures',
      },
      
      {
        path: 'list-group',
        loadComponent: () =>
          import('./listgroup/listgroup.component').then(
            (m) => m.ListgroupComponent
          ),
        title: 'Dashtic - List group',
      },
      {
        path: 'nav-tabs',
        loadComponent: () =>
          import('./navtabs/navtabs.component').then((m) => m.NavtabsComponent),
        title: 'Dashtic - Navtabs',
      },
      {
        path: 'objectfit',
        loadComponent: () =>
          import('./objectfit/objectfit.component').then(
            (m) => m.ObjectfitComponent
          ),
        title: 'Dashtic - Objectfit',
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./pagination/pagination.component').then(
            (m) => m.PaginationComponent
          ),
        title: 'Dashtic - Pagination',
      },
      {
        path: 'popovers',
        loadComponent: () =>
          import('./popovers/popovers.component').then(
            (m) => m.PopoversComponent
          ),
        title: 'Dashtic - Popovers',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'Dashtic - toasts',
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
        title: 'Dashtic - Progress',
      },
      {
        path: 'spinners',
        loadComponent: () =>
          import('./spinners/spinners.component').then(
            (m) => m.SpinnersComponent
          ),
        title: 'Dashtic - Spinners',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'Dashtic - Toasts',
      },
      {
        path: 'tooltips',
        loadComponent: () =>
          import('./tooltips/tooltips.component').then(
            (m) => m.TooltipsComponent
          ),
        title: 'Dashtic - Tooltips',
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography.component').then(
            (m) => m.TypographyComponent
          ),
        title: 'Dashtic - Typography',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}
