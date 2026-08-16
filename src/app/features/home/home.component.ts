import { Component } from '@angular/core';
import { HeroEngineComponent } from './components/hero-engine/hero-engine.component';
import { CuratedExperienceSliderComponent } from './components/curated-experience-slider/curated-experience-slider.component';
import { ScrollBusShowcaseComponent } from './components/scroll-bus-showcase/scroll-bus-showcase.component';
import { SeasonalDealsComponent } from './components/seasonal-deals/seasonal-deals.component';
import { FleetMatrixComponent } from './components/fleet-matrix/fleet-matrix.component';
import { TourCircuitsComponent } from './components/tour-circuits/tour-circuits.component';
import { TrustMetricsComponent } from './components/trust-metrics/trust-metrics.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroEngineComponent,
    CuratedExperienceSliderComponent,
    ScrollBusShowcaseComponent,
    SeasonalDealsComponent,
    FleetMatrixComponent,
    TourCircuitsComponent,
    TrustMetricsComponent,
  ],
  template: `
    <main class="w-full overflow-hidden bg-[#F2F2F2]">
      <!-- 1. Full-Bleed Hero & Floating Dock Search -->
      <app-hero-engine></app-hero-engine>

      <!-- 2. Snami-Style Curated Experience Slider (01 / 04) -->
      <app-curated-experience-slider></app-curated-experience-slider>

      <!-- 3. FLAGSHIP PINNED GSAP SCROLL-DRIVEN BUS SHOWCASE (350vh) -->
      <app-scroll-bus-showcase></app-scroll-bus-showcase>

      <!-- 4. Seasonal Deals & Festive Discount Chips -->
      <app-seasonal-deals></app-seasonal-deals>

      <!-- 5. Tabbed Fleet Showcase & Spec Matrix -->
      <app-fleet-matrix></app-fleet-matrix>

      <!-- 6. Bespoke Charter & Logistics -->
      <app-tour-circuits></app-tour-circuits>

      <!-- 7. Brand Manifesto & Trust Metrics -->
      <app-trust-metrics></app-trust-metrics>
    </main>
  `,
})
export class HomeComponent {}

