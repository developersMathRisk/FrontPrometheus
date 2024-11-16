import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-log-in-3',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './log-in-3.component.html',
  styleUrl: './log-in-3.component.scss'
})
export class LogIn3Component {

}
