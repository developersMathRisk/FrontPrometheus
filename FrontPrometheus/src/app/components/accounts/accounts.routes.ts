import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const admin: Routes = [
  {
    path: 'accounts',
    children: [
      {
        path: 'coming-soon',
        loadComponent: () =>
          import('./coming-soon/coming-soon.component').then(
            (m) => m.ComingSoonComponent
          ),
      },
      { 
        path: 'under-maintenance',
        loadComponent: () => 
          import('./under-maintenance/under-maintenance.component').then(
            (m) => m.UnderMaintenanceComponent
          ),
      },
      {
        path: 'create-password/create-password-1',
        loadComponent: () =>
          import('./create-password/create-password-1/create-password-1.component').then(
            (m) => m.CreatePassword1Component
          ),
      },
      {
        path: 'create-password/create-password-2',
        loadComponent: () =>
          import('./create-password/create-password-2/create-password-2.component').then(
            (m) => m.CreatePassword2Component
          ),
      },
      {
        path: 'create-password/create-password-3',
        loadComponent: () =>
          import('./create-password/create-password-3/create-password-3.component').then(
            (m) => m.CreatePassword3Component
          ),
      },
      {
        path: 'forgot-password/forgot-password-1',
        loadComponent: () =>
          import('./forgot-password/forgot-password-1/forgot-password-1.component').then(
            (m) => m.ForgotPassword1Component
          ),
      },
      {
        path: 'forgot-password/forgot-password-2',
        loadComponent: () =>
          import('./forgot-password/forgot-password-2/forgot-password-2.component').then(
            (m) => m.ForgotPassword2Component
          ),
      },
      {
        path: 'forgot-password/forgot-password-3',
        loadComponent: () =>
          import('./forgot-password/forgot-password-3/forgot-password-3.component').then(
            (m) => m.ForgotPassword3Component
          ),
      },
      {
        path: 'lock-screen/lock-screen-1',
        loadComponent: () =>
          import('./lock-screen/lockscreen-1/lockscreen-1.component').then(
            (m) => m.Lockscreen1Component
          ),
      },
      {
        path: 'lock-screen/lock-screen-2',
        loadComponent: () =>
          import('./lock-screen/lockscreen-2/lockscreen-2.component').then(
            (m) => m.Lockscreen2Component
          ),
      },
      {
        path: 'lock-screen/lock-screen-3',
        loadComponent: () =>
          import('./lock-screen/lockscreen-3/lockscreen-3.component').then(
            (m) => m.Lockscreen3Component
          ),
      },
      {
        path: 'log-in/log-in-1',
        loadComponent: () =>
          import('./log-in/log-in-1/log-in-1.component').then(
            (m) => m.LogIn1Component
          ),
      },
      {
        path: 'log-in/log-in-2',
        loadComponent: () =>
          import('./log-in/log-in-2/log-in-2.component').then(
            (m) => m.LogIn2Component
          ),
      }, {
        path: 'log-in/log-in-3',
        loadComponent: () =>
          import('./log-in/log-in-3/log-in-3.component').then(
            (m) => m.LogIn3Component
          ),
      },
      {
        path: 'register/register-1',
        loadComponent: () =>
          import('./register/register-1/register-1.component').then(
            (m) => m.Register1Component
          ),
      },
      {
        path: 'register/register-2',
        loadComponent: () =>
          import('./register/register-2/register-2.component').then(
            (m) => m.Register2Component
          ),
      },
      {
        path: 'register/register-3',
        loadComponent: () =>
          import('./register/register-3/register-3.component').then(
            (m) => m.Register3Component
          ),
      },
      {
        path: 'twostep-verification/twostep-verification-1',
        loadComponent: () =>
          import('./twostep-verification/twostep-verification-1/twostep-verification-1.component').then(
            (m) => m.TwostepVerification1Component
          ),
      },
      {
        path: 'twostep-verification/twostep-verification-2',
        loadComponent: () =>
          import('./twostep-verification/twostep-verification-2/twostep-verification-2.component').then(
            (m) => m.TwostepVerification2Component
          ),
      },
      {
        path: 'twostep-verification/twostep-verification-3',
        loadComponent: () =>
          import('./twostep-verification/twostep-verification-3/twostep-verification-3.component').then(
            (m) => m.TwostepVerification3Component
          ),
      },
      {
        path: 'reset-password/reset-password-1',
        loadComponent: () =>
          import('./reset-password/reset-password-1/reset-password-1.component').then(
            (m) => m.ResetPassword1Component
          ),
      },
      {
        path: 'reset-password/reset-password-2',
        loadComponent: () =>
          import('./reset-password/reset-password-2/reset-password-2.component').then(
            (m) => m.ResetPassword2Component
          ),
      },
      {
        path: 'reset-password/reset-password-3',
        loadComponent: () =>
          import('./reset-password/reset-password-3/reset-password-3.component').then(
            (m) => m.ResetPassword3Component
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class accountsRoutingModule {
  static routes = admin;
}
