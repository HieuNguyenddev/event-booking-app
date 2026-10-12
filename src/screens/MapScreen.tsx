import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { mapChips, mapPins } from '../data/map';
import { cardShadow, colors } from '../theme';

type Props = {
  onBack?: () => void;
};

export default function MapScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <MapCanvas />
      <View style={[styles.top, { paddingTop: insets.top + 8 }]}>
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Ionicons name="chevron-back" size={20} color={colors.text} />
            </Pressable>
            <Text style={styles.searchText}>Find for food or restaurant...</Text>
          </View>
          <View style={styles.locate}>
            <Ionicons name="locate" size={20} color={colors.white} />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {mapChips.map((chip) => (
            <View key={chip.label} style={styles.chip}>
              <Ionicons name={chip.icon} size={14} color={chip.color} />
              <Text style={styles.chipLabel}>{chip.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {mapPins.map((pin) => (
        <View key={pin.id} style={[styles.pin, { top: pin.top, left: pin.left }]}>
          <View style={[styles.pinIcon, { backgroundColor: pin.color }]}>
            <Ionicons name={pin.icon} size={16} color={colors.white} />
          </View>
          <View style={styles.pinTail} />
        </View>
      ))}

      <View style={[styles.layers, { bottom: insets.bottom + 150 }]}>
        <Ionicons name="options" size={18} color={colors.white} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.cards, { bottom: insets.bottom + 16 }]}
        contentContainerStyle={styles.cardsContent}
      >
        <View style={styles.card}>
          <Image source={require('../../assets/event-hands.png')} style={styles.cardImage} resizeMode="cover" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTime}>Wed, Apr 28 · 5:30 PM</Text>
            <Text style={styles.cardTitle}>Jo Malone London's Mother's Day Presents</Text>
            <View style={styles.cardPlace}>
              <Ionicons name="location-sharp" size={12} color={colors.muted} />
              <Text style={styles.cardPlaceText} numberOfLines={1}>
                Radius Gallery · Santa Cruz, CA
              </Text>
            </View>
          </View>
          <Ionicons name="bookmark" size={18} color={colors.coral} />
        </View>
        <View style={styles.cardPeek} />
      </ScrollView>
    </View>
  );
}

function MapCanvas() {
  return (
    <View style={styles.canvas}>
      <View style={[styles.road, styles.roadH1]} />
      <View style={[styles.road, styles.roadH2]} />
      <View style={[styles.road, styles.roadV1]} />
      <View style={[styles.road, styles.roadV2]} />
      <Text style={[styles.street, styles.streetVertical, { top: '34%', left: '8%' }]}>164th Ave NE</Text>
      <Text style={[styles.street, { top: '42%', left: '28%' }]}>Northup Way</Text>
      <Text style={[styles.area, { top: '38%', left: '58%' }]}>NORTHEAST{'\n'}BELLEVUE</Text>
      <Text style={[styles.street, { top: '62%', left: '48%' }]}>NE 8th St</Text>
      <Text style={[styles.street, styles.streetVertical, { top: '68%', left: '18%' }]}>164th Ave NE</Text>
      <Text style={styles.google}>Google</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  canvas: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#F7F8FA',
  },
  road: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  roadH1: { top: '44%', left: 0, right: 0, height: 18 },
  roadH2: { top: '64%', left: 0, right: 0, height: 10 },
  roadV1: { top: 0, bottom: 0, left: '22%', width: 14 },
  roadV2: { top: 0, bottom: 0, left: '70%', width: 12 },
  street: {
    position: 'absolute',
    color: '#C5C8D0',
    fontFamily: 'Nunito_700Bold',
    fontSize: 11,
  },
  streetVertical: {
    transform: [{ rotate: '-90deg' }],
  },
  area: {
    position: 'absolute',
    color: '#C5C8D0',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 13,
    letterSpacing: 1,
    textAlign: 'center',
  },
  google: {
    position: 'absolute',
    left: 16,
    bottom: 132,
    color: '#D0D3DA',
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  top: {
    paddingHorizontal: 16,
  },
  searchRow: {
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
  searchText: {
    color: '#B0B3BE',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  locate: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    ...cardShadow,
  },
  chips: {
    gap: 10,
    paddingVertical: 14,
  },
  chip: {
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 6,
    ...cardShadow,
  },
  chipLabel: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  pin: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...cardShadow,
  },
  pinIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinTail: {
    position: 'absolute',
    bottom: -5,
    width: 12,
    height: 12,
    backgroundColor: colors.white,
    transform: [{ rotate: '45deg' }],
  },
  layers: {
    position: 'absolute',
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    ...cardShadow,
  },
  cards: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  cardsContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 320,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...cardShadow,
  },
  cardImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#F8D5C4',
  },
  cardBody: {
    flex: 1,
  },
  cardTime: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  cardTitle: {
    marginTop: 2,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
  cardPlace: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardPlaceText: {
    flex: 1,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
  cardPeek: {
    width: 36,
    height: 92,
    borderRadius: 18,
    backgroundColor: colors.white,
    ...cardShadow,
  },
});
