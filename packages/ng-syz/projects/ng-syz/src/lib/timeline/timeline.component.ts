import { Component, Input, OnInit } from '@angular/core';
import {
  NgSyzTimeline
} from '../models';
@Component({
  selector: 'ng-syz-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class NgSyzTimelineComponent implements OnInit {

  @Input() title: string;
  @Input() data: NgSyzTimeline[];
  @Input() isReverse: boolean;

  public styleTitleTimeline: string;
  public styleSimbol: string;

  constructor() { }

  ngOnInit(): void {
  }

}
