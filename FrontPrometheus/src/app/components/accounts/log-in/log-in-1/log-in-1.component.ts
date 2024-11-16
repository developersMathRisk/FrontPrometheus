import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-log-in-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './log-in-1.component.html',
  styleUrl: './log-in-1.component.scss'
})
export class LogIn1Component {

}
