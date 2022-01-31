import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DocsSeeDocsRoutingModule } from './docs-see-docs-routing.module';
import { DocsSeeDocsComponent } from './docs-see-docs.component';
import { NgSyzCheckListStatusModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [DocsSeeDocsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocsSeeDocsRoutingModule,
    NgSyzCheckListStatusModule
  ]
})
export class DocsSeeDocsModule { }
