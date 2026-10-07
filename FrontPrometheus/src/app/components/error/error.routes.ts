import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'error',
    children: [
      {
        path: 'error400',
        loadComponent: () =>
          import('./error400/error400.component').then(
            (m) => m.Error400Component
          ),
        title: 'Prometheus - Error 400',
      },
      {
        path: 'error401',
        loadComponent: () =>
          import('./error401/error401.component').then(
            (m) => m.Error401Component
          ),
        title: 'Prometheus - Error 401',
      },
      {
        path: 'error403',
        loadComponent: () =>
          import('./error403/error403.component').then(
            (m) => m.Error403Component
          ),
        title: 'Prometheus - Error 403',
      },
      {
        path: 'error404',
        loadComponent: () =>
          import('./error404/error404.component').then(
            (m) => m.Error404Component
          ),
        title: 'Prometheus - Error 404',
      },
      {
        path: 'error500',
        loadComponent: () =>
          import('./error500/error500.component').then(
            (m) => m.Error500Component
          ),
        title: 'Prometheus - Error 500',
      },
      {
        path: 'error503',
        loadComponent: () =>
          import('./error503/error503.component').then(
            (m) => m.Error503Component
          ),
        title: 'Prometheus - Error 503',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class errorRoutingModule {
  static routes = admin;
}
