import { Component } from '@angular/core';
import { HeroEngineComponent } from './components/hero-engine/hero-engine.component';
import { ScrollBusShowcaseComponent } from './components/scroll-bus-showcase/scroll-bus-showcase.component';
import { SeasonalDealsComponent } from './components/seasonal-deals/seasonal-deals.component';
import { FleetMatrixComponent } from './components/fleet-matrix/fleet-matrix.component';
import { TourCircuitsComponent } from './components/tour-circuits/tour-circuits.component';
import { TrustMetricsComponent } from './components/trust-metrics/trust-metrics.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroEngineComponent,
    ScrollBusShowcaseComponent,
    SeasonalDealsComponent,
    FleetMatrixComponent,
    TourCircuitsComponent,
    TrustMetricsComponent,
  ],
  template: `
    <main class="w-full overflow-hidden">
      <!-- 1. Hero Headline & Search Engine Bar -->
      <app-hero-engine></app-hero-engine>

      <!-- 2. FLAGSHIP PINNED GSAP SCROLL-DRIVEN BUS SHOWCASE (300vh) -->
      <app-scroll-bus-showcase></app-scroll-bus-showcase>

      <!-- 3. Seasonal Deals & Festive Discount Chips -->
      <app-seasonal-deals></app-seasonal-deals>

      <!-- 4. Tabbed Fleet Showcase & Spec Comparison Matrix -->
      <app-fleet-matrix></app-fleet-matrix>

      <!-- 5. South India Tour Circuits & MICE Logistics -->
      <app-tour-circuits></app-tour-circuits>

      <!-- 6. Trust Metrics & Safety Performance Counters -->
      <app-trust-metrics></app-trust-metrics>
    </main>
  `,
})
export class HomeComponent {}
