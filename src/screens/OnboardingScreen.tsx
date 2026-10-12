import { StyleSheet, View } from 'react-native';

import { OnboardingSheet } from '../components/OnboardingSheet';
import { onboardingSlides } from '../data/onboarding';

type Props = {
  index: number;
  onSkip: () => void;
  onNext: () => void;
};

export function OnboardingScreen({ index, onSkip, onNext }: Props) {
  const slide = onboardingSlides[index];
  const Preview = slide.Preview;

  return (
    <View style={styles.screen}>
      <View style={styles.preview} pointerEvents="none">
        <Preview />
      </View>
      <OnboardingSheet
        title={slide.title}
        body={slide.body}
        pageCount={onboardingSlides.length}
        activePage={index}
        onSkip={onSkip}
        onNext={onNext}
      />
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
