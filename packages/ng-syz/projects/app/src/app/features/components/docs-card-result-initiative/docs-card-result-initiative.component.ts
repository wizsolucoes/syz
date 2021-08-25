import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

// const imagemTeste = require("./assets/image.png");
const imagemTeste = ("https://github.com/gabriellennon.png");
@Component({
  selector: 'app-docs-card-result-initiative',
  templateUrl: './docs-card-result-initiative.component.html',
  styleUrls: ['./docs-card-result-initiative.component.scss']
})
export class DocsCardResultInitiativeComponent implements OnInit {
  image = {
    url: imagemTeste, 
    alt: 'Ícone'
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

  exampleHtml = `
    <ng-syz-card-result-initiative
      name="Progresso de indicações"
      [image]="image"
      title="Chegou a hora de receber o seu incentivo!"
      description="Para realizarmos o pagamento do seu incentivo financeiro, precisamos
      que você aceite o RPA. Clique no botão e siga as orientações."
      type="cards"
      [maxWidth]="900"
      [cards]="cards"
      (action)="myFunction()"
    ></ng-syz-card-result-initiative>
  `;

  exampleHtml2 = `
    <ng-syz-card-result-initiative
      name="Progresso de indicações"
      [image]="image"
      title="Parabéns pelo seu resultado na campanha!"
      description="A campanha se encerrou e essas foram as suas conquistas. Dá só uma olhada:"
      type="cards"
      [maxWidth]="900"
      [cards]="button"
      (action)="myFunction()"
      labelButton="Assinar RPA"
    ></ng-syz-card-result-initiative>
  `;

  exampleTs = `
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
  `;

  //Documentação parte API
  importCode = `import { NgSyzCardResultInitiativeModule } from '@wizsolucoes/ng-syz';`;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() title: string`,
      description: 'Título geral do card, veja exemplo.',
    },
    {
      name: `@Input() description: string`,
      description: 'Subtítulo do card, veja exemplo.',
    },
    {
      name: `@Input() type: string`,
      description: 'Tipo do card, podendo ser button ou cards, veja exemplo.',
    },
    {
      name: `@Input() image: any`,
      description: 'Imagem geral do card, do tipo object, onde o objeto é contido pela url da imagem e o texto alt, veja exemplo.',
    },
    {
      name: `@Input() name: string`,
      description: 'Pequeno título  opcional, veja exemplo.',
    },
    {
      name: `@Input() maxWidth: number`,
      description: 'Width máximo desejado do card, veja exemplo.',
    },
    {
      name: `@Input() cards: Cards[]`,
      description: `Cards menores de com seus devidos atributos desejado, os ícones utilizados
      são os do material icons (https://fonts.google.com/icons?selected=Material+Icons), precisando
      então apenas passar o nome do ícone.
      Pode-se passar também sem o parâmetro direction em variable.
      {
        icon: 'attach_money',
        text: 'Seguro auto',
        value: '16',
        color: '#14ACE8',
        variable: {
          direction: 'down',
          value: '+R$ 40,00'
        }
      },
      {
        icon: 'attach_money',
        text: 'Seguro auto',
        value: '16',
        color: 'red',
        variable: {
          value: '+R$ 40,00'
        }
      }
      `,
    },
    {
      name: `@Output() action: EventEmitter<any>`,
      description: 'Evento emitido quando o há clique no botão.',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `$color-up`,
      description: 'Cor verde da seta para cima do card menor',
    },
    {
      name: `$color-down`,
      description: 'Cor vermelha da seta para baixo do card menor',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(){
    console.log('clicou')
  }

}
