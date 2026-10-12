import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthField } from '../components/AuthField';
import { PrimaryButton } from '../components/PrimaryButton';
import { SocialButton } from '../components/SocialButton';
import { colors } from '../theme';

type Props = {
  onSignIn: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
};

export function SignInScreen({ onSignIn, onSignUp, onForgotPassword }: Props) {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [remember, setRemember] = useState(true);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 36, paddingBottom: insets.bottom + 24 },
        ]}
      >
        <Image source={require('../../assets/eventhub-mark.png')} style={styles.mark} resizeMode="contain" />
        <Text style={styles.brand}>EventHub</Text>
        <Text style={styles.heading}>Sign in</Text>

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

        <View style={styles.options}>
          <View style={styles.remember}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ false: '#E4E4EC', true: colors.accent }}
              thumbColor={colors.white}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <Pressable hitSlop={8} onPress={onForgotPassword}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View style={styles.button}>
          <PrimaryButton label="SIGN IN" onPress={onSignIn} />
        </View>

        <Text style={styles.or}>OR</Text>
        <SocialButton brand="google" label="Login with Google" />
        <View style={styles.gap} />
        <SocialButton brand="facebook" label="Login with Facebook" />

        <Text style={styles.footer}>
          Don’t have an account?{' '}
          <Text style={styles.signUp} onPress={onSignUp}>
            Sign up
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 24,
  },
  mark: {
    width: 72,
    height: 72,
    alignSelf: 'center',
  },
  brand: {
    marginTop: 8,
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 32,
  },
  heading: {
    marginTop: 28,
    marginBottom: 18,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },
  gap: {
    height: 16,
  },
  options: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rememberText: {
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  forgot: {
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  button: {
    marginTop: 22,
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
  signUp: {
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
  },
});
