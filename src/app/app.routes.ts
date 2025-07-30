import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'revendedoras',
    loadComponent: () => import('./components/revendedoras/revendedoras').then(m => m.Revendedoras)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
