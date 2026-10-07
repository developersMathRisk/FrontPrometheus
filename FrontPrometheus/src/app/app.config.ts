import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { AppStateService } from './shared/services/app-state.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginadorEs } from './shared/services/paginador-es';
import { authInterceptor } from './shared/services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    RouterOutlet,
    provideHttpClient(withInterceptors([authInterceptor])),
    { provide: MatPaginatorIntl, useClass: PaginadorEs },
    importProvidersFrom(
      NgbModule,
      ToastrService,
      AppStateService,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      OverlayscrollbarsModule
    )
  ],
};
