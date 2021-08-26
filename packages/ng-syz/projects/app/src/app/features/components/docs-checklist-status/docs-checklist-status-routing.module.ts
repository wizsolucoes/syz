import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsChecklistStatusComponent } from './docs-checklist-status.component';

const routes: Routes = [{ path: '', component: DocsChecklistStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsChecklistStatusRoutingModule { }
