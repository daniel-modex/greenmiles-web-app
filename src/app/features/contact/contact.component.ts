import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, BadgeComponent, ButtonComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-[#049DD9]">Contact & Branch Locator</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <!-- Contact Details & Hubs -->
          <div class="space-y-6">
            <div class="glass-card rounded-3xl p-8 border border-[#049DD9]/30 space-y-4">
              <app-badge variant="blue" size="sm">📍 Branch & Hub Locations</app-badge>
              <h1 class="text-3xl font-bold font-serif text-[#0F1E13]">Get in Touch with Greenmiles</h1>
              <p class="text-sm text-slate-600">Our dispatch team is available 24/7 for instant trip quotes and emergency breakdown support.</p>
            </div>

            <div class="glass-card rounded-3xl p-6 space-y-4 border border-slate-200 text-sm">
              <div class="flex items-start gap-3">
                <span class="text-xl">🏢</span>
                <div>
                  <h4 class="font-bold text-[#0F1E13]">Headquarters (Kochi)</h4>
                  <p class="text-xs text-slate-600">Remya Travels Complex, Vyttila Mobility Hub Road, Kochi, Kerala - 682019</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-xl">📞</span>
                <div>
                  <h4 class="font-bold text-[#0F1E13]">Direct Helpline</h4>
                  <p class="text-xs text-slate-600">+91 98470 00000 / 0484 2345678 (24/7 Support)</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-xl">✉️</span>
                <div>
                  <h4 class="font-bold text-[#0F1E13]">Email Concierge</h4>
                  <p class="text-xs text-slate-600">bookings&#64;greenmiles.in / remya&#64;remyatravels.com</p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="glass-card rounded-3xl p-6 h-48 flex items-center justify-center border border-slate-200 text-slate-400 font-semibold text-xs">
              🗺️ Interactive Google Maps Location Hub Placeholder (Kochi, Trivandrum, Bangalore)
            </div>
          </div>

          <!-- Quick Message Form -->
          <div class="glass-card rounded-3xl p-8 border border-[#6EBF49]/30 space-y-6">
            <h2 class="text-2xl font-bold text-[#0F1E13]">Send Us a Direct Message</h2>

            @if (submitted()) {
              <div class="p-6 bg-[#6EBF49]/10 text-[#58a637] rounded-2xl text-center space-y-2">
                <h3 class="font-bold text-lg">Message Sent Successfully!</h3>
                <p class="text-xs">Our team will get back to you within 30 minutes.</p>
              </div>
            } @else {
              <form (ngSubmit)="onSubmit()" class="space-y-4">
                <div>
                  <label for="contactName" class="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input id="contactName" type="text" [(ngModel)]="name" name="name" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#6EBF49]" required />
                </div>

                <div>
                  <label for="contactPhone" class="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input id="contactPhone" type="tel" [(ngModel)]="phone" name="phone" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#6EBF49]" required />
                </div>

                <div>
                  <label for="contactMessage" class="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                  <textarea id="contactMessage" rows="4" [(ngModel)]="message" name="message" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#6EBF49]"></textarea>
                </div>

                <app-button type="submit" variant="primary" size="lg" [fullWidth]="true">
                  Send Message
                </app-button>
              </form>
            }
          </div>

        </div>

      </div>
    </main>
  `,
})
export class ContactComponent {
  public name = '';
  public phone = '';
  public message = '';
  public submitted = signal<boolean>(false);

  protected onSubmit(): void {
    if (this.name && this.phone) {
      this.submitted.set(true);
    }
  }
}
