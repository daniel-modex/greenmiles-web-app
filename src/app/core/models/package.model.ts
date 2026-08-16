export interface HolidayPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  category: 'south-india' | 'pilgrimage' | 'mice' | 'nature';
  priceStarting: number;
  rating: number;
  reviewsCount: number;
  image: string;
  features: string[];
  tag: string;
  operatesIn: string[];
  description: string;
}
