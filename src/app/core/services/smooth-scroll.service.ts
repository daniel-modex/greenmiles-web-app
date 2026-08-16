import { Injectable, signal } from '@angular/core';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class SmoothScrollService {
  private lenis: Lenis | null = null;
  private tickerCallback: ((time: number) => void) | null = null;
  public isInitialized = signal<boolean>(false);

  public init(): void {
    if (typeof window === 'undefined' || this.lenis) return;

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    this.lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    this.tickerCallback = (time: number) => {
      this.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(this.tickerCallback);
    gsap.ticker.lagSmoothing(0);

    this.isInitialized.set(true);
  }

  public scrollTo(target: number | string | HTMLElement, options?: { offset?: number; duration?: number }): void {
    if (this.lenis) {
      this.lenis.scrollTo(target, options);
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else {
        const el = typeof target === 'string' ? document.querySelector(target) : target;
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  public stop(): void {
    this.lenis?.stop();
  }

  public start(): void {
    this.lenis?.start();
  }

  public destroy(): void {
    if (this.tickerCallback) {
      gsap.ticker.remove(this.tickerCallback);
    }
    this.lenis?.destroy();
    this.lenis = null;
    this.isInitialized.set(false);
  }
}
