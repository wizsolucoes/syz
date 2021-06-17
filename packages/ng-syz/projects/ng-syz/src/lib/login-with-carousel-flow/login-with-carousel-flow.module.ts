import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSyzLoginWithCarouselFlowComponent } from './login-with-carousel-flow.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SwiperModule],
  declarations: [NgSyzLoginWithCarouselFlowComponent],
})
export class NgSyzLoginWithCarouselFlowModule {}
