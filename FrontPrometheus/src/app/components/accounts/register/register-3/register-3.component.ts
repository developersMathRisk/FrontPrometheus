import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-register-3',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './register-3.component.html',
  styleUrl: './register-3.component.scss'
})
export class Register3Component {

}
