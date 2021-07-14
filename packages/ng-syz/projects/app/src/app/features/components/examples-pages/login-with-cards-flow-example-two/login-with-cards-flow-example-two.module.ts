import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithCardsFlowExampleTwoRoutingModule } from './login-with-cards-flow-example-two-routing.module';
import { LoginWithCardsFlowExampleTwoComponent } from './login-with-cards-flow-example-two.component';
import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [LoginWithCardsFlowExampleTwoComponent],
  imports: [
    CommonModule,
    LoginWithCardsFlowExampleTwoRoutingModule,
    NgSyzLoginWithCardsFlowModule,
  ],
})
export class LoginWithCardsFlowExampleTwoModule {}
