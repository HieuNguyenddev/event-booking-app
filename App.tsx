import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { onboardingSlides } from './src/data/onboarding';
import { useAppFonts } from './src/hooks/useAppFonts';
import { EventDetailsScreen } from './src/screens/EventDetailsScreen';
import { EventListScreen } from './src/screens/EventListScreen';
import { EventsScreen } from './src/screens/EventsScreen';
import { FilterScreen } from './src/screens/FilterScreen';
import { InviteFriendScreen } from './src/screens/InviteFriendScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { NotificationScreen } from './src/screens/NotificationScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { SplashScreen } from './src/screens/SplashScreen';
import { UserProfileScreen, type UserTab } from './src/screens/UserProfileScreen';
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
  | 'events'
  | 'filter'
  | 'eventList'
  | 'profile'
  | 'user'
  | 'notifications'
  | 'invite';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [returnTo, setReturnTo] = useState<Screen>('search');
  const [eventFrom, setEventFrom] = useState<Screen>('home');
  const [userTab, setUserTab] = useState<UserTab>('about');
  const [profileFrom, setProfileFrom] = useState<Screen>('home');
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
          onOpenEvent={() => {
            setEventFrom('home');
            setScreen('event');
          }}
          onOpenMap={() => setScreen('map')}
          onOpenSearch={() => setScreen('search')}
          onOpenEvents={() => setScreen('events')}
          onOpenFilter={() => {
            setReturnTo('home');
            setScreen('filter');
          }}
          onOpenProfile={() => {
            setProfileFrom('home');
            setScreen('profile');
          }}
          onOpenNotifications={() => setScreen('notifications')}
        />
      ) : screen === 'notifications' && fontsLoaded ? (
        <NotificationScreen onBack={() => setScreen('home')} />
      ) : screen === 'profile' && fontsLoaded ? (
        <ProfileScreen
          onBack={() => setScreen(profileFrom)}
          onOpenUser={() => {
            setReturnTo('profile');
            setUserTab('about');
            setScreen('user');
          }}
        />
      ) : screen === 'user' && fontsLoaded ? (
        <UserProfileScreen
          tab={userTab}
          onChangeTab={setUserTab}
          onBack={() => setScreen(returnTo)}
          onOpenProfile={() => {
            setProfileFrom('user');
            setScreen('profile');
          }}
          onOpenEvent={() => {
            setEventFrom('user');
            setScreen('event');
          }}
        />
      ) : screen === 'filter' && fontsLoaded ? (
        <FilterScreen onClose={() => setScreen(returnTo)} onApply={() => setScreen('eventList')} />
      ) : screen === 'eventList' && fontsLoaded ? (
        <EventListScreen
          onBack={() => setScreen(returnTo)}
          onSearch={() => setScreen('search')}
          onOpenEvent={() => {
            setEventFrom('home');
            setScreen('event');
          }}
        />
      ) : screen === 'events' && fontsLoaded ? (
        <EventsScreen
          onBack={() => setScreen('home')}
          onExplore={() => {
            setReturnTo('events');
            setScreen('eventList');
          }}
        />
      ) : screen === 'search' && fontsLoaded ? (
        <SearchScreen
          onBack={() => setScreen('home')}
          onOpenEvent={() => {
            setEventFrom('home');
            setScreen('event');
          }}
          onOpenFilter={() => {
            setReturnTo('search');
            setScreen('filter');
          }}
        />
      ) : screen === 'map' && fontsLoaded ? (
        <MapScreen onBack={() => setScreen('home')} />
      ) : screen === 'event' && fontsLoaded ? (
        <EventDetailsScreen
          onBack={() => setScreen(eventFrom)}
          onOpenOrganizer={() => {
            setReturnTo('event');
            setUserTab('about');
            setScreen('user');
          }}
          onOpenFriends={() => setScreen('invite')}
        />
      ) : screen === 'invite' && fontsLoaded ? (
        <InviteFriendScreen onClose={() => setScreen('event')} onInvite={() => setScreen('event')} />
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
