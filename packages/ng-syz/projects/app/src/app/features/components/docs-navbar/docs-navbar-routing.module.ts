import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsNavbarComponent } from './docs-navbar.component';

const routes: Routes = [{ path: '', component: DocsNavbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsNavbarRoutingModule { }
