import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsFaqRoutingModule } from './docs-faq-routing.module';
import { DocsFaqComponent } from './docs-faq.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgSyzFaqModule } from '@wizsolucoes/ng-syz';


@NgModule({
  declarations: [
    DocsFaqComponent
  ],
  imports: [
    CommonModule,
    DocsFaqRoutingModule,
    SharedModule,
    NgSyzFaqModule
  ]
})
export class DocsFaqModule { }
