import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-register-2',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './register-2.component.html',
  styleUrl: './register-2.component.scss'
})
export class Register2Component {
  constructor(){
    document.body.classList.add('page-style3','bg-white');
  }

  ngOnDestroy(): void {
    document.body.classList.add('page-style3','bg-white');    
  }
}
