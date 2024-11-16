import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-reset-password-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './reset-password-1.component.html',
  styleUrl: './reset-password-1.component.scss'
})
export class ResetPassword1Component {

}
