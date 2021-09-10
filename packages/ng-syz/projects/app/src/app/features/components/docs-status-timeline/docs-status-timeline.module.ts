import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsTimeLineRoutingModule } from './docs-status-timeline-routing.module';
import { DocsTimelineComponent } from './docs-status-timeline.component';

import { NgSyzStatusTimelineModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsTimelineComponent],
  imports: [
    CommonModule,
    DocsTimeLineRoutingModule,
    NgSyzStatusTimelineModule,
    SharedModule,
  ],
})
export class DocsStatusTimelineModule {}
