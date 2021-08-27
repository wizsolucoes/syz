import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsFiltroRoutingModule } from './docs-filtro-routing.module';
import { DocsFiltroComponent } from './docs-filtro.component';
import { NgSyzFiltroModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsFiltroComponent
  ],
  imports: [
    CommonModule,
    DocsFiltroRoutingModule,
    NgSyzFiltroModule,
    SharedModule,
  ]
})
export class DocsFiltroModule { }
