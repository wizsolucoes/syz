import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsCpfSearchRoutingModule } from './docs-cpf-search-routing.module';
import { DocsCpfSearchComponent } from './docs-cpf-search.component';

import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsCpfSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocsCpfSearchRoutingModule,
    NgSyzCpfSearchModule,
  ],
})
export class DocsCpfSearchModule {}
