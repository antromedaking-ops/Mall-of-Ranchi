export type StoreCategory =
  | 'All'
  | 'Fashion'
  | 'Food Court'
  | 'Electronics'
  | 'Kids'
  | 'Beauty'
  | 'Entertainment';

export interface StoreItem {
  id: string;
  name: string;
  category: Exclude<StoreCategory, 'All'>;
  floor: string;
  timing: string;
  tagline: string;
  featured?: boolean;
}

export interface MallEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tag: string;
  participantsOrWinners?: string;
}

export interface EventHighlight {
  id: string;
  title: string;
  winner: string;
  award: string;
  image: string;
}

export interface EntertainmentCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  timings: string;
  image: string;
  highlights: string[];
  ctaText: string;
  ctaAction: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    phone?: string;
    message?: string;
  };
}
