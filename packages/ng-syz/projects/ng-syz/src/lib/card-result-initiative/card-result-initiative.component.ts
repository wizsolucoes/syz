import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Cards, IconsAssets } from './models';

@Component({
  selector: 'ng-syz-card-result-initiative',
  templateUrl: './card-result-initiative.component.html',
  styleUrls: ['./card-result-initiative.component.scss'],
})
export class NgSyzCardResultInitiativeComponent implements OnInit {
  @Input() name: string;
  @Input() image: any;
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() cards: Cards[];
  // @Output() action: EventEmitter<any> = new EventEmitter();

  constructor(){}
  
  ngOnInit(): void{
    console.log(this.image)
  }

  showIcon(name): string{
    const iconRender = IconsAssets.filter(e => e.icon === name)
    console.log(iconRender)
    return iconRender.length ? iconRender[0].svg : '';
  }
} 
