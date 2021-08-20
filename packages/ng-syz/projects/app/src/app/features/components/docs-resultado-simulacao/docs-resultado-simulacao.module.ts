import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsResultadoSimulacaoRoutingModule } from './docs-resultado-simulacao-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DocsResultadoSimulacaoComponent } from './docs-resultado-simulacao.component';
import { NgSyzResultadoSimulacaoModule } from 'projects/ng-syz/src/public-api';

@NgModule({
  declarations: [DocsResultadoSimulacaoComponent],
  imports: [
    CommonModule,
    DocsResultadoSimulacaoRoutingModule,
    NgSyzResultadoSimulacaoModule,
    SharedModule,
  ],
})
export class DocsResultadoSimulacaoModule {}
