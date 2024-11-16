import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-create-password-3',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './create-password-3.component.html',
  styleUrl: './create-password-3.component.scss'
})
export class CreatePassword3Component {

}
