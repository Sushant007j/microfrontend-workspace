import { Injectable, signal } from '@angular/core';
import { computed } from '@angular/core';
import { Language } from '../models/language';
import { NotificationItem } from '../models/notification';
import { Product } from '../models/product';
import { Theme } from '../models/theme';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private readonly currentUserSignal = signal<User | null>(null);
  private readonly selectedProductSignal = signal<Product | null>(null);
  private readonly themeSignal = signal<Theme>('light');
  private readonly languageSignal = signal<Language>('en');
  private readonly notificationsSignal = signal<NotificationItem[]>([]);
  private readonly loadingSignal = signal(false);
  private readonly authenticatedSignal = signal(false);
  private readonly authTokenSignal = signal<string | null>(null);

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly selectedProduct = this.selectedProductSignal.asReadonly();
  readonly theme = this.themeSignal.asReadonly();
  readonly language = this.languageSignal.asReadonly();
  readonly notifications = this.notificationsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly authenticated = this.authenticatedSignal.asReadonly();
  readonly authToken = this.authTokenSignal.asReadonly();

  readonly hasNotifications = computed(() => this.notifications().length > 0);
  readonly isDarkMode = computed(() => this.theme() === 'dark');
  readonly notificationCount = computed(() => this.notifications().length);

  setCurrentUser(user: User | null): void {
    this.currentUserSignal.set(user);
  }

  setSelectedProduct(product: Product | null): void {
    this.selectedProductSignal.set(product);
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
  }

  setLanguage(language: Language): void {
    this.languageSignal.set(language);
  }

  setNotifications(notifications: NotificationItem[]): void {
    this.notificationsSignal.set(notifications);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setAuthenticated(authenticated: boolean): void {
    this.authenticatedSignal.set(authenticated);
  }

  setAuthToken(token: string | null): void {
    this.authTokenSignal.set(token);
  }

  clearAuth(): void {
    this.setAuthenticated(false);
    this.setAuthToken(null);
    this.setCurrentUser(null);
  }
}
