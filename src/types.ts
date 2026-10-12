import type { ComponentProps } from 'react';
import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ImageSourcePropType } from 'react-native';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export type Category = {
  label: string;
  color: string;
  icon: IconName;
};

export type UpcomingEvent = {
  id: string;
  title: string;
  place: string;
  going: string;
  day: string;
  month: string;
  image: ImageSourcePropType;
};

export type NearbyEvent = {
  id: string;
  title: string;
  place: string;
  time: string;
  image: ImageSourcePropType;
};
