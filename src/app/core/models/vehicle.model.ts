export interface Vehicle {
  id: string;
  name: string;
  category: 'luxury-coach' | 'urbania' | 'tempo' | 'suv';
  categoryLabel: string;
  capacity: number;
  acType: string;
  seatType: string;
  amenities: string[];
  luggageCapacity: string;
  ratePerKm: number;
  image: string;
  isPopular: boolean;
  description: string;
  specs: {
    suspension: string;
    chargingPorts: string;
    entertainment: string;
    safetyFeatures: string;
  };
}
