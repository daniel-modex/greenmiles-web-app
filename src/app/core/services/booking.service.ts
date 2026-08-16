import { Injectable, signal, computed } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HolidayPackage } from '../models/package.model';

export type TripType = 'holiday' | 'fleet' | 'pilgrimage' | 'mice';

export interface SearchCriteria {
  pickup: string;
  destination: string;
  date: string;
  passengers: number;
  category: TripType;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengerCount: number;
  tripType: TripType;
  vehiclePreference?: string;
  packagePreference?: string;
  specialRequests?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  public readonly isModalOpen = signal<boolean>(false);
  public readonly selectedTripType = signal<TripType>('holiday');
  public readonly selectedVehicleForQuote = signal<Vehicle | null>(null);
  public readonly selectedPackageForQuote = signal<HolidayPackage | null>(null);
  public readonly bookingSubmitted = signal<boolean>(false);
  public readonly lastSubmittedData = signal<BookingFormData | null>(null);

  public readonly searchCriteria = signal<SearchCriteria>({
    pickup: 'Kochi / Ernakulam',
    destination: 'Munnar',
    date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    passengers: 12,
    category: 'holiday',
  });

  public readonly activeContextTitle = computed(() => {
    const v = this.selectedVehicleForQuote();
    if (v) return `Quote for ${v.name} (${v.categoryLabel})`;
    const p = this.selectedPackageForQuote();
    if (p) return `Booking for ${p.title}`;
    switch (this.selectedTripType()) {
      case 'fleet': return 'Bus & Vehicle Rental Enquiry';
      case 'pilgrimage': return 'Pilgrimage Circuit Booking';
      case 'mice': return 'Corporate Transit & MICE Logistics';
      default: return 'Holiday Package Trip Planner';
    }
  });

  public openModal(
    type: TripType = 'holiday',
    vehicle: Vehicle | null = null,
    pkg: HolidayPackage | null = null
  ): void {
    this.selectedTripType.set(type);
    this.selectedVehicleForQuote.set(vehicle);
    this.selectedPackageForQuote.set(pkg);
    this.bookingSubmitted.set(false);
    this.isModalOpen.set(true);
  }

  public closeModal(): void {
    this.isModalOpen.set(false);
  }

  public updateSearch(criteria: Partial<SearchCriteria>): void {
    this.searchCriteria.update((prev) => ({ ...prev, ...criteria }));
  }

  public generateWhatsAppMessage(data: BookingFormData): string {
    const text = `*NEW GREENMILES ENQUIRY* 🚐✨
--------------------------------
*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Trip Type:* ${data.tripType.toUpperCase()}
*Pickup:* ${data.pickupLocation}
*Destination:* ${data.destination}
*Travel Date:* ${data.travelDate}
*Passengers:* ${data.passengerCount}
${data.vehiclePreference ? `*Vehicle:* ${data.vehiclePreference}\n` : ''}${data.packagePreference ? `*Package:* ${data.packagePreference}\n` : ''}${data.specialRequests ? `*Notes:* ${data.specialRequests}\n` : ''}--------------------------------
_Sent via Greenmiles Web App_`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/919847000000?text=${encoded}`;
  }

  public submitBooking(data: BookingFormData): void {
    this.lastSubmittedData.set(data);
    this.bookingSubmitted.set(true);
  }
}
