import { Component, Input, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ng-syz-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class NgSyzTablepaginationComponent implements AfterViewInit {
  @Input() hoverEffect = false;
  @Input() serverSide = false;
  @Input() showPaginator = true;
  @Input() paginatorInfo = {
    pageSize: 5,
    pageSizeOptions: [5, 10, 15, 20],
    currentPage: 1,
    totalItens: 200
  };

  @Input() tableInfo = {
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

  @Output() changePerPage: EventEmitter<any> = new EventEmitter();
  @Output() navigationPage: EventEmitter<any> = new EventEmitter();
  @Output() clickLine: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;
  constructor() {}
  
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.tableInfo.content);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  changePage(value): void{
    this.changePerPage.emit(value);
  }
  
  clickLineEvent(value): void{
    this.clickLine.emit(value);
  }
  
  navigationPageClick(value): void{
    this.navigationPage.emit(value);
  }

  controlInfoHeader(infoHeader): string {
    if (typeof infoHeader === 'object'){
      return infoHeader.title;
    }else{
      return infoHeader;
    }
  }

  constrolInfoTr(row, IRow): string {
    return row[this.tableInfo.rowOrder[IRow]];
  }

}
