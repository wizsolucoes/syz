import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFlowExampleOneComponent } from './example-flow-example-one.component';

const routes: Routes = [
  { path: '', component: ExampleFlowExampleOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFlowExampleOneRoutingModule {}
