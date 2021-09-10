import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsCardResultInitiativeComponent } from './docs-initiative-result-card.component';

const routes: Routes = [
  { path: '', component: DocsCardResultInitiativeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsCardResultInitiativeRoutingModule {}
