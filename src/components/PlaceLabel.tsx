import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

type Props = {
  place: string;
};

export function PlaceLabel({ place }: Props) {
  return (
    <View style={styles.row}>
      <Ionicons name="location-sharp" size={13} color={colors.muted} />
      <Text style={styles.text} numberOfLines={1}>
        {place}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    flex: 1,
    color: colors.muted,
    fontFamily: 'Nunito_500Medium',
    fontSize: 12,
  },
});
