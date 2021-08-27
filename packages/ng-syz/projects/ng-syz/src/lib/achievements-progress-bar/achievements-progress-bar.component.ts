import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  NgSyzAchievementsProgressBar
} from '../models';
@Component({
  selector: 'ng-syz-achievements-progress-bar',
  templateUrl: './achievements-progress-bar.component.html',
  styleUrls: ['./achievements-progress-bar.component.scss']
})
export class NgSyzAchievementsProgressBarComponent implements OnInit {

  @Input() data: NgSyzAchievementsProgressBar;
  @Output() verifyToggleLeftIsSelectedEvent = new EventEmitter<boolean>();

  public mockData: NgSyzAchievementsProgressBar = { 
    actualProgress: 5, goalProgress: 80
  };

  public itensDescription = [
    {title: '87%', subtitle: 'Novos negócios'},
    {title: '100%', subtitle: 'Conquiste'},
    {title: 'Não elegível', subtitle: 'Meritocracia'},
    {title: 'Não elegível', subtitle: 'Meritocracia'}
  ];

  public toggleLeftActive: boolean;

  constructor() { }

  ngOnInit(): void {
    this.toggleLeftActive = true;
    // this.data.actualProgress = 5;
    // this.data.goalProgress = 80;
    this.mockData.actualProgress = 40;
    this.mockData.goalProgress = 90;
    console.log('this.data: ', this.mockData);
  }

  public emitToggle(): void {
    console.log('#toggleLeftActive', this.toggleLeftActive);
    this.verifyToggleLeftIsSelectedEvent.emit(this.toggleLeftActive);
  }

}
