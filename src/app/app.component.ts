import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SmoothScrollService } from './core/services/smooth-scroll.service';
import { FestiveTickerComponent } from './shared/components/festive-ticker/festive-ticker.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BookingModalComponent } from './shared/components/booking-modal/booking-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FestiveTickerComponent,
    NavbarComponent,
    FooterComponent,
    BookingModalComponent,
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-[#F2F2F2] text-[#0F1E13] font-sans antialiased">
      <!-- 1. Top Festive Announcement Ribbon -->
      <app-festive-ticker></app-festive-ticker>

      <!-- 2. Sticky Glass Header Navigation -->
      <app-navbar></app-navbar>

      <!-- 3. Dynamic Router Outlet View -->
      <div class="flex-1 w-full">
        <router-outlet></router-outlet>
      </div>

      <!-- 4. 4-Column Rich Footer -->
      <app-footer></app-footer>

      <!-- 5. Signal-Driven Multi-Step Booking Modal Dialog Overlay -->
      <app-booking-modal></app-booking-modal>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  private smoothScroll = inject(SmoothScrollService);
  private router = inject(Router);

  public ngOnInit(): void {
    // Initialize Lenis smooth scroll bridge with GSAP
    this.smoothScroll.init();

    // Scroll top on route change
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.smoothScroll.scrollTo(0, { duration: 0.8 });
      });
  }

  public ngOnDestroy(): void {
    this.smoothScroll.destroy();
  }
}
