import type { ImageSourcePropType } from 'react-native';

export type ListedEvent = {
  id: string;
  time: string;
  title: string;
  place: string;
  image: ImageSourcePropType;
};

export const listedEvents: ListedEvent[] = [
  {
    id: 'jo-malone',
    time: 'Wed, Apr 28 · 5:30 PM',
    title: "Jo Malone London's Mother's Day Presents",
    place: 'Radius Gallery · Santa Cruz, CA',
    image: require('../../assets/search-hands.png'),
  },
  {
    id: 'smooth-jazz',
    time: 'Sat, May 1 · 2:00 PM',
    title: 'A Virtual Evening of Smooth Jazz',
    place: 'Lot 13 · Oakland, CA',
    image: require('../../assets/search-jazz.png'),
  },
  {
    id: 'womens',
    time: 'Sat, Apr 24 · 1:30 PM',
    title: "Women's Leadership Conference 2021",
    place: '53 Bush St · San Francisco, CA',
    image: require('../../assets/search-woman.png'),
  },
  {
    id: 'kids',
    time: 'Fri, Apr 23 · 6:00 PM',
    title: 'International Kids Safe Parents Night Out',
    place: 'Lot 13 · Oakland, CA',
    image: require('../../assets/search-kids.png'),
  },
  {
    id: 'jimi',
    time: 'Mon, Jun 21 · 10:00 PM',
    title: 'Collectivity Plays the Music of Jimi',
    place: 'Longboard Margarita Bar',
    image: require('../../assets/event-sneaker.png'),
  },
  {
    id: 'gala',
    time: 'Sun, Apr 25 · 10:15 AM',
    title: 'International Gala Music Festival',
    place: '36 Guild Street London, UK',
    image: require('../../assets/search-gala.png'),
  },
];
