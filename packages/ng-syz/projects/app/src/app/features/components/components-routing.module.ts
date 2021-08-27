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

      {
        path: 'login-with-carousel-flow',
        loadChildren: () =>
          import(
            './docs-login-with-carousel-flow/docs-login-with-carousel-flow.module'
          ).then((m) => m.DocsLoginWithCarouselFlowModule),
      },
      {
        path: 'login-with-cards-flow',
        loadChildren: () =>
          import(
            './docs-login-with-cards-flow/docs-login-with-cards-flow.module'
          ).then((m) => m.DocsLoginWithCardsFlowModule),
      },
      {
        path: 'navbar',
        loadChildren: () =>
          import('./docs-navbar/docs-navbar.module').then(
            (m) => m.DocsNavbarModule
          ),
      },
       
      { path: 'horizontal-timeline', loadChildren: () => import('./docs-horizontal-timeline/docs-horizontal-timeline.module').then(m => m.DocsHorizontalTimelineModule) },

    ],
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./examples-pages/examples-pages.module').then(
        (m) => m.ExamplesModule
      ),
  },
  {
    path: 'inputs-busca-tags',
    loadChildren: () =>
      import('./docs-inputs-busca-tags/docs-inputs-busca-tags.module').then(
        (m) => m.DocsInputsBuscaTagsModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
