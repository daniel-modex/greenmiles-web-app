import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
})
export class MagneticDirective {
  private el = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (event.clientX - centerX) * 0.25;
    const deltaY = (event.clientY - centerY) * 0.25;

    this.el.nativeElement.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
    this.el.nativeElement.style.transition = 'transform 0.15s ease-out';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'translate3d(0px, 0px, 0)';
    this.el.nativeElement.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  }
}
