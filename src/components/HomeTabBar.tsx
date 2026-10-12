import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';
import type { IconName } from '../types';

const TABS: { label: string; icon: IconName }[] = [
  { label: 'Explore', icon: 'navigate' },
  { label: 'Events', icon: 'calendar-outline' },
  { label: 'Map', icon: 'location-outline' },
  { label: 'Profile', icon: 'person-outline' },
];

type Props = {
  onTabPress?: (label: string) => void;
};

export function HomeTabBar({ onTabPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      {TABS.slice(0, 2).map((tab) => (
        <TabItem key={tab.label} {...tab} active={tab.label === 'Explore'} onPress={onTabPress} />
      ))}
      <View style={styles.fabSlot}>
        <View style={styles.fab}>
          <Ionicons name="add" size={28} color={colors.white} />
        </View>
      </View>
      {TABS.slice(2).map((tab) => (
        <TabItem key={tab.label} {...tab} active={false} onPress={onTabPress} />
      ))}
    </View>
  );
}

function TabItem({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon: IconName;
  active: boolean;
  onPress?: (label: string) => void;
}) {
  const color = active ? colors.purple : '#B8B8C7';
  return (
    <Pressable style={styles.item} onPress={() => onPress?.(label)}>
      <Ionicons name={icon} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F6',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  fabSlot: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    top: -36,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.purple,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
});
