import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';
import type { IconName } from '../types';

const OPTIONS: { label: string; icon: IconName; color: string; tint: string }[] = [
  { label: 'Copy Link', icon: 'link', color: '#F2F3F8', tint: '#5C5C6E' },
  { label: 'WhatsApp', icon: 'logo-whatsapp', color: '#25D366', tint: colors.white },
  { label: 'Facebook', icon: 'logo-facebook', color: '#1877F2', tint: colors.white },
  { label: 'Messenger', icon: 'chatbubble-ellipses', color: '#7B61FF', tint: colors.white },
  { label: 'Twitter', icon: 'logo-twitter', color: '#1DA1F2', tint: colors.white },
  { label: 'Instagram', icon: 'logo-instagram', color: '#E1306C', tint: colors.white },
  { label: 'Skype', icon: 'logo-skype', color: '#00AFF0', tint: colors.white },
  { label: 'Message', icon: 'chatbubble', color: '#34C759', tint: colors.white },
];

type Props = {
  onClose: () => void;
  onOpenFriends: () => void;
};

export function ShareSheet({ onClose, onOpenFriends }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.layer}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={[styles.sheet, { paddingBottom: insets.bottom + 16 }]}>
        <Text style={styles.title}>Share with friends</Text>
        <View style={styles.grid}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.label}
              style={styles.option}
              onPress={option.label === 'Message' ? onOpenFriends : undefined}
            >
              <View style={[styles.icon, { backgroundColor: option.color }]}>
                <Ionicons name={option.icon} size={22} color={option.tint} />
              </View>
              <Text style={styles.label}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancel} onPress={onClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(18, 13, 38, 0.35)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 22,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
  },
  grid: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  icon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#3C3C4A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
  cancel: {
    marginTop: 4,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#F4F5F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    letterSpacing: 0.6,
  },
});
