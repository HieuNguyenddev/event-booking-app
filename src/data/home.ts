import type { Category, NearbyEvent, UpcomingEvent } from '../types';

export const categories: Category[] = [
  { label: 'Sports', color: '#F08B82', icon: 'basketball' },
  { label: 'Music', color: '#F4B183', icon: 'musical-notes' },
  { label: 'Food', color: '#4AD6A4', icon: 'close' },
  { label: 'Art', color: '#3DCEF5', icon: 'color-palette' },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'band-music',
    title: 'International Band Music',
    place: '36 Guild Street London, UK',
    going: '+20 Going',
    day: '10',
    month: 'JUNE',
    image: require('../../assets/event-hands.png'),
  },
  {
    id: 'jo-malone',
    title: "Jo Malone London's Mother's Day",
    place: 'Radius Gallery • Santa Cruz',
    going: '+20 Going',
    day: '10',
    month: 'JUNE',
    image: require('../../assets/event-sneaker.png'),
  },
];

export const nearbyEvent: NearbyEvent = {
  id: 'gala',
  title: 'International Gala Music Festival',
  place: '36 Guild Street London, UK',
  time: '10 June - 9:00 PM',
  image: require('../../assets/nearby-thumb.png'),
};
