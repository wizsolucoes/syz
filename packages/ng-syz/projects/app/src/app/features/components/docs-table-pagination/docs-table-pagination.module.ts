import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsTablePaginationRoutingModule } from './docs-table-pagination-routing.module';
import { DocsTablePaginationComponent } from './docs-table-pagination.component';
import { NgSyzTablePaginationModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsTablePaginationComponent
  ],
  imports: [
    CommonModule,
    NgSyzTablePaginationModule,
    SharedModule,
    DocsTablePaginationRoutingModule
  ]
})
export class DocsTablePaginationModule { }
