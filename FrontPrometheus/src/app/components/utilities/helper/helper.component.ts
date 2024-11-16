import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-helper',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './helper.component.html',
  styleUrl: './helper.component.scss'
})
export class HelperComponent {

}
