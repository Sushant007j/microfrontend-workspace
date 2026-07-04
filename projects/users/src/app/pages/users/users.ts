import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from 'shared';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class UsersComponent {
  readonly appState = inject(AppStateService);
}
