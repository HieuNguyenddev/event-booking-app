import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { agenda, marchWeeks, weekDays } from '../data/calendar';
import { colors } from '../theme';

export default function CalendarScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color={colors.text} />
        <View style={styles.titleRow}>
          <Text style={styles.title}>Calendar</Text>
          <Ionicons name="chevron-up" size={14} color={colors.text} />
        </View>
        <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
      </View>

      <View style={styles.monthRow}>
        <Ionicons name="chevron-back" size={18} color={colors.text} />
        <Text style={styles.month}>March 2021</Text>
        <Ionicons name="chevron-forward" size={18} color={colors.text} />
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {marchWeeks.map((week, weekIndex) => (
        <View key={weekIndex} style={styles.weekRow}>
          {week.map((cell, index) => (
            <View key={`${weekIndex}-${index}`} style={styles.cell}>
              <View style={[styles.dayBubble, cell.color ? { backgroundColor: cell.color } : null]}>
                <Text
                  style={[
                    styles.dayText,
                    cell.muted && styles.dayMuted,
                    cell.color ? styles.dayMarked : null,
                  ]}
                >
                  {cell.day}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ))}

      <ScrollView
        style={styles.agenda}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        {agenda.map((day) => (
          <View key={day.id} style={styles.dayBlock}>
            <View style={styles.dayHeading}>
              <View style={styles.dateBadge}>
                <Text style={styles.dateMonth}>{day.month}</Text>
                <Text style={styles.dateDay}>{day.day}</Text>
              </View>
              <Text style={styles.dayLabel}>{day.label}</Text>
            </View>
            {day.items.map((item) => (
              <View key={item.id} style={[styles.eventCard, { backgroundColor: item.color }]}>
                <View style={styles.eventIcon}>
                  <Ionicons name={item.icon} size={18} color={item.color} />
                </View>
                <View style={styles.eventBody}>
                  <Text style={styles.eventTime}>{item.time}</Text>
                  <Text style={styles.eventTitle}>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
  },
  monthRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  month: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
  weekRow: {
    marginTop: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
  },
  cell: {
    flex: 1,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    color: colors.text,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  dayMuted: {
    color: '#C5C6D0',
  },
  dayMarked: {
    color: colors.white,
  },
  agenda: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 20,
  },
  dayBlock: {
    marginTop: 8,
    gap: 10,
  },
  dayHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dateBadge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateMonth: {
    color: colors.purple,
    fontFamily: 'Nunito_700Bold',
    fontSize: 11,
  },
  dateDay: {
    color: colors.purple,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    lineHeight: 18,
  },
  dayLabel: {
    color: colors.muted,
    fontFamily: 'Nunito_700Bold',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  eventCard: {
    marginLeft: 22,
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  eventIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventBody: {
    flex: 1,
  },
  eventTime: {
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
  },
  eventTitle: {
    color: colors.white,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
});
