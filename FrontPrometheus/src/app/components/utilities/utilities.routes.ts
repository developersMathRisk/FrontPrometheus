import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'utilities',children:[ {
  path: 'avatars',
  loadComponent: () =>
    import('./avatars/avatars.component').then((m) => m.AvatarsComponent),
 title: 'Dashtic - Avatars'
  },
{
  path: 'borders',
  loadComponent: () =>
    import('./borders/borders.component').then(
      (m) => m.BordersComponent
    ),
 title: 'Dashtic - Borders'
  },
{
  path: 'break-point',
  loadComponent: () =>
    import('./break-point/break-point.component').then(
      (m) => m.BreakPointComponent
    ),
 title: 'Dashtic - Break-point'
  },
{
  path: 'colors',
  loadComponent: () =>
    import('./colors/colors.component').then(
      (m) => m.ColorsComponent
    ),
 title: 'Dashtic - Colors'
  },
{
  path: 'columns',
  loadComponent: () =>
    import('./columns/columns.component').then((m) => m.ColumnsComponent),
 title: 'Dashtic - Columns'
  },
{
  path: 'flex',
  loadComponent: () =>
    import('./flex/flex.component').then((m) => m.FlexComponent),
 title: 'Dashtic - Flex'
  },
{
  path: 'gutters',
  loadComponent: () =>
    import('./gutter/gutter.component').then((m) => m.GutterComponent),
 title: 'Dashtic - Gutters'
  },
{
  path: 'helper',
  loadComponent: () =>
    import('./helper/helper.component').then((m) => m.HelperComponent),
 title: 'Dashtic - Helper'
  },
{
  path: 'position',
  loadComponent: () =>
    import('./position/position.component').then((m) => m.PositionComponent),
 title: 'Dashtic - Position'
  },
{
  path: 'additional-content',
  loadComponent: () =>
    import('./additional-content/additional-content.component').then((m) => m.AdditionalContentComponent),
    title: 'Dashtic - Additional-content'
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class utilitiesRoutingModule {
  static routes = admin;
}