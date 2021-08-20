import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCarouselCardsComponent } from './carousel-cards.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [NgSyzCarouselCardsComponent],
  imports: [CommonModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCarouselCardsComponent],
})
export class NgSyzCarouselCardsModule {}
