import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFlowExampleOneRoutingModule } from './example-flow-example-one-routing.module';
import { ExampleFlowExampleOneComponent } from './example-flow-example-one.component';
import { NgSyzExampleFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [ExampleFlowExampleOneComponent],
  imports: [
    CommonModule,
    ExampleFlowExampleOneRoutingModule,
    NgSyzExampleFlowModule,
  ],
})
export class ExampleFlowExampleOneModule {}
