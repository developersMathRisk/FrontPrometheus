import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-register-1',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './register-1.component.html',
  styleUrl: './register-1.component.scss'
})
export class Register1Component {

}
