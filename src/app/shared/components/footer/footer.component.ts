import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  template: `
    <footer class="bg-[#0F1E13] text-white pt-16 pb-8 border-t border-[#6EBF49]/30 relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6EBF49]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <!-- Column 1: Company Overview & Helpline -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6EBF49] to-[#049DD9] p-0.5 shadow-md">
                <div class="w-full h-full bg-[#0F1E13] rounded-[10px] flex items-center justify-center">
                  <img src="logo/logo.svg" alt="Greenmiles Logo" class="w-6 h-6 object-contain" />
                </div>
              </div>
              <span class="text-2xl font-extrabold tracking-tight text-white">
                GREENMILES<span class="text-[#6EBF49]">.</span>
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Empowering South India’s luxury coach rentals, pilgrimage circuits, corporate MICE logistics, and bespoke holiday caravans with verified safety standards and eco-luxury comfort.
            </p>

            <div class="p-4 rounded-2xl bg-white/5 border border-[#6EBF49]/30 space-y-1">
              <span class="text-[10px] text-[#A6D98F] uppercase tracking-wider font-bold block">
                🚨 24/7 Breakdown & Assistance Helpline
              </span>
              <a href="tel:+919847000000" class="text-base font-bold text-white hover:text-[#6EBF49] transition-colors">
                +91 98470 00000 / 0484 2345678
              </a>
              <span class="text-[11px] text-slate-400 block">
                Standby relief buses positioned across major highways.
              </span>
            </div>
          </div>

          <!-- Column 2: Popular Holiday & Pilgrimage Circuits -->
          <div>
            <h4 class="text-sm font-bold text-[#A6D98F] uppercase tracking-wider mb-4">
              Tour & Pilgrimage Circuits
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a routerLink="/pilgrimage" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🛕</span> Sabarimala & Pamba Special
                </a>
              </li>
              <li>
                <a routerLink="/holidays" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🌿</span> Munnar Tea Hills & Marayoor
                </a>
              </li>
              <li>
                <a routerLink="/holidays" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🏞️</span> Wayanad Rainforest Caravan
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
              <li>
                <a routerLink="/mice-corporate" class="hover:text-[#6EBF49] transition-colors flex items-center gap-2">
                  <span>🏢</span> Corporate Industrial Visit Circuit
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Fleet Categories & Specifications -->
          <div>
            <h4 class="text-sm font-bold text-[#A6D98F] uppercase tracking-wider mb-4">
              Fleet & Coach Categories
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚌</span> Volvo B11R Multi-Axle (53 Seater)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚍</span> Scania Executive Coach (45 Seater)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚐</span> Force Urbania Royale (17 Seater)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>👑</span> VIP Maharaja Caravan (12 Seater)
                </a>
              </li>
              <li>
                <a routerLink="/fleet" class="hover:text-[#049DD9] transition-colors flex items-center gap-2">
                  <span>🚘</span> Toyota Innova Hycross Hybrid
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Newsletter & Direct Inquiry -->
          <div class="space-y-4">
            <h4 class="text-sm font-bold text-[#A6D98F] uppercase tracking-wider mb-2">
              Festive Deals & Tariff Updates
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Subscribe to receive instant notifications on festive group bus discounts and off-season package drops.
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

            <div class="pt-2">
              <span class="text-xs font-semibold text-slate-400 block mb-2">Operational Hubs:</span>
              <div class="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span class="px-2 py-0.5 rounded bg-white/10">Kochi</span>
                <span class="px-2 py-0.5 rounded bg-white/10">Trivandrum</span>
                <span class="px-2 py-0.5 rounded bg-white/10">Calicut</span>
                <span class="px-2 py-0.5 rounded bg-white/10">Bangalore</span>
                <span class="px-2 py-0.5 rounded bg-white/10">Coimbatore</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Greenmiles. All Rights Reserved.</p>
          <div class="flex items-center gap-6">
            <a routerLink="/about" class="hover:text-white transition-colors">Privacy Policy</a>
            <a routerLink="/about" class="hover:text-white transition-colors">Terms of Rental</a>
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
