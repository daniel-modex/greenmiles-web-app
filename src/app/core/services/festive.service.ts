import { Injectable, signal } from '@angular/core';
import { HolidayPackage } from '../models/package.model';

@Injectable({
  providedIn: 'root',
})
export class FestiveService {
  public readonly isBannerVisible = signal<boolean>(true);
  public readonly bannerText = signal<string>(
    '🎉 Festive Bonanza: Flat 15% OFF on Group Bus Bookings & South India Holiday Circuits! Code: GREENFEST'
  );
  public readonly promoCode = signal<string>('GREENFEST');
  public readonly discountPercent = signal<number>(15);

  private readonly packagesList: HolidayPackage[] = [
    {
      id: 'pkg-sabarimala',
      title: 'Sabarimala Divine Yatra & Temple Circuit',
      subtitle: 'Complete 3D/2N Pilgrimage Caravan with Pamba Transfer',
      duration: '3 Days / 2 Nights',
      location: 'Sabarimala - Pamba - Erumely',
      category: 'pilgrimage',
      priceStarting: 4999,
      rating: 4.95,
      reviewsCount: 342,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      features: ['Dedicated Pushback Coach', 'Vrat Safe Vegetarian Meals', 'Experienced Devotional Crew', 'Pamba VIP Transit Guidance'],
      tag: 'Festive Pilgrimage Special',
      operatesIn: ['Kochi', 'Trivandrum', 'Kottayam', 'Thrissur', 'Madurai'],
      description: 'Sacred pilgrimage journey designed for Ayyappa devotees. Dedicated air-suspension luxury coach with experienced crew familiar with hill routes and temple guidelines.',
    },
    {
      id: 'pkg-munnar',
      title: 'Munnar Mist & Tea Plantation Caravan',
      subtitle: '4D/3N Hill Station Retreat with Anamudi & Mattupetty Sightseeing',
      duration: '4 Days / 3 Nights',
      location: 'Munnar - Marayoor - Eravikulam',
      category: 'south-india',
      priceStarting: 7499,
      rating: 4.9,
      reviewsCount: 512,
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
      features: ['Luxurious Bus Stay Option', 'Tea Factory Guided Tour', 'Campfire & BBQ Night', 'High-Deck Panoramic Windows'],
      tag: 'Weekend Getaway',
      operatesIn: ['Kochi', 'Bangalore', 'Coimbatore', 'Chennai'],
      description: 'Ascend into the misty hills of Munnar in pure luxury. Experience sprawling tea estates, cool mountain breezes, and curated local dining.',
    },
    {
      id: 'pkg-wayanad',
      title: 'Wayanad Wilderness & Waterfall Expedition',
      subtitle: '3D/2N Eco Caravan through Edakkal Caves & Banasura Sagar',
      duration: '3 Days / 2 Nights',
      location: 'Wayanad - Chembra Peak - Vythiri',
      category: 'nature',
      priceStarting: 6200,
      rating: 4.88,
      reviewsCount: 289,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      features: ['Zipline & Trekking Access', 'Treehouse Stay Add-on', 'Eco Caravan Transfer', 'Spice Garden Visit'],
      tag: 'Monsoon Special',
      operatesIn: ['Calicut', 'Bangalore', 'Kochi', 'Mysore'],
      description: 'Explore the rainforests, misty waterfalls, and ancient caves of Wayanad with custom force urbania or executive coach arrangements.',
    },
    {
      id: 'pkg-kanyakumari',
      title: 'Kanyakumari & Trivandrum Coastal Circuit',
      subtitle: '3D/2N Sunset Point, Padmanabhaswamy Temple & Kovalam Beach',
      duration: '3 Days / 2 Nights',
      location: 'Trivandrum - Kovalam - Kanyakumari',
      category: 'south-india',
      priceStarting: 5800,
      rating: 4.85,
      reviewsCount: 410,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      features: ['Trivandrum Temple Pass', 'Ferry Tickets to Vivekananda Rock', 'Seafood Tasting Tour', 'Kovalam Beachside Evening'],
      tag: 'Popular Circuit',
      operatesIn: ['Kochi', 'Trivandrum', 'Madurai', 'Chennai'],
      description: 'Witness the confluence of three oceans at Kanyakumari after seeking blessings at the world-famous Padmanabhaswamy temple.',
    },
    {
      id: 'pkg-mice',
      title: 'Corporate MICE & Executive Delegation Package',
      subtitle: 'Tailored Fleet Management, Airport Transfers & Offsite Events',
      duration: 'Custom Multi-Day',
      location: 'Kochi - Kumarakom - Kovalam - Bangalore',
      category: 'mice',
      priceStarting: 15000,
      rating: 4.98,
      reviewsCount: 195,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      features: ['Dedicated Fleet Manager', 'Branded Coach Wrap Options', 'Airport Liaison Desks', '24/7 Breakdown Standby Bus'],
      tag: 'Corporate Elite',
      operatesIn: ['All South India Metros'],
      description: 'End-to-end transport logistics for corporate conferences, team offsites, and industrial visits with real-time GPS tracking and dedicated coordinators.',
    },
  ];

  public readonly packages = signal<HolidayPackage[]>(this.packagesList);

  public dismissBanner(): void {
    this.isBannerVisible.set(false);
  }
}
