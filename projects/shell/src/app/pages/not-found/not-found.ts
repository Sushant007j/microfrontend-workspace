import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  template: '<section class="not-found"><h2>404</h2><p>The page you are looking for does not exist.</p></section>',
  styles: ['.not-found { text-align:center; padding:3rem; }'],
})
export class NotFoundComponent {}
