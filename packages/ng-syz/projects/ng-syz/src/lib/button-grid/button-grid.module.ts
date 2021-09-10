import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzButtonGridComponent } from './button-grid.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzButtonGridComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [NgSyzButtonGridComponent],
})
export class NgSyzButtonGridModule {}
