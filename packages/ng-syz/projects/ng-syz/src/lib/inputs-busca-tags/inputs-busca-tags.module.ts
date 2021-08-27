import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzInputsBuscaTagsComponent } from './inputs-busca-tags.component';

import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [NgSyzInputsBuscaTagsComponent],
  imports: [
    CommonModule,
    MatInputModule

  ],
  exports: [NgSyzInputsBuscaTagsComponent]
})
export class NgSyzInputsBuscaTagsModule { }
