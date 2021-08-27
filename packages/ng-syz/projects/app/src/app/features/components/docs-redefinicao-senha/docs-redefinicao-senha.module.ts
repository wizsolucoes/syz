import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRedefinicaoSenhaComponent } from './docs-redefinicao-senha.component';
import { DocsRedefinicaoSenhaRoutingModule } from './docs-redefinicao-senha-routing.module';
import { NgSyzRedefinicaoSenhaModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DocsRedefinicaoSenhaComponent],
  imports: [
    CommonModule,
    DocsRedefinicaoSenhaRoutingModule,
    NgSyzRedefinicaoSenhaModule,
    SharedModule,
  ],
})
export class DocsRedefinicaoSenhaModule {}
