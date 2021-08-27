import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsNavbarRoutingModule } from './docs-navbar-routing.module';
import { DocsNavbarComponent } from './docs-navbar.component';

import { NgSyzNavbarModule } from '@wizsolucoes/ng-syz'
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocsNavbarRoutingModule,
    NgSyzNavbarModule,
  ]
})
export class DocsNavbarModule { }
