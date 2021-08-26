import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzDialogModalComponent } from './dialog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModalBodyComponent } from './dialog-modal-body/dialog-modal-body.component';

@NgModule({
  declarations: [
    NgSyzDialogModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DialogModalBodyComponent
  ],
  exports: [NgSyzDialogModalComponent],
})
export class NgSyzDialogModalModule { }
