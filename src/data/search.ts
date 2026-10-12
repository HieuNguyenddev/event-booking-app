import type { ImageSourcePropType } from 'react-native';

export type SearchEvent = {
  id: string;
  title: string;
  time: string;
  image: ImageSourcePropType;
};

export const searchEvents: SearchEvent[] = [
  {
    id: 'smooth-jazz',
    title: 'A virtual evening of smooth jazz',
    time: '1ST MAY- SAT -2:00 PM',
    image: require('../../assets/search-jazz.png'),
  },
  {
    id: 'jo-malone',
    title: "Jo malone london's mother's day",
    time: '1ST MAY- SAT -2:00 PM',
    image: require('../../assets/search-hands.png'),
  },
  {
    id: 'womens',
    title: "Women's leadership conference",
    time: '1ST MAY- SAT -2:00 PM',
    image: require('../../assets/search-woman.png'),
  },
  {
    id: 'kids',
    title: 'International kids safe parents night out',
    time: '1ST MAY- SAT -2:00 PM',
    image: require('../../assets/search-kids.png'),
  },
  {
    id: 'gala',
    title: 'International gala music festival',
    time: '1ST MAY- SAT -2:00 PM',
    image: require('../../assets/search-gala.png'),
  },
];
