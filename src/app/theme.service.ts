// src/app/theme.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = signal<boolean>(false);

  constructor() {
    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme) {
      this.isDarkTheme.set(JSON.parse(savedTheme));
      this.updateBodyClass();
    }
  }

  toggleTheme() {
    this.isDarkTheme.update(value => !value);
    localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme()));
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkTheme()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}