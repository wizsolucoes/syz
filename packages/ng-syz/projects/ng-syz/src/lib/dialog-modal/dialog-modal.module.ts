import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzDialogModalComponent } from './dialog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NgSyzDialogModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [NgSyzDialogModalComponent],
})
export class NgSyzDialogModalModule { }
