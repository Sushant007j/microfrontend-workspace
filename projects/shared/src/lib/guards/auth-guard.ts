import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const appState = inject(AppStateService);
  const router = inject(Router);

  return appState.authenticated() ? true : router.createUrlTree(['/login']);
};
