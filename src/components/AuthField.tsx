import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import type { IconName } from '../types';
import { colors } from '../theme';

type Props = {
  icon: IconName;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  onToggleSecure?: () => void;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'words';
};

export function AuthField({
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onToggleSecure,
  keyboardType = 'default',
  autoCapitalize = 'none',
}: Props) {
  return (
    <View style={styles.field}>
      <Ionicons name={icon} size={18} color="#B8B8C7" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#B8B8C7"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={styles.input}
      />
      {onToggleSecure ? (
        <Pressable onPress={onToggleSecure} hitSlop={8}>
          <Ionicons name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} size={18} color="#B8B8C7" />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6E6EE',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
  },
});
