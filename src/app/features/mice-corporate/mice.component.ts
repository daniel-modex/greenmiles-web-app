import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../core/services/booking.service';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-mice-corporate',
  imports: [RouterLink, BadgeComponent, ButtonComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-[#049DD9]">MICE & Corporate Logistics</span>
        </nav>

        <div class="glass-card rounded-3xl p-8 border border-[#049DD9]/30 space-y-4">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="blue" size="sm">
              🏢 Corporate Fleet Solutions
            </app-badge>
          </div>

          <h1 class="text-3xl sm:text-5xl font-bold font-serif text-[#0F1E13] tracking-tight">
            Corporate MICE, Conferences & <span class="text-gradient-gm italic font-normal">Industrial Visits</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Seamless transit operations for conventions, product launches, employee shuttles, and college industrial tours across Kochi, Trivandrum, Bangalore, and Chennai.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card rounded-3xl p-6 space-y-4 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-[#049DD9]/10 text-[#049DD9] flex items-center justify-center text-xl font-bold">
              🛫
            </div>
            <h3 class="text-xl font-bold text-[#0F1E13]">Airport & Venue Shuttles</h3>
            <p class="text-xs text-slate-600">Flight-synchronised pickup desks and luxury coach transfers for delegates.</p>
            <app-button variant="glass" size="sm" (btnClick)="onCorporateQuote()">Request Logistics Quote</app-button>
          </div>

          <div class="glass-card rounded-3xl p-6 space-y-4 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-[#6EBF49]/10 text-[#58a637] flex items-center justify-center text-xl font-bold">
              🚌
            </div>
            <h3 class="text-xl font-bold text-[#0F1E13]">Employee Transit Contracts</h3>
            <p class="text-xs text-slate-600">Daily corporate employee shuttles with real-time GPS tracking and speed governors.</p>
            <app-button variant="glass" size="sm" (btnClick)="onCorporateQuote()">Enquire Shuttle Tariff</app-button>
          </div>

          <div class="glass-card rounded-3xl p-6 space-y-4 border border-slate-200">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl font-bold">
              🎓
            </div>
            <h3 class="text-xl font-bold text-[#0F1E13]">College Industrial Visits (IV)</h3>
            <p class="text-xs text-slate-600">Multi-state educational tour buses with dual certified drivers and sound systems.</p>
            <app-button variant="glass" size="sm" (btnClick)="onCorporateQuote()">Plan College IV</app-button>
          </div>
        </div>

      </div>
    </main>
  `,
})
export class MiceComponent {
  private bookingService = inject(BookingService);

  protected onCorporateQuote(): void {
    this.bookingService.openModal('mice');
  }
}
