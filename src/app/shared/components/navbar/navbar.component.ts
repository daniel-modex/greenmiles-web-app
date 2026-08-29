import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingService } from '../../../core/services/booking.service';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  template: `
    <header class="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#6EBF49] rounded-xl p-1">
          <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6EBF49] to-[#049DD9] p-0.5 shadow-md shadow-[#6EBF49]/20 group-hover:scale-105 transition-transform duration-300">
            <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden">
              <img src="logo/logo.svg" alt="Greenmiles Logo" class="w-7 h-7 object-contain" />
            </div>
          </div>
          
          <div class="flex flex-col">
            <span class="text-xl font-extrabold tracking-tight text-[#0F1E13] group-hover:text-[#049DD9] transition-colors duration-200">
              GREENMILES<span class="text-[#6EBF49]">.</span>
            </span>
            <span class="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-1">
              Eco-Luxury Mobility
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1 bg-black/5 p-1.5 rounded-full border border-black/5">
          <a
            routerLink="/"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            Home
          </a>
          <a
            routerLink="/holidays"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            Holidays
          </a>
          <a
            routerLink="/fleet"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            Fleet Rental
          </a>
          <a
            routerLink="/pilgrimage"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            Pilgrimage
          </a>
          <a
            routerLink="/mice-corporate"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            MICE & Corporate
          </a>
          <a
            routerLink="/about"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            About
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="bg-white text-[#0F1E13] shadow-sm font-bold"
            class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F1E13] transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        <!-- CTA Action & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <app-button
            variant="primary"
            size="md"
            (btnClick)="onQuickQuote()"
            class="hidden sm:inline-flex"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Plan My Trip / Quick Quote
          </app-button>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            aria-label="Toggle Menu"
            class="lg:hidden p-2.5 rounded-xl bg-slate-100 text-[#0F1E13] hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6EBF49] cursor-pointer"
          >
            @if (isMobileMenuOpen()) {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            } @else {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer Overlay -->
      @if (isMobileMenuOpen()) {
        <div class="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#6EBF49]/20 px-4 pt-3 pb-6 space-y-3 shadow-xl transition-all duration-300 animate-in slide-in-from-top-4">
          <nav class="flex flex-col space-y-1">
            <a
              routerLink="/"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              [routerLinkActiveOptions]="{ exact: true }"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Home
            </a>
            <a
              routerLink="/holidays"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Holidays & Packages
            </a>
            <a
              routerLink="/fleet"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Fleet Rental & Bus Specs
            </a>
            <a
              routerLink="/pilgrimage"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Pilgrimage Tour Circuits
            </a>
            <a
              routerLink="/mice-corporate"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              MICE & Corporate Logistics
            </a>
            <a
              routerLink="/about"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              About Greenmiles
            </a>
            <a
              routerLink="/contact"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-[#6EBF49]/10 text-[#58a637] font-bold"
              class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </nav>

          <div class="pt-2 border-t border-slate-200">
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
