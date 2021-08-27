import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzHelloWorldModule } from '@wizsolucoes/ng-syz';

import { DocsHelloWorldRoutingModule } from './docs-hello-world-routing.module';
import { DocsHelloWorldComponent } from './docs-hello-world.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    DocsHelloWorldComponent
  ],
  imports: [
    CommonModule,
    DocsHelloWorldRoutingModule,
    NgSyzHelloWorldModule,
    SharedModule
  ]
})
export class DocsHelloWorldModule { }
