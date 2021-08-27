import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzTablepaginationComponent } from './table-pagination.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

export function CustomPaginator(): object {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Itens por página:';
  customPaginatorIntl.nextPageLabel = 'Próxima página';
  customPaginatorIntl.previousPageLabel = 'Página anterior';

  return customPaginatorIntl;
}

@NgModule({
  declarations: [NgSyzTablepaginationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],

  exports: [NgSyzTablepaginationComponent],
})

export class NgSyzTablePaginationModule {}


