import { Component, inject, signal } from '@angular/core';
import { BookingService } from '../../../../core/services/booking.service';
import { FestiveService } from '../../../../core/services/festive.service';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-curated-experience-slider',
  imports: [],
  template: `
    <section class="py-24 bg-[#09140E] text-white relative overflow-hidden">
      <!-- Ambient Glow & Radial Vignette -->
      <div class="absolute inset-0 bg-radial from-[#6EBF49]/10 via-transparent to-transparent pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <!-- SECTION HEADER & INDEX COUNTER BAR -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div class="space-y-3">
            <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-[#6EBF49] block">
              02. CURATED SOUTH INDIA CIRCUITS
            </span>
            <h2 class="text-3xl sm:text-5xl font-normal font-serif text-white tracking-tight leading-tight">
              Bespoke Experiences & <span class="text-gradient-gm italic">Caravans</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 font-normal max-w-xl">
              Handpicked group itineraries with air-suspension coaches, verified resort halts, and local cultural guides.
            </p>
          </div>

          <!-- INDEX COUNTER & ARROW NAVIGATION CONTROLS -->
          <div class="flex items-center gap-6 shrink-0">
            <!-- Visual Counter Display -->
            <div class="text-sm font-mono tracking-widest text-[#A6D98F] font-bold">
              0{{ activeIndex() + 1 }} <span class="text-white/40">/ 0{{ slides.length }}</span>
            </div>

            <!-- Prev / Next Control Buttons -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                (click)="prevSlide()"
                aria-label="Previous Slide"
                class="w-12 h-12 rounded-full border border-white/20 hover:border-[#6EBF49] hover:bg-[#6EBF49]/20 flex items-center justify-center transition-all cursor-pointer text-white"
              >
                ←
              </button>
              <button
                type="button"
                (click)="nextSlide()"
                aria-label="Next Slide"
                class="w-12 h-12 rounded-full border border-white/20 hover:border-[#6EBF49] hover:bg-[#6EBF49]/20 flex items-center justify-center transition-all cursor-pointer text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <!-- SLIDER CARDS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of activeSlides(); track item.id; let idx = $index) {
            <div
              (click)="onSelectPackage(item)"
              class="group relative rounded-[2.5rem] overflow-hidden glass-snami border border-white/15 shadow-2xl transition-all duration-700 cursor-pointer h-[460px] flex flex-col justify-between snami-hover-zoom"
            >
              <!-- Background Image -->
              <div class="absolute inset-0 bg-slate-950 overflow-hidden">
                <img
                  [src]="item.image"
                  [alt]="item.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#09140E] via-[#09140E]/40 to-transparent"></div>
              </div>

              <!-- Top Badges Overlay -->
              <div class="relative z-10 p-5 flex items-center justify-between">
                <span class="bg-black/60 backdrop-blur-md text-[#A6D98F] text-[11px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                  {{ item.duration }}
                </span>
                <span class="bg-[#6EBF49] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  SAVE 15%
                </span>
              </div>

              <!-- Bottom Content Info -->
              <div class="relative z-10 p-6 space-y-3">
                <span class="text-[10px] text-[#A6D98F] font-bold uppercase tracking-[0.2em] block">
                  📍 {{ item.location }}
                </span>

                <h3 class="text-2xl font-normal font-serif text-white leading-snug group-hover:text-[#6EBF49] transition-colors">
                  {{ item.title }}
                </h3>

                <p class="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Footer Action & Pricing -->
                <div class="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span class="text-[9px] text-slate-400 uppercase tracking-wider block">Starting Tariff</span>
                    <span class="text-lg font-bold font-serif text-[#A6D98F]">₹{{ item.priceStarting.toLocaleString('en-IN') }}</span>
                  </div>

                  <span class="text-xs font-bold text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Discover →
                  </span>
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `,
})
export class CuratedExperienceSliderComponent {
  public festiveService = inject(FestiveService);
  private bookingService = inject(BookingService);

  public activeIndex = signal<number>(0);

  public slides = [
    {
      id: 'munnar-tea',
      title: 'Munnar Tea Hills & Marayoor',
      location: 'Kerala Hill Circuit',
      duration: '3D / 2N',
      priceStarting: 18500,
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
      description: 'High-deck panoramic coach tour through lush tea gardens, waterfalls, and Marayoor sandalwood forests.',
    },
    {
      id: 'sabarimala-yatra',
      title: 'Sabarimala Sacred Yatra',
      location: 'Devotional Trail',
      duration: 'Custom Yatra',
      priceStarting: 22000,
      image: 'https://images.unsplash.com/photo-1609946782701-7905f992330a?q=80&w=1200&auto=format&fit=crop',
      description: 'Air-suspension group coach transfers to Pamba with experienced devotional crew and vrat-friendly halts.',
    },
    {
      id: 'wayanad-mist',
      title: 'Wayanad Rainforest Caravan',
      location: 'Wild Western Ghats',
      duration: '2D / 1N',
      priceStarting: 14999,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      description: 'Force Urbania Royale & Tempo Traveller weekend special through Wayanad rainforests and spice estates.',
    },
    {
      id: 'coastal-kanyakumari',
      title: 'Kanyakumari Coastal Odyssey',
      location: 'Oceanic Horizon',
      duration: '4D / 3N',
      priceStarting: 26500,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      description: 'Multi-city coach tour covering Trivandrum Padmanabhaswamy Temple, Kovalam beach, and Kanyakumari sunset.',
    },
  ];

  protected activeSlides() {
    return this.slides;
  }

  protected prevSlide(): void {
    this.activeIndex.update((i) => (i === 0 ? this.slides.length - 1 : i - 1));
  }

  protected nextSlide(): void {
    this.activeIndex.update((i) => (i === this.slides.length - 1 ? 0 : i + 1));
  }

  protected onSelectPackage(pkg: any): void {
    this.bookingService.openModal('holiday', null, pkg);
  }
}
