import type { Category, NearbyEvent, UpcomingEvent } from '../types';

export const categories: Category[] = [
  { label: 'Sports', color: '#F1665E', icon: 'basketball' },
  { label: 'Music', color: '#F59762', icon: 'musical-notes' },
  { label: 'Food', color: '#29D697', icon: 'restaurant' },
  { label: 'Art', color: '#3DCEF5', icon: 'color-palette' },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'jazz-day',
    title: 'International Jazz Day',
    place: '36 Guild Street London, UK',
    going: '+20 Going',
    day: '10',
    month: 'JUNE',
    image: require('../../assets/jazz.png'),
  },
  {
    id: 'band-music',
    title: 'International Band Music',
    place: '36 Guild Street London, UK',
    going: '+20 Going',
    day: '10',
    month: 'JUNE',
    image: require('../../assets/event2.png'),
  },
];

export const nearbyEvent: NearbyEvent = {
  id: 'gala',
  title: 'International Gala Music Festival',
  place: '36 Guild Street London, UK',
  time: '10 June - 9:00 PM',
  image: require('../../assets/nearby-thumb.png'),
};
