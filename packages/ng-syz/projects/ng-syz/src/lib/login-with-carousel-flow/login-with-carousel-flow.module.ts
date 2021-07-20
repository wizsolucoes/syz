import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSyzLoginWithCarouselFlowComponent } from './login-with-carousel-flow.component';
import {
  SwiperModule,
  SWIPER_CONFIG,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { RouterModule } from '@angular/router';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],

  declarations: [NgSyzLoginWithCarouselFlowComponent],
  exports: [NgSyzLoginWithCarouselFlowComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class NgSyzLoginWithCarouselFlowModule {}
