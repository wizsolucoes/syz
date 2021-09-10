import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsSimulationResultComponent } from './docs-simulation-result.component';

const routes: Routes = [{ path: '', component: DocsSimulationResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsSimulationResultRoutingModule {}
