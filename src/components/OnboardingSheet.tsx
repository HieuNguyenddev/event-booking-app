import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { onboardingSlide } from '../data/onboarding';
import { colors } from '../theme';

type Props = {
  onSkip: () => void;
  onNext: () => void;
};

export function OnboardingSheet({ onSkip, onNext }: Props) {
  const insets = useSafeAreaInsets();
  const { title, body, pageCount, activePage } = onboardingSlide;

  return (
    <View style={[styles.sheet, { paddingBottom: insets.bottom + 28 }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <View style={styles.footer}>
        <Pressable onPress={onSkip} hitSlop={12}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
        <Pressable onPress={onNext} hitSlop={12}>
          <Text style={styles.next}>Next</Text>
        </Pressable>
        <View style={styles.dots} pointerEvents="none">
          {Array.from({ length: pageCount }, (_, index) => (
            <View key={index} style={[styles.dot, index === activePage && styles.dotActive]} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.sheet,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 42,
    paddingHorizontal: 28,
  },
  title: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 26,
    lineHeight: 34,
    textAlign: 'center',
  },
  body: {
    marginTop: 16,
    color: 'rgba(255,255,255,0.85)',
    fontFamily: 'Nunito_500Medium',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  footer: {
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dots: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  skip: {
    color: 'rgba(255,255,255,0.72)',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },
  next: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  dotActive: {
    backgroundColor: colors.white,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
