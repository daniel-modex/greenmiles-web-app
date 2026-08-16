import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  template: `
    <footer class="bg-[#09140E] text-white pt-24 pb-12 border-t border-[#6EBF49]/20 relative overflow-hidden">
      <!-- Massive Background Watermark Typography -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap watermark-text opacity-5 select-none pointer-events-none font-serif">
        GREENMILES
      </div>

      <!-- Ambient Soft Glow -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#6EBF49]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <!-- 4-Column Directory Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          <!-- Column 1: Company Manifesto & Helpline Card -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6EBF49] to-[#049DD9] p-0.5 shadow-md">
                <div class="w-full h-full bg-[#09140E] rounded-[10px] flex items-center justify-center">
                  <img src="/logo/logo.svg" alt="Greenmiles Logo" class="w-6 h-6 object-contain" />
                </div>
              </div>
              <span class="text-2xl font-bold font-serif tracking-tight text-white">
                GREENMILES<span class="text-[#6EBF49]">.</span>
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Empowering South India’s luxury coach rentals, sacred pilgrimage trails, corporate MICE transit, and bespoke holiday caravans with verified safety standards and eco-luxury comfort.
            </p>

            <div class="p-5 rounded-2xl bg-white/5 border border-[#6EBF49]/30 space-y-2">
              <span class="text-[10px] text-[#A6D98F] uppercase tracking-[0.2em] font-bold block">
                🚨 24/7 Breakdown & Assistance Helpline
              </span>
              <a href="tel:+919847000000" class="text-lg font-bold text-white hover:text-[#6EBF49] transition-colors block">
                +91 98470 00000 / 0484 2345678
              </a>
              <span class="text-[11px] text-slate-400 block font-normal">
                Standby relief buses positioned across major highways.
              </span>
            </div>
          </div>

          <!-- Column 2: Curated Tour Circuits -->
          <div>
            <h4 class="text-xs font-bold text-[#A6D98F] uppercase tracking-[0.25em] mb-6">
              Tour Circuits
            </h4>
            <ul class="space-y-3 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <a routerLink="/pilgrimage" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span class="text-amber-400">🛕</span> Sabarimala & Pamba Special
                </a>
              </li>
              <li>
                <a routerLink="/holidays" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span class="text-[#6EBF49]">🌿</span> Munnar Tea Hills & Marayoor
                </a>
              </li>
              <li>
                <a routerLink="/holidays" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span class="text-[#049DD9]">🏞️</span> Wayanad Rainforest Caravan
                </a>
              </li>
              <li>
                <a routerLink="/holidays" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🌊</span> Kanyakumari Sunset & Trivandrum
                </a>
              </li>
              <li>
                <a routerLink="/pilgrimage" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🛕</span> Guruvayur & Chottanikkara Route
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: VIP Fleet Matrix -->
          <div>
            <h4 class="text-xs font-bold text-[#A6D98F] uppercase tracking-[0.25em] mb-6">
              VIP Fleet Charter
            </h4>
            <ul class="space-y-3 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚌</span> Volvo B11R Multi-Axle (53 Seats)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚍</span> Scania Executive Coach (45 Seats)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚐</span> Force Urbania Royale (17 Seats)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>👑</span> VIP Maharaja Caravan (12 Seats)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚘</span> Toyota Innova Hycross Hybrid
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Newsletter & Concierge Desk -->
          <div class="space-y-4">
            <h4 class="text-xs font-bold text-[#A6D98F] uppercase tracking-[0.25em] mb-2">
              Concierge Newsletter
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed font-normal">
              Subscribe to receive instant updates on off-season holiday caravan drops and festive group discounts.
            </p>

            <form (ngSubmit)="onSubscribe()" class="space-y-2">
              <div class="relative">
                <input
                  type="email"
                  [(ngModel)]="emailInput"
                  name="subscribeEmail"
                  placeholder="Enter your email address"
                  class="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-[#6EBF49]"
                />
                <button
                  type="submit"
                  class="absolute right-1 top-1 bottom-1 bg-[#6EBF49] hover:bg-[#58a637] text-white px-4 rounded-full text-xs font-bold transition-colors cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>

            @if (subscribed()) {
              <p class="text-xs text-[#A6D98F] font-semibold flex items-center gap-1">
                ✓ Thank you for subscribing! Promo code GREENFEST is active.
              </p>
            }

            <div class="pt-3 border-t border-white/10">
              <span class="text-xs font-semibold text-slate-400 block mb-2">Operational Hubs:</span>
              <div class="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span class="px-2.5 py-1 rounded-full bg-white/10">Kochi</span>
                <span class="px-2.5 py-1 rounded-full bg-white/10">Trivandrum</span>
                <span class="px-2.5 py-1 rounded-full bg-white/10">Calicut</span>
                <span class="px-2.5 py-1 rounded-full bg-white/10">Bangalore</span>
                <span class="px-2.5 py-1 rounded-full bg-white/10">Coimbatore</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <p>© 2026 Greenmiles by Remya Travels. All Rights Reserved.</p>
          <div class="flex items-center gap-6">
            <a routerLink="/about" class="hover:text-white transition-colors">Privacy Policy</a>
            <a routerLink="/about" class="hover:text-white transition-colors">Terms of Charter</a>
            <a routerLink="/contact" class="hover:text-white transition-colors">Safety Standards</a>
          </div>
        </div>

      </div>
    </footer>
  `,
})
export class FooterComponent {
  public emailInput = '';
  public subscribed = signal<boolean>(false);

  protected onSubscribe(): void {
    if (this.emailInput && this.emailInput.includes('@')) {
      this.subscribed.set(true);
      this.emailInput = '';
    }
  }
}

