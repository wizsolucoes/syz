import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzLoginWithCardsFlowComponent } from './login-with-cards-flow.component';
import { RouterModule } from '@angular/router';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NgSyzLoginWithCardsFlowComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgSyzLoginWithCardsFlowComponent],
})
export class NgSyzLoginWithCardsFlowModule {}
