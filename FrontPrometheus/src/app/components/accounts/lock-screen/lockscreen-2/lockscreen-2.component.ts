import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-lockscreen-2',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './lockscreen-2.component.html',
  styleUrl: './lockscreen-2.component.scss'
})
export class Lockscreen2Component {

}
