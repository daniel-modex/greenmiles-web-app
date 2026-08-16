import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-trust-metrics',
  template: `
    <section class="py-24 bg-[#09140E] text-white relative overflow-hidden border-t border-white/10">
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <!-- SECTION OVERLINE & BRAND MANIFESTO QUOTE SPLIT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-12">
          <div class="lg:col-span-4 space-y-3">
            <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-[#6EBF49] bg-[#6EBF49]/10 px-3.5 py-1.5 rounded-full border border-[#6EBF49]/30 inline-block">
              06. BRAND MANIFESTO & METRICS
            </span>
            <h3 class="text-2xl font-serif font-normal text-white">
              Greenmiles Distinction
            </h3>
          </div>
          <div class="lg:col-span-8">
            <blockquote class="text-xl sm:text-3xl font-normal font-serif text-slate-200 leading-relaxed italic border-l-2 border-[#6EBF49] pl-6">
              "We believe travel is not just transit—it is the seamless fusion of uncompromised comfort, certified safety, and unforgettable memories across South India."
            </blockquote>
          </div>
        </div>

        <!-- SECTION 1: MILESTONE COUNTERS -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          <!-- Metric 1 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-bold font-serif text-[#A6D98F] tracking-tight block">
              50+
            </span>
            <h4 class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Luxury Coaches & Fleet
            </h4>
            <p class="text-xs text-slate-300 font-normal">
              Volvo B11R, Scania, Force Urbania & Luxury Caravans
            </p>
          </div>

          <!-- Metric 2 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-bold font-serif text-amber-300 tracking-tight block">
              25,000+
            </span>
            <h4 class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Safe Trips Completed
            </h4>
            <p class="text-xs text-slate-300 font-normal">
              Across Kerala, Karnataka, Tamil Nadu & Goa
            </p>
          </div>

          <!-- Metric 3 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-bold font-serif text-[#049DD9] tracking-tight block">
              99.8%
            </span>
            <h4 class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              On-Time Departure Record
            </h4>
            <p class="text-xs text-slate-300 font-normal">
              Rigorous telematics & 24/7 highway relief network
            </p>
          </div>

          <!-- Metric 4 -->
          <div class="pt-6 lg:pt-0 space-y-2">
            <span class="text-4xl sm:text-6xl font-bold font-serif text-[#6EBF49] tracking-tight block">
              100%
            </span>
            <h4 class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Certified Chauffeurs
            </h4>
            <p class="text-xs text-slate-300 font-normal">
              Background verified with hill-route certification
            </p>
          </div>

        </div>

        <!-- SECTION 2: EDITORIAL TESTIMONIAL MARQUEE -->
        <div class="pt-8 border-t border-white/10 space-y-6">
          <div class="text-center max-w-xl mx-auto space-y-2">
            <span class="text-xs font-bold text-[#A6D98F] uppercase tracking-widest block">
              Verified Traveler Endorsements
            </span>
            <h3 class="text-2xl sm:text-4xl font-bold font-serif text-white">
              Trusted by 100,000+ Journeys Across South India
            </h3>
          </div>

          <div class="overflow-hidden w-full relative py-4">
            <div class="animate-marquee flex gap-6 w-max">
              @for (item of testimonials; track item.author) {
                <div class="w-80 sm:w-96 glass-dark p-6 rounded-3xl border border-white/15 space-y-4 shrink-0">
                  <div class="flex items-center gap-1 text-amber-400 text-sm">
                    ★★★★★
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
                    "{{ item.quote }}"
                  </p>
                  <div class="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div class="w-10 h-10 rounded-full bg-[#6EBF49]/20 border border-[#6EBF49] flex items-center justify-center font-bold text-[#A6D98F] text-sm">
                      {{ item.author[0] }}
                    </div>
                    <div>
                      <h5 class="text-xs font-bold text-white">{{ item.author }}</h5>
                      <span class="text-[10px] text-slate-400 block">{{ item.role }}</span>
                    </div>
                  </div>
                </div>
              }
              <!-- Repeat set for continuous loop -->
              @for (item of testimonials; track item.author + '_repeat') {
                <div class="w-80 sm:w-96 glass-dark p-6 rounded-3xl border border-white/15 space-y-4 shrink-0">
                  <div class="flex items-center gap-1 text-amber-400 text-sm">
                    ★★★★★
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
                    "{{ item.quote }}"
                  </p>
                  <div class="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div class="w-10 h-10 rounded-full bg-[#6EBF49]/20 border border-[#6EBF49] flex items-center justify-center font-bold text-[#A6D98F] text-sm">
                      {{ item.author[0] }}
                    </div>
                    <div>
                      <h5 class="text-xs font-bold text-white">{{ item.author }}</h5>
                      <span class="text-[10px] text-slate-400 block">{{ item.role }}</span>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class TrustMetricsComponent {
  public testimonials: Testimonial[] = [
    {
      quote: 'The Volvo B11R multi-axle coach for our company offsite to Munnar was impeccably maintained. Air suspension made the hill climb effortless!',
      author: 'Rajesh Nair',
      role: 'VP Operations, TechCorp Bangalore',
      avatar: '',
      rating: 5,
    },
    {
      quote: 'Booked Force Urbania for our 15-member Sabarimala Yatra. Devotional crew, punctual pickup in Ernakulam, and clean vehicle throughout.',
      author: 'Anand Kumar',
      role: 'Pilgrimage Group Lead, Trivandrum',
      avatar: '',
      rating: 5,
    },
    {
      quote: 'Greenmiles provided 6 executive coaches for our international conference in Kochi. Live GPS tracking and standby backup gave complete peace of mind.',
      author: 'Dr. Meera Menon',
      role: 'MICE Event Chair, Kochi',
      avatar: '',
      rating: 5,
    },
    {
      quote: 'The Wayanad weekend caravan in Force Urbania Royale was the highlights of our family reunion. Punctual, courteous driver and USB charging at every seat.',
      author: 'Suresh Varma',
      role: 'Family Tour Organizer, Calicut',
      avatar: '',
      rating: 5,
    },
  ];
}

