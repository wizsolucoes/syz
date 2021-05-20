import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-syz-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss'],
})
export class NgSyzPersonInfoComponent {
  @Input() person: any;
}
