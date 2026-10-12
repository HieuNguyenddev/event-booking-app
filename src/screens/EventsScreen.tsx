import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

type Tab = 'upcoming' | 'past';

type Props = {
  onBack: () => void;
  onExplore: () => void;
};

export function EventsScreen({ onBack, onExplore }: Props) {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<Tab>('upcoming');
  const title = tab === 'upcoming' ? 'No Upcoming Event' : 'No Past Event';

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={8} style={styles.headerSide}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={styles.headerTitle}>Events</Text>
        <View style={styles.headerSide}>
          <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
        </View>
      </View>

      <View style={styles.switcher}>
        <Pressable
          style={[styles.tab, tab === 'upcoming' && styles.tabActive]}
          onPress={() => setTab('upcoming')}
        >
          <Text style={[styles.tabText, tab === 'upcoming' && styles.tabTextActive]}>UPCOMING</Text>
        </Pressable>
        <Pressable style={[styles.tab, tab === 'past' && styles.tabActive]} onPress={() => setTab('past')}>
          <Text style={[styles.tabText, tab === 'past' && styles.tabTextActive]}>PAST EVENTS</Text>
        </Pressable>
      </View>

      <View style={styles.empty}>
        <Image source={require('../../assets/empty-events.png')} style={styles.art} resizeMode="contain" />
        <Text style={styles.emptyTitle}>{title}</Text>
        <Text style={styles.emptyBody}>Lorem ipsum dolor sit amet,{'\n'}consectetur</Text>
      </View>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <PrimaryButton label="EXPLORE EVENTS" onPress={onExplore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSide: {
    width: 32,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  switcher: {
    marginTop: 22,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2F3F7',
    borderRadius: 24,
    padding: 4,
  },
  tab: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  tabActive: {
    backgroundColor: colors.white,
    shadowColor: '#6B6B8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  tabText: {
    color: '#B0B3BE',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  tabTextActive: {
    color: colors.accent,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  art: {
    width: 220,
    height: 180,
  },
  emptyTitle: {
    marginTop: 8,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  emptyBody: {
    marginTop: 10,
    textAlign: 'center',
    color: '#9A9AAB',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    paddingTop: 8,
  },
});
