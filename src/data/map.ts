import type { IconName } from '../types';

export type MapPin = {
  id: string;
  icon: IconName;
  color: string;
  top: `${number}%`;
  left: `${number}%`;
};

export const mapChips: { label: string; icon: IconName; color: string }[] = [
  { label: 'Sports', icon: 'basketball', color: '#F1665E' },
  { label: 'Music', icon: 'musical-notes', color: '#7B61FF' },
  { label: 'Food', icon: 'restaurant', color: '#29D697' },
  { label: 'Art', icon: 'color-palette', color: '#3DCEF5' },
];

export const mapPins: MapPin[] = [
  { id: 'food', icon: 'restaurant', color: '#29D697', top: '28%', left: '46%' },
  { id: 'music', icon: 'musical-notes', color: '#5B6CFF', top: '36%', left: '18%' },
  { id: 'art', icon: 'color-palette', color: '#3DCEF5', top: '46%', left: '62%' },
  { id: 'sports', icon: 'basketball', color: '#F1665E', top: '58%', left: '34%' },
];
