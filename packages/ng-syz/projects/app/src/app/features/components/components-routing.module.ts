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
        path: 'faq',
        loadChildren: () =>
          import(
            './docs-faq/docs-faq.module'
          ).then(m => m.DocsFaqModule)
      },
      { 
        path: 'timeline',
        loadChildren: () =>
          import(
            './docs-timeline/docs-timeline.module'
          ).then(m => m.DocsTimelineModule)
      },
      { path: 'achievements-progress-bar',
      loadChildren: () =>
        import(
          './docs-achievements-progress-bar/docs-achievements-progress-bar.module'
        ).then(m => m.DocsAchievementsProgressBarModule)
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
export class ComponentsRoutingModule { }
