import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components/home',
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./features/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'hackasyz',
    loadChildren: () =>
      import('./features/hackathon/hackathon.module').then(
        (m) => m.HackathonModule
      ),
  },
  {
    path: 'hackathon',
    redirectTo: 'hackasyz',
  },
  {
    path: '**',
    redirectTo: 'components/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
