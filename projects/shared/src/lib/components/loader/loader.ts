import { Component } from '@angular/core';

@Component({
  selector: 'lib-loader',
  imports: [],
  template: `<div class="loader" aria-label="Loading"></div>`,
  styles: [`.loader { width: 2rem; height: 2rem; border: 0.25rem solid #d1d5db; border-top-color: #2563eb; border-radius: 50%; animation: spin 0.8s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`],
})
export class LoaderComponent {}
