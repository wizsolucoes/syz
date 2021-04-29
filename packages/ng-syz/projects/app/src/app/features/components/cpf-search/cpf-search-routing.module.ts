import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpfSearchComponent } from './cpf-search.component';

const routes: Routes = [{ path: '', component: CpfSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpfSearchRoutingModule { }
