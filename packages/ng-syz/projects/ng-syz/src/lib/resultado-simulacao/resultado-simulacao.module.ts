import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzResultadoSimulacaoComponent } from './resultado-simulacao.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

registerLocaleData(ptBr);
@NgModule({
  declarations: [NgSyzResultadoSimulacaoComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  exports: [NgSyzResultadoSimulacaoComponent],
})
export class NgSyzResultadoSimulacaoModule {}
