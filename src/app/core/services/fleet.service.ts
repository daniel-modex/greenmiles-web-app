import { Injectable, signal, computed } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class FleetService {
  public readonly selectedCategory = signal<string>('all');

  private readonly vehiclesList: Vehicle[] = [
    {
      id: 'fleet-volvo-53',
      name: 'Greenmiles Celestial B11R Multi-Axle',
      category: 'luxury-coach',
      categoryLabel: 'Luxury Coach (53-Seater)',
      capacity: 53,
      acType: 'Climate Controlled Dual-Compressor AC',
      seatType: 'Leatherette Ergonomic Calf-Rest Pushback',
      amenities: ['Ultra Air Suspension', 'Individual USB-C Ports', 'Panoramic Privacy Windows', 'Dual LED TV & Surround Sound', 'Live GPS & Speed Governor'],
      luggageCapacity: '550 CU FT Underdeck Bay',
      ratePerKm: 65,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      isPopular: true,
      description: 'Our flagship 53-seater multi-axle luxury coach designed for long-haul tour circuits, wedding caravans, and corporate MICE delegations with maximum air-ride suspension comfort.',
      specs: {
        suspension: 'Electronically Controlled Air Suspension (ECAS)',
        chargingPorts: 'Individual 20W USB-C at every seat row',
        entertainment: 'Dual 32" Smart LED Displays + Bluetooth Audio',
        safetyFeatures: 'ABS, EBS, Retarder Braking, Rear Camera, Speed Governor (80 km/h)',
      },
    },
    {
      id: 'fleet-scania-45',
      name: 'Greenmiles Monarch Metrolink 45',
      category: 'luxury-coach',
      categoryLabel: 'Luxury Coach (45-Seater)',
      capacity: 45,
      acType: 'High-Capacity Overhead AC Units',
      seatType: 'Deep-Recline 2+2 Executive Pushback',
      amenities: ['Individual Reading Lights', 'High-Deck Window View', 'Onboard Charging', 'Mood Lighting', 'Emergency Exit Skylights'],
      luggageCapacity: '480 CU FT Underdeck Bay',
      ratePerKm: 58,
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      isPopular: false,
      description: 'Smooth 45-seater luxury coach ideal for college industrial visits, inter-state pilgrimage tours, and large corporate events.',
      specs: {
        suspension: 'Full Air Suspension with Kneeling Mechanism',
        chargingPorts: '2A USB Power Outlets per armrest',
        entertainment: 'Single 28" HD Screen with Wireless Mic',
        safetyFeatures: 'Dual Circuit Air Brake system, Fire Extinguisher, GPS Tracking',
      },
    },
    {
      id: 'fleet-urbania-17',
      name: 'Force Urbania Luxury Royale',
      category: 'urbania',
      categoryLabel: 'Force Urbania (17-Seater)',
      capacity: 17,
      acType: 'Triple-Zone Roof Air Conditioner',
      seatType: 'Plush Reclining Bucket Seats with Armrests',
      amenities: ['European Styling', 'Low NVH Silent Cabin', 'Individual AC Vents', 'Ambient LED Strips', 'Slide Door Step'],
      luggageCapacity: 'Rear Dedicated Trunk Space',
      ratePerKm: 38,
      image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80',
      isPopular: true,
      description: 'Next-generation European style monocoque luxury van offering whisper-quiet rides for executive corporate delegations and premium family holidays.',
      specs: {
        suspension: 'Independent Front Suspension with Transverse Leaf Spring',
        chargingPorts: 'Fast USB ports at all seat positions',
        entertainment: 'Android Touch Screen Head Unit + 6 Speakers',
        safetyFeatures: 'ABS + EBD, Crash Tested Monocoque Body, Dual Airbags',
      },
    },
    {
      id: 'fleet-tempo-26',
      name: 'Executive Tempo Traveller 26',
      category: 'tempo',
      categoryLabel: 'Tempo Traveller (26-Seater)',
      capacity: 26,
      acType: 'Roof Mounted High-Cooling AC',
      seatType: '2+1 Deluxe Pushback Seats',
      amenities: ['Spacious Aisle', 'Rear Audio System', 'High Roof Height', 'Window Curtains', 'First Aid Kit'],
      luggageCapacity: 'Rear Boot & Roof Rack Option',
      ratePerKm: 34,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      isPopular: false,
      description: 'The workhorse of South Indian tour circuits, providing comfortable pushback seating for medium family groups and school excursions.',
      specs: {
        suspension: 'Parabolic Leaf Springs with Shock Absorbers',
        chargingPorts: 'Shared USB Power Outlets along cabin',
        entertainment: 'Stereo Sound System with Mic',
        safetyFeatures: 'Seatbelts for all rows, Speed Limiter Device',
      },
    },
    {
      id: 'fleet-tempo-12',
      name: 'VIP Maharaja Tempo Traveller 12',
      category: 'tempo',
      categoryLabel: 'Tempo Traveller (12-Seater VIP)',
      capacity: 12,
      acType: 'Split Executive AC with Deodorizer',
      seatType: '1+1 Sofa-style Maharaja Captain Seats',
      amenities: ['Motorized Footrests', 'Smart TV with OTT', 'Mini Fridge Option', 'Mood Starlight Ceiling', 'Foldable Work Trays'],
      luggageCapacity: 'Spacious Rear Luggage Bay',
      ratePerKm: 42,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      isPopular: true,
      description: 'Ultra-luxurious 12-seater caravan custom designed for VIP guests, celebrity artists, and luxury pilgrimage tours seeking palace-on-wheels treatment.',
      specs: {
        suspension: 'Soft-tuned Leaf Springs + Air Bag Helper',
        chargingPorts: 'Universal 230V AC Plugs + Fast Wireless Pads',
        entertainment: '32" Curved Smart TV + Bose Soundbar',
        safetyFeatures: 'CCTV Surveillance, Panic Buttons, Fire Mitigation System',
      },
    },
    {
      id: 'fleet-innova-hycross',
      name: 'Toyota Innova Hycross Hybrid ZX',
      category: 'suv',
      categoryLabel: 'Premium SUV (7-Seater)',
      capacity: 7,
      acType: 'Multi-Zone Automatic Climate Control',
      seatType: 'Ottoman Captain Seats with Power Recline',
      amenities: ['Panoramic Sunroof', 'JBL 9-Speaker Audio', 'Ventilated Front Seats', 'Whisper EV Mode', 'Toyota Safety Sense'],
      luggageCapacity: 'Foldable 3rd Row Cargo Space',
      ratePerKm: 28,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      isPopular: true,
      description: 'The pinnacle of luxury SUV road travel. Hybrid efficiency combined with Ottoman captain seats for executive airport transfers and family hill-station drives.',
      specs: {
        suspension: 'MacPherson Strut Front & Torsion Beam Rear',
        chargingPorts: 'Type-C USB Charger at rear rows',
        entertainment: '10.1" Touchscreen Infotainment + Apple CarPlay',
        safetyFeatures: '6 Airbags, Dynamic Radar Cruise Control, Lane Trace Assist',
      },
    },
  ];

  public readonly vehicles = signal<Vehicle[]>(this.vehiclesList);

  public readonly filteredVehicles = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.vehicles();
    return this.vehicles().filter((v) => v.category === cat);
  });

  public setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  public getVehicleById(id: string): Vehicle | undefined {
    return this.vehicles().find((v) => v.id === id);
  }
}
