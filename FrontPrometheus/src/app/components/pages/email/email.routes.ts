import { Route } from '@angular/router';
import { MailsettingsComponent } from './mailsettings/mailsettings.component';

export default [
  {
    path: 'pages/email',
    children: [
      { path: 'mail-inbox', component: MailInboxComponent },
      { path: 'mail-read', component: MailReadComponent },
      { path: 'mailsettings', component: MailsettingsComponent },
    ],
  },
] as Route[];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailReadComponent } from './mail-read/mail-read.component';

export const admin: Routes = [
  {
    path: 'pages/email',
    children: [
      {
        path: 'mail-inbox',
        loadComponent: () =>
          import('./mail-inbox/mail-inbox.component').then((m) => m.MailInboxComponent),
        title: 'Dashtic - Mail Inbox',
      },
      {
        path: 'mail-read',
        loadComponent: () =>
          import('./mail-read/mail-read.component').then((m) => m.MailReadComponent),
        title: 'Dashtic - Mail Read',
      },
      {
        path: 'mail-settings',
        loadComponent: () =>
          import('./mailsettings/mailsettings.component').then(
            (m) => m.MailsettingsComponent
          ),
        title: 'Dashtic - Mail Settings',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mailRoutingModule {
  static routes = admin;
}
