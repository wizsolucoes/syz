import { Component, Input, OnInit } from '@angular/core';
import { NgSyzButton } from '../models';

@Component({
  selector: 'ng-syz-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss'],
})
export class NgSyzButtonGridComponent {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() buttons: NgSyzButton[];
}
