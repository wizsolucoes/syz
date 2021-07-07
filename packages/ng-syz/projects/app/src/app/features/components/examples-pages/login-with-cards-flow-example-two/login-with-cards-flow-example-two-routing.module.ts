import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithCardsFlowExampleTwoComponent } from './login-with-cards-flow-example-two.component';

const routes: Routes = [{ path: '', component: LoginWithCardsFlowExampleTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithCardsFlowExampleTwoRoutingModule { }
