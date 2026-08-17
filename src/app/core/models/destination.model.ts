export interface DestinationReel {
  id: string;
  index: string;
  name: string;
  tagline: string;
  region: string;
  videoUrl: string;
  fallbackImage: string;
  accentColor: string;
  priceStarting: number;
}

export const SOUTH_INDIA_DESTINATIONS: DestinationReel[] = [
  {
    id: 'munnar',
    index: '01',
    name: 'Munnar Tea Highlands',
    tagline: 'Whispers of the Misty Western Ghats',
    region: 'Kerala Hills',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    fallbackImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2000&q=85',
    accentColor: '#6EBF49',
    priceStarting: 18500,
  },
  {
    id: 'alleppey',
    index: '02',
    name: 'Alleppey Backwaters',
    tagline: 'Serenade Across the Emerald Canals',
    region: 'Vembanad Lake',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    fallbackImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85',
    accentColor: '#049DD9',
    priceStarting: 21000,
  },
  {
    id: 'varkala',
    index: '03',
    name: 'Varkala Ocean Cliffs',
    tagline: 'Where Crimson Cliffs Meet Azure Waves',
    region: 'Arabian Coastline',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    fallbackImage: 'https://images.unsplash.com/photo-1616489953149-808608cb92bc?auto=format&fit=crop&w=2000&q=85',
    accentColor: '#A6D98F',
    priceStarting: 16900,
  },
  {
    id: 'wayanad',
    index: '04',
    name: 'Wayanad Rainforests',
    tagline: 'Untamed Canopy & Scenic Western Ghats Drives',
    region: 'Malabar Plateau',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    fallbackImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    accentColor: '#D6F2C9',
    priceStarting: 14999,
  },
  {
    id: 'sacred-trails',
    index: '05',
    name: 'Sacred Temple Circuits',
    tagline: 'Timeless Devotion & Dravidian Stone Heritage',
    region: 'Sabarimala & Madurai Trails',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    fallbackImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85',
    accentColor: '#6EBF49',
    priceStarting: 22000,
  },
];
