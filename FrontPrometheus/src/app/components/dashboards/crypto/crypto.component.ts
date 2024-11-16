import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as chartData from '../../../shared/data/dashboard_chartData/cryptocharts.data';
import { BaseChartDirective } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { lineChartData1, lineChartData2, lineChartData3, lineChartData4, lineChartData5 } from '../../../shared/data/dashboard_chartData/cryptocharts.data';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [RouterModule,SharedModule,NgbModule,BaseChartDirective,NgApexchartsModule,CarouselModule,NgSelectModule,OverlayscrollbarsModule],
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  public chartOptions1 = lineChartData1;
  public chartOptions2 = lineChartData2;
  public chartOptions3 = lineChartData3;
  public chartOptions4 = lineChartData4;
  public chartOptions5 = lineChartData5;

  customOptions!: OwlOptions;

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 4900,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      center: true,
      margin: 12,
      rtl: false,
      dots: false,
      rewind: false,
      lazyLoad: false,
      nav:false,
      responsive: {
        0 : {
          items : 1
        },
        300: {
          items: 1.5
        },
        
        400: {
          items: 2
        },
        640 : {
          items: 3
        },
        768 : {
          items : 4
        },
  
        900 : {
          items: 4
        },
        1200: {
          items: 6
        },
        1600: {
          items: 7
        }
      }
  }
  let ltr = document.querySelectorAll('#switcher-ltr');
  let rtl = document.querySelectorAll('#switcher-rtl');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
  });
  //RTL
  fromEvent(rtl, 'click').subscribe(() => {
    this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
  });
  if(document.body.classList.contains('rtl')){
    this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
  }
  }
  owlCarouselData = [
    { id: 1, src: './assets/images/crypto-currencies/round-outline/AquariusCoin.svg', name:'USD', value1: '$0.025' , value2: '-0.78%',arrow:'down-c' },
    { id: 2, src: './assets/images/crypto-currencies/round-outline/Augur.svg', name:'USD', value1: '$45.25', value2: '12.85%',arrow:'up-c' },
    { id: 3, src: './assets/images/crypto-currencies/round-outline/Bitcoin.svg', name:'USD', value1: '$15.45' , value2: '-0.78%',arrow:'up-c' },
    { id: 4, src: './assets/images/crypto-currencies/round-outline/BitConnect.svg', name:'USD', value1: '$5.15', value2: '-11.85%',arrow:'down-c' },
    { id: 5, src: './assets/images/crypto-currencies/round-outline/BitShares.svg', name:'USD', value1:'$135.25', value2: '-0.78%',arrow:'ip-c' },
    { id: 6, src: './assets/images/crypto-currencies/round-outline/Bytecoin.svg', name:'USD', value1: '$34.65', value2:'-0.32%' ,arrow:'down-c'},
    { id: 7, src: './assets/images/crypto-currencies/round-outline/Dash.svg', name:'USD' , value1: '$67.35', value2: '-0.78%',arrow:'up-c' },
    { id: 8, src: './assets/images/crypto-currencies/round-outline/EOS.svg', name:'USD', value1: '$7.55', value2: '-1.42%' ,arrow:'down-c'},
    { id: 9, src: './assets/images/crypto-currencies/round-outline/Ethereum.svg', name:'USD', value1: '$4.25', value2: '-0.78%' ,arrow:'up-c'},
    { id: 10, src: './assets/images/crypto-currencies/round-outline/Golem.svg', name:'USD', value1: '$6.05', value2: '-0.78%',arrow:'down-c' },
    { id: 11, src: './assets/images/crypto-currencies/round-outline/Iconomi.svg', name:'USD', value1: '$34.65', value2:'-0.32%',arrow:'up-c' },
    { id: 12, src: './assets/images/crypto-currencies/round-outline/IOTA.svg', name:'USD', value1: '$67.325', value2: '-0.78%',arrow:'down-c' },
    { id: 13, src: './assets/images/crypto-currencies/round-outline/LanaCoin.svg', name:'USD', value1: '$7.25', value2: '-1.42%' ,arrow:'up-c'},
    { id: 14, src: './assets/images/crypto-currencies/round-outline/Ethereum.svg', name:'USD', value1: '$4.35', value2: '-0.78%' ,arrow:'down-c'},
    { id: 15, src: './assets/images/crypto-currencies/round-outline/Litecoin.svg', name:'USD', value1: '$5.55', value2: '-1.32%',arrow:'up-c' },
    { id: 16, src: './assets/images/crypto-currencies/round-outline/Monero.svg', name:'USD', value1: '$6.25', value2: '-0.78%',arrow:'down-c' },
    { id: 17, src: './assets/images/crypto-currencies/round-outline/NEM.svg', name:'USD', value1: '$6.05', value2: '-0.78%' },

  ]
}
