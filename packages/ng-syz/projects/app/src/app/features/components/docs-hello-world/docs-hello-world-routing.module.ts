import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsHelloWorldComponent } from './docs-hello-world.component';

const routes: Routes = [{ path: '', component: DocsHelloWorldComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsHelloWorldRoutingModule { }
