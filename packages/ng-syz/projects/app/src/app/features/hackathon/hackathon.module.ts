import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';
import { HackathonComponent } from './hackathon.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HackathonComponent],
  imports: [
    CommonModule,
    HackathonRoutingModule,
    HttpClientModule,
    MatButtonModule,
  ],
})
export class HackathonModule {}
