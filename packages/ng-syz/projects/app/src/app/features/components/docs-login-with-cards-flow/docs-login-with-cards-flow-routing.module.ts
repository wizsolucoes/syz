import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsLoginWithCardsFlowComponent } from './docs-login-with-cards-flow.component';

const routes: Routes = [{ path: '', component: DocsLoginWithCardsFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsLoginWithCardsFlowRoutingModule { }
