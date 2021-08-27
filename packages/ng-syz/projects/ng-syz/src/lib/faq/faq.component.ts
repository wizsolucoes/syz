import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'ng-syz-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class NgSyzFaqComponent implements OnInit {

  @Input() dataContentCategorySelected: any;
  @Input() dataCategory: any;
  @Input() simpleDescription: boolean;
  @Input() showToggle: boolean;
  @Input() firstExpanded: boolean;
  @Input() multiExpanded: boolean;
  @Output() categorySelectedEvent = new EventEmitter<any>();

  public itemSelected: any;
  public questionSelect: any = { answer: '', question: '' };
  public hasOneCategoryOnly: boolean;

  constructor() { }

  ngOnInit(): void {
    try {
      this.hasOneCategoryOnly = false;
      this.itemSelected = this.dataCategory.find(x => x.id === this.dataContentCategorySelected.id);
    } catch (error) {
      this.itemSelected = { id: '', title: '' };
    }
  }

  public selectItemAndEmitIt(item: any): void {
    this.itemSelected = item;
    this.categorySelectedEvent.emit(item);
  }

}
