import { Component, OnInit } from '@angular/core';
import {
  NgSyzSimulationResultCard,
  NgSyzSimulationResultCondicao,
} from 'projects/ng-syz/src/lib/models';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-simulation-result',
  templateUrl: './docs-simulation-result.component.html',
  styleUrls: ['./docs-simulation-result.component.scss'],
})
export class DocsSimulationResultComponent implements OnInit {
  description = `Este componente simula o resultado de uma determinada simulação. Todos os valores são parametrizáveis,
                além de ser possível configurar uma informação específica para ser detalhada no card, bem como a cor de seleção
                quando o card for selecionado. Fora isso, tooltips de ajuda para as informações iniciais também podem ser configuradas.
                Sobre os eventos: quando clicar no card, será retornado o índice do card selecionado. Com relação ao evento de modalidade,
                será emitido o nome da modalidade.`;

  importCode = `import { NgSyzSimulationResultModule } from '@wizsolucoes/ng-syz';`;

  // exemplo 1
  htmlExampleCode1: string;
  tsExampleCode1: string;
  ajudaModalidadesExemplo1 = 'Ajuda Exemplo 1';
  cardsExemplo1: NgSyzSimulationResultCard[] = [
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '15 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 8.040,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 3.452,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 22.120,69',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '33 meses',
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
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '47 meses',
        },
        {
          campo: 'Parcela inicial',
          valor: 'R$ 5.050,23',
        },
        {
          campo: 'Parcela final',
          valor: 'R$ 2.352,83',
        },
        {
          campo: 'Renda mínima',
          valor: 'R$ 19.478,55',
        },
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Prazo',
          valor: '12 meses',
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
      ],
      selecionado: 'Renda mínima',
    },
  ];
  valorExemplo1 = 2500000;
  modalidadesExemplo1 = ['Price', 'SAC', 'SACRE'];
  condicoesExemplo1: NgSyzSimulationResultCondicao[] = [
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

  // exemplo2
  htmlExampleCode2: string;
  tsExampleCode2: string;
  cssExample2Code: string;
  ajudaModalidadesExemplo2 = 'Ajuda Exemplo 2';
  cardsExemplo2: NgSyzSimulationResultCard[] = [
    {
      camposCard: [
        {
          campo: 'Seguradora',
          valor: 'Swiss',
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
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Seguradora',
          valor: 'Swiss',
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
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Seguradora',
          valor: 'Swiss',
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
      ],
      selecionado: 'Renda mínima',
    },
    {
      camposCard: [
        {
          campo: 'Seguradora',
          valor: 'Swiss',
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
      ],
      selecionado: 'Renda mínima',
    },
  ];
  valorExemplo2 = 2500000;
  modalidadesExemplo2: string[] = ['Alter', 'Celta'];
  condicoesExemplo2: NgSyzSimulationResultCondicao[] = [
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

  // exemplo 1
  htmlExampleCode3: string;
  tsExampleCode3: string;
  cssExample3Code: string;
  ajudaModalidadesExemplo3 = 'Ajuda Exemplo 3';
  cardsExemplo3: NgSyzSimulationResultCard[] = [
    {
      camposCard: [
        {
          campo: 'Campo a 1',
          valor: 'valor a 1',
        },
        {
          campo: 'Campo b 1',
          valor: 'valor b 1',
        },
        {
          campo: 'campo c 1',
          valor: 'valor c 1',
        },
        {
          campo: 'campo d 1',
          valor: 'valor d 1',
        },
      ],
      selecionado: 'Campo a 1',
    },
    {
      camposCard: [
        {
          campo: 'Campo a 2',
          valor: 'valor a 2',
        },
        {
          campo: 'Campo b 2',
          valor: 'valor b 2',
        },
        {
          campo: 'campo c 2',
          valor: 'valor c 2',
        },
        {
          campo: 'campo d 2',
          valor: 'valor d 2',
        },
      ],
      selecionado: '',
    },
    {
      camposCard: [
        {
          campo: 'Campo a 3',
          valor: 'valor a 3',
        },
        {
          campo: 'Campo b 3',
          valor: 'valor b 3',
        },
        {
          campo: 'campo c 3',
          valor: 'valor c 3',
        },
        {
          campo: 'campo d 3',
          valor: 'valor d 3',
        },
        {
          campo: 'campo r 3',
          valor: 'valor r 3',
        },
      ],
      selecionado: 'campo c 3',
    },
    {
      camposCard: [
        {
          campo: 'Campo a 4',
          valor: 'valor a 4',
        },
        {
          campo: 'Campo b 4',
          valor: 'valor b 4',
        },
        {
          campo: 'campo c 4',
          valor: 'valor c 4',
        },
        {
          campo: 'campo d 4',
          valor: 'valor d 4',
        },
      ],
      selecionado: 'campo d 4',
    },
  ];
  valorExemplo3 = 15500000;
  modalidadesExemplo3 = ['Price'];
  condicoesExemplo3: NgSyzSimulationResultCondicao[] = [
    {
      condicao: 'XXX',
      valor: '77,21%',
      ajuda: 'Ajuda XXX',
    },
    {
      condicao: 'YYY',
      valor: '0,35%',
      ajuda: 'Ajuda YYY',
    },
    {
      condicao: 'ZZZ',
      valor: 'R$ 2.060.250,00',
      ajuda: 'Ajuda ZZZ',
    },
  ];

  // exemplo 4
  htmlExampleCode4: string;
  tsExampleCode4: string;
  ajudaModalidadesExemplo4 = 'Ajuda Exemplo 1';
  cardsExemplo4: NgSyzSimulationResultCard[] = [
    {
      camposCard: [
        {
          campo: '1° parcela',
          valor: null,
        },
        {
          campo: 'Aniversário',
          valor: '01/04/2022',
        },
        {
          campo: 'Disponivel',
          valor: 'R$ 3.452,83',
        },
        {
          campo: 'valor a antecipar',
          valor: '22.120,69',
        },
      ],
      selecionado: 'valor a antecipar',
      editavel: true
    }
  ];
  valorExemplo4 = 2500000;
  modalidadesExemplo4 = ['Price', 'SAC', 'SACRE'];
  condicoesExemplo4: NgSyzSimulationResultCondicao[] = [
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

  componentProps: ComponentProps[] = [
    {
      name: `@Input() cards: NgSyzSimulationResultCard[]`,
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
      name: '@Input() condicoes: NgSyzSimulationResultCondicao[]',
      description: 'Condições que serão apresentadas.',
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

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--selected-card`,
      description: 'Cor de fundo do card selecionado',
    },
    {
      name: `--selected-line`,
      description: 'Cor de fundo da linha de destaque do card',
    },
    {
      name: `--selected-button`,
      description: 'Cor do botão de modalidade que foi clicado',
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
    <ng-syz-simulation-result
      [cards]="cardsExemplo1"
      [valor]="valorExemplo1"
      [modalidades]="modalidadesExemplo1"
      [ajudaModalidades]="ajudaModalidadesExemplo1"
      [condicoes]="condicoesExemplo1"
      [linhaSelecionada]="linhaSelecionadaExemplo1"
      (enviarCardSelecionado)="enviarCardSelecionado($event)"
      (enviarModalidadeSelecionada)="enviarModalidadeSelecionada($event)"
    ></ng-syz-simulation-result>
    `;

    this.tsExampleCode1 = `
      cardsExemplo1 = [
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '15 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 8.040,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 3.452,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 22.120,69',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '33 meses',
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
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '47 meses',
            },
            {
              campo: 'Parcela inicial',
              valor: 'R$ 5.050,23',
            },
            {
              campo: 'Parcela final',
              valor: 'R$ 2.352,83',
            },
            {
              campo: 'Renda mínima',
              valor: 'R$ 19.478,55',
            },
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Prazo',
              valor: '12 meses',
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
          ],
          selecionado: 'Renda mínima',
        },
      ];
      valorExemplo1 = 2500000;
      modalidadesExemplo1 = ['Price', 'SAC', 'SACRE'];
      condicoesExemplo1 = [
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

      enviarCardSelecionado(cardIndex): void {
        alert(cardIndex);
      }

      enviarModalidadeSelecionada(modalidade): void {
        alert(modalidade);
      }
    `;

    this.htmlExampleCode2 = `
    <ng-syz-simulation-result
      [cards]="cardsExemplo2"
      [valor]="valorExemplo2"
      [modalidades]="modalidadesExemplo2"
      [ajudaModalidades]="ajudaModalidadesExemplo2"
      [condicoes]="condicoesExemplo2"
      (enviarCardSelecionado)="enviarCardSelecionado($event)"
      (enviarModalidadeSelecionada)="enviarModalidadeSelecionada($event)"
    ></ng-syz-simulation-result>
    `;

    this.tsExampleCode2 = `
      cardsExemplo2 = [
        {
          camposCard: [
            {
              campo: 'Seguradora',
              valor: 'Swiss',
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
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Seguradora',
              valor: 'Swiss',
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
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Seguradora',
              valor: 'Swiss',
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
          ],
          selecionado: 'Renda mínima',
        },
        {
          camposCard: [
            {
              campo: 'Seguradora',
              valor: 'Swiss',
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
          ],
          selecionado: 'Renda mínima',
        },
      ];
      valorExemplo2 = 2500000;
      modalidadesExemplo2 = ['Alter', 'Celta'];
      condicoesExemplo2 = [
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
      linhaSelecionadaExemplo2 = 'parcelaInicial';

      enviarCardSelecionado(cardIndex): void {
        alert(cardIndex);
      }

      enviarModalidadeSelecionada(modalidade): void {
        alert(modalidade);
      }
    `;

    this.cssExample2Code = `
    ng-syz-simulation-result {
      --selected-card: #8D4091;
      --selected-line: #DEC36D;
      --selected-button: #83DECB;
    }
    `;

    this.htmlExampleCode3 = `
    <ng-syz-simulation-result
      [cards]="cardsExemplo3"
      [valor]="valorExemplo3"
      [modalidades]="modalidadesExemplo3"
      [ajudaModalidades]="ajudaModalidadesExemplo3"
      [condicoes]="condicoesExemplo3"
      [linhaSelecionada]="linhaSelecionadaExemplo3"
      (enviarCardSelecionado)="enviarCardSelecionado($event)"
      (enviarModalidadeSelecionada)="enviarModalidadeSelecionada($event)"
    ></ng-syz-simulation-result>
    `;

    this.tsExampleCode3 = `
    ajudaModalidadesExemplo3 = 'Ajuda Exemplo 3';
    cardsExemplo3 = [
      {
        camposCard: [
          {
            campo: 'Campo a 1',
            valor: 'valor a 1',
          },
          {
            campo: 'Campo b 1',
            valor: 'valor b 1',
          },
          {
            campo: 'campo c 1',
            valor: 'valor c 1',
          },
          {
            campo: 'campo d 1',
            valor: 'valor d 1',
          },
        ],
        selecionado: 'Campo a 1',
      },
      {
        camposCard: [
          {
            campo: 'Campo a 2',
            valor: 'valor a 2',
          },
          {
            campo: 'Campo b 2',
            valor: 'valor b 2',
          },
          {
            campo: 'campo c 2',
            valor: 'valor c 2',
          },
          {
            campo: 'campo d 2',
            valor: 'valor d 2',
          },
        ],
        selecionado: '',
      },
      {
        camposCard: [
          {
            campo: 'Campo a 3',
            valor: 'valor a 3',
          },
          {
            campo: 'Campo b 3',
            valor: 'valor b 3',
          },
          {
            campo: 'campo c 3',
            valor: 'valor c 3',
          },
          {
            campo: 'campo d 3',
            valor: 'valor d 3',
          },
          {
            campo: 'campo r 3',
            valor: 'valor r 3',
          },
        ],
        selecionado: 'campo c 3',
      },
      {
        camposCard: [
          {
            campo: 'Campo a 4',
            valor: 'valor a 4',
          },
          {
            campo: 'Campo b 4',
            valor: 'valor b 4',
          },
          {
            campo: 'campo c 4',
            valor: 'valor c 4',
          },
          {
            campo: 'campo d 4',
            valor: 'valor d 4',
          },
        ],
        selecionado: 'campo d 4',
      },
    ];
    valorExemplo3 = 15500000;
    modalidadesExemplo3 = ['Price'];
    condicoesExemplo3 = [
      {
        condicao: 'XXX',
        valor: '77,21%',
        ajuda: 'Ajuda XXX',
      },
      {
        condicao: 'YYY',
        valor: '0,35%',
        ajuda: 'Ajuda YYY',
      },
      {
        condicao: 'ZZZ',
        valor: 'R$ 2.060.250,00',
        ajuda: 'Ajuda ZZZ',
      },
    ];

    enviarCardSelecionado(cardIndex): void {
      alert(cardIndex);
    }

    enviarModalidadeSelecionada(modalidade): void {
      alert(modalidade);
    }
    `;

    this.cssExample3Code = `
    ng-syz-simulation-result {
      --selected-card: #003F63;
      --selected-line: #D9D9D9;
      --selected-button: #353D40;
    }
    `;
  }
}
