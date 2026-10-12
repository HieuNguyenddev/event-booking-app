import { Image, Pressable, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
};

export function SplashScreen({ onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={require('../../assets/eventhub-splash.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
