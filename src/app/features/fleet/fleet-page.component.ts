import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FleetService } from '../../core/services/fleet.service';
import { BookingService } from '../../core/services/booking.service';
import { VehicleCardComponent } from '../../shared/components/vehicle-card/vehicle-card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-fleet-page',
  imports: [RouterLink, VehicleCardComponent, BadgeComponent, ButtonComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-[#049DD9]">Fleet & Coach Catalog</span>
        </nav>

        <!-- Header -->
        <div class="glass-card rounded-3xl p-8 border border-[#049DD9]/30 space-y-4">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="blue" size="sm">
              🚌 Complete Vehicle Specification Matrix
            </app-badge>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black text-[#0F1E13] tracking-tight">
            Our Luxury Coach & <span class="text-gradient-gm">Vehicle Fleet</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Maintained to highest safety standards by Remya Travels. Featuring Volvo B11R 53-seaters, Scania 45-seaters, Force Urbania 17-seaters, VIP Tempo Travellers, and Innova Hycross SUVs.
          </p>
        </div>

        <!-- Fleet Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (v of fleetService.vehicles(); track v.id) {
            <app-vehicle-card [vehicle]="v"></app-vehicle-card>
          }
        </div>

        <!-- Comparison Table Section -->
        <div class="glass-card rounded-3xl p-8 border border-slate-200 space-y-6">
          <h2 class="text-2xl font-bold text-[#0F1E13]">
            Fleet Capacity & Amenities Comparison Matrix
          </h2>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-bold">
                  <th class="py-3 px-4">Vehicle Model</th>
                  <th class="py-3 px-4">Seats</th>
                  <th class="py-3 px-4">Suspension</th>
                  <th class="py-3 px-4">Charging</th>
                  <th class="py-3 px-4">Luggage</th>
                  <th class="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                @for (v of fleetService.vehicles(); track v.id) {
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-4 px-4 font-bold text-[#0F1E13] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-[#6EBF49]"></span>
                      {{ v.name }}
                    </td>
                    <td class="py-4 px-4 font-semibold">{{ v.capacity }} Seats</td>
                    <td class="py-4 px-4 text-slate-600">{{ v.specs.suspension }}</td>
                    <td class="py-4 px-4 text-slate-600">{{ v.specs.chargingPorts }}</td>
                    <td class="py-4 px-4 text-slate-600">{{ v.luggageCapacity }}</td>
                    <td class="py-4 px-4 text-right">
                      <app-button variant="secondary" size="sm" (btnClick)="onReserve(v)">
                        Rent Coach
                      </app-button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  `,
})
export class FleetPageComponent {
  public fleetService = inject(FleetService);
  private bookingService = inject(BookingService);

  protected onReserve(vehicle: any): void {
    this.bookingService.openModal('fleet', vehicle);
  }
}
