import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsPerformanceSummaryRoutingModule } from './docs-performance-summary-routing.module';
import { DocsPerformanceSummaryComponent } from './docs-performance-summary.component';

import { SharedModule } from '../../../shared/shared.module';
import { NgSyzPerformanceSummaryModule } from '@wizsolucoes/ng-syz';



@NgModule({
  declarations: [
    DocsPerformanceSummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocsPerformanceSummaryRoutingModule,
    NgSyzPerformanceSummaryModule
  ]
})
export class DocsPerformanceSummaryModule { }
