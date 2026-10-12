import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { notifications, type NotificationItem } from '../data/notifications';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
};

export function NotificationScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [items, setItems] = useState<NotificationItem[]>(notifications);

  function remove(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={styles.title}>Notification</Text>
        <Pressable
          hitSlop={8}
          onPress={() => setItems((current) => (current.length ? [] : notifications))}
        >
          <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
        </Pressable>
      </View>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Image source={require('../../assets/empty-notifications.png')} style={styles.emptyArt} resizeMode="contain" />
          <Text style={styles.emptyTitle}>No Notifications!</Text>
          <Text style={styles.emptyBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
          </Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + 24 }]}
        >
          {items.map((item) => (
            <View key={item.id} style={styles.row}>
              <Image source={item.image} style={styles.avatar} />
              <View style={styles.body}>
                <View style={styles.top}>
                  <Text style={styles.message}>
                    <Text style={styles.name}>{item.name} </Text>
                    {item.message}
                  </Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                {item.invite ? (
                  <View style={styles.actions}>
                    <Pressable style={styles.reject} onPress={() => remove(item.id)}>
                      <Text style={styles.rejectText}>Reject</Text>
                    </Pressable>
                    <Pressable style={styles.accept} onPress={() => remove(item.id)}>
                      <Text style={styles.acceptText}>Accept</Text>
                    </Pressable>
                  </View>
                ) : null}
              </View>
            </View>
          ))}
        </ScrollView>
      )}
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
    gap: 8,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  list: {
    paddingTop: 12,
    paddingHorizontal: 16,
    gap: 18,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F2F2F6',
  },
  body: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  message: {
    flex: 1,
    color: colors.text,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
  name: {
    fontFamily: 'Nunito_800ExtraBold',
  },
  time: {
    color: '#A0A0AE',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  reject: {
    width: 108,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4E4EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectText: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  accept: {
    width: 108,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
    marginTop: -40,
  },
  emptyArt: {
    width: 210,
    height: 220,
  },
  emptyTitle: {
    marginTop: 8,
    color: '#2D3142',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
  },
  emptyBody: {
    marginTop: 10,
    textAlign: 'center',
    color: '#8C8C9A',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 22,
  },
});
