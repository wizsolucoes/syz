import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsHorizontalTimelineRoutingModule } from './docs-horizontal-timeline-routing.module';
import { DocsHorizontalTimelineComponent } from './docs-horizontal-timeline.component';

import { SharedModule } from '../../../shared/shared.module';
import { NgSyzHorizontalTimelineModule } from 'projects/ng-syz/src/lib/horizontal-timeline/ng-syz-horizontal-timeline.module';

@NgModule({
  declarations: [
    DocsHorizontalTimelineComponent
    
  ],
  imports: [
    CommonModule,
    DocsHorizontalTimelineRoutingModule,
    NgSyzHorizontalTimelineModule,
    SharedModule
  ]
})
export class DocsHorizontalTimelineModule { }
