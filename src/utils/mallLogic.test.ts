import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  formatWhatsAppUrl,
  filterStores,
  getMallStatus,
} from './mallLogic';
import { StoreItem } from '../types/mall';

const MOCK_STORES: StoreItem[] = [
  {
    id: '1',
    name: 'Westside',
    category: 'Fashion',
    floor: 'Ground',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Apparel',
  },
  {
    id: '2',
    name: 'Croma',
    category: 'Electronics',
    floor: '2nd Floor',
    timing: '10:30 AM – 10:00 PM',
    tagline: 'Electronics',
  },
  {
    id: '3',
    name: 'Starbucks Coffee',
    category: 'Food Court',
    floor: 'Ground',
    timing: '09:00 AM – 11:00 PM',
    tagline: 'Coffee',
  },
];

test('validateContactForm passes valid inputs', () => {
  const result = validateContactForm({
    name: 'Aditya Raj',
    phone: '9835123456',
    message: 'Hello, I want to inquire about store availability.',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateContactForm rejects empty or invalid fields', () => {
  const result = validateContactForm({
    name: '',
    phone: '123',
    message: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
});

test('formatWhatsAppUrl constructs standard wa.me link with encoded text', () => {
  const url = formatWhatsAppUrl('918051066666', 'Hello Mall of Ranchi!');
  assert.equal(url, 'https://wa.me/918051066666?text=Hello%20Mall%20of%20Ranchi!');
});

test('filterStores filters by category and search keyword', () => {
  const fashionOnly = filterStores(MOCK_STORES, 'Fashion', '');
  assert.equal(fashionOnly.length, 1);
  assert.equal(fashionOnly[0].name, 'Westside');

  const searchElectronics = filterStores(MOCK_STORES, 'All', 'croma');
  assert.equal(searchElectronics.length, 1);
  assert.equal(searchElectronics[0].name, 'Croma');

  const noneMatch = filterStores(MOCK_STORES, 'Kids', '');
  assert.equal(noneMatch.length, 0);
});

test('getMallStatus reports open, closing soon, or closed correctly', () => {
  // Afternoon 2:00 PM (14.0)
  const afternoon = new Date('2026-11-09T14:00:00');
  const afternoonStatus = getMallStatus(afternoon);
  assert.equal(afternoonStatus.isOpen, true);
  assert.equal(afternoonStatus.statusText, 'Open Now');

  // Night 11:45 PM (23.75)
  const lateNight = new Date('2026-11-09T23:45:00');
  const nightStatus = getMallStatus(lateNight);
  assert.equal(nightStatus.isOpen, false);
  assert.equal(nightStatus.statusText, 'Closed Now');
});
