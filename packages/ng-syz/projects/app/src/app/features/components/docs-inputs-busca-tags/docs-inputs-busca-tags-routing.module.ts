import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsInputsBuscaTagsComponent } from './docs-inputs-busca-tags.component';

const routes: Routes = [{ path: '', component: DocsInputsBuscaTagsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsInputsBuscaTagsRoutingModule { }
