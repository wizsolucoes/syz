import { Component } from '@angular/core';
import { NgSyzInitiativeResultCardImage } from '@wizsolucoes/ng-syz';
import { ComponentProps } from '../../../shared/models/component-props.interface';
@Component({
  selector: 'app-docs-initiative-result-card',
  templateUrl: './docs-initiative-result-card.component.html',
  styleUrls: ['./docs-initiative-result-card.component.scss'],
})
export class DocsCardResultInitiativeComponent {
  // Example
  image: NgSyzInitiativeResultCardImage = {
    url: '/assets/docs-initiative-result-card/image.png',
    alt: 'Ícone',
  };

  image2: NgSyzInitiativeResultCardImage = {
    url: '/assets/docs-initiative-result-card/IconCelphone.png',
    alt: 'Ícone',
  };

  // data Cards
  cards = [
    {
      icon: 'wallpaper',
      text: 'incentivo financeiro',
      value: 'R$ 910',
      color: 'orange',
      variable: {
        direction: 'up',
        value: '+R$ 40,00',
      },
    },
    {
      icon: 'attach_money',
      text: 'Seguro auto',
      value: '16',
      color: '#14ACE8',
      variable: {
        value: '+R$ 40,00',
      },
    },
    {
      icon: 'attach_money',
      text: 'Seguro auto',
      value: '16',
      color: 'red',
      variable: {
        direction: 'down',
        value: '+R$ 40,00',
      },
    },
  ];

  exampleHtml = `
    <ng-syz-initiative-result-card
      [image]="image"
      title="Chegou a hora de receber o seu incentivo!"
      description="Para realizarmos o pagamento do seu incentivo financeiro, precisamos
      que você aceite o RPA. Clique no botão e siga as orientações."
      type="cards"
      [maxWidth]="900"
      [cards]="cards"
    ></ng-syz-initiative-result-card>
  `;

  exampleHtml2 = `
    <ng-syz-initiative-result-card
      name="Progresso de indicações"
      [image]="image"
      title="Parabéns pelo seu resultado na campanha!"
      description="A campanha se encerrou e essas foram as suas conquistas. Dá só uma olhada:"
      type="button"
      [maxWidth]="900"
      (action)="myFunction()"
      labelButton="Assinar RPA"
    ></ng-syz-initiative-result-card>
  `;

  exampleHtml3 = `
      <ng-syz-initiative-result-card
        [image]="image"
        title="Parabéns pelo seu resultado na campanha!"
        description="A campanha se encerrou e essas foram as suas conquistas. Dá só uma olhada:"
        [maxWidth]="900"
        backgroundCard="#ff9100"
        titleColor="#FFFFFF"
        descriptionColor="#FFFFFF"
    ></ng-syz-initiative-result-card>
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

  // Documentação parte API
  importCode = `import { NgSyzInitiativeResultCardModule } from '@wizsolucoes/ng-syz';`;

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
      name: `@Input() image: NgSyzInitiativeResultCardImage`,
      description:
        'Imagem geral do card, do tipo object, onde o objeto é contido pela url da imagem e o texto alt, veja exemplo.',
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
      name: `@Input() backgroundCard: string`,
      description: 'Cor de fundo do card, veja exemplo 3.',
    },
    {
      name: `@Input() titleColor: string`,
      description: 'Cor desejada do título do card, veja exemplo 3.',
    },
    {
      name: `@Input() descriptionColor: string`,
      description: 'Cor desejada do subtítulo do card, veja exemplo 3.',
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
      name: `@Input() backgroundCard: string`,
      description: 'Cor de fundo do box caso deseje mudar, veja exemplo 3.',
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

  myFunction(): void {
    console.log('clicou');
  }
}
