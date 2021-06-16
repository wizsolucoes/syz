import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesPagesComponent } from './examples-pages.component';

const routes: Routes = [
  { path: '', component: ExamplesPagesComponent },
  {
    path: 'example-flow-example-one',
    loadChildren: () =>
      import('./example-flow-example-one/example-flow-example-one.module').then(
        (m) => m.ExampleFlowExampleOneModule
      ),
  },
  {
    path: 'example-flow-example-two',
    loadChildren: () =>
      import('./example-flow-example-two/example-flow-example-two.module').then(
        (m) => m.ExampleFlowExampleTwoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
