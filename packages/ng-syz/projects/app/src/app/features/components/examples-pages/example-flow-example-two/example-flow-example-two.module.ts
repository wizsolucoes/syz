import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFlowExampleTwoRoutingModule } from './example-flow-example-two-routing.module';
import { ExampleFlowExampleTwoComponent } from './example-flow-example-two.component';
import { NgSyzExampleFlowModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [ExampleFlowExampleTwoComponent],
  imports: [
    CommonModule,
    ExampleFlowExampleTwoRoutingModule,
    NgSyzExampleFlowModule,
  ],
})
export class ExampleFlowExampleTwoModule {}
