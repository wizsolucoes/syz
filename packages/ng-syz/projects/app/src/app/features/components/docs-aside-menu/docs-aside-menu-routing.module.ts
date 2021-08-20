import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsAsideMenuComponent } from './docs-aside-menu.component';

const routes: Routes = [{ path: '', component: DocsAsideMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsAsideMenuRoutingModule { }
