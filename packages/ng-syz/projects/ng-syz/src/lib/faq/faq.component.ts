import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'ng-syz-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class NgSyzFaqComponent implements OnInit {

  @Input() data: any;
  @Input() simpleDescription: boolean;
  @Input() showToggle: boolean;
  @Input() firstExpanded: boolean;
  @Input() multiExpanded: boolean;

  public itemSelected: any;
  public questionSelect: any = { answer: '', question: '' };

  constructor() { }

  ngOnInit(): void {
    try {
      this.itemSelected = this.data[0];
    } catch (error) {
      this.itemSelected = { title: '', description: '', isActive: true, itens: [] };
    }
  }

  public selectItem(item: any): void {
    this.itemSelected = item;
    // this.showToggle = this.itemSelected.itens.length > 1;
  }

}
