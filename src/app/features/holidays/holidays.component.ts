import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FestiveService } from '../../core/services/festive.service';
import { BookingService } from '../../core/services/booking.service';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-holidays',
  imports: [RouterLink, BadgeComponent, ButtonComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-[#58a637]">Holiday Packages</span>
        </nav>

        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-[#6EBF49]/30 space-y-4">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="mint" size="sm">
              🏖️ South India Caravan & Package Catalog
            </app-badge>
          </div>

          <h1 class="text-3xl sm:text-5xl font-bold font-serif text-[#0F1E13] tracking-tight">
            Curated Holiday Caravans & <span class="text-gradient-gm italic font-normal">Retreats</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Experience hand-picked holiday circuits with high-deck panoramic luxury buses, verified resort partners, and local sightseeing itineraries across Kerala, Tamil Nadu, and Karnataka.
          </p>

          <!-- Category Filter Bar -->
          <div class="pt-4 flex flex-wrap gap-2">
            <button
              (click)="selectedCategory.set('all')"
              [class.bg-[#6EBF49]]="selectedCategory() === 'all'"
              [class.text-white]="selectedCategory() === 'all'"
              [class.bg-white]="selectedCategory() !== 'all'"
              class="px-4 py-2 rounded-full text-xs font-bold shadow-sm transition cursor-pointer"
            >
              All Packages
            </button>
            <button
              (click)="selectedCategory.set('south-india')"
              [class.bg-[#6EBF49]]="selectedCategory() === 'south-india'"
              [class.text-white]="selectedCategory() === 'south-india'"
              [class.bg-white]="selectedCategory() !== 'south-india'"
              class="px-4 py-2 rounded-full text-xs font-bold shadow-sm transition cursor-pointer"
            >
              Munnar & Hill Stations
            </button>
            <button
              (click)="selectedCategory.set('nature')"
              [class.bg-[#6EBF49]]="selectedCategory() === 'nature'"
              [class.text-white]="selectedCategory() === 'nature'"
              [class.bg-white]="selectedCategory() !== 'nature'"
              class="px-4 py-2 rounded-full text-xs font-bold shadow-sm transition cursor-pointer"
            >
              Wayanad Rainforest Caravans
            </button>
            <button
              (click)="selectedCategory.set('pilgrimage')"
              [class.bg-[#6EBF49]]="selectedCategory() === 'pilgrimage'"
              [class.text-white]="selectedCategory() === 'pilgrimage'"
              [class.bg-white]="selectedCategory() !== 'pilgrimage'"
              class="px-4 py-2 rounded-full text-xs font-bold shadow-sm transition cursor-pointer"
            >
              Temple & Coastal Circuits
            </button>
          </div>
        </div>

        <!-- Asymmetrical Bento Package Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (pkg of filteredPackages(); track pkg.id; let idx = $index) {
            <div
              [class.lg:col-span-2]="idx === 0"
              class="glass-card rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group border border-[#6EBF49]/30"
            >
              <!-- Card Image Banner with Ken Burns Zoom -->
              <div [class.h-72]="idx === 0" [class.h-60]="idx !== 0" class="relative w-full overflow-hidden bg-slate-900">
                <img
                  [src]="pkg.image"
                  [alt]="pkg.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                <div class="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <app-badge variant="mint" size="sm" class="shadow-sm">
                    {{ pkg.tag }}
                  </app-badge>
                  @if (idx === 0) {
                    <span class="bg-amber-400 text-[#0F1E13] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      🔥 Most Popular Circuit
                    </span>
                  }
                </div>

                <div class="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span class="text-xs font-semibold text-[#A6D98F] uppercase tracking-wider block mb-0.5">
                    📍 {{ pkg.location }}
                  </span>
                  <h3 [class.text-2xl]="idx === 0" [class.text-xl]="idx !== 0" class="font-bold font-serif text-white leading-tight">
                    {{ pkg.title }}
                  </h3>
                </div>
              </div>

              <!-- Body Details -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span class="flex items-center gap-1.5">
                      ⏱️ {{ pkg.duration }}
                    </span>
                    <span class="flex items-center gap-1 text-amber-500 font-bold">
                      ★ {{ pkg.rating }} ({{ pkg.reviewsCount }} reviews)
                    </span>
                  </div>

                  <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {{ pkg.description }}
                  </p>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">Starts from</span>
                    <span class="text-xl font-extrabold text-[#0F1E13]">
                      ₹{{ pkg.priceStarting.toLocaleString('en-IN') }}
                      <span class="text-xs font-normal text-slate-500">/ person</span>
                    </span>
                  </div>

                  <app-button
                    variant="primary"
                    size="sm"
                    (btnClick)="onReserve(pkg)"
                  >
                    Reserve Caravan
                  </app-button>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    </main>
  `,
})
export class HolidaysComponent {
  public festiveService = inject(FestiveService);
  private bookingService = inject(BookingService);

  public selectedCategory = signal<string>('all');

  protected filteredPackages() {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.festiveService.packages();
    return this.festiveService.packages().filter((p) => p.category === cat);
  }

  protected onReserve(pkg: any): void {
    this.bookingService.openModal('holiday', null, pkg);
  }
}
