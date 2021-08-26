import { Component, Input, OnInit } from '@angular/core';
import { NgSyzButton } from '../models';

@Component({
  selector: 'ng-syz-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss'],
})
export class NgSyzButtonGridComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() corTexto = '#fff';
  @Input() corBorda = '#fff';
  @Input() buttons: NgSyzButton[];

  constructor() {}

  ngOnInit(): void {
    this.initCssVariables();
  }

  initCssVariables(): void {
    document.documentElement.style.setProperty('--cor-texto', this.corTexto);
    document.documentElement.style.setProperty('--cor-borda', this.corBorda);
  }
}
