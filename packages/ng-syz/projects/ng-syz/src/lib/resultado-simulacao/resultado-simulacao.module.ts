import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzResultadoSimulacaoComponent } from './resultado-simulacao.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [NgSyzResultadoSimulacaoComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [NgSyzResultadoSimulacaoComponent],
})
export class NgSyzResultadoSimulacaoModule {}
