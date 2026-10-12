import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { searchEvents } from '../data/search';
import { cardShadow, colors } from '../theme';

type Props = {
  onBack: () => void;
  onOpenEvent?: () => void;
  onOpenFilter?: () => void;
};

export function SearchScreen({ onBack, onOpenEvent, onOpenFilter }: Props) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return searchEvents;
    return searchEvents.filter((event) => event.title.toLowerCase().includes(text));
  }, [query]);

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#B0B3BE" />
          <View style={styles.divider} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
            placeholderTextColor="#B0B3BE"
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <Pressable style={styles.filters} onPress={onOpenFilter}>
          <Ionicons name="options" size={14} color={colors.white} />
          <Text style={styles.filtersText}>Filters</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + 24 }]}
        keyboardShouldPersistTaps="handled"
      >
        {results.map((event) => (
          <Pressable key={event.id} style={styles.card} onPress={onOpenEvent}>
            <Image source={event.image} style={styles.image} resizeMode="cover" />
            <View style={styles.body}>
              <Text style={styles.time}>{event.time}</Text>
              <Text style={styles.title}>{event.title}</Text>
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
    gap: 8,
  },
  headerTitle: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  searchRow: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchBox: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
    ...cardShadow,
  },
  divider: {
    width: 1,
    height: 18,
    backgroundColor: '#E4E4EC',
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
  },
  filters: {
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 6,
  },
  filtersText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
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
    alignItems: 'center',
    gap: 12,
    ...cardShadow,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EDE7F6',
  },
  body: {
    flex: 1,
  },
  time: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  title: {
    marginTop: 4,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    lineHeight: 22,
  },
});
