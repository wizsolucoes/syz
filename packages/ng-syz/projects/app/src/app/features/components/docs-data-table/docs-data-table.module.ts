import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsDataTableRoutingModule } from './docs-data-table-routing.module';
import { DocsDataTableComponent } from './docs-data-table.component';
import { NgSyzDataTableModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsDataTableComponent],
  imports: [
    CommonModule,
    NgSyzDataTableModule,
    SharedModule,
    DocsDataTableRoutingModule,
  ],
})
export class DocsDataTableModule {}
