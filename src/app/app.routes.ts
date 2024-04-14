import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@dota2/home').then((c) => c.homeRoutes),
  },
  {
    path: 'heroes/list',
    loadChildren: () =>
      import('@dota2/hero-list').then(
        (c) => c.heroListRoutes
      ),
  },
];