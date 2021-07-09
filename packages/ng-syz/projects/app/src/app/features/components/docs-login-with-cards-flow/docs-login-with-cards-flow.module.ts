import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsLoginWithCardsFlowRoutingModule } from './docs-login-with-cards-flow-routing.module';
import { DocsLoginWithCardsFlowComponent } from './docs-login-with-cards-flow.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [DocsLoginWithCardsFlowComponent],
  imports: [
    CommonModule,
    DocsLoginWithCardsFlowRoutingModule,
    NgSyzLoginWithCardsFlowModule,
    SharedModule,
  ],
})
export class DocsLoginWithCardsFlowModule {}
