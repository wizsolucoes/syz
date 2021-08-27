import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsNavbarRoutingModule } from './docs-navbar-routing.module';
import { DocsNavbarComponent } from './docs-navbar.component';


@NgModule({
  declarations: [
    DocsNavbarComponent
  ],
  imports: [
    CommonModule,
    DocsNavbarRoutingModule
  ]
})
export class DocsNavbarModule { }
