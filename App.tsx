import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { onboardingSlides } from './src/data/onboarding';
import { useAppFonts } from './src/hooks/useAppFonts';
import HomeScreen from './src/screens/HomeScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { SplashScreen } from './src/screens/SplashScreen';

type Screen = 'splash' | 'onboarding' | 'home';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [slide, setSlide] = useState(0);
  const [fontsLoaded] = useAppFonts();
  const showHome = screen === 'home' && fontsLoaded;
  const showOnboarding = screen === 'onboarding' && fontsLoaded;
  const lightStatus = showHome || (showOnboarding && slide === 0);

  function finishOnboarding() {
    setScreen('home');
  }

  function goNext() {
    if (slide < onboardingSlides.length - 1) {
      setSlide(slide + 1);
      return;
    }
    finishOnboarding();
  }

  return (
    <SafeAreaProvider>
      {showHome ? (
        <HomeScreen />
      ) : showOnboarding ? (
        <OnboardingScreen index={slide} onSkip={finishOnboarding} onNext={goNext} />
      ) : (
        <SplashScreen onPress={() => fontsLoaded && setScreen('onboarding')} />
      )}
      <StatusBar style={lightStatus ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}
