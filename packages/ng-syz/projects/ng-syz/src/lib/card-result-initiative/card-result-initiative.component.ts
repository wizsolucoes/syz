import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgSyzCardResultInitiative, NgSyzCardResultInitiativeImage } from '../models';

@Component({
  selector: 'ng-syz-card-result-initiative',
  templateUrl: './card-result-initiative.component.html',
  styleUrls: ['./card-result-initiative.component.scss'],
})

export class NgSyzCardResultInitiativeComponent {
  @Input() name: string;
  @Input() image: NgSyzCardResultInitiativeImage;
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() maxWidth = 900;
  @Input() cards: NgSyzCardResultInitiative[];
  @Input() labelButton: string;
  @Input() backgroundCard: string;
  @Input() titleColor: string;
  @Input() descriptionColor: string;
  @Output() action: EventEmitter<any> = new EventEmitter();

  submitActionButton(): void{
    this.action.emit();
  }

} 