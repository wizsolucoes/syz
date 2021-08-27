import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsAchievementsProgressBarRoutingModule } from './docs-achievements-progress-bar-routing.module';
import { DocsAchievementsProgressBarComponent } from './docs-achievements-progress-bar.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgSyzAchievementsProgressBarModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [
    DocsAchievementsProgressBarComponent
  ],
  imports: [
    CommonModule,
    DocsAchievementsProgressBarRoutingModule,
    SharedModule,
    NgSyzAchievementsProgressBarModule
  ]
})
export class DocsAchievementsProgressBarModule { }
