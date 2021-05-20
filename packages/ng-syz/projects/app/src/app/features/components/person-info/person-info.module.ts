import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonInfoRoutingModule } from './person-info-routing.module';
import { PersonInfoComponent } from './person-info.component';

import { NgSyzPersonInfoModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PersonInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonInfoRoutingModule,
    NgSyzPersonInfoModule,
  ],
})
export class PersonInfoModule {}
