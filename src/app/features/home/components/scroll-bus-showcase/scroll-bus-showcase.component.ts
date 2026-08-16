import { Component, ElementRef, viewChild, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookingService } from '../../../../core/services/booking.service';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-bus-showcase',
  imports: [],
  template: `
    <!-- Outer Wrapper providing 350vh scroll height for GSAP Pinned Trigger -->
    <div #pinnedContainer class="relative w-full h-[350vh]">
      
      <!-- Pinned Viewport Container -->
      <div #viewportContainer class="sticky top-0 h-screen w-full bg-[#09140E] text-white overflow-hidden flex flex-col justify-between py-10 px-4 sm:px-8">
        
        <!-- Background Neon Highway Glow -->
        <div class="absolute inset-0 bg-radial from-[#6EBF49]/15 via-transparent to-transparent pointer-events-none"></div>

        <!-- Header Tag & Progress Indicator -->
        <div class="relative z-20 max-w-7xl mx-auto w-full text-center space-y-2 pt-4">
          <div class="inline-flex items-center gap-2">
            <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-[#6EBF49] bg-[#6EBF49]/10 px-3.5 py-1.5 rounded-full border border-[#6EBF49]/30">
              03. FLAGSHIP SCROLL-DRIVEN CINEMATIC
            </span>
          </div>

          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight font-serif">
            Inside Greenmiles <span class="text-[#6EBF49] italic">Flagship Fleet</span>
          </h2>
          <p class="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Scroll down to explore engineered air-suspension comfort, radar safety features, and festive circuit offers.
          </p>
        </div>

        <!-- Center Stage: Highway Track & Bus Visual -->
        <div class="relative z-10 w-full max-w-6xl mx-auto h-[480px] flex items-center justify-center">
          
          <!-- Glowing Highway Line -->
          <div class="absolute bottom-16 left-0 right-0 h-3 bg-gradient-to-r from-[#049DD9]/20 via-[#6EBF49] to-[#049DD9]/20 rounded-full shadow-[0_0_30px_#6EBF49]"></div>
          <div class="absolute bottom-16 left-0 right-0 h-[1px] bg-white/40"></div>

          <!-- THE LUXURY COACH GRAPHIC CONTAINER -->
          <div #busGraphic class="absolute bottom-14 right-[-100%] w-[90%] max-w-[720px] transition-transform duration-75">
            
            <!-- Headlight Beam Glow (Scene 4 Ignite Effect) -->
            <div #headlightBeam class="absolute left-[-220px] top-1/2 -translate-y-1/2 w-[260px] h-[160px] bg-gradient-to-l from-amber-200/90 via-amber-100/30 to-transparent blur-md pointer-events-none opacity-0 transition-opacity duration-300"></div>

            <!-- Bus Body Vector Graphics -->
            <div class="relative bg-gradient-to-r from-[#049DD9] via-[#0F1E13] to-[#6EBF49] p-1 rounded-3xl shadow-2xl border border-[#A6D98F]/40">
              
              <div class="bg-[#0F1E13] p-5 rounded-[22px] flex items-center justify-between relative overflow-hidden">
                
                <!-- Side Graphic Stripes -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#049DD9]/30 via-transparent to-[#6EBF49]/30 opacity-70"></div>
                
                <!-- Panoramic Tinted Windows -->
                <div class="relative z-10 flex items-center gap-2 w-full">
                  <div class="w-16 h-20 rounded-l-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 flex items-center justify-center text-xs font-bold text-slate-400">
                    DRIVER
                  </div>
                  
                  <div class="flex-1 grid grid-cols-6 gap-1.5 h-20">
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">1A</div>
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">2A</div>
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">3A</div>
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">4A</div>
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">5A</div>
                    <div class="bg-gradient-to-b from-emerald-950/80 to-slate-900 rounded-r-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">VIP</div>
                  </div>
                </div>

                <!-- Greenmiles Side Logo Branding -->
                <div class="absolute right-6 top-3 text-right">
                  <span class="text-xs font-black tracking-widest text-[#A6D98F] block">GREENMILES</span>
                  <span class="text-[8px] text-white/60 uppercase">B11R Multi-Axle</span>
                </div>

              </div>

              <!-- Animated Rotating Alloy Wheels -->
              <div class="flex justify-between px-12 -mb-5 relative z-20">
                <div class="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-400 shadow-lg flex items-center justify-center animate-spin" style="animation-duration: 2s;">
                  <div class="w-4 h-4 rounded-full bg-[#6EBF49]"></div>
                </div>
                <div class="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-400 shadow-lg flex items-center justify-center animate-spin" style="animation-duration: 2s;">
                  <div class="w-4 h-4 rounded-full bg-[#049DD9]"></div>
                </div>
              </div>

            </div>

            <!-- SCENE 2: RADAR HOTSPOTS (Expands in Scene 2) -->
            <div #hotspotsContainer class="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300">
              
              <!-- Hotspot 1: Suspension -->
              <div class="absolute -top-16 left-12 glass-card bg-black/80 text-white p-3 rounded-2xl border border-[#6EBF49] w-52 shadow-xl pointer-events-auto">
                <div class="flex items-center gap-2">
                  <span class="text-xl">💺</span>
                  <div>
                    <h4 class="text-xs font-bold text-[#A6D98F]">ECAS Air Suspension</h4>
                    <p class="text-[10px] text-slate-300">Zero bump calf-rest seats</p>
                  </div>
                </div>
              </div>

              <!-- Hotspot 2: Charging & Views -->
              <div class="absolute -top-24 right-1/3 glass-card bg-black/80 text-white p-3 rounded-2xl border border-[#049DD9] w-56 shadow-xl pointer-events-auto">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚡</span>
                  <div>
                    <h4 class="text-xs font-bold text-[#049DD9]">USB-C & Panoramic</h4>
                    <p class="text-[10px] text-slate-300">Individual ports & high deck</p>
                  </div>
                </div>
              </div>

              <!-- Hotspot 3: Safety GPS -->
              <div class="absolute -bottom-24 left-1/3 glass-card bg-black/80 text-white p-3 rounded-2xl border border-amber-400 w-56 shadow-xl pointer-events-auto">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🛡️</span>
                  <div>
                    <h4 class="text-xs font-bold text-amber-300">GPS & Speed Governor</h4>
                    <p class="text-[10px] text-slate-300">Verified safety chauffeurs</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- SCENE 3: 3D FESTIVE DEAL CARDS (Flies in Scene 3) -->
          <div #dealsContainer class="absolute inset-x-0 top-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pointer-events-none opacity-0 transform translate-y-10 transition-all duration-300">
            
            <div class="glass-card bg-black/90 p-4 rounded-2xl border border-amber-500/40 text-left pointer-events-auto shadow-2xl">
              <span class="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">🛕 Pilgrimage Special</span>
              <h4 class="text-sm font-bold text-white">Sabarimala & Temple Circuit</h4>
              <p class="text-[11px] text-slate-300 mt-1">Group coach transfers from Kochi & Trivandrum with devotional crew.</p>
              <button (click)="onOpenModal('pilgrimage')" class="mt-3 text-xs text-[#6EBF49] font-bold underline cursor-pointer">Enquire Pilgrimage Tariff →</button>
            </div>

            <div class="glass-card bg-black/90 p-4 rounded-2xl border border-[#6EBF49]/40 text-left pointer-events-auto shadow-2xl">
              <span class="text-xs font-bold text-[#6EBF49] uppercase tracking-widest block mb-1">🌿 Monsoon Caravan</span>
              <h4 class="text-sm font-bold text-white">Wayanad & Munnar Retreats</h4>
              <p class="text-[11px] text-slate-300 mt-1">Force Urbania & 26-seater Tempo Traveller weekend specials.</p>
              <button (click)="onOpenModal('holiday')" class="mt-3 text-xs text-[#6EBF49] font-bold underline cursor-pointer">Explore Holiday Packages →</button>
            </div>

            <div class="glass-card bg-black/90 p-4 rounded-2xl border border-[#049DD9]/40 text-left pointer-events-auto shadow-2xl">
              <span class="text-xs font-bold text-[#049DD9] uppercase tracking-widest block mb-1">🏢 Corporate MICE</span>
              <h4 class="text-sm font-bold text-white">Executive Event Fleet</h4>
              <p class="text-[11px] text-slate-300 mt-1">Flat rates for 45/53-seater corporate offsite transfers.</p>
              <button (click)="onOpenModal('mice')" class="mt-3 text-xs text-[#049DD9] font-bold underline cursor-pointer">Get Corporate Quote →</button>
            </div>

          </div>

        </div>

        <!-- Footer Action Callout -->
        <div class="relative z-20 max-w-7xl mx-auto w-full text-center pb-4">
          <div class="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
            <span class="text-xs sm:text-sm font-semibold text-slate-200">
              Ready to book this vehicle for your group?
            </span>
            <button
              (click)="onOpenModal('fleet')"
              class="bg-[#6EBF49] hover:bg-[#58a637] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Book Flagship Coach
            </button>
          </div>
        </div>

      </div>

    </div>
  `,
})
export class ScrollBusShowcaseComponent implements AfterViewInit, OnDestroy {
  private bookingService = inject(BookingService);

  public pinnedContainer = viewChild<ElementRef<HTMLDivElement>>('pinnedContainer');
  public viewportContainer = viewChild<ElementRef<HTMLDivElement>>('viewportContainer');
  public busGraphic = viewChild<ElementRef<HTMLDivElement>>('busGraphic');
  public headlightBeam = viewChild<ElementRef<HTMLDivElement>>('headlightBeam');
  public hotspotsContainer = viewChild<ElementRef<HTMLDivElement>>('hotspotsContainer');
  public dealsContainer = viewChild<ElementRef<HTMLDivElement>>('dealsContainer');

  private scrollTriggerInstance: ScrollTrigger | null = null;
  private timeline: gsap.core.Timeline | null = null;

  public ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const pinEl = this.pinnedContainer()?.nativeElement;
    const busEl = this.busGraphic()?.nativeElement;
    const beamEl = this.headlightBeam()?.nativeElement;
    const hotspotsEl = this.hotspotsContainer()?.nativeElement;
    const dealsEl = this.dealsContainer()?.nativeElement;

    if (!pinEl || !busEl) return;

    // Create GSAP ScrollTrigger Timeline pinned for 300vh distance
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: pinEl,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          // Progress handling logic
        },
      },
    });

    // Scene 1 (0% -> 25%): Bus drives into center
    this.timeline.to(busEl, {
      right: '50%',
      x: '50%',
      ease: 'power2.out',
      duration: 1,
    });

    // Scene 2 (25% -> 55%): Hotspots expand
    if (hotspotsEl) {
      this.timeline.to(hotspotsEl, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
      });
    }

    // Scene 3 (55% -> 85%): Hotspots fade out, Festive Deal Cards fly in
    if (hotspotsEl && dealsEl) {
      this.timeline.to(hotspotsEl, { opacity: 0, duration: 0.5 });
      this.timeline.to(dealsEl, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }

    // Scene 4 (85% -> 100%): Headlights ignite beam & bus accelerates forward
    if (dealsEl && beamEl) {
      this.timeline.to(dealsEl, { opacity: 0, duration: 0.5 });
      this.timeline.to(beamEl, { opacity: 1, duration: 0.3 });
      this.timeline.to(busEl, {
        right: '150%',
        ease: 'power3.in',
        duration: 1.2,
      });
    }

    ScrollTrigger.refresh();
  }

  protected onOpenModal(type: any): void {
    this.bookingService.openModal(type);
  }

  public ngOnDestroy(): void {
    if (this.timeline) {
      this.timeline.kill();
    }
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }
}
