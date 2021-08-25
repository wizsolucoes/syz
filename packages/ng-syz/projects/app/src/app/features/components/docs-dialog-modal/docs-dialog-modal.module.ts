import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsDialogModalRoutingModule } from './docs-dialog-modal-routing.module';
import { DocsDialogModalComponent } from './docs-dialog-modal.component';

import { NgSyzDialogModalModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsDialogModalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DocsDialogModalRoutingModule,
    NgSyzDialogModalModule
  ]
})
export class DocsDialogModalModule { }
