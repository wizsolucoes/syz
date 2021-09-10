import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzPasswordResetCardComponent } from './password-reset-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzPasswordResetCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, NgSyzPasswordResetCardComponent],
})
export class NgSyzPasswordResetCardModule {}
