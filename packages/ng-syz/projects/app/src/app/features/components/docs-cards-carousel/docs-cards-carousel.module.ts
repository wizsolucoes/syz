import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsCarouselCardsRoutingModule } from './docs-cards-carousel-routing.module';
import { DocsCarouselCardsComponent } from './docs-cards-carousel.component';
import { NgSyzCardsCarouselModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

import 'swiper/swiper-bundle.css';

@NgModule({
  declarations: [DocsCarouselCardsComponent],
  imports: [
    CommonModule,
    NgSyzCardsCarouselModule,
    SharedModule,
    DocsCarouselCardsRoutingModule,
  ],
})
export class DocsCarouselCardsModule {}
