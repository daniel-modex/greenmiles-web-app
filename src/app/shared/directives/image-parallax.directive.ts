import { Directive, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appImageParallax]',
})
export class ImageParallaxDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private tween: gsap.core.Tween | null = null;

  public ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    this.tween = gsap.to(this.el.nativeElement, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  public ngOnDestroy(): void {
    if (this.tween) {
      this.tween.kill();
    }
  }
}
