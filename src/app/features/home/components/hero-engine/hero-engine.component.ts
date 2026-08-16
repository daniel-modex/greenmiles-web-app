import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService, TripType } from '../../../../core/services/booking.service';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';

@Component({
  selector: 'app-hero-engine',
  imports: [FormsModule, ButtonComponent, BadgeComponent],
  template: `
    <section class="relative min-h-[85vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
      <!-- Background Dynamic Glow & Gradients -->
      <div class="ambient-glow-green -top-20 -left-20"></div>
      <div class="ambient-glow-blue top-1/3 -right-20"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div class="text-center max-w-4xl mx-auto space-y-6">
          
          <!-- Seasonal Tag Badge -->
          <div class="inline-flex items-center gap-2">
            <app-badge variant="mint" size="md">
              <span class="w-2 h-2 rounded-full bg-[#6EBF49] animate-ping"></span>
              Remya Travels Operational Excellence • 2026 Fleet
            </app-badge>
          </div>

          <!-- Main Hero Headline -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F1E13] leading-[1.08]">
            Journey Beyond Boundaries in <br class="hidden sm:inline" />
            <span class="text-gradient-gm">Pure Comfort & Eco-Luxury</span>
          </h1>

          <!-- Subheading -->
          <p class="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            South India’s premier fleet of multi-axle luxury coaches, Force Urbanias, and curated holiday caravans. Verified professional chauffeurs, air-suspension ride, and 24/7 highway support.
          </p>

          <!-- Key Highlights Badges -->
          <div class="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <span class="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              🛡️ Speed-Governor & GPS Verified
            </span>
            <span class="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              💺 Pushback Calf-Rest Seats
            </span>
            <span class="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              ⚡ USB-C Fast Charging at Every Seat
            </span>
          </div>

        </div>

        <!-- Hybrid Booking Search Engine Bar Widget -->
        <div class="mt-12 max-w-5xl mx-auto glass-card rounded-3xl p-4 sm:p-6 shadow-2xl relative">
          
          <!-- Tabs -->
          <div class="flex items-center gap-2 border-b border-slate-200/80 pb-4 mb-6 overflow-x-auto">
            <button
              type="button"
              (click)="activeTab.set('holiday')"
              [class.bg-[#6EBF49]]="activeTab() === 'holiday'"
              [class.text-white]="activeTab() === 'holiday'"
              [class.shadow-md]="activeTab() === 'holiday'"
              [class.bg-slate-100]="activeTab() !== 'holiday'"
              [class.text-slate-700]="activeTab() !== 'holiday'"
              class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>🏖️</span> Holiday Packages
            </button>

            <button
              type="button"
              (click)="activeTab.set('fleet')"
              [class.bg-[#049DD9]]="activeTab() === 'fleet'"
              [class.text-white]="activeTab() === 'fleet'"
              [class.shadow-md]="activeTab() === 'fleet'"
              [class.bg-slate-100]="activeTab() !== 'fleet'"
              [class.text-slate-[#0F1E13]]="activeTab() !== 'fleet'"
              class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>🚌</span> Bus & Fleet Rental
            </button>

            <button
              type="button"
              (click)="activeTab.set('pilgrimage')"
              [class.bg-amber-500]="activeTab() === 'pilgrimage'"
              [class.text-white]="activeTab() === 'pilgrimage'"
              [class.shadow-md]="activeTab() === 'pilgrimage'"
              [class.bg-slate-100]="activeTab() !== 'pilgrimage'"
              [class.text-slate-700]="activeTab() !== 'pilgrimage'"
              class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>🛕</span> Pilgrimage Special
            </button>
          </div>

          <!-- Input Fields Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <!-- Field 1: Source / Pickup -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 hover:border-[#6EBF49] transition-colors">
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                📍 Pickup Point
              </label>
              <input
                type="text"
                [(ngModel)]="pickup"
                placeholder="e.g. Kochi / Bangalore"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none placeholder:text-slate-400"
              />
            </div>

            <!-- Field 2: Destination / Circuit -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 hover:border-[#6EBF49] transition-colors">
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                ⛰️ Destination / Route
              </label>
              <input
                type="text"
                [(ngModel)]="destination"
                placeholder="e.g. Munnar / Sabarimala"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none placeholder:text-slate-400"
              />
            </div>

            <!-- Field 3: Travel Date -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 hover:border-[#6EBF49] transition-colors">
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                📅 Travel Date
              </label>
              <input
                type="date"
                [(ngModel)]="travelDate"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none"
              />
            </div>

            <!-- Field 4: Passengers / Vehicle -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 hover:border-[#6EBF49] transition-colors">
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                👥 Group Size / Coach
              </label>
              <select
                [(ngModel)]="passengerOption"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none cursor-pointer"
              >
                <option value="12">10–12 Guests (Tempo / SUV)</option>
                <option value="17">14–17 Guests (Force Urbania)</option>
                <option value="26">18–26 Guests (Tempo Traveller)</option>
                <option value="45">35–45 Guests (Scania Executive)</option>
                <option value="53">46–53 Guests (Volvo Multi-Axle)</option>
              </select>
            </div>

          </div>

          <!-- Submit Button -->
          <div class="mt-6 flex items-center justify-between flex-wrap gap-4 pt-2">
            <div class="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <span class="w-2 h-2 rounded-full bg-[#6EBF49]"></span>
              Instant quote calculated with real-time seasonal discount (15% OFF).
            </div>

            <app-button
              variant="primary"
              size="lg"
              (btnClick)="onSearchJourneys()"
              class="w-full sm:w-auto"
            >
              <span>🔍</span> Search & Reserve Journeys
            </app-button>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class HeroEngineComponent {
  private bookingService = inject(BookingService);

  public activeTab = signal<TripType>('holiday');
  public pickup = 'Kochi / Ernakulam';
  public destination = 'Munnar';
  public travelDate = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
  public passengerOption = '17';

  protected onSearchJourneys(): void {
    this.bookingService.updateSearch({
      pickup: this.pickup,
      destination: this.destination,
      date: this.travelDate,
      passengers: parseInt(this.passengerOption, 10),
      category: this.activeTab(),
    });
    this.bookingService.openModal(this.activeTab());
  }
}
