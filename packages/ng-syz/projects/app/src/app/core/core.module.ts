import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    SharedModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
