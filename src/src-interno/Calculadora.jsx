import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const Calculadora = () => {
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Calculadora;
