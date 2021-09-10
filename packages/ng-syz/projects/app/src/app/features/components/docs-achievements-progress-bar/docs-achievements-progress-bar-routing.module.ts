import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsAchievementsProgressBarComponent } from './docs-achievements-progress-bar.component';

const routes: Routes = [{ path: '', component: DocsAchievementsProgressBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsAchievementsProgressBarRoutingModule { }
