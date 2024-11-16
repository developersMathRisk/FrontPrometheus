import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; 
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule,GalleryModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  isCollapsed = true;
  imagesRect: Image[] = [

    new Image( 0, { img: './assets/images/products/ecommerce/4.png', },
      { img: './assets/images/products/ecommerce/4.png',
    }
    ),
    new Image(1, { img: './assets/images/products/ecommerce/5.png' }),
    new Image(
      2,
      {
        img: './assets/images/products/ecommerce/6.png',
       
      },
      {
        img: './assets/images/products/ecommerce/6.png',
     
      }
    ),
    new Image(
      3,
      {
        img: './assets/images/products/ecommerce/7.png',
       
      },
      { img: './assets/images/products/ecommerce/7.png',
      }
    ),
   
  ];
}