import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsCardResultInitiativeRoutingModule } from './docs-card-result-initiative-routing.module';
import { DocsCardResultInitiativeComponent } from './docs-card-result-initiative.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgSyzCardResultInitiativeModule } from '@wizsolucoes/ng-syz';



@NgModule({
  declarations: [DocsCardResultInitiativeComponent],
  imports: [
    CommonModule,
    NgSyzCardResultInitiativeModule,
    SharedModule,
    DocsCardResultInitiativeRoutingModule,
  ]
})
export class DocsCardResultInitiativeModule { }
