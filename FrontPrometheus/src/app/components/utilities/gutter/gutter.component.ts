import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-gutter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './gutter.component.html',
  styleUrl: './gutter.component.scss'
})
export class GutterComponent {

}
