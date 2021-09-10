import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzSideBarFilterComponent } from './sidebar-filter.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzSideBarFilterComponent],
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
  exports: [NgSyzSideBarFilterComponent],
})
export class NgSyzSideBarFilterModule {}
