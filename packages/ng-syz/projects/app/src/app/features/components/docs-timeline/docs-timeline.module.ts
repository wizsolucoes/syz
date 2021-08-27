import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsTimeLineRoutingModule } from './docs-timeline-routing.module';
import { DocsTimelineComponent } from './docs-timeline.component';

import { NgSyzTimelineModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    DocsTimelineComponent
  ],
  imports: [
    CommonModule,
    DocsTimeLineRoutingModule,
    NgSyzTimelineModule,
    SharedModule
  ]
})
export class DocsTimelineModule { }
