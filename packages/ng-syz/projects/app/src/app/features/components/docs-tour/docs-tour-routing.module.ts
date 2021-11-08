import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsTourComponent } from './docs-tour.component';

const routes: Routes = [{ path: '', component: DocsTourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsTourRoutingModule { }
