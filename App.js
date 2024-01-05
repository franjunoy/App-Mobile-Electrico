import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { top: 25 }
});
