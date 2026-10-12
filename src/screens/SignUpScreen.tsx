import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthField } from '../components/AuthField';
import { AuthScreen } from '../components/AuthScreen';
import { PrimaryButton } from '../components/PrimaryButton';
import { SocialButton } from '../components/SocialButton';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onSignUp: () => void;
  onSignIn: () => void;
};

export function SignUpScreen({ onBack, onSignUp, onSignIn }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <AuthScreen onBack={onBack}>
      <Text style={styles.title}>Sign up</Text>
      <AuthField icon="person-outline" value={name} onChangeText={setName} placeholder="Full name" autoCapitalize="words" />
      <View style={styles.gap} />
      <AuthField
        icon="mail-outline"
        value={email}
        onChangeText={setEmail}
        placeholder="abc@email.com"
        keyboardType="email-address"
      />
      <View style={styles.gap} />
      <AuthField
        icon="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        placeholder="Your password"
        secureTextEntry={hidePassword}
        onToggleSecure={() => setHidePassword((current) => !current)}
      />
      <View style={styles.gap} />
      <AuthField
        icon="lock-closed-outline"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry={hideConfirm}
        onToggleSecure={() => setHideConfirm((current) => !current)}
      />
      <View style={styles.button}>
        <PrimaryButton label="SIGN UP" onPress={onSignUp} />
      </View>
      <Text style={styles.or}>OR</Text>
      <SocialButton brand="google" label="Login with Google" />
      <View style={styles.gap} />
      <SocialButton brand="facebook" label="Login with Facebook" />
      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={onSignIn}>
          Signin
        </Text>
      </Text>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 22,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 26,
  },
  gap: {
    height: 16,
  },
  button: {
    marginTop: 28,
  },
  or: {
    marginVertical: 18,
    textAlign: 'center',
    color: '#C4C4CE',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  footer: {
    marginTop: 22,
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  link: {
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
  },
});
