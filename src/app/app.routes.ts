import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => 
      import('@layout/main-layout.routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@features/errors/not-found/not-found').then(
        (m) => m.NotFound,
      ),
  },
];
