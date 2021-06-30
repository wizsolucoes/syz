import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithCarouselFlowExampleTwoRoutingModule } from './login-with-carousel-flow-example-two-routing.module';
import { LoginWithCarouselFlowExampleTwoComponent } from './login-with-carousel-flow-example-two.component';

import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [LoginWithCarouselFlowExampleTwoComponent],
  imports: [
    CommonModule,
    LoginWithCarouselFlowExampleTwoRoutingModule,
    NgSyzLoginWithCarouselFlowModule,
  ],
})
export class LoginWithCarouselFlowExampleTwoModule {}
