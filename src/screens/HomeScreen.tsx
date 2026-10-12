import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { CategoryList } from '../components/CategoryList';
import { EventCard } from '../components/EventCard';
import { HomeHeader } from '../components/HomeHeader';
import { HomeTabBar } from '../components/HomeTabBar';
import { InviteBanner } from '../components/InviteBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SideMenu } from '../components/SideMenu';
import { categories, upcomingEvents } from '../data/home';
import { colors } from '../theme';

type Props = {
  onSignOut?: () => void;
  onOpenEvent?: () => void;
  onOpenMap?: () => void;
  onOpenSearch?: () => void;
  onOpenEvents?: () => void;
  onOpenFilter?: () => void;
  onOpenProfile?: () => void;
};

export default function HomeScreen({
  onSignOut,
  onOpenEvent,
  onOpenMap,
  onOpenSearch,
  onOpenEvents,
  onOpenFilter,
  onOpenProfile,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.screen}>
      <HomeHeader onMenuPress={() => setMenuOpen(true)} onSearchPress={onOpenSearch} onFilterPress={onOpenFilter} />
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.content}
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
            <EventCard key={event.id} event={event} onPress={onOpenEvent} />
          ))}
        </ScrollView>
        <InviteBanner />
        <SectionHeader title="Nearby You" />
      </ScrollView>
      <HomeTabBar
        onTabPress={(label) => {
          if (label === 'Map') onOpenMap?.();
          if (label === 'Events') onOpenEvents?.();
          if (label === 'Profile') onOpenProfile?.();
        }}
      />
      {menuOpen ? (
        <SideMenu
          onClose={() => setMenuOpen(false)}
          onSignOut={() => {
            setMenuOpen(false);
            onSignOut?.();
          }}
          onOpenProfile={() => {
            setMenuOpen(false);
            onOpenProfile?.();
          }}
        />
      ) : null}
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
  content: {
    paddingBottom: 28,
  },
  cards: {
    paddingHorizontal: 20,
    gap: 14,
  },
});
