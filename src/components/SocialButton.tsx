import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { cardShadow, colors } from '../theme';

type Props = {
  label: string;
  brand: 'google' | 'facebook';
};

export function SocialButton({ label, brand }: Props) {
  return (
    <Pressable style={styles.button}>
      {brand === 'google' ? <GoogleMark /> : <FacebookMark />}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

function GoogleMark() {
  return <Ionicons name="logo-google" size={20} color="#EA4335" />;
}

function FacebookMark() {
  return (
    <View style={styles.facebook}>
      <Ionicons name="logo-facebook" size={16} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    ...cardShadow,
    shadowOpacity: 0.08,
  },
  label: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 15,
  },
  facebook: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
