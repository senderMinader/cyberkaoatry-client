import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'session',
    pathMatch: 'full',
  },
  {
    path: 'session',
    loadChildren: () =>
      import('@features/sessions/sessions.routes').then(
        (m) => m.SESSION_ROUTES,
      ),
  },
  {
    path: '**',
    redirectTo: 'session',
  },
];
