import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ 
  {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales.component').then((m) => m.SalesComponent),
    title: 'Dashtic - Sales'
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(   
      (m) => m.AnalyticsComponent
    ),
    title: 'Dashtic - Analytics'
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Dashtic - Projects'
},
{
  path: 'hr',
  loadComponent: () =>
    import('./hr/hr.component').then((m) => m.HrComponent),
    title: 'Dashtic - HR'
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
    title: 'Dashtic - Crypto'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}