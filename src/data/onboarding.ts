import type { ComponentType } from 'react';

import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

export type OnboardingSlide = {
  title: string;
  body: string;
  Preview: ComponentType;
};

const body = 'In publishing and graphic design, Lorem is\na placeholder text commonly';

export const onboardingSlides: OnboardingSlide[] = [
  {
    title: 'Explore Upcoming and\nNearby Events',
    body,
    Preview: HomeScreen,
  },
  {
    title: 'Web Have Modern Events\nCalendar Feature',
    body,
    Preview: CalendarScreen,
  },
  {
    title: 'To Look Up More Events or\nActivities Nearby By Map',
    body,
    Preview: MapScreen,
  },
];
