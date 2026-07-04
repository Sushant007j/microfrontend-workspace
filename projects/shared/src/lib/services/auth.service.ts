import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { AppStateService } from './app-state.service';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly appState: AppStateService) {}

  login(username: string, password: string) {
    const isValid = username === 'admin' && password === 'admin';
    const user: User = {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
    };

    return of(isValid ? { success: true, token: 'demo-token', user } : { success: false, token: null, user: null }).pipe(
      delay(300),
    );
  }

  logout(): void {
    this.appState.clearAuth();
  }
}
