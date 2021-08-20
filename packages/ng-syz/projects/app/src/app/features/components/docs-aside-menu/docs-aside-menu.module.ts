import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsAsideMenuRoutingModule } from './docs-aside-menu-routing.module';
import { DocsAsideMenuComponent } from './docs-aside-menu.component';

import { NgSyzAsideMenuModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsAsideMenuComponent
  ],
  imports: [
    CommonModule,
    DocsAsideMenuRoutingModule,
    NgSyzAsideMenuModule,
    SharedModule
  ]
})
export class DocsAsideMenuModule { }
