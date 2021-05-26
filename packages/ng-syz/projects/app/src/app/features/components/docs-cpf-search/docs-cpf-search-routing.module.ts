import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsCpfSearchComponent } from './docs-cpf-search.component';

const routes: Routes = [{ path: '', component: DocsCpfSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsCpfSearchRoutingModule { }
