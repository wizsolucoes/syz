import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSyzInitiativeResultCardModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { DocsCardResultInitiativeRoutingModule } from './docs-initiative-result-card-routing.module';
import { DocsCardResultInitiativeComponent } from './docs-initiative-result-card.component';

@NgModule({
  declarations: [DocsCardResultInitiativeComponent],
  imports: [
    CommonModule,
    NgSyzInitiativeResultCardModule,
    SharedModule,
    DocsCardResultInitiativeRoutingModule,
  ],
})
export class DocsCardResultInitiativeModule {}
