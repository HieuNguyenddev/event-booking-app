import type { IconName } from '../types';

export type CalendarCell = {
  day: number;
  muted?: boolean;
  color?: string;
};

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const marchWeeks: CalendarCell[][] = [
  [
    { day: 31, muted: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
  ],
  [
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10, color: '#F1665E' },
    { day: 11 },
    { day: 12 },
    { day: 13 },
  ],
  [
    { day: 14 },
    { day: 15, color: '#F59762' },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
  ],
  [
    { day: 21 },
    { day: 22 },
    { day: 23, color: '#29D697' },
    { day: 24 },
    { day: 25, color: '#7B61FF' },
    { day: 26 },
    { day: 27 },
  ],
  [
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: 1, muted: true },
    { day: 2, muted: true },
    { day: 3, muted: true },
  ],
];

export type AgendaItem = {
  id: string;
  title: string;
  time: string;
  color: string;
  icon: IconName;
};

export type AgendaDay = {
  id: string;
  month: string;
  day: string;
  label: string;
  items: AgendaItem[];
};

export const agenda: AgendaDay[] = [
  {
    id: 'mar-15',
    month: 'Mar',
    day: '15',
    label: 'MON, 15TH MARCH, 2021',
    items: [
      {
        id: 'gala',
        title: 'Gala Music Festival.',
        time: '10:00 am - 12:30 pm',
        color: '#FF8A4C',
        icon: 'musical-notes',
      },
      {
        id: 'women',
        title: "Women's Leadership.",
        time: '10:00 am - 12:30 pm',
        color: '#6C5CE7',
        icon: 'person',
      },
    ],
  },
  {
    id: 'mar-16',
    month: 'Mar',
    day: '16',
    label: 'TUES, 16TH MARCH, 2021',
    items: [],
  },
];
