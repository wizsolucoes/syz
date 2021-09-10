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
        path: 'cards-carousel',
        loadChildren: () =>
          import('./docs-cards-carousel/docs-cards-carousel.module').then(
            (m) => m.DocsCarouselCardsModule
          ),
      },
      {
        path: 'initiative-result-card',
        loadChildren: () =>
          import(
            './docs-initiative-result-card/docs-initiative-result-card.module'
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
        path: 'data-table',
        loadChildren: () =>
          import('./docs-data-table/docs-data-table.module').then(
            (m) => m.DocsDataTableModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./docs-faq/docs-faq.module').then((m) => m.DocsFaqModule),
      },
      {
        path: 'status-timeline',
        loadChildren: () =>
          import('./docs-status-timeline/docs-status-timeline.module').then(
            (m) => m.DocsStatusTimelineModule
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
        path: 'simulation-result',
        loadChildren: () =>
          import('./docs-simulation-result/docs-simulation-result.module').then(
            (m) => m.DocsSimulationResultModule
          ),
      },
      {
        path: 'button-grid',
        loadChildren: () =>
          import('./docs-button-grid/docs-button-grid.module').then(
            (m) => m.DocsButtonGridModule
          ),
      },
      {
        path: 'password-reset-card',
        loadChildren: () =>
          import(
            './docs-password-reset-card/docs-password-reset-card.module'
          ).then((m) => m.DocsSimulationResultModule),
      },
      {
        path: 'sidebar-filter',
        loadChildren: () =>
          import('./docs-sidebar-filter/docs-sidebar-filter.module').then(
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
