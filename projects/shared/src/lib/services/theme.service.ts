import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import { Theme } from '../models/theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private readonly appState: AppStateService) {}

  setTheme(theme: Theme): void {
    this.appState.setTheme(theme);
  }
}
