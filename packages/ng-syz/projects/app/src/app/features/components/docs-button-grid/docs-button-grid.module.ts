import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsButtonGridComponent } from './docs-button-grid.component';
import { DocsButtonGridRoutingModule } from './docs-button-grid-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgSyzButtonGridModule } from 'projects/ng-syz/src/public-api';

@NgModule({
  declarations: [DocsButtonGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocsButtonGridRoutingModule,
    NgSyzButtonGridModule,
  ],
})
export class DocsButtonGridModule {}
