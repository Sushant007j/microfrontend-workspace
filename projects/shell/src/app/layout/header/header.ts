import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppStateService } from 'shared';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly appState = inject(AppStateService);
  private readonly router = inject(Router);
  logout(): void {
    this.appState.clearAuth();
     this.router.navigate(['login']);
  }
}
