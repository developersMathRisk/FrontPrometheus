import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'pages/pricing',
    children: [
      {
        path: 'pricing-1',
        loadComponent: () =>
          import('./pricing-1/pricing-1.component').then(
            (m) => m.Pricing1Component
          ),
        title: 'Dashtic - Pricing 1',
      },
      {
        path: 'pricing-2', 
        loadComponent: () =>
          import('./pricing-2/pricing-2.component').then(
            (m) => m.Pricing2Component
          ),
        title: 'Dashtic - Pricing 2',
      },
      {
        path: 'pricing-3',
        loadComponent: () =>
          import('./pricing-3/pricing-3.component').then(
            (m) => m.Pricing3Component
          ),
        title: 'Dashtic - Pricing 3',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pricingRoutingModule {
  static routes = admin;
}
