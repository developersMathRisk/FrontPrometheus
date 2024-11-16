import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'pages/invoice/invoice-details',children:[
{
  path: 'invoice-01',
  loadComponent: () =>
    import('./invoice-1/invoice-1.component').then((m) => m.Invoice1Component),
    title: 'Dashtic- Invoice-01'
},
  {
    path: 'invoice-02',  
    loadComponent: () =>
      import('./invoice-2/invoice-2.component').then((m) => m.Invoice2Component),
      title: 'Dashtic- Invoice-02'
  },
  {
    path: 'invoice-03',
    loadComponent: () =>
      import('./invoice-3/invoice-3.component').then((m) => m.Invoice3Component),
      title: 'Dashtic- Invoice-03'
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class invoiceDetailsRoutingModule {
    static routes = admin;
}