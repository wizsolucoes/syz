import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzHorizontalTimelineComponent } from './ng-syz-horizontal-timeline.component';

@NgModule({
  declarations: [NgSyzHorizontalTimelineComponent],
  imports: [
    CommonModule
  ],
  exports:[NgSyzHorizontalTimelineComponent]
})
export class NgSyzHorizontalTimelineModule { }
