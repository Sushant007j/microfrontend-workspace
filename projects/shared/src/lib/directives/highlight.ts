import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[libHighlight]',
  standalone: true,
})
export class HighlightDirective {
  readonly color = input<string>('gold');

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.color();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
