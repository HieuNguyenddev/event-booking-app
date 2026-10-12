import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';

type Props = {
  onMenuPress?: () => void;
  onSearchPress?: () => void;
  onFilterPress?: () => void;
  onBellPress?: () => void;
};

export function HomeHeader({ onMenuPress, onSearchPress, onFilterPress, onBellPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <View style={styles.topRow}>
        <Pressable onPress={onMenuPress} hitSlop={8}>
          <Ionicons name="menu" size={26} color={colors.white} />
        </Pressable>
        <View style={styles.locationBlock}>
          <View style={styles.locationLabelRow}>
            <Text style={styles.locationLabel}>Current Location</Text>
            <Ionicons name="chevron-down" size={14} color={colors.white} />
          </View>
          <Text style={styles.locationCity}>New York, USA</Text>
        </View>
        <Pressable style={styles.bellWrap} onPress={onBellPress}>
          <Ionicons name="notifications-outline" size={22} color={colors.white} />
        </Pressable>
      </View>

      <View style={styles.searchRow}>
        <Pressable style={styles.searchBox} onPress={onSearchPress}>
          <Ionicons name="search" size={18} color={colors.white} />
          <View style={styles.searchDivider} />
          <Text style={styles.searchPlaceholder}>Search...</Text>
        </Pressable>
        <Pressable style={styles.filterButton} onPress={onFilterPress}>
          <Ionicons name="options-outline" size={16} color={colors.white} />
          <Text style={styles.filterText}>Filters</Text>
        </Pressable>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
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
  searchDivider: {
    width: 1,
    height: 18,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  searchPlaceholder: {
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Nunito_500Medium',
    fontSize: 15,
  },
  filterButton: {
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 6,
  },
  filterText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
});
