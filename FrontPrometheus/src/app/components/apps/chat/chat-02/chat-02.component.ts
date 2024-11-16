import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
} from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
]);
@Component({
  selector: 'app-chat-02',
  standalone: true,
  imports: [SharedModule,SwiperModule,OverlayscrollbarsModule,NgbModule],
  templateUrl: './chat-02.component.html',
  styleUrl: './chat-02.component.scss'
})
export class Chat02Component {


  imageData = [
    {    
      image: './assets/images/faces/12.jpg',
      name:'Kecia'
    },
    {
      image: './assets/images/faces/2.jpg',
      name:'Copp'   
    },
    {
      image: './assets/images/faces/14.jpg',
      name:'Edwina'   
    },
    {
      image: './assets/images/faces/2.jpg',
      name:'Uriarte'   
    },
    {
      image: './assets/images/faces/8.jpg',
      name:'Ambrose Cawthon'   
    },
    {
      image: './assets/images/faces/3.jpg',
      name:'Cawthon'   
    },
    {
      image: './assets/images/faces/11.jpg',
      name:'Celesta'   
    },
    {
      image: './assets/images/faces/1.jpg',
      name:'Briones'   
    },
    {
      image: './assets/images/faces/14.jpg',
      name:'Copp'   
    },
    {
      image: './assets/images/faces/8.jpg',
      name:'Edwina'   
    },
    {
      image: './assets/images/faces/2.jpg',
      name:'Uriarte'   
    },
   
  ];

  ChatData = [
    {
      status:'online', 
      src: './assets/images/faces/14.jpg',
      name: 'Melodi Maul',
      message: 'culpa qui officia deserunt...',
      time: '2 hours',
      count:'2'
    },
    {
       status:'offline',
      src: './assets/images/faces/8.jpg',
      name: 'Ann Watkinson',
      message: 'Cum sociis natoque penatibus',
      time: '3 hours',
      count:'1'
    },
    {
       status:'online',
      src: './assets/images/faces/3.jpg',
      name: 'Zofia Mccutcheon',
      message: 'Nam libero tempore, cum soluta nobis',
      time: '10 Hours ',
       count:'3'
    },
    {
       status:'offline',
      src: './assets/images/faces/13.jpg',
      name: 'Erlinda Leeder',
      message: 'omnis voluptas assumenda es',
      time: '2 days',
       count:'1'
    },
    {
       status:'offline',
      src: './assets/images/faces/14.jpg',
      name: 'Randy Booze',
      message: 'Temporibus autem quibusdam et',
      time: '2 days',
       count:'2'
    },
    {
       status:'offline',
      src: './assets/images/faces/2.jpg',
      name: 'Camelia Kimber',
      message: 'saepe eveniet ut et voluptates',
      time: '3 day',
       count:'1'
    },
    {
       status:'offline',
      src: './assets/images/faces/7.jpg',
      name: 'Jerome Vowell',
      message: 'reiciendis voluptatibus maiores',
      time: '4 day',
       count:'3'
    },
    {
       status:'offline',
      src: './assets/images/faces/5.jpg',
      name: 'Regine Mccrystal',
      message: 'we denounce with righteous indignation',
      time: '5 day ',
       count:'1'
    },
    {
      status:'offline',
     src: './assets/images/faces/6.jpg',
     name: 'Nigel Knarr',
     message: 'certain circumstances and owing to the claims',
     time: '5 day ',
      count:'1'
   },
   {
    status:'offline',
   src: './assets/images/faces/12.jpg',
   name: 'Marva Constante',
   message: 'Mae cenas tempus, tellus eget co ndimen',
   time: '6 day ',
    count:'3'
 },
  {
  status:'offline',
 src: './assets/images/faces/6.jpg',
 name: 'Twila Hammers',
 message: 'certain circumstances and owing to the claims',
 time: '5 day ',
  count:'2'
 
},
{
  status:'offline',
 src: './assets/images/faces/7.jpg',
 name: 'Vertie Raap',
 message: 'certain circumstances and owing to the claims',
 time: '6 day ',
  count:'1'
},
{
  status:'offline',
 src: './assets/images/faces/7.jpg',
 name: 'Cory Gardenhire',
 message: 'certain circumstances and owing to the claims...',
 time: '7 day ',
  count:'2'
},
  ];

  activeUser = this.ChatData[0];

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      // document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }

}
