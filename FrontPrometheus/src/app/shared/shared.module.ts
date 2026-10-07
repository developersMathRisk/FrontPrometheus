import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { CommandPaletteComponent } from './components/command-palette/command-palette.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    TabToTopComponent,
    FooterComponent,
    HoverEffectSidebarDirective,
    AuthenticationLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    OverlayscrollbarsModule,
    ReactiveFormsModule,
    FormsModule,
    CommandPaletteComponent,
    ToastComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    TabToTopComponent,
    FooterComponent,
    HoverEffectSidebarDirective,
  ],
})
export class SharedModule { }
