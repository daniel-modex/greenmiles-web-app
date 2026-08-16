import { Component, inject, signal, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService, BookingFormData, TripType } from '../../../core/services/booking.service';
import { ButtonComponent } from '../../ui/button/button.component';
import { BadgeComponent } from '../../ui/badge/badge.component';

@Component({
  selector: 'app-booking-modal',
  imports: [FormsModule, ButtonComponent, BadgeComponent],
  template: `
    @if (bookingService.isModalOpen()) {
      <!-- Backdrop -->
      <div
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        (click)="onBackdropClick($event)"
      >
        <!-- Modal Card -->
        <div
          class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#6EBF49]/30 overflow-hidden my-8 glass-modal"
          (click)="$event.stopPropagation()"
        >
          <!-- Header Banner -->
          <div class="bg-gradient-to-r from-[#0F1E13] via-[#049DD9] to-[#6EBF49] p-6 text-white relative">
            <button
              type="button"
              (click)="bookingService.closeModal()"
              aria-label="Close modal"
              class="absolute top-5 right-5 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors cursor-pointer"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div class="flex items-center gap-2 mb-2">
              <app-badge variant="mint" size="sm">
                Instant Fare Estimate & Concierge Booking
              </app-badge>
            </div>
            
            <h2 class="text-2xl font-bold text-white tracking-tight">
              {{ bookingService.activeContextTitle() }}
            </h2>
            <p class="text-xs sm:text-sm text-white/80 mt-1">
              Select your requirements below. Receive an instant quote via WhatsApp or email callback.
            </p>
          </div>

          <!-- Body Content -->
          <div class="p-6 sm:p-8 space-y-6">
            @if (bookingService.bookingSubmitted()) {
              <!-- Success Feedback View -->
              <div class="text-center py-8 space-y-4">
                <div class="w-16 h-16 bg-[#6EBF49]/20 text-[#6EBF49] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-[#0F1E13]">Enquiry Received!</h3>
                <p class="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{{ formData().fullName }}</strong>. Our trip concierge has logged your request for <strong>{{ formData().destination }}</strong>. We will contact you at <strong>{{ formData().phone }}</strong> shortly.
                </p>

                <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    [href]="getWhatsAppUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all duration-200"
                  >
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z"/>
                    </svg>
                    Continue on WhatsApp Now
                  </a>

                  <app-button variant="glass" (btnClick)="bookingService.closeModal()">
                    Close Dialog
                  </app-button>
                </div>
              </div>
            } @else {
              <!-- Form View -->

              <!-- Trip Type Selector Tabs -->
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Trip Service</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-100 p-1.5 rounded-2xl">
                  <button
                    type="button"
                    (click)="setTripType('holiday')"
                    [class.bg-white]="bookingService.selectedTripType() === 'holiday'"
                    [class.text-[#0F1E13]]="bookingService.selectedTripType() === 'holiday'"
                    [class.shadow-sm]="bookingService.selectedTripType() === 'holiday'"
                    [class.font-bold]="bookingService.selectedTripType() === 'holiday'"
                    class="py-2 px-3 rounded-xl text-xs sm:text-sm font-medium text-slate-600 transition-all cursor-pointer"
                  >
                    🏖️ Holiday
                  </button>

                  <button
                    type="button"
                    (click)="setTripType('fleet')"
                    [class.bg-white]="bookingService.selectedTripType() === 'fleet'"
                    [class.text-[#0F1E13]]="bookingService.selectedTripType() === 'fleet'"
                    [class.shadow-sm]="bookingService.selectedTripType() === 'fleet'"
                    [class.font-bold]="bookingService.selectedTripType() === 'fleet'"
                    class="py-2 px-3 rounded-xl text-xs sm:text-sm font-medium text-slate-600 transition-all cursor-pointer"
                  >
                    🚌 Bus Rental
                  </button>

                  <button
                    type="button"
                    (click)="setTripType('pilgrimage')"
                    [class.bg-white]="bookingService.selectedTripType() === 'pilgrimage'"
                    [class.text-[#0F1E13]]="bookingService.selectedTripType() === 'pilgrimage'"
                    [class.shadow-sm]="bookingService.selectedTripType() === 'pilgrimage'"
                    [class.font-bold]="bookingService.selectedTripType() === 'pilgrimage'"
                    class="py-2 px-3 rounded-xl text-xs sm:text-sm font-medium text-slate-600 transition-all cursor-pointer"
                  >
                    🛕 Pilgrimage
                  </button>

                  <button
                    type="button"
                    (click)="setTripType('mice')"
                    [class.bg-white]="bookingService.selectedTripType() === 'mice'"
                    [class.text-[#0F1E13]]="bookingService.selectedTripType() === 'mice'"
                    [class.shadow-sm]="bookingService.selectedTripType() === 'mice'"
                    [class.font-bold]="bookingService.selectedTripType() === 'mice'"
                    class="py-2 px-3 rounded-xl text-xs sm:text-sm font-medium text-slate-600 transition-all cursor-pointer"
                  >
                    🏢 Corporate MICE
                  </button>
                </div>
              </div>

              <!-- Main Inputs Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Full Name -->
                <div>
                  <label for="fullName" class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    [(ngModel)]="formData().fullName"
                    placeholder="e.g. Daniel Thomas"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>

                <!-- Phone / WhatsApp -->
                <div>
                  <label for="phone" class="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    [(ngModel)]="formData().phone"
                    placeholder="+91 98470 00000"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>

                <!-- Pickup Location -->
                <div>
                  <label for="pickupLocation" class="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
                  <input
                    id="pickupLocation"
                    type="text"
                    [(ngModel)]="formData().pickupLocation"
                    placeholder="e.g. Ernakulam Railway Station"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>

                <!-- Destination -->
                <div>
                  <label for="destination" class="block text-xs font-semibold text-slate-700 mb-1">Destination / Circuit</label>
                  <input
                    id="destination"
                    type="text"
                    [(ngModel)]="formData().destination"
                    placeholder="e.g. Munnar / Sabarimala / Bangalore"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>

                <!-- Travel Date -->
                <div>
                  <label for="travelDate" class="block text-xs font-semibold text-slate-700 mb-1">Travel Date *</label>
                  <input
                    id="travelDate"
                    type="date"
                    [(ngModel)]="formData().travelDate"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>

                <!-- Passenger Count -->
                <div>
                  <label for="passengerCount" class="block text-xs font-semibold text-slate-700 mb-1">Passengers / Guests</label>
                  <input
                    id="passengerCount"
                    type="number"
                    min="1"
                    max="200"
                    [(ngModel)]="formData().passengerCount"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                  />
                </div>
              </div>

              <!-- Special Requests / Notes -->
              <div>
                <label for="specialRequests" class="block text-xs font-semibold text-slate-700 mb-1">Special Requirements (Optional)</label>
                <textarea
                  id="specialRequests"
                  rows="2"
                  [(ngModel)]="formData().specialRequests"
                  placeholder="Mention coach type preference, AC requirement, or specific itinerary notes..."
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#6EBF49] focus:ring-2 focus:ring-[#6EBF49]/20 text-sm bg-white outline-none transition"
                ></textarea>
              </div>

              <!-- Submit Actions -->
              <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p class="text-xs text-slate-500 flex items-center gap-1">
                  <svg class="w-4 h-4 text-[#6EBF49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Zero Spam. Direct Driver & Concierge Dispatch.
                </p>

                <div class="flex items-center gap-2 w-full sm:w-auto">
                  <app-button
                    variant="glass"
                    size="md"
                    (btnClick)="bookingService.closeModal()"
                  >
                    Cancel
                  </app-button>

                  <app-button
                    variant="primary"
                    size="md"
                    (btnClick)="onSubmitForm()"
                  >
                    Submit Booking Request
                  </app-button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class BookingModalComponent {
  public bookingService = inject(BookingService);

  public formData = signal<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: 'Kochi / Ernakulam',
    destination: 'Munnar',
    travelDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    passengerCount: 15,
    tripType: 'holiday',
    specialRequests: '',
  });

  @HostListener('window:keydown.escape')
  public handleEscape(): void {
    if (this.bookingService.isModalOpen()) {
      this.bookingService.closeModal();
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.bookingService.closeModal();
    }
  }

  protected setTripType(type: TripType): void {
    this.bookingService.selectedTripType.set(type);
    this.formData.update((prev) => ({ ...prev, tripType: type }));
  }

  protected onSubmitForm(): void {
    const data = this.formData();
    if (!data.fullName || !data.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }
    this.bookingService.submitBooking(data);
  }

  protected getWhatsAppUrl(): string {
    return this.bookingService.generateWhatsAppMessage(this.formData());
  }
}
