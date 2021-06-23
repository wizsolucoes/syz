import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsLoginWithCarouselFlowComponent } from './docs-login-with-carousel-flow.component';

const routes: Routes = [{ path: '', component: DocsLoginWithCarouselFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsLoginWithCarouselFlowRoutingModule { }
