import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    const users: User[] = [
      { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
      { id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'manager' },
      { id: '3', name: 'John Smith', email: 'john@example.com', role: 'viewer' },
    ];

    return of(users).pipe(delay(350));
  }
}
