import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, View } from 'react-native';

import { cardShadow, colors } from '../theme';
import type { NearbyEvent } from '../types';
import { PlaceLabel } from './PlaceLabel';

type Props = {
  event: NearbyEvent;
};

export function NearbyEventCard({ event }: Props) {
  return (
    <View style={styles.card}>
      <Image source={event.image} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.time}>{event.time}</Text>
        <Text style={styles.title}>{event.title}</Text>
        <PlaceLabel place={event.place} />
      </View>
      <Ionicons name="bookmark" size={20} color={colors.coral} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    ...cardShadow,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.imageFallback,
  },
  body: {
    flex: 1,
    gap: 2,
  },
  time: {
    color: colors.purple,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
});
