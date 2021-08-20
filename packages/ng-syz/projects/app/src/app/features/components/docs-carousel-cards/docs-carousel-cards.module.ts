import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsCarouselCardsRoutingModule } from './docs-carousel-cards-routing.module';
import { DocsCarouselCardsComponent } from './docs-carousel-cards.component';
import { NgSyzCarouselCardsModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    DocsCarouselCardsComponent
  ],
  imports: [
    CommonModule,
    NgSyzCarouselCardsModule,
    SharedModule,
    DocsCarouselCardsRoutingModule
  ]
})
export class DocsCarouselCardsModule { }
