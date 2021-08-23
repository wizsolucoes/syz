import { Component, OnInit } from '@angular/core';

const imagemTeste = require("./assets/image.png");
@Component({
  selector: 'app-docs-card-result-initiative',
  templateUrl: './docs-card-result-initiative.component.html',
  styleUrls: ['./docs-card-result-initiative.component.scss']
})
export class DocsCardResultInitiativeComponent implements OnInit {
  image = {
    url: imagemTeste, 
    alt: 'Teste'
  }

  cards = [
    {
      icon: 'wallpaper',
      text: 'incentivo financeiro',
      value: 'R$ 910',
      color: 'orange',
      variable: {
        direction: 'up',
        value: '+R$ 40,00'
      }
    },
    {
      icon: 'attach_money',
      text: 'Seguro auto',
      value: '16',
      color: '#14ACE8',
      variable: {
        value: '+R$ 40,00'
      }
    },
    {
      icon: 'attach_money',
      text: 'Seguro auto',
      value: '16',
      color: 'red',
      variable: {
        direction: 'down',
        value: '+R$ 40,00'
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(){
    console.log('clicou')
  }

}
