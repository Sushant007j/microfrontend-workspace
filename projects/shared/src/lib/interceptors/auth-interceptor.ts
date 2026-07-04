import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AppStateService } from '../services/app-state.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const appState = inject(AppStateService);
  const token = appState.authToken();

  if (!token) {
    return next(req);
  }

  const cloned = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  return next(cloned);
};
