import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  imports: [],
  template: `
    <nav class="navbar">
      <div class="brand">{{ title() }}</div>
      <div class="actions">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem; background:#111827; color:white; border-radius:0.75rem; }
      .brand { font-weight:700; font-size:1.125rem; }
      .actions { display:flex; gap:0.75rem; align-items:center; }
    `,
  ],
})
export class NavbarComponent {
  readonly title = input.required<string>();
}
