import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';
import { HackathonComponent } from './hackathon.component';


@NgModule({
  declarations: [
    HackathonComponent
  ],
  imports: [
    CommonModule,
    HackathonRoutingModule
  ]
})
export class HackathonModule { }
