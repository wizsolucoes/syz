import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsRedefinicaoSenhaComponent } from './docs-redefinicao-senha.component';

const routes: Routes = [{ path: '', component: DocsRedefinicaoSenhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRedefinicaoSenhaRoutingModule {}
