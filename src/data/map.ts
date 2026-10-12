import type { IconName } from '../types';

export type MapPin = {
  id: string;
  title: string;
  icon: IconName;
  color: string;
  top: `${number}%`;
  left: `${number}%`;
};

export const mapChips: { label: string; icon: IconName; color: string }[] = [
  { label: 'Sports', icon: 'basketball', color: '#F1665E' },
  { label: 'Music', icon: 'musical-notes', color: '#7B61FF' },
  { label: 'Food', icon: 'close', color: '#29D697' },
];

export const mapPins: MapPin[] = [
  { id: 'music', title: 'Music concert', icon: 'musical-notes', color: '#7B61FF', top: '24%', left: '10%' },
  { id: 'football', title: 'Football match', icon: 'american-football', color: '#F1665E', top: '34%', left: '58%' },
  { id: 'food', title: 'Food festival', icon: 'close', color: '#29D697', top: '44%', left: '8%' },
  { id: 'art', title: 'Art show', icon: 'color-palette', color: '#3DCEF5', top: '56%', left: '34%' },
];
