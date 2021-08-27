import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzHelloWorldComponent } from './hello-world.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [NgSyzHelloWorldComponent],
  imports: [CommonModule, NgxMaskModule.forRoot()],
  exports: [NgSyzHelloWorldComponent],
})
export class NgSyzHelloWorldModule {}
