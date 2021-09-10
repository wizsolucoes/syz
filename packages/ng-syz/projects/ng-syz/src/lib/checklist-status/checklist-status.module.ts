import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCheckListStatusComponent } from './checklist-status.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [NgSyzCheckListStatusComponent],
  imports: [CommonModule, RouterModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCheckListStatusComponent]
})
export class NgSyzCheckListStatusModule { }
