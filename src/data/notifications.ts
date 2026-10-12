import type { ImageSourcePropType } from 'react-native';

export type NotificationItem = {
  id: string;
  name: string;
  message: string;
  time: string;
  image: ImageSourcePropType;
  invite?: boolean;
};

export const notifications: NotificationItem[] = [
  {
    id: 'david',
    name: 'David Silbia',
    message: "Invite Jo Malone London's Mother's",
    time: 'Just now',
    image: require('../../assets/notif-david.png'),
    invite: true,
  },
  {
    id: 'adnan',
    name: 'Adnan Safi',
    message: 'Started following you',
    time: '5 min ago',
    image: require('../../assets/notif-adnan.png'),
  },
  {
    id: 'joan',
    name: 'Joan Baker',
    message: 'Invite A virtual Evening of Smooth Jazz',
    time: '20 min ago',
    image: require('../../assets/notif-joan.png'),
    invite: true,
  },
  {
    id: 'ronald',
    name: 'Ronald C. Kinch',
    message: 'Like you events',
    time: '1 hr ago',
    image: require('../../assets/notif-ronald.png'),
  },
  {
    id: 'clara',
    name: 'Clara Tolson',
    message: 'Join your Event Gala Music Festival',
    time: '9 hr ago',
    image: require('../../assets/notif-clara.png'),
  },
  {
    id: 'jennifer',
    name: 'Jennifer Fritz',
    message: 'Invite you International Kids Safe',
    time: 'Tue, 5:10 pm',
    image: require('../../assets/notif-jennifer.png'),
    invite: true,
  },
  {
    id: 'eric',
    name: 'Eric G. Prickett',
    message: 'Started following you',
    time: 'Wed, 3:30 pm',
    image: require('../../assets/notif-eric.png'),
  },
];
