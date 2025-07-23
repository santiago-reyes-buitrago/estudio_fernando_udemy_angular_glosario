import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'basic', title: 'Pipes Basicos', loadComponent: ()=>  import('./pages/basic-page/basic-page') },
  {path: 'number', title: 'Pipes Numeros', loadComponent: ()=>  import('./pages/numbers-page/numbers-page') },
  {path: 'uncommon', title: 'Pipes Uncommon', loadComponent: ()=>  import('./pages/uncommon-page/uncommon-page') },
  {path: 'custom', title: 'Pipes Uncommon', loadComponent: ()=>  import('./pages/custom-page/custom-page') },
  {path: '**', redirectTo: 'basic'}
];
