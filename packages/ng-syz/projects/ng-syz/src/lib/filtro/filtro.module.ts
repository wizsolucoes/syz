import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzFiltroComponent } from './filtro.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NgSyzFiltroComponent
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    NgSyzFiltroComponent
  ]
})
export class NgSyzFiltroModule { }
