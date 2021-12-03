import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzSimulationResultComponent } from './simulation-result.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(ptBr);

@NgModule({
  declarations: [NgSyzSimulationResultComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  exports: [NgSyzSimulationResultComponent],
})
export class NgSyzSimulationResultModule {}
