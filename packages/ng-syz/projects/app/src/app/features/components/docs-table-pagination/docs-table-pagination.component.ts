import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-table-pagination',
  templateUrl: './docs-table-pagination.component.html',
  styleUrls: ['./docs-table-pagination.component.scss']
})
export class DocsTablePaginationComponent implements OnInit {

  serverSide = false;
  showPaginator = true;

  paginatorInfo = {
    pageSize: 10,
    pageSizeOptions: [10, 20, 30, 40],
    currentPage: 2,
    totalItens: 200
  };

  tableInfo = {
    header: [
      'Cadastro',
      'Contato da Empresa',
      'Nome da Empresa',
      'Origem',
      'Celular',
      'Email',
      'Tempo',
      'Status',
    ],
    rowOrder: [
      'register',
      'contact',
      'name',
      'origin',
      'celphone',
      'email',
      'time',
      'status',
    ],
    content: [
      {
        register: '12/10/2020',
        contact: 'Rod Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
      {
        register: '12/10/2020',
        contact: 'Flávio Costa',
        name: 'Magazine Luiza S.A.',
        celphone: '(61)98000-0000',
        email: 'fulano@empresa.com.br',
        time: '5 dias',
        status: 'Novo',
      },
    ],
  };


  codeExemple01 = {
    htmlExampleCode: `
    <ng-syz-table-pagination
      [serverSide]="serverSide"
      [showPaginator]="showPaginator"
      [paginatorInfo]="paginatorInfo"
      [tableInfo]="tableInfo"
      (changePerPage)="changePerPage($event)"
      (navigationPage)="navigationPage($event)"
      (clickLine)="clickLine($event)"
    >
    </ng-syz-table-pagination>
    `,
    tsCode: `
    serverSide = false;
    showPaginator = true;
  
    paginatorInfo = {
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40]
    };
  
    tableInfo = {
      header: [
        'Cadastro',
        'Contato da Empresa',
        'Nome da Empresa',
        'Origem',
        'Celular',
        'Email',
        'Tempo',
        'Status',
      ],
      rowOrder: [
        'register',
        'contact',
        'name',
        'origin',
        'celphone',
        'email',
        'time',
        'status',
      ],
      content: [
        {
          register: '12/10/2020',
          contact: 'Rod Costa',
          name: 'Magazine Luiza S.A.',
          celphone: '(61)98000-0000',
          email: 'fulano@empresa.com.br',
          time: '5 dias',
          status: 'Novo',
        },
        ...
      ],
    };
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
    <ng-syz-table-pagination
      [serverSide]="serverSide"
      [showPaginator]="showPaginator"
      [paginatorInfo]="paginatorInfo"
      [tableInfo]="tableInfo"
      (changePerPage)="changePerPage($event)"
      (navigationPage)="navigationPage($event)"
      (clickLine)="clickLine($event)"
    >
    </ng-syz-table-pagination>
    `,
    tsCode: `
    serverSide = true;
    showPaginator = true;
  
    paginatorInfo = {
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40], 
      currentPage: 5,
      totalPage: 200
    };
  
    tableInfo = {
      header: [
        'Cadastro',
        'Contato da Empresa',
        'Nome da Empresa',
        'Origem',
        'Celular',
        'Email',
        'Tempo',
        'Status',
      ],
      rowOrder: [
        'register',
        'contact',
        'name',
        'origin',
        'celphone',
        'email',
        'time',
        'status',
      ],
      content: [
        {
          register: '12/10/2020',
          contact: 'Rod Costa',
          name: 'Magazine Luiza S.A.',
          celphone: '(61)98000-0000',
          email: 'fulano@empresa.com.br',
          time: '5 dias',
          status: 'Novo',
        },
        ...
      ],
    };
    `,
    cssCode: `
    --bg-header: #36aa9b;
    --color-head: #132d2a;
    --color-text: #a838a5;
    --tr-divisor: green;
    --controll-buttons: #a838a5;
    `
  };

  Description = 'Componente irá montar uma tabela podendo ser paginada utilizando paginação com ou sem serviço! \n\n';

  componentProps: ComponentProps[] = [
    {
      name: `@Input() serverSide: bollean`,
      description: `Determina se a tabela deve ser paginada ou emitir eventos.`,
    },
    {
      name: '@Input() showPaginator() = boolean',
      description: `Controla exibição da paginação`,
    },
    {
      name: '@Input() paginatorInfo: boolean;',
      description: `
       detalhes da paginação
      `,
    },
    {
      name: '@Input() tableInfo: [];',
      description: `
       Informações da tabela
      `,
    },
    {
      name: '@Output() changePerPage: [];',
      description: `
       Evento que emite quando muda a quantidade por páginca.
      `,
    },
    {
      name: '@Output() navigationPage: [];',
      description: `
       Evento que emite quando botão de navegação (next/prev) for acionado.
      `,
    },
    {
      name: '@Output() clickLine: [];',
      description: `
       Evento que emite quando clicado em uma linha da tabela.
      `,
    },
  ];


  componentCSSVariables: ComponentProps[] = [
    {
      name: `--bg-header`,
      description: 'Cor de fundo do header da tabela.'
    },
    {
      name: `--color-head`,
      description: 'Cores dos títulos da tabela.'
    },
    {
      name: `--color-text`,
      description: 'Cor dos textos no body da tabela.'
    },
    {
      name: `--tr-divisor`,
      description: 'Cor do divisor de linhas'
    },
    {
      name: `--controll-buttons`,
      description: 'Cor do botão de navegação'
    }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  changePerPage(value): void {
    this.snackBar.open(value, 'Fechar');
  }

  navigationPage(value): void {
    this.snackBar.open(value, 'Fechar');
  }
  clickLine(value): void {
    this.snackBar.open(JSON.stringify(value), 'Fechar');
  }

}
