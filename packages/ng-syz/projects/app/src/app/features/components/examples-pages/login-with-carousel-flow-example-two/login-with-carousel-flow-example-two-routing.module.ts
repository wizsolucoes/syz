import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithCarouselFlowExampleTwoComponent } from './login-with-carousel-flow-example-two.component';

const routes: Routes = [{ path: '', component: LoginWithCarouselFlowExampleTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithCarouselFlowExampleTwoRoutingModule { }
