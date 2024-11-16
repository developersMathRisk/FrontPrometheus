import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-contact-2',
  standalone: true,
  imports: [SharedModule,OverlayscrollbarsModule],
  templateUrl: './contact-2.component.html',
  styleUrl: './contact-2.component.scss'
})
export class Contact2Component {

}
