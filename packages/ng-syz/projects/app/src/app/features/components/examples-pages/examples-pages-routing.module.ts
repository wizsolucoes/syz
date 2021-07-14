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
  {
    path: 'login-with-carousel-flow-example-one',
    loadChildren: () =>
      import(
        './login-with-carousel-flow-example-one/login-with-carousel-flow-example-one.module'
      ).then((m) => m.LoginWithCarouselFlowExampleOneModule),
  },
  { path: 'login-with-carousel-flow-example-two', loadChildren: () => import('./login-with-carousel-flow-example-two/login-with-carousel-flow-example-two.module').then(m => m.LoginWithCarouselFlowExampleTwoModule) },
  { path: 'login-with-cards-flow-example-one', loadChildren: () => import('./login-with-cards-flow-example-one/login-with-cards-flow-example-one.module').then(m => m.LoginWithCardsFlowExampleOneModule) },
  { path: 'login-with-cards-flow-example-two', loadChildren: () => import('./login-with-cards-flow-example-two/login-with-cards-flow-example-two.module').then(m => m.LoginWithCardsFlowExampleTwoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
