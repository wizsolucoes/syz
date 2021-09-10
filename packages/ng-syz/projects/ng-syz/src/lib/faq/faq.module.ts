import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzFaqComponent } from './faq.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    NgSyzFaqComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    NgSyzFaqComponent
  ]
})
export class NgSyzFaqModule { }
