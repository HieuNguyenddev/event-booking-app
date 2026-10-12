import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { listedEvents } from '../data/eventList';
import { cardShadow, colors } from '../theme';

type Props = {
  onBack: () => void;
  onSearch: () => void;
  onOpenEvent: () => void;
};

export function EventListScreen({ onBack, onSearch, onOpenEvent }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={styles.title}>Events</Text>
        <Pressable onPress={onSearch} hitSlop={8}>
          <Ionicons name="search" size={22} color={colors.text} />
        </Pressable>
        <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + 20 }]}
      >
        {listedEvents.map((event) => (
          <Pressable key={event.id} style={styles.card} onPress={onOpenEvent}>
            <Image source={event.image} style={styles.image} resizeMode="cover" />
            <View style={styles.body}>
              <Text style={styles.time}>{event.time}</Text>
              <Text style={styles.cardTitle}>{event.title}</Text>
              <View style={styles.place}>
                <Ionicons name="location" size={13} color={colors.muted} />
                <Text style={styles.placeText} numberOfLines={1}>
                  {event.place}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 14,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 10,
    flexDirection: 'row',
    gap: 12,
    ...cardShadow,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 14,
    backgroundColor: '#F8D5C4',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  time: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  cardTitle: {
    marginTop: 4,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    lineHeight: 21,
  },
  place: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  placeText: {
    flex: 1,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
});
