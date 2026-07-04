import { Routes } from '@angular/router';
import { authGuard } from 'shared';
import { HomeComponent } from './layout/home/home';
import { LoginComponent } from './pages/login/login';
import { NotFoundComponent } from './pages/not-found/not-found';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      loadRemoteModule('dashboard', './routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadChildren: () =>
      loadRemoteModule('products', './routes').then((m) => m.routes),
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadChildren: () =>
      loadRemoteModule('users', './routes').then((m) => m.routes),
  },
  { path: '**', component: NotFoundComponent },
];
