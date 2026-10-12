import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';
import { cardShadow, colors } from '../theme';
import type { IconName } from '../types';

const AVATARS = ['#F3C3A3', '#C9A27A'];

type Props = {
  onBack: () => void;
  onOpenOrganizer?: () => void;
};

export function EventDetailsScreen({ onBack, onOpenOrganizer }: Props) {
  const insets = useSafeAreaInsets();
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 96 }}>
        <View style={styles.heroWrap}>
          <Image source={require('../../assets/upback.png')} style={styles.hero} resizeMode="cover" />
          <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
            <Pressable onPress={onBack} hitSlop={8} style={styles.back}>
              <Ionicons name="chevron-back" size={22} color={colors.white} />
              <Text style={styles.topTitle}>Event Details</Text>
            </Pressable>
            <Pressable style={styles.save} onPress={() => setSaved((current) => !current)}>
              <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={18} color={colors.purple} />
            </Pressable>
          </View>
        </View>

        <View style={styles.goingCard}>
          <View style={styles.avatars}>
            {AVATARS.map((color, index) => (
              <View
                key={color}
                style={[styles.avatar, { backgroundColor: color, marginLeft: index === 0 ? 0 : -10 }]}
              />
            ))}
          </View>
          <Text style={styles.going}>+20 Going</Text>
          <Pressable style={styles.invite}>
            <Text style={styles.inviteText}>Invite</Text>
          </Pressable>
        </View>

        <Text style={styles.title}>International Band{'\n'}Music Concert</Text>

        <InfoRow icon="calendar-outline" title="14 December, 2021" subtitle="Tuesday, 4:00PM - 9:00PM" />
        <InfoRow icon="location" title="Gala Convention Center" subtitle="36 Guild Street London, UK" />

        <Pressable style={styles.organizer} onPress={onOpenOrganizer}>
          <Image source={require('../../assets/avatar-david.png')} style={styles.organizerPhoto} resizeMode="cover" />
          <View style={styles.organizerBody}>
            <Text style={styles.organizerName}>David Silbia</Text>
            <Text style={styles.organizerRole}>Organizer</Text>
          </View>
          <Pressable style={styles.follow} onPress={() => setFollowing((current) => !current)}>
            <Text style={styles.followText}>{following ? 'Following' : 'Follow'}</Text>
          </Pressable>
        </Pressable>

        <Text style={styles.aboutTitle}>About Event</Text>
        <Text style={styles.about}>
          Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food
          from local food trucks will be available for purchase.{' '}
          <Text style={styles.readMore}>Read More</Text>
        </Text>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 12 }]}>
        <PrimaryButton label="BUY TICKET $120" onPress={() => undefined} />
      </View>
    </View>
  );
}

function InfoRow({ icon, title, subtitle }: { icon: IconName; title: string; subtitle: string }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={18} color={colors.accent} />
      </View>
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heroWrap: {
    height: 280,
    backgroundColor: '#2A1020',
  },
  hero: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  topTitle: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
  },
  save: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goingCard: {
    marginTop: -28,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...cardShadow,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colors.white,
  },
  going: {
    flex: 1,
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
  invite: {
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  inviteText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  title: {
    marginTop: 22,
    marginHorizontal: 20,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    lineHeight: 38,
  },
  infoRow: {
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  infoIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  infoSubtitle: {
    marginTop: 2,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
  },
  organizer: {
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  organizerPhoto: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E7A07A',
  },
  organizerBody: {
    flex: 1,
  },
  organizerName: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  organizerRole: {
    marginTop: 2,
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
  },
  follow: {
    backgroundColor: '#EEF0FF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  followText: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  aboutTitle: {
    marginTop: 26,
    marginHorizontal: 20,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
  },
  about: {
    marginTop: 10,
    marginHorizontal: 20,
    color: '#3E3E4A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 24,
  },
  readMore: {
    color: colors.accent,
    fontFamily: 'Nunito_800ExtraBold',
  },
  footer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
  },
});
