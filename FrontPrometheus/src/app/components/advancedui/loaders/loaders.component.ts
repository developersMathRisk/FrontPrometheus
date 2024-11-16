import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-loaders',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.scss'
})
export class LoadersComponent {

}
