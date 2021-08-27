import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';



import { NgSyzCardInfoComponent } from './ng-syz-card-info.component';



@NgModule({
  declarations: [NgSyzCardInfoComponent],
  imports: [
    CommonModule,
  
  ],
  exports:[NgSyzCardInfoComponent]
})
export class NgSyzCardInfoModule { }
