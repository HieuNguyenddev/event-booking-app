import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';
import type { IconName } from '../types';

const CATEGORIES: { id: string; label: string; icon: IconName }[] = [
  { id: 'sports', label: 'Sports', icon: 'basketball' },
  { id: 'music', label: 'Music', icon: 'musical-notes' },
  { id: 'art', label: 'Art', icon: 'color-palette' },
  { id: 'food', label: 'Food', icon: 'restaurant' },
  { id: 'food-2', label: 'Food', icon: 'restaurant' },
];

const TIMES = ['Today', 'Tomorrow', 'This week'];
const BARS = [16, 28, 22, 36, 30, 42, 26, 34, 20, 38, 18, 30];

type Props = {
  onClose: () => void;
  onApply: () => void;
};

export function FilterScreen({ onClose, onApply }: Props) {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<string[]>(['sports', 'art']);
  const [time, setTime] = useState('Tomorrow');

  function toggleCategory(id: string) {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function reset() {
    setSelected([]);
    setTime('Tomorrow');
  }

  return (
    <View style={styles.screen}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={[styles.sheet, { paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.handle} />
        <Text style={styles.title}>Filter</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
            {CATEGORIES.map((category) => {
              const active = selected.includes(category.id);
              return (
                <Pressable key={category.id} style={styles.category} onPress={() => toggleCategory(category.id)}>
                  <View style={[styles.categoryIcon, active && styles.categoryIconActive]}>
                    <Ionicons name={category.icon} size={20} color={active ? colors.white : '#C5C6D0'} />
                  </View>
                  <Text style={styles.categoryLabel}>{category.label}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <Text style={styles.section}>Time & Date</Text>
          <View style={styles.times}>
            {TIMES.map((item) => {
              const active = time === item;
              return (
                <Pressable key={item} style={[styles.timeChip, active && styles.timeChipActive]} onPress={() => setTime(item)}>
                  <Text style={[styles.timeText, active && styles.timeTextActive]}>{item}</Text>
                </Pressable>
              );
            })}
          </View>
          <Pressable style={styles.calendar}>
            <Ionicons name="calendar-outline" size={18} color={colors.accent} />
            <Text style={styles.calendarText}>Choose from calender</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.accent} />
          </Pressable>

          <Text style={styles.section}>Location</Text>
          <Pressable style={styles.location}>
            <View style={styles.locationIcon}>
              <Ionicons name="location" size={16} color={colors.accent} />
            </View>
            <Text style={styles.locationText}>New Yourk, USA</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.accent} />
          </Pressable>

          <View style={styles.priceHeader}>
            <Text style={styles.section}>Select price range</Text>
            <Text style={styles.price}>$20-$120</Text>
          </View>
          <View style={styles.chart}>
            {BARS.map((height, index) => (
              <View key={index} style={[styles.bar, { height }]} />
            ))}
          </View>
          <View style={styles.slider}>
            <View style={styles.sliderTrack} />
            <View style={styles.sliderFill} />
            <View style={[styles.knob, { left: '22%' }]}>
              <Ionicons name="swap-horizontal" size={14} color={colors.accent} />
            </View>
            <View style={[styles.knob, { left: '68%' }]}>
              <Ionicons name="swap-horizontal" size={14} color={colors.accent} />
            </View>
          </View>
        </ScrollView>

        <View style={styles.actions}>
          <Pressable style={styles.reset} onPress={reset}>
            <Text style={styles.resetText}>RESET</Text>
          </Pressable>
          <Pressable style={styles.apply} onPress={onApply}>
            <Text style={styles.applyText}>APPLY</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#1C1C28',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
  },
  sheet: {
    maxHeight: '94%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
  },
  handle: {
    alignSelf: 'center',
    width: 42,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E4E4EC',
    marginBottom: 12,
  },
  title: {
    marginHorizontal: 20,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },
  content: {
    paddingBottom: 12,
  },
  categories: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 16,
  },
  category: {
    alignItems: 'center',
    width: 64,
    gap: 8,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#ECECF2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  categoryIconActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  categoryLabel: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
  },
  section: {
    marginTop: 22,
    marginHorizontal: 20,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  times: {
    marginTop: 14,
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
  },
  timeChip: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ECECF2',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  timeChipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  timeText: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  timeTextActive: {
    color: colors.white,
  },
  calendar: {
    marginTop: 12,
    marginHorizontal: 20,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ECECF2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },
  calendarText: {
    flex: 1,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  location: {
    marginTop: 14,
    marginHorizontal: 20,
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ECECF2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },
  locationIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 15,
  },
  priceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    marginTop: 22,
    marginRight: 20,
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  chart: {
    marginTop: 16,
    marginHorizontal: 36,
    height: 46,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bar: {
    width: 10,
    borderRadius: 4,
    backgroundColor: '#E6E7EC',
  },
  slider: {
    marginTop: 8,
    marginHorizontal: 28,
    height: 28,
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E4E6F0',
  },
  sliderFill: {
    position: 'absolute',
    left: '26%',
    right: '26%',
    height: 3,
    backgroundColor: '#D9DCF8',
  },
  knob: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.accent,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  reset: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6E6EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    letterSpacing: 0.4,
  },
  apply: {
    flex: 1.4,
    height: 52,
    borderRadius: 14,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    letterSpacing: 0.4,
  },
});
