import { Component, inject } from '@angular/core';
import { FestiveService } from '../../../../core/services/festive.service';
import { BookingService } from '../../../../core/services/booking.service';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-seasonal-deals',
  imports: [BadgeComponent, ButtonComponent],
  template: `
    <section class="py-20 bg-gradient-to-b from-[#F2F2F2] via-white to-[#F2F2F2] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2">
              <app-badge variant="amber" size="sm">
                🎉 Limited-Time Festive Specials
              </app-badge>
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-bold text-[#0F1E13] tracking-tight font-serif">
              Exclusive Seasonal Deals & <span class="text-gradient-gm italic">Curated Caravans</span>
            </h2>

            <p class="text-sm sm:text-base text-slate-600 font-normal">
              Save up to 15% on Sabarimala devotional circuits, hill-station caravans, and corporate offsite transfers.
            </p>
          </div>

          <div class="shrink-0">
            <app-button variant="outline" size="md" (btnClick)="onExploreAll()">
              View All 15+ Packages →
            </app-button>
          </div>
        </div>

        <!-- Festive Packages Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (pkg of festiveService.packages(); track pkg.id) {
            <div class="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group border border-[#6EBF49]/30">
              
              <!-- Image Banner with Tag Overlay -->
              <div class="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  [src]="pkg.image"
                  [alt]="pkg.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div class="absolute top-4 left-4">
                  <app-badge variant="mint" size="sm">
                    {{ pkg.tag }}
                  </app-badge>
                </div>

                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-xs font-semibold text-[#A6D98F] uppercase tracking-wider block">
                    📍 {{ pkg.location }}
                  </span>
                  <h3 class="text-xl font-extrabold text-white leading-snug">
                    {{ pkg.title }}
                  </h3>
                </div>
              </div>

              <!-- Body -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span class="flex items-center gap-1">
                      ⏱️ {{ pkg.duration }}
                    </span>
                    <span class="flex items-center gap-1 text-amber-500 font-bold">
                      ★ {{ pkg.rating }} ({{ pkg.reviewsCount }} reviews)
                    </span>
                  </div>

                  <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {{ pkg.description }}
                  </p>
                </div>

                <!-- Features List -->
                <div class="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  @for (feat of pkg.features; track feat) {
                    <div class="flex items-center gap-2 text-slate-700 font-medium">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#6EBF49]"></span>
                      <span>{{ feat }}</span>
                    </div>
                  }
                </div>

                <!-- Footer Action & Pricing -->
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Starts from</span>
                    <span class="text-xl font-black text-[#0F1E13]">
                      ₹{{ pkg.priceStarting.toLocaleString('en-IN') }}
                      <span class="text-xs font-normal text-slate-500">/ person</span>
                    </span>
                  </div>

                  <app-button
                    variant="primary"
                    size="sm"
                    (btnClick)="onBookPackage(pkg)"
                  >
                    Reserve Spot
                  </app-button>
                </div>

              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `,
})
export class SeasonalDealsComponent {
  public festiveService = inject(FestiveService);
  private bookingService = inject(BookingService);

  protected onBookPackage(pkg: any): void {
    this.bookingService.openModal('holiday', null, pkg);
  }

  protected onExploreAll(): void {
    this.bookingService.openModal('holiday');
  }
}
