import type { IconName } from '../types';

export type MenuItem = {
  id: string;
  label: string;
  icon: IconName;
  badge?: string;
};

export const menuUser = {
  name: 'Ashfak Sayem',
  avatar: require('../../assets/avatar-ashfak.png'),
};

export const menuItems: MenuItem[] = [
  { id: 'profile', label: 'My Profile', icon: 'person-outline' },
  { id: 'message', label: 'Massage', icon: 'chatbubble-outline', badge: '3' },
  { id: 'calendar', label: 'Calender', icon: 'calendar-outline' },
  { id: 'bookmark', label: 'Bookmark', icon: 'bookmark-outline' },
  { id: 'contact', label: 'Contact Us', icon: 'mail-outline' },
  { id: 'settings', label: 'Settings', icon: 'settings-outline' },
  { id: 'help', label: 'Helps & FAQs', icon: 'help-circle-outline' },
  { id: 'signout', label: 'Sign Out', icon: 'log-out-outline' },
];
