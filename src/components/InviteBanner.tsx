import { Image, StyleSheet, View } from 'react-native';

export function InviteBanner() {
  return (
    <View style={styles.wrap}>
      <Image
        source={require('../../assets/invite-banner.png')}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 18,
    marginHorizontal: 20,
    borderRadius: 18,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: 150,
  },
});
