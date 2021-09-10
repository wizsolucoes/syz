import { Component, Input } from '@angular/core';
import { NgSyzStatusTimelineEntry } from '../models';

@Component({
  selector: 'ng-syz-status-timeline',
  templateUrl: './status-timeline.component.html',
  styleUrls: ['./status-timeline.component.scss'],
})
export class NgSyzStatusTimelineComponent {
  @Input() title: string;
  @Input() data: NgSyzStatusTimelineEntry[];
  @Input() isReverse: boolean;
  @Input() futureData: NgSyzStatusTimelineEntry[];

  public hasFuture: boolean;

  public styleTitleTimeline: string;
  public styleSimbol: string;
}
