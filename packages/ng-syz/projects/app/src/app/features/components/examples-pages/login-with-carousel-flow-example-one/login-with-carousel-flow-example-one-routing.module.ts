import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithCarouselFlowExampleOneComponent } from './login-with-carousel-flow-example-one.component';

const routes: Routes = [{ path: '', component: LoginWithCarouselFlowExampleOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithCarouselFlowExampleOneRoutingModule { }
