import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzPerformanceSummaryComponent } from './performance-summary.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NgSyzPerformanceSummaryComponent],
  imports: [CommonModule, RouterModule, NgxMaskModule.forRoot(), MatIconModule],

  exports: [NgSyzPerformanceSummaryComponent]
})
export class NgSyzPerformanceSummaryModule { }
