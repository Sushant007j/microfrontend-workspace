import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  template: `<button type="button" (click)="clicked.emit()" [class.secondary]="variant() === 'secondary'">{{ label() }}</button>`,
  styles: [`.button, button { border:none; border-radius:999px; padding:0.7rem 1rem; font-weight:600; cursor:pointer; background:#2563eb; color:white; } .secondary { background:#e5e7eb; color:#111827; }`],
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly clicked = output<void>();
}
