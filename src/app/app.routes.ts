import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/notas', pathMatch: 'full' },
  { path: '**', redirectTo: '/notas' },
];
