import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonComponent } from './hackathon.component';

const routes: Routes = [{ path: '', component: HackathonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackathonRoutingModule { }
