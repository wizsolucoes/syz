import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsLoginWithCarouselFlowRoutingModule } from './docs-login-with-carousel-flow-routing.module';
import { DocsLoginWithCarouselFlowComponent } from './docs-login-with-carousel-flow.component';

import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsLoginWithCarouselFlowComponent],
  imports: [
    CommonModule,
    DocsLoginWithCarouselFlowRoutingModule,
    NgSyzLoginWithCarouselFlowModule,
    SharedModule,
  ],
})
export class DocsLoginWithCarouselFlowModule {}
