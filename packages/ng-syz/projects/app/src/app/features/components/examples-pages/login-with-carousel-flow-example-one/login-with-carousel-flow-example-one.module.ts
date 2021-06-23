import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithCarouselFlowExampleOneRoutingModule } from './login-with-carousel-flow-example-one-routing.module';
import { LoginWithCarouselFlowExampleOneComponent } from './login-with-carousel-flow-example-one.component';

@NgModule({
  declarations: [LoginWithCarouselFlowExampleOneComponent],
  imports: [
    CommonModule,
    LoginWithCarouselFlowExampleOneRoutingModule,
    NgSyzLoginWithCarouselFlowModule,
  ],
})
export class LoginWithCarouselFlowExampleOneModule {}
