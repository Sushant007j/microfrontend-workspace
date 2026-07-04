import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AppStateService } from 'shared';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  readonly appState = inject(AppStateService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  username = 'admin';
  password = 'admin';
  errorMessage = '';

  submit(): void {
    this.authService.login(this.username, this.password).subscribe((result) => {
      if (result.success && result.user && result.token) {
        this.appState.setAuthenticated(true);
        this.appState.setCurrentUser(result.user);
        this.appState.setAuthToken(result.token);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
