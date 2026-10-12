import type { ImageSourcePropType } from 'react-native';

export type Friend = {
  id: string;
  name: string;
  followers: string;
  image: ImageSourcePropType;
  selected: boolean;
};

export const friends: Friend[] = [
  { id: 'alex', name: 'Alex Lee', followers: '2k Follwers', image: require('../../assets/friend-alex.png'), selected: true },
  { id: 'micheal', name: 'Micheal Ulasi', followers: '56 Follwers', image: require('../../assets/friend-micheal.png'), selected: false },
  { id: 'cristofer', name: 'Cristofer', followers: '300 Follwers', image: require('../../assets/friend-cristofer.png'), selected: true },
  { id: 'david', name: 'David Silbia', followers: '5k Follwers', image: require('../../assets/friend-david.png'), selected: false },
  { id: 'ashfak', name: 'Ashfak Sayem', followers: '402 Follwers', image: require('../../assets/friend-ashfak.png'), selected: true },
  { id: 'rocks', name: 'Rocks Velkeinjen', followers: '893 Follwers', image: require('../../assets/friend-rocks.png'), selected: false },
  { id: 'roman', name: 'Roman Kutepov', followers: '225 Follwers', image: require('../../assets/friend-roman.png'), selected: true },
  { id: 'nolan', name: 'Cristofer Nolan', followers: '322 Follwers', image: require('../../assets/friend-nolan.png'), selected: false },
  { id: 'zenifero', name: 'Zenifero Bolex', followers: '2k Follwers', image: require('../../assets/avatar-reviewer.png'), selected: true },
];
