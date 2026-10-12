import { useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { colors } from '../theme';

const LENGTH = 4;

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

export function CodeInput({ value, onChange }: Props) {
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    const firstEmpty = value.findIndex((digit) => digit === '');
    inputs.current[firstEmpty === -1 ? LENGTH - 1 : firstEmpty]?.focus();
  }, []);

  function update(index: number, digit: string) {
    const next = [...value];
    next[index] = digit;
    onChange(next);
    if (digit && index < LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  }

  return (
    <View style={styles.row}>
      {value.map((digit, index) => {
        const active = digit === '' && value.slice(0, index).every(Boolean);
        return (
          <TextInput
            key={index}
            ref={(node) => {
              inputs.current[index] = node;
            }}
            value={digit}
            onChangeText={(text) => update(index, text.replace(/\D/g, '').slice(-1))}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
                inputs.current[index - 1]?.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
            placeholder="–"
            placeholderTextColor="#D0D0D8"
            style={[styles.box, active && styles.boxActive]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  box: {
    flex: 1,
    height: 64,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6E6EE',
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  boxActive: {
    borderColor: colors.accent,
    borderWidth: 1.5,
  },
});
