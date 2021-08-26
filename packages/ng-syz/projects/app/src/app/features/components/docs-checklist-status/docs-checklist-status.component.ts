import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-checklist-status',
  templateUrl: './docs-checklist-status.component.html',
  styleUrls: ['./docs-checklist-status.component.scss']
})
export class DocsChecklistStatusComponent implements OnInit {

  config = {
    title: 'Metas do dia',
    textButton: 'Saiba mais',
    router: 'https://www.ibccoaching.com.br/portal/metas-e-objetivos/importancia-estabelecer-metas-diarias-para-ser-mais-produtivo/',
    target: '_blank'
  };

  dataComponent = [
    {
      text: 'Tratar 30 leads de habitacional sem seguro residencial.',
      active: true,
    },
    {
      text: 'Tratar 30 leads de habitacional sem seguro residencial.',
      active: false,
    },
    {
      text: 'Tratar 30 leads de habitacional sem seguro residencial.',
      active: false,
    },
  ];

  Description: string = 'Componente exibir lista de status, sendo possível estilizar cores e controlar os itens ativos. Recebe uma lista de itens. \n \n';

  componentProps: ComponentProps[] = [
    {
      name: `@Input() list: []`,
      description: `Lista de cards.
      list = [
        {
          text: 'Tratar 30 leads de habitacional sem seguro residencial.',
          active: true,
        },
        ...
      ]
      `,
    },
    {
      name: '@Input() config() Object',
      description: `Configurações de exibição e ação do componente
      config = {
        title: 'Metas do sita',
        textButton: 'Saiba mais',
        router: 'Saiba mais',
        target: '_self',
      };
      `,
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--maxWidth`,
      description: `tamanho máximo do componente.
      valor default: 400px`,
    },
    {
      name: `--color-title`,
      description: 'Cores do Título principal do card',
    },
    {
      name: `--bg-card`,
      description: 'Cor do fundo dos itens (inativos).',
    },
    {
      name: `--color-text`,
      description:'Cor dos textos (inativos).',
    },
    {
      name: `--bg-card-active`,
      description: 'Cor do fundo dos itens (ativos).',
    },
    {
      name: `--color-text-active`,
      description:'Cor dos textos (ativos).',
    },
  ];

  codeExemple01 = {
    htmlExampleCode: `
    <ng-syz-checklist-status
      [config]="config"
      [list]="list"
    ></ng-syz-checklist-status>
    `,
    tsCode:`
    config: NgSyzCheckListStatusConfig = {
      title: 'Metas do sita',
      textButton: 'Saiba mais',
      router: 'Saiba mais',
      target: '_self',
    };

    list: NgSyzCheckListStatusList[] = [
      {
        text: 'Tratar 30 leads de habitacional sem seguro residencial.',
        active: true,
      },
      ...
    ]
    `,
    cssCode: `
    --maxWidth: 100%;
    --color-title: blue;
    --bg-card: red;
    --color-text: pink;
    --bg-card-active: orange;
    --color-text-active: black;
    `
  };

  constructor() { }

  ngOnInit(): void {
  }

}
