import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Cards } from './models';

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
  @Input() maxWidth: number = 900;
  @Input() cards: Cards[];
  @Input() labelButton: string;
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor(){}
  
  ngOnInit(): void{
    // console.log(this.image);
  }

  submitActionButton(){
    this.action.emit();
  }

} 
