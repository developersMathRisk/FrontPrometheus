import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-create-password-2',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './create-password-2.component.html',
  styleUrl: './create-password-2.component.scss'
})
export class CreatePassword2Component {

}
