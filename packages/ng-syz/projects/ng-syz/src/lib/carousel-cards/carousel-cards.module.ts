import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCarouselCardsComponent } from './carousel-cards.component';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { CardComponentComponent } from './card-component/card-component.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [NgSyzCarouselCardsComponent, CardComponentComponent],
  imports: [CommonModule, RouterModule, SwiperModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCarouselCardsComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class NgSyzCarouselCardsModule {}
