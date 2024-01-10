import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const MisConsumos = () => {
  return (
    <View style={styles.container}>
      <Text>Cuanto llevas consumiendo</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MisConsumos;
