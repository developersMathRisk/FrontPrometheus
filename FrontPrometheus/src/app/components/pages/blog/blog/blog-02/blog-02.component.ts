import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-02',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbModule],
  templateUrl: './blog-02.component.html',
  styleUrl: './blog-02.component.scss'
})
export class Blog02Component {
  blogData = [
    {
      image:'./assets/images/photos/1.jpg',
      date:'Jan-18-2020',
      comments:'12',
      title:'Excepteur occaecat cupidatat',
    },
    {
      image:'./assets/images/photos/2.jpg',
      date:'Jan-22-2020',
      comments:'14',
      title:'Lorem ipsum dolor quis',
    },
    {
      image:'./assets/images/photos/3.jpg',
      date:'Jan-16-2020',
      comments:'3',
      title:'pleasure and praising pain',
    },
    {
      image:'./assets/images/photos/4.jpg',
      date:'Feb-16-2020',
      comments:'3',
      title:'expound the actual teachings',
    },
    {
      image:'./assets/images/photos/5.jpg',
      date:'Jan-14-2020',
      comments:'8',
      title:'great explorer of the truth',
    },
    {
      image:'./assets/images/photos/6.jpg',
      date:'Jan-14-2020',
      comments:'7',
      title:'pursue pleasure rationally',
    },
    {
      image:'./assets/images/photos/7.jpg',
      date:'Jan-14-2020',
      comments:'8',
      title:'consequences that are extremely',
    },
    {
      image:'./assets/images/photos/8.jpg',
      date:'Feb-14-2020',
      comments:'8',
      title:'Excepteur occaecat cupidatat',
    }
   ]
}
