import { Component, OnInit } from '@angular/core';
import {
  NgSyzResultadoSimulacaoCard,
  NgSyzResultadoSimulacaoCondicao,
} from 'projects/ng-syz/src/lib/models';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-resultado-simulacao',
  templateUrl: './docs-resultado-simulacao.component.html',
  styleUrls: ['./docs-resultado-simulacao.component.scss'],
})
export class DocsResultadoSimulacaoComponent implements OnInit {
  description = `Este componente simula o resultado de uma determinada simulação. Todos os valores são parametrizáveis,
                além de ser possível configurar uma informação específica para ser detalhada no card, bem como a cor de seleção
                quando o card for selecionado. Fora isso, tooltips de ajuda para as informações iniciais também podem ser configuradas.
                Sobre os eventos: quando clicar no card, será retornado o índice do card selecionado. Com relação ao evento de modalidade,
                será emitido o nome da modalidade.`;

  importCode =
    "import { NgSyzResultadoSimulacaoModule } from 'projects/ng-syz/src/public-api'";
  // exemplo 1
  htmlExampleCode1: string;
  tsExampleCode1: string;
  ajudaModalidadesExemplo1 = 'Ajuda Exemplo 1';
  cardsExemplo1: NgSyzResultadoSimulacaoCard[] = [
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
  ];
  valorExemplo1 = 2500000;
  modalidadesExemplo1 = ['Price', 'SAC', 'SACRE'];
  condicoesExemplo1: NgSyzResultadoSimulacaoCondicao[] = [
    {
      condicao: 'CESH',
      valor: '10,21%',
      ajuda: 'Ajuda CESH',
    },
    {
      condicao: 'CET',
      valor: '15,35%',
      ajuda: 'Ajuda CET',
    },
    {
      condicao: 'Valor bruto',
      valor: 'R$ 260.250,00',
      ajuda: 'Ajuda Valor Bruto',
    },
  ];
  corCardSelecionadoExemplo1 = '#0169b3';
  corLinhaSelecionadaExemplo1 = '#dfeaf2';
  corBotaoClicadoExemplo1 = '#dc7700';

  // exemplo2
  htmlExampleCode2: string;
  tsExampleCode2: string;
  ajudaModalidadesExemplo2 = 'Ajuda Exemplo 2';
  cardsExemplo2: NgSyzResultadoSimulacaoCard[] = [
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '60 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 7.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 4.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 21.120,69',
        },
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
  ];
  valorExemplo2 = 2500000;
  modalidadesExemplo2: string[] = ['Alter', 'Celta'];
  condicoesExemplo2: NgSyzResultadoSimulacaoCondicao[] = [
    {
      condicao: 'VAT',
      valor: '13,25%',
      ajuda: 'Ajuda VAT',
    },
    {
      condicao: 'Valor bruto',
      valor: 'R$ 240.440,00',
      ajuda: 'Ajuda Valor Bruto',
    },
  ];
  corCardSelecionadoExemplo2 = 'yellow';
  corLinhaSelecionadaExemplo2 = '#ccc';
  corBotaoClicadoExemplo2 = 'blue';

  componentProps: ComponentProps[] = [
    {
      name: `@Input() cards: NgSyzResultadoSimulacaoCard[]`,
      description: 'Informações relacionadas ao card.',
    },
    {
      name: '@Input() valor: number',
      description: 'Valor que será apresentado no header do componente.',
    },
    {
      name: '@Input() modalidades: string[]',
      description: 'Modalidades que serão apresentadas como botões.',
    },
    {
      name: '@Input() ajudaModalidades: string',
      description: 'Tooltip para o grupo de botões de modalidades.',
    },
    {
      name: '@Input() condicoes: NgSyzResultadoSimulacaoCondicao[]',
      description: 'Condições que serão apresentadas.',
    },
    {
      name: '@Input() corCardSelecionado: string',
      description: 'Cor que aparecerá quando o card for clicado.',
    },
    {
      name: '@Input() corLinhaSelecionada: string',
      description: 'Cor da linha que irá vir destacada por padrão.',
    },
    {
      name: '@Input() corBotaoClicado: string',
      description: 'Cor do botão de modalidade quando selecionado.',
    },
    {
      name: '@Output() enviarCardSelecionado: string',
      description:
        'Evento enviado quando algum card for clicado (enviará o respectivo index).',
    },
    {
      name: '@Output() enviarModalidadeSelecionada: string',
      description:
        'Evento enviado quando a modalidade for clicada (enviará o respectivo texto)',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initExampleVariables();
  }

  enviarCardSelecionado(cardIndex): void {
    alert(cardIndex);
  }

  enviarModalidadeSelecionada(modalidade): void {
    alert(modalidade);
  }

  initExampleVariables(): void {
    this.htmlExampleCode1 = `
    <ng-syz-resultado-simulacao
      [cards]="cardsExemplo1"
      [valor]="valorExemplo1"
      [modalidades]="modalidadesExemplo1"
      [ajudaModalidades]="ajudaModalidadesExemplo1"
      [condicoes]="condicoesExemplo1"
      [linhaSelecionada]="linhaSelecionadaExemplo1"
      [corCardSelecionado]="corCardSelecionadoExemplo1"
      [corLinhaSelecionada]="corLinhaSelecionadaExemplo1"
      [corBotaoClicado]="corBotaoClicadoExemplo1"
      (enviarCardSelecionado)="enviarCardSelecionado($event)"
      (enviarModalidadeSelecionada)="enviarModalidadeSelecionada($event)"
    ></ng-syz-resultado-simulacao>
    `;

    this.tsExampleCode1 = `
      htmlExampleCode1: string;
      tsExampleCode1: string;
      ajudaModalidadesExemplo1: string = 'Ajuda Exemplo 1';
      cardsExemplo1: NgSyzResultadoSimulacaoCard[] = [
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
      ];
      valorExemplo1: number = 2500000;
      modalidadesExemplo1: string[] = ['Price', 'SAC', 'SACRE'];
      condicoesExemplo1: NgSyzResultadoSimulacaoCondicao[] = [
        {
          condicao: 'CESH',
          valor: '10,21%',
          ajuda: 'Ajuda CESH',
        },
        {
          condicao: 'CET',
          valor: '15,35%',
          ajuda: 'Ajuda CET',
        },
        {
          condicao: 'Valor bruto',
          valor: 'R$ 260.250,00',
          ajuda: 'Ajuda Valor bruto',
        },
      ];
      corCardSelecionadoExemplo1: string = '#0169b3';
      corLinhaSelecionadaExemplo1: string = '#dfeaf2';
      corBotaoClicadoExemplo1: string = '#dc7700';

      export interface Card {
        camposCard: CamposCard[];
        selecionado: string;
      }

      export interface CamposCard {
        campo: string;
        valor: string;
      }

      export interface Condicao {
        condicao: string;
        valor: string;
        ajuda: string;
      }

      export type linhaSelecionada =
        | 'parcelaInicial'
        | 'parcelaFinal'
        | 'rendaMinima';
    `;

    this.htmlExampleCode2 = `
    <ng-syz-resultado-simulacao
      [cards]="cardsExemplo2"
      [valor]="valorExemplo2"
      [modalidades]="modalidadesExemplo2"
      [ajudaModalidades]="ajudaModalidadesExemplo2"
      [condicoes]="condicoesExemplo2"
      [corCardSelecionado]="corCardSelecionadoExemplo2"
      [corLinhaSelecionada]="corLinhaSelecionadaExemplo2"
      [corBotaoClicado]="corBotaoClicadoExemplo2"
      (enviarCardSelecionado)="enviarCardSelecionado($event)"
      (enviarModalidadeSelecionada)="enviarModalidadeSelecionada($event)"
    ></ng-syz-resultado-simulacao>
    `;

    this.tsExampleCode2 = `
      htmlExampleCode2: string;
      tsExampleCode2: string;
      ajudaModalidadesExemplo2: string = 'Ajuda Exemplo 2';
      cardsExemplo2: NgSyzResultadoSimulacaoCard[] = [
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '60 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 7.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 4.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 21.120,69',
            },
            {
              campo: 'Kill me please',
              valor: 'right now',
            },
          ],
          selecionado: 'Renda mínima',
        },
      ];
      valorExemplo2: number = 2500000;
      modalidadesExemplo2: string[] = ['Alter', 'Celta'];
      condicoesExemplo2: NgSyzResultadoSimulacaoCondicao[] = [
        {
          condicao: 'VAT',
          valor: '13,25%',
          ajuda: 'Ajuda VAT',
        },
        {
          condicao: 'Valor bruto',
          valor: 'R$ 240.440,00',
          ajuda: 'Ajuda Valor Bruto',
        },
      ];
      linhaSelecionadaExemplo2: linhaSelecionada = 'parcelaInicial';
      corCardSelecionadoExemplo2: string = 'yellow';
      corLinhaSelecionadaExemplo2: string = '#ccc';
      corBotaoClicadoExemplo2: string = 'blue';

      export interface Card {
        camposCard: CamposCard[];
        selecionado: string;
      }

      export interface CamposCard {
        campo: string;
        valor: string;
      }

      export interface Condicao {
        condicao: string;
        valor: string;
        ajuda: string;
      }

      export type linhaSelecionada =
        | 'parcelaInicial'
        | 'parcelaFinal'
        | 'rendaMinima';
    `;
  }
}
