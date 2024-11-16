import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CarouselModule,OwlOptions} from 'ngx-owl-carousel-o';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-file-manager-details',
  standalone: true,
  imports: [SharedModule,RouterModule,CarouselModule,LightboxModule,GalleryModule],
  templateUrl: './file-manager-details.component.html',
  styleUrl: './file-manager-details.component.scss'
})
export class FileManagerDetailsComponent {
  items!: GalleryItem[];

  imageData = data;
 
  constructor(public gallery: Gallery) {}

  customOptions: OwlOptions = {
    loop: true,
    margin:1,
    rtl: false,
    navText: [
      '<i class="swiper-button-prev"></i>',
      '<i class="swiper-button-next"></i>',
    ],
    mouseDrag: true,
    autoplay:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 4,
      },
      400: {
        items: 4,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore = [
    {
      id: '1',
      src: './assets/images/photos/25.jpg',
      alt: 'img',
      size: '120kb',
      title: '221.jpg',
    },
    {
      id: '2',
      src: './assets/images/photos/22.jpg',
      alt: 'img',
      size: '256kb',
      title: '222.jpg',
    },
    {
      id: '3',
      src: './assets/images/photos/23.jpg',
      alt: 'img',
      size: '500kb',
      title: '223.jpg',
    },
    {
      id: '4',
      src: './assets/images/photos/24.jpg',
      alt: 'img',
      size: '1.2mb',
      title: '224.jpg',
    },
    {
      id: '5',
      src: './assets/images/photos/26.jpg',
      alt: 'img',
      size: '1.8mb',
      title: '225.jpg',
    },
    {
      id: '6',
      src: './assets/images/photos/22.jpg',
      alt: 'img',
      size: '1.4mb',
      title: '226.jpg',
    },
    {
      id: '7',
      src: './assets/images/photos/26.jpg',
      alt: 'img',
      size: '1.6mb',
      title: '227.jpg',
    },
    {
      id: '8',
      src: './assets/images/photos/24.jpg',
      alt: 'img',
      size: '1.5mb',
      title: '228.jpg',
    },
  ];
}
const data = [
  {
    srcUrl: './assets/images/photos/1.jpg',
    previewUrl: './assets/images/photos/1.jpg',
  },
  {
    srcUrl: './assets/images/photos/2.jpg',
    previewUrl: './assets/images/photos/2.jpg',
  },
  {
    srcUrl: './assets/images/photos/3.jpg',
    previewUrl: './assets/images/photos/3.jpg',
  },
  {
    srcUrl: './assets/images/photos/4.jpg',
    previewUrl: './assets/images/photos/4.jpg',
  },
  {
    srcUrl: './assets/images/photos/5.jpg',
    previewUrl: './assets/images/photos/5.jpg',
  },
  {
    srcUrl: './assets/images/photos/6.jpg',
    previewUrl: './assets/images/photos/6.jpg',
  },
  {
    srcUrl: './assets/images/photos/7.jpg',
    previewUrl: './assets/images/photos/7.jpg',
  },
  {
    srcUrl: './assets/images/photos/8.jpg',
    previewUrl: './assets/images/photos/8.jpg',
  },
];
