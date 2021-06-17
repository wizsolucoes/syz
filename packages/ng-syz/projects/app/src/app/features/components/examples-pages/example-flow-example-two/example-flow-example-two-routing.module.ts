import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFlowExampleTwoComponent } from './example-flow-example-two.component';

const routes: Routes = [
  { path: '', component: ExampleFlowExampleTwoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFlowExampleTwoRoutingModule {}
