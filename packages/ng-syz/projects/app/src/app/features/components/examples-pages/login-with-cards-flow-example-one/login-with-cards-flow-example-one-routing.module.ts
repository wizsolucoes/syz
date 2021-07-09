import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithCardsFlowExampleOneComponent } from './login-with-cards-flow-example-one.component';

const routes: Routes = [{ path: '', component: LoginWithCardsFlowExampleOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithCardsFlowExampleOneRoutingModule { }
