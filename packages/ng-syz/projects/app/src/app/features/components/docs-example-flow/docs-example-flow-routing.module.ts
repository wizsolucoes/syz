import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsExampleFlowComponent } from './docs-example-flow.component';

const routes: Routes = [{ path: '', component: DocsExampleFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsExampleFlowRoutingModule {}
