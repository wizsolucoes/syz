import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
