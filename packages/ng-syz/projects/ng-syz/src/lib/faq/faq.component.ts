import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-syz-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class NgSyzFaqComponent implements OnInit {


  @Input() data: any;
  public itemSelected: any = {title: 'default', content: '', isActive: true, itens: []};
  public questionSelect: any = {answer: '', question: ''};

  public mockItens = [
    {question: 'what 1', answer: 'answersssss'},
    {question: 'what 2', answer: 'answersssss'},
    {question: 'what 3', answer: 'answersssss'},
    {question: 'what 4', answer: 'answersssss'}
  ];

  public mockData = [
    {title: 'title1', content: '', itens: this.mockItens},
    {title: 'title2', content: '', itens: this.mockItens},
    {title: 'title3', content: '', itens: this.mockItens},
    {title: 'title4', content: '', itens: this.mockItens},
    {title: 'title5', content: '', itens: this.mockItens},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public selectItem(item: any): void {
    this.itemSelected = this.itemSelected === item ? null : item;
    console.log('##', item);
  }

}
