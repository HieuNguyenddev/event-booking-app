import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { menuItems, menuUser } from '../data/menu';
import { colors } from '../theme';

type Props = {
  onClose: () => void;
  onSignOut: () => void;
};

export function SideMenu({ onClose, onSignOut }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.layer}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={[styles.drawer, { paddingTop: insets.top + 28, paddingBottom: insets.bottom + 24 }]}>
        <Image source={menuUser.avatar} style={styles.avatar} />
        <Text style={styles.name}>{menuUser.name}</Text>

        <View style={styles.list}>
          {menuItems.map((item) => (
            <Pressable
              key={item.id}
              style={styles.row}
              onPress={item.id === 'signout' ? onSignOut : undefined}
            >
              <View style={styles.iconWrap}>
                <Ionicons name={item.icon} size={22} color="#3A3A44" />
                {item.badge ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                ) : null}
              </View>
              <Text style={styles.label}>{item.label}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.upgrade}>
          <Text style={styles.crown}>♛</Text>
          <Text style={styles.upgradeText}>Upgrade Pro</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFill,
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
  },
  drawer: {
    width: '78%',
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    shadowColor: '#1A1A2E',
    shadowOffset: { width: 8, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E6E6E6',
  },
  name: {
    marginTop: 16,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  list: {
    marginTop: 28,
    gap: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconWrap: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#F5A24C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 10,
  },
  label: {
    color: '#2C2C36',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  upgrade: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#E7FBFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  crown: {
    color: '#2ED3EA',
    fontSize: 16,
  },
  upgradeText: {
    color: '#2ED3EA',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
});
