import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './forgot-password-1.component.html',
  styleUrl: './forgot-password-1.component.scss'
})
export class ForgotPassword1Component {

}
