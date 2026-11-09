import { ContactFormData, FormValidationResult, StoreCategory, StoreItem } from '../types/mall';

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): FormValidationResult {
  const errors: { name?: string; phone?: string; message?: string } = {};

  const cleanName = data.name.trim();
  if (!cleanName) {
    errors.name = 'Please provide your full name.';
  } else if (cleanName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  // Clean phone: strip whitespace, hyphens, plus
  const phoneDigits = data.phone.replace(/[\s\-+()]/g, '');
  if (!phoneDigits) {
    errors.phone = 'Please provide your phone number.';
  } else if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  const cleanMessage = data.message.trim();
  if (!cleanMessage) {
    errors.message = 'Please enter your message or inquiry.';
  } else if (cleanMessage.length < 5) {
    errors.message = 'Message must be at least 5 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates a valid WhatsApp URL with pre-filled message
 */
export function formatWhatsAppUrl(whatsappNumber: string, message: string): string {
  const cleanNumber = whatsappNumber.replace(/[\s\-+()]/g, '');
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

/**
 * Filters stores by category tab and search query
 */
export function filterStores(
  stores: StoreItem[],
  category: StoreCategory,
  searchQuery: string
): StoreItem[] {
  const query = searchQuery.trim().toLowerCase();

  return stores.filter((store) => {
    const matchesCategory =
      category === 'All' || store.category.toLowerCase() === category.toLowerCase();

    const matchesQuery =
      query === '' ||
      store.name.toLowerCase().includes(query) ||
      store.tagline.toLowerCase().includes(query) ||
      store.floor.toLowerCase().includes(query) ||
      store.category.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });
}

/**
 * Calculates whether the mall is currently Open, Closing Soon, or Closed
 * Mall opens 10:30 AM (10.5) and closes at 10:00 PM (22.0)
 * Food court closes at 11:30 PM (23.5)
 */
export function getMallStatus(date: Date = new Date()): {
  isOpen: boolean;
  statusText: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
  nextChangeText: string;
} {
  const hours = date.getHours() + date.getMinutes() / 60;

  if (hours >= 10.5 && hours < 21.5) {
    return {
      isOpen: true,
      statusText: 'Open Now',
      badgeColor: 'emerald',
      nextChangeText: 'Closes at 10:00 PM (Dining & Cinema open till 11:30 PM)',
    };
  } else if (hours >= 21.5 && hours < 22.0) {
    return {
      isOpen: true,
      statusText: 'Closing Soon',
      badgeColor: 'amber',
      nextChangeText: 'Retail closes at 10:00 PM (Dining open till 11:30 PM)',
    };
  } else if (hours >= 22.0 && hours < 23.5) {
    return {
      isOpen: true,
      statusText: 'Food Court & Cinema Open',
      badgeColor: 'amber',
      nextChangeText: 'Retail closed · Dining & Movies open till 11:30 PM',
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      badgeColor: 'rose',
      nextChangeText: 'Opens tomorrow at 10:30 AM',
    };
  }
}
