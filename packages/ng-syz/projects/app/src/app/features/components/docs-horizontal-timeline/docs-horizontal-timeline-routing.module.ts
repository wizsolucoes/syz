import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsHorizontalTimelineComponent } from './docs-horizontal-timeline.component';

const routes: Routes = [{ path: '', component: DocsHorizontalTimelineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsHorizontalTimelineRoutingModule { }
