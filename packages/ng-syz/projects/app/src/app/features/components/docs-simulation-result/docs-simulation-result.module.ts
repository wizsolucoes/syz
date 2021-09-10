import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsSimulationResultRoutingModule } from './docs-simulation-result-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DocsSimulationResultComponent } from './docs-simulation-result.component';
import { NgSyzSimulationResultModule } from 'projects/ng-syz/src/public-api';

@NgModule({
  declarations: [DocsSimulationResultComponent],
  imports: [
    CommonModule,
    DocsSimulationResultRoutingModule,
    NgSyzSimulationResultModule,
    SharedModule,
  ],
})
export class DocsSimulationResultModule {}
