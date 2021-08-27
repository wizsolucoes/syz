import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsTablePaginationComponent } from './docs-table-pagination.component';

const routes: Routes = [{ path: '', component: DocsTablePaginationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsTablePaginationRoutingModule { }
