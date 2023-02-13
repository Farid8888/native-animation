import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView source={require('./assets/133564-typing.json')} autoPlay loop/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
