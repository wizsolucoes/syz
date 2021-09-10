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
        path: 'carousel-cards',
        loadChildren: () =>
          import('./docs-carousel-cards/docs-carousel-cards.module').then(
            (m) => m.DocsCarouselCardsModule
          ),
      },
      {
        path: 'card-result-initiative',
        loadChildren: () =>
          import(
            './docs-card-result-initiative/docs-card-result-initiative.module'
          ).then((m) => m.DocsCardResultInitiativeModule),
      },
      {
        path: 'performance-summary',
        loadChildren: () =>
          import(
            './docs-performance-summary/docs-performance-summary.module'
          ).then((m) => m.DocsPerformanceSummaryModule),
      },
      {
        path: 'checklist-status',
        loadChildren: () =>
          import('./docs-checklist-status/docs-checklist-status.module').then(
            (m) => m.DocsChecklistStatusModule
          ),
      },
      {
        path: 'table-pagination',
        loadChildren: () =>
          import('./docs-table-pagination/docs-table-pagination.module').then(
            (m) => m.DocsTablePaginationModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./docs-faq/docs-faq.module').then((m) => m.DocsFaqModule),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./docs-timeline/docs-timeline.module').then(
            (m) => m.DocsTimelineModule
          ),
      },
      {
        path: 'achievements-progress-bar',
        loadChildren: () =>
          import(
            './docs-achievements-progress-bar/docs-achievements-progress-bar.module'
          ).then((m) => m.DocsAchievementsProgressBarModule),
      },
      {
        path: 'resultado-simulacao',
        loadChildren: () =>
          import(
            './docs-resultado-simulacao/docs-resultado-simulacao.module'
          ).then((m) => m.DocsResultadoSimulacaoModule),
      },
      {
        path: 'button-grid',
        loadChildren: () =>
          import('./docs-button-grid/docs-button-grid.module').then(
            (m) => m.DocsButtonGridModule
          ),
      },
      {
        path: 'redefinicao-senha',
        loadChildren: () =>
          import('./docs-redefinicao-senha/docs-redefinicao-senha.module').then(
            (m) => m.DocsRedefinicaoSenhaModule
          ),
      },
      {
        path: 'filter',
        loadChildren: () =>
          import('./docs-filtro/docs-filtro.module').then(
            (m) => m.DocsFiltroModule
          ),
      },
    ],
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./examples-pages/examples-pages.module').then(
        (m) => m.ExamplesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
