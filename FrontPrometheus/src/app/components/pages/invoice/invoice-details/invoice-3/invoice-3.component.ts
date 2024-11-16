import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-3',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './invoice-3.component.html',
  styleUrl: './invoice-3.component.scss'
})
export class Invoice3Component {

}
