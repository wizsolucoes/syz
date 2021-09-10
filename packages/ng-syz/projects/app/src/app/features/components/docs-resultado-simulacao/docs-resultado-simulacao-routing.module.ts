import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsResultadoSimulacaoComponent } from './docs-resultado-simulacao.component';

const routes: Routes = [{ path: '', component: DocsResultadoSimulacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsResultadoSimulacaoRoutingModule { }
