import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [SharedModule,OverlayscrollbarsModule],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {
  
  fullScreenToggle() {
    document.querySelector('.fullScreenToggle')?.classList.toggle('card-fullscreen')
  }
  
}
