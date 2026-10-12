import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { cardShadow, colors } from '../theme';
import type { UpcomingEvent } from '../types';
import { PlaceLabel } from './PlaceLabel';

const AVATAR_COLORS = ['#F3C3A3', '#E7A57A', '#C98562'];

type Props = {
  event: UpcomingEvent;
  onPress?: () => void;
};

export function EventCard({ event, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={event.image} style={styles.image} resizeMode="cover" />
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{event.day}</Text>
          <Text style={styles.dateMonth}>{event.month}</Text>
        </View>
        <View style={styles.bookmark}>
          <Ionicons name="bookmark" size={16} color={colors.coral} />
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {event.title}
      </Text>
      <View style={styles.goingRow}>
        <View style={styles.avatars}>
          {AVATAR_COLORS.map((color, index) => (
            <View
              key={color}
              style={[styles.avatar, { backgroundColor: color, marginLeft: index === 0 ? 0 : -8 }]}
            />
          ))}
        </View>
        <Text style={styles.goingText}>{event.going}</Text>
      </View>
      <View style={styles.place}>
        <PlaceLabel place={event.place} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 230,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 8,
    paddingBottom: 14,
    ...cardShadow,
  },
  imageWrap: {
    height: 140,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: colors.imageFallback,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dateBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    minWidth: 42,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  dateDay: {
    color: colors.coral,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    lineHeight: 18,
  },
  dateMonth: {
    color: colors.coral,
    fontFamily: 'Nunito_700Bold',
    fontSize: 10,
    letterSpacing: 0.3,
  },
  bookmark: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 12,
    marginHorizontal: 6,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  goingRow: {
    marginTop: 8,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  goingText: {
    color: colors.purple,
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
  },
  place: {
    marginTop: 6,
    marginHorizontal: 6,
  },
});
