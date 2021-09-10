import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NgSyzInitiativeResultCard,
  NgSyzInitiativeResultCardImage,
} from '../models';

@Component({
  selector: 'ng-syz-initiative-result-card',
  templateUrl: './initiative-result-card.component.html',
  styleUrls: ['./initiative-result-card.component.scss'],
})
export class NgSyzInitiativeResultCardComponent {
  @Input() name: string;
  @Input() image: NgSyzInitiativeResultCardImage;
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() maxWidth = 900;
  @Input() cards: NgSyzInitiativeResultCard[];
  @Input() labelButton: string;
  @Input() backgroundCard: string;
  @Input() titleColor: string;
  @Input() descriptionColor: string;
  @Output() action: EventEmitter<any> = new EventEmitter();

  submitActionButton(): void {
    this.action.emit();
  }
}
