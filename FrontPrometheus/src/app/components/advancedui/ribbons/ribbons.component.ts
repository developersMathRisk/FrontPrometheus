import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-ribbons',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ribbons.component.html',
  styleUrl: './ribbons.component.scss'
})
export class RibbonsComponent {

}
