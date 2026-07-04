import { Component, inject } from '@angular/core';
import { AppStateService, LanguageService, ThemeService } from 'shared';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly appState = inject(AppStateService);
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  setTheme(theme: 'light' | 'dark'): void {
    this.themeService.setTheme(theme);
  }

  setLanguage(language: 'en' | 'fr' | 'de'): void {
    this.languageService.setLanguage(language);
  }
}
