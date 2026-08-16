import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'holidays',
    loadComponent: () => import('./features/holidays/holidays.component').then((m) => m.HolidaysComponent),
  },
  {
    path: 'fleet',
    loadComponent: () => import('./features/fleet/fleet-page.component').then((m) => m.FleetPageComponent),
  },
  {
    path: 'pilgrimage',
    loadComponent: () => import('./features/pilgrimage/pilgrimage.component').then((m) => m.PilgrimageComponent),
  },
  {
    path: 'mice-corporate',
    loadComponent: () => import('./features/mice-corporate/mice.component').then((m) => m.MiceComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
