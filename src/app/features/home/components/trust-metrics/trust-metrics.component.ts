import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-metrics',
  template: `
    <section class="py-16 bg-gradient-to-r from-[#0F1E13] via-[#049DD9] to-[#0F1E13] text-white relative overflow-hidden">
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          <!-- Metric 1 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-black text-[#A6D98F] tracking-tight block">
              50+
            </span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">
              Luxury Coaches & Fleet
            </h4>
            <p class="text-xs text-slate-300">
              Volvo B11R, Scania, Force Urbania & Premium SUVs
            </p>
          </div>

          <!-- Metric 2 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-black text-amber-300 tracking-tight block">
              25,000+
            </span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">
              Safe Trips Completed
            </h4>
            <p class="text-xs text-slate-300">
              Across Kerala, Karnataka, Tamil Nadu & Goa
            </p>
          </div>

          <!-- Metric 3 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-black text-[#049DD9] tracking-tight block">
              99.8%
            </span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">
              On-Time Departure
            </h4>
            <p class="text-xs text-slate-300">
              Rigorous maintenance & standby relief bus network
            </p>
          </div>

          <!-- Metric 4 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-black text-[#6EBF49] tracking-tight block">
              100%
            </span>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">
              Verified Drivers
            </h4>
            <p class="text-xs text-slate-300">
              Background checked with hill-route certification
            </p>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class TrustMetricsComponent {}
