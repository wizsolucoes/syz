import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsExampleFlowRoutingModule } from './docs-example-flow-routing.module';
import { DocsExampleFlowComponent } from './docs-example-flow.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsExampleFlowComponent],
  imports: [CommonModule, DocsExampleFlowRoutingModule, SharedModule],
})
export class DocsExampleFlowModule {}
