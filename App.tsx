import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAppFonts } from './src/hooks/useAppFonts';
import HomeScreen from './src/screens/HomeScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { SplashScreen } from './src/screens/SplashScreen';

type Screen = 'splash' | 'onboarding' | 'home';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [fontsLoaded] = useAppFonts();
  const showHome = screen === 'home' && fontsLoaded;
  const showOnboarding = screen === 'onboarding' && fontsLoaded;

  return (
    <SafeAreaProvider>
      {showHome ? (
        <HomeScreen />
      ) : showOnboarding ? (
        <OnboardingScreen onDone={() => setScreen('home')} />
      ) : (
        <SplashScreen onPress={() => fontsLoaded && setScreen('onboarding')} />
      )}
      <StatusBar style={showHome || showOnboarding ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}
