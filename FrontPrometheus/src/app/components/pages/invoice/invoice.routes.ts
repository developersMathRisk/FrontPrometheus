      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages/invoice',children:[ {
        path: 'create-invoice',
        loadComponent: () =>
          import('./create-invoice/create-invoice.component').then((m) => m.CreateInvoiceComponent),
          title: 'Dashtic - Create Invoice'
      },
      {
        path: 'edit-invoice',
        loadComponent: () =>
          import('./edit-invoice/edit-invoice.component').then(
            (m) => m.EditInvoiceComponent
          ),
          title: 'Dashtic - Edit invoice'
      },
    
      {
        path: 'invoice-list',
        loadComponent: () =>
          import('./invoice-list/invoice-list.component').then(
            (m) => m.InvoiceListComponent
          ),
          title: 'Dashtic - Invoice-list'
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class invoiceRoutingModule {
        static routes = admin;
      }