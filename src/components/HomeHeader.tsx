import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';

export function HomeHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <View style={styles.topRow}>
        <Ionicons name="menu" size={26} color={colors.white} />
        <View style={styles.locationBlock}>
          <View style={styles.locationLabelRow}>
            <Text style={styles.locationLabel}>Current Location</Text>
            <Ionicons name="chevron-down" size={14} color={colors.white} />
          </View>
          <Text style={styles.locationCity}>New York, USA</Text>
        </View>
        <View style={styles.bellWrap}>
          <Ionicons name="notifications-outline" size={24} color={colors.white} />
          <View style={styles.bellDot} />
        </View>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={colors.white} />
          <Text style={styles.searchPlaceholder}>Search...</Text>
        </View>
        <View style={styles.filterButton}>
          <Ionicons name="options-outline" size={16} color={colors.purple} />
          <Text style={styles.filterText}>Filters</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.purple,
    paddingHorizontal: 20,
    paddingBottom: 36,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationBlock: {
    alignItems: 'center',
  },
  locationLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Nunito_500Medium',
    fontSize: 13,
  },
  locationCity: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    marginTop: 1,
  },
  bellWrap: {
    width: 28,
    height: 28,
    alignItems: 'flex-end',
  },
  bellDot: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.bell,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  searchBox: {
    flex: 1,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.18)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  searchPlaceholder: {
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Nunito_500Medium',
    fontSize: 15,
  },
  filterButton: {
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 6,
  },
  filterText: {
    color: colors.purple,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
});
