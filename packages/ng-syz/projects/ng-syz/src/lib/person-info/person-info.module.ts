import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzPersonInfoComponent } from './person-info.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [NgSyzPersonInfoComponent],
  imports: [CommonModule, NgxMaskModule.forRoot()],
  exports: [NgSyzPersonInfoComponent],
})
export class NgSyzPersonInfoModule {}
