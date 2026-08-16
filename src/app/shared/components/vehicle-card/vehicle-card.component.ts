import { Component, input, inject, signal } from '@angular/core';
import { Vehicle } from '../../../core/models/vehicle.model';
import { BookingService } from '../../../core/services/booking.service';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-vehicle-card',
  imports: [BadgeComponent, ButtonComponent],
  template: `
    <div
      class="group relative bg-white/90 backdrop-blur-md rounded-3xl border border-[#6EBF49]/20 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full transform-gpu"
      (mousemove)="onMouseMove($event)"
      (mouseleave)="onMouseLeave()"
      [style.transform]="cardTransform()"
    >
      <!-- Popular Badge Overlay -->
      @if (vehicle().isPopular) {
        <div class="absolute top-4 left-4 z-10">
          <app-badge variant="mint" size="sm">
            ⭐ Most Requested Coach
          </app-badge>
        </div>
      }

      <!-- Capacity Pill -->
      <div class="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
        <span>👥</span>
        <span>{{ vehicle().capacity }} Seats</span>
      </div>

      <!-- Vehicle Image Header -->
      <div class="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          [src]="vehicle().image"
          [alt]="vehicle().name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <span class="text-xs uppercase font-bold tracking-widest text-[#A6D98F] block mb-0.5">
            {{ vehicle().categoryLabel }}
          </span>
          <h3 class="text-xl font-extrabold text-white leading-tight">
            {{ vehicle().name }}
          </h3>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {{ vehicle().description }}
        </p>

        <!-- Spec Pills Grid -->
        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-[#049DD9]">❄️</span>
            <span class="truncate">{{ vehicle().acType }}</span>
          </div>
          
          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-[#6EBF49]">💺</span>
            <span class="truncate">{{ vehicle().seatType }}</span>
          </div>

          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-amber-500">🧳</span>
            <span class="truncate">{{ vehicle().luggageCapacity }}</span>
          </div>

          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-purple-500">🛡️</span>
            <span class="truncate">Live GPS Tracked</span>
          </div>
        </div>

        <!-- Amenities Chips -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          @for (amenity of vehicle().amenities.slice(0, 3); track amenity) {
            <span class="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] text-slate-600 font-medium">
              ✓ {{ amenity }}
            </span>
          }
        </div>

        <!-- Footer Action & Rate -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
          <div>
            <span class="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">Indicative Rate</span>
            <span class="text-lg font-black text-[#0F1E13]">
              ₹{{ vehicle().ratePerKm }} <span class="text-xs font-normal text-slate-500">/ km</span>
            </span>
          </div>

          <app-button
            variant="secondary"
            size="sm"
            (btnClick)="onReserveVehicle()"
          >
            Check Availability
          </app-button>
        </div>

      </div>
    </div>
  `,
})
export class VehicleCardComponent {
  public vehicle = input.required<Vehicle>();
  private bookingService = inject(BookingService);

  public cardTransform = signal<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  protected onMouseMove(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    this.cardTransform.set(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`);
  }

  protected onMouseLeave(): void {
    this.cardTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  }

  protected onReserveVehicle(): void {
    this.bookingService.openModal('fleet', this.vehicle());
  }
}
