import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
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
    ],
  },
];
