import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsDataTableComponent } from './docs-data-table.component';

const routes: Routes = [{ path: '', component: DocsDataTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsDataTableRoutingModule {}
