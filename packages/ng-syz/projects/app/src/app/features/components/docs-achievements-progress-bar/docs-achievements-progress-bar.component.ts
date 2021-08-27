import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';
@Component({
  selector: 'app-docs-achievements-progress-bar',
  templateUrl: './docs-achievements-progress-bar.component.html',
  styleUrls: ['./docs-achievements-progress-bar.component.scss']
})
export class DocsAchievementsProgressBarComponent implements OnInit {

  constructor() { }

  public mockData1 = { 
    title: 'Seu desempenho',
    labelToggleLeft: 'Diário',
    labelToggleRight: 'Mensal',

    actualProgress: 3000,
    actualProgressInPercentage: 10,
    actualProgressDescription: 'Progresso atual:',

    goalProgress: 3500,
    goalProgressInPercentage: 80,
    goalProgressDescription: 'Objetivo do dia:',
    itensDescriptionBelow: [
      {title: '87%', subtitle: 'Novos negócios'},
      {title: '100%', subtitle: 'Conquiste'},
      {title: 'Não elegível', subtitle: 'Meritocracia'},
      {title: 'Exemplo', subtitle: 'Exemplo'},
    ]
  };

  public mockData2 = { 
    title: 'Seu desempenho',
    labelToggleLeft: 'Toggle left',
    labelToggleRight: 'Toggle right',

    actualProgress: 4000,
    actualProgressInPercentage: 50,
    actualProgressDescription: 'Label progresso atual:',

    goalProgress: 5500,
    goalProgressInPercentage: 60,
    goalProgressDescription: 'Label progresso meta:',
    itensDescriptionBelow: [
      {title: 'item1', subtitle: 'xxx'},
      {title: 'item2', subtitle: 'xxx'}
    ]
  };

  componentProps: ComponentProps[] = [
    {
      name: `@Input() data: NgSyzAchievementsProgressBar`,
      description: 'Dados que serão utilizados para preenher o componenete.',
    },
    {
      name: '@Output() verifyToggleLeftIsSelectedEvent: boolean',
      description: 'Controle para facilitar de forma genérica se o elemento da esquerda no toggle está ativado.',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-achievements-progress-bar-primary-color-text`,
      description: 'Cor principal para as fontes',
    },
    {
      name: `--syz-achievements-progress-bar-toggle-color-background`,
      description: 'Cor utilizada no toggle',
    },
    {
      name: `--syz-achievements-progress-bar-primary-color`,
      description: 'Cor utilizada de background da barra de progresso atual e toggle ativo',
    },
    {
      name: `--syz-achievements-progress-bar-card-box-shadow`,
      description: 'Efeito de shadow utilizado para criar o efeito de card',
    },
    {
      name: `--syz-achievements-progress-bar-background-progress`,
      description: 'Cor utilizada de background na barra de progresso completa',
    },
    {
      name: `--syz-achievements-progress-bar-color-progress-goal`,
      description: 'Cor utilizada de background na barra de progresso do objetivo',
    },
    {
      name: `--syz-timeline-size-line`,
      description: 'Tamanho da linha da timeline',
    },
    {
      name: `--syz-timeline-primary-color-text`,
      description: 'Cor primária do texto do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-simbol`,
      description: 'Cor símbolo do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-line`,
      description: 'Cor da linha da timeline',
    },
    {
      name: `--syz-timeline-padding-item`,
      description: 'Dimensões do padding',
    }
  ];

  htmlExampleCode1 =
  `
    <ng-syz-achievements-progress-bar
      (verifyToggleLeftIsSelectedEvent)="toggleButtonLeftIsSelectedEvent($event)"
      [data]="mockData1">
    </ng-syz-achievements-progress-bar>
  `;

  htmlExampleCode2 =
  `
    <ng-syz-achievements-progress-bar
      (verifyToggleLeftIsSelectedEvent)="toggleButtonLeftIsSelectedEvent($event)"
      [data]="mockData2">
    </ng-syz-achievements-progress-bar>
  `;

  htmlExampleCode3 =
  `
    <div class="change-color">
      <ng-syz-achievements-progress-bar
          (verifyToggleLeftIsSelectedEvent)="toggleButtonLeftIsSelectedEvent($event)"
          [data]="mockData2">
      </ng-syz-achievements-progress-bar>
    </div>
  `;

  tsExampleCode1 = `
  // Objeto de exemplo utilizado para enviar para o componente
    public mockData = { 
      title: 'Seu desempenho',
      labelToggleLeft: 'Diário',
      labelToggleRight: 'Mensal',

      actualProgress: 3000,
      actualProgressInPercentage: 10,
      actualProgressDescription: 'Progresso atual:',

      goalProgress: 3500,
      goalProgressInPercentage: 80,
      goalProgressDescription: 'Objetivo do dia:',
      itensDescriptionBelow: [
        {title: '87%', subtitle: 'Novos negócios'},
        {title: '100%', subtitle: 'Conquiste'},
        {title: 'Não elegível', subtitle: 'Meritocracia'},
        {title: 'Exemplo', subtitle: 'Exemplo'},
      ]
    };
  `;

  tsExampleCode2 = `
  // Objeto de exemplo utilizado para enviar para o componente
    public mockData2 = { 
      title: 'Seu desempenho',
      labelToggleLeft: 'Toggle left',
      labelToggleRight: 'Toggle right',

      actualProgress: 4000,
      actualProgressInPercentage: 50,
      actualProgressDescription: 'Label progresso atual:',

      goalProgress: 5500,
      goalProgressInPercentage: 60,
      goalProgressDescription: 'Label progresso meta:',
      itensDescriptionBelow: [
        {title: 'item1', subtitle: 'xxx'},
        {title: 'item2', subtitle: 'xxx'}
      ]
    };
  `;

  example3Css = `
  .change-color {
    --syz-achievements-progress-bar-primary-color: pink;
  }
  `;

  cssExampleCode = `cssExampleCode`;

  ngOnInit(): void {
  }

  public toggleButtonLeftIsSelectedEvent(itemReceived): void {
    console.log('toggleButtonLeftIsSelectedEvent: ', itemReceived);
  }

}
