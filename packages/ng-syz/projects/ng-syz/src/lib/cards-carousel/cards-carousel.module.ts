import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCardsCarouselComponent } from './cards-carousel.component';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import {
  SwiperConfigInterface,
  SwiperModule,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [NgSyzCardsCarouselComponent],
  imports: [CommonModule, RouterModule, SwiperModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCardsCarouselComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class NgSyzCardsCarouselModule {}
