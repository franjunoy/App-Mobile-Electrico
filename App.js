import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 'center',
    alignItems: 'center',
    width: 375,
    height: 667,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20
  }
});
