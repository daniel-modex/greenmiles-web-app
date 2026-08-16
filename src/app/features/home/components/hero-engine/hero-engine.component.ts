import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService, TripType } from '../../../../core/services/booking.service';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';

interface HeroCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  price: string;
  duration: string;
}

@Component({
  selector: 'app-hero-engine',
  imports: [FormsModule, ButtonComponent],
  template: `
    <section class="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden bg-gradient-to-b from-[#F2F2F2] via-white to-[#F2F2F2]">
      <!-- Ambient Glow Spotlights -->
      <div class="ambient-glow-green -top-24 -left-24 opacity-60"></div>
      <div class="ambient-glow-blue top-1/4 -right-24 opacity-50"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        <!-- VITA DUAL EDITORIAL LAYOUT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          <!-- LEFT COLUMN: Snami Editorial Typography & Moodboard Badges -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Overline micro-label -->
            <div class="inline-flex items-center gap-2">
              <span class="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#6EBF49] bg-[#6EBF49]/10 px-3.5 py-1.5 rounded-full border border-[#6EBF49]/30">
                01. BESPOKE TRAVEL & FLEET CONCIERGE
              </span>
            </div>

            <!-- Serif Editorial Headline -->
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#09140E] leading-[1.08] font-serif">
              Experience Journeys <br />
              Designed for the <br />
              <span class="text-gradient-gm italic font-serif">Discerning Traveler.</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              South India’s premier fleet of multi-axle luxury coaches, Force Urbanias, and curated holiday caravans. Certified chauffeurs, air-suspension ride, and 24/7 highway support.
            </p>

            <!-- Curated Destination Moodboard Badges -->
            <div class="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
              <span class="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-[#6EBF49] transition-all">
                🌿 Eco-Certified Fleets
              </span>
              <span class="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-[#049DD9] transition-all">
                🛕 Curated Pilgrimage Trails
              </span>
              <span class="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-amber-400 transition-all">
                👥 Custom Group Caravans
              </span>
            </div>

            <!-- Trust Indicator Pills -->
            <div class="flex items-center gap-6 pt-2 text-xs font-semibold text-slate-500">
              <div class="flex items-center gap-2">
                <span class="text-[#6EBF49] text-base">✓</span>
                <span>Speed Governor 80km/h</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#049DD9] text-base">✓</span>
                <span>Air-Suspension Ride</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-amber-500 text-base">★</span>
                <span>4.9 Star Verified Rating</span>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Vita-Style Stacked Interactive Preview Cards -->
          <div class="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[460px]">
            
            <div class="relative w-full max-w-md">
              @for (card of cards; track card.id; let idx = $index) {
                <div
                  (click)="setActiveCard(idx)"
                  [class.scale-100]="activeCardIdx() === idx"
                  [class.opacity-100]="activeCardIdx() === idx"
                  [class.z-30]="activeCardIdx() === idx"
                  [class.shadow-2xl]="activeCardIdx() === idx"
                  [class.translate-y-0]="activeCardIdx() === idx"
                  [class.scale-95]="activeCardIdx() !== idx"
                  [class.opacity-70]="activeCardIdx() !== idx"
                  [class.z-10]="activeCardIdx() !== idx"
                  [class.translate-y-4]="activeCardIdx() !== idx && idx > activeCardIdx()"
                  [class.-translate-y-4]="activeCardIdx() !== idx && idx < activeCardIdx()"
                  class="absolute inset-0 rounded-3xl overflow-hidden border border-[#6EBF49]/30 transition-all duration-500 ease-out cursor-pointer group bg-slate-900 h-[380px] sm:h-[420px]"
                >
                  <!-- Background Image -->
                  <img
                    [src]="card.image"
                    [alt]="card.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  <!-- Floating Top Badge -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span class="bg-black/60 backdrop-blur-md text-[#A6D98F] text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                      {{ card.badge }}
                    </span>
                    <span class="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {{ card.duration }}
                    </span>
                  </div>

                  <!-- Bottom Card Details -->
                  <div class="absolute bottom-6 left-6 right-6 text-white z-20 space-y-1">
                    <span class="text-xs font-medium text-slate-300 uppercase tracking-widest block">
                      {{ card.subtitle }}
                    </span>
                    <h3 class="text-2xl font-bold font-serif text-white tracking-tight">
                      {{ card.title }}
                    </h3>
                    <div class="flex items-center justify-between pt-2 border-t border-white/20 mt-3">
                      <div>
                        <span class="text-[10px] text-slate-300 uppercase block font-semibold">Starting Tariff</span>
                        <span class="text-lg font-extrabold text-[#A6D98F]">{{ card.price }}</span>
                      </div>
                      <span class="text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                        Explore Route →
                      </span>
                    </div>
                  </div>
                </div>
              }
            </div>

            <!-- Card Stack Indicator Dots -->
            <div class="absolute -bottom-8 flex items-center gap-2">
              @for (c of cards; track c.id; let idx = $index) {
                <button
                  type="button"
                  (click)="setActiveCard(idx)"
                  [class.w-8]="activeCardIdx() === idx"
                  [class.bg-[#6EBF49]]="activeCardIdx() === idx"
                  [class.w-2]="activeCardIdx() !== idx"
                  [class.bg-slate-300]="activeCardIdx() !== idx"
                  class="h-2 rounded-full transition-all duration-300 cursor-pointer"
                  [attr.aria-label]="'Go to card ' + (idx + 1)"
                ></button>
              }
            </div>

          </div>

        </div>

        <!-- EMBEDDED FLOATING GLASS SEARCH BAR DOCKED AT BOTTOM -->
        <div class="mt-10 max-w-5xl mx-auto glass-modal rounded-[2.5rem] p-5 sm:p-7 shadow-2xl relative border border-[#6EBF49]/30">
          
          <!-- Category Selector Tabs -->
          <div class="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6 overflow-x-auto gap-2">
            <div class="flex items-center gap-2">
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
                [class.text-slate-700]="activeTab() !== 'fleet'"
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

            <span class="hidden sm:inline-block text-xs font-semibold text-[#6EBF49] bg-[#D6F2C9] px-3 py-1 rounded-full">
              ⚡ Instant Fare Calculator
            </span>
          </div>

          <!-- Input Fields Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <!-- Field 1: Source / Pickup -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200 hover:border-[#6EBF49] focus-within:border-[#6EBF49] transition-colors">
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                📍 Pickup Point
              </label>
              <input
                type="text"
                [(ngModel)]="pickup"
                placeholder="e.g. Kochi / Ernakulam"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none placeholder:text-slate-400"
              />
            </div>

            <!-- Field 2: Destination / Circuit -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200 hover:border-[#6EBF49] focus-within:border-[#6EBF49] transition-colors">
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                ⛰️ Destination / Circuit
              </label>
              <input
                type="text"
                [(ngModel)]="destination"
                placeholder="e.g. Munnar / Sabarimala"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none placeholder:text-slate-400"
              />
            </div>

            <!-- Field 3: Travel Date -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200 hover:border-[#6EBF49] focus-within:border-[#6EBF49] transition-colors">
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                📅 Travel Date
              </label>
              <input
                type="date"
                [(ngModel)]="travelDate"
                class="w-full bg-transparent font-semibold text-sm text-[#0F1E13] outline-none"
              />
            </div>

            <!-- Field 4: Group Size / Coach -->
            <div class="bg-white/90 p-3.5 rounded-2xl border border-slate-200 hover:border-[#6EBF49] focus-within:border-[#6EBF49] transition-colors">
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                👥 Group Size / Vehicle
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

          <!-- Action Bar -->
          <div class="mt-6 flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-slate-200/60">
            <div class="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <span class="w-2 h-2 rounded-full bg-[#6EBF49]"></span>
              Seasonal discounts applied automatically • Direct driver dispatch.
            </div>

            <app-button
              variant="primary"
              size="lg"
              (btnClick)="onSearchJourneys()"
              class="w-full sm:w-auto"
            >
              <span>🔍</span> Search & Check Availability
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
  public activeCardIdx = signal<number>(0);

  public pickup = 'Kochi / Ernakulam';
  public destination = 'Munnar';
  public travelDate = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
  public passengerOption = '17';

  public cards: HeroCard[] = [
    {
      id: 'munnar',
      title: 'Munnar Tea Hills & Marayoor',
      subtitle: 'Premium Hill Caravan',
      badge: '🏖️ Holiday Escape',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
      price: '₹18,500 / trip',
      duration: '3D / 2N',
    },
    {
      id: 'sabarimala',
      title: 'Sabarimala Sacred Yatra',
      subtitle: 'Devotional Group Coach',
      badge: '🛕 Pilgrimage Circuit',
      image: 'https://images.unsplash.com/photo-1609946782701-7905f992330a?q=80&w=1200&auto=format&fit=crop',
      price: '₹22,000 / trip',
      duration: 'Custom Yatra',
    },
    {
      id: 'wayanad',
      title: 'Wayanad Rainforest Retreat',
      subtitle: 'Force Urbania Special',
      badge: '🌿 Monsoon Caravan',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      price: '₹14,999 / trip',
      duration: '2D / 1N',
    },
    {
      id: 'volvo',
      title: 'Volvo B11R Multi-Axle',
      subtitle: '53-Seater Air Suspension',
      badge: '🚌 Flagship Coach',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      price: '₹68 / km',
      duration: '45–53 Seats',
    },
  ];

  protected setActiveCard(idx: number): void {
    this.activeCardIdx.set(idx);
  }

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

