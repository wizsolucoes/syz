import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-syz-checklist-status',
  templateUrl: './checklist-status.component.html',
  styleUrls: ['./checklist-status.component.scss'],
})
export class NgSyzCheckListStatusComponent implements OnInit {

  @Input() list = [];
  @Input() config = {
    title: 'Metas do sita',
    textButton: 'Saiba mais',
    router: 'Saiba mais',
    target: '_self',
  };

  constructor() {}

  ngOnInit(): void {}

}
