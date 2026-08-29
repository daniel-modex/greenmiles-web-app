import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';

@Component({
  selector: 'app-about',
  imports: [RouterLink, BadgeComponent],
  template: `
    <main class="py-12 bg-[#F2F2F2] min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a routerLink="/" class="hover:text-[#0F1E13]">Home</a>
          <span>/</span>
          <span class="text-[#6EBF49]">About Greenmiles</span>
        </nav>

        <div class="glass-card rounded-3xl p-8 border border-[#6EBF49]/30 space-y-6">
          <div class="inline-flex items-center gap-2">
            <app-badge variant="mint" size="sm">
              ✨ Greenmiles Heritage
            </app-badge>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black text-[#0F1E13] tracking-tight">
            South India’s Standard for <span class="text-gradient-gm">Eco-Luxury Travel</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Greenmiles is crafted by the Greenmiles team with decades of operational excellence in luxury coach rentals, pilgrimage circuits, and corporate logistics. We combine modern fleet engineering with warm hospitality.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[#0F1E13]">🛡️ Safety First Protocol</h3>
              <p class="text-xs text-slate-600">Speed governors calibrated to 80 km/h, dual drivers on night routes, and mandatory pre-departure vehicle diagnostics.</p>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[#0F1E13]">🌱 Eco-Fleet Efficiency</h3>
              <p class="text-xs text-slate-600">BS6 low-emission engines, route optimization algorithms, and sustainable maintenance routines.</p>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[#0F1E13]">🚨 24/7 Highway Standby</h3>
              <p class="text-xs text-slate-600">Our network of standby relief buses positioned along major highways ensures zero trip disruption.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  `,
})
export class AboutComponent {}
