import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'about-us',  
        loadComponent: () =>
          import('./aboutus/aboutus.component').then((m) => m.AboutusComponent),
        title: 'Dashtic- About us',
      },
      {
        path: 'contactus',
        loadComponent: () =>
          import('./contactus/contactus.component').then(
            (m) => m.ContactusComponent
          ),
        title: 'Dashtic- Contact us',
      },
      {
        path: 'contacts', 
        loadComponent: () =>
          import('./contacts/contacts.component').then(
            (m) => m.ContactsComponent
          ),
        title: 'Dashtic- Contacts',
      },
      {
        path: 'emptypage',
        loadComponent: () =>
          import('./emptypage/emptypage.component').then(
            (m) => m.EmptypageComponent
          ),
        title: 'Dashtic- Empty page',
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./faqs/faqs.component').then((m) => m.FaqsComponent),
        title: 'Dashtic- Faqs',
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./timeline/timeline.component').then(
            (m) => m.TimelineComponent
          ),
        title: 'Dashtic- Timeline',
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./team/team.component').then((m) => m.TeamComponent),
        title: 'Dashtic- Team',
      },
      {
        path: 'terms-conditions',
        loadComponent: () =>
          import('./terms-conditions/terms-conditions.component').then(
            (m) => m.TermsConditionsComponent
          ),
        title: 'Dashtic- Terms Conditions',
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
        title: 'Dashtic- Reviews',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}
