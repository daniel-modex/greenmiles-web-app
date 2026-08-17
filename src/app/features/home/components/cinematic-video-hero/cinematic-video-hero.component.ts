import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  viewChild,
  computed,
  inject,
  signal,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookingService } from '../../../../core/services/booking.service';
import { SOUTH_INDIA_DESTINATIONS, DestinationReel } from '../../../../core/models/destination.model';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-cinematic-video-hero',
  imports: [MagneticDirective],
  template: `
    <section class="relative min-h-screen w-full bg-[#09140E] text-white overflow-hidden flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8">
      
      <!-- RESILIENT HYBRID BACKGROUND LAYER ENGINE -->
      <div #videoContainer class="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300">
        
        <!-- LAYER 1: 4K Ken-Burns Animated Fallback Image Layer (Guaranteed Render) -->
        <div class="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
          <img
            [src]="activeDestination().fallbackImage"
            [alt]="activeDestination().name"
            class="w-full h-full object-cover scale-105 transition-transform duration-[10000ms] ease-out select-none"
            loading="eager"
          />
        </div>

        <!-- LAYER 2: Dual Video Stream Buffer Overlay (Renders when stream is healthy) -->
        @if (!videoFailed()) {
          <video
            #videoA
            class="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
            [src]="destinations[0].videoUrl"
            autoplay
            muted
            loop
            playsinline
            (error)="onVideoError()"
            (canplay)="onVideoLoaded()"
          ></video>

          <video
            #videoB
            class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            [src]="destinations[1].videoUrl"
            muted
            loop
            playsinline
            (error)="onVideoError()"
            (canplay)="onVideoLoaded()"
          ></video>
        }

        <!-- Snami Radial Vignette & Gradient Overlays -->
        <div class="absolute inset-0 vignette-overlay pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#09140E] via-[#09140E]/40 to-[#09140E]/60 pointer-events-none"></div>
      </div>

      <!-- TOP BRAND OVERLINE & AUDIO/PLAYBACK CONTROLS -->
      <div class="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <!-- Snami Overline Tag -->
        <div class="flex items-center gap-3">
          <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-[#6EBF49] bg-[#6EBF49]/10 px-3.5 py-1.5 rounded-full border border-[#6EBF49]/30">
            01. SOUTH INDIA CONCIERGE & LUXURY REEL
          </span>
          <span class="hidden sm:inline-block text-[11px] font-semibold text-slate-300 tracking-widest uppercase">
            📍 {{ activeDestination().region }}
          </span>
        </div>

        <!-- Mute/Unmute Soundwave & Play/Pause Controls -->
        <div class="flex items-center gap-3">
          <!-- Audio Toggle with Soundwave Animation -->
          <button
            type="button"
            (click)="toggleAudio()"
            class="flex items-center gap-2.5 bg-black/50 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
            [attr.aria-label]="isMuted() ? 'Unmute Audio' : 'Mute Audio'"
          >
            <div class="flex items-end gap-0.5 h-3.5 w-4">
              <span [class.animate-bounce]="!isMuted()" class="w-1 bg-[#6EBF49] rounded-full h-full"></span>
              <span [class.animate-bounce]="!isMuted()" style="animation-delay: 0.15s;" class="w-1 bg-[#6EBF49] rounded-full h-2/3"></span>
              <span [class.animate-bounce]="!isMuted()" style="animation-delay: 0.3s;" class="w-1 bg-[#6EBF49] rounded-full h-4/5"></span>
            </div>
            <span class="uppercase tracking-wider text-[10px]">
              {{ isMuted() ? 'Audio Off' : 'Audio On' }}
            </span>
          </button>

          <!-- Play/Pause Toggle -->
          <button
            type="button"
            (click)="togglePlay()"
            class="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs transition-all cursor-pointer"
            [attr.aria-label]="isPlaying() ? 'Pause Reel' : 'Play Reel'"
          >
            @if (isPlaying()) {
              <span>❚❚</span>
            } @else {
              <span>▶</span>
            }
          </button>
        </div>
      </div>

      <!-- CENTER EDITORIAL SERIF HEADLINE & CONCIERGE CALLOUT -->
      <div class="relative z-20 max-w-7xl mx-auto w-full my-auto space-y-6">
        <div class="max-w-3xl space-y-4">
          <span class="text-xs font-bold tracking-[0.25em] uppercase text-[#A6D98F] block">
            Circuit {{ activeDestination().index }} • {{ activeDestination().name }}
          </span>

          <!-- Dynamic Editorial Headline -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif text-white leading-[1.08] tracking-tight">
            {{ activeDestination().tagline }}
          </h1>

          <p class="text-xs sm:text-base text-slate-300 font-normal max-w-xl leading-relaxed">
            Experience South India's premier circuits in air-suspension luxury coaches and Force Urbania caravans with certified chauffeurs.
          </p>

          <!-- Action Buttons -->
          <div class="pt-4 flex flex-wrap items-center gap-4">
            <div appMagnetic>
              <button
                type="button"
                (click)="onReserveCircuit()"
                class="bg-[#6EBF49] hover:bg-[#58a637] text-white text-xs font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer group"
              >
                <span>Reserve {{ activeDestination().name }} Circuit</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div class="text-xs text-slate-300 font-semibold flex items-center gap-2">
              <span class="text-[#A6D98F]">Starts from</span>
              <span class="text-lg font-bold font-serif text-white">₹{{ activeDestination().priceStarting.toLocaleString('en-IN') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM 5-SEGMENT PROGRESS TIMELINE & PILL NAVIGATION -->
      <div class="relative z-20 max-w-7xl mx-auto w-full space-y-4">
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          @for (dest of destinations; track dest.id; let idx = $index) {
            <button
              type="button"
              (click)="selectDestination(idx)"
              [class.border-[#6EBF49]]="activeIndex() === idx"
              [class.bg-white/15]="activeIndex() === idx"
              [class.border-white/20]="activeIndex() !== idx"
              [class.bg-black/40]="activeIndex() !== idx"
              class="relative p-3.5 rounded-2xl border backdrop-blur-md text-left transition-all duration-300 cursor-pointer overflow-hidden group hover:border-[#6EBF49]"
            >
              <!-- Segment Progress Fill Bar -->
              <div
                [style.width.%]="activeIndex() === idx ? progressPercent() : (idx < activeIndex() ? 100 : 0)"
                class="absolute top-0 left-0 bottom-0 bg-[#6EBF49]/30 transition-all duration-100 pointer-events-none"
              ></div>

              <div class="relative z-10 space-y-1">
                <div class="flex items-center justify-between text-[10px] font-bold text-[#A6D98F] tracking-wider uppercase">
                  <span>{{ dest.index }}</span>
                  @if (activeIndex() === idx) {
                    <span class="w-1.5 h-1.5 rounded-full bg-[#6EBF49] animate-ping"></span>
                  }
                </div>
                <span class="text-xs font-bold text-white block group-hover:text-[#6EBF49] transition-colors truncate">
                  {{ dest.name }}
                </span>
              </div>
            </button>
          }
        </div>
      </div>

    </section>
  `,
})
export class CinematicVideoHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  private bookingService = inject(BookingService);

  public videoContainer = viewChild<ElementRef<HTMLDivElement>>('videoContainer');
  public videoA = viewChild<ElementRef<HTMLVideoElement>>('videoA');
  public videoB = viewChild<ElementRef<HTMLVideoElement>>('videoB');

  public destinations: DestinationReel[] = SOUTH_INDIA_DESTINATIONS;

  public activeIndex = signal<number>(0);
  public isPlaying = signal<boolean>(true);
  public isMuted = signal<boolean>(true);
  public activeBuffer = signal<'A' | 'B'>('A');
  public progressPercent = signal<number>(0);
  public videoFailed = signal<boolean>(false);

  public activeDestination = computed(() => this.destinations[this.activeIndex()]);

  private reelTimer: ReturnType<typeof setInterval> | null = null;
  private progressTimer: ReturnType<typeof setInterval> | null = null;
  private scrollTriggerInstance: ScrollTrigger | null = null;

  public ngOnInit(): void {
    this.startReelTimers();
  }

  public ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const container = this.videoContainer()?.nativeElement;
    if (container) {
      this.scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(container, {
            scale: 1 + self.progress * 0.08,
            duration: 0.1,
            ease: 'none',
          });
        },
      });
    }
  }

  protected onVideoError(): void {
    // If video fails to load due to CORS or CDN issues, fallback to 4K image layer
    this.videoFailed.set(true);
  }

  protected onVideoLoaded(): void {
    this.videoFailed.set(false);
  }

  protected selectDestination(idx: number): void {
    if (idx === this.activeIndex()) return;

    const targetUrl = this.destinations[idx].videoUrl;
    const currentBuffer = this.activeBuffer();

    const videoElA = this.videoA()?.nativeElement;
    const videoElB = this.videoB()?.nativeElement;

    if (videoElA && videoElB && !this.videoFailed()) {
      if (currentBuffer === 'A') {
        videoElB.src = targetUrl;
        videoElB.muted = this.isMuted();
        videoElB.play().catch(() => this.videoFailed.set(true));

        gsap.to(videoElA, { opacity: 0, duration: 1.2, ease: 'power2.inOut' });
        gsap.to(videoElB, { opacity: 1, duration: 1.2, ease: 'power2.inOut' });
        this.activeBuffer.set('B');
      } else {
        videoElA.src = targetUrl;
        videoElA.muted = this.isMuted();
        videoElA.play().catch(() => this.videoFailed.set(true));

        gsap.to(videoElB, { opacity: 0, duration: 1.2, ease: 'power2.inOut' });
        gsap.to(videoElA, { opacity: 1, duration: 1.2, ease: 'power2.inOut' });
        this.activeBuffer.set('A');
      }
    }

    this.activeIndex.set(idx);
    this.resetProgress();
  }

  protected toggleAudio(): void {
    const nextMuted = !this.isMuted();
    this.isMuted.set(nextMuted);

    const videoElA = this.videoA()?.nativeElement;
    const videoElB = this.videoB()?.nativeElement;

    if (videoElA) videoElA.muted = nextMuted;
    if (videoElB) videoElB.muted = nextMuted;
  }

  protected togglePlay(): void {
    const nextPlay = !this.isPlaying();
    this.isPlaying.set(nextPlay);

    const videoElA = this.videoA()?.nativeElement;
    const videoElB = this.videoB()?.nativeElement;

    if (nextPlay) {
      if (this.activeBuffer() === 'A') videoElA?.play().catch(() => {});
      else videoElB?.play().catch(() => {});
      this.startReelTimers();
    } else {
      videoElA?.pause();
      videoElB?.pause();
      this.stopReelTimers();
    }
  }

  protected onReserveCircuit(): void {
    const dest = this.activeDestination();
    this.bookingService.openModal('holiday', null, {
      id: dest.id,
      title: dest.name,
      subtitle: dest.tagline,
      location: dest.region,
      image: dest.fallbackImage,
      priceStarting: dest.priceStarting,
      duration: 'Bespoke Circuit',
      tag: '🏖️ Signature Reel',
      rating: 4.9,
      reviewsCount: 120,
      description: dest.tagline,
      category: 'south-india',
      features: ['Air suspension coach', 'Certified chauffeur', '24/7 relief support'],
      operatesIn: ['Kochi', 'Trivandrum', 'Bangalore'],
    });
  }

  private startReelTimers(): void {
    this.stopReelTimers();

    const slideDuration = 7500;
    const updateInterval = 100;

    this.progressTimer = setInterval(() => {
      this.progressPercent.update((p) => {
        const next = p + (updateInterval / slideDuration) * 100;
        return next > 100 ? 100 : next;
      });
    }, updateInterval);

    this.reelTimer = setInterval(() => {
      const nextIdx = (this.activeIndex() + 1) % this.destinations.length;
      this.selectDestination(nextIdx);
    }, slideDuration);
  }

  private resetProgress(): void {
    this.progressPercent.set(0);
    if (this.isPlaying()) {
      this.startReelTimers();
    }
  }

  private stopReelTimers(): void {
    if (this.reelTimer) clearInterval(this.reelTimer);
    if (this.progressTimer) clearInterval(this.progressTimer);
  }

  public ngOnDestroy(): void {
    this.stopReelTimers();
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }
}
