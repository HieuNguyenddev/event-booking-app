import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { onboardingSlides } from './src/data/onboarding';
import { useAppFonts } from './src/hooks/useAppFonts';
import { EventDetailsScreen } from './src/screens/EventDetailsScreen';
import { EventsScreen } from './src/screens/EventsScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { SplashScreen } from './src/screens/SplashScreen';
import { VerificationScreen } from './src/screens/VerificationScreen';

type Screen =
  | 'splash'
  | 'onboarding'
  | 'signin'
  | 'signup'
  | 'verify'
  | 'reset'
  | 'home'
  | 'event'
  | 'map'
  | 'search'
  | 'events';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [slide, setSlide] = useState(0);
  const [fontsLoaded] = useAppFonts();
  const showHome = screen === 'home' && fontsLoaded;
  const showOnboarding = screen === 'onboarding' && fontsLoaded;
  const lightStatus = showHome || screen === 'event' || (showOnboarding && slide === 0);

  function finishOnboarding() {
    setScreen('signin');
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
        <HomeScreen
          onSignOut={() => setScreen('signin')}
          onOpenEvent={() => setScreen('event')}
          onOpenMap={() => setScreen('map')}
          onOpenSearch={() => setScreen('search')}
          onOpenEvents={() => setScreen('events')}
        />
      ) : screen === 'events' && fontsLoaded ? (
        <EventsScreen onBack={() => setScreen('home')} onExplore={() => setScreen('home')} />
      ) : screen === 'search' && fontsLoaded ? (
        <SearchScreen onBack={() => setScreen('home')} onOpenEvent={() => setScreen('event')} />
      ) : screen === 'map' && fontsLoaded ? (
        <MapScreen onBack={() => setScreen('home')} />
      ) : screen === 'event' && fontsLoaded ? (
        <EventDetailsScreen onBack={() => setScreen('home')} />
      ) : screen === 'signin' && fontsLoaded ? (
        <SignInScreen
          onSignIn={() => setScreen('home')}
          onSignUp={() => setScreen('signup')}
          onForgotPassword={() => setScreen('reset')}
        />
      ) : screen === 'signup' && fontsLoaded ? (
        <SignUpScreen
          onBack={() => setScreen('signin')}
          onSignIn={() => setScreen('signin')}
          onSignUp={() => setScreen('verify')}
        />
      ) : screen === 'verify' && fontsLoaded ? (
        <VerificationScreen onBack={() => setScreen('signup')} onContinue={() => setScreen('home')} />
      ) : screen === 'reset' && fontsLoaded ? (
        <ResetPasswordScreen onBack={() => setScreen('signin')} onSend={() => setScreen('signin')} />
      ) : showOnboarding ? (
        <OnboardingScreen index={slide} onSkip={finishOnboarding} onNext={goNext} />
      ) : (
        <SplashScreen onPress={() => fontsLoaded && setScreen('onboarding')} />
      )}
      <StatusBar style={lightStatus ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}
