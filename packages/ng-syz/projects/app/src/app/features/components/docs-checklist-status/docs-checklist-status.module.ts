import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsChecklistStatusRoutingModule } from './docs-checklist-status-routing.module';
import { DocsChecklistStatusComponent } from './docs-checklist-status.component';
import { NgSyzCheckListStatusModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsChecklistStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocsChecklistStatusRoutingModule,
    NgSyzCheckListStatusModule
  ]
})
export class DocsChecklistStatusModule { }
