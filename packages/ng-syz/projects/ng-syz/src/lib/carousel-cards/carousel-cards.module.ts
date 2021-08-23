import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCarouselCardsComponent } from './carousel-cards.component';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [NgSyzCarouselCardsComponent],
  imports: [CommonModule, RouterModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCarouselCardsComponent]
})
export class NgSyzCarouselCardsModule {}
