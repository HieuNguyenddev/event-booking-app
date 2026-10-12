import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.seeAll}>
        <Text style={styles.seeAllText}>See All</Text>
        <Ionicons name="chevron-forward" size={14} color={colors.muted} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 18,
    marginBottom: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAllText: {
    color: colors.muted,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
});
