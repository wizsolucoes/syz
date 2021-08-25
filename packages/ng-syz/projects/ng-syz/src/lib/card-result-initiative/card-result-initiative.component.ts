import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgSyzCardResultInitiative } from '../models';

@Component({
  selector: 'ng-syz-card-result-initiative',
  templateUrl: './card-result-initiative.component.html',
  styleUrls: ['./card-result-initiative.component.scss'],
})

export class NgSyzCardResultInitiativeComponent {
  @Input() name: string;
  @Input() image: any;
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() maxWidth: number = 900;
  @Input() cards: NgSyzCardResultInitiative[];
  @Input() labelButton: string;
  @Input() backgroundCard: string;
  @Input() titleColor: string;
  @Input() descriptionColor: string;
  @Output() action: EventEmitter<any> = new EventEmitter();

  submitActionButton(){
    this.action.emit();
  }

} 
