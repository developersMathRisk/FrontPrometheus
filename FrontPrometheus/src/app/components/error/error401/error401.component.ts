import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-error401',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.scss']
})
export class Error401Component {
  // constructor(private router: Router) {
  //   let body = document.querySelector('body');
  //    body?.classList.add('bg-style', 'error-page');
  // }
  // ngOninit(){
    
  // }
  // ngOnDistroy(){
  //   let body = document.querySelector('body');
  //   body?.classList.remove('bg-style error-page');
  // }
  

}
