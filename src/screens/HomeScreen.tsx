import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CategoryList } from '../components/CategoryList';
import { EventCard } from '../components/EventCard';
import { HomeHeader } from '../components/HomeHeader';
import { NearbyEventCard } from '../components/NearbyEventCard';
import { SectionHeader } from '../components/SectionHeader';
import { categories, nearbyEvent, upcomingEvents } from '../data/home';
import { colors } from '../theme';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <HomeHeader />
      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        <CategoryList categories={categories} />
        <SectionHeader title="Upcoming Events" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cards}
        >
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
        <SectionHeader title="Nearby You" />
        <NearbyEventCard event={nearbyEvent} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    marginTop: -22,
  },
  cards: {
    paddingHorizontal: 20,
    gap: 14,
  },
});
