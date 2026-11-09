import {
  EntertainmentCard,
  EventHighlight,
  GalleryItem,
  MallEvent,
  StoreItem,
} from '../types/mall';

export const MALL_INFO = {
  name: 'Mall of Ranchi',
  tagline: 'Shop. Dine. Celebrate. All Under One Roof.',
  address: 'Ratu Road, Kumhartoli, Ranchi, Jharkhand 834001, India',
  shortAddress: 'Ratu Road, Kumhartoli, Ranchi, Jharkhand',
  hours: '10:30 AM – 10:00 PM (Everyday)',
  foodCourtHours: '10:30 AM – 11:30 PM',
  cinemaHours: '09:30 AM – 12:00 AM',
  phone: '08051066666',
  phoneDisplay: '080510 66666',
  mobilePhone: '080510 66666',
  email: 'info@mallofranchi.com',
  whatsappNumber: '918051066666',
  instagramUrl: 'https://instagram.com/mallofranchi',
  facebookUrl: 'https://facebook.com/mallofranchi',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Mall+of+Ranchi+Ratu+Road+Kumhartoli+Ranchi+Jharkhand',
};

export const QUOTES: string[] = [
  'Where every weekend feels like a celebration.',
  "The vibrant pulse of Ranchi's fashion, food, and family memories.",
  'Every corner tells a new story, every aisle brings a new delight.',
  'From gourmet dining to blockbuster cinema — all together on Ratu Road.',
  'Moments made sweeter with the people who matter most.',
  "Your city, your sanctuary, Ranchi's premier lifestyle address.",
];

export const EVENTS: MallEvent[] = [
  {
    id: 'influencer-competition',
    title: 'Influencer Competition',
    description:
      'Content creators showed off their style and creativity in a glamorous face-off at the mall.',
    date: 'October 18, 2026',
    image: '/src/assets/images/event_influencer_fest_1794242042114.jpg',
    tag: 'Fashion & Style',
    participantsOrWinners: '60+ Creators · Grand Runway Finale',
  },
  {
    id: 'chess-competition',
    title: 'Chess Competition',
    description:
      'Players of all ages competed in a battle of strategy and focus.',
    date: 'September 28, 2026',
    image: '/src/assets/images/event_chess_tournament_1794242042975.jpg',
    tag: 'Mind Sports',
    participantsOrWinners: '120+ Players · FIDE Rated Arbiter',
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    description:
      'Shoppers won exciting prizes just by visiting and participating.',
    date: 'November 02, 2026',
    image: '/src/assets/images/event_lucky_draw_1794242043346.jpg',
    tag: 'Festival Celebration',
    participantsOrWinners: '₹50,000 Shopping Vouchers & Luxury Hampers',
  },
];

export const HIGHLIGHTS: EventHighlight[] = [
  {
    id: 'hl-1',
    title: 'Influencer Style Queen 2026',
    winner: 'Aanya Sharma',
    award: 'Best Contemporary Fusion Look',
    image: '/src/assets/images/event_influencer_fest_1794242042114.jpg',
  },
  {
    id: 'hl-2',
    title: 'Junior Chess Champion',
    winner: 'Reyansh Verma (Age 11)',
    award: 'Unbeaten 7/7 Rounds Gold Trophy',
    image: '/src/assets/images/event_chess_tournament_1794242042975.jpg',
  },
  {
    id: 'hl-3',
    title: 'Grand Diwali Bumper Winner',
    winner: 'The Keshri Family',
    award: '₹50,000 Shopping Spree Hamper',
    image: '/src/assets/images/event_lucky_draw_1794242043346.jpg',
  },
  {
    id: 'hl-4',
    title: 'Master Chess Division',
    winner: 'Sanjay Mukherjee',
    award: 'Open Tournament Trophy & Cash Prize',
    image: '/src/assets/images/event_chess_tournament_1794242042975.jpg',
  },
];

export const STORES: StoreItem[] = [
  // Fashion
  {
    id: 's-westside',
    name: 'Westside',
    category: 'Fashion',
    floor: 'Ground & 1st Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Contemporary Indian & Western Apparel',
    featured: true,
  },
  {
    id: 's-pantaloons',
    name: 'Pantaloons',
    category: 'Fashion',
    floor: '1st Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Family Fashion, Footwear & Accessories',
    featured: true,
  },
  {
    id: 's-zudio',
    name: 'Zudio',
    category: 'Fashion',
    floor: 'Lower Ground',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Irresistible Trending Fast Fashion',
    featured: true,
  },
  {
    id: 's-levis',
    name: "Levi's",
    category: 'Fashion',
    floor: '1st Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Authentic Denim & Casual Lifestyle',
  },
  {
    id: 's-marks-spencer',
    name: 'Marks & Spencer',
    category: 'Fashion',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'British Elegance, Lingerie & Fine Wardrobe',
  },
  {
    id: 's-manyavar',
    name: 'Manyavar & Mohey',
    category: 'Fashion',
    floor: '1st Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Grand Celebration & Wedding Wear',
  },

  // Food Court
  {
    id: 's-foodhall',
    name: 'The Grand Food Court',
    category: 'Food Court',
    floor: '3rd Floor',
    timing: '10:30 AM – 11:30 PM',
    tagline: '18 Global & Regional Food Counters',
    featured: true,
  },
  {
    id: 's-kfc',
    name: 'KFC',
    category: 'Food Court',
    floor: '3rd Floor',
    timing: '10:30 AM – 11:00 PM',
    tagline: 'Crispy Secret Recipe Chicken',
    featured: true,
  },
  {
    id: 's-dominos',
    name: "Domino's Pizza",
    category: 'Food Court',
    floor: '3rd Floor',
    timing: '10:30 AM – 11:30 PM',
    tagline: 'Hot & Fresh Pizzas, Pastas & Garlic Bread',
  },
  {
    id: 's-starbucks',
    name: 'Starbucks Coffee',
    category: 'Food Court',
    floor: 'Ground Floor Atrium',
    timing: '09:00 AM – 11:00 PM',
    tagline: 'Artisan Espresso, Frappuccinos & Fresh Bakes',
    featured: true,
  },
  {
    id: 's-pizzahut',
    name: 'Pizza Hut',
    category: 'Food Court',
    floor: '3rd Floor',
    timing: '10:30 AM – 11:00 PM',
    tagline: 'Pan Pizzas & Italian Specialties',
  },
  {
    id: 's-haldirams',
    name: "Haldiram's",
    category: 'Food Court',
    floor: '3rd Floor',
    timing: '10:30 AM – 10:30 PM',
    tagline: 'Traditional Chaat, Thalis & Fresh Mithai',
  },

  // Electronics
  {
    id: 's-croma',
    name: 'Croma',
    category: 'Electronics',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Mega Electronics, Laptops, TVs & Home Appliances',
    featured: true,
  },
  {
    id: 's-reliance-digital',
    name: 'Reliance Digital',
    category: 'Electronics',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Gadgets, Personal Audio & Smart Home',
    featured: true,
  },
  {
    id: 's-apple-imagine',
    name: 'Imagine (Apple Premium Reseller)',
    category: 'Electronics',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'iPhone, MacBook, iPad, Apple Watch & Care',
    featured: true,
  },
  {
    id: 's-samsung',
    name: 'Samsung Smart Plaza',
    category: 'Electronics',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Galaxy AI Devices & Neo QLED TVs',
  },

  // Kids
  {
    id: 's-hamleys',
    name: 'Hamleys',
    category: 'Kids',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'World’s Finest Toy Shop & Wonder Experience',
    featured: true,
  },
  {
    id: 's-firstcry',
    name: 'FirstCry',
    category: 'Kids',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Baby Care, Toys, Nursery & Kids Fashion',
  },
  {
    id: 's-mothercare',
    name: 'Mothercare',
    category: 'Kids',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Maternity, Infant Care & Soft Cotton Wear',
  },

  // Beauty
  {
    id: 's-nykaa',
    name: 'Nykaa Luxe',
    category: 'Beauty',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Prestige Skincare, Fragrances & Global Cosmetics',
    featured: true,
  },
  {
    id: 's-forest-essentials',
    name: 'Forest Essentials',
    category: 'Beauty',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Luxurious Ayurvedic Wellness & Pure Botanical Elixirs',
    featured: true,
  },
  {
    id: 's-mac',
    name: 'M·A·C Cosmetics',
    category: 'Beauty',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Professional Makeup Artistry & Runway Shades',
  },
  {
    id: 's-the-body-shop',
    name: 'The Body Shop',
    category: 'Beauty',
    floor: 'Ground Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Cruelty-Free Body Butters, Hair & Bath Care',
  },

  // Entertainment
  {
    id: 's-pvr',
    name: 'PVR INOX Cinemas',
    category: 'Entertainment',
    floor: '4th Floor',
    timing: '09:30 AM – 12:00 AM',
    tagline: '6-Screen Multiplex, Dolby Atmos & Recliner Class',
    featured: true,
  },
  {
    id: 's-timezone',
    name: 'Timezone Entertainment',
    category: 'Entertainment',
    floor: '3rd Floor',
    timing: '11:00 AM – 10:30 PM',
    tagline: 'Modern Bowling, Arcade Games & VR Simulators',
    featured: true,
  },
  {
    id: 's-amoeba',
    name: 'Amoeba Fun Zone',
    category: 'Entertainment',
    floor: '3rd Floor',
    timing: '11:00 AM – 10:30 PM',
    tagline: 'Bumper Cars, Laser Maze & Redemption Games',
  },
];

export const ENTERTAINMENT_CARDS: EntertainmentCard[] = [
  {
    id: 'cinema-pvr',
    title: 'PVR INOX Multiplex',
    subtitle: 'Cinema in Ultra-Luxury Recliner Class',
    description:
      'Immerse yourself in blockbuster entertainment across 6 state-of-the-art auditoriums featuring 4K Laser Projection, Dolby Atmos sound, gourmet in-seat dining, and plush VIP recliners.',
    timings: 'Daily 09:30 AM – 12:00 AM Midnight',
    image: '/src/assets/images/entertainment_multiplex_1794242044255.jpg',
    highlights: [
      '6 Audi Screen Complex with Dolby Atmos',
      'Luxury Recliner Seats with In-Seat Gourmet Service',
      '4K Laser Christie Projection Systems',
    ],
    ctaText: 'View Movie Showtimes',
    ctaAction: '#visit',
  },
  {
    id: 'dining-food-court',
    title: 'Grand Food Court & Fine Dining',
    subtitle: 'A Symphony of Global & Regional Flavors',
    description:
      'Savor an eclectic culinary paradise with 18+ signature dining outlets, from sizzling sizzlers and authentic Jharkhand delicacies to artisan coffees, Italian pizzas, and gourmet oriental bistros.',
    timings: 'Daily 10:30 AM – 11:30 PM',
    image: '/src/assets/images/dining_food_court_1794242044686.jpg',
    highlights: [
      '500+ Seater Airy Atrium Food Hall',
      '18+ Renowned National & Global Food Outlets',
      'Fine-Dining Private Booths & Specialty Cafes',
    ],
    ctaText: 'Explore Dining Outlets',
    ctaAction: '#stores',
  },
  {
    id: 'fun-zone-arcade',
    title: 'Timezone Arcade & VR Arena',
    subtitle: 'High-Octane Fun for All Generations',
    description:
      'Step into the ultimate thrill hub featuring state-of-the-art virtual reality simulators, hyper-bowling lanes, bumper cars, dance battle stages, and a massive ticket prize counter for kids and families.',
    timings: 'Daily 11:00 AM – 10:30 PM',
    image: '/src/assets/images/entertainment_multiplex_1794242044255.jpg',
    highlights: [
      'Modern 4-Lane Hyper-Bowling Alley',
      'Virtual Reality 360° Motion Simulators',
      '100+ Redemption Games & Mega Prize Counter',
    ],
    ctaText: 'Plan Game Day',
    ctaAction: '#contact',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Illuminated Dusk Atrium',
    category: 'Architecture',
    image: '/src/assets/images/hero_mall_exterior_1794242041158.jpg',
    description: 'The iconic glass facade illuminated at twilight along Ratu Road.',
  },
  {
    id: 'gal-2',
    title: 'Influencer Runway Gala',
    category: 'Events',
    image: '/src/assets/images/event_influencer_fest_1794242042114.jpg',
    description: 'Glamorous live style showcase and creator competition.',
  },
  {
    id: 'gal-3',
    title: 'Grand Food Hall & Cafes',
    category: 'Dining',
    image: '/src/assets/images/dining_food_court_1794242044686.jpg',
    description: 'Vibrant dining space with artisan coffee and multi-cuisine counters.',
  },
  {
    id: 'gal-4',
    title: 'Ranchi Open Chess Championship',
    category: 'Events',
    image: '/src/assets/images/event_chess_tournament_1794242042975.jpg',
    description: 'Over 120 competitors in a tense showdown of tactical minds.',
  },
  {
    id: 'gal-5',
    title: 'Premier Cinema Lounge',
    category: 'Entertainment',
    image: '/src/assets/images/entertainment_multiplex_1794242044255.jpg',
    description: 'Chic lounge seating and neon ambient lighting at the multiplex.',
  },
  {
    id: 'gal-6',
    title: 'Festival Lucky Draw Celebration',
    category: 'Celebration',
    image: '/src/assets/images/event_lucky_draw_1794242043346.jpg',
    description: 'Excited shoppers winning mega festival prizes and hampers.',
  },
];
