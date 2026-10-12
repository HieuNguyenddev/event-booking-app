import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { searchEvents } from '../data/search';
import { aboutText, reviews, reviewText } from '../data/profile';
import { cardShadow, colors } from '../theme';

export type UserTab = 'about' | 'event' | 'reviews';

type Props = {
  tab: UserTab;
  onChangeTab: (tab: UserTab) => void;
  onBack: () => void;
  onOpenEvent?: () => void;
  onOpenProfile: () => void;
};

const TABS: { id: UserTab; label: string }[] = [
  { id: 'about', label: 'ABOUT' },
  { id: 'event', label: 'EVENT' },
  { id: 'reviews', label: 'REVIEWS' },
];

export function UserProfileScreen({ tab, onChangeTab, onBack, onOpenEvent, onOpenProfile }: Props) {
  const insets = useSafeAreaInsets();
  const [following, setFollowing] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Ionicons name="chevron-back" size={24} color={colors.text} />
          </Pressable>
          <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
        </View>

        <Image source={require('../../assets/avatar-david.png')} style={styles.avatar} />
        <Text style={styles.name}>David Silbia</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>350</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statDivider} />
          <Pressable style={styles.stat} onPress={onOpenProfile}>
            <Text style={styles.statValue}>346</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </Pressable>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.follow} onPress={() => setFollowing((current) => !current)}>
            <Ionicons name="person-add" size={16} color={colors.white} />
            <Text style={styles.followText}>{following ? 'Following' : 'Follow'}</Text>
          </Pressable>
          <Pressable style={styles.message}>
            <Ionicons name="chatbubble-ellipses-outline" size={16} color={colors.accent} />
            <Text style={styles.messageText}>Messages</Text>
          </Pressable>
        </View>

        <View style={styles.tabs}>
          {TABS.map((item) => {
            const active = tab === item.id;
            return (
              <Pressable key={item.id} style={styles.tab} onPress={() => onChangeTab(item.id)}>
                <Text style={[styles.tabText, active && styles.tabTextActive]}>{item.label}</Text>
                {active ? <View style={styles.underline} /> : null}
              </Pressable>
            );
          })}
        </View>

        {tab === 'about' ? (
          <Text style={styles.about}>
            {aboutText} <Text style={styles.readMore}>Read More</Text>
          </Text>
        ) : null}

        {tab === 'event' ? (
          <View style={styles.events}>
            {searchEvents.slice(0, 3).map((event) => (
              <Pressable key={event.id} style={styles.card} onPress={onOpenEvent}>
                <Image source={event.image} style={styles.image} />
                <View style={styles.cardBody}>
                  <Text style={styles.time}>{event.time}</Text>
                  <Text style={styles.cardTitle}>{event.title}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : null}

        {tab === 'reviews' ? (
          <View style={styles.reviews}>
            {reviews.map((review) => (
              <View key={review.id} style={styles.review}>
                <View style={styles.reviewTop}>
                  <Image source={require('../../assets/avatar-reviewer.png')} style={styles.reviewAvatar} />
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <View style={styles.stars}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Ionicons
                      key={index}
                      name={index < review.stars ? 'star' : 'star-outline'}
                      size={14}
                      color={index < review.stars ? '#F6B93B' : '#E4E4EC'}
                    />
                  ))}
                </View>
                <Text style={styles.reviewText}>{reviewText}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 8,
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E6E6E6',
  },
  name: {
    marginTop: 14,
    textAlign: 'center',
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },
  stats: {
    marginTop: 14,
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
  actions: {
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 12,
  },
  follow: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  followText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  message: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  messageText: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  tabs: {
    marginTop: 22,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  tabText: {
    color: '#9A9AAB',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    letterSpacing: 0.6,
  },
  tabTextActive: {
    color: colors.accent,
  },
  underline: {
    marginTop: 8,
    height: 3,
    width: 56,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  about: {
    marginTop: 18,
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
  events: {
    marginTop: 8,
    paddingHorizontal: 16,
    gap: 14,
    backgroundColor: '#F7F7FB',
    paddingTop: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    ...cardShadow,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  cardBody: {
    flex: 1,
  },
  time: {
    color: colors.accent,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
  },
  cardTitle: {
    marginTop: 4,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    lineHeight: 22,
  },
  reviews: {
    marginTop: 8,
    paddingHorizontal: 20,
    gap: 22,
  },
  review: {
    gap: 6,
  },
  reviewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E6E6E6',
  },
  reviewName: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
  reviewDate: {
    color: '#A0A0AE',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
  stars: {
    marginLeft: 46,
    flexDirection: 'row',
    gap: 2,
  },
  reviewText: {
    marginLeft: 46,
    color: '#3C3C4A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    lineHeight: 22,
  },
});
