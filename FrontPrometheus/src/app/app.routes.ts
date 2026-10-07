import { accesoGuard } from './shared/services/acceso.guard';
import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { content } from './shared/routes/content.routes';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.routes';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '', component: ContentLayoutComponent, canActivateChild: [accesoGuard], children: content },
    { path: '', component: AuthenticationLayoutComponent, children: authen },
    { path: '**', redirectTo: '/error/error404', pathMatch: 'full' },

];
  