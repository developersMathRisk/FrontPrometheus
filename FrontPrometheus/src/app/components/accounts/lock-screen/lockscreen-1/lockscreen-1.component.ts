import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-lockscreen-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './lockscreen-1.component.html',
  styleUrl: './lockscreen-1.component.scss'
})
export class Lockscreen1Component {

}
