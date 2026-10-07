import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { AppStateService } from './shared/services/app-state.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginadorEs } from './shared/services/paginador-es';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    RouterOutlet,
    // Firebase sigue aquí solo porque el login heredado del template lo usa; sale cuando el login
    // se conecte al endpoint JWT del backend.
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    { provide: MatPaginatorIntl, useClass: PaginadorEs },
    importProvidersFrom(
      NgbModule,
      ToastrService,
      AppStateService,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      OverlayscrollbarsModule,
      AngularFireModule.initializeApp(environment.firebase),
      HttpClientModule
    )
  ],
};
