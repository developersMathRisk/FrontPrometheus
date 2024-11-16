import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[ {
  path: 'accordions',
  loadComponent: () =>
    import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
    title: 'Dashtic - Accordions'
},
{
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then(
      (m) => m.CarouselComponent
    ),
    title: 'Dashtic - Carousel'
},
{
  path: 'draggable-cards',
  loadComponent: () =>
    import('./draggable-cards/draggable-cards.component').then(
      (m) => m.DraggableCardsComponent
    ),
    title: 'Dashtic - Draggable Cards'
},
{
  path: 'modals-closes', 
  loadComponent: () =>
    import('../advancedui/modals-closes/modals-closes.component').then(
      (m) => m.ModalsClosesComponent
    ),    
    title: 'Dashtic - Modals Closes'
},
{
  path: 'placeholders',
  loadComponent: () =>
    import('../advancedui/placeholders/placeholders.component').then(
      (m) => m.PlaceholdersComponent
    ),
    title: 'Dashtic - Placeholders'
},
{
  path: 'navbar',
  loadComponent: () =>
    import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    title: 'Dashtic - Navbar'
},
{
  path: 'offcanvas',
  loadComponent: () =>
    import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
    title: 'Dashtic - Offcanvas'
},
{
  path: 'rating',
  loadComponent: () =>
    import('./ratings/ratings.component').then((m) => m.RatingsComponent),
    title: 'Dashtic - Ratings'
},
{
  path: 'ribbons',
  loadComponent: () =>
    import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
    title: 'Dashtic - Ribbons'
},
{
  path: 'scrollspy',
  loadComponent: () =>
    import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
    title: 'Dashtic - Scrollspy'
},
{
  path: 'swiperjs',
  loadComponent: () =>
    import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
    title: 'Dashtic - Swiperjs'
},
{
  path: 'treeview', 
  loadComponent: () =>
    import('./treeview/treeview.component').then((m) => m.TreeviewComponent),
    title: 'Dashtic - Treeview'
},
{
  path: 'counters',
  loadComponent: () =>
    import('./counters/counters.component').then((m) => m.CountersComponent),
    title: 'Dashtic - Counters'
},
{
  path: 'loaders',
  loadComponent: () =>
    import('./loaders/loaders.component').then((m) => m.LoadersComponent),
    title: 'Dashtic - Loaders'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}