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

  public dataDefault: NgSyzAchievementsProgressBar = { 
    title: 'Titulo',
    labelToggleLeft: 'Left Toggle',
    labelToggleRight: 'Right Toggle',
    actualProgress: 3000,
    actualProgressInPercentage: 10,
    actualProgressDescription: 'Descrição',
    goalProgress: 3500,
    goalProgressInPercentage: 80,
    goalProgressDescription: 'Descrição',
    itensDescriptionBelow: [{title: 'string', subtitle: 'string'}]
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
    this.data = this.data ? this.data : this.dataDefault;
  }

  public emitToggle(): void {
    this.verifyToggleLeftIsSelectedEvent.emit(this.toggleLeftActive);
  }

}
