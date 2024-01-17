import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const PagarFactura = () => {
  return (
    <View style={styles.container}>
      <Text>PagarFactura</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PagarFactura;
