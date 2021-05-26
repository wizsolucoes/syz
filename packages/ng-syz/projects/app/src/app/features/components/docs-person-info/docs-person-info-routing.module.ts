import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPersonInfoComponent } from './docs-person-info.component';

const routes: Routes = [{ path: '', component: DocsPersonInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsPersonInfoRoutingModule { }
