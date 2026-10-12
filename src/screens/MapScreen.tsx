import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { mapChips, mapPins } from '../data/map';
import { cardShadow, colors } from '../theme';

export default function MapScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <MapCanvas />
      <View style={[styles.top, { paddingTop: insets.top + 8 }]}>
        <View style={styles.searchRow}>
          <View style={styles.circleButton}>
            <Ionicons name="chevron-back" size={20} color={colors.text} />
          </View>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={16} color={colors.muted} />
            <Text style={styles.searchText}>Search event, location ect.</Text>
          </View>
          <View style={[styles.circleButton, styles.filterButton]}>
            <Ionicons name="options" size={18} color={colors.white} />
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
            <Ionicons name={pin.icon} size={14} color={colors.white} />
          </View>
          <View>
            <Text style={styles.ticket}>Ticket: $30</Text>
            <Text style={styles.pinTitle}>{pin.title}</Text>
          </View>
        </View>
      ))}

      <View style={[styles.locate, { bottom: insets.bottom + 168 }]}>
        <Ionicons name="locate-outline" size={22} color={colors.purple} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.cards, { bottom: insets.bottom + 16 }]}
        contentContainerStyle={styles.cardsContent}
      >
        <View style={styles.card}>
          <Image source={require('../../assets/map-art.png')} style={styles.cardImage} resizeMode="cover" />
          <View style={styles.bookmark}>
            <Ionicons name="bookmark" size={16} color="#F1665E" />
          </View>
        </View>
        <View style={[styles.card, styles.cardPeek]} />
      </ScrollView>
    </View>
  );
}

function MapCanvas() {
  return (
    <View style={styles.canvas}>
      <View style={[styles.road, styles.roadH1]} />
      <View style={[styles.road, styles.roadH2]} />
      <View style={[styles.road, styles.roadH3]} />
      <View style={[styles.road, styles.roadV1]} />
      <View style={[styles.road, styles.roadV2]} />
      <View style={styles.park} />
      <Text style={[styles.label, { top: '30%', left: '14%' }]}>116th Ave NE</Text>
      <Text style={[styles.label, { top: '48%', left: '58%' }]}>NORTHEAST{'\n'}BELLEVUE</Text>
      <Text style={[styles.label, { top: '62%', left: '20%' }]}>Northup Way</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF1F4',
  },
  canvas: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#F3F5F7',
  },
  road: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  roadH1: { top: '28%', left: 0, right: 0, height: 14 },
  roadH2: { top: '46%', left: 0, right: 0, height: 10 },
  roadH3: { top: '68%', left: 0, right: 0, height: 12 },
  roadV1: { top: 0, bottom: 0, left: '28%', width: 12 },
  roadV2: { top: 0, bottom: 0, left: '72%', width: 16 },
  park: {
    position: 'absolute',
    top: '50%',
    left: '36%',
    width: 70,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#E3F6EA',
  },
  label: {
    position: 'absolute',
    color: '#B0B4BE',
    fontFamily: 'Nunito_700Bold',
    fontSize: 11,
  },
  top: {
    paddingHorizontal: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  circleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...cardShadow,
  },
  filterButton: {
    backgroundColor: colors.purple,
  },
  searchBox: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
    ...cardShadow,
  },
  searchText: {
    color: colors.muted,
    fontFamily: 'Nunito_500Medium',
    fontSize: 13,
  },
  chips: {
    gap: 10,
    paddingVertical: 14,
  },
  chip: {
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 6,
    ...cardShadow,
  },
  chipLabel: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
  },
  pin: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    ...cardShadow,
  },
  pinIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticket: {
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 10,
  },
  pinTitle: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 13,
  },
  locate: {
    position: 'absolute',
    right: 16,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.white,
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
    width: 280,
    height: 132,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#D7EEF6',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardPeek: {
    width: 72,
    backgroundColor: '#F6C445',
  },
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
