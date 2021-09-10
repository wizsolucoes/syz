import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzAchievementsProgressBarComponent } from './achievements-progress-bar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgSyzAchievementsProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    FormsModule
  ],
  exports: [
    NgSyzAchievementsProgressBarComponent
  ]
})
export class NgSyzAchievementsProgressBarModule { }
