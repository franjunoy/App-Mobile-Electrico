import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Menu from './src/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { top: 25 }
});
