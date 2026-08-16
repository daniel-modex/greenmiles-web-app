import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../core/services/booking.service';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-pilgrimage',
  imports: [RouterLink, BadgeComponent, ButtonComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-amber-600">Pilgrimage Tour Circuits</span>
        </nav>

        <div class="glass-card rounded-3xl p-8 border border-amber-500/30 space-y-4">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="amber" size="sm">
              🛕 Devotional Yatra Specialists
            </app-badge>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black text-[#0F1E13] tracking-tight">
            Sabarimala & Temple <span class="text-gradient-gm">Pilgrimage Circuits</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Sacred journeys designed with reverence. Dedicated air-suspension luxury coaches with experienced crew accustomed to Pamba hill routes, vrat-friendly food halts, and temple guidelines.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="glass-card rounded-3xl p-8 border border-amber-500/30 space-y-6">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block">FLAGSHIP CIRCUIT</span>
            <h3 class="text-2xl font-bold text-[#0F1E13]">Sabarimala Divine Yatra (3D/2N)</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Complete coach rental package starting from Kochi, Trivandrum, Kottayam, or Madurai. Includes Pamba parking permits and driver accommodation.
            </p>
            <ul class="space-y-2 text-xs text-slate-700 font-medium">
              <li>✓ Air-suspension coach for smooth ghat road travel</li>
              <li>✓ Devotional audio system & bhajan playlists</li>
              <li>✓ Pre-scouted clean vegetarian restaurant stops</li>
            </ul>
            <app-button variant="primary" size="md" (btnClick)="onEnquire('Sabarimala Yatra')">
              Book Sabarimala Coach →
            </app-button>
          </div>

          <div class="glass-card rounded-3xl p-8 border border-[#6EBF49]/30 space-y-6">
            <span class="text-xs font-bold text-[#6EBF49] uppercase tracking-widest block">TEMPLE CIRCUIT</span>
            <h3 class="text-2xl font-bold text-[#0F1E13]">Guruvayur - Chottanikkara - Palani</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Multi-day temple tour covering South India's most revered shrines with customized halts for elder devotees.
            </p>
            <ul class="space-y-2 text-xs text-slate-700 font-medium">
              <li>✓ Low-step easy boarding for senior citizens</li>
              <li>✓ Flexible itinerary with darshan time buffers</li>
              <li>✓ Dedicated tour manager on request</li>
            </ul>
            <app-button variant="secondary" size="md" (btnClick)="onEnquire('Temple Circuit')">
              Plan Temple Circuit →
            </app-button>
          </div>

        </div>

      </div>
    </main>
  `,
})
export class PilgrimageComponent {
  private bookingService = inject(BookingService);

  protected onEnquire(circuitName: string): void {
    this.bookingService.openModal('pilgrimage');
  }
}
