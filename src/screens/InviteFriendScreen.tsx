import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { friends } from '../data/friends';
import { colors } from '../theme';

type Props = {
  onClose: () => void;
  onInvite: () => void;
};

export function InviteFriendScreen({ onClose, onInvite }: Props) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>(() => friends.filter((friend) => friend.selected).map((friend) => friend.id));

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return friends;
    return friends.filter((friend) => friend.name.toLowerCase().includes(text));
  }, [query]);

  function toggle(id: string) {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <View style={styles.screen}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={[styles.sheet, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.handle} />
        <Text style={styles.title}>Invite Friend</Text>
        <View style={styles.search}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor="#B0B3BE"
            style={styles.input}
          />
          <Ionicons name="search" size={18} color={colors.accent} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
          {results.map((friend) => {
            const active = selected.includes(friend.id);
            return (
              <Pressable key={friend.id} style={styles.row} onPress={() => toggle(friend.id)}>
                <Image source={friend.image} style={styles.avatar} />
                <View style={styles.body}>
                  <Text style={styles.name}>{friend.name}</Text>
                  <Text style={styles.followers}>{friend.followers}</Text>
                </View>
                <Ionicons name="checkmark-circle" size={24} color={active ? colors.accent : '#D5D5DE'} />
              </Pressable>
            );
          })}
        </ScrollView>
        <Pressable style={[styles.invite, { bottom: insets.bottom + 16 }]} onPress={onInvite}>
          <Text style={styles.inviteText}>INVITE</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1C1C28',
  },
  backdrop: {
    height: 18,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
  },
  handle: {
    alignSelf: 'center',
    width: 42,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E4E4EC',
    marginBottom: 16,
  },
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },
  search: {
    marginTop: 16,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E6E6EE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
  },
  list: {
    paddingTop: 16,
    paddingBottom: 88,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F6',
  },
  body: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  followers: {
    marginTop: 2,
    color: '#8A8A9A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
  },
  invite: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 28,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  inviteText: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    letterSpacing: 0.6,
  },
});
