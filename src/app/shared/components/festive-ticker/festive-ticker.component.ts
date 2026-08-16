import { Component, inject } from '@angular/core';
import { FestiveService } from '../../../core/services/festive.service';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-festive-ticker',
  template: `
    @if (festiveService.isBannerVisible()) {
      <div class="relative z-50 bg-gradient-to-r from-[#049DD9] via-[#6EBF49] to-[#049DD9] text-white text-xs sm:text-sm py-2 px-4 shadow-sm overflow-hidden select-none">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div class="flex items-center gap-2 overflow-hidden w-full">
            <span class="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider shrink-0">
              <span class="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
              Festive Bonanza
            </span>
            <p class="truncate font-medium text-white/95">
              🎉 Flat <strong class="underline decoration-amber-300 decoration-2">15% OFF</strong> on Group Bus Rentals & South India Holiday Circuits! 
              Use Code: <span class="bg-black/20 px-2 py-0.5 rounded font-mono font-bold tracking-widest text-amber-200">GREENFEST</span>
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <button
              type="button"
              (click)="onClaimOffer()"
              class="hidden sm:inline-flex items-center gap-1 bg-white text-[#0F1E13] hover:bg-amber-300 font-bold px-3 py-1 rounded-full text-xs transition-colors duration-200 shadow-sm cursor-pointer"
            >
              Claim Offer
            </button>

            <button
              type="button"
              (click)="festiveService.dismissBanner()"
              aria-label="Dismiss banner"
              class="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    }
  `,
})
export class FestiveTickerComponent {
  public festiveService = inject(FestiveService);
  private bookingService = inject(BookingService);

  protected onClaimOffer(): void {
    this.bookingService.openModal('holiday');
  }
}
