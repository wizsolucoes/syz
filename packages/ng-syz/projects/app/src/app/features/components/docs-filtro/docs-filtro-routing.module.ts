import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsFiltroComponent } from './docs-filtro.component';

const routes: Routes = [{ path: '', component: DocsFiltroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsFiltroRoutingModule { }
