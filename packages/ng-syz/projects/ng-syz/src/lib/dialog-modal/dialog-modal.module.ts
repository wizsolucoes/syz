import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzDialogModalComponent } from './dialog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModalBodyComponent } from './dialog-modal-body/dialog-modal-body.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NgSyzDialogModalComponent,
    DialogModalBodyComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [NgSyzDialogModalComponent],
})
export class NgSyzDialogModalModule { }
