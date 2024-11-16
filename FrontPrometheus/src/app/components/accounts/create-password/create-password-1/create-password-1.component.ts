import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-create-password-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './create-password-1.component.html',
  styleUrl: './create-password-1.component.scss'
})
export class CreatePassword1Component {

}
