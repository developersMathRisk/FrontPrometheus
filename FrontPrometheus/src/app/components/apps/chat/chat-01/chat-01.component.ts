import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-chat-01',
  standalone: true,
  imports: [SharedModule,NgbModule,OverlayscrollbarsModule],
  templateUrl: './chat-01.component.html',
  styleUrl: './chat-01.component.scss'
})
export class Chat01Component {
  active = 1;

  ChatData = [
    {
      src: './assets/images/faces/5.jpg',
      name: 'Davil Parnell',
      message: 'Fierent fastidii recteque ad pro',
      time: '2 mins',
    },
    {
      src: './assets/images/faces/2.jpg',
      name: 'Ann Watkinson',
      message: 'Cum sociis natoque penatibus',
      time: '10 mins',
    },
    {
      src: './assets/images/faces/7.jpg',
      name: 'Marse Walter',
      message: 'Suspendisse sapien ligula',
      time: '15 mins',
    },
    {
      src: './assets/images/faces/3.jpg',
      name: 'Jeremy Robbins',
      message: 'Phasellus porttitor tellus nec',
      time: '30 mins',
    },
    {
      src: './assets/images/faces/9.jpg',
      name: 'Reginald Horace',
      message: 'Quisque consequat arcu eget',
      time: '50 mins',
    },
    {
      src: './assets/images/faces/6.jpg',
      name: 'Shark Henry',
      message: 'Nam lobortis odio et leo maximu',
      time: '1 day',
    },
    {
      src: './assets/images/faces/7.jpg',
      name: 'Paul Van Dack',
      message: 'Nam posuere purus sed velit auctor sodales',
      time: '2 day',
    },
    {
      src: './assets/images/faces/5.jpg',
      name: 'James Anderson',
      message: 'Vivamus imperdietsag',
      time: '2 day ',
    },

  ];
  ContatctData = [
    {
      src: './assets/images/faces/5.jpg',
      name: 'Davil Parnell',
      mail: 'davilparnell@gmail.com',
    },
    {
      src: './assets/images/faces/2.jpg',
      name: 'Ann Watkinson',
      mail: 'annwatkinso@gmail.com',
    },
    {
      src: './assets/images/faces/7.jpg',
      name: 'Marse Walter',
      mail: 'marsewalter@gmail.com',
    },
    {
      src: './assets/images/faces/3.jpg',
      name: 'Jeremy Robbins',
      mail: 'jeremyrobbins@gmail.com',
    },
    {
      src: './assets/images/faces/9.jpg',
      name: 'Reginald Horace',
      mail: 'reginaldhorace@gmail.com',
    },
    {
      src: './assets/images/faces/6.jpg',
      name: 'Shark Henry',
      mail: 'sharkhenry@gmail.com',
    },
    {
      src: './assets/images/faces/7.jpg',
      name: 'Paul Van Dack',
      mail: 'paulvandack@gmail.com',
    },
    {
      src: './assets/images/faces/5.jpg',
      name: 'James Anderson',
      mail: 'jamesanderson@gmail.com',
    },

  ];
  activeUser = this.ChatData[0];

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper')?.classList.add('responsive-chat-open');
    }
  }

  removeChat() {  
    document.querySelector('.main-chart-wrapper')?.classList.remove('responsive-chat-open');
  }
}
