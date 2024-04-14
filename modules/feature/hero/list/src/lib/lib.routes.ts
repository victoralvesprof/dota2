import { Route } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';

export const heroListRoutes: Route[] = [
  { path: '', component: HeroListComponent },
];
