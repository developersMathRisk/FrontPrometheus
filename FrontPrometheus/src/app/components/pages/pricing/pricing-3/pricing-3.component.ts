import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing-3',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './pricing-3.component.html',
  styleUrl: './pricing-3.component.scss'
})
export class Pricing3Component {

}
