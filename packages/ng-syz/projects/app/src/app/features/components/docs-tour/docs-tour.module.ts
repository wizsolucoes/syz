import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsTourRoutingModule } from './docs-tour-routing.module';
import { DocsTourComponent } from './docs-tour.component';
import { NgSyzTourModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocsTourComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocsTourRoutingModule,
    NgSyzTourModule
  ]
})
export class DocsTourModule { }
