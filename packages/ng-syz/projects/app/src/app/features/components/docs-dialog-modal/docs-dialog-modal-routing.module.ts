import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsDialogModalComponent } from './docs-dialog-modal.component';

const routes: Routes = [{ path: '', component: DocsDialogModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsDialogModalRoutingModule { }
