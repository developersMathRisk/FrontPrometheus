import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { ColorPickerService } from 'ngx-color-picker';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AppStateService } from './shared/services/app-state.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SwiperModule } from 'swiper/angular';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    RouterOutlet,
    ColorPickerService,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,  
    AngularFireModule,
    importProvidersFrom(
      SortablejsModule.forRoot({ animation: 150 }),
      FlatpickrModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      NgbModule,
      ToastrService,
      SwiperModule,
      NgxCleaveDirectiveModule,
      AppStateService,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      OverlayscrollbarsModule,
      AngularFireModule.initializeApp(environment.firebase),
      NgCircleProgressModule.forRoot({
      })
    )

  ],
};
