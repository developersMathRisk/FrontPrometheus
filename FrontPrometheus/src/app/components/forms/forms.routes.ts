import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms',children:[
  {
  path: 'form-layouts',
  loadComponent: () =>
    import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
    title: 'Dashtic - Form Layouts'
},
{
  path: 'form-wizard',
  loadComponent: () =>
    import('./form-wizard/form-wizard.component').then((m) => m.FormWizardComponent),
    title: 'Dashtic - Form Wizard'
},
{
  path: 'form-editor/angular-editor',
  loadComponent: () =>
    import('./form-editors/angular-editor/angular-editor.component').then((m) => m.AngularEditorComponent),
   title: 'Dashtic - Angular Editor'
},

{
  path: 'floating-labels',
  loadComponent: () =>
    import('./floating-labels/floating-labels.component').then((m) => m.FloatingLabelsComponent),
    title: 'Dashtic - Floating Labels'
},
{
  path: 'validation',
  loadComponent: () =>
    import('./validation/validation.component').then(
      (m) => m.ValidationComponent
    ),
    title: 'Dashtic - Validation'
},
{
  path: 'select2',
  loadComponent: () =>
    import('./select2/select2.component').then(
      (m) => m.Select2Component
    ),
    title: 'Dashtic - Select2'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}