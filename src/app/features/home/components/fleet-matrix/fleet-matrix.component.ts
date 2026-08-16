import { Component, inject } from '@angular/core';
import { FleetService } from '../../../../core/services/fleet.service';
import { VehicleCardComponent } from '../../../../shared/components/vehicle-card/vehicle-card.component';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';

@Component({
  selector: 'app-fleet-matrix',
  imports: [VehicleCardComponent, BadgeComponent],
  template: `
    <section class="py-20 bg-[#F2F2F2] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="blue" size="sm">
              🚌 Fleet Specifications & Standards
            </app-badge>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black text-[#0F1E13] tracking-tight">
            Explore the <span class="text-gradient-gm">Greenmiles Fleet Matrix</span>
          </h2>

          <p class="text-sm sm:text-base text-slate-600">
            From 53-seater multi-axle air-suspension coaches to 7-seater Ottoman luxury SUVs, find the exact capacity for your trip.
          </p>
        </div>

        <!-- Filter Chips Bar -->
        <div class="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            type="button"
            (click)="fleetService.setCategory('all')"
            [class.bg-[#0F1E13]]="fleetService.selectedCategory() === 'all'"
            [class.text-white]="fleetService.selectedCategory() === 'all'"
            [class.shadow-md]="fleetService.selectedCategory() === 'all'"
            [class.bg-white]="fleetService.selectedCategory() !== 'all'"
            [class.text-slate-700]="fleetService.selectedCategory() !== 'all'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-200 transition-all shrink-0 cursor-pointer"
          >
            All Fleet Vehicles
          </button>

          <button
            type="button"
            (click)="fleetService.setCategory('luxury-coach')"
            [class.bg-[#0F1E13]]="fleetService.selectedCategory() === 'luxury-coach'"
            [class.text-white]="fleetService.selectedCategory() === 'luxury-coach'"
            [class.shadow-md]="fleetService.selectedCategory() === 'luxury-coach'"
            [class.bg-white]="fleetService.selectedCategory() !== 'luxury-coach'"
            [class.text-slate-700]="fleetService.selectedCategory() !== 'luxury-coach'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-200 transition-all shrink-0 cursor-pointer"
          >
            Luxury Coaches (35–53 Seats)
          </button>

          <button
            type="button"
            (click)="fleetService.setCategory('urbania')"
            [class.bg-[#0F1E13]]="fleetService.selectedCategory() === 'urbania'"
            [class.text-white]="fleetService.selectedCategory() === 'urbania'"
            [class.shadow-md]="fleetService.selectedCategory() === 'urbania'"
            [class.bg-white]="fleetService.selectedCategory() !== 'urbania'"
            [class.text-slate-700]="fleetService.selectedCategory() !== 'urbania'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-200 transition-all shrink-0 cursor-pointer"
          >
            Force Urbania Royale (17 Seats)
          </button>

          <button
            type="button"
            (click)="fleetService.setCategory('tempo')"
            [class.bg-[#0F1E13]]="fleetService.selectedCategory() === 'tempo'"
            [class.text-white]="fleetService.selectedCategory() === 'tempo'"
            [class.shadow-md]="fleetService.selectedCategory() === 'tempo'"
            [class.bg-white]="fleetService.selectedCategory() !== 'tempo'"
            [class.text-slate-700]="fleetService.selectedCategory() !== 'tempo'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-200 transition-all shrink-0 cursor-pointer"
          >
            Tempo Traveller (12–26 Seats)
          </button>

          <button
            type="button"
            (click)="fleetService.setCategory('suv')"
            [class.bg-[#0F1E13]]="fleetService.selectedCategory() === 'suv'"
            [class.text-white]="fleetService.selectedCategory() === 'suv'"
            [class.shadow-md]="fleetService.selectedCategory() === 'suv'"
            [class.bg-white]="fleetService.selectedCategory() !== 'suv'"
            [class.text-slate-700]="fleetService.selectedCategory() !== 'suv'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-200 transition-all shrink-0 cursor-pointer"
          >
            Premium SUVs (Innova Hycross)
          </button>
        </div>

        <!-- Vehicle Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (v of fleetService.filteredVehicles(); track v.id) {
            <app-vehicle-card [vehicle]="v"></app-vehicle-card>
          }
        </div>

      </div>
    </section>
  `,
})
export class FleetMatrixComponent {
  public fleetService = inject(FleetService);
}
