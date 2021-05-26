import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cpf-search',
        loadChildren: () =>
          import('./docs-cpf-search/docs-cpf-search.module').then(
            (m) => m.DocsCpfSearchModule
          ),
      },
      {
        path: 'person-info',
        loadChildren: () =>
          import('./docs-person-info/docs-person-info.module').then(
            (m) => m.DocsPersonInfoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
