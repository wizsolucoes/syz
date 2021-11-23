import { Component, OnInit } from '@angular/core';
import { ComponentProps, NgSyzPerformanceSummaryList } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-performance-summary',
  templateUrl: './docs-performance-summary.component.html',
  styleUrls: ['./docs-performance-summary.component.scss']
})
export class DocsPerformanceSummaryComponent implements OnInit {
  // Example
  dataList: NgSyzPerformanceSummaryList[] = [
    {
      icon: 'home',
      title: 'Habitacional',
      subTitle: 'Sem seguro residencial',
      nameType: 'Leads',
      total: 80,
      totalComplet: 12
    },
    {
      icon: 'home',
      title: 'Habitacional',
      subTitle: 'Sem seguro residencial',
      nameType: 'Leads',
      total: 70,
      totalComplet: 65
    },
  ];

  Description = 'Componente exibir lista de desempenho, sendo possível estilizar cores e alterar ícones. Recebe uma lista de itens. \n \n Para cada lista, pode-se controlar os ícones e valores! \n\n';

  componentProps: ComponentProps[] = [
    {
      name: `@Input() title: string`,
      description: `Título principal.`,
    },
    {
      name: '@Input() msgErroList() string',
      description: `Mensagem para quando não houver lista ou erro na lista`,
    },
    {
      name: '@Input() List: [];',
      description: `
       Listagem dos elementos com as barras e cálculos de progresso.
       
       List: NgSyzPerformanceSummaryList[] = [
        {
          icon: 'home',
          title: 'Habitacional',
          subTitle: 'Sem seguro residencial',
          nameType: 'Leads',
          total: 80,
          totalComplet: 12
        },
        ...
      ];

      `,
    },
  ];


  componentCSSVariables: ComponentProps[] = [
    {
      name: `--color-title`,
      description: 'Cor dos textos dos itens.'
    },
    {
      name: `--color-grafic`,
      description: 'Cores das barras e icone inicial.'
    },
    {
      name: `--color-text`,
      description: 'Cor padrão dos textos.'
    },
    {
      name: `--bg-card`,
      description: 'Cor de fundo do card'
    }
  ];

  codeExemple01 = {
    htmlExampleCode: `
      <ng-syz-performance-summary
        title="Melhore seu desempenho"
        [List]="List"
      ></ng-syz-performance-summary>
    `,
    tsCode: `
    List: NgSyzPerformanceSummaryList[] = [
        {
          icon: 'home',
          title: 'Habitacional',
          subTitle: 'Sem seguro residencial',
          nameType: 'Leads',
          total: 80,
          totalComplet: 12
        },
        ...
      ]
    `,
    cssCode: `
      --color-title: #60a3c3;
      --title-color: #1aa0bf;
      --primary-color: #00aa9b;
      --bg-card-color: #94feff;
    `
  };

  codeExemple02 = {
    htmlExampleCode: `
    <div class="exemplo">
      <ng-syz-performance-summary
        title="Melhore seu desempenho"
        [List]="List"
      ></ng-syz-performance-summary>
    </div>
    `,
    tsCode: `
    List: NgSyzPerformanceSummaryList[] = [
        {
          icon: 'home',
          title: 'Habitacional',
          subTitle: 'Sem seguro residencial',
          nameType: 'Leads',
          total: 80,
          totalComplet: 12
        },
        ...
      ]
    `,
    cssCode: `
    .exemplo ng-syz-performance-summary {
      --color-title: #36aa9b;
      --color-grafic: #ffb9b9;
      --color-text: #7d88c1;
      --bg-card: #d2f2ff;
    }
    `
  };

  constructor() { }

  ngOnInit(): void {
  }

}
