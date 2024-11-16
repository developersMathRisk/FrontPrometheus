import { Component } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightboxModule } from 'ng-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [SharedModule,HttpClientModule,NgbModule,LightgalleryModule,LightboxModule],
  templateUrl: './widgets.component.html', 
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
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
]
