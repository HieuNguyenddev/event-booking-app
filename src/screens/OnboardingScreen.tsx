import { StyleSheet, View } from 'react-native';

import { OnboardingSheet } from '../components/OnboardingSheet';
import HomeScreen from './HomeScreen';

type Props = {
  onDone: () => void;
};

export function OnboardingScreen({ onDone }: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.preview} pointerEvents="none">
        <HomeScreen />
      </View>
      <OnboardingSheet onSkip={onDone} onNext={onDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
});
