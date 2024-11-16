import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'widgets',children:[ 
  {  
  path: 'widgets',
  loadComponent: () =>
    import('./widgets/widgets.component').then((m) => m.WidgetsComponent),
    title: 'Dashtic - Widgets'
},
{
  path: 'chart-widgets',
  loadComponent: () =>
    import('./chart-widgets/chart-widgets.component').then((m) => m.ChartWidgetsComponent),
    title: 'Dashtic - Chart Widgets'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class widgetsRoutingModule {
  static routes = admin;
}