import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import Swiper, { SwiperOptions } from 'swiper';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  } from 'swiper';

Swiper.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);

@Component({
  selector: 'app-swiperjs',
  standalone: true,
  imports: [SharedModule,FormsModule,SwiperModule],
  templateUrl: './swiperjs.component.html',
  styleUrl: './swiperjs.component.scss'
})

export class SwiperjsComponent {
  indexNumber = 1;
  thumbsSwiper: any;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }

  swiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    // other options...
  };

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  opacities: number[] = [];


  public currentSlide = 1;

  swiper!: Swiper;

  ngAfterViewInit() {

    // Initialize Swiper after the view has been initialized
    const swiperH = new Swiper('.swiper-horizontal1', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const swiperV = new Swiper('.swiper-vertical1', {
      direction: 'vertical',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const swiperOptions: SwiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
    };

    this.swiper = new Swiper('.swiper-container', swiperOptions);
    this.initSwipers();
  }

  private initSwipers(): void {
    const galleryThumbs = new Swiper('.swiper-view', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const galleryview = new Swiper('.swiper-preview', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  ngOnDestroy() {
  
  }

  images = [
    {
      src: './assets/images/media/media-27.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-29.jpg',
    },
   
  ];

  imageData = [
    {
      src: './assets/images/media/media-12.jpg',
    },
    {
      src: './assets/images/media/media-8.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-31.jpg',
    },
  ];
  imageData1 = [
    {
      src: './assets/images/media/media-29.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
  ];
  imageData2 = [
    {
      src: './assets/images/media/media-32.jpg',
    },
    {
      src: './assets/images/media/media-31.jpg',
    },
    {
      src: './assets/images/media/media-33.jpg',
    },
  ];
  imageData3 = [
    {
      src: './assets/images/media/media-18.jpg',
    },
    {
      src: './assets/images/media/media-17.jpg',
    },
    {
      src: './assets/images/media/media-16.jpg',
    },
  ];
  imageData4 = [
    {
      src: './assets/images/media/media-14.jpg',
    },
    {
      src: './assets/images/media/media-12.jpg',
    },
    {
      src: './assets/images/media/media-13.jpg',
    }
  ];
  imageData5 = [
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-31.jpg',
    },
  ];
  imageData6 = [
    {
      src: './assets/images/media/media-24.jpg',
    },
    {
      src: './assets/images/media/media-25.jpg',
    },
    {
      src: './assets/images/media/media-26.jpg',
    },
  ];
  imageData7 = [
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-29.jpg',
    }
  ];
  imageData8 = [
    {
      src: './assets/images/media/media-8.jpg',
    },
    {
      src: './assets/images/media/media-32.jpg',
    },
    {
      src: './assets/images/media/media-17.jpg',
    }
  ];
  imageData9 = [
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-32.jpg',
    }
  ];
  imageData10 = [
    {
      src: './assets/images/media/media-31.jpg',
    },
    {
      src: './assets/images/media/media-12.jpg',
    },
    {
      src: './assets/images/media/media-8.jpg',
    }
  ];
}