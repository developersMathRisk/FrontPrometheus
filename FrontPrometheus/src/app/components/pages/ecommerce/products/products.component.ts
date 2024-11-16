import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule,NgxSliderModule,NgSelectModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  isCollapsed4 = true;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b></b> $" + value;
        case LabelType.High:
          return "<b></b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  productData = [
    {
      src:'./assets/images/products/7.jpg',
      name:'Flower Pot',
      rating:'48',
      offerprice:'$750',
      price:'$974'
    },
    {
      src:'./assets/images/products/1.jpg',
      name:'Flower Pot',
      rating:'32',
      offerprice:'$1,457',
      price:'$986'
    },
    {
      src:'./assets/images/products/6.jpg',
      name:'Teddy Bear',
      rating:'14',
      offerprice:'$538',
      price:'$538'
    },
    {
      src:'./assets/images/products/2.jpg',
      name:'Office Chair',
      rating:'14',
      offerprice:'$974',
      price:'$750'
    },
    {
      src:'./assets/images/products/4.jpg',
      name:'Cup',
      rating:'22',
      offerprice:'$1,457',
      price:'$986'
    },
    {
      src:'./assets/images/products/8.jpg',
      name:'Headset',
      rating:'25',
      offerprice:'$1,678',
      price:'$1,346'
    },
    {
      src:'./assets/images/products/3.jpg',
      name:'Earphones',
      rating:'23',
      offerprice:'$2,498',
      price:'$1,967'
    },
    {
      src:'./assets/images/products/5.jpg',
      name:'Stool',
      rating:'22',
      offerprice:'$2,678',
      price:'$1,489'
    },
    {
      src:'./assets/images/products/9.jpg',
      name:'Chain with Heart shape pendent',
      rating:'64',
      offerprice:'$18,967',
      price:'$12,724'
    },
  ]
}
