import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsTimelineComponent } from './docs-timeline.component';

const routes: Routes = [{ path: '', component: DocsTimelineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsTimeLineRoutingModule { }
