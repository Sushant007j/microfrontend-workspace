import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from 'shared';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  readonly appState = inject(AppStateService);
}
