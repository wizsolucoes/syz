import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsSimulationResultComponent } from './docs-password-reset-card.component';
import { DocsSimulationResultRoutingModule } from './docs-password-reset-card-routing.module';
import { NgSyzPasswordResetCardModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsSimulationResultComponent],
  imports: [
    CommonModule,
    DocsSimulationResultRoutingModule,
    NgSyzPasswordResetCardModule,
    SharedModule,
  ],
})
export class DocsSimulationResultModule {}
