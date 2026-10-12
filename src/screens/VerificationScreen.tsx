import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AuthScreen } from '../components/AuthScreen';
import { CodeInput } from '../components/CodeInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export function VerificationScreen({ onBack, onContinue }: Props) {
  const [code, setCode] = useState(['4', '4', '', '']);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((current) => (current > 0 ? current - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const time = `0:${String(seconds).padStart(2, '0')}`;

  return (
    <AuthScreen onBack={onBack}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>
        We’ve send you the verification{'\n'}code on +1 2620 0323 7631
      </Text>
      <CodeInput value={code} onChange={setCode} />
      <View style={styles.button}>
        <PrimaryButton label="CONTINUE" onPress={onContinue} />
      </View>
      <Pressable
        style={styles.resend}
        disabled={seconds > 0}
        onPress={() => setSeconds(20)}
      >
        <Text style={styles.resendText}>
          Re-send code in <Text style={styles.time}>{seconds > 0 ? time : '0:00'}</Text>
        </Text>
      </Pressable>
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
  resend: {
    marginTop: 22,
    alignItems: 'center',
  },
  resendText: {
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  time: {
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
  },
});
