import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfSearchRoutingModule } from './cpf-search-routing.module';
import { CpfSearchComponent } from './cpf-search.component';

import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CpfSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    CpfSearchRoutingModule,
    NgSyzCpfSearchModule,
  ],
})
export class CpfSearchModule {}
