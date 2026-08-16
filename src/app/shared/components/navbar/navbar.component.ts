import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingService } from '../../../core/services/booking.service';
import { ButtonComponent } from '../../ui/button/button.component';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonComponent, MagneticDirective],
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
  template: `
    <header
      [class.bg-transparent]="!isScrolled()"
      [class.py-6]="!isScrolled()"
      [class.glass-nav]="isScrolled()"
      [class.py-4]="isScrolled()"
      [class.shadow-xl]="isScrolled()"
      class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none rounded-xl p-1">
          <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6EBF49] to-[#049DD9] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
            <div class="w-full h-full bg-[#09140E] rounded-[10px] flex items-center justify-center overflow-hidden">
              <img src="/logo/logo.svg" alt="Greenmiles Logo" class="w-6 h-6 object-contain" />
            </div>
          </div>
          
          <div class="flex flex-col">
            <span class="text-xl font-bold font-serif tracking-tight text-[#09140E] group-hover:text-[#049DD9] transition-colors duration-200">
              GREENMILES<span class="text-[#6EBF49]">.</span>
            </span>
            <span class="text-[9px] font-bold text-slate-500 tracking-[0.25em] uppercase -mt-1">
              Luxury Concierge
            </span>
          </div>
        </a>

        <!-- Desktop Snami Navigation Links (Uppercase Tracked) -->
        <nav class="hidden lg:flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#6EBF49]/20 shadow-sm">
          <a
            routerLink="/"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Home
          </a>
          <a
            routerLink="/holidays"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Holidays
          </a>
          <a
            routerLink="/fleet"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Fleet Rental
          </a>
          <a
            routerLink="/pilgrimage"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Pilgrimage
          </a>
          <a
            routerLink="/mice-corporate"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Corporate MICE
          </a>
          <a
            routerLink="/about"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            About
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-[#6EBF49] font-bold border-b-2 border-[#6EBF49]"
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 hover:text-[#049DD9] transition-colors duration-200 py-1"
          >
            Contact
          </a>
        </nav>

        <!-- Snami Rounded Luxury CTA Button with Status Dot -->
        <div class="flex items-center gap-3">
          <div appMagnetic class="hidden sm:inline-flex items-center">
            <button
              type="button"
              (click)="onQuickQuote()"
              class="bg-[#09140E] hover:bg-[#6EBF49] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2.5 cursor-pointer group"
            >
              <span class="w-2 h-2 rounded-full bg-[#6EBF49] group-hover:bg-white animate-pulse"></span>
              <span class="tracking-wider uppercase text-[11px]">Inquire / Plan Trip</span>
            </button>
          </div>

          <!-- Mobile Toggle -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            aria-label="Toggle Menu"
            class="lg:hidden p-2.5 rounded-full bg-white/90 text-[#09140E] shadow-sm hover:bg-slate-100 focus:outline-none cursor-pointer border border-slate-200"
          >
            @if (isMobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            } @else {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (isMobileMenuOpen()) {
        <div class="lg:hidden bg-[#09140E]/95 backdrop-blur-2xl text-white px-6 pt-4 pb-8 space-y-4 shadow-2xl border-b border-white/10 mt-3 animate-in slide-in-from-top-4">
          <nav class="flex flex-col space-y-2">
            <a
              routerLink="/"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              Home
            </a>
            <a
              routerLink="/holidays"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              Holidays & Packages
            </a>
            <a
              routerLink="/fleet"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              Fleet Rental & Bus Specs
            </a>
            <a
              routerLink="/pilgrimage"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              Pilgrimage Tour Circuits
            </a>
            <a
              routerLink="/mice-corporate"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              MICE & Corporate Logistics
            </a>
            <a
              routerLink="/about"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2 border-b border-white/10"
            >
              About Greenmiles
            </a>
            <a
              routerLink="/contact"
              (click)="closeMobileMenu()"
              class="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-[#6EBF49] py-2"
            >
              Contact Us
            </a>
          </nav>

          <div class="pt-4">
            <app-button
              variant="primary"
              size="lg"
              [fullWidth]="true"
              (btnClick)="onQuickQuote(); closeMobileMenu()"
            >
              Plan My Trip / Quick Quote
            </app-button>
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  private bookingService = inject(BookingService);
  public isMobileMenuOpen = signal<boolean>(false);
  public isScrolled = signal<boolean>(false);

  protected onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 30);
    }
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  protected onQuickQuote(): void {
    this.bookingService.openModal('holiday');
  }
}

