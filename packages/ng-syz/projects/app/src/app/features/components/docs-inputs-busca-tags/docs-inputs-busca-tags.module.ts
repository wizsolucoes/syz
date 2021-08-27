import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsInputsBuscaTagsRoutingModule } from './docs-inputs-busca-tags-routing.module';
import { DocsInputsBuscaTagsComponent } from './docs-inputs-busca-tags.component';

import { NgSyzInputsBuscaTagsModule } from '@wizsolucoes/ng-syz'
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsInputsBuscaTagsComponent
  ],
  imports: [
    CommonModule,
    DocsInputsBuscaTagsRoutingModule,
    NgSyzInputsBuscaTagsModule,
    SharedModule
  ]
})
export class DocsInputsBuscaTagsModule { }
