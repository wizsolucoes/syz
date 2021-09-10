import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGridExampleOneComponent } from './button-grid-example-one.component';
import { NgSyzButtonGridModule } from 'projects/ng-syz/src/public-api';
import { ButtonGridExampleOneRoutingModule } from './button-grid-example-one-routing.module';

@NgModule({
  declarations: [ButtonGridExampleOneComponent],
  imports: [
    CommonModule,
    NgSyzButtonGridModule,
    ButtonGridExampleOneRoutingModule,
  ],
})
export class ButtonGridExampleOneModule {}
