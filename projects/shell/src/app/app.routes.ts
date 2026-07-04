import { Routes } from '@angular/router';
import { authGuard } from 'shared';
import { HomeComponent } from './layout/home/home';
import { LoginComponent } from './pages/login/login';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('../../../dashboard/src/app/pages/dashboard/dashboard').then((m) => m.DashboardComponent),
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () => import('../../../products/src/app/pages/products/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('../../../users/src/app/pages/users/users').then((m) => m.UsersComponent),
  },
  { path: '**', component: NotFoundComponent },
];
