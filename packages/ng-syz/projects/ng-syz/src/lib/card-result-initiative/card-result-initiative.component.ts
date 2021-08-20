import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-syz-card-result-initiative',
  templateUrl: './card-result-initiative.component.html',
  styleUrls: ['./card-result-initiative.component.scss'],
})
export class NgSyzCardResultInitiativeComponent {
  @Input() person: any;
}
