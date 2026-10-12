import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthField } from '../components/AuthField';
import { AuthScreen } from '../components/AuthScreen';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onSend: () => void;
};

export function ResetPasswordScreen({ onBack, onSend }: Props) {
  const [email, setEmail] = useState('');

  return (
    <AuthScreen onBack={onBack}>
      <Text style={styles.title}>Resset Password</Text>
      <Text style={styles.subtitle}>
        Please enter your email address to{'\n'}request a password reset
      </Text>
      <AuthField
        icon="mail-outline"
        value={email}
        onChangeText={setEmail}
        placeholder="abc@email.com"
        keyboardType="email-address"
      />
      <View style={styles.button}>
        <PrimaryButton label="SEND" onPress={onSend} />
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 26,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 28,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    marginTop: 28,
  },
});
