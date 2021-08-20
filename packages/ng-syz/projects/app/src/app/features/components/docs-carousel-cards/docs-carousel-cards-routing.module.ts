import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsCarouselCardsComponent } from './docs-carousel-cards.component';

const routes: Routes = [{ path: '', component: DocsCarouselCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsCarouselCardsRoutingModule { }
