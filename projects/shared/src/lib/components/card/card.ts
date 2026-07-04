import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [],
  template: `
    <section class="card">
      <h3>{{ title() }}</h3>
      <div class="content"><ng-content></ng-content></div>
    </section>
  `,
  styles: [`.card { background:white; padding:1rem 1.25rem; border-radius:1rem; box-shadow:0 8px 24px rgba(15, 23, 42, 0.08); } .content { margin-top:0.5rem; } h3 { margin:0; font-size:1rem; }`],
})
export class CardComponent {
  readonly title = input.required<string>();
}
