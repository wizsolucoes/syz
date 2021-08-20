import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCardResultInitiativeComponent } from './card-result-initiative.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [NgSyzCardResultInitiativeComponent],
  imports: [CommonModule, NgxMaskModule.forRoot()],
  exports: [NgSyzCardResultInitiativeComponent],
})
export class NgSyzCardResultInitiativeModule {}
