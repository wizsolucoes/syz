import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsPersonInfoRoutingModule } from './docs-person-info-routing.module';
import { DocsPersonInfoComponent } from './docs-person-info.component';

import { NgSyzPersonInfoModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsPersonInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocsPersonInfoRoutingModule,
    NgSyzPersonInfoModule,
  ],
})
export class DocsPersonInfoModule {}
