import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { aboutText, interests } from '../data/profile';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onOpenUser: () => void;
};

export function ProfileScreen({ onBack, onOpenUser }: Props) {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Header title="Profile" onBack={onBack} />
        <Image source={require('../../assets/avatar-david.png')} style={styles.avatar} />
        <Text style={styles.name}>Ashfak Sayem</Text>
        <Stats onOpenUser={onOpenUser} />
        <Pressable style={styles.edit}>
          <Ionicons name="pencil" size={16} color={colors.accent} />
          <Text style={styles.editText}>Edit Profile</Text>
        </Pressable>

        <Text style={styles.section}>About Me</Text>
        <Text style={styles.about}>
          {aboutText} <Text style={styles.readMore}>Read More ⌄</Text>
        </Text>

        <View style={styles.interestHeader}>
          <Text style={styles.section}>Interest</Text>
          <Pressable style={styles.change}>
            <Ionicons name="pencil" size={12} color={colors.accent} />
            <Text style={styles.changeText}>CHANGE</Text>
          </Pressable>
        </View>
        <View style={styles.chips}>
          {interests.map((item) => (
            <View key={item.label} style={[styles.chip, { backgroundColor: item.color }]}>
              <Text style={styles.chipText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function Header({ title, onBack }: { title?: string; onBack: () => void }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <Pressable onPress={onBack} hitSlop={8}>
        <Ionicons name="chevron-back" size={24} color={colors.text} />
      </Pressable>
      {title ? <Text style={styles.headerTitle}>{title}</Text> : <View style={styles.headerTitle} />}
    </View>
  );
}

function Stats({ onOpenUser }: { onOpenUser: () => void }) {
  return (
    <View style={styles.stats}>
      <Pressable style={styles.stat} onPress={onOpenUser}>
        <Text style={styles.statValue}>350</Text>
        <Text style={styles.statLabel}>Following</Text>
      </Pressable>
      <View style={styles.statDivider} />
      <View style={styles.stat}>
        <Text style={styles.statValue}>346</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 12,
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E6E6E6',
  },
  name: {
    marginTop: 16,
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },
  stats: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 28,
  },
  stat: {
    alignItems: 'center',
    minWidth: 80,
  },
  statValue: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  statLabel: {
    marginTop: 2,
    color: '#8A8A9A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#E4E4EC',
  },
  edit: {
    alignSelf: 'center',
    marginTop: 18,
    height: 48,
    paddingHorizontal: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  editText: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  section: {
    marginTop: 28,
    marginHorizontal: 20,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
  },
  about: {
    marginTop: 10,
    marginHorizontal: 20,
    color: '#3C3C4A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 24,
  },
  readMore: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
  },
  interestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  change: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EEF0FF',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  changeText: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 11,
    letterSpacing: 0.4,
  },
  chips: {
    marginTop: 14,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
  },
});
