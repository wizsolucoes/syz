import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzGlossarioComponent } from './glossario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSyzCardGlossarioComponent } from './card-glossario/card-glossario.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [NgSyzGlossarioComponent, NgSyzCardGlossarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule
  ]
})
export class GlossarioModule { }
