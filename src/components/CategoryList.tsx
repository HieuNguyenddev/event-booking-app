import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import type { Category } from '../types';
import { colors } from '../theme';

type Props = {
  categories: Category[];
};

export function CategoryList({ categories }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {categories.map((category) => (
        <View key={category.label} style={[styles.chip, { backgroundColor: category.color }]}>
          <Ionicons name={category.icon} size={16} color={colors.white} />
          <Text style={styles.label}>{category.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    gap: 10,
    paddingBottom: 6,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 14,
  },
  label: {
    color: colors.white,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
});
