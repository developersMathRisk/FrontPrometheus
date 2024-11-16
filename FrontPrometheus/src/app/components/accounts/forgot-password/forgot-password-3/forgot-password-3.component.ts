import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-forgot-password-3',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './forgot-password-3.component.html',
  styleUrl: './forgot-password-3.component.scss'
})
export class ForgotPassword3Component {

}
