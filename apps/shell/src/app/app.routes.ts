import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'performance',
    loadChildren: () =>
      import('performance/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'ai',
    loadChildren: () => import('ai/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'blog',
    loadChildren: () => import('blog/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
