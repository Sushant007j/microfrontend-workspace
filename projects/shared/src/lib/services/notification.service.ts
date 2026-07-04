import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { NotificationItem } from '../models/notification';
import { AppStateService } from './app-state.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private readonly appState: AppStateService) {}

  getNotifications() {
    const notifications: NotificationItem[] = [
      { id: '1', message: 'System updated', type: 'info' },
      { id: '2', message: 'New products available', type: 'success' },
    ];

    return of(notifications).pipe(delay(250));
  }

  loadNotifications(): void {
    this.getNotifications().subscribe((notifications) => this.appState.setNotifications(notifications));
  }
}
