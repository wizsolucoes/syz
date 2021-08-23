import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCardResultInitiativeComponent } from './card-result-initiative.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzCardResultInitiativeComponent],
  imports: [CommonModule, NgxMaskModule.forRoot(), MatIconModule],
  exports: [NgSyzCardResultInitiativeComponent],
})
export class NgSyzCardResultInitiativeModule {}
