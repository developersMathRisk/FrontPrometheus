import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'pages/profile',
    children: [
      {
        path: 'profile-1',
        loadComponent: () =>
          import('./profile-1/profile-1.component').then(
            (m) => m.Profile1Component
          ),
        title: 'Dashtic - Profile 1',
      },
      {
        path: 'profile-2', 
        loadComponent: () =>
          import('./profile-2/profile-2.component').then(
            (m) => m.Profile2Component
          ),
        title: 'Dashtic - Profile 2',
      },
      {
        path: 'profile-3',
        loadComponent: () =>
          import('./profile-3/profile-3.component').then(
            (m) => m.Profile3Component
          ),
        title: 'Dashtic - Profile 3',
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./edit-profile/edit-profile.component').then(
            (m) => m.EditProfileComponent
          ),
        title: 'Dashtic - Edit Profile',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class profileRoutingModule {
  static routes = admin;
}
