import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsFiltroRoutingModule } from './docs-sidebar-filter-routing.module';
import { DocsFiltroComponent } from './docs-sidebar-filter.component';
import { NgSyzSideBarFilterModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsFiltroComponent],
  imports: [
    CommonModule,
    DocsFiltroRoutingModule,
    NgSyzSideBarFilterModule,
    SharedModule,
  ],
})
export class DocsFiltroModule {}
