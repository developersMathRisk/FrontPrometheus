import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-lockscreen-3',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './lockscreen-3.component.html',
  styleUrl: './lockscreen-3.component.scss'
})
export class Lockscreen3Component {

}
