import { Component, inject } from '@angular/core';
import { BookingService } from '../../../../core/services/booking.service';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-tour-circuits',
  imports: [ButtonComponent],
  template: `
    <section class="py-20 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-[#6EBF49] bg-[#6EBF49]/10 px-3.5 py-1.5 rounded-full border border-[#6EBF49]/30 inline-block">
            05. BESPOKE CHARTER & LOGISTICS
          </span>

          <h2 class="text-3xl sm:text-5xl font-normal text-[#09140E] tracking-tight font-serif">
            Tailored Services for <span class="text-gradient-gm italic">Every Destination</span>
          </h2>

          <p class="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Tailored transportation services for sacred pilgrimage Yatras, corporate conventions, school industrial tours, and eco-luxury family retreats.
          </p>
        </div>

        <!-- 3 Feature Columns -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Circuit 1: Pilgrimage Yatra -->
          <div class="glass-card rounded-3xl p-8 border border-[#6EBF49]/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl font-bold">
                🛕
              </div>

              <h3 class="text-2xl font-bold text-[#0F1E13]">
                Sacred Pilgrimage Yatras
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed">
                Dedicated Sabarimala, Guruvayur, Chottanikkara, Palani, and Rameswaram group coach rentals with experienced devotional drivers accustomed to hill routes.
              </p>

              <ul class="space-y-2 text-xs font-semibold text-slate-700">
                <li class="flex items-center gap-2">✓ Pure veg meal stops pre-scouted</li>
                <li class="flex items-center gap-2">✓ Pamba transfer coordination</li>
                <li class="flex items-center gap-2">✓ Air suspension hill-grade safety</li>
              </ul>
            </div>

            <app-button variant="primary" size="md" (btnClick)="onExplore('pilgrimage')">
              Plan Pilgrimage Yatra →
            </app-button>
          </div>

          <!-- Circuit 2: Corporate MICE -->
          <div class="glass-card rounded-3xl p-8 border border-[#049DD9]/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-[#049DD9]/10 text-[#049DD9] flex items-center justify-center text-2xl font-bold">
                🏢
              </div>

              <h3 class="text-2xl font-bold text-[#0F1E13]">
                Corporate MICE & Offsites
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed">
                End-to-end event fleet management for corporate conferences, employee shuttles, venue transfers, and executive VIP delegations across Kochi & Bangalore.
              </p>

              <ul class="space-y-2 text-xs font-semibold text-slate-700">
                <li class="flex items-center gap-2">✓ Live GPS fleet dashboard tracking</li>
                <li class="flex items-center gap-2">✓ Branded bus wrap & liaison desks</li>
                <li class="flex items-center gap-2">✓ Dedicated standby breakdown bus</li>
              </ul>
            </div>

            <app-button variant="secondary" size="md" (btnClick)="onExplore('mice')">
              Get Corporate Proposal →
            </app-button>
          </div>

          <!-- Circuit 3: Educational IV & Holiday -->
          <div class="glass-card rounded-3xl p-8 border border-[#A6D98F]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-[#6EBF49]/10 text-[#58a637] flex items-center justify-center text-2xl font-bold">
                🎓
              </div>

              <h3 class="text-2xl font-bold text-[#0F1E13]">
                Educational IVs & Caravans
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed">
                School and college Industrial Visits (IV) across Bangalore, Mysore, Munnar, and Goa with strict safety governors, dual drivers, and insurance coverage.
              </p>

              <ul class="space-y-2 text-xs font-semibold text-slate-700">
                <li class="flex items-center gap-2">✓ Speed limited at 80 km/h for safety</li>
                <li class="flex items-center gap-2">✓ Student safety verified crew</li>
                <li class="flex items-center gap-2">✓ Sound system & DJ floor option</li>
              </ul>
            </div>

            <app-button variant="glass" size="md" (btnClick)="onExplore('holiday')">
              Plan Industrial Visit →
            </app-button>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class TourCircuitsComponent {
  private bookingService = inject(BookingService);

  protected onExplore(type: any): void {
    this.bookingService.openModal(type);
  }
}
