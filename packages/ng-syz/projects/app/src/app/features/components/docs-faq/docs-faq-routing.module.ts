import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsFaqComponent } from './docs-faq.component';

const routes: Routes = [{ path: '', component: DocsFaqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsFaqRoutingModule { }
