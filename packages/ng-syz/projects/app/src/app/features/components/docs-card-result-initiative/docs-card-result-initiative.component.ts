import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-card-result-initiative',
  templateUrl: './docs-card-result-initiative.component.html',
  styleUrls: ['./docs-card-result-initiative.component.scss']
})
export class DocsCardResultInitiativeComponent implements OnInit {
  image = {
    url: 'https://images-na.ssl-images-amazon.com/images/I/610mHhzQThL.png', 
    alt: 'Teste'
  }

  cards = [
    {
      icon: 'money',
      text: 'incentivo financeiro',
      value: 'R$ 910',
      color: '#0AB64F'
    },
    {
      icon: 'car',
      text: 'Seguro auto',
      value: '16',
      color: '#14ACE8'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(event){
    console.log(event)
  }

}
