import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import { Language } from '../models/language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private readonly appState: AppStateService) {}

  setLanguage(language: Language): void {
    this.appState.setLanguage(language);
  }
}
