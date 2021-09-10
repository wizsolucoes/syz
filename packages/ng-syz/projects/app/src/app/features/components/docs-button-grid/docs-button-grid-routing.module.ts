import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsButtonGridComponent } from './docs-button-grid.component';

const routes: Routes = [{ path: '', component: DocsButtonGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsButtonGridRoutingModule {}
