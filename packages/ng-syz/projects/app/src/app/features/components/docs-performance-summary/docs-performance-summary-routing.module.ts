import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPerformanceSummaryComponent } from './docs-performance-summary.component';

const routes: Routes = [{ path: '', component: DocsPerformanceSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsPerformanceSummaryRoutingModule { }
