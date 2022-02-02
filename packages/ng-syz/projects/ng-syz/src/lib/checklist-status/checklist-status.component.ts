import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-syz-checklist-status',
  templateUrl: './checklist-status.component.html',
  styleUrls: ['./checklist-status.component.scss'],
})
export class NgSyzCheckListStatusComponent {
  @Input() list = [];
  @Input() config = {
    title: 'Metas do sita',
    textButton: 'Saiba mais',
    router: 'Saiba mais',
    target: '_self',
  };
}
