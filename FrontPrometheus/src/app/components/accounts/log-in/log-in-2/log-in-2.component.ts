import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-log-in-2',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './log-in-2.component.html',
  styleUrl: './log-in-2.component.scss'
})
export class LogIn2Component {
  constructor(){
    document.body.classList.add('page-style3','bg-white');
  }

  ngOnDestroy(): void {
    document.body.classList.add('page-style3','bg-white');   
  }
  public showPassword: boolean = false;

  toggleClass = 'ri-eye-off-line';

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }
}
