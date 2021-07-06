import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithCardsFlowExampleOneRoutingModule } from './login-with-cards-flow-example-one-routing.module';
import { LoginWithCardsFlowExampleOneComponent } from './login-with-cards-flow-example-one.component';
import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [LoginWithCardsFlowExampleOneComponent],
  imports: [
    CommonModule,
    LoginWithCardsFlowExampleOneRoutingModule,
    NgSyzLoginWithCardsFlowModule,
  ],
})
export class LoginWithCardsFlowExampleOneModule {}
