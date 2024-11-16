import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() sub =  'Home';
  @Input() hassub!: string;
  @Input() title!: string;
  @Input() title1!:string;
  @Input() activeTitle!: string;
  // routerEvents:any[]=[]
  // constructor(private router: Router) {
  //   this.router.events.subscribe((event: any) => {
  //     if (event instanceof NavigationEnd) {
  //       this.routerEvents = event.url.split('/').filter(e => e != '');
  //     }
  //   })
  // } 
  

}
